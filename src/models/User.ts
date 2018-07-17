import { Column, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne, BeforeInsert } from 'typeorm';

import DefaultEntity from './DefaultEntity';
import Chat from './Chat';
import Message from './Message';
import Profile from './Profile';
import DirectMessage from './DirectMessage';
import Post from './Post';

@Entity()
export default class User extends DefaultEntity {
  // @Column({ unique: true })
  // username: string;
  @Column({ unique: true })
  email: string;
  @Column() password: string;

  @OneToOne(type => Profile, profile => profile.user, {
    nullable: false,
    cascade: true,
    eager: true
  })
  @JoinColumn()
  profile: Profile;

  @ManyToMany(type => Chat)
  chats: Chat[];

  @OneToMany(type => DirectMessage, directMessage => directMessage.sender)
  sentDirectMessages: DirectMessage[];

  @OneToMany(type => DirectMessage, directMessage => directMessage.receiver)
  receivedDirectMessages: DirectMessage[];

  @OneToMany(type => Message, message => message.sender)
  messages: Message[];

  @OneToMany(type => Chat, chat => chat.admin)
  regulatedChats: Chat[];

  @OneToMany(type => Post, post => post.author)
  posts: Post[];
}
