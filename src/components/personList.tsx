import React from "react";

type PersonListProps = {
  names: {
    firstname: string;
    lastname: string;
  }[];
};

export default function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.names.map((person) => (
        <h2 key={person.firstname}>
          {person.firstname} {person.lastname}
        </h2>
      ))}
    </div>
  );
}
