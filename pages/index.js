import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '@/components/Navbar'
import LandingPage from '@/components/LandingPage'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home({userData}) {
  return (
    <>
      <Head>
        <title>{userData.name}</title>
        <meta name="description" content={userData.bio} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Navbar userData={userData} />
      <LandingPage userData={userData} />
      {userData.readme && <About readmeContent={userData.readme} />}
      {userData.repos.length!==0 && <Projects repos={userData.repos} />}
      <Contact isOpenForNewOpportunities={userData.isOpenForNewOpportunities} email={userData.email} />
      <Footer name={userData.name}/>
    </>
  )
}

export async function getStaticProps() {
  const username = process.env.GITHUB_USERNAME;
  const response = await fetch(`https://www.devhive.me/api/users/${username}`);
  const userData = await response.json();
  
  if(!userData.data){
    return {
      notFound: true
    }
  }
  else{
    return {
      props: {
        userData: userData.data
      }
    }
  }
}
