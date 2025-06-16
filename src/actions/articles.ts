import axios from "axios";

const articles = async () => {
  try {
    const response = await axios.get("https://teamwebdevelopers.com/MilitaryPCS/api/articles");
    return response.data; // Axios auto-parses JSON
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw new Error("Failed to fetch articles");
  }
};

export default articles;
