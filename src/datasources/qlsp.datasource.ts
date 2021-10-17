import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'qlsp',
  connector: 'mssql',
  url: 'mssql://sa:Abc123@localhost/qlsp',
  host: 'localhost',
  port: 1433,
  user: 'sa',
  password: 'Abc123',
  database: 'qlsp'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class QlspDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'qlsp';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.qlsp', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
