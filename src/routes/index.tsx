import { createFileRoute } from '@tanstack/react-router'
import {
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Rss,
  Clock3,
  Globe2,
  HeartHandshake,
  CalendarCheck,
  ClipboardList,
  Users,
  ShieldCheck,
  MessageSquareHeart,
  Ban,
} from 'lucide-react'
import { SiteHeader, waLink } from '@/components/site-header'
import { FaqAccordion } from '@/components/faq-accordion'
import { Beet, Carrot, Mushroom, Pea, Pumpkin, Tomato } from '@/components/veggie-icons'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

const INSTAGRAM_URL = 'https://www.instagram.com/isaebener_/'
const LINKEDIN_URL = 'https://www.linkedin.com/in/isabelle-ebener-0204651ba/'
const SUBSTACK_URL = 'https://substack.com/@isaebenernutri'
const EMAIL = 'ebenerisa1@gmail.com'

const TRUST_POINTS = [
  {
    icon: Clock3,
    title: 'Acompanhamento lado a lado',
    text: 'Programas de acompanhamento onde eu caminho lado a lado, com sessões semanais ou quinzenais para que você continue engajada durante todo o processo.',
  },
  {
    icon: Globe2,
    title: 'Brasil e Europa',
    text: 'Atendimento 100% online, com flexibilidade de horários e pensados para os dois fusos.',
  },
  {
    icon: HeartHandshake,
    title: 'Escuta sem julgamento',
    text: 'Um espaço acolhedor, gentil e livre de culpa para falar sobre a sua relação com você, com seu corpo e com comida.',
  },
]

const PILLARS = [
  {
    icon: Pumpkin,
    title: 'Abordagem Holística',
    text: 'Sono, estresse, relacionamentos, autocuidado e gatilhos emocionais entram na conversa — porque comer é só uma parte da história.',
    accent: '#b2c442',
  },
  {
    icon: Carrot,
    title: 'Autonomia e Organização',
    text: 'Você sai com ferramentas para decidir por si, sem depender de dietas restritivas. O objetivo é liberdade, não regras.',
    accent: '#e48e37',
  },
  {
    icon: Tomato,
    title: 'Amor à Mesa',
    text: 'Comida também é memória, afeto e presença. Nenhum prato aqui precisa carregar medo ou culpa.',
    accent: '#913c1f',
  },
]

const DIFFERENTIALS = [
  {
    icon: Clock3,
    text: 'Consulta longa, com escuta real — nada de consulta corrida',
  },
  {
    icon: HeartHandshake,
    text: 'Análise emocional e comportamental, não só números e balança',
  },
  {
    icon: ClipboardList,
    text: 'Guia e menu personalizado, com orientações práticas para o dia a dia',
  },
  {
    icon: MessageSquareHeart,
    text: 'Suporte contínuo via WhatsApp entre as sessões',
  },
  {
    icon: Ban,
    text: 'Sem dietas restritivas, sem contagem de calorias, sem proibições',
  },
]

const TESTIMONIALS = [
  {
    quote: 'Com a Isa, entendi que emagrecer de forma constante vem de mudar o estilo de vida, não de mais uma dieta. Já perdi bons quilos, sem restrição, sem culpa e sem medo.',
    name: 'Júlia Maciel',
  },
  {
    quote: 'A Isa não fez só um plano alimentar — organizou minha rotina inteira e me ajudou na transição pro vegetarianismo. Cada consulta termina com um plano de ação prático. Recomendo demais!',
    name: 'Felipe Fioravanti',
  },
  {
    quote: 'Depois de anos entrando e saindo de dieta, finalmente parei de contar caloria e comecei a ouvir meu corpo de verdade. Hoje como com prazer e sem culpa.',
    name: 'Marina Alves',
  },
]

