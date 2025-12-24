import { useState } from "react";

function StateEg() {
  var [a, changeA] = useState(10);
  return (
    <section>
      <hr />
      <h1>State Example:</h1>
      <h1>After Lunch I will change you culprit a = {a}</h1>
      <button onClick={() => changeA(a + 1)}>Change Character</button>
    </section>
  );
}
export default StateEg;
