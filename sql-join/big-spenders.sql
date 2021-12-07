select "c"."firstName","c"."lastName","p"."amount"
  from "customers" as "c"
  join "payments" as "p" using ("customerId")
  order by amount DESC
  limit 10;
