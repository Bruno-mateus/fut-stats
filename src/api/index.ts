import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

interface fetchApi {
  endpoint: string;
  params?: {};
}

const config = ({ endpoint, params }: fetchApi) => ({
  method: "get",
  url: `https://v3.football.api-sports.io/${endpoint}`,
  params,

  headers: {
    "x-rapidapi-key": apiKey,
    "x-rapidapi-host": "v3.football.api-sports.io",
  },
});

export async function getCountries({ endpoint, params }: fetchApi) {
  return await axios(config({ endpoint, params })).then((res) => res.data);
}
