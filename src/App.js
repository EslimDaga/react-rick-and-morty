const App = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 my-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <div
          className="relative w-full bg-red-500 rounded-lg overflow-hidden shadow-xl hover:shadow-md"
          style={{ minHeight: "160px" }}
        >
          <div className="absolute top-[20px] right-[15px] pr-1 z-20 flex justify-between">
            <div className="inline-flex items-center justify-center w-auto h-auto p-1 rounded-md bg-green-500 shadow-sm">
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
          <div className="px-6 py-6 bg-blue-700">
            <h2 className="text-gray-800 text-sm font-semibold line-clamp-1">
              Rick Sanchez
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;