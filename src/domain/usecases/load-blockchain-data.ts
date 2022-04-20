import { BlockchainDataModel } from '../models/blockchain-data-model'

export interface LoadBlockchainData {
  load: () => Promise<BlockchainDataModel>
}
