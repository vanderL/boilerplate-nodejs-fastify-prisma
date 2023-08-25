import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { UserAlreadyExistsError } from '@/services/errors/user-already-exists-error'
import { makeRegisterService } from '@/services/factories/make-register-service'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { email, name, password } = registerBodySchema.parse(request.body)

  try {
    const registerService = makeRegisterService()

    await registerService.execute({
      email,
      name,
      password,
    })
  } catch (error) {
    if (error instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: error.message })
    }

    throw error
  }

  return reply.status(201).send()
}
