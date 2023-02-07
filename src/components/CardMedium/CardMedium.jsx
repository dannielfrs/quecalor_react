import React from 'react'
import styles from './styles.module.scss'

export default function CardMedium(props) {

    return (
        <div className={styles.card}>
            <div className={styles.card_header}>
                {props.name}
            </div>
            <div className={styles.card_body}>
                <img src={props.icon} alt="" />
                <div className={styles.card_temp}>
                    {props.temp}
                </div>
                <span>
                    °C
                </span>
                <div>
                    <div className={styles.card_description}>
                        {props.description}
                    </div>
                    <div>
                        Sensación térmica: {props.feels_like}°
                    </div>
                    <div>
                        Max: {props.max}°
                    </div>
                    <div>
                        Min: {props.min}°
                    </div>
                </div>
            </div>
        </div>
    )
}