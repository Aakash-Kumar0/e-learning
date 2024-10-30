
import Hero from './components/Hero/Hero'
import './App.css'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import Subscribe from './components/Subscribe/Subscribe'
import Banner1 from './components/Banner/Banner1'
import Footer from './components/Footer/Footer'
function App() {
  
  

  return (
    <>
      <main className='overflow-x-hidden bg-white text-dark'>
      {/* <Navbar/> */}
      <Hero/>
      <Services/>
      <Banner/>
      <Subscribe/>
      <Banner1/>
      <Footer/>
      </main>
    </>
  )
}

export default App
