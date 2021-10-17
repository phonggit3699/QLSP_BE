import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {QlspDataSource} from '../datasources';
import {Books, BooksRelations} from '../models';

export class BooksRepository extends DefaultCrudRepository<
  Books,
  typeof Books.prototype.id,
  BooksRelations
> {
  constructor(
    @inject('datasources.qlsp') dataSource: QlspDataSource,
  ) {
    super(Books, dataSource);
  }
}
