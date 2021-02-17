import {useState} from 'react'

import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <input type="text" placeholder="digite um numero" value={num1} onChange={event => setNum1(event.target.value)}/>
        <input type="text" placeholder="digite outro numero" value={num2} onChange={event => setNum2(event.target.value)}/>
        <button onClick={() =>setResult(parseFloat(num1)+parseFloat(num2))}>Somar</button>
        <input type="text" placeholder="resultado" value={result} readOnly />

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
