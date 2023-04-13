import React from 'react'
import { Routes, Route} from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import JobDetails from './pages/JobDetails'
import Blog from './pages/Blog'
import blogPosts from './data/blogPosts'

const App = () => {
  return (
    <div className='bg-white w-full overflow-hidden'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/job/:id' element={<JobDetails/>} />
        <Route path='/blog'  element={<Blog posts={blogPosts}/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App