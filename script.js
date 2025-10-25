let data =  [
    {"position": 1, "driver": "Oscar Piastri", "points": 346},
    {"position": 2, "driver": "Lando Norris", "points": 332},
    {"position": 3, "driver": "Max Verstappen(GOAT)", "points": 306},
    {"position": 4, "driver": "George Russell", "points": 237},
    {"position": 5, "driver": "Charles Leclerc", "points": 173},
    {"position": 6, "driver": "Lewis Hamilton", "points": 127},
    {"position": 7, "driver": "Kimi Antonelli", "points": 88},
    {"position": 8, "driver": "Alexander Albon", "points": 70},
    {"position": 9, "driver": "Isack Hadjar", "points": 39},
    {"position":10, "driver": "Nico Hülkenberg", "points": 37},
    {"position":11, "driver": "Fernando Alonso", "points": 34},
    {"position":12, "driver": "Carlos Sainz", "points": 32},
    {"position":13, "driver": "Lance Stroll", "points": 32},
    {"position":14, "driver": "Liam Lawson", "points": 30},
    {"position":15, "driver": "Esteban Ocon", "points": 28},
    {"position":16, "driver": "Pierre Gasly", "points": 20},
    {"position":17, "driver": "Yuki Tsunoda", "points": 20},
    {"position":18, "driver": "Gabriel Bortoleto", "points": 18},
    {"position":19, "driver": "Oliver Bearman", "points": 18},
    {"position":20, "driver": "Franco Colapinto", "points": 0}
]
$(document).ready(function() {


data.forEach(e => {
    $('#table_body').append(`<tr>
        <td>${e.position}</td>
        <td>${e.driver}</td>
        <td>${e.points}</td>
    </tr>`);
})
});
