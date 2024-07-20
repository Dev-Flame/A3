var univArray = [
    {name: "Stanford University", nickname: "Stanford", ownership: "private", SATh: 1570, SATl: 1380, tuition: 44757},
    {name: "University of California, Berkeley", nickname: "UC Berkeley", ownership: "public", SATh: 1500, SATl: 1250, tuition: 13844},
    {name: "University of California, Santa Cruz", nickname: "UC Santa Cruz", ownership: "public", SATh: 1280, SATl: 1000, tuition: 13398},
    {name: "San Francisco State University", nickname: "SFSU", ownership: "public", SATh: 1110, SATl: 880, tuition: 6468},
    {name: "San Jose State University", nickname: "SJSU", ownership: "public", SATh: 1160, SATl: 880, tuition: 9496},
    {name: "Sonoma State University", nickname: "Sonoma State", ownership: "public", SATh: 1090, SATl: 880, tuition: 7276},
    {name: "California State University, East Bay", nickname: "CalState East Bay", ownership: "public", SATh: 1010, SATl: 800, tuition: 6550, room: 6435},
    {name: "University of San Francisco", nickname: "USF", ownership: "private", SATh: 1270, SATl: 1070, tuition: 41450},
    {name: "Santa Clara University", nickname: "SCU", ownership: "private", SATh: 1380, SATl: 1190, tuition: 43812},
    {name: "Mills College", nickname: "Mills College", ownership: "private", SATh: 1250, SATl: 1040, tuition: 42918}
];

function updateTable() {
    var ownership = document.querySelector('input[name="ownership"]:checked').value;
    var maxTuition = document.getElementById("maxtuition").value;
    var maxSAT = document.getElementById("maxsat").value;
    var minSAT = document.getElementById("minsat").value;

    var filteredUnivs = univArray.filter(function(univ) {
        var matchOwnership = (ownership === "dontcare") || (univ.ownership === ownership);
        var matchTuition = (!maxTuition) || (univ.tuition <= maxTuition);
        var matchMaxSAT = (!maxSAT) || (univ.SATh <= maxSAT);
        var matchMinSAT = (!minSAT) || (univ.SATl >= minSAT);
        return matchOwnership && matchTuition && matchMaxSAT && matchMinSAT;
    });

    var tbody = document.getElementById("college-table-body");
    tbody.innerHTML = "";
    
    filteredUnivs.forEach(function(univ) {
        var row = document.createElement("tr");
        
        var nameCell = document.createElement("td");
        nameCell.textContent = univ.nickname;
        row.appendChild(nameCell);
        
        var satHighCell = document.createElement("td");
        satHighCell.textContent = univ.SATh;
        row.appendChild(satHighCell);
        
        var satLowCell = document.createElement("td");
        satLowCell.textContent = univ.SATl;
        row.appendChild(satLowCell);
        
        var tuitionCell = document.createElement("td");
        tuitionCell.textContent = univ.tuition;
        row.appendChild(tuitionCell);
        
        tbody.appendChild(row);
    });
}
