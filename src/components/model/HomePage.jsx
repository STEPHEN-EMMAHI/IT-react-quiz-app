export default function HomePage() {
  return (
    <header>
      <h1 className="text-center pt-12 text-[2.5rem]">IT General Questions</h1>

      <div className="flex flex-col justify-center items-center pt-12">
        <p className="text-center p-3 pb-8">
          Test your understanding on general IT knowledge.
        </p>
        <button className="border p-3 rounded-2xl bg-zinc-900 text-white lg:cursor-pointer lg:transition-transform lg:hover:scale-110 lg:duration-300 lg:ease-in-out">
          Start Quiz
        </button>
      </div>
    </header>
  );
}
