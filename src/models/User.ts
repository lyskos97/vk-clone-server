import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import DefaultEntity from './DefaultEntity';
import Post from './Post';
import Profile from './Profile';

@Entity()
export default class User extends DefaultEntity {
  @Column({ unique: true })
  username: string;
  @Column({ unique: true })
  email: string;
  @Column({ unique: true })
  phoneNumber: string;
  @Column({ select: false })
  password: string;

  @OneToOne(type => Profile, profile => profile.user)
  @JoinColumn()
  profile: Profile;
}
