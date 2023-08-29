import{j as r,F as m,a as p}from"./Form-9bcb654b.js";import{S as o,a as n}from"./SubmitBtn-d926b753.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";const S={title:"SubmitBtn",component:o,parameters:{props:{propTables:[n]}}},t=()=>r(m,{initialValues:{testFiled:"Data was submitted"},onSubmit:a=>alert(JSON.stringify(a)),children:r(p,{children:r(o,{text:"Submit"})})});var e,i,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    testFiled: 'Data was submitted'
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form>
        <SubmitBtn text="Submit" />
      </Form>
    </Formik>;
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};try{t.displayName="Example",t.__docgenInfo={description:"",displayName:"Example",props:{}}}catch{}export{t as Example,S as default};
//# sourceMappingURL=SubmitBtn.story-cc520b6b.js.map
