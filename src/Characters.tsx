import React from 'react'
import { useQuery } from "@apollo/client";
import { getCharacters } from "./services/gql";

export const Characters = () => {
  const { data: getCharacter, loading: isLoading , error: isError} = useQuery(getCharacters, {
    variables: {
      name: "rick",
      page: 1,
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{isError.message}</p>;

  console.log(" characters ->",getCharacter);
  return (
    <>
      <ul>
        {getCharacter?.characters?.results.map(({name}:any,idx:any) => (
          <li key={idx}>{name}</li>
        ))}
      </ul>
    </>
  );
};
