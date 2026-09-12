import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type FaqItem = {
  question: string
  answer: string
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="divide-y divide-[#4c311c]/15 border-y border-[#4c311c]/15">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-display text-base sm:text-lg text-[#4c311c]">
                {item.question}
              </span>
              <ChevronDown
                aria-hidden="true"
                className={`h-5 w-5 flex-shrink-0 text-[#913c1f] transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-40 opacity-100 pb-5' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="leading-relaxed text-[#4c311c]/80">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
