import { Address } from './Address.entity';
import { Category } from './Category.entity';
import Schedule from './Schedule.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
  
@Entity('realEstates')
  export default class RealEstate {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'boolean', default: false})
    sold: boolean;
  
    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0})
    value: number | string;
  
    @Column()
    size: number;

    @CreateDateColumn({ type: 'date'})
    createdAt: string;

    @UpdateDateColumn({ type: 'date'})
    updateAt: string;

    @OneToMany(() => Schedule, (schedule) => schedule.realEstate)
    schedules: Schedule[];

    @OneToOne(() => Address, (address) => address.realEstate)
    @JoinColumn()
    address: Address

    @ManyToOne(()  => Category, (category) => category.realEstate)
    category: Category
  }