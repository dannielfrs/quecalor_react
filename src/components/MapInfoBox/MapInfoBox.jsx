import React from 'react'
import styles from './styles.module.scss'

export default function MapInfoBox(props) {

    return (
        <div className={styles.mapInfoBox}>
            <div className={styles.mapInfoBox_icon}>
                <img src={props.icon} alt="" />
            </div>
            <div className={styles.mapInfoBox_body}>
                <div>{props.name}</div>
                <div><strong>{props.temp + " °C"}</strong></div>
            </div>
        </div>
    )
}