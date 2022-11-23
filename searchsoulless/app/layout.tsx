import Footer from './footer'
import './globals.css'
import Head from './head'
import Header from './header'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head />
      
      <body className="bg-[#0A7581] w-max md:w-screen">
      <Header/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
