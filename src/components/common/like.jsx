import React from "react";

// This component Input -> liked: boolean
// This compoent Output -> raise onClick() event

// --- Stateless Function/Functional Component ---
// should pass 'props' as parameter because in stateless function component 'this' keyword is not working
const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";

  return (
    <i
      onClick={props.onLikeToggle}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Like;
