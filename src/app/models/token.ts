import jwt_decode from 'jwt-decode';
import { User } from './user';

export class Token {
  token: string = '';

  constructor() {}

  getDecodedAccessToken(theToken: Token): User | null {
    try {
      return jwt_decode<User>(theToken.token);
    } catch (Error) {
      return null;
    }
  }
}
