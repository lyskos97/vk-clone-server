import { Column, ManyToOne } from 'typeorm';

import DefaultEntity from './DefaultEntity';
import Country from './Country';

export default class City extends DefaultEntity {
  @Column() name: string;

  @ManyToOne(type => Country, country => country.cities)
  country: Country;
}
