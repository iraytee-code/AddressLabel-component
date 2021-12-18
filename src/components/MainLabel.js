import React from "react";
import DetailsName from "./`DetailsName";
import DetailsAddress from "./DetailsAddress";
import DetailsRegion from "./DetailsRegion";

const MainLabel = (props) => {
  return (
    <div className="label">
      <div className="label-d">
        <DetailsName name="Adeniran Hope Adebayo" />
        <DetailsAddress address="123 Fake St." />
        <DetailsRegion region="Boston, MA 02118" />
      </div>
    </div>
  );
};

export default MainLabel;
