import { useEffect, useState } from "react";

const Effect = () => {
  const [fev, statusFev] = useState(true);
  var [a, changeA] = useState(10);
  const [feverStatus, updateFeverStatus] = useState();
  useEffect(() => {
    if (fev) {
      console.log("I am taking pills to cure Fever");
      updateFeverStatus("Yes, I have fever 🤒");
    } else {
      console.log("I am fine");
      updateFeverStatus("No, I am fine 😊");
    }
    if (a === 11){
        console.log("He/She changed");
    }
    else{
        console.log("He/She hasn't changed even after warning");
    }
  },[fev,a]);

  const updateStatus = () => {
    statusFev(!fev);
  };
  return (
    <>
      <h1>Use Effect Example</h1>
      <h2>Do you have Fever?</h2>
      <h1>{feverStatus}</h1>
      <button onClick={updateStatus}>Update Status</button>
      <h1>After Lunch I will change you culprit a = {a}</h1>
      <button onClick={() => changeA(a + 1)}>Change Character</button>
    </>
  );
};
export default Effect;
