import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('events')
export class Evento {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  title?: string;

  @Column('text') // Usamos 'text' para descripciones largas
  description?: string;

  @Column()
  date?: Date;

  @Column()
  location?: string;

  @Column({ default: true })
  isActive?: boolean;
}
