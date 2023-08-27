import { Link } from "react-router-dom";

function MovieDetail({
  title_long,
  large_cover_image,
  year,
  rating,
  runtime,
  description_full,
  url,
}) {
  return (
    <div>
      <h2>{title_long}</h2>
      <img src={large_cover_image} />
      {`${year} rating: ${rating} runtime: ${runtime}`}
      <p>{description_full}</p>
      <a href={url}>go to see the movie</a>

      <Link style={{ marginLeft: 20 }} to={`/Enjoy`}>
        go enjoy
      </Link>
    </div>
  );
}
export default MovieDetail;
