import { useLoadScript } from "@react-google-maps/api"
import Map from "../components/Map";

const Home = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"]
  });

  if (!isLoaded) return <div>Loading...</div>
  return <Map />
}

export default Home