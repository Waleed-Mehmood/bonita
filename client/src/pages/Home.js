import React from 'react'
import Navbar from '../components/Navbar'
import Service from '../components/Service'
import OurStory from '../components/OurStory'
import Analysis from '../components/Analysis'
import CustomNails from '../components/CustomNails'
import NailCategoriesSection from '../components/NailCategoriesSection'
import NewsRefinedTrends from '../components/NewsRefinedTrends'
import FollowUsSection from '../components/FollowUsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Service />
      <OurStory />
      <Analysis />
      <CustomNails />
      <NailCategoriesSection />
      <NewsRefinedTrends />
      <FollowUsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Home
