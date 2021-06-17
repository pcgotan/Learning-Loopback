import {Entity, model, property} from '@loopback/repository';

@model()
export class Headers extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  accept?: string;

  @property({
    type: 'string',
  })
  content_type?: string;

  @property({
    type: 'string',
  })
  host?: string;


  @property({
    type: 'string',
  })
  user_agent?: string;

  @property({
    type: 'string',
  })
  trace_id?: string;


  constructor(data?: Partial<Headers>) {
    super(data);
  }
}

export interface HeadersRelations {
  // describe navigational properties here
}

export type HeadersWithRelations = Headers & HeadersRelations;
