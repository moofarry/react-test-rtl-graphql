import gql from "graphql-tag";


export const getCharacters = gql`
query characters($name:String, $page:Int){
  characters(page: $page, filter: { name: $name }){
    info {
      count
    }
    results {
      name
    }
  }
}
`;
