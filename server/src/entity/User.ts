import {
  Entity,
  PrimaryGeneratedColumn,
  Index,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  OneToOne,
} from 'typeorm';
import UserProfile from './UserProfile';
import { generateToken } from '@/lib/token';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Index()
  @Column({ unique: true, length: 255 })
  username!: string;

  @Column({ nullable: true, length: 512, type: 'varchar' })
  password!: string | null;

  @Column('timestampz')
  @CreateDateColumn()
  created_at!: Date;

  @Column('timestamptz')
  @UpdateDateColumn()
  updated_at!: Date;

  @Column({ default: false })
  is_certified!: boolean;

  @OneToOne(
    type => UserProfile,
    profile => profile.user,
  )
  profile!: UserProfile;

  async generateUserToken() {
    // refresh token is valid for 30days
    const refreshToken = await generateToken(
      {
        user_id: this.id,
      },
      {
        subject: 'refresh_token',
        expiresIn: '30d',
      },
    );

    const accessToken = await generateToken(
      {
        user_id: this.id,
      },
      {
        subject: 'access_token',
        expiresIn: '1h',
      },
    );

    return {
      accessToken,
      refreshToken,
    };
  }

  async refreshUserToken(
    refreshTokenExp: number,
    originalRefreshToken: string,
  ) {
    const now = new Date().getTime();
    const diff = refreshTokenExp * 1000 - now;
    console.log('refreshing..');
    let refreshToken = originalRefreshToken;
    // renew refresh token if remaining life is less than 15d
    if (diff < 1000 * 60 * 60 * 24 * 15) {
      console.log('refreshing refreshToken');
      refreshToken = await generateToken(
        {
          user_id: this.id,
        },
        {
          subject: 'refresh_token',
          expiresIn: '30d',
        },
      );
    }
    const accessToken = await generateToken(
      {
        userId: this.id,
      },
      {
        subject: 'access_token',
        expiresIn: '1h',
      },
    );

    return { accessToken, refreshToken };
  }
}
