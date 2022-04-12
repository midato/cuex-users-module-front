import { ErrorMessage, Field, Form, Formik } from "formik"
import "./Register.css"

const styles = {
  textAlign: "center"
}

const Register = () => (

  <div>
    <h3 style={styles}>Registro de usuarios</h3>
    <Formik
      initialValues={{ email: "", name: "", firstname: "", lastname: "" }}
      validate={values => {
        const errors = {}

        if (!values.email) {
          errors.email = "El correo es necesario"
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "El correo es inválido"
        }

        if (!values.name) {
          errors.name = "El nombre es necesario"
        } else if (
          !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)
        ) {
          errors.name = "El nombre es inválido"
        }

        if (!values.firstname) {
          errors.firstname = "El apellido materno es necesario"
        } else if (
          !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.firstname)
        ) {
          errors.firstname = "El apellido paterno es inválido"
        }

        if (!values.lastname) {
          errors.lastname = "El apellido materno es necesario"
        } else if (
          !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.lastname)
        ) {
          errors.lastname = "El apellido materno es inválido"
        }
        return errors
      }}

      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 2000)
      }}
    >

      {({ isSubmitting }) => (
        <Form className="formulario">
          <div>
            <label htmlFor="email">* Correo electrónico:</label>
            <Field type="text"
                   name="email"
                   placeholder="miguel.garcias@elektra.com.mx"
            />
            <ErrorMessage
              className="error"
              name="email"
              component="div"
            />
          </div>
          <div>
            <label htmlFor="name">* Nombre(s):</label>
            <Field type="name"
                   name="name"
                   placeholder="Miguel Angel"
            />
            <ErrorMessage className="error" name="name" component="div"/>
          </div>
          <div>
            <label htmlFor="name">* Apellido paterno:</label>
            <Field type="firstname"
                   name="firstname"
                   placeholder="García"
            />
            <ErrorMessage className="error" name="firstname" component="div"/>
          </div>
          <div>
            <label htmlFor="name">* Apellido materno:</label>
            <Field type="lastname"
                   name="lastname"
                   placeholder="Santiago"
            />
            <ErrorMessage className="error" name="lastname" component="div"/>
          </div>
          <div>
            <label htmlFor="gender">* Sexo:</label>
            <Field as="select"
                   name="gender">
              <option value="F">Femenino</option>
              <option value="M">Masculino</option>
            </Field>
          </div>
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

export default Register
