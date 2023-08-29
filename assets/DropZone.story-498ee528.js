import{j as e,F as n,a as p}from"./Form-9bcb654b.js";import{D as s,a as T}from"./DropZone-715d27b1.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./index-8d47fad6.js";import"./tslib.es6-90f6c3e8.js";import"./WithLabel-06725f67.js";const j={title:"DropZone",component:s,parameters:{props:{propTables:[T]}}},o=()=>e(n,{initialValues:{files:[]},onSubmit:r=>alert(JSON.stringify(r)),children:e(p,{children:e(s,{name:"files",label:"File upload",placeholder:"Try dropping some files here, or click to select files to upload."})})}),l=()=>e(n,{initialValues:{files:[]},onSubmit:r=>alert(JSON.stringify(r)),children:e(p,{children:e(s,{name:"files",label:"File upload",placeholder:"Try dropping some files here, or click to select files to upload.",withClearButton:!0})})}),i=()=>e(n,{initialValues:{files:[]},onSubmit:r=>alert(JSON.stringify(r)),children:e(p,{children:e(s,{name:"files",label:"File upload",placeholder:"Try dropping some files here, or click to select files to upload.",multiple:!1})})}),a=()=>e(n,{initialValues:{files:[]},onSubmit:r=>alert(JSON.stringify(r)),children:e(p,{children:e(s,{fileCount:!0,name:"files",label:"File upload",placeholder:"Try dropping some files here, or click to select files to upload."})})}),t=()=>e(n,{initialValues:{files5:[]},onSubmit:r=>alert(JSON.stringify(r)),children:e(p,{children:e(s,{name:"files5",label:"File upload",placeholder:"Try dropping some files here, or click to select files to upload.",disabled:!0})})});var c,d,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    files: []
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form>
        <DropZone name="files" label="File upload" placeholder="Try dropping some files here, or click to select files to upload." />
      </Form>
    </Formik>;
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,f,F;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    files: []
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form>
        <DropZone name="files" label="File upload" placeholder="Try dropping some files here, or click to select files to upload." withClearButton />
      </Form>
    </Formik>;
}`,...(F=(f=l.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var h,y,_;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    files: []
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form>
        <DropZone name="files" label="File upload" placeholder="Try dropping some files here, or click to select files to upload." multiple={false} />
      </Form>
    </Formik>;
}`,...(_=(y=i.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var g,S,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    files: []
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form>
        <DropZone fileCount name="files" label="File upload" placeholder="Try dropping some files here, or click to select files to upload." />
      </Form>
    </Formik>;
}`,...(b=(S=a.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var k,N,D;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    files5: []
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form>
        <DropZone name="files5" label="File upload" placeholder="Try dropping some files here, or click to select files to upload." disabled />
      </Form>
    </Formik>;
}`,...(D=(N=t.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};try{o.displayName="Default",o.__docgenInfo={description:"",displayName:"Default",props:{}}}catch{}try{l.displayName="WithClearButton",l.__docgenInfo={description:"",displayName:"WithClearButton",props:{}}}catch{}try{i.displayName="SingleFileUpload",i.__docgenInfo={description:"",displayName:"SingleFileUpload",props:{}}}catch{}try{a.displayName="WithFileCountForAcceptedAndRejectedFiles",a.__docgenInfo={description:"",displayName:"WithFileCountForAcceptedAndRejectedFiles",props:{}}}catch{}try{t.displayName="Disabled",t.__docgenInfo={description:"",displayName:"Disabled",props:{}}}catch{}export{o as Default,t as Disabled,i as SingleFileUpload,l as WithClearButton,a as WithFileCountForAcceptedAndRejectedFiles,j as default};
//# sourceMappingURL=DropZone.story-498ee528.js.map
