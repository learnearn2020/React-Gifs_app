import React from "react";

export const GifGridItem = ({ img }) => {
  return (
    <div className="col-md-4 animate__lightSpeedInLeft">
      <div className="card  my-2">
        <img
          style={{ height: 200 }}
          className="w-100"
          src={img.url}
          alt={img.title}
        />
        <div className="card-body">
          <p className="card-text text-center text-danger">{img.title}</p>
        </div>
      </div>
    </div>
  );
};
