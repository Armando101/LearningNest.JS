import { Global, Module } from '@nestjs/common';

const API_KEY = '123456789';
const API_KEY_PROD = 'Key for production';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
