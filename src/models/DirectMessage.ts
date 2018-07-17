import { Entity, Column, OneToMany } from 'typeorm';
import DefaultEntity from './DefaultEntity';
import User from './User';

@Entity()
export default class extends DefaultEntity {
  @Column() text: string;

  @OneToMany(type => User, user => user.directMessages)
  sender: User;
}
