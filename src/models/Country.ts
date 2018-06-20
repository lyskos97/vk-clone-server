import { Column, OneToMany } from 'typeorm';

import DefaultEntity from './DefaultEntity';
import City from './City';

export default class Country extends DefaultEntity {
  @Column() name: string;

  @OneToMany(type => City, city => city.country)
  cities: City[];
}
