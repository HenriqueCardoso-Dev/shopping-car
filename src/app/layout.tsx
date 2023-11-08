import HeaderMain from "@/components/HeaderMain"
import "./globals.css"
import Footer from "@/components/Footer"

export const metadata = {
  title: 'MORENT',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <HeaderMain />
        
        <section className="bg-[var(--background-page)]">
          <div className="py-8 h-screen max-w-[70%] m-auto">
            {children}
          </div>
        </section>
        <Footer />
      </body>
    </html>
  )
}
