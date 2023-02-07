import React, { } from 'react'
import { useSelector } from "react-redux"
import Layout from '../components/Layout/Layout'
import CardInfo from '../components/CardInfo/CardInfo'
import CardWind from '../components/CardWind/CardWind'
import Slideshow from '../components/Slideshow/Slideshow'
import CardTable from '../components/CardTable/CardTable'

export default function Home() {

    const weatherState = useSelector(state => state.weather)

    return (
        <Layout>
            <h1 className='title_section'>Tiempo actual</h1>
            <div className='content_section'>
                <div className='col-8 col-md-12 row'>
                    <div className='col-12 p-1'>
                        {weatherState.main && <CardInfo />}
                    </div>
                    <div className="col-5 col-xs-12 p-1">
                        {weatherState.main && <CardWind />}
                    </div>
                    <div className="col-7 col-xs-12 p-1">
                        {weatherState.main && <CardTable />}
                    </div>
                </div>
                <div className="col-4 col-md-6 col-xs-12 p-1">
                    <Slideshow />
                </div>
            </div>
        </Layout>
    )
}
