const address = 'https://v-dresevic.github.io/Advanced-JavaScript-Programming/data/students.txt';


const getData = async url => {
    const rawData = await fetch(url);
    const data = await rawData.text();

    let arr = data.split("\n");
    let students = [];
    
        for(let j = 0; j <= arr.length; j++) {
            const obj = {
                name: arr.shift(),
                address: arr.shift(),
                phone_number: arr.shift(),
                course: arr.shift()
            }
            students.push(obj);
        }
        return students
}