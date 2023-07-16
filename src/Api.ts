import axios from "axios";

export const getShowList = async (query: string) => {
  return await axios
    .get("https://api.tvmaze.com/search/shows?q=" + query)
    .then((response) => response.data.map((s: any) => s.show));
};
