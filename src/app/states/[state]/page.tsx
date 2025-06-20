import { fetchLocation, fetchLocationSub } from "@/lib/query/Query";
import { number } from "framer-motion";


const StatePage = async ({params}:any ) => {
  const State = String(params.state)
  console.log(State)
  const allStates = await fetchLocation()
  console.log(allStates)

  const singleState = allStates.find((state: any) => state.location === State);

  if (!singleState) {
    // Handle the missing state
    console.error("State not found:", State);
    return <div>State not found</div>; // or redirect/not-found
  }

  const id = singleState.id;
  const subLocation = await fetchLocationSub({ id });




  const rawState = params.state;
  const decodedState = decodeURIComponent(String(rawState)).replace("-", " ");

  return (
    <div style={{ padding: "2rem" }}>

      <h2 className="h2">Sub Location of {decodedState}</h2>
      <ul>
        {
          subLocation.map((city: any) => (
            <li key={city.id} className="">
              - {city.city}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default StatePage;
