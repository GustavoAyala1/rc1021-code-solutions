select "releaseYear","name","title"
from "filmGenre"
join "genres" using ("genreId")
join "films" using ("filmId")
where "title"='Boogie Amelie';
