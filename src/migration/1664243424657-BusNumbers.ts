import { MigrationInterface, QueryRunner } from 'typeorm';
import { Bus } from '../entity/bus.entity';

export class BusNumbers1664233298585 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.save(
      queryRunner.manager.create(Bus, {
        busId: '1',
        name: 'Cairo-Aswan',
        from: 'Cairo',
        to: 'Aswan',
        capacity: 20,
        availableSeats: 20,
      })
    );

    await queryRunner.manager.save(
      queryRunner.manager.create(Bus, {
        busId: '2',
        name: 'Cairo-Alexandria',
        from: 'Cairo',
        to: 'Aswan',
        capacity: 20,
        availableSeats: 20,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
