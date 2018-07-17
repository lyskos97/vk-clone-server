import { Entity, ManyToMany, ManyToOne, JoinTable, Column } from 'typeorm';

import DefaultEntity from './DefaultEntity';
import Message from './Message';
import User from './User';

@Entity()
export default class Chat extends DefaultEntity {
  @Column() name: string;

  @ManyToMany(type => Message)
  messages: Message[];

  @ManyToOne(type => User)
  admin: User;
  @ManyToMany(type => User)
  @JoinTable()
  members: User[];
}
