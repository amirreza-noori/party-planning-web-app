import { Navigate, createBrowserRouter } from "react-router";

import HomePage from "./pages/home";
import AlcoholPage from "./pages/new/alcohol";
import DataPage from "./pages/new/data";
import DecoratorPage from "./pages/new/decorator";
import FoodPage from "./pages/new/food";
import GamePage from "./pages/new/game";
import InvitePage from "./pages/new/invite";
import OccasionPage from "./pages/new/occasion";
import SizePage from "./pages/new/size";
import PartyPage from "./pages/party";

export const routes = {
  home: "/",
  new: {
    base: "/new",
    occasion: "/new/occasion",
    size: "/new/size",
    data: "/new/data",
    invite: "/new/invite",
    food: "/new/food",
    alcohol: "/new/alcohol",
    decorator: "/new/decorator",
    game: "/new/game",
  },
  party: "/party/",
};

export const router = createBrowserRouter([
  {
    path: routes.home,
    Component: HomePage,
  },
  {
    path: routes.new.base,
    element: <Navigate to={routes.new.occasion} />,
  },
  {
    path: routes.new.occasion,
    Component: OccasionPage,
  },
  {
    path: routes.new.size,
    Component: SizePage,
  },
  {
    path: routes.new.data,
    Component: DataPage,
  },
  {
    path: routes.new.invite,
    Component: InvitePage,
  },
  {
    path: routes.new.food,
    Component: FoodPage,
  },
  {
    path: routes.new.alcohol,
    Component: AlcoholPage,
  },
  {
    path: routes.new.decorator,
    Component: DecoratorPage,
  },
  {
    path: routes.new.game,
    Component: GamePage,
  },
  {
    path: routes.party + ":id",
    Component: PartyPage,
  },
]);
