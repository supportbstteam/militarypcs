
import DebugExposeStore from "@/components/DebugExposeStore";
import FilterSetter from "@/components/wrappers/FilterSetter";
import QueryHydratorWrapper from "@/components/wrappers/QueryHydratorWrapper";
import { fetchLocation, fetchLocationSub } from "@/lib/query/Query";
import { cookies } from "next/headers";
import Link from "next/link";
import slugify from "slugify";



const StatePage = async ({ params }: any) => {



  const State = String(params.state)
  console.log(State)  



  const allStates = await fetchLocation()
  // console.log(allStates)

  const rawState = params.state;

  const toTitleCase = (str: string) =>
    str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());

  const decodedState = toTitleCase(
    decodeURIComponent(String(rawState)).replace("-", " ")
  );

  const singleState = allStates.find((state: any) => state.location === decodedState);

  console.log(singleState.id, "State")


  if (!singleState) {
    // Handle the missing state
    console.error("State not found:", State);
    return <div>State not found</div>; // or redirect/not-found
  }

  const id = singleState.id;
  const subLocation = await fetchLocationSub({ id });

  return (
    <section className="max-w-[1420px] mx-auto px-4 text-center">

      <DebugExposeStore />
        {/* <QueryHydratorWrapper keys={['state']}/> */}
        <FilterSetter stateId={singleState.id} />
      <div style={{ padding: "2rem" }}>

        <h2 className="h2">Sub Location of {decodedState}</h2>
        <ul>
          {
            subLocation.map((city: any) => (
              <Link key={city.id} href={`/city/${slugify(city.city)}?city=${encodeURIComponent(city.city)}`}>
                <li key={city.id} className="">
                  - {city.city}
                </li>
              </Link>
            ))
          }
        </ul>
      </div>
    </section>
  );
};

export default StatePage;
