
import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import HomePage from './pages/teacher/homepage'
import MainLayout from './layout'
import Caldendar from './pages/commonPages/calendar'
import StudentList from './pages/teacher/students'
import CLassSchedule from './pages/teacher/schedule'
import Grades from './pages/teacher/grades'
import StudentGrade from './pages/admin/grades'
import Forum from './pages/commonPages/forum'
import Announcements from './pages/commonPages/announcements'
import Activities from './pages/commonPages/activities'
import Quizes from './pages/commonPages/quizes'
import SettingsTeacher from './pages/teacher/settings'
import Login from './pages/commonPages/loginpage'
import PrivateRoute from './auth/authServices'
import SubForum from './pages/commonPages/forum/subForum'
import TopicForum from './pages/commonPages/forum/topic'
import AdminHome from './pages/admin/home'
import AdminAuth from './auth/adminAuth'
import AdminStudentList from './pages/admin/studentList'
import { TeachersList } from './pages/admin/teacherslist'
import Profile from './pages/teacher/profile'
import AdminProfile from './pages/admin/adminProfile'
import Section from './pages/admin/section'
import SchoolCalendar from './pages/admin/calendar'
import Messages from './pages/admin/messages'
import SchoolReports from './pages/admin/reports'
import SchoolForum from './pages/admin/forum'
import SystemSettings from './pages/admin/settings'
import TestingLang from './pages/testinglang'
import ViewFaculty from './pages/admin/teacherslist/modals/viewFaculty'
function App() {


  function PungakPage() {
    return (
      <>
        Mary Grace R. Juan</>
    )
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PungakPage></PungakPage>}></Route>
        <Route element={<PrivateRoute></PrivateRoute>}>
          <Route path='/home' element={<HomePage></HomePage>}></Route>
          <Route path='/studentlist' element={<StudentList />}></Route>
          <Route path='/class-schedule' element={<CLassSchedule />}></Route>
          <Route path='/grades' element={<Grades />}></Route>
          <Route path='/forum' element={<Forum />}></Route>
          <Route path='/forum/:id' element={<SubForum />}></Route>
          <Route path='/forum/:id/:subid' element={<TopicForum />}></Route>

          <Route path='/announcements' element={<Announcements />}></Route>
          <Route path='/activities' element={<Activities />}></Route>
          <Route path='/quizes' element={<Quizes />}></Route>
          <Route path='/calendar' element={<Caldendar />}></Route>
          <Route path='/settings' element={<SettingsTeacher />}></Route>
        </Route>
        <Route element={<AdminAuth></AdminAuth>}>
          <Route path='/admin/home' element={<AdminStudentList />}></Route>
          <Route path='/admin/students' element={<AdminStudentList />}></Route>
          <Route path='/admin/teacherslist' element={<TeachersList />}></Route>
          <Route path='/admin/teacherslist/:id' element={<ViewFaculty />}></Route>
          <Route path='/admin/profile' element={<AdminProfile />}></Route>
          <Route path='/admin/section' element={<Section />}></Route>
          <Route path='/admin/calendar' element={<SchoolCalendar />}></Route>
          <Route path='/admin/messages' element={<Messages />}></Route>
          <Route path='/admin/reports' element={<SchoolReports />}></Route>
          <Route path='/admin/forum' element={<SchoolForum />}></Route>
          <Route path='/admin/settings' element={<SystemSettings />}></Route>
          <Route path='/admin/grades' element={<StudentGrade />}></Route>


        </Route>
        <Route path='/testing' element={<TestingLang />}></Route>
      </Routes>
      <Routes>
      </Routes>
    </BrowserRouter>
  )
}

export default App
