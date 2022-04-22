import React from 'react'
// import { Navigate, Route } from "react-router-dom"
// import { ADMIN_ROLE } from '../router-constants'
// import Home from '../../containers/Protected/Home'
import Register from '../../containers/Anonymous/Register'
import Login from '../../containers/Anonymous/Login'
import Profile from '../../containers/Anonymous/Profile'

export const AnonymousRoutes = [
  {
    element: <Login/>,
    path: '/login'
  },
  {
    element: <Register/>,
    path: '/register'
  },
  {
    element: <Profile/>,
    path: '/profile'
  }
]

/*const generateRedirect = (user) => {
  console.log(user)
  if (user) {
    switch (user.role_id) {
      // case TEACHER_ROLE:
      //   return <Redirect to={`${prefixes.TEACHER}/home`}/>
      // case STUDENT_ROLE:
      //   return <Redirect to={`${prefixes.STUDENT}/home`}/>
      case ADMIN_ROLE:
      default:
        return <Route path="home" element={<Home/>}/>
      // return <Navigate to={`${prefixes.ADMIN}/home`}/>
    }
  }
}

const useAuth = () => {
  return true
}

const AnonymousPrivateRoute = ({ children }) => {
  console.log(children)
  // console.log('AnonymousPrivateRoute: rest: ', { ...rest })
  // console.log('AnonymousPrivateRoute: element: ', Component)
  // return <Route path='/login' element={<Login/>} />
  const auth = useAuth()
  return auth ? children : <Navigate to="/"/>
  // return <Route {...rest} element={props => (false ? <Component {...props} /> : generateRedirect(null))}/>

  // return <Route {...rest} render={props => <Component {...props} />}/>
}

export default AnonymousPrivateRoute*/
