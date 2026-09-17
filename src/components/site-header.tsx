import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const WHATSAPP_NUMBER = '4915234650736'

export function waLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre mim' },
  { href: '#abordagem', label: 'Abordagem' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#servicos', label: 'Programas' },
  { href: '#mentorias', label: 'Mentorias' },
  { href: '#faq', label: 'Perguntas' },
  { href: '#contato', label: 'Contato' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#4c311c]/10 bg-[#eae8da]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#topo" className="flex items-center gap-2">
          <img
            src="/images/logo-horizontal.png"
            alt="Isabelle Ebener Nutrição Comportamental"
            className="h-10 w-auto sm:h-12"
          />
        </a>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#4c311c]/80 transition-colors hover:text-[#4c311c]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={waLink('Olá, Isabelle! Gostaria de marcar uma consulta.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-[#4c311c] px-5 py-2.5 text-sm font-medium text-[#eae8da] transition-colors hover:bg-[#3a2515]"
          >
            Marcar consulta
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-[#4c311c]/20 p-2 lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-[#4c311c]/10 bg-[#eae8da] px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 text-base text-[#4c311c]/85"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={waLink('Olá, Isabelle! Gostaria de marcar uma consulta.')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center rounded-full bg-[#4c311c] px-5 py-2.5 text-sm font-medium text-[#eae8da]"
                onClick={() => setOpen(false)}
              >
                Marcar consulta
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
