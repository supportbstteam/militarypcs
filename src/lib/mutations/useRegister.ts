"use client";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

export const useRegister = () => {
  return useMutation({
    mutationFn: async (formData: FormData) => {
      try {
        const res = await axios.post(
          "https://teamwebdevelopers.com/MilitaryPCS/api/register",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            withCredentials: true, // if your API needs auth/cookies
          }
        );

        return res.data;
      } catch (err: any) {
        const errorMessage =
          err.response?.data?.message || "Registration failed";
        throw new Error(errorMessage);
      }
    },
  });
};
