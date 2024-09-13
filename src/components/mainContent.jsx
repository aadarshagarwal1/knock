import Home from "./home";
import CreatePost from "./createPost";
import LoadHandler from "./loadHandler";
import { useContext } from "react";
import { DataContext } from "../store/dataContext";
import { Outlet } from "react-router-dom";
export default function mainContent() {
  /*
  const currentTab =
    useContext(DataContext).currentTab === "home" ? <Home /> : <CreatePost />;
    */
  const loadingStatus = useContext(DataContext).loadingState;

  return (
    <div className="mainContent" style={{ width: "100%" }}>
      {loadingStatus && <LoadHandler />}
      {!loadingStatus && <Outlet />}
    </div>
  );
}
