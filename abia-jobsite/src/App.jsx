import React from 'react'
import Indexpage from './components/Indexpage'
import Loginpage from './components/Loginpage'
import Signup from './components/Signup'
import Helpcenter from './components/Helpcenter'
import Joblisting from './components/Joblisting'
import Talentdirectory from './components/Talentdirectory'
import Dashboard from './components/Dashboard'
import Empowerment from './components/Empowerment'
import Blogs from './components/Blogs'
import About from './components/About'
import Contact from './components/Contact'
import Admin from './components/Admin'
import { Routes, Route } from 'react-router-dom'
import Signupemployer from './components/Signupemployer'
import Signupjobseeker from './Signupjobseeker'






function App() {
  return (
    <>
      <Routes>

        <Route path='/Helpcenter' element={<Helpcenter />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Signupemployer' element={<Signupemployer />} />
        <Route path='/Signupjobseeker' element={<Signupjobseeker />} />
        <Route path='/Login' element={<Loginpage />} />

        <Route path='/' element={<Indexpage />} />
        <Route path='/Joblisting' element={<Joblisting />} />
        <Route path='/Talent' element={<Talentdirectory />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Empowerment' element={<Empowerment />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Admin' element={<Admin />} />
    
      </Routes>

    </>
  )
}

export default App
