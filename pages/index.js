import Head from 'next/head'
import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import Features from '../components/Features'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <>
   <Navbar/>
   <Landing/>
   <Features/>
   </>
  )
}
