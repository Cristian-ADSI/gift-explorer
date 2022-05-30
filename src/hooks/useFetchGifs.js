import { useState, useEffect } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: false,
  });

  useEffect(() => {
    getGifs(category, setState).then((gifs) =>
      setTimeout(() => {
        setState({
          data: gifs,
          loading: false,
        });
      }, 3000)
    );
  }, [category]);

  return state;
};
