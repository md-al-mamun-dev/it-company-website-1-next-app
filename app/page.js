import Image from 'next/image'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'
import Hero from '@/src/components/sections/Hero'
import ServiceType from '@/src/components/sections/ServiceType'
import Services from '@/src/components/sections/Services'
import ProductItems from '@/src/components/sections/ProductItems'
import SpecialFeatures from '@/src/components/sections/SpecialFeatures'
import Partners from '@/src/components/sections/Partners'
import Clients from '@/src/components/sections/Clients'
import Contacts from '@/src/components/sections/Contacts'


export default function Home() {
  return (
    <>
      <Header/>
        <div>
          <Hero/>
          <ServiceType/>
          <Services/>
          <ProductItems/>
          <SpecialFeatures/>
          <Partners/>
          <Clients/>
          <Contacts/>
        </div>
      <Footer/>      
    </>
  )
}
