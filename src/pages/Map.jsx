import React from 'react'
import Layout from '../components/Layout/Layout'
import MapsGoogle from '../components/MapsGoogle/MapsGoogle'

export default function Map() {

    return (
        <Layout>
            <h1 className='title_section'>Tiempo actual</h1>
            <MapsGoogle />
        </Layout>
    )
}