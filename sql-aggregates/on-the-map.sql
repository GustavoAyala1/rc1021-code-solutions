select "countries"."name" as "country",
    count("cities".*) as "cities"
  from "cities"
  join "countries" using ("countryId")
  group by "countries"."name";
