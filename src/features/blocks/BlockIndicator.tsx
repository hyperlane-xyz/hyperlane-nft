import { useBlockNumber } from 'wagmi';

export function BlockIndicator() {
  const { data: blockNumber, status } = useBlockNumber({
    watch: true,
  });
  let circleColor = 'gray-600';
  if (blockNumber && status === 'success') {
    circleColor = 'green-500';
  } else if (blockNumber && (status === 'loading' || status === 'idle')) {
    circleColor = 'yellow-300';
  } else if (status === 'error') {
    circleColor = 'red-600';
  }

  return (
    <div className="flex items-center">
      <div className="mr-3 text-sm font-medium pt-px">
        {blockNumber ?? 'Not connected'}
      </div>
      <div
        className={`rounded-full w-4 h-4 ${'bg-' + circleColor} border-2 ${
          'border-' + circleColor
        } border-opacity-50`}
      ></div>
      <div className="hidden bg-green-500 bg-yellow-300 bg-red-600"></div>
    </div>
  );
}
