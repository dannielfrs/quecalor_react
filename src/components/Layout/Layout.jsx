import React from 'react'
import Navbar from '../Navbar/Navbar'
import NavbarSearch from '../NavbarSearch/NavbarSearch'
import Footer from '../Footer/Footer'

export default function Layout({ children }) {

    return (
        <main>
            <header className='page_header'>
                <Navbar />
                <NavbarSearch />
            </header>
            <section className='page_section'>
                <div className='container'>
                    <div className='page_content'>
                        {children}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}