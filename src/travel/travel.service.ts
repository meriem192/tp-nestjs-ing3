import { Injectable } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto.js';
import { UpdateTravelDto } from './dto/update-travel.dto.js';
import { Travel } from './entities/travel.entity.js';

@Injectable()
export class TravelService {
  private trips:Travel[]=
  [
    {id:1,name:'To China',price:9000},
    {id:2,name:'To Moroco',price:4000},
  ]
  create(createTravelDto: CreateTravelDto) {
    return 'This action adds a new travel';
  }

  findAll() {
    return `This action returns all travel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} travel`;
  }

  update(id: number, updateTravelDto: UpdateTravelDto) {
    return `This action updates a #${id} travel`;
  }

  remove(id: number) {
    return `This action removes a #${id} travel`;
  }
}
