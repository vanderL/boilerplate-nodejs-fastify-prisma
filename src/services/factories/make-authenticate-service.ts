import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { AuthenticateService } from '@/services/authenticate'

export function MakeAuthenticateService() {
  const usersRepository = new PrismaUsersRepository()
  const service = new AuthenticateService(usersRepository)

  return service
}
