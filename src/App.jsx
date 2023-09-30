import './App.css'
import Navbar from './components/Navbar'
import PlaceCard from './components/PlaceCard'
import data from './data'

function App() {

  const cards = data.map(item => {
    return (
        <PlaceCard 
            key={item.id}
            item={item}
        />
    )
  })

  return (
    <div className='container'>
        <Navbar />
        <section className='cards-list'>
            {cards}
        </section>
    </div>
  )
}

export default App
