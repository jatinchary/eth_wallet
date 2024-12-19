import { useSendTransaction } from 'wagmi';
import { parseEther } from 'viem';
import { useState } from 'react';

function SendTransaction() {
  const { sendTransaction } = useSendTransaction();

  const [address, setAddress] = useState('');
  const [value, setValue] = useState('');

  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-gray-100 rounded-lg shadow-md">
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Recipient Address"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Amount in ETH"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={() => {
          if (!address.startsWith('0x')) return;
          sendTransaction({
            to: address as `0x${string}`,
            value: parseEther(value),
          })
        }}
        className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
      >
        Send transaction
      </button>
    </div>
  );
}

export default SendTransaction;
