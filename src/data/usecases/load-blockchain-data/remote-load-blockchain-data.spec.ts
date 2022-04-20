import { HttpPostClientSpy } from './../../test/mock-http-client'
import { RemoteLoadBlockchainData } from './remote-load-blockchain-data'

type SutTypes = {
  sut: RemoteLoadBlockchainData
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = 'any_url'): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteLoadBlockchainData(url, httpPostClientSpy)
  return {
    sut, httpPostClientSpy
  }
}

describe('RemoteLoadBlockchainData', () => {
  it('should call HttpPostClient with correct url', async () => {
    const url = 'test'
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.load()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
