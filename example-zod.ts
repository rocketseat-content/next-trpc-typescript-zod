import { z } from 'zod'

const personSchema = z.object({
  name: z.string(),
  age: z.string().transform(age => Number(age)),
  email: z.string().email().nullable()
})

const person = {
  name: 'Diego',
  age: '21',
  email: 'diego@rocketseat.com.br',
}

type PersonSchemaInput = z.input<typeof personSchema>
type PersonSchemaOutput = z.output<typeof personSchema>

const { name, email, age } = personSchema.parse(person)

function createPersonInDatabase(person: PersonSchemaOutput) {

}