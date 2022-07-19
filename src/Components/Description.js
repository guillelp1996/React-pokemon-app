import React from "react";

const Description = ({
  heightpok,
  weightpok,
  pokstat1,
  pokstat2,
  pokstat3,
  pokstat4,
  pokstat5,
  pokstat6,
  posbs1,
  posbs2,
  posbs3,
  posbs4,
  posbs5,
  posbs6,
}) => {
  return (
    <div className="desc">
      <p>
        <b>Height</b> : <b>{heightpok * 10} cm.</b>
      </p>
      <p>
        <b>Weight</b> : <b>{weightpok * 0.1} kg</b>
      </p>
      <h3>Stats : </h3>
      <ul>
        <li>
          {pokstat1} : {posbs1}
        </li>
        <li>
          {pokstat2} : {posbs2}
        </li>
        <li>
          {pokstat3} : {posbs3}
        </li>
        <li>
          {pokstat4} : {posbs4}
        </li>
        <li>
          {pokstat5} : {posbs5}
        </li>
        <li>
          {pokstat6} : {posbs6}
        </li>
      </ul>
    </div>
  );
};

export default Description;
