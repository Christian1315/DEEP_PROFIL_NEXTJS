import { Inter } from 'next/font/google'
import './globals.css'
import BootstrapClient from './components/BootstrapClient';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Deep Profil',
  description: 'Réalisé par CodeForChrist',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg_blue">
        {children}
        <BootstrapClient />
      </body>
    </html>
  )
}
