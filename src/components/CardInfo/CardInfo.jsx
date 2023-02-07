import React from 'react'
import styles from './styles.module.scss'
import { useSelector } from "react-redux"
import weatherIcons from '../../assets/jsonData/weatherIcons.json'
import { SlHome } from "react-icons/sl";
import { setLocationData } from '../../services/localStorageService'

export default function CardInfo() {

    const weatherState = useSelector(state => state.weather)

    // Get icon
    const [icon] = weatherIcons.filter((item) => item.icon === weatherState.weather[0].icon)

    // Save city data on localstorage
    const setHome = () => {
        setLocationData(weatherState.name, weatherState.sys.country)
    }

    return (
        <div className={styles.card}>
            <div className={styles.card_header}>
                <div>
                    {weatherState.name}
                </div>
                <button type="button" onClick={setHome}><SlHome /></button>
            </div>
            <div className={styles.card_body}>
                <img src={icon.url} alt="" />
                <div className={styles.card_temp}>
                    {weatherState.main.temp.toFixed()}
                </div>
                <span>
                    °C
                </span>
                <div>
                    <div className={styles.card_description}>
                        {weatherState.weather[0].description}
                    </div>
                    <div>
                        Sensación térmica: {weatherState.main.feels_like.toFixed()}°
                    </div>
                </div>
            </div>
            <div className={styles.card_footer}>
                <div>
                    <div className={styles.card_detailItem}>
                        <span><strong>Viento</strong></span>
                        <div>{(weatherState.wind.speed * 3.6).toFixed() + ' km/h'}</div>
                    </div>
                    <div className={styles.card_detailItem}>
                        <span><strong>Humedad</strong></span>
                        <div>{weatherState.main.humidity + '%'}</div>
                    </div>
                    <div className={styles.card_detailItem}>
                        <span><strong>Visibilidad</strong></span>
                        <div>{(weatherState.visibility / 1000).toFixed() + ' km'}</div>
                    </div>
                    <div className={styles.card_detailItem}>
                        <span><strong>Presión</strong></span>
                        <div>{weatherState.main.pressure + ' hPa'}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}