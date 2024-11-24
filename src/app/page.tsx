import React from 'react'
import TopBar from './components/Topbar'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustedBy from './components/Trustedby'
import Achievements from './components/Achievements'
import Courses from './components/Courses'
import Testimonials from './components/Testimonial'
import Footer from './components/Footer'
import ExploreCourses from './components/ExploreCourses'
import Team from './components/Team'
// import ExploreCourses from './components/ExploreCourses'





const page = () => {
  return (
    <div>

<TopBar/>
<Header/>
<Hero/>
<TrustedBy/>
<ExploreCourses/>
<Achievements/>
<Courses/>
<Team/>
<Testimonials/>
<Footer/>
    </div>
  )
}

export default page