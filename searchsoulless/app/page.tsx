import Link from "next/link";

export default function Home() {
  return (
    <div className="py-10 max-w-screen">
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Search/Compare</h1>
        </div>
      </header>
      <main className="h-screen flex flex-col justify-center">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">
            <div className="flex flex-col justify-center bg-slate-100 rounded-lg drop-shadow-md">
              <div className="w-80 md:w-96 lg:w-96 xl:w-96 h-96 flex flex-col items-center justify-around">
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
        </div>
      </main>
    </div>

  )
}
