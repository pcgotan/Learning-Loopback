import {inject} from '@loopback/core';
import {repository} from '@loopback/repository';
import {get, getModelSchemaRef, response} from '@loopback/rest';
import {Headers} from '../models';
import {HeadersRepository} from '../repositories';
import {Headers1, HeaderService} from '../services';
const axios = require('axios');

export class HeadersController {
  constructor(
    @repository(HeadersRepository)
    public headersRepository: HeadersRepository,

    @inject('services.HeaderService')
    protected headerService: HeaderService,

  ) { }

  @get('/headers')
  @response(200, {
    description: 'Add new entry',
    content: {'application/json': {schema: getModelSchemaRef(Headers, {includeRelations: true})}},
  })

  async addNew(
  ): Promise<Headers[]> {
    let temp1: any = {};
    const url = "http://httpbin.org/get";
    await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((resp: any) => temp1 = resp.data.headers)
    const temp2: any = {
      accept: temp1.Accept,
      content_type: temp1["Content-Type"],
      host: temp1.Host,
      user_agent: temp1["User-Agent"],
      trace_id: temp1['X-Amzn-Trace-Id']
    };
    await this.headersRepository.create(temp2);
    return this.headersRepository.find({order: ['id DESC'], "limit": 1});
  }


  @get('/headers1')
  async addNew1(
  ): Promise<Headers1> {
    var temp1: any = await this.headerService.getHeader();
    const temp2: any = {
      accept: temp1.headers.Accept,
      content_type: temp1.headers["Content-Type"],
      host: temp1.headers.Host,
      trace_id: temp1.headers['X-Amzn-Trace-Id']
    };
    await this.headersRepository.create(temp2);
    return temp2;
  }

}
