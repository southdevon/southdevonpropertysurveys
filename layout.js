export const metadata = {
  title: 'South Devon Property Surveys',
  description: 'Independent property surveys and valuations across South Devon.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
