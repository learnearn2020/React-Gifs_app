import React, { Fragment } from "react";
// import PropTypes from "prop-types";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/GetGifs";
const GridGifs = ({ category }) => {
  //   const [imagen, setImagen] = useState([]);
  // el useEffect sirve para que cuando se haga un cambio en el componente , no vuelve a actualizar todo el componente
  //   useEffect(() => {
  //     getGifs(category).then((data) => setImagen(data));
  //   }, [category]);
  const { data: imagen } = useFetchGifs(category);
  return (
    <Fragment>
      <h2 className="text-center text-uppercase text-white">{category}</h2>
      <div className="row justify-content-space-between  d-flex">
        {imagen.map((img) => (
          <GifGridItem key={img.id} img={img} />
        ))}
      </div>
    </Fragment>
  );
};

GridGifs.propTypes = {};

export default GridGifs;
