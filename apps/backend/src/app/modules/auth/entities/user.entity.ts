import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';
import { UserRole } from '../types/roles/user-roles.enum';

@Entity('users')
@Index(['email'], { unique: true })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, length: 255 })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column({ length: 100 })
  name: string;

  @Column({ 
    type: 'enum', 
    enum: UserRole, 
    default: UserRole.STUDENT 
  })
  role: UserRole;

  @Column({ default: false })
  isVerified: boolean;

  @Column({ nullable: true, length: 6, type: 'varchar' })
  otp: string;

  @Column({ nullable: true, type: 'timestamp' })
  otpExpiry: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}