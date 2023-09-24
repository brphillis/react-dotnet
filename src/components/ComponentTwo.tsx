import { useAppContext } from "../context/AppContext";

type Props = {
  one: string;
  two: string;
};

function ComponentTwo({ one, two }: Props) {
  const { setSharedData, sharedData } = useAppContext();

  console.log("ONE IS", one);
  console.log("TWO IS", two);

  const handleButtonClick = () => {
    setSharedData("YOU CLICKED COMPONENT 2");
  };

  const container = document.querySelector("componenttwo");

  if (container) {
    const data = container.getAttribute("data");

    if (data) {
      console.log("The data is", data);
    }
  }

  return (
    <>
      <h2>COMPONENT 2</h2>
      <p>{sharedData}</p>
      <button onClick={handleButtonClick}>Update Shared Data</button>
    </>
  );
}

export default ComponentTwo;
