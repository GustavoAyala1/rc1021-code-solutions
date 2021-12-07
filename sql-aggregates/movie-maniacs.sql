select "firstName", "lastName",
    sum("amount") as "Paid"
  from "payments"
  join "customers" using ("customerId")
  group by "customerId"
  order by "Paid" DESC;
