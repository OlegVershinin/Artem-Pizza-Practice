import { Card, CardContent, H5, Alert, Button } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";

import { Icon } from "@mdi/react";
import { mdiAlert } from "@mdi/js";

import { useAuth } from "./AuthContext";
import PokemonData from "./PokemonData";
import { getRandomInt } from "./getRandomInt";

export const PokemonPrivate = () => {
  const { logOut } = useAuth();
  const pokemonId = getRandomInt(1, 700);
  console.log("############:", pokemonId);
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
  return (
    <Button block onClick={logIn}>
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
