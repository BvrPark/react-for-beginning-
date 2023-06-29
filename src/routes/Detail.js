import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function Detail() {
  const {id} = useParams();

  const getMovie = async () => {
    try {
      const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log("Error fetching movie:", error);
    }
  };

  

  useEffect(() => {
    getMovie();
  }, []);

  return <h1>Detail</h1>;
}

export default Detail;
