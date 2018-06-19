import { Entity, Column, OneToMany } from 'typeorm';
import DefaultEntity from './DefaultEntity';
import Post from './Post';

@Entity()
export class User extends DefaultEntity {
  @Column({ name: 'first_name' })
  firstName: string;
  @Column({ name: 'last_name' })
  lastName: string;
  @Column() avatarUrl: string;
  @Column({ unique: true })
  email: string;
  @Column({ unique: true })
  phoneNumber: string;

  @OneToMany(type => Post, post => post.author)
  posts: Post[];
}
