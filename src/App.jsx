

import './App.css'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
import PieChart from './components/PieChart/PieChart'
import PriceOptions from './components/PriceOptions/PriceOptions'
import Slider from './components/Slider/Slider'

// import Spinner from './components/Spinner/Spinner'
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {
  

  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl bg-rose-600'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <div style={{ width: '400px', height: '400px' }}> {/* Adjust the size as needed */}
       
        <PieChart></PieChart>
      </div>
      {/* <Spinner></Spinner> */}
        <Slider></Slider>
      
    </>
  )
}

export default App
