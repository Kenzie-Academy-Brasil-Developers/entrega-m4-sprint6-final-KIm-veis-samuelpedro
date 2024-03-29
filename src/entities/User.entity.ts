import { getRounds, hashSync } from "bcryptjs";
import Schedule from "./Schedule.entity";
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,UpdateDateColumn, OneToMany, BeforeInsert, BeforeUpdate, DeleteDateColumn } from "typeorm";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 45, unique: true })
  email: string;

  @Column({ default: false })
  admin: boolean;

  @Column({ length: 120 })
  password: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @DeleteDateColumn({ type: "date", nullable: true })
  deletedAt: string | null;

  @OneToMany(() => Schedule, (schedule) => schedule.user)
  schedules: Schedule[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const hasRounds: number = getRounds(this.password)

    if(!hasRounds) {
      this.password = hashSync(this.password, 10)
    }
  }
}
