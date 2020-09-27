const print = async (data, arg) => {
    const students = await data(arg);
    console.table(students);
    let output = "";
    students.forEach( (student,index) => {
        output += 
`<tr>
    <td>${index}</td>
    <td>${student.name}</td>
    <td>${student.address}</td>
    <td>${student.phone_number}</td>
    <td>${student.course}</td>
</tr>`;
    });
    document.getElementById("table").innerHTML += output;
}
print(getData,address);