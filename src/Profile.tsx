// import React from 'react';
import { useAccount, useBalance } from 'wagmi';

export function Profile() {
  const { address, isConnecting } = useAccount();
  const { data: balanceData, isLoading: isBalanceLoading } = useBalance({
    address,
  });

  if (isConnecting) {
    return (
      <div className="p-4 bg-blue-100 text-blue-700 rounded-lg shadow-md text-center">
        Connecting wallet...
      </div>
    );
  }

  if (!address) {
    return (
      <div className="p-4 bg-gray-100 text-gray-700 rounded-lg shadow-md text-center">
        Please connect your wallet
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Wallet Address</h2>
        <p className="font-mono text-sm text-gray-600 break-all">{address}</p>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold text-gray-800">ETH Balance</h2>
        {isBalanceLoading ? (
          <div className="animate-pulse text-gray-500">Loading balance...</div>
        ) : balanceData ? (
          <p className="font-mono text-lg text-gray-600">
            {parseFloat(balanceData.formatted).toFixed(4)} ETH
          </p>
        ) : (
          <p className="text-red-600 text-sm">0.00</p>
        )}
      </div>
    </div>
  );
}

export default Profile;