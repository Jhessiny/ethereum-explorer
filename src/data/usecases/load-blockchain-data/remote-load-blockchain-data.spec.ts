import { HttpPostClientSpy } from './../../test/mock-http-client'
import { RemoteLoadBlockchainData } from './remote-load-blockchain-data'
import faker from 'faker'

type SutTypes = {
  sut: RemoteLoadBlockchainData
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteLoadBlockchainData(url, httpPostClientSpy)
  return {
    sut, httpPostClientSpy
  }
}

describe('RemoteLoadBlockchainData', () => {
  it('should call HttpPostClient with correct url', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.load()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
