import React from "react";

const ListGroup = (props) => {
  const { items, idProperty, nameProperty, selectedGenre, onGenreSelect } =
    props;

  return (
    <ul className="list-group">
      {items.map((genre) => (
        <li
          key={genre[idProperty]}
          onClick={() => onGenreSelect(genre)}
          style={{ cursor: "pointer" }}
          className={
            genre === selectedGenre
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {genre[nameProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  idProperty: "_id",
  nameProperty: "name",
};

export default ListGroup;
