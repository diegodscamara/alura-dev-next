import Head from 'next/head'
import Link from 'next/link'

const Community = (): JSX.Element => {
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
        <h1>Community</h1>
        <article>
          <Link href="/">
            &larr; Go Back
          </Link>
        </article>
      </div>
    </section>
  )
};

export default Community
