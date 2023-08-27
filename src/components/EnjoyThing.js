function EnjoyThing({ activity, participants, type, link }) {
  return (
    <div>
      <h1>{activity}</h1>
      <p>The type is {type}</p>
      <p>participants is just {participants}</p>
      <p>
        <a href={link}>how to do ?</a>
      </p>
    </div>
  );
}
export default EnjoyThing;
