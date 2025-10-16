export default function CustomButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="px-4 py-2 text-xs md:text-base text-stone-400 bg-stone-700 hover:bg-stone-600 hover:text-stone-100 rounded-md"
    >
      {children}
    </button>
  );
}
