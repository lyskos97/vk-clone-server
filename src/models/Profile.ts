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
  @Column() avatarUrl: string;
  @Column({ enum: ['male, female'] })
  gender: string;
  @Column() birthDate: Date;

  @ManyToOne(type => City, city => city.residents)
  residenceTown: City;
  @ManyToOne(type => City, city => city.descendants)
  hometown: City;
  @OneToOne(type => User, user => user.profile)
  user: User;
  @OneToMany(type => Photo, photo => photo.postedBy)
  photos: Photo[];
  @OneToMany(type => Post, post => post.author)
  posts: Post[];
}
