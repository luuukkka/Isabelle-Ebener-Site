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
  Quote,
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
    title: 'Acompanhamento próximo',
    text: 'Programas de acompanhamento onde eu caminho lado a lado, com sessões semanais ou quinzenais para que você continue engajada durante todo o processo.',
  },
  {
    icon: Globe2,
    title: 'Encontros online',
    text: 'Atendimento 100% online, com flexibilidade de horários em português, inglês ou alemão.',
  },
  {
    icon: HeartHandshake,
    title: 'Escuta sem julgamento',
    text: 'Um espaço acolhedor, gentil e livre para falar sobre a sua relação com você, com seu corpo e com comida.',
  },
]

const PILLARS = [
  {
    icon: Pumpkin,
    title: 'Olhar Integral',
    text: 'Avalio você de forma sistêmica, trazendo para a consulta fatores como a qualidade do sono, níveis de estresse, autocuidado e gatilhos emocionais.  ',
    accent: '#b2c442',
  },
  {
    icon: Carrot,
    title: 'Autonomia Alimentar',
    text: 'Ao longo do processo, você sai com ferramentas práticas e organização para fazer escolhas conscientes independentemente de onde você esteja.',
    accent: '#e48e37',
  },
  {
    icon: Tomato,
    title: 'Afeto e Presença',
    text: 'Resgatamos o prazer genuíno de comer e a atenção plena à mesa, desconstruindo o terrorismo nutricional e os julgamentos sobre os alimentos.',
    accent: '#913c1f',
  },
]

