import './App.css'
import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { Button } from '@chakra-ui/react'

function Profile() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  if (isConnected)
    return (
      <div>
        Connected to {address}
        <Button colorScheme={'blue'} onClick={() => disconnect()}>Disconnect</Button>
      </div>
    )
  return <Button colorScheme={'blue'} onClick={() => connect()}>Connect Wallet</Button>
}

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
})

function App() {
  return (
    <WagmiConfig client={client}>
      <Profile />
    </WagmiConfig>
  )
}

export default App
