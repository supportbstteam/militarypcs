import { API_BASE_URL } from "@/lib/constants";
import axios from "axios"
type category = {

}
const categoryBySlug = async (slug:string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}category/${slug}`)
        return response.data
    }catch (error){
        console.error("Error fetching articles:", error);
        throw new Error("Failed to fetch articles");
    }
}
export default categoryBySlug;