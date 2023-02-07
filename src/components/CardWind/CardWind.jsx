import React from 'react'
import styles from './styles.module.scss'
import { useSelector } from "react-redux"
import { BsArrowUp, BsWind } from "react-icons/bs";

export default function CardWind() {

    const weatherState = useSelector(state => state.weather)

    return (
        <div className={styles.card}>
            <div className={styles.card_header}>
                <BsWind /> Dirección del viento
            </div>
            <div className={styles.card_body}>
                <div >
                    n
                </div>
                <div className={styles.card_position}>
                    <div >
                        o
                    </div>
                    <div className={styles.card_arrow}>
                        <BsArrowUp style={{ transform: `rotate(${weatherState.wind.deg}deg)` }} />
                    </div>
                    <div>
                        e
                    </div>
                </div>
                <div >
                    s
                </div>
            </div>
            <div className={styles.card_footer}>
                Velocidad: {(weatherState.wind.speed * 3.6).toFixed() + ' km/h'}
            </div>
        </div>
    )
}