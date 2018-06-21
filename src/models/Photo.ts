import { Entity, Column, ManyToOne } from 'typeorm';

import DefaultEntity from './DefaultEntity';
import Profile from './Profile';

@Entity()
export default class Photo extends DefaultEntity {
  @Column() url: string;

  @ManyToOne(type => Profile, profile => profile.photos, { nullable: false })
  postedBy: Profile;
}
