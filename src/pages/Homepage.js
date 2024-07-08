import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import axios from "axios";
import Picture from "../components/Picture";

const Homepage = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
   let [page, setPage] = useState(1);
   let [currentSearch, setCurrentSearch] = useState("");

  const auth = process.env.REACT_APP_PEXELS_API_KEY;
  const initialURL = "https://api.pexels.com/v1/curated?per_page=15";

  //搜尋圖片
  const search = async (e) => {
    if (e) {
      e.preventDefault(); // 只在事件存在時阻止默認行為
    }
    try {
      setError(null);
      console.log("正在搜尋圖片");
      const url = input
        ? `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`
        : initialURL;
      let result = await axios.get(url, {
        headers: { Authorization: auth },
      });
      console.log(result); // axios拿到從API而來的json
      setData(result.data.photos);
      setCurrentSearch(input);
    } catch (error) {
      console.error("搜尋過程中發生錯誤：", error.response || error);
      setError("搜尋過程中發生錯誤，請稍後再試。");
    }
  };

  //更多圖片
  const morePicture = async () => {
    // console.log("page state目前的值是" + page);
    let newURL;
    setPage(page + 1);
    // console.log("setPage後，page state目前的值是" + page);
    if (input === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${
        page + 1
      }`;
    }
    console.log("正在morePicture內部");
    console.log(newURL);
    let result = await axios.get(newURL, {
      headers: { Authorization: auth },
    });
    setData(data.concat(result.data.photos));
  };

  useEffect(() => {
    console.log("API Key:", process.env.REACT_APP_PEXELS_API_KEY);
    search(); // 初始加載
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search search={search} setInput={setInput} />
      {error && <div className="error">{error}</div>}
      <div className="pictures">
        {data && data.map((d) => <Picture key={d.id} data={d} />)}
      </div>
      <div className="row justify-content-center mb-4">
        <div className="col-6 text-center">
          <button onClick={morePicture} className="btn btn-secondary btn-lg ">
            More picture
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
