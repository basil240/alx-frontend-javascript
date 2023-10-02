console.log(getStudentsByLocation(students, 'san Francisco'))
<body>
    cons players = [
        {name:"Guillaume", id:1, team: ["San Francisco"]
        },
        {name: "Serena", id:5, team: ["San Francisco"]
        },
    ];
    console.table(
        //players.filter(player => player.id <5)
        players.filter(p => p.teams.includes("City"))
    );
</body>