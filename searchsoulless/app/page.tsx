import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <div className="w-3/5 h-1/3 flex flex-col justify-center bg-slate-100 rounded-lg drop-shadow-md xl:w-1/2">
        <div className="w-full h-full flex flex-col items-center justify-around">
          <div className="font-semibold text-center w-full border-b-2 pb-2">
            What would you like to do?
          </div>
          <div className="flex flex-col items-center h-full w-full justify-center space-y-10">
            <Link href={"/search"} className="inline-flex w-1/2 justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <button
                type="button"
              >
                Search
              </button>
            </Link>
            <Link href={"/compare"} className="inline-flex w-1/2 justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <button
                type="button"
              >
                Compare
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
