import Header from './components/Header'
import HeroComponent from './components/HeroComponent'
import MyWorks from './components/MyWorks'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header/>
     <HeroComponent title="Ciao, sono Antonio Antonelli" subtitle="Junior Data Analyst"
                     description="Trasformo i dati grezzi in informazioni chiare e utili: pulizia e analisi con Excel, SQL e Python, dashboard interattive con Power BI."
                    buttonText="Guarda i miei progetti" buttonLink="#work" backgroundColor="bg-gradient-to-r from-blue-500 to-green-500"
                    videoMp4="/videos/hero.mp4" videoWebm="/videos/hero.webm" videoPoster="/videos/hero-poster.jpg"/>
    
    <MyWorks/>
    <Footer/>
    </>
  )
}

export default App
