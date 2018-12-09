<h1 align="center">React-Formik-UI</h1>

<div align="center">

[![NPM](https://img.shields.io/npm/v/react-formik-ui.svg)](https://www.npmjs.com/package/react-formik-ui)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-Airbnb-brightgreen.svg)](https://github.com/airbnb/javascript)
[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/KaiHotz/react-formik-ui/blob/master/LICENSE)

</div>

## Overview
React-Formik-UI is a simple component library, composed out of pure HTML form elements like:
form, input, select, checkbox, radio and textarea.

The Idea behind React-Formik-UI is to make the composition of forms with React and Formik even easier,
so you don't have to write any HTML markup or extra components for your forms.

Each component makes use of Formiks context, there for you need to have Formik installed in your project.

## Markup, Styling and ClassNames
The markup for the components input, select, checkbox, radio, textarea and Datepicker consists of a wrapper div, label, the main component, hint, and error message.

By default all component have NO styling applied.</br>
This is intentionally, so you have the posibility to apply your own styling.</br>
All the components used in the form are scoped by the default classes, situated on the Form component, `react-formik-ui form-wrapper`

Each component has its corresponding wrapper class (eg: Input component  `input-wrapper` ), as well as the class `form-element`.</br>
you also can pass your own custom class to the wrapper of each component bay passing the `className` prop.

Anyhow if you pass the prop `styled` to the Form component a minimal styling will be applied to add some structure to the form and each form element.

## Installation

```sh
npm install --save react-formik-ui
```

# Usage

### Peer Dependency
React-Formik-UI has a Peer dependency of [Formik](https://github.com/jaredpalmer/formik).</br>
This means that you need to add [Formik](https://github.com/jaredpalmer/formik) to your project to make use of React-Formik-UI.</br>

```sh
npm install --save formik@1.0.0-alpha.6
```

### Form validatios
To validate the form fields, the use of [Yup](https://github.com/jquense/yup) is recommended.

```sh
npm install --save yup
```

### Components and Examples
See the Styleguide [here](https://kaihotz.github.io/react-formik-ui/)


## License

MIT © [KaiHotz](https://github.com/KaiHotz)
