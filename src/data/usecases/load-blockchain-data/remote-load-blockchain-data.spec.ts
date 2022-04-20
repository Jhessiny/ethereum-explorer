import { HttpGetClientSpy } from './../../test/mock-http-client'
import { RemoteLoadBlockchainData } from './remote-load-blockchain-data'
import faker from 'faker'

type SutTypes = {
  sut: RemoteLoadBlockchainData
  httpGetClientSpy: HttpGetClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy()
  const sut = new RemoteLoadBlockchainData(url, httpGetClientSpy)
  return {
    sut, httpGetClientSpy
  }
}

describe('RemoteLoadBlockchainData', () => {
  it('should call HttpPostClient with correct url', async () => {
    const url = faker.internet.url()
    const { sut, httpGetClientSpy } = makeSut(url)
    await sut.load()
    expect(httpGetClientSpy.url).toBe(url)
  })
})
