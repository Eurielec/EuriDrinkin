import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Header, Main } from '../components'

export default function Home() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <p>Holi</p>
    </div>
  )
}
