import { GenreResponseProps } from "../@types/movies";
import { Button } from "./Button";
import "../styles/sidebar.scss";
import { memo } from "react";

interface SideBarProps {
  genres: GenreResponseProps[];
  handleGenreClick: (genreId: number) => void;
  selectedGenreId: number;
}

export const SideBar = memo<SideBarProps>(({
  genres,
  handleGenreClick,
  selectedGenreId,
}) => {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleGenreClick(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}, (prevProps, nextProps) => {
  return prevProps.selectedGenreId === nextProps.selectedGenreId;
});
