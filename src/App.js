import { Route, Link, Switch, useParams, useLocation } from "react-router-dom";
import { Icon } from "@mdi/react";
import PokemonData from "./PokemonData";
import {
  mdiEmoticonPoop,
  mdiEmoticonPoopOutline,
  mdiEmoticonAngryOutline,
  mdiEmoticonLolOutline,
  mdiEmoticonTongue,
  mdiTooltipAccount,
} from "@mdi/js";

import s from "./App.module.scss";

import { PageNotFound, PokemonPrivate, Login } from "./Nav";

import { IconButton, Chip, Fab } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";

import { PrivateRoute } from "./PrivateRoute";

import { getRandomInt } from "./getRandomInt";

const Pokemon = () => {
  const { pokemonId } = useParams();
  const params = useQueryParams();

  if (!isNaN(pokemonId)) {
    return (
      <div>
        <PokemonData id={pokemonId} />
        {params.get("showSweetness") && <p>secret pokemon</p>}
      </div>
    );
  }
  return <PageNotFound />;
};

const Code = () => {
  const { code } = useParams();
  return (
    <div>
      <h1 style={{ paddingTop: "15vh", color: "#008080" }}>{code}</h1>
    </div>
  );
};

function useQueryParams() {
  const location = useLocation();
  return new URLSearchParams(location.search);
}

function App() {
  return (
    <>
      <h1>
        <Chip
          type="info"
          size="large"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10vh",
          }}
        >
          Different Pokemon
        </Chip>
      </h1>

      <nav className={s.radiogroup}>
        <Link to={`/${getRandomInt(1, 700)}/pokemon1`}>
          <IconButton rounded text={false} color="var(--error)" size="large">
            <Icon path={mdiEmoticonAngryOutline} size={2} />
          </IconButton>
        </Link>
        <Link className={s.link} to={`/${getRandomInt(1, 700)}/pokemon2`}>
          <IconButton rounded text={false} color="var(--warning)" size="large">
            <Icon path={mdiEmoticonPoopOutline} size={2} />
          </IconButton>
        </Link>
        <Link className={s.link} to={`/${getRandomInt(1, 700)}/pokemon3`}>
          <IconButton rounded text={false} color="var(--primary)" size="large">
            <Icon path={mdiEmoticonPoop} size={2} />
          </IconButton>
        </Link>
        <Link
          className={s.link}
          to={`/${getRandomInt(1, 700)}/pokemon4?showSweetness=true`}
        >
          <IconButton rounded text={false} color="var(--success)" size="large">
            <Icon path={mdiEmoticonLolOutline} size={2} />
          </IconButton>
        </Link>
        <Link className={s.link} to="/private-pokemon">
          <IconButton rounded text={false} color="var(--primary)" size="large">
            <Icon path={mdiEmoticonTongue} size={2} />
          </IconButton>
        </Link>

        <Link className={s.link} to="/login">
          <IconButton size="large">
            <Icon path={mdiTooltipAccount} size={2} />
          </IconButton>
        </Link>

        <Link to="/gift-code/NEW-PAGE=> это параметр переданный в URL">
          <Fab absolute top right>
            <span style={{ fontSize: "30px", margin: "2px 0px 0px 2px" }}>
              &#43;
            </span>
          </Fab>
        </Link>
      </nav>

      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <PrivateRoute path="/private-pokemon" redirectPath="/login">
          <PokemonPrivate />
        </PrivateRoute>

        <Route path="/gift-code/:code">
          <Code />
        </Route>

        <Route path="/:pokemonId">
          <Pokemon />
        </Route>

        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}
export default App;
