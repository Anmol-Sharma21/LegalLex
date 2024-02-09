import { useState } from "react";
import { CaretLeft, CaretRight } from "phosphor-react";

const Sidebar = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className={`w-2/12 h-screen border border-pink-300`}>
        {show && <div className={"bg-slate-500 h-screen"}>Sidebar</div>}
      </div>
      <button onClick={() => setShow(!show)}>
        <CaretLeft size={30} />
      </button>
    </>
  );
};

export default Sidebar;