const DIFFERENTIALS = [
  {
    icon: Clock3,
    text: 'Cansou das dietas restritivas e quer aprender a comer de forma saudável com constância ',
  },
  {
    icon: HeartHandshake,
    text: 'Sente-se perdida entre o que comer e como se organizar na correria do dia a dia.',
  },
  {
    icon: ClipboardList,
    text: 'Vive no ciclo do "começo na segunda e desisto na quarta',
  },
  {
    icon: MessageSquareHeart,
    text: 'Pacientes vegetarianos e veganos ',
  },
  {
    icon: Ban,
    text: 'Carrega culpa e frustração com a comida e quer fazer as pazes com o prato.',
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
  image: string
}> = [
    {
      icon: Pumpkin,
      accent: '#e48e37',
      title: 'Programa Trimestral',
      text: 'Acompanhamento contínuo de 3 meses, com retornos mensais de 1h e check-ins quinzenais online — para consolidar hábitos reais e sustentáveis.',
      image: '/images/servicos/avulsas.jpg.jpg ',
    },
    {
      icon: Beet,
      accent: '#913c1f',
      title: 'Programa Semestral',
      text: 'O mesmo modelo de cuidado contínuo, estendido para 6 meses, pensado para resultados mais consolidados e duradouros.',
      image: '/images/servicos/exames.jpg.jpg',
    },
    {
      icon: Mushroom,
      accent: '#b2c442',
      title: 'Consulta de Manutenção',
      text: 'Para quem já passou por acompanhamento e quer revisar estratégias, ajustar metas ou adaptar o plano a uma nova fase da vida.',
      image: '/images/servicos/manutencao.jpg.jpg',
    },
    {
      icon: Pea,
      accent: '#351935',
      title: 'Avaliação e Solicitação de Exames',
      text: 'Acompanhamento focado em revisão de exames laboratoriais e ajustes no plano alimentar com base nos resultados.',
      image: '/images/servicos/semestral.jpg.jpg',
    },
    {
      icon: Tomato,
      accent: '#4c311c',
      title: 'Pacote de Consultas Avulsas',
      text: 'Pacotes de 3 ou 5 consultas, com a flexibilidade de quem quer cuidado pontual, sem compromisso de programa longo.',
      image: '/images/servicos/trimestral.jpg.jpg',
    },
  ]

const MENTORIA_HIGHLIGHTS = [
  {
    icon: Pea,
    accent: '#351935',
    title: 'Processo compartilhado',
    text: 'Você não precisa fazer esse caminho sozinha: a mentoria reúne pessoas em momentos parecidos, com troca respeitosa e presença, sem ranking nem comparação.',
  },
  {
    icon: Beet,
    accent: '#913c1f',
    title: 'Comunidade com afeto',
    text: 'Um grupo pequeno o suficiente para caber a sua história — e grande o suficiente para lembrar que a relação com o corpo e com a comida não precisa ser um segredo.',
  },
  {
    icon: Pumpkin,
    accent: '#e48e37',
    title: 'Ferramentas para o dia a dia',
    text: 'Encontros pensados para a rotina real: sono, estresse, gatilhos, mesa e autocuidado — liberdade para decidir, não mais uma lista de regras.',
  },
]

const MENTORIA_GATHERING = [
  {
    icon: Users,
    text: 'Encontros em Grupo: reuniões dinâmicas para troca de experiências, dinâmicas comportamentais, suporte mútuo entre as participantes e palestras sobre educação nutricional.',
  },
  {
    icon: ClipboardList,
    text: 'Consultas Individuais: atendimentos exclusivos e personalizados para ajustar suas metas específicas, rotina e exames.',
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
    question: 'Mentoria em grupo substitui o acompanhamento individual?',
    answer:
      'Não. A mentoria em grupo é um espaço de aprendizagem compartilhada — comunidade, conversa e ferramentas práticas. Os Programas são o acompanhamento 1:1: sessões suas, anamnese, orientações personalizadas e, nos programas contínuos, suporte no WhatsApp. Dá para viver um, o outro, ou os dois, conforme o seu momento. O que faz sentido a gente define juntas no WhatsApp.',
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
    <a
      href={href}
      {...(href.startsWith('http')
        ? { target: '_blank' as const, rel: 'noopener noreferrer' }
        : {})}
      className={`${base} ${styles}`}
    >
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
      <section className="px-5 pb-20 pt-14 sm:px-8 sm:pt-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-20">
          <div>
            <SectionEyebrow>Nutrição Comportamental · Online · Brasil &amp; Europa</SectionEyebrow>
            <h1 className="mt-5 font-display text-3xl leading-tight text-[#4c311c] sm:text-5xl sm:leading-tight">
              Por uma relação mais gentil: com você, com seu corpo e com a comida.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#4c311c]/85">
              Um acompanhamento nutricional que une afeto, memórias e comportamento — sem dietas,
              sem restrições e longe de contagem de calorias.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTAButton href={waLink('Olá, Isabelle! Gostaria de marcar uma consulta.')}>
                Marcar consulta
              </CTAButton>
              <CTAButton href={INSTAGRAM_URL} variant="secondary">
                Ver no Instagram
              </CTAButton>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -left-6 -top-8 h-[92%] w-[92%]"
              style={{ backgroundColor: '#b2c44240', borderRadius: '46% 54% 62% 38% / 42% 40% 60% 58%' }}
            />
            <img
              src="/images/isabellelimao.jpeg"
              alt="Isabelle Ebener sorrindo"
              className="relative aspect-[4/5] w-full object-cover shadow-[0_28px_60px_-30px_rgba(76,49,28,0.45)]"
              style={{ borderRadius: '180px 180px 180px 24px' }}
            />
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
                src="/images/isabelletoranja.jpeg"
                alt="Isabelle Ebener sorrindo, segurando fatias de toranja"
                className="absolute inset-0 h-full w-full rounded-[2rem] border border-[#4c311c]/15 object-cover shadow-[0_8px_24px_rgba(76,49,28,0.15)]"
              />
              <div className="absolute -bottom-6 -right-6 h-32 w-32 overflow-hidden rounded-2xl border-4 border-[#eae8da] shadow-[0_8px_20px_rgba(76,49,28,0.2)] sm:h-36 sm:w-36">
                <img
                  src="/images/isabellelimao.jpeg"
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
              A alimentação é uma expressão viva de quem somos, ela carrega nossas histórias, 
              emoções, cultura, hábitos e, acima de tudo, o prazer que encontramos em comer. 
              Atuo com uma abordagem que não prescreve dietas. Meu objetivo é guiar você em uma jornada de reconexão 
              com os sinais do seu próprio corpo, promovendo uma relação consciente, leve e livre de julgamentos com a comida. 
              Vamos juntas resgatar o equilíbrio e a paz com o seu prato?
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

          <h3 className="mt-12 text-center font-display text-xl text-[#4c311c]">
            Meu atendimento é para você que:
          </h3>

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
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{ backgroundColor: service.accent, opacity: 0.45 }}
                    aria-hidden="true"
                  />
                  <service.icon
                    className="relative h-16 w-16 text-white transition-transform duration-500 ease-out group-hover:scale-110"
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
            <a
              href="#mentorias"
              className="mt-3 inline-block text-sm font-medium text-[#913c1f] hover:text-[#4c311c]"
            >
              Conheça também as mentorias em grupo
            </a>
          </div>
        </div>
      </section>

      {/* MENTORIAS EM GRUPO */}
      <section id="mentorias" className="bg-[#e2decb] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <SectionEyebrow>Mentorias em grupo</SectionEyebrow>
            <h2 className="mt-3 font-display text-2xl text-[#4c311c] sm:text-3xl">
              Um grupo fechado de 10 mulheres, rumo ao emagrecimento saudável
            </h2>
            <p className="mt-4 leading-relaxed text-[#4c311c]/85">
              Processo exclusivo que une a força e o acolhimento do grupo ao cuidado
              individualizado que a sua rotina precisa — para emagrecer com saúde, sem
              abrir mão do prazer de comer. Ao todo, são 6 encontros em grupo e 6
              consultas individuais.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex -space-x-2">
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#eae8da]"
                style={{ backgroundColor: '#ecda5a30' }}
              >
                <Mushroom className="h-6 w-6" style={{ color: '#ecda5a' }} />
              </span>
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#eae8da]"
                style={{ backgroundColor: '#b2c44230' }}
              >
                <Pea className="h-6 w-6" style={{ color: '#b2c442' }} />
              </span>
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#eae8da]"
                style={{ backgroundColor: '#e48e3730' }}
              >
                <Carrot className="h-6 w-6" style={{ color: '#e48e37' }} />
              </span>
            </div>
            <p className="text-sm text-[#4c311c]/75">
              Aprendizagem coletiva, com escuta gentil — detalhes de cada turma no WhatsApp.
            </p>
          </div>

          <article className="mt-10 rounded-2xl border border-[#4c311c]/12 bg-[#eae8da] p-6 sm:p-8">
            <div className="grid gap-8 sm:grid-cols-2 sm:items-start">
              <div>
                <h3 className="font-display text-lg text-[#4c311c]">Como a gente se reúne</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4c311c]/80">
                  Um processo desenhado para um grupo fechado de apenas 10 mulheres,
                  unindo a força e o acolhimento do grupo ao cuidado individualizado
                  que a sua rotina precisa.
                </p>
                <p className="mt-4 font-display text-base italic text-[#4c311c]">
                  &ldquo;Nutrição além do prato, agora em círculo.&rdquo;
                </p>
              </div>
              <ul className="space-y-3">
                {MENTORIA_GATHERING.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <item.icon
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#913c1f]"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-relaxed text-[#4c311c]/85">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {MENTORIA_HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#4c311c]/12 bg-[#eae8da] p-6"
              >
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${item.accent}30` }}
                >
                  <item.icon className="h-6 w-6" style={{ color: item.accent }} />
                </div>
                <h3 className="mt-4 font-display text-lg text-[#4c311c]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4c311c]/80">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-dashed border-[#4c311c]/25 p-6 text-center">
            <p className="text-sm leading-relaxed text-[#4c311c]/75">
              Inclui consulta inicial completa com anamnese, guia de orientações
              nutricionais, solicitação de exames, acesso ao aplicativo de
              acompanhamento, ferramentas de mudança comportamental e suporte via
              WhatsApp. Datas, duração e valores da turma combinamos juntas no
              WhatsApp.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton
              href={waLink(
                'Olá, Isabelle! Vi no site a seção de Mentorias em grupo e gostaria de saber como funciona a próxima turma — sem compromisso.',
              )}
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Conversar sobre as mentorias
            </CTAButton>
            <CTAButton href="#servicos" variant="secondary">
              Ver os programas individuais
            </CTAButton>
          </div>
        </div>
      </section>

      {/* CONTEÚDO VIVO */}
      <section className="px-5 py-20 sm:px-8">
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
      <section id="faq" className="bg-[#e2decb] px-5 py-20 sm:px-8">
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
      <section id="contato" className="px-5 py-20 sm:px-8">
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
