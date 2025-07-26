import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntity } from '../modules/auth/entities/user.entity';

export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password101',
  database: 'campboard',
  entities: [UserEntity],
  synchronize: true,
};
