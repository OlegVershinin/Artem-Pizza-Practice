import React, { useState, useEffect } from "react";
import { getResponse } from "./Api";
import { Card, ProgressCircular } from "ui-neumorphism";

const PokemonData = (props) => {
  const [pokemon, setPokemon] = useState(
    <ProgressCircular indeterminate size={64} width={8} color="var(--error)" />
  );
  const [pokemonName, setPokemonName] = useState("");
  const query = `https://pokeapi.co/api/v2/pokemon/${props.id}`;

  useEffect(() => {
    const fetch = async () => {
      await getResponse(query).then((json) =>
        setPokemon(json.sprites.front_default)
      );
      await getResponse(query).then((json) =>
        setPokemonName(json.species.name)
      );
    };
    fetch();
  }, [query]);

  return (
    <div>
      <Card
        rounded
        style={{
          marginTop: "5vh",
          paddingTop: "2vh",
          textAlign: "center",
          justifyСontent: "center",
        }}
      >
        <h2 style={{ color: "#007a76" }}>pakemon person </h2>
        <h1 style={{ color: "#ff00f2" }}>Name: {pokemonName}</h1>

        <img src={pokemon} alt="Loading..." style={{ width: "50%" }} />
      </Card>
    </div>
  );
};

export default PokemonData;
