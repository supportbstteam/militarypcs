import axios from "axios";

export const logout = async () => {
  await axios.post('https://teamwebdevelopers.com/MilitaryPCS/api/logout', {}, {
    withCredentials: true,
  });
};