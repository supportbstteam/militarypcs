import axios from "axios"
const home = async () => {
    try {
        const response = await axios.get("https://teamwebdevelopers.com/MilitaryPCS/api/home")
        return response.data
    }catch (error){
        console.error("Error fetching articles:", error);
        throw new Error("Failed to fetch articles");
    }

};

export default home