import './style.css';

type GenreListProps = {
    genres: string[];
};

export const GenreList: React.FC<GenreListProps> = ({ genres }) => {
    return (
        <ul className="genres-container">
            {genres.map(genre => {
                return <li key={genre}>{genre}</li>;
            })}
        </ul>
    );
};
