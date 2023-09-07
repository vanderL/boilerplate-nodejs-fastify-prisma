import { compare } from 'bcryptjs'
import { beforeEach, describe, expect, it } from 'vitest'
import { RegisterService } from './register'

import { FakeUsersRepository } from '@/repositories/fakes/fake-users-repository'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'

let usersRepository: FakeUsersRepository
let sut: RegisterService

describe('Register Service', () => {
  beforeEach(() => {
    usersRepository = new FakeUsersRepository()
    sut = new RegisterService(usersRepository)
  })

  it('should be able to register', async () => {
    const { user } = await sut.execute({
      name: 'Fulano de Tal',
      email: 'fulano@email.com',
      password: '123456',
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('should hash user password upon registration', async () => {
    const { user } = await sut.execute({
      name: 'Fulano de Tal',
      email: 'fulano@email.com',
      password: '123456',
    })

    const isPasswordCorrectlyHashed = await compare(
      '123456',
      user.password_hash,
    )

    expect(isPasswordCorrectlyHashed).toBe(true)
  })

  it('should not be able to register with same email twice', async () => {
    const email = 'fulano@email.com'

    await sut.execute({
      name: 'Fulano de Tal',
      email,
      password: '123456',
    })

    await expect(() =>
      sut.execute({
        name: 'Fulano de Tal',
        email,
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })
})
