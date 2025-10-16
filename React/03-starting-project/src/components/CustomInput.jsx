export default function CustomInput({ label, textarea = false, ...props }) {
  const inputClasses =
    'w-full p-1 border-b-2 bg-stone-200 border-stone-300 rounded-sm focus-visible:outline-none focus-visible:border-stone-600 ';

  return (
    <p className="flex flex-col my-4 gap-1">
      <label className="uppercase font-bold text-sm text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea className={inputClasses} {...props}></textarea>
      ) : (
        <input className={inputClasses} {...props} />
      )}
    </p>
  );
}
