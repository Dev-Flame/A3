// I've included both the universities full names and their nicknames
// use the nicknames for this assignment.  I've included the full names
// so those who aren't familiar with Bay Area universities will know
// what the names of the universities actually are.

var univArray = new Array(
		{name: "Stanford University", nickname: "Stanford", ownership: "private", SATh: 1570, SATl: 1380, tuition: 44757},
		{name: "University of California, Berkeley", nickname: "UC Berkeley", ownership: "public", SATh: 1500, SATl: 1250, tuition: 13844},
		{name: "University of California, Santa Cruz", nickname: "UC Santa Cruz", ownership: "public", SATh: 1280, SATl: 1000, tuition: 13398},
		{name: "San Francisco State University", nickname: "SFSU", ownership: "public", SATh: 1110, SATl: 880, tuition: 6468},
		{name: "San Jose State University", nickname: "SJSU", ownership: "public", SATh: 1160, SATl: 880, tuition: 9496},
		{name: "Sonoma State University", nickname: "Sonoma State", ownership: "public", SATh: 1090, SATl: 880, tuition: 7276},
		{name: "California State University, East Bay", nickname: "CalState East Bay", ownership: "public", SATh: 1010, SATl: 800, tuition: 6550},
		{name: "University of San Francisco", nickname: "USF", ownership: "private", SATh: 1270, SATl: 1070, tuition: 41450},
		{name: "Santa Clara University", nickname: "SCU", ownership: "private", SATh: 1380, SATl: 1190, tuition: 43812},
		{name: "Mills College", nickname: "Mills College", ownership: "private", SATh: 1250, SATl: 1040, tuition: 42918}
		);

function updateTable() {
    var ownership = document.querySelector('input[name="ownership"]:checked').value;
    var maxTuition = document.getElementById("maxtuition").value;
    var maxSAT = document.getElementById("maxsat").value;
    var minSAT = document.getElementById("minsat").value;

    var filteredUnivs = univArray.filter((univ) => 
        (ownership === "dontcare" || univ.ownership === ownership) &&
        (!maxTuition || univ.tuition <= maxTuition) &&
        (!maxSAT || univ.SATh <= maxSAT) &&
        (!minSAT || univ.SATl >= minSAT)
    );

    var tbody = document.getElementById("college-table-body");
    tbody.innerHTML = filteredUnivs.map(univ => `
        <tr>
            <td>${univ.nickname}</td>
            <td>${univ.SATh}</td>
            <td>${univ.SATl}</td>
            <td>${univ.tuition}</td>
        </tr>
    `).join('');
}

var updateButton = document.getElementById("btn")
updateButton.addEventListener("click", updateTable);