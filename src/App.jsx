import Header from "./components/header";
import Sidebar from "./components/sidebar";
import DataContextProvider from "./store/dataContext";
import { Outlet } from "react-router-dom";
export default function app() {
  return (
    <DataContextProvider>
      <div className="app" style={{ display: "flex", flexDirection: "column" }}>
        <div className="row1" style={{ height: "fit-content" }}>
          <Header />
        </div>
        <div
          className="row2"
          style={{ height: "100%", display: "flex ", width: "100%" }}
        >
          <Sidebar />
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </DataContextProvider>
  );
}
