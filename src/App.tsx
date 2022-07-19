import React, {useEffect, useState} from 'react';
import './App.css';
import axios, {AxiosResponse} from "axios";
import {getLocations} from "./utils/getLocations";
import {ILocationDataContext, IlocationsData} from "./lib/types";
import LocationSearch from "./components/LocationSearch";
import {Box} from "@mui/material";
import {purple} from "@mui/material/colors";

export const LocationDataContext = React.createContext<ILocationDataContext>({} as ILocationDataContext);

function App() {
  const [data, setData] = useState<IlocationsData>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const value: ILocationDataContext = {data, searchValue, setSearchValue};

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await axios("https://randomuser.me/api/?results=20")
      .then((response: AxiosResponse) => {
        return setData(getLocations(response.data.results.map(({location}: {location: IlocationsData}) => location)));
        //return setData(response.data.results)
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <LocationDataContext.Provider value={value}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 1,
          m: 1,
          bgColor: purple[500],
          width: "70%",
          margin: "auto",
          height: "400px"
        }}
      >
        <LocationSearch />
      </Box>

    </LocationDataContext.Provider>
  );
}

export default App;
