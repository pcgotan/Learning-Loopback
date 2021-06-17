import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {HeadersDataSource} from '../datasources';
import {Headers, HeadersRelations} from '../models';

export class HeadersRepository extends DefaultCrudRepository<
  Headers,
  typeof Headers.prototype.id,
  HeadersRelations
> {
  constructor(
    @inject('datasources.headers') dataSource: HeadersDataSource,
  ) {
    super(Headers, dataSource);
  }
}
