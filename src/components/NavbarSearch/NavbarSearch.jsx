import React from 'react'
import styles from './styles.module.scss'
import Search from '../Search/Search'

export default function NavbarSearch() {

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_container}>
                <div className={styles.navbar_item}>
                    <Search />
                </div>
            </div>
        </nav>
    )
}