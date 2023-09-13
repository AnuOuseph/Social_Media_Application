/* eslint-disable react/prop-types */
import './app.scss'
import {createBrowserRouter, Navigate, Outlet, RouterProvider} from 'react-router-dom'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import NavBar from './components/navBar/NavBar'
import LeftBar from './components/leftBar/LeftBar'
import RightBar from './components/rightBar/RightBar'
import { useContext } from 'react'
import { DarkModeContext } from './context/DarkModeContext'
import { AuthContext } from './context/AuthContext'
import Explore from './pages/explore/Explore'

function App() {

  const {currentUser} = useContext(AuthContext);
  const {darkMode} = useContext(DarkModeContext)

  const Layout = ()=>{
    return(
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <NavBar/>
        <div style={{display:'flex'}}>
          <LeftBar/>
          <div style={{flex:6}}>
            <Outlet/>
          </div>
          <RightBar/>
        </div>
      </div>
    )
  }

  const Layout2 = ()=>{
    return(
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <NavBar/>
        <div style={{display:'flex'}}>
          <LeftBar/>
          <div style={{flex:9}}>
            <Outlet/>
          </div>
        </div>
      </div>
    )
  }

  const ProtectedRouter = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRouter>
                <Layout/>
                </ProtectedRouter>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/profile/:id",
          element: <Profile/>
        }
      ]
    },
    {
      path: "/",
      element: <ProtectedRouter>
                <Layout2/>
                </ProtectedRouter>,
      children: [
        {
          path: "/explore",
          element: <Explore/>
        },
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Signup/>,
    },
  ]);
  
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
