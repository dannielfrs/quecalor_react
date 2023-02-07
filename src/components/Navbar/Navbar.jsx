import React, { useState, useRef, useEffect } from 'react'
import styles from './styles.module.scss'
import { FaBars, FaTimes } from "react-icons/fa";
import { BsCloudSun } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {

    const [visible, setVisible] = useState(false);
    const links = useRef(new Array())
    const location = useLocation()

    const toggleMenu = () => {
        setVisible(!visible)
    }

    const hideMenu = () => {
        setVisible(false)
    }

    useEffect(() => {
        links.current.forEach(link => {
            link.classList.remove(styles.active)
            if (link.attributes.href.nodeValue === location.pathname) {
                link.classList.add(styles.active)
            }
        })
    }, [])

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_container}>
                <div className={styles.navbar_left}>
                    <div className={styles.navbar_item}>
                        <Link
                            to='/quecalor/'
                            className={styles.navbar_brand}
                            onClick={hideMenu}
                        >
                            <BsCloudSun />QueCalor.com
                        </Link>
                    </div>
                    <ul className={visible ? `${styles.navbar_menu} ${styles.active}` : styles.navbar_menu} id='links'>
                        <li className={styles.navbar_item} >
                            <Link
                                to="/quecalor/"
                                className={styles.navbar_button}
                                ref={element => links.current[0] = element}
                                onClick={hideMenu}>
                                Tiempo
                            </Link>
                        </li>
                        <li className={styles.navbar_item} >
                            <Link
                                to='/quecalor/map'
                                className={styles.navbar_button}
                                ref={element => links.current[1] = element}
                                onClick={hideMenu}>
                                Mapa
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.navbar_right}>
                    <div className={styles.navbar_icon} onClick={toggleMenu}>
                        {visible ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </div>
        </nav>
    )
}