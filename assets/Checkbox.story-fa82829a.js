import{j as a,F as m,a as d}from"./Form-9bcb654b.js";import{C as t,a as v}from"./Checkbox-df8c6ddf.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./WithLabel-06725f67.js";const $={title:"Checkbox",component:t,parameters:{props:{propTables:[v]}}},o=()=>a(m,{initialValues:{checkboxExample:!1},onSubmit:e=>alert(JSON.stringify(e)),children:a(d,{children:a(t,{name:"checkboxExample",label:"Checkbox label",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr."})})}),i=()=>a(m,{initialValues:{checkboxExample:!1},onSubmit:e=>alert(JSON.stringify(e)),children:a(d,{styling:"structure",children:a(t,{name:"checkboxExample",label:"Checkbox label",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr."})})}),s=()=>a(m,{initialValues:{checkboxExample:!1},onSubmit:e=>alert(JSON.stringify(e)),children:a(d,{styling:"theme",children:a(t,{name:"checkboxExample",label:"Checkbox label",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",hint:"This is a hint"})})}),c=()=>a(m,{initialValues:{checkboxExample:!1},onSubmit:e=>alert(JSON.stringify(e)),children:a(d,{styling:"theme",children:a(t,{name:"checkboxExample",label:"Checkbox label",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",disabled:!0})})}),l=()=>a(m,{initialValues:{checkboxExample:!0},onSubmit:e=>alert(JSON.stringify(e)),children:a(d,{styling:"theme",children:a(t,{name:"checkboxExample",label:"Checkbox label",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",hint:"This is a hint",disabled:!0})})}),n=()=>{const e=[{name:"check1",label:"Checkbox 1",text:"Lorem ipsum dolor 1.",value:!1},{name:"check2",label:"Checkbox 2",text:"Lorem ipsum dolor 2.",value:!0},{name:"check3",label:"Checkbox 3",text:"Lorem ipsum dolor 3.",value:!1},{name:"check4",label:"Checkbox 4",text:"Lorem ipsum dolor 4.",value:!0}];return a(m,{initialValues:{...e.reduce((r,{name:O,value:V})=>({...r,[O]:V}),{})},onSubmit:r=>alert(JSON.stringify(r)),children:a(d,{styling:"theme",children:e.map(r=>a(t,{name:r.name,text:r.text},r.name))})})};var p,u,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    checkboxExample: false
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form>
        <Checkbox name="checkboxExample" label="Checkbox label" text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr." />
      </Form>
    </Formik>;
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,x,k;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    checkboxExample: false
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form styling="structure">
        <Checkbox name="checkboxExample" label="Checkbox label" text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr." />
      </Form>
    </Formik>;
}`,...(k=(x=i.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var g,_,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    checkboxExample: false
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form styling="theme">
        <Checkbox name="checkboxExample" label="Checkbox label" text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr." hint="This is a hint" />
      </Form>
    </Formik>;
}`,...(y=(_=s.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var f,S,C;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    checkboxExample: false
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form styling="theme">
        <Checkbox name="checkboxExample" label="Checkbox label" text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr." disabled />
      </Form>
    </Formik>;
}`,...(C=(S=c.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var F,N,E;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    checkboxExample: true
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form styling="theme">
        <Checkbox name="checkboxExample" label="Checkbox label" text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr." hint="This is a hint" disabled />
      </Form>
    </Formik>;
}`,...(E=(N=l.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var L,T,J;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const checkBoxes = [{
    name: 'check1',
    label: 'Checkbox 1',
    text: 'Lorem ipsum dolor 1.',
    value: false
  }, {
    name: 'check2',
    label: 'Checkbox 2',
    text: 'Lorem ipsum dolor 2.',
    value: true
  }, {
    name: 'check3',
    label: 'Checkbox 3',
    text: 'Lorem ipsum dolor 3.',
    value: false
  }, {
    name: 'check4',
    label: 'Checkbox 4',
    text: 'Lorem ipsum dolor 4.',
    value: true
  }];
  return <Formik initialValues={{
    ...checkBoxes.reduce((acc, {
      name,
      value
    }) => ({
      ...acc,
      [name]: value
    }), {})
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form styling="theme">
        {checkBoxes.map(cb => <Checkbox key={cb.name} name={cb.name} text={cb.text} />)}
      </Form>
    </Formik>;
}`,...(J=(T=n.parameters)==null?void 0:T.docs)==null?void 0:J.source}}};try{o.displayName="Default",o.__docgenInfo={description:"",displayName:"Default",props:{}}}catch{}try{i.displayName="Structured",i.__docgenInfo={description:"",displayName:"Structured",props:{}}}catch{}try{s.displayName="Themed",s.__docgenInfo={description:"",displayName:"Themed",props:{}}}catch{}try{c.displayName="ThemedDisabled",c.__docgenInfo={description:"",displayName:"ThemedDisabled",props:{}}}catch{}try{l.displayName="ThemedDisabledChecked",l.__docgenInfo={description:"",displayName:"ThemedDisabledChecked",props:{}}}catch{}try{n.displayName="Group",n.__docgenInfo={description:"",displayName:"Group",props:{}}}catch{}export{o as Default,n as Group,i as Structured,s as Themed,c as ThemedDisabled,l as ThemedDisabledChecked,$ as default};
//# sourceMappingURL=Checkbox.story-fa82829a.js.map
