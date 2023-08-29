import{j as r,F as a,b as c,a as n}from"./Form-9bcb654b.js";import{P as t,a as L}from"./PhoneInput-c1a7d1a6.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./WithLabel-06725f67.js";const E={title:"PhoneInput",component:t,parameters:{props:{propTables:[L]}}},i=()=>r(a,{initialValues:{phoneNr:""},onSubmit:e=>alert(JSON.stringify(e)),children:({values:e})=>c(n,{children:[r(t,{name:"phoneNr",label:"Phone Nr.",placeholder:"+1 702 123 4567",hint:"This is a hint"}),c("fieldset",{style:{maxWidth:250,minHeight:32,marginTop:20},children:[r("legend",{children:"Preview of the returned Value:"}),r("pre",{style:{margin:0},children:e.phoneNr&&JSON.stringify(e.phoneNr,null,2)})]})]})}),o=()=>r(a,{initialValues:{phoneData:{phoneNumber:"",country:{name:"",iso2:""}}},onSubmit:e=>alert(JSON.stringify(e)),children:({values:e})=>c(n,{children:[r(t,{name:"phoneData",label:"Phone Nr.",placeholder:"+1 702 123 4567",hint:"This is a hint",withCountryMeta:!0}),c("fieldset",{style:{maxWidth:250,minHeight:32,marginTop:20},children:[r("legend",{children:"Preview of the returned Value:"}),r("pre",{style:{margin:0},children:e.phoneData&&JSON.stringify(e.phoneData,null,2)})]})]})}),s=()=>r(a,{initialValues:{phoneNr:""},onSubmit:e=>alert(JSON.stringify(e)),children:r(n,{children:r(t,{name:"phoneNr",label:"Phone Nr.",hint:"This is a hint",defaultCountry:"DE"})})}),l=()=>r(a,{initialValues:{phoneNr:""},onSubmit:e=>alert(JSON.stringify(e)),children:r(n,{children:r(t,{name:"phoneNr",label:"Phone Nr.",hint:"This is a hint",preferredCountries:["CL","AR","BR","CO"]})})}),h=()=>r(a,{initialValues:{phoneNr:""},onSubmit:e=>alert(JSON.stringify(e)),children:r(n,{children:r(t,{name:"phoneNr",label:"Phone Nr.",hint:"This is a hint",regions:["carribean","oceania"]})})}),p=()=>r(a,{initialValues:{phoneNr:""},onSubmit:e=>alert(JSON.stringify(e)),children:r(n,{children:r(t,{name:"phoneNr",label:"Phone Nr.",format:"NATIONAL",defaultCountry:"US",placeholder:"(555) 123-4567",hint:"This is a hint"})})}),m=()=>r(a,{initialValues:{phoneNr:""},onSubmit:e=>alert(JSON.stringify(e)),children:r(n,{styling:"theme",children:r(t,{name:"phoneNr",label:"Phone Nr.",hint:"This is a hint"})})}),d=()=>r(a,{initialValues:{phoneNr:""},onSubmit:e=>alert(JSON.stringify(e)),children:r(n,{styling:"theme",children:r(t,{name:"phoneNr",label:"Phone Nr.",format:"NATIONAL",defaultCountry:"US",hint:"This is a hint"})})});var u,N,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    phoneNr: ''
  }} onSubmit={data => alert(JSON.stringify(data))}>
      {({
      values
    }) => {
      return <Form>
            <PhoneInput name="phoneNr" label="Phone Nr." placeholder="+1 702 123 4567" hint="This is a hint" />
            <fieldset style={{
          maxWidth: 250,
          minHeight: 32,
          marginTop: 20
        }}>
              <legend>Preview of the returned Value:</legend>
              <pre style={{
            margin: 0
          }}>{values.phoneNr && JSON.stringify(values.phoneNr, null, 2)}</pre>
            </fieldset>
          </Form>;
    }}
    </Formik>;
}`,...(y=(N=i.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var g,f,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    phoneData: {
      phoneNumber: '',
      country: {
        name: '',
        iso2: ''
      }
    }
  }} onSubmit={data => alert(JSON.stringify(data))}>
      {({
      values
    }) => {
      return <Form>
            <PhoneInput name="phoneData" label="Phone Nr." placeholder="+1 702 123 4567" hint="This is a hint" withCountryMeta />
            <fieldset style={{
          maxWidth: 250,
          minHeight: 32,
          marginTop: 20
        }}>
              <legend>Preview of the returned Value:</legend>
              <pre style={{
            margin: 0
          }}>{values.phoneData && JSON.stringify(values.phoneData, null, 2)}</pre>
            </fieldset>
          </Form>;
    }}
    </Formik>;
}`,...(_=(f=o.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var S,P,F;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    phoneNr: ''
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form>
        <PhoneInput name="phoneNr" label="Phone Nr." hint="This is a hint" defaultCountry="DE" />
      </Form>
    </Formik>;
}`,...(F=(P=s.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var b,T,O;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    phoneNr: ''
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form>
        <PhoneInput name="phoneNr" label="Phone Nr." hint="This is a hint" preferredCountries={['CL', 'AR', 'BR', 'CO']} />
      </Form>
    </Formik>;
}`,...(O=(T=l.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var I,C,J;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    phoneNr: ''
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form>
        <PhoneInput name="phoneNr" label="Phone Nr." hint="This is a hint" regions={['carribean', 'oceania']} />
      </Form>
    </Formik>;
}`,...(J=(C=h.parameters)==null?void 0:C.docs)==null?void 0:J.source}}};var V,k,D;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    phoneNr: ''
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form>
        <PhoneInput name="phoneNr" label="Phone Nr." format="NATIONAL" defaultCountry="US" placeholder="(555) 123-4567" hint="This is a hint" />
      </Form>
    </Formik>;
}`,...(D=(k=p.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var W,A,v;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    phoneNr: ''
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form styling="theme">
        <PhoneInput name="phoneNr" label="Phone Nr." hint="This is a hint" />
      </Form>
    </Formik>;
}`,...(v=(A=m.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var x,R,w;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Formik initialValues={{
    phoneNr: ''
  }} onSubmit={data => alert(JSON.stringify(data))}>
      <Form styling="theme">
        <PhoneInput name="phoneNr" label="Phone Nr." format="NATIONAL" defaultCountry="US" hint="This is a hint" />
      </Form>
    </Formik>;
}`,...(w=(R=d.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};try{i.displayName="Default",i.__docgenInfo={description:"",displayName:"Default",props:{}}}catch{}try{o.displayName="WithCountryMeta",o.__docgenInfo={description:"",displayName:"WithCountryMeta",props:{}}}catch{}try{s.displayName="WithDefaultCountry",s.__docgenInfo={description:"",displayName:"WithDefaultCountry",props:{}}}catch{}try{l.displayName="WithPreferredCountries",l.__docgenInfo={description:"",displayName:"WithPreferredCountries",props:{}}}catch{}try{h.displayName="WithPreferredRegions",h.__docgenInfo={description:"",displayName:"WithPreferredRegions",props:{}}}catch{}try{p.displayName="NationalPhoneNrFormat",p.__docgenInfo={description:"",displayName:"NationalPhoneNrFormat",props:{}}}catch{}try{m.displayName="Themed",m.__docgenInfo={description:"",displayName:"Themed",props:{}}}catch{}try{d.displayName="ThemedNationalPhoneNrFormat",d.__docgenInfo={description:"",displayName:"ThemedNationalPhoneNrFormat",props:{}}}catch{}export{i as Default,p as NationalPhoneNrFormat,m as Themed,d as ThemedNationalPhoneNrFormat,o as WithCountryMeta,s as WithDefaultCountry,l as WithPreferredCountries,h as WithPreferredRegions,E as default};
//# sourceMappingURL=PhoneInput.story-0b2445ef.js.map
