import Button from "./Button";

const Welcome = (props) => {
  return (
    <>
      <h1>{props.title} {props.name}</h1>
      <Button></Button>
    </>
  );
};

export default Welcome;
