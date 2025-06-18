import axios from "axios"

const categories = async () => {
    try {
        const response = await axios.get("https://teamwebdevelopers.com/MilitaryPCS/api/categories")
        return response.data
    }catch (error){
        console.error("Error fetching articles:", error);
        throw new Error("Failed to fetch articles");
    }
}
export default categories;