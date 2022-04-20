import { HttpPostClientSpy } from './../../test/mock-http-client'
import { RemoteLoadBlockchainData } from './remote-load-blockchain-data'

describe('RemoteLoadBlockchainData', () => {
  it('should call HttpPostClient with correct url', async () => {
    const url = 'test'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteLoadBlockchainData(url, httpPostClientSpy)
    await sut.load()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
