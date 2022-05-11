# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
apartments = [
    {
        street: '546 Sandleford',
        city: 'San Diego',
        state: 'California',
        manager: 'Marc',
        email: 'test@gmail.com',
        price: '$1200',
        bedrooms: 3,
        bathrooms: 4,
        pets: 'dog',
        image: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80'
    }
]

user = User.find 1

any_name_apartments.each do | apartments |
    user.apartments.create apartments
    puts "creating apartment #{apartments}"
end