import React from 'react'
import { Characters } from "./Characters";
import { BrowserRouter as MemoryRouter } from "react-router-dom";
import { MockedProvider } from "@apollo/client/testing";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { store } from "./redux/store/store";
import { getCharacters } from "./services/gql";


const mock = [
  {
    request:{
      query: getCharacters,
        variables: {
          name: "rick",
          page: 1,
        },
    },
    result: 
      {
        "data": {
          "characters": {
            "info": {
              "count": 107
            },
            "results": [
              {
                "name": "Mechanical Rick"
              },
              {
                "name": "Mega Fruit Farmer Rick"
              },
              {
                "name": "Morty Rick"
              },
              {
                "name": "Pickle Rick"
              },
              {
                "name": "Plumber Rick"
              },
              {
                "name": "Quantum Rick"
              },
              {
                "name": "Regional Manager Rick"
              },
              {
                "name": "Reverse Rick Outrage"
              },
              {
                "name": "Rick D. Sanchez III"
              },
              {
                "name": "Rick Guilt Rick"
              },
              {
                "name": "Rick Prime"
              },
              {
                "name": "Rick D-99"
              },
              {
                "name": "Rick D716"
              },
              {
                "name": "Rick D716-B"
              },
              {
                "name": "Rick D716-C"
              },
              {
                "name": "Rick Sanchez"
              },
              {
                "name": "Rick J-22"
              },
              {
                "name": "Rick K-22"
              },
              {
                "name": "Rick Sanchez"
              },
              {
                "name": "Ricktiminus Sancheziminius"
              }
            ]
          }
        }
      }
  }
]
describe("test in <Characters/>", () => {
  test("should render <Characters/>", () => {
    render(
      <MockedProvider mocks={[]}>
        <Provider store={store}>
          <MemoryRouter>
            <Characters />
          </MemoryRouter>
        </Provider>
      </MockedProvider>
    );
  });
  test("should render  loading  <Characters/> ", async () => {
    render(
      <MockedProvider mocks={mock}>
        <Provider store={store}>
          <MemoryRouter>
            <Characters />
          </MemoryRouter>
        </Provider>
      </MockedProvider>
    );
    expect(await screen.findByText("Loading...")).toBeInTheDocument();
  });
  test("should render  <Characters/> with data", async () => {
    render(
      <MockedProvider mocks={mock}>
        <Provider store={store}>
          <MemoryRouter>
            <Characters />
          </MemoryRouter>
        </Provider>
      </MockedProvider>
    );
    expect(await screen.findByText("Morty Rick")).toBeInTheDocument();
  });
});
