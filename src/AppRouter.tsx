import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";

import LoginConatiner from "containers/Home";
import MyRatingsContainer from "containers/Ratings";
import FavouritesContainer from "containers/Favourites";
import DetailsContainer from "containers/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<LoginConatiner/>),
  },
  {
    path: "/my-ratings",
    element: (<MyRatingsContainer/>),
  },
  {
    path: "/my-favourites",
    element: (<FavouritesContainer/>),
  },
  {
    path: "/details",
    element: (<DetailsContainer/>),
  },
]);

export default router;