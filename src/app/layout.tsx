import HeaderMain from "@/components/HeaderMain"
import "./globals.css"

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
        <HeaderMain/>

        {children}
      </body>
    </html>
  )
}
