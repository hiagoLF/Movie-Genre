import { GenreResponseProps, MovieProps } from "../@types/movies";
import { MovieCard } from "./MovieCard";
import "../styles/content.scss";
import { memo } from "react";

interface ContentProps {
  selectedGenre: GenreResponseProps;
  movies: MovieProps[];
}

export const Content = memo(({ selectedGenre, movies }: ContentProps) => {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.movies === nextProps.movies || prevProps.selectedGenre === nextProps.selectedGenre;
})
