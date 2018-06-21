import { Entity, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';

import DefaultEntity from './DefaultEntity';
import Profile from './Profile';
import Message from './Message';

@Entity()
export default class User extends DefaultEntity {
  @Column({ unique: true })
  username: string;
  @Column({ unique: true })
  email: string;
  @Column() password: string;

  @OneToOne(type => Profile, profile => profile.user, { nullable: false })
  @JoinColumn()
  profile: Profile;

  // @OneToMany(type => Message, message => message.author)
  // messages: Message[];
}

// @Column({ unique: true })
// phoneNumber: string;
