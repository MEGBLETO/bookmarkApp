import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService){}
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
