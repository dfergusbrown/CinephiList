import { useState, useEffect } from "react";


const useApiRequest = title => {
  const [apiData, setData] = useState([]);
  const baseURL = 'http://www.omdbapi.com/?apikey='
  const apiKey = '5c02e86e'

  useEffect(() => {
      fetch(baseURL + apiKey +'&t='+ title)
      .then(response => response.json())
      .then(data => {
        setData(data)
        // console.log(data)
      })
      .catch(error => console.log(error))
  }, []);

  return { apiData };
};

export default useApiRequest;