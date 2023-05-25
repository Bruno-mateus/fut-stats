import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../../api";

export default function Countries() {
  const { data } = useQuery({
    queryKey: ["countries"],
    queryFn: async () =>
      await getCountries({
        endpoint: "countries",
      }),
  });
  return (
    <main className="grid grid-cols-5">
      <h1>Hello world</h1>
      <div>{JSON.stringify(data)}</div>
    </main>
  );
}
