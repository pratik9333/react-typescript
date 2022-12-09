import React from "react";

type personType = {
  personName: {
    firstname: string;
    lastname: string;
  };
};

export default function Person(props: personType) {
  return (
    <div>
      Hello {props.personName.firstname}
      {props.personName.lastname}
    </div>
  );
}
