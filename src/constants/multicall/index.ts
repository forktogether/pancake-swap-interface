import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x2e3fC10856b68A3693f48de2f3956333fFb942BB', // TODO
  [ChainId.BSCTESTNET]: '0x2e3fC10856b68A3693f48de2f3956333fFb942BB'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
