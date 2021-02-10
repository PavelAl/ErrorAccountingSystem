import { User } from "src/common/types";
import { AuthService } from "./AuthService";

interface UserAuthPair {
  login: string;
  password: string;
  user: User;
}

const fakeUsersAuthPairs: UserAuthPair[] = [
  {
    login: 'User 1',
    password: 'user1',
    user: {
      id: 1,
      name: 'User 1'
    }
  },
  {
    login: 'User 2',
    password: 'user2',
    user: {
      id: 2,
      name: 'User 2'
    }
  },
  {
    login: 'User 3',
    password: 'user3',
    user: {
      id: 3,
      name: 'User 3'
    }
  },
  {
    login: 'User 4',
    password: 'user4',
    user: {
      id: 4,
      name: 'User 4'
    }
  }
]

export class FakeAuthService implements AuthService {
  authorizeUser(login: string, password: string) {
    return fakeUsersAuthPairs.filter(pair => pair.login === login && pair.password === password)[0]?.user
  }
}
