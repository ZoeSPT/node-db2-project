exports.seed = async function(knex){
  await knex("new_cars").insert([
    {id:2, vin:"test2", make:"test2", model:"test2", mileage:2, transmission_type:"test2", transmission_status:"test2"},
    {id:3, vin:"test3", make:"test3", model:"test3", mileage:3, transmission_type:"test3", transmission_status:"test3"},
    {id:4, vin:"test4", make:"test4", model:"test4", mileage:4, transmission_type:"test4", transmission_status:"test4"},
    {id:5, vin:"test5", make:"test5", model:"test5", mileage:5, transmission_type:"test5", transmission_status:"test5"},
    {id:6, vin:"test6", make:"test6", model:"test6", mileage:6, transmission_type:"test6", transmission_status:"test6"}
  ])
}