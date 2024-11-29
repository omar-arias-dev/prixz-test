
export default function Badge({ value }) {
  return (
    <span className='bg-gray-100 text-gray-700 border border-gray-400 text-xs font-medium mr-2 px-1.5 rounded-full py-1'>{value}</span>
  );
}