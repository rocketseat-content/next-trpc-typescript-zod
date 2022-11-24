import { useState } from 'react'
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep'
import {
  FeedbackContentStep,
  FeedbackFormSchema,
} from './Steps/FeedbackContentStep'
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep'

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { trpc } from '../../utils/trpc'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Ilustração de um inseto roxo',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Lâmpada acesa',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Núvem de pensamento',
    },
  },
} as const

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  const { mutateAsync: createFeedback } = trpc.createFeedback.useMutation()

  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  async function handleFeedbackSubmitted(data: FeedbackFormSchema) {
    try {
      const { type, comment } = data

      await createFeedback({
        type,
        content: comment,
      })
    } catch (err) {
      alert('Erro ao enviar o feedback, tente novamente!')
    }

    setFeedbackSent(true)
  }

  return (
    <div className="bg-zinc-900 text-zinc-100 p-4 relative rounded-2xl flex flex-col items-center h-[254px]">
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSubmitted={handleFeedbackSubmitted}
            />
          )}
        </>
      )}
      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{' '}
        <a
          href="https://rocketseat.com.br"
          className="underline underline-offset-2"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  )
}
