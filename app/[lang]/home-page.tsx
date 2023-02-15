import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import {Inter} from '@next/font/google'
import {t} from '@lingui/macro'
import {usePathname} from 'next/navigation'


const inter = Inter({ subsets: ['latin'] })

const linkCss = (locale: string, path: string | null) => (
  path?.slice(1, 3) === locale ? '' : styles.hasUnderline
)

const HomePage = () => {
  const path = usePathname()

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          {t`Get started by editing`} &nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div className={styles.links}>
          <Link className={linkCss(`en`, path)} href='/en' prefetch={false}>
            English
          </Link>
          <Link className={linkCss(`ru`, path)} href='/ru' prefetch={false}>
            Русский
          </Link>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src='/next.svg'
          alt='Next.js Logo'
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src='/thirteen.svg' alt='13' width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href='https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={inter.className}>
            Docs <span>-&gt</span>
          </h2>
          <p className={inter.className}>
            {t`Find in-depth information about Next.js features and API.`}
          </p>
        </a>

        <a
          href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={inter.className}>
            Templates <span>-&gt</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}

export default HomePage
