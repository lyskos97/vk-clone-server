// import { Entity, Column, BaseEntity, PrimaryColumn, BeforeInsert } from 'typeorm';

// enum peerType {
//   user,
//   chat
// }

// @Entity()
// export default class Peer extends BaseEntity {
//   @PrimaryColumn() id: number;

//   @Column({ enum: peerType })
//   type: peerType;

//   @Column() localId: number;

//   @BeforeInsert()
//   generateId = () => {
//     // this.id = this.hasId()
//   };
// }
