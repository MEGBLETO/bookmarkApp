import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return {
      msg: 'hello you just signedIn',
    };
  }

  signup() {

    return {
        msg: "hello you just signedUp"
    }
  }
}
