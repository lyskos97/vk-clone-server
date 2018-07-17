import { Entity, Column, OneToOne, OneToMany, ManyToOne } from 'typeorm';

import DefaultEntity from './DefaultEntity';
import User from './User';
import Photo from './Photo';
import City from './City';
import Post from './Post';

@Entity()
export default class Profile extends DefaultEntity {
  @Column() firstName: string;
  @Column() lastName: string;
  @Column({ enum: ['male, female'], nullable: true })
  gender: string;
  @Column({ nullable: true })
  birthDate: Date;

  /* RELATIONS */
  @ManyToOne(type => City, city => city.residents)
  residenceTown: City;

  @ManyToOne(type => City, city => city.descendants)
  hometown: City;

  @OneToMany(type => Photo, photo => photo.postedBy)
  avatars: string[];

  @OneToMany(type => Photo, photo => photo.postedBy)
  photos: Photo[];

  @OneToMany(type => Post, post => post.author)
  posts: Post[];

  /* ASSOCIATIONS */
  @OneToOne(type => User, user => user.profile, { nullable: false })
  user: User;
}
