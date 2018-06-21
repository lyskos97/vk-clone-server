import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';

import DefaultEntity from './DefaultEntity';
import Profile from './Profile';

@Entity()
export default class User extends DefaultEntity {
  @Column({ unique: true })
  username: string;
  @Column({ unique: true })
  email: string;
  @Column({ unique: true })
  phoneNumber: string;
  @Column()
  password: string;

  @OneToOne(type => Profile, profile => profile.user)
  @JoinColumn()
  profile: Profile;
}
