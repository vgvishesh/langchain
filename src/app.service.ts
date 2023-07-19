import { Injectable } from '@nestjs/common';
import { OpenAI } from 'langchain/llms/openai';
import { configuration } from './config/config';

@Injectable()
export class AppService {
  protected model: OpenAI;
  constructor() {
    this.model = new OpenAI({
      openAIApiKey: configuration().OPEN_API_KEY,
      temperature: 0.9,
    });
  }

  getHello(): string {
    return 'Hello World!';
  }

  async doingMagic(): Promise<string> {
    const res = await this.model.call(
      'what would be a good company name for a compnay that makes colorful tin cans',
    );

    return res;
  }
}
