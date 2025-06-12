import directory from "@/actions/directory"
import directorySub from "@/actions/directorySub"
import location from "@/actions/location"
import { useQuery } from "@tanstack/react-query"



// ------------------ location -------------------              

const fetchLocation = async () => {
    const response = await location()
    return response
}


const useLocation = () => {
    return useQuery({
        queryKey: ['location'],
        queryFn: location
    })
}

// ------------------------ sub location -------------------

const fetchLocationSub = async ({ id }: { id: number }) => {
  const response = await fetch('https://teamwebdevelopers.com/MilitaryPCS/api/get-sublocations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ locID: id }),
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  return response.json()
};

const useLocationSub = (id: number | null) => {
  return useQuery({
    queryKey: ['locationSub', id],
    queryFn: () => fetchLocationSub({ id: id as number }),
    enabled: !!id, // avoid running the query if id is 0 or undefined
  });
};

// ------------------ directory -------------------

const fetchDirectory = async () => {
    const response = await directory()
    return response
}

const useDirectory = () => {
    return useQuery({
        queryKey: ['directory'],
        queryFn: directory
    })
}

// ------------------ directory sub -------------------

const fetchDirectorySub = async ({ id }: { id: number }) => {
  const response = await fetch('https://teamwebdevelopers.com/MilitaryPCS/api/get-subDirectory', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ directory_id: id }),
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  return response.json()
};

const useDirectorySub = (id: number | null) => {
  return useQuery({
    queryKey: ['directorySub', id],
    queryFn: () => fetchDirectorySub({ id: id as number }),
    enabled: !!id, // avoid running the query if id is 0 or undefined
  });
};



export { useLocation, fetchLocation, useDirectory, fetchDirectory ,fetchDirectorySub, useDirectorySub, useLocationSub, fetchLocationSub };