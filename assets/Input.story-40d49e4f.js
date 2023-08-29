import{j as e,F as m,b as d,a as p,c as D}from"./Form-9bcb654b.js";import{I as r,a as $}from"./Input-5a5f074d.js";import"./Autocomplete-d58fc848.js";import"./Checkbox-df8c6ddf.js";import"./DatePicker-91fe7aa6.js";import"./DropZone-715d27b1.js";import"./PhoneInput-c1a7d1a6.js";import"./Radio-fec9d75a.js";import"./Select-065502b9.js";import{S as h}from"./SubmitBtn-d926b753.js";import"./Textarea-1f533b4c.js";import"./Toggle-344dc099.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./WithLabel-06725f67.js";import"./isNativeReflectConstruct-81b4d0cb.js";import"./index-2801d3c9.js";import"./index-8d47fad6.js";import"./tslib.es6-90f6c3e8.js";const re={title:"Input",component:r,parameters:{props:{propTables:[$]}}},i=()=>e(m,{initialValues:{textField:""},onSubmit:t=>alert(JSON.stringify(t)),children:d(p,{children:[e(r,{name:"textField",label:"Input field label",hint:"This is a hint"}),e(h,{text:"Submit"})]})}),a=()=>e(m,{initialValues:{textField:""},onSubmit:t=>alert(JSON.stringify(t)),children:d(p,{styling:"structure",children:[e(r,{name:"textField",label:"Input field label",hint:"This is a hint"}),e(h,{text:"Submit"})]})}),n=()=>e(m,{initialValues:{textField:""},onSubmit:t=>alert(JSON.stringify(t)),children:d(p,{styling:"theme",children:[e(r,{name:"textField",label:"Input field label",hint:"This is a hint"}),e(h,{text:"Submit"})]})}),l=()=>e(m,{initialValues:{textField:""},onSubmit:t=>alert(JSON.stringify(t)),children:e(p,{styling:"theme",children:e(r,{name:"textField",label:"Input field label",placeholder:"Your Name",hint:"This is a hint",required:!0})})}),s=()=>e(m,{initialValues:{textField:""},onSubmit:t=>alert(JSON.stringify(t)),children:e(p,{styling:"theme",children:e(r,{name:"textField",label:"Text Input",hint:"This field is disabled",disabled:!0})})}),o=()=>{const t={cursor:"pointer",margin:"7px 3px 0px"};return e(m,{initialValues:{friends:["Jared","Ian","Brat"]},onSubmit:u=>alert(JSON.stringify(u)),children:({values:u})=>e(p,{styling:"structure",children:e(D,{name:"friends",render:y=>d("div",{children:[u.friends&&u.friends.length>0?u.friends.map((j,c)=>d("div",{style:{display:"flex",alignItems:"center"},children:[e(r,{name:`friends.${c}`,label:`Friend ${c+1}`}),d("div",{children:[e("button",{style:t,type:"button",onClick:()=>y.remove(c),children:"-"}),e("button",{style:t,type:"button",onClick:()=>y.insert(c,""),children:"+"})]})]},c)):e("button",{type:"button",onClick:()=>y.push(""),children:"Add a friend"}),e("div",{children:e(h,{text:"Submit"})})]})})})})};var b,f,F;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    textField: ''
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form>
        <Input name="textField" label="Input field label" hint="This is a hint" />

        <SubmitBtn text="Submit" />
      </Form>
    </Formik>;
}`,...(F=(f=i.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var S,_,g;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    textField: ''
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form styling="structure">
        <Input name="textField" label="Input field label" hint="This is a hint" />

        <SubmitBtn text="Submit" />
      </Form>
    </Formik>;
}`,...(g=(_=a.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};var x,I,N;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    textField: ''
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form styling="theme">
        <Input name="textField" label="Input field label" hint="This is a hint" />

        <SubmitBtn text="Submit" />
      </Form>
    </Formik>;
}`,...(N=(I=n.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var T,k,v;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    textField: ''
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form styling="theme">
        <Input name="textField" label="Input field label" placeholder="Your Name" hint="This is a hint" required />
      </Form>
    </Formik>;
}`,...(v=(k=l.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var J,O,V;s.parameters={...s.parameters,docs:{...(J=s.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    textField: ''
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form styling="theme">
        <Input name="textField" label="Text Input" hint="This field is disabled" disabled />
      </Form>
    </Formik>;
}`,...(V=(O=s.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var A,B,C;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const buttonStyle = {
    cursor: 'pointer',
    margin: '7px 3px 0px'
  };
  return <Formik initialValues={{
    friends: ['Jared', 'Ian', 'Brat']
  }} onSubmit={data => alert(JSON.stringify(data))}>
      {({
      values
    }) => <Form styling="structure">
          <FieldArray name="friends" render={(arrayHelpers: ArrayHelpers) => <div>
                {values.friends && values.friends.length > 0 ? values.friends.map((_, index) => <div key={index} style={{
          display: 'flex',
          alignItems: 'center'
        }}>
                      <Input name={\`friends.\${index}\`} label={\`Friend \${index + 1}\`} />
                      <div>
                        <button style={buttonStyle} type="button" onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
            >
                          -
                        </button>
                        <button style={buttonStyle} type="button" onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
            >
                          +
                        </button>
                      </div>
                    </div>) : <button type="button" onClick={() => arrayHelpers.push('')}>
                    {/* show this when user has removed all friends from the list */}
                    Add a friend
                  </button>}
                <div>
                  <SubmitBtn text="Submit" />
                </div>
              </div>} />
        </Form>}
    </Formik>;
}`,...(C=(B=o.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};try{i.displayName="Default",i.__docgenInfo={description:"",displayName:"Default",props:{}}}catch{}try{a.displayName="Structured",a.__docgenInfo={description:"",displayName:"Structured",props:{}}}catch{}try{n.displayName="Themed",n.__docgenInfo={description:"",displayName:"Themed",props:{}}}catch{}try{l.displayName="ThemedWithPlaceholder",l.__docgenInfo={description:"",displayName:"ThemedWithPlaceholder",props:{}}}catch{}try{s.displayName="ThemedDisabled",s.__docgenInfo={description:"",displayName:"ThemedDisabled",props:{}}}catch{}try{o.displayName="FieldArrayExample",o.__docgenInfo={description:"",displayName:"FieldArrayExample",props:{}}}catch{}export{i as Default,o as FieldArrayExample,a as Structured,n as Themed,s as ThemedDisabled,l as ThemedWithPlaceholder,re as default};
//# sourceMappingURL=Input.story-40d49e4f.js.map
