import * as Popover from '@radix-ui/react-popover';
import { X } from 'phosphor-react'

export function CloseButton() {
  return (
    <Popover.Close
      className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100"
      title="Fechar formulário de feedback"
    >
      <X className="w-4 h-4" weight="bold" />
    </Popover.Close>
  )
}
