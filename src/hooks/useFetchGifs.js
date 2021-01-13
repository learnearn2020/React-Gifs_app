import { useState, useEffect } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then(
      (info) =>
        //   setTimeout(() => {
        setState({
          data: info,
          loading: false,
        })
      //   }, 3000)
    );
  }, [category]);

  return state;
};
