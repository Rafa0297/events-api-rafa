import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Evento } from './entities/event.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Evento)
    private eventsRepository: Repository<Evento>,
  ) {}

  async create(createEventDto: CreateEventDto): Promise<Evento> {
    const event = this.eventsRepository.create(createEventDto);
    return this.eventsRepository.save(event);
  }

  async findAll() {
    return this.eventsRepository.find();
  }

  async findOne(id: string) {
    return this.eventsRepository.findOne({ where: { id } });
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    const event = await this.eventsRepository.findOne({ where: { id } });
    if (!event) {
      throw new NotFoundException('Event not found');
    }
    const updatedEvent = this.eventsRepository.merge(event, updateEventDto);
    return await this.eventsRepository.save(updatedEvent);
  }

  async remove(id: string) {
    const event = await this.eventsRepository.findOne({ where: { id } });
    if (!event) {
      throw new NotFoundException('Event not found');
    }
    await this.eventsRepository.remove(event);
    return { message: 'Event removed successfully' };
  }
}
