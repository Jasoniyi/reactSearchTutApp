import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID c053b4db02672907acab9ad2fa69c8d9919488999a2ba4c4a47017dda2790909"
  }
});
