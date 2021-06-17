import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'headers',
  connector: 'postgresql',
  url: '',
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'asdfasdf',
  database: 'http-bin-test'
};

@lifeCycleObserver('datasource')
export class HeadersDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'headers';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.headers', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
