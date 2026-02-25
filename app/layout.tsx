import type { Metadata } from 'next'
import './globals.css'

const BASE_URL = 'https://lucianaqueiroz.com.br' // ← atualize com o domínio real

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Luciana Queiroz — Sommelière | Vinhos & Harmonizações',
    template: '%s | Luciana Queiroz Sommelière',
  },
  description:
    'Sommelière especializada em curadoria de cartas de vinho, harmonizações personalizadas e treinamento de equipes. Transforme a experiência do seu estabelecimento.',
  keywords: [
    'sommelière',
    'carta de vinhos',
    'harmonização de vinhos',
    'consultoria de vinhos',
    'treinamento sommelier',
    'Luciana Queiroz',
    'Rio de Janeiro',
  ],
  authors: [{ name: 'Luciana Queiroz' }],
  creator: 'Luciana Queiroz',

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: BASE_URL,
    siteName: 'Luciana Queiroz Sommelière',
    title: 'Luciana Queiroz — Sommelière | Vinhos & Harmonizações',
    description:
      'Experiências únicas em vinhos e harmonizações para o seu negócio, feitas por quem entende do assunto.',
    images: [
      {
        url: '/og-image.jpg', // ← coloque uma imagem 1200x630 em /public/og-image.jpg
        width: 1200,
        height: 630,
        alt: 'Luciana Queiroz Sommelière',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Luciana Queiroz — Sommelière',
    description: 'Experiências únicas em vinhos e harmonizações para o seu negócio.',
    images: ['/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}