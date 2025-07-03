import about from "@/actions/about"
import articles from "@/actions/articles"
import categories from "@/actions/categories"
import categoryBySlug from "@/actions/categoryBySlug"
import directory from "@/actions/directory"
import directorySub from "@/actions/directorySub"
import event from "@/actions/event"
import home from "@/actions/home"
import location from "@/actions/location"
import professional from "@/actions/professional"
import refundPolicy from "@/actions/information"
import reviews from "@/actions/reviews"
import sponsors from "@/actions/sponsors"
// import { useQuery } from "@tanstack/react-query/build/modern"
// import { useQuery } from '@tanstack/react-query';
import { useQuery } from "@tanstack/react-query"
import information from "@/actions/information"
import user from "@/actions/user"


const noCache = {
  refetchOnMount: true,
  refetchOnWindowFocus: true,
  refetchOnReconnect: true,
  staleTime: 0, // ← important: makes cache always stale
  // cacheTime: 0, // ← optional: destroys cache immediately
}

// ------------------ location -------------------              

export const fetchLocation = async () => {
  const response = await location()
  return response
}


export const useLocation = () => {
  return useQuery({
    queryKey: ['location'],
    queryFn: location,
    ...noCache

  })
}

// ------------------------ sub location -------------------

export const fetchLocationSub = async ({ id }: { id: number }) => {
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

export const useLocationSub = (id: number | null) => {
  return useQuery({
    queryKey: ['locationSub', id],
    queryFn: () => fetchLocationSub({ id: id as number }),
    enabled: !!id, // avoid running the query if id is 0 or undefined
    ...noCache

  });
};

// ------------------ directory -------------------

export const fetchDirectory = async () => {
  const response = await directory()
  return response
}

export const useDirectory = () => {
  return useQuery({
    queryKey: ['directory'],
    queryFn: directory,
    ...noCache

  })
}

// ------------------ directory sub -------------------

export const fetchDirectorySub = async ({ id }: { id: number }) => {
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

export const useDirectorySub = (id: number | null) => {
  return useQuery({
    queryKey: ['directorySub', id],
    queryFn: () => fetchDirectorySub({ id: id as number }),
    enabled: !!id, // avoid running the query if id is 0 or undefined
    ...noCache

  });
};



// --------------------------- reviews -------------------

export const fetchReviews = async () => {
  const response = await reviews()
  return response
}

export const useReviews = () => {
  return useQuery({
    queryKey: ['reviews'],
    queryFn: fetchReviews,
    ...noCache

  })
}

// --------------------------- articles -------------------

export const fetchArticles = async () => {
  const response = await articles()
  return response
}

export const useArticles = () => {
  return useQuery({
    queryKey: ['articles'],
    queryFn: fetchArticles,
    ...noCache

  })
}

// --------------------------- sponsors -------------------

export const fetchSponsors = async () => {
  const response = await sponsors()
  return response
}

export const useSponsors = () => {
  return useQuery({
    queryKey: ['sponsors'],
    queryFn: fetchSponsors,
    ...noCache

  })
}
// --------------------------- categories -------------------

export const fetchCategories = async () => {
  const response = await categories()
  return response
}

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    ...noCache

  })
}

// --------------------------- CategoryBySlug -------------------

export const fetchCategoryBySlug = async (slug: string) => {
  const response = await categoryBySlug(slug)
  return response
}

export const useCategoryBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['category'],
    queryFn: () => fetchCategoryBySlug(slug),
    ...noCache

  })
}

// --------------------------- event ------------------------

export const fetchEvent = async () => {
  const response = await event()
  return response
}

export const useEvent = () => {
  return useQuery({
    queryKey: ['event'],
    queryFn: fetchEvent,
    ...noCache
  })
}

// --------------------------- about -------------------

export const fetchAbout = async () => {
  const response = await about()
  return response
}

export const useAbout = () => {
  return useQuery({
    queryKey: ['about'],
    queryFn: fetchAbout,
    ...noCache
  })
}

// --------------------------- home -------------------

export const fetchHome = async () => {
  const response = await home()
  return response
}

export const useHome = () => {
  return useQuery({
    queryKey: ['home'],
    queryFn: fetchHome,
    // ...noCache
  })
}

// --------------------------- information -------------------

export const fetchInformation = async () => {
  const response = await information()
  return response
}

export const useInformation = () => {
  return useQuery({
    queryKey: ['information'],
    queryFn: fetchInformation,
    ...noCache
  })
}

// ---------------------professional----------------------
export const fetchProfessionalById = async (
  location_id: string,
  sublocation_id: string,
  directory_id: string,
  Subdirid: string
) => {
  const response = await professional({
    location_id,
    sublocation_id,
    directory_id,
    Subdirid
  });
  return response;
};

export const useProfessional = (
  location_id: string,
  sublocation_id: string,
  directory_id: string,
  Subdirid: string
) => {
  return useQuery({
    queryKey: ['professional', location_id, sublocation_id, directory_id, Subdirid],
    queryFn: () => fetchProfessionalById(location_id, sublocation_id, directory_id, Subdirid),
    ...noCache,
  });
}; 

export const fetchUserBytoken = async (
  token: string,
) => {
  const response = await user({
   token
  });
  return response;
};

export const useUser = (
  token: string,
) => {
  return useQuery({
    queryKey: ['token', token],
    queryFn: () => fetchUserBytoken(token),
    ...noCache,
  });
};   