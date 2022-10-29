import Link from 'next/link'

export default function Home(): JSX.Element {
  return (
    <section>
      <div>
        <h1>Welcome to Alura Dev!</h1>

        <article>
          <Link href={'/community'}>Community</Link>
        </article>
      </div>
    </section>
  )
}
