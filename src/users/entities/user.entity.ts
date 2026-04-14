import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name?: string;

  @Column({ unique: true }) // No puede haber dos correos iguales
  email?: string;

  @Column({ select: false }) // Por seguridad, el password no se devuelve en los GET
  password?: string;

  @CreateDateColumn() // Se llena sola con la fecha de registro
  createdAt?: Date;
}
