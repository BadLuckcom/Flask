import React from "react";
import { graphql, useLazyLoadQuery } from "react-relay";

const ClientsQuery = graphql`
  query ClientsQuery {
    clients {
      id
      name
      markup
    }
  }
`;

const Clients: React.FC = () => {
  const data = useLazyLoadQuery(ClientsQuery, {});

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Клиенты</h1>
      <ul>
        {data.clients.map((client) => (
          <li key={client.id}>
            {client.name} – Наценка: {client.markup * 100}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;
