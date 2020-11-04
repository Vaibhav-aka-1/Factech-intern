const students = [
    {
        roll_no:101,
            details:{
            name:"ajay",
            marks:42,
            age:20
        }
    },
        {
        roll_no:102,
            details:{
            name:"amit",
            marks:45,
            age:21
        }
    },
        {
        roll_no:111,
            details:{
            name:"ramesh",
            marks:31,
            age:21
        } 
    },
    {
        roll_no:103,
            details:{
            name:"vaibhav",
            marks:99,
            age:22
        } 
    },
    {
        roll_no:104,
            details:{
            name:"vedansh",
            marks:13,
            age:22
        } 
    },
    {
        roll_no:107,
            details:{
            name:"vipul",
            marks:56,
            age:22
        } 
    } 
]



const mrk = parseInt(prompt('Enter the marks of stuent :'));
console.log(typeof(mrk));
if(mrk == null) {
    alert('Plese define students marks');
}
else if(mrk <= 0 || mrk > 100){
    alert('Plese enter valid marks b/w 1 to 100');
}
else if(mrk.length >2){
    alert('Only interger number is accepted !!!');
}
else{
    const ans = [];
    let text = "";
    const getStudentsWithMarksMoreThan = (mrk) => {
        const results = students.map(el => {
            const mrks = el.details.marks;
            
            if(mrks >= mrk){
                ans.push(el.details);
            }
        });    
    };
    getStudentsWithMarksMoreThan(mrk);


if(ans.length == 0){
    document.getElementById("root").innerHTML = `No student having marks greater than or equal to ${mrk}`;
}
ans.forEach((el) => {

    text = `Name: ${el.name} , Marks: ${el.marks} , age: ${el.marks} <br><br>`;
    var paragraph = document.getElementById("root");
    paragraph.innerHTML += "\n";
    paragraph.innerHTML += text;
    //document.getElementById("root").innerHTML = text;
});

}


