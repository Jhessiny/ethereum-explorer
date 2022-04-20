import { HttpGetClient } from '../protocols/http/http-get-client'
export class HttpGetClientSpy implements HttpGetClient {
  url?: string

  async post (params: HttpGetClient.Params): Promise<void> {
    this.url = params.url
    return await Promise.resolve()
  }
}
