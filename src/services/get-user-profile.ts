import { UsersRepository } from '@/repositories/users-repository'
import { User } from '@prisma/client'
import { ResourceNotFound } from './errors/resource-not-found'

interface GetUserProfileServiceRequest {
  userId: string
}

interface GetUserProfileServiceResponse {
  user: User
}

export class GetUserProfileService {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    userId,
  }: GetUserProfileServiceRequest): Promise<GetUserProfileServiceResponse> {
    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new ResourceNotFound()
    }

    return { user }
  }
}
