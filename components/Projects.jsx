import styles from '@/styles/Projects.module.css'
import { Space_Mono, Roboto } from '@next/font/google'

const spaceMono = Space_Mono({
    weight: '400',
    subsets: ['latin'],
})
  
const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin'],
})

export default function Projects({repos}) {
  return (
    <div id='projects' className={`${styles.projectsWrapper} ${roboto.className}`}>
      <div className='headingWrapper'>
        <h1 className='heading'>Some Projects I&#39;ve Built</h1>
      </div>
      <div className={styles.projects}>
      {repos.slice(0, 6).map((repo) => (
        <div className={styles.project} key={repo.id}>
          <div className={styles.projectHeader}>
            <div className={styles.projectTop}>
              <img className={styles.projectFolderIcon} src='/assets/ic-folder.svg' alt='Folder Icon'/>
              <div className={styles.projectLinks}>
                <a href={repo.github_url} target='_blank' rel='noreferrer'>
                  <img className={styles.projectLinksIcon} src='/assets/ic-github.svg' alt='Github Icon'/>
                </a>
                <a href={repo.url} target='_blank' rel='noreferrer'>
                  <img className={styles.projectLinksIcon} src='/assets/ic-external.svg' alt='External Icon'/>
                </a>
              </div>
            </div>
            <div>
              <h2 className={styles.projectTitle}>{repo.name}</h2>
              <p className={styles.projectDescription}>{repo.description}</p>
            </div>
          </div>
          <div className={styles.projectFooter}>
            {repo.languages.map((language) => (
              <span className={`${styles.projectLanguage} ${spaceMono.className}`} key={language}>{language}</span>
            ))}            
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}