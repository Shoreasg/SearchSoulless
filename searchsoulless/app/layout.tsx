import Footer from './footer'
import './globals.css'
import Head from './head'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head />
      <body className='bg-[#0A7581] w-fit h-fit md:w-screen '>
        {children}
        <Footer />
      </body>

    </html>
  )
}
