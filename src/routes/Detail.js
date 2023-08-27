import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <MovieDetail
            title_long={movie.title_long}
            large_cover_image={movie.large_cover_image}
            year={movie.year}
            rating={movie.rating}
            runtime={movie.runtime}
            description_full={movie.description_full}
            url={movie.url}
          />
        </div>
      )}
    </div>
  );
}
export default Detail;
