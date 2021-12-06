select "line1",
        "name",
        "district"
  from "cities"
  join "addresses" using ("cityId");
