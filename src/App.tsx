import React, { useEffect } from "react";
import Table from "./components/table/Table";
import { useAppSelector, useAppDispatch } from "./store";
import { fetchAllUsers } from "./redux/users/userSlice";

function App() {
  return (
    <div>
      <header>
        <div className="mx-14 my-14 w-full md:mx-auto md:my-28 md:w-[1000px]">
          <Table />
        </div>
      </header>
    </div>
  );
}

export default App;
