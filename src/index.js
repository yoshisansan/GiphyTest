import React from "react";
import { render } from "react-dom";

import axios from "axios";

const search = "cat";
const key = "P8jSOBEO7BzFdCudvpCKNzqqwIJXNsrY";
const limit = 3;

const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;

axios.get(url).then(res => {
  const data = res.data.data;
  console.log(data);
  const imageUrl = data[0].images.downsized.url;
  console.log(imageUrl);

  const img = document.createElement("img");
  img.src = imageUrl;
  document.body.appendChild(img);
});

// render(<App />,document.getElementById('root'));
