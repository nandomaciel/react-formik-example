import React from 'react';
import './App.css';
import { Formik, Form, Field } from 'formik';


function App() {

  function onSubmit(values, actions) {
    console.log(values)
  }

  function validate(values) {
    const errors = {};

    if(!values.name){
      errors.name = 'Nome é obrigatório!';
    }

    if(!values.email){
      errors.email = 'Email é obrigatório!';
    }
    return errors;
  }

  return (
    <div className="App">
      <Formik
        validate={validate}
        onSubmit={onSubmit}
        initialValues={{
          name: '',
          email: ''
        }}
        render={({ values, errors }) => (
          <Form>
            <div>
              <label>Nome</label>
              <Field name="name" type="text" />
              {errors.name && (
                <span>{errors.name}</span>
              )}
            </div>
            <div>
              <label>E-mail</label>
              <Field name="email" type="email" />
              {errors.email && (
                <span>{errors.email}</span>
              )}
            </div>
            <button type="submit">Enviar</button>
          </Form>
        )}
      />
    </div>
  );
}

export default App;
