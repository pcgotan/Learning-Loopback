import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './headers1.datasource.json';

export default class RestdsDataSource extends juggler.DataSource {
  static dataSourceName = 'restds';

  constructor(
    @inject('datasources.config.restds', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
