
type Params = {
  location_id: string;
  sublocation_id: string;
  directory_id: string;
  Subdirid: string;
};
const professional = async (params:Params) => {
    // const id = Number(17)
  const res = await fetch("https://teamwebdevelopers.com/MilitaryPCS/api/get-professional", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ 
    location_id: params.location_id,
    sublocation_id: params.sublocation_id,
    directory_id: params.directory_id,
    Subdirid: params.Subdirid,

  }), // try Subdirid or sub_directory_id based on what works
});

const text = await res.text(); // <-- try to read as text
console.log("Raw response:", text);

if (!res.ok) {
  throw new Error("API returned non-OK response");
}

try {
  return JSON.parse(text);
} catch (err) {
  console.error("Failed to parse JSON:", err);
  throw new Error("Invalid JSON response");
}
};
export default professional