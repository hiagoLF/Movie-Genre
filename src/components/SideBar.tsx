import { GenreResponseProps } from "../@types/movies";
import { Button } from "./Button";
import "../styles/sidebar.scss";

interface SideBarProps {
  genres: GenreResponseProps[];
  handleGenreClick: (genreId: number) => void;
  selectedGenreId: number;
}

export function SideBar({
  genres,
  handleGenreClick,
  selectedGenreId,
}: SideBarProps) {
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
}