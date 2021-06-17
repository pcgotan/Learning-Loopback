import {repository} from '@loopback/repository';
import {get, getModelSchemaRef, response} from '@loopback/rest';
import {Headers} from '../models';
import {HeadersRepository} from '../repositories';
const axios = require('axios');

export class HeadersController {
  constructor(
    @repository(HeadersRepository)
    public headersRepository: HeadersRepository,
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

}
