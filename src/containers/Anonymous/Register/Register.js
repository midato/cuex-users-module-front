import React, { useEffect, useState } from 'react'

import { ErrorMessage, Field, Form, Formik, useField } from 'formik'

import { GEO } from '../../../commons/constants'
import { useDispatch, useSelector } from 'react-redux'
import { selectToken } from '../../../redux/selectors/user.selector'
import { getApiToken } from '../../../redux/actions/user.action'
import SelectList from '../../../commons/components/UI/Select/SelectList'
import Memo from '../../../commons/components/UI/Memo'
import styled from 'styled-components'

import { getLinearGradient } from '../../../commons/constants/styledFn'

import './../../../index.css'
import './Register.css'

const styles = {
  textAlign: 'center'
}

const Header = styled.header`
	/* background: linear-gradient(20deg, #1a523e, #17A14B); */
	/* background: var(--primary-dark-blue-green); */
  ${getLinearGradient('50deg', '#1a523e', '#3dae2b')}
	text-align: center;
	border-radius: 0.2em;
	color: #fff;
	padding: 0.3em;
	margin: 0.3;
	font-size: 14px;
`

const Register = () => {
  const dispatch = useDispatch()

  const [token, setToken] = useState('')
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  console.log(token)
  console.log(country)
  console.log(state)
  console.log(city)

  const t = useSelector(selectToken)
  // setToken(t.auth_token)
  // console.log(t && Object.keys(t).length > 0)
  // console.log(t)
  // if (t && Object.keys(t).length > 0) {
  //   console.log('aqui')
  // } else return null
  // // console.log(token)

  useEffect(() => {
    dispatch(getApiToken('get', GEO.TOKEN))
    return () => {
    }
  }, [])

  const onChangeValue = (event) => {
    console.log(event.target.value)
  }

  const handleTextArea = (event) => {
    console.log(event.target.value)
  }

  const MyTextArea = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props)
    console.log('MyTextArea: field: ', field)
    console.log('MyTextArea: meta: ', meta)
    console.log('MyTextArea: props: ', { ...props })
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <textarea className="text-area" {...field} {...props} />
        {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
      </>
    )
  }

  const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' })
    return (
      <>
        <label className="checkbox" style={{ display: 'flex' }}>
          <input {...field} {...props} type="checkbox"/>
          {children}
        </label>
        {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
      </>
    )
  }

  return (
    <div>
      <Header>
        <h3 style={styles}>Registro de usuarios</h3>
      </Header>
      <Formik
        initialValues={{ email: '', name: '', firstname: '', lastname: '' }}
        validate={(values) => {
          const errors = {}

          if (!values.email) {
            errors.email = 'El correo es necesario'
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'El correo es inválido'
          }

          if (!values.name) {
            errors.name = 'El nombre es necesario'
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
            errors.name = 'El nombre es inválido'
          }

          if (!values.firstname) {
            errors.firstname = 'El apellido materno es necesario'
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.firstname)) {
            errors.firstname = 'El apellido paterno es inválido'
          }

          if (!values.lastname) {
            errors.lastname = 'El apellido materno es necesario'
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.lastname)) {
            errors.lastname = 'El apellido materno es inválido'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 2000)
        }}>
        {({ isSubmitting }) => (
          <Form className="formulario">
            <div>
              <label htmlFor="email">* Correo electrónico:</label>
              <Field type="text" name="email" placeholder="miguel.garcias@elektra.com.mx"/>
              <ErrorMessage className="error" name="email" component="div"/>
            </div>
            <div>
              <label htmlFor="name">* Nombre(s):</label>
              <Field type="name" name="name" placeholder="Miguel Angel"/>
              <ErrorMessage className="error" name="name" component="div"/>
            </div>
            <div>
              <label htmlFor="name">* Apellido paterno:</label>
              <Field type="firstname" name="firstname" placeholder="García"/>
              <ErrorMessage className="error" name="firstname" component="div"/>
            </div>
            <div>
              <label htmlFor="name">* Apellido materno:</label>
              <Field type="lastname" name="lastname" placeholder="Santiago"/>
              <ErrorMessage className="error" name="lastname" component="div"/>
            </div>
            {/*<div>
            <label htmlFor="gender">* Sexo:</label>
            <Field as="select"
                   name="gender">
              <option value="F">Femenino</option>
              <option value="M">Masculino</option>
            </Field>
          </div>*/}
            {t && t.auth_token &&
              <SelectList labelText="paises" url={`${GEO.COUNTRIES}`} handleChange={(e) => setCountry(e.target.value)}
                          token={t.auth_token}/>}
            {country && <SelectList labelText="estados" url={`${GEO.STATES}/${country}`}
                                    handleChange={(e) => setState(e.target.value)} token={t.auth_token}/>}
            {state && <SelectList labelText="ciudades" url={`${GEO.CITIES}/${state}`}
                                  handleChange={(e) => setCity(e.target.value)} token={t.auth_token}/>}
            <div onChange={onChangeValue}>
              <label htmlFor="gender">Sexo</label>
              <input type="radio" value="Male" name="gender"/> Hombre
              <input type="radio" value="Female" name="gender"/> Mujer
              <input type="radio" value="Other" name="gender"/> Otro
            </div>

            {/*<div>
              <label htmlFor="comentario">Comentarios</label>
              <textarea name="comentario"
                        id="comentario"
                        cols="30"
                        rows="10"
                        placeholder="Ingrese la información solicitada"
                        onChange={handleTextArea}
              >
              </textarea>

            </div>*/}
            <MyTextArea label="Comentarios" name="comments" rows="6" placeholder="Escriba sus comentarios."/>

            <Memo label="Explique por que debe ser aceptado" placeholder="Escriba con libertad el texto que necesite"/>
            <Memo label="Explique por que debe ser aceptado 2"
                  placeholder="Escriba con libertad el texto que necesite"/>

            <MyCheckbox name="acceptedTerms">Acepto los términos y condiciones</MyCheckbox>
            <div>
              <button type="submit" disabled={isSubmitting}>
                Aceptar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Register
