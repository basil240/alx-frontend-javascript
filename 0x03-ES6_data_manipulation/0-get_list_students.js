console.log(getListStudents());
const cities = [
    {name: "Guillaume",views:1},
    {name: "James", views:2},
    {name: "Serena", views5},
];

cities.sort((city1, city2) => {
    city1 = city1.name.tolowerCase();
    city2 = city2.name.toloweCase();
    if (city1 <city2) {
        return -1;
    }
    if (city1 > city2) {
        return 1;
    }
    return 0;
})
