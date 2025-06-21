import { fetchLocation, fetchLocationSub } from "@/lib/query/Query";
import { number } from "framer-motion";


const StatePage = async ({params}:any ) => {
  const State = String(params.state)
  console.log(State)  

  const allStates = await fetchLocation()
  console.log(allStates)

  const rawState = params.state;
  
  const toTitleCase = (str: string) =>
  str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());

const decodedState = toTitleCase(
  decodeURIComponent(String(rawState)).replace("-", " ")
);


  const singleState = allStates.find((state: any) => state.location === decodedState);

  if (!singleState) {
    // Handle the missing state
    console.error("State not found:", State);
    return <div>State not found</div>; // or redirect/not-found
  }

  const id = singleState.id;
  const subLocation = await fetchLocationSub({ id });





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
