// import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { http, createConfig, WagmiProvider } from 'wagmi'
import { base, mainnet, optimism } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'
import { WalletOptions } from './WalletOptions'
import { Profile } from './Profile'
import SendTransaction from './SendTransaction'




export const config = createConfig({
  chains: [mainnet, base],
  connectors: [
    injected(),
    
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
})

const queryClient = new QueryClient()
function App() {
 

  return (
    <>
   <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> 
        {/** ... */} 
        <WalletOptions/>
       <Profile/>
       <SendTransaction/>
      </QueryClientProvider> 
    </WagmiProvider>
    </>
  )
}

export default App
