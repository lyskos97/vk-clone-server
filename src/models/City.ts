import { Column, ManyToOne, OneToMany } from 'typeorm';

import DefaultEntity from './DefaultEntity';
import Country from './Country';
import Profile from './Profile';

export default class City extends DefaultEntity {
  @Column() name: string;

  @ManyToOne(type => Country, country => country.cities)
  country: Country;
  @OneToMany(type => Profile, profile => profile.hometown)
  descendants: Profile[];
  @OneToMany(type => Profile, profile => profile.residenceTown)
  residents: Profile[];
}
