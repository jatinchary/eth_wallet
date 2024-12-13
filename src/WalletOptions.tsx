// import * as React from 'react';
import { useConnect, useDisconnect, useAccount } from 'wagmi';

export function WalletOptions() {
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { address } = useAccount(); // Get the connected address

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Connect Your ETH Wallet
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            className="flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          >
            <span className="mr-2">{getConnectorIcon(connector.name)}</span>
            {connector.name}
          </button>
        ))}

        {/* Show Disconnect button only if an address is connected */}
        {address && (
          <button
            className="bg-red-500 text-white border-none rounded-lg px-4 py-2 text-lg hover:bg-red-600 active:bg-red-700 transition-transform transform hover:scale-105 active:scale-95"
            onClick={() => disconnect()}
          >
            Disconnect
          </button>
        )}
      </div>
    </div>
  );
}

function getConnectorIcon(name: string) {
  // You can replace these with actual SVG icons or import them from a library like `lucide-react`
  switch (name.toLowerCase()) {
    case 'metamask':
      return '🦊';
    case 'walletconnect':
      return '🔗';
    case 'coinbase wallet':
      return '🪙';
    default:
      return '💼';
  }
}
