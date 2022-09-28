import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Bus {
  @PrimaryColumn('varchar', {
    length: 20,
    name: 'bus-id',
  })
  busId: string;

  @Column()
  name: string;

  @Column()
  from: string;

  @Column()
  to: string;

  @Column()
  capacity: number;

  @Column({ name: 'available-seats' })
  availableSeats: number;
}
