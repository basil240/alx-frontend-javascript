import getListStudents from "./0-get_list_students.js";
import updateStudentGradeByCity from "./4-update_grade_by_city.js";

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));
console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));
<body>
    [
        {
           id: 1,
           firstName : 'Guillaume',
           location  : 'San Francisco',
           grade     : 86
},
{id: 1, firstName:'Guillaume', location: 'San Francisco', grade: 86}
    ]
    [
        {
            id: 2,
            firstName : 'James',
            location  : 'Columbia',
            grade     : 172
        },
        {id: 2, firstName: 'James', location: 'Columbia', grade: 172}
    ]
    [
        {
            id: 5,
            firstName : 'Serena',
            location  : 'San Francisco',
            grade     :  430
        },
        {id: 5, firstName: 'Serena',location: 'San Francisco',grade: 430}
    ]

    ]
</body>