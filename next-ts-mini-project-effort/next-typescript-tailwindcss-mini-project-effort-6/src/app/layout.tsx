import MetaData from "@/components/Meta"
import { metadata } from "@/constants/meta"



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <MetaData  openGraph={metadata.openGraph}/>
      <body>
        {children}
      </body>
    </html>
  )
}
