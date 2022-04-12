import React from 'react'
import { Navigate, Route } from "react-router-dom"
import Login from '../../containers/Anonymous/Login'
import { ADMIN_ROLE } from '../router-constants'
import Home from '../../containers/Protected/Home'

export const AnonymousRoutes = [
  {
    component: Login,
    path: '/login'
  }
]

const generateRedirect = (user) => {
  console.log(user)
  if (user) {
    switch (user.role_id) {
      case ADMIN_ROLE:
      default:
        return <Route path="home" element={<Home />}/>
        // return <Navigate to={`${prefixes.ADMIN}/home`}/>
      /*case TEACHER_ROLE:
        return <Redirect to={`${prefixes.TEACHER}/home`}/>
      case STUDENT_ROLE:
        return <Redirect to={`${prefixes.STUDENT}/home`}/>*/
    }
  }
}

const AnonymousPrivateRoute = ({ user, component: Component, ...rest }) => {
  console.log({ ...rest })
  console.log(user)
  return <Route {...rest} render={props => (!user ? <Component {...props} /> : generateRedirect(user))}/>
}

export default AnonymousPrivateRoute
