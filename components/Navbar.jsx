import React, {useState} from 'react'
import styles from '@/styles/Navbar.module.css'
import {Space_Mono} from '@next/font/google'

const spaceMono = Space_Mono({
    weight: '400',
    subsets: ['latin'],
 })

export default function Navbar({userData}) {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <div className={`${spaceMono.className} ${styles.wrapper}`}>
            <div className={styles.logoWrapper}>
                <a href={userData.github_url}>{userData.username}</a>
            </div>
            <ul className={`${styles.navbarElements} ${isOpen? '' : styles.sideBarHide}`}>
                {userData.readme && <li onClick = {toggle} className={`${styles.navItem} ${isOpen? '' : styles.navItemSlide}`}><a href='#about'>About</a></li>}
                {userData.repos.length!==0 && <li onClick = {toggle} className={`${styles.navItem} ${isOpen? '' : styles.navItemSlide}`}><a href='#projects'>Projects</a></li>}
                <li onClick = {toggle} className={`${styles.navItem} ${isOpen? '' : styles.navItemSlide}`}><a href='#contact'>Contact</a></li>
            </ul>
            <div className={styles.drawer}>
                <button className={styles.toggleButton} onClick={toggle}>
                    <span className={`${styles.toggleButtonLine} ${!isOpen? '' : styles.cross}`}></span>
                    <span className={`${styles.toggleButtonLine} ${!isOpen? '' : styles.cross}`}></span>
                    <span className={`${styles.toggleButtonLine} ${!isOpen? '' : styles.cross}`}></span>
                </button>
            </div>
        </div>
                
    )
}