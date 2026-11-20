export default function HomePage() {
  return (
    <header>
      <h1 className="text-center px-6 pt-6 text-[2.2rem]">
        Put Your Digital Literacy to the Test
      </h1>

      <div className="flex flex-col justify-center items-center pt-4">
        <p className="text-center px-5 pb-5 pt-2">
          This assessment covers a broad spectrum of foundational IT principles
          to help you measure your current knowledge, spot areas for growth, and
          reinforce key concepts. Take a few minutes to work through the
          questions and discover where your tech expertise stands today.
        </p>
        <button className="border p-3 rounded-2xl bg-zinc-900 text-white lg:cursor-pointer lg:transition-transform lg:hover:scale-110 lg:duration-300 lg:ease-in-out">
          Start Quiz
        </button>
      </div>
    </header>
  );
}
