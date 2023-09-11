/* eslint-disable react/prop-types */
import './app.css'
import {createBrowserRouter, Navigate, Outlet, RouterProvider} from 'react-router-dom'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import NavBar from './components/navBar/NavBar'
import LeftBar from './components/leftBar/LeftBar'
import RightBar from './components/rightBar/RightBar'

function App() {

  const currentUser = true

  const Layout = ()=>{
    return(
      <div>
        <NavBar/>
        <div style={{display:'flex'}}>
          <LeftBar/>
          <Outlet/>
          <RightBar/>
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
