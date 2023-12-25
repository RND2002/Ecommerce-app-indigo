import React from 'react'
import MainCarousel from '../../Component/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../Component/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from "../../../Data/mens_kurta";
//C:\Users\aryan\Desktop\Dev\indigo\src\Data\mens_kurta.js

const Homepage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel data={mens_kurta} sectionname={"Men's Kurta"} />
            <HomeSectionCarousel data={mens_kurta} sectionname={"men's Shoes"}/>
            <HomeSectionCarousel data={mens_kurta} sectionname={"Men's Shirt"}/>
            <HomeSectionCarousel data={mens_kurta} sectionname={"Women'Saree"}/>
            <HomeSectionCarousel data={mens_kurta} sectionname={"Womens's Fashiont"}/>
        </div>
    </div>
  )
}

export default Homepage