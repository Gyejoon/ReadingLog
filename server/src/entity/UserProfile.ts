import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import User from './User';

@Entity('user_profile')
export default class UserProfile {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 255 })
  nickname!: string;

  @Column({ length: 20, nullable: true, type: 'varchar' })
  mobile_phone_number!: string | null;

  @Column({ length: 255, nullable: true, type: 'varchar' })
  thumbnail!: string | null;

  @Column('timestampz')
  @CreateDateColumn()
  created_at!: Date;

  @Column('timestamptz')
  @UpdateDateColumn()
  updated_at!: Date;

  @OneToOne(type => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'fk_user_id' })
  user!: User;

  @Column('uuid')
  fk_user_id!: string;

  @Column({
    default: {},
    type: 'jsonb',
  })
  profile_links!: any;

  @Column({ type: 'text', nullable: true })
  about!: string | null;
}
