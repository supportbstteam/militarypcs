const information = async () => {
  try {
    const res = await fetch("https://teamwebdevelopers.com/MilitaryPCS/api/information", {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch event");

    return await res.json();
  } catch (error) {
    console.error("fetchEvent error:", error);
    throw error; // re-throw to be caught upstream
  }
};

export default information