import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

const description =
  'Isabelle Ebener Nutrição Comportamental: consultas online no Brasil e na Europa, sem dietas restritivas. Nutrição além do prato — um caminho de volta para si.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Isabelle Ebener Nutrição Comportamental',
      },
      {
        name: 'description',
        content: description,
      },
      {
        property: 'og:title',
        content: 'Isabelle Ebener Nutrição Comportamental',
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:image',
        content: '/images/logo-badge.png',
      },
    ],
    links: [
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
