import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
//import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
          <h1>Hello World from Najib Malik</h1>
          <br/>
          <Link href="/name"> Get Name</Link>
    </div>
  )
}