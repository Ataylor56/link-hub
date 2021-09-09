import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import twitter from '../public/2021 Twitter logo - blue.png'
import insta from '../public/Instagram-Logo.wine.svg'
import linkedIn from '../public/LI-In-Bug.png'
import profilePic from '../public/sdsu.JPG'
import phone from '../public/phone.png'
import textMessage from '../public/text.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Austin J Taylor</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <p className={styles.description}>
              <code className={styles.code}>Whats kickin Chicken?</code>
          </p>

          <h1 className={styles.title}>
              Welcome to my link-hub!
          </h1>

          <Image className={styles.profilePic} src={profilePic} width={200} height={200}/>
          <div className={styles.contact}>
              <a href={'tel://4023662478'} className={styles.contactCard}>
                  <Image src={phone} width={30} height={30}/>
                  <p>Call</p>
              </a>
              <a href={'sms://4023662478'} className={styles.contactCard}>
                  <Image src={textMessage} width={30} height={30}/>
                  <p>Text</p>
              </a>

          </div>

        <div className={styles.grid}>

          <a href="https://twitter.com/fatandtan56" className={styles.card}>
            <h2>Twitter &rarr;</h2>
            <Image src={twitter} height={25} width={25}/>
          </a>

          <a href="https://instagram.com/austinjtaylor56" className={styles.card}>
            <h2>Instagram &rarr;</h2>
            <Image src={insta} height={25} width={25}/>
          </a>

          <a
            href="https://www.linkedin.com/in/austintaylor1356"
            className={styles.card}>
            <h2>LinkedIn &rarr;</h2>
            <Image src={linkedIn} height={25} width={25}/>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
          <p>Austin Taylor</p>
      </footer>
    </div>
  )
}
