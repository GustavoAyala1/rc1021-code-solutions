select "line1",
        "cities"."name",
        "district"
  from "cities"
  join "addresses" using ("cityId");
