import React, { useState } from 'react';
import Form from "../Forms/Form";
import FormField from "../Forms/FormField";
import FormAction from "../Forms/FormAction";

function Login(){
  const [formData, setFormData] = useState({
    username : "",
    password : "",
    usernameError : "",
    passwordError: ""
  });

  const _self = this;
  const myOnChange = function(e){
    const { name, value } = e.currentTarget;
    //validaciones
    let error = null;
    if (name ==="password"){
      error = (/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,32}$/).test(value) ? null :"Contraseña Inválida";
    }
    //
    setFormData({ ...formData, [name]: value , [name + "Error"]: error});
  }
  return (
      <div class="min-h-screen flex items-center justify-center bg-indigo-600 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <h2 class="text-center text-3xl font-bold text-white">Inicia sesión en tu cuenta</h2>
          <div class=" bg-white mt-8 space-y-6 rounded shadow p-5">
            <Form>
              <FormField
                type="text"
                id="username"
                fname="username"
                onChange={myOnChange}
                caption="Correo Electrónico"
                value={formData.username}
                error={formData.usernameError}
                placeholder="Tu correo">
              </FormField>
              <FormField
                type="password"
                id="password"
                fname="password"
                onChange={myOnChange}
                caption="Contraseña"
                value={formData.password}
                error={formData.passwordError}
                placeholder="Contraseña">
              </FormField>
              <FormAction
                caption="Entrar"
                onClick={
                  (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                    const { username, password } = formData;
                    alert(`Usuario:${username} Psswd:${password}`);
                  }
                }>
              </FormAction>
            </Form>

            </div>
        </div>
      </div>


    
  );
}

export default Login;