/* eslint-disable react/prop-types */
import './app.scss'
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import NavBar from './components/navBar/NavBar'
import LeftBar from './components/leftBar/LeftBar'
import RightBar from './components/rightBar/RightBar'
import { useContext } from 'react'
import { DarkModeContext } from './context/DarkModeContext'
import Explore from './pages/explore/Explore'
import Message from './pages/message/Message'

function App() {

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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
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
      element: <Layout2/>,
      children: [
        {
          path: "/explore",
          element: <Explore/>
        },
        {
          path: "/message",
          element: <Message/>
        }
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
