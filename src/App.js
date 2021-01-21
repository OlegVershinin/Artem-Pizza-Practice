import { Route, Link, Switch } from "react-router-dom";
import s from "./App.module.scss";

import {
  PageAbout,
  PageArticles,
  Home,
  PageNotFound,
  PrivatePage,
  Login,
} from "./Nav";

import { Button } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";

import { PrivateRoute } from "./PrivateRoute";

function App() {
  return (
    <>
      <nav className={s.radiogroup}>
        <Link to="/">
          <Button depressed color="var(--primary)">
            Home
          </Button>
        </Link>
        <Link className={s.link} to="/page-about">
          <Button depressed color="var(--primary)">
            About
          </Button>
        </Link>
        <Link className={s.link} to="/page-articles">
          <Button depressed color="var(--primary)">
            Articles
          </Button>
        </Link>
        <Link className={s.link} to="/login">
          <Button depressed color="var(--primary)">
            Login
          </Button>
        </Link>
        <Link className={s.link} to="/private-page">
          <Button depressed disabled color="var(--primary)">
            Private Page
          </Button>
        </Link>
      </nav>

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/private-page" redirectPath="/login">
          <PrivatePage />
        </PrivateRoute>

        <Route path="/page-about">
          <PageAbout />
        </Route>
        <Route path="/page-articles">
          <PageArticles />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}
export default App;
