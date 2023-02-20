import styles from '@/styles/Contact.module.css'
import { Space_Mono, Roboto } from '@next/font/google'

const spaceMono = Space_Mono({
    weight: '400',
    subsets: ['latin'],
  })
  
  const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin'],
  })

export default function Contact({isOpenForNewOpportunities, email}) {
    return (
        <div id='contact' className={`${styles.contactWrapper} ${roboto.className}`}>
            <h1 className={`contactHeading ${spaceMono.className}`}>What's Next?</h1>
            <h2 className={styles.contactSubtitle}>Get In Touch</h2>
            {isOpenForNewOpportunities ? 
                (<p className={styles.contactText}>I'm currently open for new opportunities, feel free to get contact. If you have any questions or want to talk, I will do my best to get back.</p>) : 
                (<p className={styles.contactText}>Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>)
            }
            <a href={`mailto:${email}`} className={styles.contactButton}>Say Hello</a>
        </div>
    )
}