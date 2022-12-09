import React from "react";

import { Greet } from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/personList";
import { Status } from "./components/Status";
import { Heading } from "./components/Headings";
import "./styles.css";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Container } from "./components/Container";

export default function App() {
  const personName = {
    firstname: "pratik",
    lastname: "aswani"
  };

  const nameList = [
    {
      firstname: "pratik",
      lastname: "aswani"
    },
    {
      firstname: "pratik",
      lastname: "aswani"
    },
    {
      firstname: "pratik",
      lastname: "aswani"
    }
  ];

  return (
    <div className="App">
      <Person personName={personName} />
      <PersonList names={nameList} />
      <Greet isLoggedIn={true} messageCount={12} name="Vishwas" />
      <Heading>Placeholder text</Heading>
      <Status status="Error" />
      <Oscar>
        <Heading>Oscar goes to de caprio</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log(event, id);
        }}
      />
      <Greet isLoggedIn={false} messageCount={10} name="ABC" />

      <Container styles={{ border: "1px solid whiye" }} />
    </div>
  );
}
