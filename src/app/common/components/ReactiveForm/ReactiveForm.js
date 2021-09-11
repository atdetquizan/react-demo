import React from 'react';
// import { FormGenerator, Validators } from 'react-reactive-form';
import {
  FormBuilder,
  Validators,
  FieldGroup,
  FieldControl,
} from 'react-reactive-form';

// // Input component
// const TextInput = ({ handler, touched, hasError, meta }) => (
//   <div>
//     <input type={meta.type ?? 'text'} placeholder={`Enter ${meta.label}`} {...handler()} />
//     <span>
//       {touched && hasError('required') && `${meta.label} is required`}
//     </span>
//   </div>
// );
// // Checkbox component
// const CheckBox = ({ handler }) => (
//   <div>
//     <input {...handler('checkbox')} />
//   </div>
// );

// const fieldConfig = {
//   controls: {
//     username: {
//       options: {
//         validators: Validators.required,
//       },
//       render: TextInput,
//       meta: { label: 'Username' },
//     },
//     password: {
//       options: {
//         validators: Validators.required,
//       },
//       render: TextInput,
//       meta: { label: 'Password', type: "password"},
//     },
//     rememberMe: {
//       render: CheckBox,
//     },
//     field_0: {
//       isStatic: false,
//       render: ({ invalid, meta: { handleReset } }) => {
//         return <div>
//           <button type='button' onClick={handleReset}>
//             Reset
//           </button>
//           <button type='submit' disabled={invalid}>
//             Submit
//           </button>
//         </div>
//       }
//     },
//   },
// };

const TextInput = ({ handler, touched, hasError, meta }) => (
  <div>
    <input placeholder={`Enter ${meta.label}`} {...handler()} />
    <span>
      {touched && hasError('required') && `${meta.label} is required`}
    </span>
  </div>
);

export default class ReactiveForm extends React.Component {
  //   handleReset = () => {
  //     this.loginForm.reset();
  //   };
  //   handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log('Form values', this.loginForm.value);
  //   };
  //   setForm = (form) => {
  //     this.loginForm = form;
  //     this.loginForm.meta = {
  //       handleReset: this.handleReset,
  //     };
  //   };
  //   render() {
  //     return (
  //       <form onSubmit={this.handleSubmit}>
  //         <FormGenerator onMount={this.setForm} fieldConfig={fieldConfig} />
  //       </form>
  //     );
  //   }

  loginForm = FormBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    rememberMe: false,
  });

  handleReset = () => {
    this.loginForm.reset();
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form values', this.loginForm.value);
  };

  render() {
    return (
      <FieldGroup
        control={this.loginForm}
        render={({ get, invalid }) => (
          <form onSubmit={this.handleSubmit}>
            <FieldControl
              name='username'
              render={TextInput}
              meta={{ label: 'Username' }}
            />
            <FieldControl
              name='password'
              render={TextInput}
              meta={{ label: 'Password' }}
            />
            <FieldControl
              name='rememberMe'
              render={({ handler }) => (
                <div>
                  <input {...handler('checkbox')} />
                </div>
              )}
              meta={{ label: 'Password' }}
            />
            <button type='button' onClick={this.handleReset}>
              Reset
            </button>
            <button type='submit' disabled={invalid}>
              Submit
            </button>
          </form>
        )}
      />
    );
  }
}
