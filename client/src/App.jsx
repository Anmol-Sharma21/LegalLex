import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Link to={"/chat"}>Main</Link>
      <Outlet />
    </>
  );
}

export default App;
