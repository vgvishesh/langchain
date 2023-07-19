import { Injectable } from '@nestjs/common';
import { OpenAI } from 'langchain/llms/openai';
import { configuration } from './config/config';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { HumanMessage, ChatMessage, SystemMessage } from 'langchain/schema';

@Injectable()
export class AppService {
  protected model: OpenAI;
  protected chat: ChatOpenAI;
  constructor() {
    this.model = new OpenAI({
      openAIApiKey: configuration().OPEN_API_KEY,
      temperature: 0.9,
    });

    this.chat = new ChatOpenAI({
      temperature: 0,
    });
  }

  getHello(): string {
    return 'Hello World!';
  }

  async doingMagic(): Promise<string> {
    const res = await this.model.predict(
      'what would be a good company name for a compnay that makes colorful tin cans',
    );
    return res;
  }

  async translate() {
    const result = await this.chat.predictMessages([
      new HumanMessage(
        'Translate this sentence from English to French. I love programming.',
      ),
    ]);
    console.log(result);
    return result.content;
  }
}
