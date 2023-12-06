'use client'
import Nav from '../Component/Nav/Index';
import Header from '../Component/Header/index'
import Footer from '../Component/Footer/Index'
// import '../app/globals'
import HomePage from './index'
import './globals.css'
// import Head from 'next/head';
import { ThemeProvider } from '../app/ThemeContext';
export default function Home() {
  return (
    <>
    <ThemeProvider>
      <HomePage/>
    </ThemeProvider>
    </>
  )
}


