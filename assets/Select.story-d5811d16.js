import{j as e,F as t,a as i}from"./Form-9bcb654b.js";import{S as a,a as I}from"./Select-065502b9.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./WithLabel-06725f67.js";const A={title:"Select",component:a,parameters:{props:{propTables:[I]}}},o=()=>e(t,{initialValues:{selectExample:""},onSubmit:l=>alert(JSON.stringify(l)),children:e(i,{children:e(a,{name:"selectExample",label:"Select options label",placeholder:"Select an Option",options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4"},{value:"5",label:"Option 5"},{value:"6",label:"Option 6"}]})})}),r=()=>e(t,{initialValues:{multipleSelect:["1","3"]},onSubmit:l=>alert(JSON.stringify(l)),children:e(i,{children:e(a,{multiple:!0,name:"multipleSelect",label:"Select options label",options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4"},{value:"5",label:"Option 5"},{value:"6",label:"Option 6"}]})})}),n=()=>e(t,{initialValues:{selectExample:""},onSubmit:l=>alert(JSON.stringify(l)),children:e(i,{styling:"structure",children:e(a,{name:"selectExample",label:"Select options label",placeholder:"Select an Option",options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4"},{value:"5",label:"Option 5"},{value:"6",label:"Option 6"}]})})}),p=()=>e(t,{initialValues:{multipleSelect:["1","3"]},onSubmit:l=>alert(JSON.stringify(l)),children:e(i,{styling:"structure",children:e(a,{multiple:!0,name:"multipleSelect",label:"Select options label",options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4"},{value:"5",label:"Option 5"},{value:"6",label:"Option 6"}]})})}),s=()=>e(t,{initialValues:{selectExample:""},onSubmit:l=>alert(JSON.stringify(l)),children:e(i,{styling:"theme",children:e(a,{name:"selectExample",label:"Select options label",placeholder:"Select an Option",options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4"},{value:"5",label:"Option 5"},{value:"6",label:"Option 6"}]})})}),u=()=>e(t,{initialValues:{multipleSelect:["1","3"]},onSubmit:l=>alert(JSON.stringify(l)),children:e(i,{styling:"theme",children:e(a,{multiple:!0,name:"multipleSelect",label:"Select options label",options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4"},{value:"5",label:"Option 5"},{value:"6",label:"Option 6"}]})})}),c=()=>e(t,{initialValues:{selectExample:"1"},onSubmit:l=>alert(JSON.stringify(l)),children:e(i,{styling:"theme",children:e(a,{name:"selectExample",label:"Select options label",placeholder:"Select an Option",options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4"},{value:"5",label:"Option 5"},{value:"6",label:"Option 6"}],disabled:!0})})});var m,b,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    selectExample: ''
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form>
        <Select name="selectExample" label="Select options label" placeholder="Select an Option" options={[{
        value: '1',
        label: 'Option 1'
      }, {
        value: '2',
        label: 'Option 2'
      }, {
        value: '3',
        label: 'Option 3'
      }, {
        value: '4',
        label: 'Option 4'
      }, {
        value: '5',
        label: 'Option 5'
      }, {
        value: '6',
        label: 'Option 6'
      }]} />
      </Form>
    </Formik>;
}`,...(d=(b=o.parameters)==null?void 0:b.docs)==null?void 0:d.source}}};var O,S,v;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    multipleSelect: ['1', '3']
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form>
        <Select multiple name="multipleSelect" label="Select options label" options={[{
        value: '1',
        label: 'Option 1'
      }, {
        value: '2',
        label: 'Option 2'
      }, {
        value: '3',
        label: 'Option 3'
      }, {
        value: '4',
        label: 'Option 4'
      }, {
        value: '5',
        label: 'Option 5'
      }, {
        value: '6',
        label: 'Option 6'
      }]} />
      </Form>
    </Formik>;
}`,...(v=(S=r.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var _,y,g;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    selectExample: ''
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form styling="structure">
        <Select name="selectExample" label="Select options label" placeholder="Select an Option" options={[{
        value: '1',
        label: 'Option 1'
      }, {
        value: '2',
        label: 'Option 2'
      }, {
        value: '3',
        label: 'Option 3'
      }, {
        value: '4',
        label: 'Option 4'
      }, {
        value: '5',
        label: 'Option 5'
      }, {
        value: '6',
        label: 'Option 6'
      }]} />
      </Form>
    </Formik>;
}`,...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var h,F,f;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    multipleSelect: ['1', '3']
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form styling="structure">
        <Select multiple name="multipleSelect" label="Select options label" options={[{
        value: '1',
        label: 'Option 1'
      }, {
        value: '2',
        label: 'Option 2'
      }, {
        value: '3',
        label: 'Option 3'
      }, {
        value: '4',
        label: 'Option 4'
      }, {
        value: '5',
        label: 'Option 5'
      }, {
        value: '6',
        label: 'Option 6'
      }]} />
      </Form>
    </Formik>;
}`,...(f=(F=p.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};var N,x,E;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    selectExample: ''
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form styling="theme">
        <Select name="selectExample" label="Select options label" placeholder="Select an Option" options={[{
        value: '1',
        label: 'Option 1'
      }, {
        value: '2',
        label: 'Option 2'
      }, {
        value: '3',
        label: 'Option 3'
      }, {
        value: '4',
        label: 'Option 4'
      }, {
        value: '5',
        label: 'Option 5'
      }, {
        value: '6',
        label: 'Option 6'
      }]} />
      </Form>
    </Formik>;
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var k,J,V;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    multipleSelect: ['1', '3']
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form styling="theme">
        <Select multiple name="multipleSelect" label="Select options label" options={[{
        value: '1',
        label: 'Option 1'
      }, {
        value: '2',
        label: 'Option 2'
      }, {
        value: '3',
        label: 'Option 3'
      }, {
        value: '4',
        label: 'Option 4'
      }, {
        value: '5',
        label: 'Option 5'
      }, {
        value: '6',
        label: 'Option 6'
      }]} />
      </Form>
    </Formik>;
}`,...(V=(J=u.parameters)==null?void 0:J.docs)==null?void 0:V.source}}};var T,D,M;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    selectExample: '1'
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form styling="theme">
        <Select name="selectExample" label="Select options label" placeholder="Select an Option" options={[{
        value: '1',
        label: 'Option 1'
      }, {
        value: '2',
        label: 'Option 2'
      }, {
        value: '3',
        label: 'Option 3'
      }, {
        value: '4',
        label: 'Option 4'
      }, {
        value: '5',
        label: 'Option 5'
      }, {
        value: '6',
        label: 'Option 6'
      }]} disabled />
      </Form>
    </Formik>;
}`,...(M=(D=c.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};try{o.displayName="Default",o.__docgenInfo={description:"",displayName:"Default",props:{}}}catch{}try{r.displayName="DefaultMultiselect",r.__docgenInfo={description:"",displayName:"DefaultMultiselect",props:{}}}catch{}try{n.displayName="Structured",n.__docgenInfo={description:"",displayName:"Structured",props:{}}}catch{}try{p.displayName="StructuredMultiselect",p.__docgenInfo={description:"",displayName:"StructuredMultiselect",props:{}}}catch{}try{s.displayName="Themed",s.__docgenInfo={description:"",displayName:"Themed",props:{}}}catch{}try{u.displayName="ThemedMultiselect",u.__docgenInfo={description:"",displayName:"ThemedMultiselect",props:{}}}catch{}try{c.displayName="ThemedDisabled",c.__docgenInfo={description:"",displayName:"ThemedDisabled",props:{}}}catch{}export{o as Default,r as DefaultMultiselect,n as Structured,p as StructuredMultiselect,s as Themed,c as ThemedDisabled,u as ThemedMultiselect,A as default};
//# sourceMappingURL=Select.story-d5811d16.js.map
