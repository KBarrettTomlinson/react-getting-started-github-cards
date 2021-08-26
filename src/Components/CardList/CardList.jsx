import React from "react";
import Card from "../Card/Card";

const CardList = ({ profiles }) => {
  return (
    <div>
      {profiles.map((profile) => (
        <Card key={profile.id} {...profile} />
      ))}
    </div>
  );
};

export default CardList;
