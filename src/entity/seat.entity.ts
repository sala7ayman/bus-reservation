import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';
import { Bus } from './bus.entity';

@Entity()
export class Seat {
  @PrimaryColumn('varchar', {
    length: 20,
    name: 'seat-id',
  })
  seatId: string;

  @Column()
  busId: string;

  @ManyToOne(() => Bus)
  @JoinColumn({ name: 'busId' })
  _tenantRelation: Bus;
}
