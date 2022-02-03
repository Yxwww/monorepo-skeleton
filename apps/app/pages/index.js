import Head from 'next/head'
import { convertToDebounce } from 'wyx-utils'

const sayHi = convertToDebounce(() => {
  console.log('say hi')
})

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <button onClick={() => {
          sayHi()
        }}>SUPER MASSIVE BLACK HOLE!</button>
      </main>
    </div>
  )
}
