<h1 align="center">React-Formik-UI</h1>

<div align="center">

[![NPM](https://img.shields.io/npm/v/react-formik-ui.svg)](https://www.npmjs.com/package/react-formik-ui)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-formik-ui)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-Airbnb-brightgreen.svg)](https://github.com/airbnb/javascript)
[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/KaiHotz/react-formik-ui/blob/master/LICENSE)
![npm](https://img.shields.io/npm/dw/react-formik-ui)

</div>

## Overview

React-Formik-UI is a simple component library, composed out of pure HTML form elements like:
form, input, select, checkbox, radio and textarea.

The Idea behind React-Formik-UI is to make the composition of forms with React and Formik even easier,
so you don't have to write any HTML markup or extra components for your forms.

Each component makes use of Formiks context, there for you need to have Formik installed in your project.

## NEW in v4:

**Updated to use Formik v2:** React Formik UI was updated to use Formik v2  and their hooks implementation.
That means that you need to have Formik v2 installed to use React Formik UI v4. If you haven't updated, please do so.

**Bundle size decreased:** Wepack-Blocks got replased by a custom wepack config to render the styleguide, as well, since we could remove the connect HOC from Formik now the bundle gets minimized through the Rollup Tether plguin.


## Markup, Styling and ClassNames

The markup for the components Input, PhoneInput, Select, Checkbox, Radio, Textarea, Datepicker and DropZone consists of a wrapper div, label, the main component, hint, and error message.

By default all component have NO styling applied at all.</br>
This is intentionally, so you have the possibility to apply your own styling through css or scss by passing a custom className.</br>
All the components used in the Form are scoped by the default classes, situated on the Form component, `react-formik-ui form-wrapper`

Each component has its corresponding component class (eg: PhoneInput component  `phoneInput` ) followed a level deeper by its wrapper class (eg: phoneInput component  `phoneInput-wrapper` ), as well as the class `form-element`.</br>

You can pass the `style` prop on each component, to add custom inline styles to the component main element. Lets say you ad a style object through the style prop on the Select component, the inline styles will be applied to the select element of the Select component.

The `className` Prop can be passed on each component to add a css class directly to the component instead of the wrapper div, so libraries like Bootstrap can be used to style the form component.

**The Mode prop:** If you pass the `mode` prop to the `Form` component with `structured` as value, a minimal styling will be applied to add some structure to each `form-element`.

In case you pass the value `themed` through the `mode` prop on the `Form` component, the React-Formik-Ui Theme will be applied

## Migrating from v3 to v4:

Just make shure tu use Formik v2 in your project.

## Installation

**Note:** React Formik UI makes use of the recently released react `Hooks` API, therefore make sure that your project uses the latest `React` version

```sh
yarn add react-formik-ui
```

# Usage

### Peer Dependency

React-Formik-UI has [Formik](https://github.com/jaredpalmer/formik), [React](https://reactjs.org/) and [react-dom](https://www.npmjs.com/package/react-dom) as Peer dependencies.</br>
So make shure to have those packages installed to your project to make use of React-Formik-UI.</br>

```sh
yarn add formik
```

### Form validations

To validate the form fields, the use of [Yup](https://github.com/jquense/yup) is recommended.

```sh
yarn add yup
```

### See the Styleguide with Demo and Examples [here](https://kaihotz.github.io/react-formik-ui/)

### Components Documentation and Examples

- [Autocomplete](https://kaihotz.github.io/react-formik-ui/#autocomplete)
- [Button](https://kaihotz.github.io/react-formik-ui/#button)
- [Checkbox](https://kaihotz.github.io/react-formik-ui/#checkbox)
- [Datepicker](https://kaihotz.github.io/react-formik-ui/#datepicker)
- [DropZone](https://kaihotz.github.io/react-formik-ui/#dropzone)
- [Form](https://kaihotz.github.io/react-formik-ui/#form)
- [Input](https://kaihotz.github.io/react-formik-ui/#input)
- [PhoneInput](https://kaihotz.github.io/react-formik-ui/#phoneinput)
- [Radio](https://kaihotz.github.io/react-formik-ui/#radio)
- [Select](https://kaihotz.github.io/react-formik-ui/#select)
- [SubmitBtn](https://kaihotz.github.io/react-formik-ui/#submitbtn)
- [Textarea](https://kaihotz.github.io/react-formik-ui/#textarea)
- [Toggle](https://kaihotz.github.io/react-formik-ui/#toggle)

## License

MIT © [KaiHotz](https://github.com/KaiHotz)

## Support

If you like the project and want to support my work, you can buy me a coffee :)

[![paypal](https://img.shields.io/badge/donate-paypal-blue.svg)](https://paypal.me/kaihotz)
