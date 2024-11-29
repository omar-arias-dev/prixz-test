export default function Input({ onChange, value, type, placeholder, disabled = false, min = null, max = null }) {
  return (
    <input
      onChange={onChange}
      onKeyDown={(event) => {
        if (type === "date") {
          event.preventDefault();
        }
      }}
      value={value}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      min={min}
      max={max}
      className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none leading-relaxed"
    />
  );
}
