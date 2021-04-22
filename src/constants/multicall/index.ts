import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x23CA39d88F93EeC7A2341D666d866b6bb6423FC2', // TODO
  [ChainId.BSCTESTNET]: '0x23CA39d88F93EeC7A2341D666d866b6bb6423FC2'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
