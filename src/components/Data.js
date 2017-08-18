let arr = [];
let names = ["Barak", "Alon", "Guy", "Hadar", "Vered", "Barak", "Alon", "Guy", "Hadar", "Vered", "Barak", "Omer"];
let years = ["1992", "1993", "1994", "1995", "1996", "1997", "1997", "1998", "1999", "2000", "2001", "2002"];
let avgGrades = [80, 79, 90, 100, 22, 40, 62, 70, 92, 85, 79, 80];

for (let i = 0; i < names.length; i++) {
    arr.push(
        {
            id: i * 10,
            name: names[i],
            date: (new Date(years[i], 5, 15, 8, 50).toDateString()),
            grade: avgGrades[i],
            subject: "Computer science",
            email: "Barak@gmail.com",
            Address: "Avital 58 ",
            city: "Modiin",
            country: "Israel",
            zip: "123456"
        }
    )
}

for (let i = 3; i < names.length; i++) {
    arr.push(
        {
            id: i * 100,
            name: names[i],
            date: (new Date(years[i], 5, 15, 8, 50).toDateString()),
            grade: avgGrades[i],
            subject: "Computer science",
            email: "Dor@gmail.com",
            Address: "Brosh 3",
            city: "Modiin",
            country: "USA",
            zip: "77082"
        }
    )
}

module.exports = arr;