import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import AdminDashboard from './Admin/Dashboard'
import AdminHome from './Admin/Home'
import UserDashboard from './User/Dashboard'
import UserHome from './User/Home'
import Explore from './User/Explore'
import CourseDetails from './User/CourseDetails'
import Manage from './Admin/Manage'
import AddCourse from './Admin/AddCourses'
import UpdateDetails from './Admin/UpdateDetails'

import Subscribed from './User/Subscribe'

import SavedList from './User/SavedList'
import ViewCourses from './Admin/ViewAllCourses'
import ViewUsers from './Admin/ViewUsers'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage></LandingPage>}></Route>
          <Route path='/login' element={<LandingPage></LandingPage>}></Route>

          <Route path='/admin' element={<AdminDashboard></AdminDashboard>}>
            <Route path='home' element={<AdminHome></AdminHome>}></Route>
            <Route path='add' element={<AddCourse></AddCourse>}></Route>
            <Route path='manage' element={<Manage></Manage>}></Route>            
            <Route path='update/:pid' element={<UpdateDetails></UpdateDetails>}></Route>
            <Route path='viewall' element={<ViewCourses></ViewCourses>}></Route>            
            <Route path='viewusers' element={<ViewUsers></ViewUsers>}></Route>            
          </Route>
          
          <Route path='/user' element={<UserDashboard></UserDashboard>}>
            <Route path='home' element={<UserHome></UserHome>}></Route>
            <Route path='explore' element={<Explore></Explore>}></Route>
            <Route path='details/:pid' element={<CourseDetails></CourseDetails>}></Route>
            <Route path='saved' element={<SavedList></SavedList>}></Route>
            <Route path='subscription' element={<Subscribed></Subscribed>}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
