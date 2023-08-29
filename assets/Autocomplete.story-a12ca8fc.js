import{j as e,F as s,a as n}from"./Form-9bcb654b.js";import{A as o,a as S}from"./Autocomplete-d58fc848.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./WithLabel-06725f67.js";const N={title:"Autocomplete",component:o,parameters:{props:{propTables:[S]}}},m=["Afghanistan","Aland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia, Plurinational State of","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam"],t=()=>e(s,{initialValues:{myAutocomplete:""},onSubmit:a=>alert(JSON.stringify(a)),children:e(n,{children:e(o,{label:"Search",name:"myAutocomplete",hint:"This is a hint",suggestions:m})})}),r=()=>e(s,{initialValues:{myAutocomplete:""},onSubmit:a=>alert(JSON.stringify(a)),children:e(n,{styling:"structure",children:e(o,{name:"myAutocomplete",label:"Search",hint:"This is a hint",suggestions:m})})}),i=()=>e(s,{initialValues:{myAutocomplete:""},onSubmit:a=>alert(JSON.stringify(a)),children:e(n,{styling:"theme",children:e(o,{name:"myAutocomplete",label:"Search",hint:"This is a hint",suggestions:m})})});var l,c,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    myAutocomplete: ''
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form>
        <Autocomplete label="Search" name="myAutocomplete" hint="This is a hint" suggestions={suggestions} />
      </Form>
    </Formik>;
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,d,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    myAutocomplete: ''
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form styling="structure">
        <Autocomplete name="myAutocomplete" label="Search" hint="This is a hint" suggestions={suggestions} />
      </Form>
    </Formik>;
}`,...(h=(d=r.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var g,y,A;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    myAutocomplete: ''
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form styling="theme">
        <Autocomplete name="myAutocomplete" label="Search" hint="This is a hint" suggestions={suggestions} />
      </Form>
    </Formik>;
}`,...(A=(y=i.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};try{t.displayName="Default",t.__docgenInfo={description:"",displayName:"Default",props:{}}}catch{}try{r.displayName="Structured",r.__docgenInfo={description:"",displayName:"Structured",props:{}}}catch{}try{i.displayName="Themed",i.__docgenInfo={description:"",displayName:"Themed",props:{}}}catch{}export{t as Default,r as Structured,i as Themed,N as default};
//# sourceMappingURL=Autocomplete.story-a12ca8fc.js.map
