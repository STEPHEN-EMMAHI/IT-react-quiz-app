export default function Options({ options }) {
  return (
    <div className="flex max-w-xl flex-col gap-6 p-8 lg:w-full lg:border lg:mx-8 lg:rounded-2xl">
      {options.map((option, index) => (
        <button key={index} className="flex gap-4 items-center border-b">
          <input
            type="checkbox"
            className="size-5 appearance-none border border-slate-800 rounded-full p-1 checked:bg-blue-600 checked:border-blue-600 checked:bg-clip-content m-2 shrink-0"
          />
          <span className="text-left">{option}</span>
        </button>
      ))}
    </div>
  );
}
