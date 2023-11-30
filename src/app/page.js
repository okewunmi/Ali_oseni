'use client'
import Nav from '../Component/Nav/Index';
import Header from '../Component/Header/index'
import Footer from '../Component/Footer/Index'
// import '../app/globals'
import './globals.css'
import Head from 'next/head';
export default function Home() {
  return (
    <>
  <Head>
  <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Inter:wght@100;200;300;400;500&family=Nunito+Sans:ital,opsz,wght@0,6..12,200;0,6..12,300;0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;0,6..12,800;1,6..12,200;1,6..12,300;1,6..12,400&display=swap" rel="stylesheet" />
  </Head>
    <main >
      <Nav/>
      <Header/>
      <Footer/>
    </main>
    </>
  )
}


