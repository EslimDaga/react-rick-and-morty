import CardItem from "../components/CardItem";

const Characters = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-4 my-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <CardItem i={i} />
      ))}
    </div>
  );
}

export default Characters;