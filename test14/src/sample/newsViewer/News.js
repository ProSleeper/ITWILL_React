import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsList from "./NewsList";

const News = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    const API_KEY = "97ed06f795b043ea842009c413d8e8bb";
    const url = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`;

    console.log(url);

    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
        setError("");
      })
      .catch((error) => {
        setData([]);
        setIsLoading(true);
        setError("주소가 잘못 되었습니다.");
      });
  }, []);

  return <div>
    {/* {
      data && <textarea rows={70} cols={200} value={JSON.stringify(data, null, 2)}/>  
    } */}
    {
      isLoading && data.length === 0 && <h1>No News Found</h1>
    }
    {
      data && !isLoading && <NewsList data={data} />
    }
  </div>;
};

export default News;
