import { Chat } from 'phosphor-react'
import * as Popover from '@radix-ui/react-popover';
import { WidgetForm } from '../components/WidgetForm'

export default function Home() {
  return (
    <div className="h-screen w-screen bg-black flex flex-col gap-4 items-end justify-end p-8">
      <Popover.Root>
        <Popover.Portal>
          <Popover.Content align="end" sideOffset={16}>
            <WidgetForm />
          </Popover.Content>
        </Popover.Portal>

        <Popover.Trigger className="bg-violet-500 rounded-full h-12 w-12 flex items-center justify-center hover:bg-violet-600">
          <Chat className="text-white h-5 w-5" weight="bold" />
        </Popover.Trigger>
      </Popover.Root>
    </div>
  )
}
