import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsList from "./NewsList";
import NewsCategory from "./NewsCategory";

const News = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [category, setCategory] = useState();

  const query = category === 'all'? '' : `&category=${category}`


  useEffect(() => {
    const API_KEY = "97ed06f795b043ea842009c413d8e8bb";
    const url = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${API_KEY}`;

    console.log(url);

    axios
      .get(url)
      .then((response) => {
        setData(response.data.articles);
        setIsLoading(false);
        setError("");
      })
      .catch((error) => {
        setData([]);
        setIsLoading(true);
        setError("주소가 잘못 되었습니다.");
      });
  }, [query]);

  const selectText = (text) => {
    setCategory(text)
  }




  return (
    <div>
      <NewsCategory category={category} selectText={selectText} />
      {isLoading && data.length === 0 && <h1>No News Found</h1>}
      {data && !isLoading && <NewsList data={data} />}
      <p>{error ? error : null}</p>
    </div>
  );
};

export default News;
