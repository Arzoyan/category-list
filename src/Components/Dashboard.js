import React, { useLayoutEffect, useReducer } from "react";
import { GETData, divideData } from "../helpers/utils";
import { reducer } from "../Components/store/store";
import { Spin } from "antd";

import Category from "../Components/Category/index";

const Dashboard = () => {
  const [store, dispatch] = useReducer(reducer, []);

  useLayoutEffect(() => {
    (async () => {
      const result = await GETData("albums");

      dispatch({
        action: "add",
        payload: divideData(result),
      });
    })();
  }, []);

  return (
    <div>
      {store.length ? (
        <Category list={store} dispatch={dispatch} />
      ) : (
        <Spin tip="Loading..." />
      )}
    </div>
  );
};

export default Dashboard;
