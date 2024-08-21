// ESM
import { faker } from '@faker-js/faker';


export function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    avatar: faker.image.avatar(),
    name: faker.person.fullName(),
    status: "Active",
    role: faker.person.jobTitle(4),
    email: faker.internet.email(),
    team: faker.person.jobArea(),
    registeredAt: faker.date.past(),
  };
}

export const USERS = faker.helpers.multiple(createRandomUser, {
  count: 50,
});