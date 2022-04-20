import { HttpPostClient } from '@/data/protocols/http/http-post-client'

export class RemoteLoadBlockchainData {
  constructor (private readonly url: string, private readonly httpPostClient: HttpPostClient) {}
  async load (): Promise<void> {
    await this.httpPostClient.post({ url: this.url })
  }
}
