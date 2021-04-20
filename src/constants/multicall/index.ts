import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x11da7aa9c0dcFCB748FD518B62e1103e93c9E8a0', // TODO
  [ChainId.BSCTESTNET]: '0x11da7aa9c0dcFCB748FD518B62e1103e93c9E8a0'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
