import styles from '@/styles/About.module.css'
import { Space_Mono, Roboto } from '@next/font/google';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw';
import remarkRehype from 'remark-rehype'; 
import remarkBreaks from 'remark-breaks';

const spaceMono = Space_Mono({
  weight: '400',
  subsets: ['latin'],
})

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
})

export default function About({readmeContent}) {
  return (
    <div id='about' className={`${styles.aboutWrapper} ${roboto.className}`}>
        <div className='headingWrapper'>
            <h1 className='heading'>About Me</h1>
        </div>
        <div className={styles.markdownWrapper}>
            <ReactMarkdown
                remarkPlugins={[remarkBreaks, remarkGfm, remarkRehype]}
                rehypePlugins={[rehypeRaw]}
                children={readmeContent}
            />
          </div>
    </div>
  )
}