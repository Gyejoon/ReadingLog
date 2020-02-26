import { Entity, PrimaryGeneratedColumn, Index, Column, UpdateDateColumn, CreateDateColumn, OneToOne } from 'typeorm';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Index()
  @Column({ unique: true, length: 255 })
  username!: string;
  
  @Index()
  @Column({unique: true, length: 255, nullable: true, type: 'varchar'})
  email!: string | null;

  @Column('timestampz')
  @CreateDateColumn()
  createdAt!: Date;

  @Column('timestamptz')
  @UpdateDateColumn()
  updatedAt!: Date;

  @Column({ default: false })
  isCertified!: boolean;

  @OneToOne(type => UserProfile, profile => profile.user)
  profile!: UserProfile;
}
