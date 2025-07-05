"use client";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

export const getChat = () => {
  return useMutation({
    mutationFn: async ({ id, formData }: { id: String; formData: FormData }) => {
      try {
        const res = await axios.post(
          `https://teamwebdevelopers.com/MilitaryPCS/api/user-chat/${id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
          }
        );

        return res.data;
      } catch (err: any) {
        const errorMessage =
          err.response?.data?.message || "Chat submission failed";
        throw new Error(errorMessage);
      }
    },
  });
};