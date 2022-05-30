import { useFetchGifs } from "../hooks/useFetchGifs";
import { GiftGridItem } from "./GiftGridItem";
import { Loader } from "../components/Loader";

export const GifGrid = ({ category }) => {
  const { data: gifs, loading } = useFetchGifs(category);

  return (
    <>
      <h2>{category}</h2>
      {loading && gifs.length === 0 && <Loader />}
      <div className="gif__grid">
        {gifs.map((img) => (
          <GiftGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
