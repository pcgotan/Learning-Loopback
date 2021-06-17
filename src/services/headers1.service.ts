import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import RestdsDataSource from '../datasources/headers1.datasource';

export interface HeaderService {
  // this is where you define the Node.js methods that will be
  // mapped to the SOAP operations as stated in the datasource
  // json file.
  getHeader(): Promise<Headers1>;
}

export class HeaderServiceProvider implements Provider<HeaderService> {
  constructor(
    // restds must match the name property in the datasource json file
    @inject('datasources.restds')
    protected dataSource: RestdsDataSource = new RestdsDataSource(),
  ) { }

  value(): Promise<HeaderService> {
    return getService(this.dataSource);
  }
}

export interface Headers1 {
  accept: string;
  content_type: string;
  host: string;
  trace_id: string;
}
