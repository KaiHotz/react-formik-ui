import{a as s,d as I,j as e,F as y,b as r}from"./Form-9bcb654b.js";import{c as q,a as l,b as m,d as P}from"./index.esm-6d24875c.js";import"./Autocomplete-d58fc848.js";import{C as f}from"./Checkbox-df8c6ddf.js";import{D as v}from"./DatePicker-91fe7aa6.js";import{D as S}from"./DropZone-715d27b1.js";import{I as o}from"./Input-5a5f074d.js";import{P as C}from"./PhoneInput-c1a7d1a6.js";import{R as M}from"./Radio-fec9d75a.js";import{S as g}from"./Select-065502b9.js";import{S as N}from"./SubmitBtn-d926b753.js";import{T as x}from"./Textarea-1f533b4c.js";import{T as D}from"./Toggle-344dc099.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./WithLabel-06725f67.js";import"./isNativeReflectConstruct-81b4d0cb.js";import"./index-2801d3c9.js";import"./index-8d47fad6.js";import"./tslib.es6-90f6c3e8.js";const K={title:"Form",component:s,parameters:{props:{propTables:[I]}}},F=q().shape({salutation:l(),fullName:l().required("Name is required"),email:l().email("Wrong format").required("Email is required"),phoneNr:l().required("Phone number is required"),title:l().required("Is required").nullable(),maritalStatus:l().nullable(),driverLicense:m(),files:P(),additionalInfo:l(),termsAndConitions:m()}).required(),t=()=>e(y,{initialValues:{salutation:"Mr",fullName:"",email:"",birthDay:"",phoneNr:"",title:"",maritalStatus:"",driverLicense:!1,files:[],additionalInfo:"",termsAndConitions:!1},validationSchema:F,onSubmit:a=>alert(JSON.stringify(a)),children:({values:a})=>e(s,{styling:"structure",children:r("fieldset",{children:[e("legend",{children:"Complete Form Example"}),e(M,{name:"salutation",label:"Salutation",options:[{value:"Mr",label:"Mr."},{value:"Mrs",label:"Mrs."},{value:"Ms",label:"Ms."}]}),e(o,{name:"fullName",label:"Name",required:!0}),e(o,{name:"email",label:"Email",placeholder:"foo@bar.com",hint:"Please enter your Email",required:!0}),e(v,{name:"birthDay",label:"Birthday",dateFormat:"dd.MM.yyyy",placeholder:"dd.mm.yyyy",hint:"Please enter your birth date"}),e(C,{name:"phoneNr",label:"Phone Nr.",required:!0}),e(g,{name:"maritalStatus",label:"Marital Status",placeholder:"Select an Option",options:[{value:"1",label:"Married"},{value:"2",label:"Single"},{value:"3",label:"Divorced"},{value:"4",label:"Widowed"}]}),r("div",{style:{marginBottom:"15px"},children:[e("div",{style:{marginBottom:"10px"},children:`Do you have a drivers license ? ${a.driverLicense?"Yes":"No"}`}),e(D,{name:"driverLicense"})]}),e(S,{name:"files",label:"File upload",placeholder:"Drop some files here",withClearButton:!0}),e(x,{name:"additionalInfo",label:"Aditional information",hint:"this is optional"}),e(f,{name:"termsAndConitions",label:"Terms and Conditions",text:"Click to enable the submit button"}),e("br",{}),e(N,{disabled:!a.termsAndConitions,text:"Submit"}),e("br",{}),e("br",{}),e("button",{onClick:()=>alert("Cancel"),children:"Cancel"})]})})}),i=()=>e(y,{initialValues:{salutation:"Mr",fullName:"",email:"",birthDay:"",phoneNr:"",title:"",maritalStatus:"",driverLicense:!1,files:[],additionalInfo:"",termsAndConitions:!1},validationSchema:F,onSubmit:a=>alert(JSON.stringify(a)),children:({values:a})=>e(s,{styling:"theme",children:r("fieldset",{children:[e("legend",{children:"Complete Form Example"}),e(M,{name:"salutation",label:"Salutation",options:[{value:"Mr",label:"Mr."},{value:"Mrs",label:"Mrs."},{value:"Ms",label:"Ms."}]}),e(o,{name:"fullName",label:"Name",required:!0}),e(o,{name:"email",label:"Email",placeholder:"foo@bar.com",hint:"Please enter your Email",required:!0}),e(v,{name:"birthDay",label:"Birthday",dateFormat:"dd.MM.yyyy",placeholder:"dd.mm.yyyy",hint:"Please enter your birth date"}),e(C,{name:"phoneNr",label:"Phone Nr.",required:!0}),e(g,{name:"maritalStatus",label:"Marital Status",placeholder:"Select an Option",options:[{value:"1",label:"Married"},{value:"2",label:"Single"},{value:"3",label:"Divorced"},{value:"4",label:"Widowed"}]}),r("div",{style:{marginBottom:"15px"},children:[e("div",{style:{marginBottom:"10px"},children:`Do you have a drivers license ? ${a.driverLicense?"Yes":"No"}`}),e(D,{name:"driverLicense"})]}),e(S,{name:"files",label:"File upload",placeholder:"Drop some files here",withClearButton:!0}),e(x,{name:"additionalInfo",label:"Aditional information",hint:"this is optional"}),e(f,{name:"termsAndConitions",label:"Terms and Conditions",text:"Click to enable the submit button"}),e("br",{}),e(N,{disabled:!a.termsAndConitions,text:"Submit"}),e("br",{}),e("br",{}),e("button",{onClick:()=>alert("Cancel"),children:"Cancel"})]})})});var d,u,b;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const onSubmit = (data: yup.InferType<typeof schema>) => alert(JSON.stringify(data));
  return <Formik initialValues={{
    salutation: 'Mr',
    fullName: '',
    email: '',
    birthDay: '',
    phoneNr: '',
    title: '',
    maritalStatus: '',
    driverLicense: false,
    files: [],
    additionalInfo: '',
    termsAndConitions: false
  }} validationSchema={schema} onSubmit={onSubmit}>
      {({
      values
    }) => <Form styling="structure">
          <fieldset>
            <legend>Complete Form Example</legend>
            <Radio name="salutation" label="Salutation" options={[{
          value: 'Mr',
          label: 'Mr.'
        }, {
          value: 'Mrs',
          label: 'Mrs.'
        }, {
          value: 'Ms',
          label: 'Ms.'
        }]} />

            <Input name="fullName" label="Name" required />

            <Input name="email" label="Email" placeholder="foo@bar.com" hint="Please enter your Email" required />

            <DatePicker name="birthDay" label="Birthday" dateFormat="dd.MM.yyyy" placeholder="dd.mm.yyyy" hint="Please enter your birth date" />

            <PhoneInput name="phoneNr" label="Phone Nr." required />

            <Select name="maritalStatus" label="Marital Status" placeholder="Select an Option" options={[{
          value: '1',
          label: 'Married'
        }, {
          value: '2',
          label: 'Single'
        }, {
          value: '3',
          label: 'Divorced'
        }, {
          value: '4',
          label: 'Widowed'
        }]} />

            <div style={{
          marginBottom: '15px'
        }}>
              <div style={{
            marginBottom: '10px'
          }}>{\`Do you have a drivers license ? \${values.driverLicense ? 'Yes' : 'No'}\`}</div>
              <Toggle name="driverLicense" />
            </div>

            <DropZone name="files" label="File upload" placeholder="Drop some files here" withClearButton />

            <Textarea name="additionalInfo" label="Aditional information" hint="this is optional" />

            <Checkbox name="termsAndConitions" label="Terms and Conditions" text="Click to enable the submit button" />
            <br />
            <SubmitBtn disabled={!values.termsAndConitions} text="Submit" />
            <br />
            <br />
            <button onClick={() => alert('Cancel')}>Cancel</button>
          </fieldset>
        </Form>}
    </Formik>;
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var c,p,h;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const onSubmit = (data: yup.InferType<typeof schema>) => alert(JSON.stringify(data));
  return <Formik initialValues={{
    salutation: 'Mr',
    fullName: '',
    email: '',
    birthDay: '',
    phoneNr: '',
    title: '',
    maritalStatus: '',
    driverLicense: false,
    files: [],
    additionalInfo: '',
    termsAndConitions: false
  }} validationSchema={schema} onSubmit={onSubmit}>
      {({
      values
    }) => <Form styling="theme">
          <fieldset>
            <legend>Complete Form Example</legend>
            <Radio name="salutation" label="Salutation" options={[{
          value: 'Mr',
          label: 'Mr.'
        }, {
          value: 'Mrs',
          label: 'Mrs.'
        }, {
          value: 'Ms',
          label: 'Ms.'
        }]} />

            <Input name="fullName" label="Name" required />

            <Input name="email" label="Email" placeholder="foo@bar.com" hint="Please enter your Email" required />

            <DatePicker name="birthDay" label="Birthday" dateFormat="dd.MM.yyyy" placeholder="dd.mm.yyyy" hint="Please enter your birth date" />

            <PhoneInput name="phoneNr" label="Phone Nr." required />

            <Select name="maritalStatus" label="Marital Status" placeholder="Select an Option" options={[{
          value: '1',
          label: 'Married'
        }, {
          value: '2',
          label: 'Single'
        }, {
          value: '3',
          label: 'Divorced'
        }, {
          value: '4',
          label: 'Widowed'
        }]} />

            <div style={{
          marginBottom: '15px'
        }}>
              <div style={{
            marginBottom: '10px'
          }}>{\`Do you have a drivers license ? \${values.driverLicense ? 'Yes' : 'No'}\`}</div>
              <Toggle name="driverLicense" />
            </div>

            <DropZone name="files" label="File upload" placeholder="Drop some files here" withClearButton />

            <Textarea name="additionalInfo" label="Aditional information" hint="this is optional" />

            <Checkbox name="termsAndConitions" label="Terms and Conditions" text="Click to enable the submit button" />
            <br />
            <SubmitBtn disabled={!values.termsAndConitions} text="Submit" />
            <br />
            <br />
            <button onClick={() => alert('Cancel')}>Cancel</button>
          </fieldset>
        </Form>}
    </Formik>;
}`,...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};try{t.displayName="Structured",t.__docgenInfo={description:"",displayName:"Structured",props:{}}}catch{}try{i.displayName="Themed",i.__docgenInfo={description:"",displayName:"Themed",props:{}}}catch{}export{t as Structured,i as Themed,K as default};
//# sourceMappingURL=Form.story-92343374.js.map
