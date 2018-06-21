import { Entity, Column, ManyToOne } from 'typeorm';

import DefaultEntity from './DefaultEntity';
import Profile from './Profile';

@Entity()
export default class Post extends DefaultEntity {
  @Column() text: string;

  @ManyToOne(type => Profile, profile => profile.posts)
  author: Profile;
}
