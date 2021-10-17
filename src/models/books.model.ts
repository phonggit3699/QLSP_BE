import {Entity, model, property} from '@loopback/repository';

@model()
export class Books extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  img: string;

  @property({
    type: 'string',
    required: true,
  })
  author: string;

  @property({
    type: 'string',
    required: true,
  })
  type: string;

  @property({
    type: 'string',
    required: true,
  })
  producer: string;

  @property({
    type: 'string',
    required: true,
  })
  price: string;

  @property({
    type: 'string',
    required: true,
  })
  episodes: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;


  constructor(data?: Partial<Books>) {
    super(data);
  }
}

export interface BooksRelations {
  // describe navigational properties here
}

export type BooksWithRelations = Books & BooksRelations;
