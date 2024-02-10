import { useState } from "react";
import Sidebar_Card from "./Sidebar_Card";

const Sidebar_CardList = () => {
  const [active, setActive] = useState(1);
  return (
    <div className={"p-5"}>
      <Sidebar_Card />
    </div>
  );
};

export default Sidebar_CardList;
