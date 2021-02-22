import { extend } from 'vee-validate'
import { email, required } from 'vee-validate/dist/rules'

extend('password', {
  params: ['target'],
  validate (value, { target }) {
    return value === target
  },
  message: 'Las contraseñas ingresadas no coinciden'
})

extend('email', {
  ...email,
  message: 'El correo electrónico debe ser válido'
})

extend('required', {
  ...required,
  message: 'Este campo es requerido'
})
