import { useEffect, useMemo } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch } from "react-redux"
import './app.scss'
import './assets/libraries/aos'
import { getLocationData } from './services/localStorageService'
import { getWeather, getSuggestedWeathers } from './store/actions/weatherActions'
import citiesData from './assets/jsonData/citiesData.json'
import Home from './pages/Home'
import Map from './pages/Map'

function App() {

  const dispatch = useDispatch()
  const cityData = useMemo(() => getLocationData(), [])

  useEffect(() => {
    dispatch(getWeather(cityData))
    dispatch(getSuggestedWeathers(citiesData))
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/quecalor/" element={<Home />} />
        <Route path="/quecalor/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;