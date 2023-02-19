import styles from '@/styles/Footer.module.css'
import { Space_Mono } from '@next/font/google'

const spaceMono = Space_Mono({
    weight: '400',
    subsets: ['latin'],
})

export default function Footer({name}) {
    const year = new Date().getFullYear()
    return (
        <div className={`${styles.footerWrapper} ${spaceMono.className}`}>
            <p className={styles.footerText}>© {year} {name}</p>
            <p className={styles.footerText}>Powered by <a href='https://www.devhive.me/' target="_blank">DevHive</a></p>
        </div>
    )
}