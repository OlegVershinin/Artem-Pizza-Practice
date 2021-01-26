import { Alert, Button } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";

import { Icon } from "@mdi/react";
import { mdiAlert } from "@mdi/js";

import { useAuth } from "./AuthContext";
import PokemonData from "./PokemonData";
import { getRandomInt } from "./getRandomInt";

import { useHistory } from "react-router-dom";

export const PokemonPrivate = () => {
  const { logOut } = useAuth();
  const pokemonId = getRandomInt(1, 700);
  return (
    <>
      <Button block onClick={logOut}>
        Log out
      </Button>
      <PokemonData id={pokemonId} />
    </>
  );
};

export const Login = () => {
  const { logIn } = useAuth();
  const history = useHistory();

  const handleLogin = () => {
    logIn();
    history.push("/private-pokemon");
  };

  return (
    <Button block onClick={handleLogin}>
      Log in
    </Button>
  );
};

export const PageNotFound = () => (
  <Alert
    rounded
    closable
    type="error"
    border="left"
    visible="true"
    icon={<Icon path={mdiAlert} size={1} />}
  >
    404 Страницы не существует!!!
  </Alert>
);
