import { Column, OneToMany, Entity } from 'typeorm';

import DefaultEntity from './DefaultEntity';
import City from './City';

@Entity()
export default class Country extends DefaultEntity {
  @Column({ unique: true })
  name: string;

  @OneToMany(type => City, city => city.country)
  cities: City[];
}
