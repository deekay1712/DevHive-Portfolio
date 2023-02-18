import styles from '@/styles/LandingPage.module.css'
import { Space_Mono, Roboto } from '@next/font/google';

const spaceMono = Space_Mono({
  weight: '400',
  subsets: ['latin'],
})

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
})

export default function LandingPage({userData}) {
  return (
    <div className={`${styles.landingPageWrapper} ${roboto.className}`}>
      <div className={styles.authorInfo}>
        <p className={`${styles.authorTitle} ${spaceMono.className}`}>Hi, I'm</p>
        <h1 className={styles.authorName}>{userData.name}</h1>
        <p className={styles.authorBio}>{userData.bio}</p>
        {/* add mail button */}
        <a href={`mailto:${userData.email}`} className={`${styles.mailButton} ${spaceMono.className}`}>Get In Touch</a>
      </div>
      <div className={styles.authorImageWrapper}>
        <div className={styles.authorImageContainer}>
          <img className={styles.authorImage} src={userData.avatar} alt="author" />
        </div>
      </div>
    </div>
  );
}