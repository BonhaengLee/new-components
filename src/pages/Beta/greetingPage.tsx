import React from "react";

function Greeting({ name }: { name: string }): JSX.Element {
  return <h1>Hello {name}</h1>;
}

const GreetingPage = (): JSX.Element => {
  return (
    <div>
      <Greeting name="Divyesh!"></Greeting>
      <Greeting name="Sarah!"></Greeting>
      <Greeting name="Taylor!"></Greeting>
    </div>
  );
};

export default GreetingPage;
