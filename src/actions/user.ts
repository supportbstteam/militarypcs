type Params = {
    token: string;
  };
  const user = async (params:Params) => {
      // const id = Number(17)
    const res = await fetch("https://teamwebdevelopers.com/MilitaryPCS/api/user", {
        headers: {
            Authorization: `Bearer ${params.token}` // This is your `90|xxx` token
          }
    });
  
  const text = await res.text(); // <-- try to read as text

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
  export default user