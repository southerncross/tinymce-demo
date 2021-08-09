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

  const initialValue = '<p>Hello, <variable>username</variable>, welcome!</p>';
  const [name, setName] = useState('username');
  const onVariableChange = (e) => {
    const value = e.target.value;
    setName(value);
    tinymce.walk(editorRef.current.getBody(), function(n) {
      if (n.nodeType === 3 && n.parentNode && n.parentNode.tagName === 'VARIABLE') {
        n.nodeValue = value;
      }
    }, 'childNodes');
  }
  const onEditorChange = (newValue, editor) => {
    /*global tinymce*/
    tinymce.walk(editor.getBody(), function(n) {
      if (n.nodeType === 3 && n.parentNode && n.parentNode.tagName === 'VARIABLE') {
        setName(n.nodeValue);
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
              'variable { padding: 4px; background-color: #e4e4e4 }',
            branding: false.valueOf,
            extended_valid_elements: 'variable',
            custom_elements: '~variable',
          }}
          onEditorChange={onEditorChange}
        />
      </div>
    </div>
  );
}
