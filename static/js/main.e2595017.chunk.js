(this["webpackJsonptinymce-demo"]=this["webpackJsonptinymce-demo"]||[]).push([[0],{12:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n.n(i),c=n(5),o=n.n(c),r=(n(12),n(6)),l=n(7),s=(n(16),n(1));function d(){var e=Object(i.useRef)(null),t='<p>Name: <span variable-type="text">username</span>!</p><p>Hello <img width="100" height="100" style="opacity: .2" src="'.concat("/tinymce-demo",'/approved.svg"/>world!</p>'),n=Object(i.useState)("username"),a=Object(r.a)(n,2),c=a[0],o=a[1];return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"left",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"username",children:"User name"}),Object(s.jsx)("input",{id:"username",value:c,onChange:function(t){var n=t.target.value;o(n),tinymce.walk(e.current.getBody(),(function(e){if(e.nodeType===Node.TEXT_NODE&&e.parentNode&&e.parentNode.attributes["variable-type"])switch(e.parentNode.attributes["variable-type"].value){case"text":e.nodeValue=n}}),"childNodes")}})]}),Object(s.jsx)("button",{onClick:function(){e.current&&console.log(e.current.getContent())},children:"Log editor content"})]}),Object(s.jsx)("div",{className:"right",children:Object(s.jsx)(l.a,{tinymceScriptSrc:"https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js",onInit:function(t,n){return e.current=n},initialValue:t,init:{height:500,menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",content_style:'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }span[variable-type="text"] { padding: 4px; background-color: #e4e4e4 }',branding:(!1).valueOf,extended_valid_elements:"span[variable-type]"},onEditorChange:function(e,t){tinymce.walk(t.getBody(),(function(e){if(e.nodeType===Node.TEXT_NODE&&e.parentNode&&e.parentNode.attributes["variable-type"])switch(e.parentNode.attributes["variable-type"].value){case"text":o(e.nodeValue)}}),"childNodes")}})})]})}var u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),i(e),a(e),c(e),o(e)}))};o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root")),u()}},[[18,1,2]]]);
//# sourceMappingURL=main.e2595017.chunk.js.map