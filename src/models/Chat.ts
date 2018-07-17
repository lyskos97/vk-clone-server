import { Entity, ManyToMany, ManyToOne, JoinTable, Column, OneToMany } from 'typeorm';

import DefaultEntity from './DefaultEntity';
import Message from './Message';
import User from './User';

@Entity()
export default class Chat extends DefaultEntity {
  @Column() name: string;

  @OneToMany(type => Message, message => message.chat)
  messages: Message[];

  @ManyToOne(type => User, user => user.regulatedChats, { nullable: false })
  admin: User;

  @ManyToMany(type => User)
  @JoinTable()
  members: User[];
}