const STEPS = [
  {
    number: '01',
    title: 'Encontro de 20 minutos',
    text: 'Uma conversa curta e sem compromisso para nos conhecermos e escolher juntas o melhor programa para o seu momento.',
  },
  {
    number: '02',
    title: 'Formulário + consulta inicial',
    text: 'Você preenche um formulário pré-consulta e agendamos a consulta inicial, de 1h30, com anamnese completa.',
  },
  {
    number: '03',
    title: 'Acompanhamento contínuo',
    text: 'Sessões de acompanhamento seguem no ritmo do programa escolhido, com suporte entre os encontros.',
  },
]

type ServiceIcon = typeof Pumpkin

const SERVICES: Array<{
  icon: ServiceIcon
  accent: string
  title: string
  text: string
}> = [
  {
    icon: Pumpkin,
    accent: '#e48e37',
    title: 'Programa Trimestral',
    text: 'Acompanhamento contínuo de 3 meses, com retornos mensais de 1h e check-ins quinzenais online — para consolidar hábitos reais e sustentáveis.',
  },
  {
    icon: Beet,
    accent: '#913c1f',
    title: 'Programa Semestral',
    text: 'O mesmo modelo de cuidado contínuo, estendido para 6 meses, pensado para resultados mais consolidados e duradouros.',
  },
  {
    icon: Mushroom,
    accent: '#b2c442',
    title: 'Consulta de Manutenção',
    text: 'Para quem já passou por acompanhamento e quer revisar estratégias, ajustar metas ou adaptar o plano a uma nova fase da vida.',
  },
  {
    icon: Pea,
    accent: '#351935',
    title: 'Avaliação e Solicitação de Exames',
    text: 'Acompanhamento focado em revisão de exames laboratoriais e ajustes no plano alimentar com base nos resultados.',
  },
  {
    icon: Tomato,
    accent: '#4c311c',
    title: 'Pacote de Consultas Avulsas',
    text: 'Pacotes de 3 ou 5 consultas, com a flexibilidade de quem quer cuidado pontual, sem compromisso de programa longo.',
  },
]

const FAQ_ITEMS = [
  {
    question: 'O atendimento é só online?',
    answer:
      'Sim, todo o acompanhamento é feito online, por videochamada — o que permite atender pacientes no Brasil e em toda a Europa com a mesma qualidade de escuta.',
  },
  {
    question: 'Em quais idiomas você atende?',
    answer:
      'As consultas acontecem em português. Caso seja necessário, também é possível conversar em inglês ou alemão — é só combinar antes de agendar.',
  },
  {
    question: 'Como funciona o pagamento?',
    answer:
      'O pagamento é combinado diretamente por WhatsApp após o encontro inicial de 20 minutos, quando definimos junto qual programa faz mais sentido para você.',
  },
  {
    question: 'Preciso seguir uma dieta restritiva?',
    answer:
      'Não. O trabalho é construído em cima de comportamento alimentar e hábitos sustentáveis — sem contagem de calorias, sem listas de proibidos e sem promessas de resultado rápido.',
  },
  {
    question: 'Você atende vegetarianos, veganos e esportistas?',
    answer:
      'Sim. O plano é sempre adaptado à sua rotina, seus valores e seus objetivos — inclusive performance, emagrecimento saudável e alimentação vegetariana ou vegana.',
  },
]

