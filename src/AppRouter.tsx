import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";

import LoginConatiner from "containers/Home";
import MyRatingsContainer from "containers/Ratings";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<LoginConatiner/>),
  },
  {
    path: "/my-ratings",
    element: (<MyRatingsContainer/>),
  },
]);

export default router;