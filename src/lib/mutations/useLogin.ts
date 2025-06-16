"use client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (formData: FormData) => {
      const res = await axios.post(
        "https://teamwebdevelopers.com/MilitaryPCS/api/login",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
                                                                                            

      return res.data;
    },
  });
};
