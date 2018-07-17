import { Entity, Column, OneToMany, ManyToOne } from 'typeorm';
import DefaultEntity from './DefaultEntity';
import User from './User';

@Entity()
export default class extends DefaultEntity {
  @Column() text: string;

  @ManyToOne(type => User, user => user.sentDirectMessages, { nullable: false })
  sender: User;

  @ManyToOne(type => User, user => user.receivedDirectMessages, { nullable: false })
  receiver: User;
}
