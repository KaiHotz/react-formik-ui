import{j as e,F as n,a as d}from"./Form-9bcb654b.js";import{T as a,a as v}from"./Textarea-1f533b4c.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./WithLabel-06725f67.js";const j={title:"Textarea",component:a,parameters:{props:{propTables:[v]}}},r=()=>e(n,{initialValues:{textAreaExample:""},onSubmit:t=>alert(JSON.stringify(t)),children:e(d,{children:e(a,{name:"textAreaExample",label:"Write a comment"})})}),i=()=>e(n,{initialValues:{textAreaExample:""},onSubmit:t=>alert(JSON.stringify(t)),children:e(d,{styling:"structure",children:e(a,{name:"textAreaExample",label:"Write a comment"})})}),o=()=>e(n,{initialValues:{textAreaExample:""},onSubmit:t=>alert(JSON.stringify(t)),children:e(d,{styling:"theme",children:e(a,{name:"textAreaExample",label:"Write a comment"})})}),m=()=>e(n,{initialValues:{textAreaExample:""},onSubmit:t=>alert(JSON.stringify(t)),children:e(d,{styling:"theme",children:e(a,{name:"textAreaExample",label:"Write a comment",placeholder:"Write some text here"})})}),s=()=>e(n,{initialValues:{textAreaExample:""},onSubmit:t=>alert(JSON.stringify(t)),children:e(d,{styling:"theme",children:e(a,{name:"textAreaExample",label:"Write a comment",disabled:!0})})}),l=()=>e(n,{initialValues:{textAreaExample:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},onSubmit:t=>alert(JSON.stringify(t)),children:e(d,{styling:"theme",children:e(a,{name:"textAreaExample",label:"Write a comment",disabled:!0})})});var c,u,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    textAreaExample: ''
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form>
        <Textarea name="textAreaExample" label="Write a comment" />
      </Form>
    </Formik>;
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var x,g,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    textAreaExample: ''
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form styling="structure">
        <Textarea name="textAreaExample" label="Write a comment" />
      </Form>
    </Formik>;
}`,...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,_,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    textAreaExample: ''
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form styling="theme">
        <Textarea name="textAreaExample" label="Write a comment" />
      </Form>
    </Formik>;
}`,...(b=(_=o.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var S,A,F;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    textAreaExample: ''
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form styling="theme">
        <Textarea name="textAreaExample" label="Write a comment" placeholder="Write some text here" />
      </Form>
    </Formik>;
}`,...(F=(A=m.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var T,f,E;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    textAreaExample: ''
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form styling="theme">
        <Textarea name="textAreaExample" label="Write a comment" disabled />
      </Form>
    </Formik>;
}`,...(E=(f=s.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var N,k,W;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    textAreaExample: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form styling="theme">
        <Textarea name="textAreaExample" label="Write a comment" disabled />
      </Form>
    </Formik>;
}`,...(W=(k=l.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};try{r.displayName="Default",r.__docgenInfo={description:"",displayName:"Default",props:{}}}catch{}try{i.displayName="Structured",i.__docgenInfo={description:"",displayName:"Structured",props:{}}}catch{}try{o.displayName="Themed",o.__docgenInfo={description:"",displayName:"Themed",props:{}}}catch{}try{m.displayName="ThemedWithPlaceholder",m.__docgenInfo={description:"",displayName:"ThemedWithPlaceholder",props:{}}}catch{}try{s.displayName="ThemedDisabled",s.__docgenInfo={description:"",displayName:"ThemedDisabled",props:{}}}catch{}try{l.displayName="ThemedDisabledWithText",l.__docgenInfo={description:"",displayName:"ThemedDisabledWithText",props:{}}}catch{}export{r as Default,i as Structured,o as Themed,s as ThemedDisabled,l as ThemedDisabledWithText,m as ThemedWithPlaceholder,j as default};
//# sourceMappingURL=Textarea.story-cc2514b2.js.map
