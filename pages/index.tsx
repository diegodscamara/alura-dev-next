import Head from 'next/head'
import Link from 'next/link'

export default function Home(): JSX.Element {
  return (
    <section>
      <Head>
        <title>Alura Dev</title>
        <meta name="description" content="Alura Dev" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <div>
        <h1>
          Welcome to Alura Dev!
        </h1>

        <article>
          <Link href={'/community'}>Community</Link>
        </article>
      </div>
    </section>
  )
}
