import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { User } from './User';
import DefaultEntity from './DefaultEntity';

@Entity()
export default class Post extends DefaultEntity {
  @Column() text: string;

  @ManyToOne(type => User, user => user.posts)
  author: User;
}
