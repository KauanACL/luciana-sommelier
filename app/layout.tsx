import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Luciana Queiroz - Sommelière',
  description: 'Experiências únicas em vinhos e harmonizações, feitas por quem entende do assunto.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

