import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

import store from './redux/_store'
import './index.css'
import Table from './commons/components/UI/Table'
// import Moment from 'react-moment'
import moment from 'moment'
import Login from './containers/Anonymous/Login'
import CalendarRange from './commons/components/UI/CalendarRange'
import CalendarSingle from './commons/components/UI/CalendarSingle'
import Register from './containers/Anonymous/Register'
// import AppRouter from './router'

/*const App = () => {
  return (
    <div>
      <h1>APP</h1>
    </div>
  )
}*/

/*ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppRouter/>
    </Router>
  </Provider>,
  document.getElementById('root')
)*/

/*ReactDOM.render(
  <Provider store={store}>
    <Router/>
  </Provider>,
)*/


/*const FormattedDate = (date) => {
  const dateToFormat = 'YYYY-MM-DD HH:mm'
  return (
    <Moment format={dateToFormat}>{date}</Moment>
  )
}*/

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2)
  }
]

const columns2 = [
  { id: 'employeeNo', label: 'Número de empleado', minWidth: 170 },
  { id: 'name', label: 'Nombre', minWidth: 100 },
  { id: 'firstname', label: 'Apellido Paterno', minWidth: 100 },
  { id: 'lastname', label: 'Apellido Materno', minWidth: 100 },
  { id: 'email', label: 'Correo Electrónico', minWidth: 100 },
  { id: 'updated', label: 'Fecha de actualización', minWidth: 100, align: 'right' },
  { id: 'status', label: 'Estatus', minWidth: 100 }
]

function createData(name, code, population, size) {
  const density = population / size
  return { name, code, population, size, density }
}

function createData2(employeeNo, name, firstname, lastname, email, updatedDate, status) {
  // const updated = <Moment parse="YYYY-MM-DD HH:mm">{updatedDate}</Moment>
  // const dateToFormat = 'YYYY-MM-DD HH:mm'
  // const updated = <Moment format={dateToFormat}>{new Date().toString()}</Moment>
  const updated = moment(updatedDate).format("DD/MM/YYYY HH:mm:ss")
  return { employeeNo, name, firstname, lastname, email, updated, status }
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767)
]

const rows2 = [
  createData2('1017979', 'José Alonso', 'González', 'Camarena', 'jose.gonzalez@elektra.com.mx', new Date(), 'Activo'),
  createData2('1017980', 'José Alonso', 'González', 'Camarena', 'jose.gonzalez@elektra.com.mx', new Date(), 'Activo'),
  createData2('1017981', 'José Alonso', 'González', 'Camarena', 'jose.gonzalez@elektra.com.mx', new Date(), 'Activo'),
  createData2('1017982', 'José Alonso', 'González', 'Camarena', 'jose.gonzalez@elektra.com.mx', new Date(), 'Activo'),
  createData2('1017983', 'José Alonso', 'González', 'Camarena', 'jose.gonzalez@elektra.com.mx', new Date(), 'Activo'),
  createData2('1017984', 'José Alonso', 'González', 'Camarena', 'jose.gonzalez@elektra.com.mx', new Date(), 'Activo'),
  createData2('1017985', 'José Alonso', 'González', 'Camarena', 'jose.gonzalez@elektra.com.mx', new Date(), 'Activo'),
  createData2('1017986', 'José Alonso', 'González', 'Camarena', 'jose.gonzalez@elektra.com.mx', new Date(), 'Activo'),
  createData2('1017987', 'José Alonso', 'González', 'Camarena', 'jose.gonzalez@elektra.com.mx', new Date(), 'Activo'),
  createData2('1017988', 'José Alonso', 'González', 'Camarena', 'jose.gonzalez@elektra.com.mx', new Date(), 'Activo'),
  createData2('1017989', 'José Alonso', 'González', 'Camarena', 'jose.gonzalez@elektra.com.mx', new Date(), 'Activo'),
  createData2('1017990', 'José Alonso', 'González', 'Camarena', 'jose.gonzalez@elektra.com.mx', new Date(), 'Activo'),
  createData2('1017991', 'José Alonso', 'González', 'Camarena', 'jose.gonzalez@elektra.com.mx', new Date(), 'Activo'),
  createData2('1017992', 'José Alonso', 'González', 'Camarena', 'jose.gonzalez@elektra.com.mx', new Date(), 'Activo'),
  createData2('1017993', 'José Alonso', 'González', 'Camarena', 'jose.gonzalez@elektra.com.mx', new Date(), 'Activo'),
  createData2('1017994', 'José Alonso', 'González', 'Camarena', 'jose.gonzalez@elektra.com.mx', new Date(), 'Activo'),
  createData2('1017995', 'José Alonso', 'González', 'Camarena', 'jose.gonzalez@elektra.com.mx', new Date(), 'Activo'),
  createData2('1017996', 'José Alonso', 'González', 'Camarena', 'jose.gonzalez@elektra.com.mx', new Date(), 'Activo'),
  createData2('1017997', 'José Alonso', 'González', 'Camarena', 'jose.gonzalez@elektra.com.mx', new Date(), 'Activo'),
  createData2('1017998', 'José Alonso', 'González', 'Camarena', 'jose.gonzalez@elektra.com.mx', new Date(), 'Activo'),
  createData2('1017999', 'José Alonso', 'González', 'Camarena', 'jose.gonzalez@elektra.com.mx', new Date(), 'Activo'),
  createData2('1018000', 'José Alonso', 'González', 'Camarena', 'jose.gonzalez@elektra.com.mx', new Date(), 'Activo')
]

const root = createRoot(document.getElementById('root'))
root.render(
  <Router>
    <Provider store={store}>
      {/*<Login/>*/}
      {/*<Table
        columns={columns}
        rows={rows}
        label={'Anonymous Data'}
        index={0}
      />
      <Table
        columns={columns2}
        rows={rows2}
        label={'Lista de Usuarios'}
        index={1}
      />*/}
      {/*<CalendarSingle/>
      <CalendarRange/>*/}
      {/*<Login/>*/}
      <Register/>
    </Provider>
  </Router>
)

reportWebVitals()
