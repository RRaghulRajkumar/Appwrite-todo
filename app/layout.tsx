import Modal from '@/components/Modal'
import './globals.css'


export const metadata = {
  title: 'Appwite todo',
  description: ' created by Raghul Rajkumar.R',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}
      <Modal/>
      </body>
    </html>
  )
}
