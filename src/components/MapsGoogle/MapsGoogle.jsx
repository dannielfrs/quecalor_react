import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { useSelector } from "react-redux"
import { GoogleMap, LoadScript, InfoBox } from '@react-google-maps/api'
import weatherIcons from '../../assets/jsonData/weatherIcons.json'
import MapInfoBox from '../MapInfoBox/MapInfoBox'

const containerStyle = {
    width: '100%',
    height: '100%'
};

export default function MapsGoogle() {

    const weatherState = useSelector(state => state.weather)
    const suggestedWeathersState = useSelector(state => state.suggestedWeathers)
    const [loading, setLoading] = useState(true)
    const [icon, setIcon] = useState()

    // Get icons
    const icons = suggestedWeathersState.map((item) => {
        const [icon] = weatherIcons.filter((icon) => icon.icon === item.weather[0].icon)
        return icon
    })

    useEffect(() => {
        // If weather data is available then load map
        if (Object.keys(weatherState).length !== 0) {
            setLoading(false)
            const [icon] = weatherIcons.filter((item) => item.icon === weatherState.weather[0].icon)
            setIcon(icon)
        } else {
            setLoading(true)
        }
    }, [weatherState])

    return (
        <div className={styles.card}>
            <div className={styles.card_body}>
                {loading ? (
                    <div>
                        Loading...
                    </div>
                ) : (
                    <LoadScript
                        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                    >
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={{ lat: weatherState.coord.lat, lng: weatherState.coord.lon }}
                            zoom={6}
                        >
                            <InfoBox
                                position={{ lat: weatherState.coord.lat, lng: weatherState.coord.lon }}
                            >
                                <MapInfoBox
                                    name={weatherState.name}
                                    temp={weatherState.main.temp.toFixed()}
                                    icon={icon.url}
                                />
                            </InfoBox>
                            {suggestedWeathersState.map((item, index) => {
                                return (
                                    <InfoBox
                                        position={{ lat: item.coord.lat, lng: item.coord.lon }}
                                        key={index}
                                    >
                                        <MapInfoBox
                                            name={item.name}
                                            temp={item.main.temp.toFixed()}
                                            icon={icons[index].url}
                                        />
                                    </InfoBox>
                                )
                            })}
                        </GoogleMap>
                    </LoadScript>
                )}
            </div>
        </div>
    )
}