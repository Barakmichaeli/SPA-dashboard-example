let arr = [];
let names = ["Barak", "Alon", "Guy", "Hadar", "Vered", "Barak", "Alon", "Guy", "Hadar", "Vered", "Barak", "Omer"];
let years = ["1992", "1993", "1994", "1995", "1996", "1997", "1997", "1998", "1999", "2000", "2001", "2002"];
let avgGrades = [80, 79, 90, 100, 22, 40, 62, 70, 92, 85, 79, 80];

for (let i = 1; i <= 2; i++) {
    for (let j = 0; j < names.length; j++) {

        arr.push(
            {
                id: Math.floor(Math.random() * (999999999 - 111111110)),
                name: names[j],
                date: (new Date(years[j], 5, 15, 8, 50).toDateString()),
                grade: avgGrades[j],
                subject: "Computer science",
                email: "Barak@gmail.com",
                address: "Avital 58 ",
                city: "Modiin",
                country: "Israel",
                zip: "123456"
            }
        )
    }
}

module.exports = arr;