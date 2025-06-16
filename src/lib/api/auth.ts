export const registerUser = async (formData: FormData) => {
  const res = await fetch("https://teamwebdevelopers.com/MilitaryPCS/api/register", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Registration failed");
  }

  return await res.json();
};