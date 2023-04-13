import React from 'react'
import Banner from '../components/Banner'
import JobSearch from '../components/JobSearch'
import JobCategories from '../components/JobCategories'
import CareerAdvice from '../components/CareerAdvice'
import articles from '../data/articles'

const Home = () => {
  return (
    <div className='h-full '>
        <Banner />
        <JobSearch/>
        <JobCategories/>
        <CareerAdvice articles={articles}/>
    </div>
  )
}

export default Home