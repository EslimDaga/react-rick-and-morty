const App = () => {
  return (
    <main className="flex-1 overflow-y-auto px-4 py-4 bg-gray-100 dark:bg-gray-800">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-4 my-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <div
            className="relative mx-auto bg-red-500 rounded-lg overflow-hidden shadow-xl hover:shadow-md"
            style={{ minHeight: "160px" }}
          >
            <div className="absolute top-[20px] right-[15px] pr-1 z-20 flex justify-between">
              <div className="w-auto h-auto inline-flex items-center justify-center p-1 rounded-md bg-green-900 font-Outfit font-bold text-white shadow-sm">
                Alive
              </div>
            </div>
            <div className="relative block h-[300px]">
              <img
                src={`https://rickandmortyapi.com/api/character/avatar/${i}.jpeg`}
                alt=""
                className="h-full"
              />
            </div>
            <div className="px-6 py-6 bg-white">
              <h2 className="text-gray-800 font-Outfit font-semibold line-clamp-1">
                Rick Sanchez
              </h2>
              <div className="flex justify-between">
                <p className="font-Outfit font-normal">Human</p>
                <p className="font-Outfit font-normal">Male</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;