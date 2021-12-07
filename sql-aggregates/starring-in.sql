select "genres"."name" as "Genres",
  count("genres".*) as "count"
from "genres"
join "filmGenre" using ("genreId")
join "castMembers" using("filmId")
join "films" using ("filmId")
join "actors" using ("actorId")
where "actors"."firstName"='Lisa' and "actors"."lastName"='Monroe'
group by "genres"."name";
