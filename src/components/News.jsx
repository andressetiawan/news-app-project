import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectNewsData,
  setNewsData,
  selectSearchInput,
} from "../features/userSlice";
import "../styles/News.scss";
import { useDispatch } from "react-redux";
const News = () => {
  const SearchInput = useSelector(selectSearchInput);
  const NewsData = useSelector(selectNewsData);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const url = `http://newsapi.org/v2/everything?q=${SearchInput}&sources=bbc-news&sortBy=popularity&apiKey=d77edf1bd3ce4c15bc031416a270db05`;

      await fetch(url)
        .then((res) => res.json())
        .then((result) => {
          dispatch(setNewsData(result.articles));
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, [SearchInput]);

  return (
    <div className="news__pages">
      {loading ? (
        <h1 className="loading__data">Loading...</h1>
      ) : (
        <>
          {NewsData.length !== 0 ? (
            <>
              {NewsData?.map((news, index) => (
                <div className="news__card" key={index}>
                  <img src={news.urlToImage} className="news__img" />
                  <div> {news.title} </div>
                  <a className="news__content" href={news.url} target="__blank">
                    Read now 🚀
                  </a>
                </div>
              ))}
            </>
          ) : (
            <div className="no__news">
              <h1>Sorry 😞, i have no news about it!</h1>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default News;
