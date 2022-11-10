import { MovieStyle } from "./Styles";



export function Filmes(params) {
      return (
        <MovieStyle>
          <a href="https://www.google.com">
            <img src={movie.image_url} alt={movie.title} />
          </a>
          <span>{movie.title}</span>
        </MovieStyle>
      );
    });

