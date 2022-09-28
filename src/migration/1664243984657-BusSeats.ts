import { MigrationInterface, QueryRunner } from 'typeorm';
import { Bus } from '../entity/bus.entity';
import { Seat } from '../entity/seat.entity';

export class BusSeats1664243984657 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    for (let i = 1; i < 20; i++) {
      await queryRunner.manager.save(
        queryRunner.manager.create(Seat, {
          seatId: 'A' + i,
          busId: '1',
        })
      );
    }

    for (let i = 1; i < 20; i++) {
      await queryRunner.manager.save(
        queryRunner.manager.create(Seat, {
          seatId: 'B' + i,
          busId: '2',
        })
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
