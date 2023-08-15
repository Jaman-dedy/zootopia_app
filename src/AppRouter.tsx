import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";

import LoginConatiner from "containers/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<LoginConatiner/>),
  },
]);

export default router;