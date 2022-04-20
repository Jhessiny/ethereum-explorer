import { HttpPostClient } from './../../protocols/http/http-post-client'
import { RemoteLoadBlockchainData } from './remote-load-blockchain-data'

describe('RemoteLoadBlockchainData', () => {
  it('should call HttpPostClient with correct url', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string

      async post (url: string): Promise<void> {
        this.url = url
        return await Promise.resolve()
      }
    }
    const url = 'test'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteLoadBlockchainData(url, httpPostClientSpy)
    await sut.load()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
