var Props = (props) => {
  return (
    <div>
      <h1>Props Example:</h1>
      <h1>The faculties are super duper</h1>
      <hr />
      <p>Departments are:</p>
      <ol>
        <li>{props.dept1}</li>
        <li>{props.dept2}</li>
        <li>{props.dept3}</li>
      </ol>
    </div>
  );
};
export default Props;
