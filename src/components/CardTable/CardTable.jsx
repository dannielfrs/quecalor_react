import React from 'react'
import styles from './styles.module.scss'
import { useSelector } from "react-redux"
import { FaTemperatureHigh, FaTemperatureLow, FaSun, FaMoon } from "react-icons/fa";

export default function CardTable() {

    const weatherState = useSelector(state => state.weather)

    // Convert unix UTC time format
    const sunset = new Date(weatherState.sys.sunset * 1000)
    const sunrise = new Date(weatherState.sys.sunrise * 1000)

    return (
        <div className={styles.card}>
            <div className={styles.card_body}>
                <table className={styles.card_table}>
                    <tbody>
                        <tr>
                            <td className={styles.card_iconTempHigh}>
                                <FaTemperatureHigh />
                            </td>
                            <td>
                                Temperatura máxima
                            </td>
                            <td>
                                {weatherState.main.temp_max.toFixed()} °C
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.card_iconTempLow}>
                                <FaTemperatureLow />
                            </td>
                            <td>
                                Temperatura minima
                            </td>
                            <td>
                                {weatherState.main.temp_min.toFixed()} °C

                            </td>
                        </tr>
                        <tr>
                            <td className={styles.card_iconSun}>
                                <FaSun />
                            </td>
                            <td>
                                Salida del sol
                            </td>
                            <td>
                                {String(sunrise.getHours()).padStart(2, "0") + ":" + String(sunrise.getMinutes()).padStart(2, "0")}
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.card_iconMoon}>
                                <FaMoon />
                            </td>
                            <td>
                                Puesta del sol
                            </td>
                            <td>
                                {String(sunset.getHours()).padStart(2, "0") + ":" + String(sunset.getMinutes()).padStart(2, "0")}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}