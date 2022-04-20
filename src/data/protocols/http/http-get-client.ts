export interface HttpGetClient {
  post: (params: HttpGetClient.Params) => Promise<void>
}

export namespace HttpGetClient {
  export type Params = {
    url: string
  }
}
