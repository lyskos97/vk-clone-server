import { Entity, Column, ManyToOne } from 'typeorm';
import DefaultEntity from './DefaultEntity';
import User from './User';
import Chat from './Chat';

@Entity()
export default class extends DefaultEntity {
  @Column() text: string;

  @ManyToOne(type => User, user => user.messages)
  sender: User;

  @ManyToOne(type => Chat, chat => chat.messages)
  chat: Chat;
}
