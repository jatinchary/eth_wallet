import { useAccount, useEnsName } from 'wagmi';

export function Profile() {
  const { address } = useAccount();

  // Check if address is available before fetching ENS name
  const { data, error, status } = useEnsName(address ? { address } : undefined);

  if (!address) 
    return <div className="p-4 bg-gray-100 text-gray-700 rounded-lg shadow-md text-center">No address found</div>;

  if (status === 'pending') 
    return <div className="p-4 bg-yellow-100 text-yellow-700 rounded-lg shadow-md text-center animate-pulse">
      Loading ENS name...
    </div>;

  if (status === 'error') 
    return <div className="p-4 bg-red-100 text-red-700 rounded-lg shadow-md text-center">
      Error fetching ENS name: {error?.message}
    </div>;

  return (
    <div className="p-6 bg-green-100 text-green-700 rounded-lg shadow-lg text-center">
      <p className="text-xl font-semibold">WALLET ADDRESS:</p>
      <p className="text-lg font-mono text-gray-800">{address}</p>
      <p className="mt-4 text-xl font-semibold">ENS NAME:</p>
      <p className="text-lg font-mono text-gray-800">{data || 'No ENS name available'}</p>
    </div>
  );
}
