import RealEstate from './RealEstate.entity';
import { User } from './User.entity';
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
  
@Entity('schedules')
  export default class Schedule {
    @PrimaryGeneratedColumn('increment')
    id: number;
  
    @Column({ type: 'date' })
    date: string;
  
    @Column({ type: 'time' })
    hour: string;
  
    @ManyToOne(() => User, (user) => user.schedules)
    user: User;
  
    @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
    realEstate: RealEstate;
  }