function CTAButton({
  href,
  variant = 'primary',
  children,
}: {
  href: string
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm sm:text-base font-medium transition-colors'
  const styles =
    variant === 'primary'
      ? 'bg-[#4c311c] text-[#eae8da] hover:bg-[#3a2515]'
      : 'border border-[#4c311c] text-[#4c311c] hover:bg-[#4c311c]/10'
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles}`}>
      {children}
    </a>
  )
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-display text-xs uppercase tracking-[0.25em] text-[#913c1f]">{children}</p>
  )
}

function LandingPage() {
  return (
    <div id="topo" className="bg-[#eae8da]">
      <SiteHeader />

      {/* CAPA */}
      <section className="relative overflow-hidden px-5 pb-20 pt-14 sm:px-8 sm:pt-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "url('/images/pattern.svg')",
            backgroundSize: '340px',
            maskImage: 'linear-gradient(to bottom, black, transparent)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <SectionEyebrow>Nutrição Comportamental · Online · Brasil &amp; Europa</SectionEyebrow>
          <h1 className="mt-5 font-display text-3xl leading-tight text-[#4c311c] sm:text-5xl sm:leading-tight">
            Por uma relação mais gentil: com você, com seu corpo e com a comida.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#4c311c]/85">
            Um acompanhamento nutricional que une afeto, memórias e comportamento — sem dietas,
            sem restrições e longe de contagem de calorias.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton href={waLink('Olá, Isabelle! Gostaria de marcar uma consulta.')}>
              Marcar consulta
            </CTAButton>
            <CTAButton href={INSTAGRAM_URL} variant="secondary">
              Ver no Instagram
            </CTAButton>
          </div>
        </div>

        <div className="relative mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-3">
          {TRUST_POINTS.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-[#4c311c]/12 bg-[#eae8da] p-6 text-center shadow-[0_1px_0_rgba(76,49,28,0.06)]"
            >
              <point.icon className="mx-auto h-7 w-7 text-[#913c1f]" aria-hidden="true" />
              <h3 className="mt-3 font-display text-base text-[#4c311c]">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4c311c]/75">{point.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE MIM */}
      <section id="sobre" className="px-5 py-20 sm:px-8">
       <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-[minmax(0,280px)_1fr] sm:items-center">
       <div className="mx-auto w-full max-w-xs">
       <div className="relative aspect-[4/5] w-full">
          <img
            src="/images/WhatsApp_Image_2026-09-16_at_05_46_10__2_.jpeg"
            alt="Isabelle Ebener sorrindo, segurando fatias de toranja"
            className="absolute inset-0 h-full w-full rounded-[2rem] border border-[#4c311c]/15 object-cover shadow-[0_8px_24px_rgba(76,49,28,0.15)]"
          />
          <div className="absolute -bottom-6 -right-6 h-32 w-32 overflow-hidden rounded-2xl border-4 border-[#eae8da] shadow-[0_8px_20px_rgba(76,49,28,0.2)] sm:h-36 sm:w-36">
            <img
              src="/images/WhatsApp_Image_2026-09-16_at_05_46_10__3_.jpeg"
              alt="Isabelle Ebener sorrindo com um limão"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
          <div>
            <SectionEyebrow>Sobre mim</SectionEyebrow>
            <h2 className="mt-3 font-display text-2xl text-[#4c311c] sm:text-3xl">
              Isabelle Ebener
            </h2>
            <p className="mt-4 leading-relaxed text-[#4c311c]/85">
              Sou nutricionista comportamental e acredito que mudança de hábito de verdade e a
              construção de um estilo de vida mais saudável não nasce de mais uma dieta (eu não
              sigo dieta rs), ela nasce do autoconhecimento, da paciência com o próprio processo e
              do entendimento de que não há uma rotina 100% perfeita. Meu trabalho é conduzir esse
              caminho junto com você, e te mostrar que o comer vai muito além do prato.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-[#4c311c]/80">
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#913c1f]" aria-hidden="true" />
                CRN 92060
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#913c1f]" aria-hidden="true" />
                Formada pela UNESP
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#913c1f]" aria-hidden="true" />
                Formação em Nutrição Comportamental pelo Instituto Nutrição Comportamental
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#913c1f]" aria-hidden="true" />
                Especializanda como Terapeuta Nutricional na Alemanha
              </li>
            </ul>
            <div className="mt-7">
              <CTAButton href={waLink('Olá, Isabelle! Vi o site e queria saber mais sobre o acompanhamento.')}>
                Falar no WhatsApp
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* MINHA ABORDAGEM */}
      <section id="abordagem" className="bg-[#e2decb] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <SectionEyebrow>Minha abordagem</SectionEyebrow>
            <h2 className="mt-3 font-display text-2xl text-[#4c311c] sm:text-3xl">
              Comportamental, sem dietas, sem contagem de calorias.
            </h2>
            <p className="mt-4 leading-relaxed text-[#4c311c]/85">
              Aqui a conversa não é sobre o corpo estético padrão — é sobre saúde, comportamento e
              a relação que você tem com a comida no seu dia a dia real.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-[#4c311c]/12 bg-[#eae8da] p-6"
              >
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${pillar.accent}30` }}
                >
                  <pillar.icon className="h-6 w-6" style={{ color: pillar.accent }} />
                </div>
                <h3 className="mt-4 font-display text-lg text-[#4c311c]">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4c311c]/80">{pillar.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {DIFFERENTIALS.map((item) => (
              <div key={item.text} className="flex items-start gap-3 rounded-xl bg-[#eae8da] p-4">
                <item.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#913c1f]" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-[#4c311c]/85">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <CTAButton href="#como-funciona" variant="secondary">
              Ver como funciona
            </CTAButton>
          </div>
        </div>
      </section>

      {/* FRASE ÂNCORA */}
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-xl italic leading-relaxed text-[#4c311c] sm:text-2xl">
            &ldquo;Nutrição além do prato: o começo de um caminho de volta para si.&rdquo;
          </p>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <SectionEyebrow>Depoimentos</SectionEyebrow>
            <h2 className="mt-3 font-display text-2xl text-[#4c311c] sm:text-3xl">
              Histórias de quem viveu o processo
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.quote}
                className="rounded-2xl border border-[#4c311c]/12 bg-[#eae8da] p-6" >
                    <Quote className="h-5 w-5 text-[#913c1f]/50" aria-hidden="true" />
                      <blockquote className="mt-2.5 text-sm leading-relaxed text-[#4c311c]/85">
                        &ldquo;{t.quote}&rdquo;
                      </blockquote>
                    <figcaption className="mt-4 text-xs uppercase tracking-wide text-[#913c1f]">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="bg-[#e2decb] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionEyebrow>Como funciona</SectionEyebrow>
          <h2 className="mt-3 font-display text-2xl text-[#4c311c] sm:text-3xl">
            Três passos para começar
          </h2>
        </div>

        <div className="relative mx-auto mt-12 max-w-5xl">
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-[#4c311c]/20 sm:block"
            aria-hidden="true"
          />
          <div className="grid gap-8 sm:grid-cols-3">
            {STEPS.map((step) => (
              <div key={step.number} className="relative text-center sm:text-left">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#4c311c] font-display text-lg text-[#eae8da] sm:mx-0">
                  {step.number}
                </div>
                <h3 className="mt-4 font-display text-lg text-[#4c311c]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4c311c]/80">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <CTAButton href={waLink('Olá, Isabelle! Gostaria de agendar o encontro de 20 minutos.')}>
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Agendar encontro de 20 minutos
          </CTAButton>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <SectionEyebrow>Programas</SectionEyebrow>
            <h2 className="mt-3 font-display text-2xl text-[#4c311c] sm:text-3xl">
              Um programa para cada momento
            </h2>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {SERVICES.map((service) => (
              <article
                key={service.title}
                className="group overflow-hidden rounded-2xl border border-[#4c311c]/12 bg-[#eae8da]"
              >
                <div
                  className="relative flex h-44 items-center justify-center overflow-hidden"
                  style={{ backgroundColor: `${service.accent}22` }}
                >
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{ backgroundImage: "url('/images/pattern.svg')", backgroundSize: '200px' }}
                    aria-hidden="true"
                  />
                  <service.icon
                    className="relative h-16 w-16 transition-transform duration-500 ease-out group-hover:scale-110"
                    style={{ color: service.accent }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg text-[#4c311c]">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4c311c]/80">{service.text}</p>
                  <div className="mt-5">
                    <a
                      href={waLink(`Olá, Isabelle! Quero saber mais sobre o ${service.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#913c1f] hover:text-[#4c311c]"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      Falar no WhatsApp sobre este programa
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-dashed border-[#4c311c]/25 p-6 text-center">
            <p className="text-sm leading-relaxed text-[#4c311c]/75">
              Todo programa contínuo inclui consulta inicial completa (1h30) com anamnese
              detalhada, guia de orientações nutricionais, solicitação de exames, acesso a app de
              acompanhamento, ferramentas de mudança comportamental, plano de metas de curto, médio
              e longo prazo, suporte via WhatsApp e acesso à comunidade de pacientes.
            </p>
          </div>
        </div>
      </section>

      {/* CONTEÚDO VIVO */}
      <section className="bg-[#e2decb] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <SectionEyebrow>Conteúdo vivo</SectionEyebrow>
            <h2 className="mt-3 font-display text-2xl text-[#4c311c] sm:text-3xl">
              Acompanhe o dia a dia do consultório
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#4c311c]/80">
              Conteúdo educativo e sem julgamento, direto no Instagram e na newsletter.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#4c311c]/12 bg-[#eae8da] p-8 text-center">
              <Instagram className="mx-auto h-8 w-8 text-[#913c1f]" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg text-[#4c311c]">@isaebener_</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4c311c]/80">
                Bastidores, dicas comportamentais e reflexões sobre comida, corpo e afeto.
              </p>
              <div className="mt-5">
                <CTAButton href={INSTAGRAM_URL} variant="secondary">
                  Seguir no Instagram
                </CTAButton>
              </div>
            </div>

            <div className="rounded-2xl border border-[#4c311c]/12 bg-[#eae8da] p-8 text-center">
              <Rss className="mx-auto h-8 w-8 text-[#913c1f]" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg text-[#4c311c]">Newsletter no Substack</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4c311c]/80">
                Textos mais longos sobre comportamento alimentar direto na sua caixa de entrada.
              </p>
              <div className="mt-5">
                <CTAButton href={SUBSTACK_URL} variant="secondary">
                  Assinar a newsletter
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <SectionEyebrow>Perguntas frequentes</SectionEyebrow>
            <h2 className="mt-3 font-display text-2xl text-[#4c311c] sm:text-3xl">
              Ficou com alguma dúvida?
            </h2>
          </div>
          <div className="mt-10">
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="bg-[#e2decb] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <img
            src="/images/logo-badge.png"
            alt="Isabelle Ebener Nutrição Comportamental"
            className="mx-auto h-40 w-40 sm:h-48 sm:w-48"
          />
          <h2 className="mt-6 font-display text-2xl text-[#4c311c] sm:text-3xl">
            Vamos conversar?
          </h2>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-[#4c311c]/85">
            Me escreva contando um pouco da sua rotina — a resposta chega ainda no mesmo dia.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4">
            <CTAButton href={waLink('Olá, Isabelle! Vim pelo site e gostaria de conversar.')}>
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Falar no WhatsApp
            </CTAButton>

            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 text-sm text-[#4c311c]/80 hover:text-[#4c311c]"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {EMAIL}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#4c311c] transition-colors hover:text-[#913c1f]"
            >
              <Instagram className="h-6 w-6" aria-hidden="true" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#4c311c] transition-colors hover:text-[#913c1f]"
            >
              <Linkedin className="h-6 w-6" aria-hidden="true" />
            </a>
            <a
              href={SUBSTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Substack"
              className="text-[#4c311c] transition-colors hover:text-[#913c1f]"
            >
              <Rss className="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <footer className="px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-2">
            <Users className="hidden h-4 w-4 text-[#4c311c]/50 sm:block" aria-hidden="true" />
            <p className="text-xs text-[#4c311c]/60">
              © {new Date().getFullYear()} Isabelle Ebener Nutrição Comportamental. CRN 92060.
            </p>
          </div>
          <p className="text-xs text-[#4c311c]/60">Atendimento online — Brasil e Europa.</p>
        </div>
      </footer>
    </div>
  )
}
