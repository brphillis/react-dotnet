import { useAppContext } from "../context/AppContext";

function ComponentOne() {
  const { setSharedData, sharedData } = useAppContext();

  const handleButtonClick = () => {
    setSharedData("YOU CLICKED COMPONENT 1");
  };

  return (
    <>
      <h2>COMPONENT 1</h2>
      <p>{sharedData}</p>
      <button onClick={handleButtonClick}>Update Shared Data</button>
    </>
  );
}

export default ComponentOne;
