import { Environment, Network, RecordSource, Store } from 'relay-runtime';

async function fetchGraphQL(text: string, variables: any) {
  const response = await fetch("http://127.0.0.1:5000/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: text, variables }),
  });

  return await response.json();
}

export const environment = new Environment({
  network: Network.create(fetchGraphQL),
  store: new Store(new RecordSource()),
});
