import { useEffect, useState } from "react";
import EnjoyThing from "../components/EnjoyThing";

function Enjoy() {
  const [enjoy, setEnjoy] = useState({
    activity: "",
    participants: "",
    type: "",
    link: "",
  });
  const getEnjoy = async () => {
    const json = await (
      await fetch("https://www.boredapi.com/api/activity")
    ).json();
    setEnjoy(json);
  };
  useEffect(() => {
    getEnjoy();
  }, []);
  return (
    <div>
      <EnjoyThing
        activity={enjoy.activity}
        participants={enjoy.participants}
        type={enjoy.type}
        link={enjoy.link}
      />
    </div>
  );
}
export default Enjoy;
