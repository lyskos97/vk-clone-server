import { Entity, Column, ManyToOne } from 'typeorm';

import DefaultEntity from './DefaultEntity';
import Profile from './Profile';
import User from './User';

@Entity()
export default class Post extends DefaultEntity {
  @Column() text: string;

  @ManyToOne(type => User, user => user.posts, { nullable: false })
  author: User;
}
