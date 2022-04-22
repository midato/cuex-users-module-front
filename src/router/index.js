import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Home from '../containers/Protected/Home'
import { AnonymousRoutes } from './anonymous'
import Header from '../commons/components/Layout/Header'

const Loader = () => {
  return <div>Cargando</div>
}

const HeaderStyle = styled.header`
  background: blue;
  color: #fff;
`

/*const Header = () => {
  return (
    <HeaderStyle>
      <h1>Encabezado</h1>
    </HeaderStyle>
  )
}*/

const FooterStyle = styled.footer`
  background: #639e0b;
  color: #fff;
`
const Footer = () => {
  return (
    <FooterStyle>
      <h1>Pie de Página</h1>
    </FooterStyle>
  )
}

const AppRouter = () => {
  // let location = useLocation()
  let navigate = useNavigate()
  const [user, setUser] = useState(undefined)
  const [loading, setLoading] = useState(false)
  const [auth, setAuth] = useState(false)
  console.log(auth)

  const useAuth = () => {
    return !auth
  }

  const generateDefaultRoute = () => {
    console.log('generateDefaultRoute: auth: ', auth)
    navigate('/login')
    // return <Navigate to="/login" replace/>
  }


  const renderRouter = () => {
    return (
      <div className="overflow-hidden position-relative">
        {loading && <Loader/>}
        {auth && <Header/>}
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/*<Route path="/login" element={<Login/>}/>*/}
          {/*<Route path="/register" element={<Register/>}/>*/}
          {AnonymousRoutes.map((e, i) => {
            console.log(e.path)
            /*return <Route
              key={`ar_${i}`}
              path={e.path}
              element={
                <PrivateRoute>
                  {e.element}
                </PrivateRoute>
              }
            />*/
            return <Route
              key={`ar_${i}`}
              path={e.path}
              element={e.element}
            />
          })}
          {!auth && generateDefaultRoute()}
        </Routes>
        {user && <Footer/>}
      </div>
    )
  }

  /*const PrivateRoute = ({ children }) => {
    const auth = useAuth()
    console.log('private route, auth: ', auth)
    const _children = React.Children.map(children, (child) => {
      let props = {}
      return React.cloneElement(child, props)
    })
    return auth ? _children : <Navigate to="/"/>
  }*/

  useEffect(() => {
    console.log('effect')
    const _auth = async () => setAuth(useAuth())
    _auth()
    return () => {
    }
  }, [])

  return !auth ? <></> : renderRouter()
  // return renderRouter()
}
export default AppRouter

