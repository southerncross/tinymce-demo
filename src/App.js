import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './App.css';

export default function App() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const initialValue = `<p>Name: <span variable-type="text">username</span>!</p><p>Hello <img width="100" height="100" style="opacity: .2" src="${process.env.PUBLIC_URL}/approved.svg"/>world!</p>`;
  const [name, setName] = useState('username');
  const onVariableChange = (e) => {
    const value = e.target.value;
    setName(value);
    tinymce.walk(editorRef.current.getBody(), function(n) {
      if (n.nodeType === Node.TEXT_NODE && n.parentNode && n.parentNode.attributes['variable-type']) {
        switch (n.parentNode.attributes['variable-type'].value) {
          case 'text':
            n.nodeValue = value;
            break;
          default:
            break;
        }
      }
    }, 'childNodes');
  }
  const onEditorChange = (newValue, editor) => {
    /*global tinymce*/
    tinymce.walk(editor.getBody(), function(n) {
      if (n.nodeType === Node.TEXT_NODE && n.parentNode && n.parentNode.attributes['variable-type']) {
        switch (n.parentNode.attributes['variable-type'].value) {
          case 'text':
            setName(n.nodeValue);
            break;
          default:
            break;
        }
      }
    }, 'childNodes');
  };

  return (
    <div className="container">
      <div className="left">
        <div>
          <label htmlFor="username">User name</label>
          <input id="username" value={name} onChange={onVariableChange}/>
        </div>
        <button onClick={log}>Log editor content</button>
      </div>
      <div className="right">
        <Editor
          tinymceScriptSrc="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js"
          onInit={(evt, editor) => editorRef.current = editor}
          initialValue={initialValue}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar: 'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }' +
              'span[variable-type="text"] { padding: 4px; background-color: #e4e4e4 }',
            branding: false.valueOf,
            extended_valid_elements: 'span[variable-type]',
          }}
          onEditorChange={onEditorChange}
        />
      </div>
    </div>
  );
}
