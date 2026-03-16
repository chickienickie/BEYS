const schedules = {

    U9:[
      
    {date:"Apr 11",home:"PVYS5",away:"BEYS3",field:"PV3"},
    {date:"Apr 11",home:"BEYS1",away:"BEYS2",field:"BEYS1"},
    
    {date:"Apr 18",home:"BEYS1",away:"PVYS5",field:"BEYS1"},
    {date:"Apr 18",home:"BEYS2",away:"BEYS3",field:"BEYS2"},
    
    {date:"Apr 25",home:"PVYS3",away:"BEYS1",field:"PV2"},
    {date:"Apr 25",home:"BEYS2",away:"BSA2",field:"BEYS1"},
    {date:"Apr 25",home:"BEYS3",away:"BSA4",field:"BEYS2"},
    
    {date:"May 2",home:"BEYS2",away:"BSA1",field:"BEYS1"},
    {date:"May 2",home:"BEYS3",away:"BEYS1",field:"BEYS2"},
    
    {date:"May 9",home:"BEYS3",away:"PVYS3",field:"BEYS1"},
    {date:"May 9",home:"BEYS1",away:"BSA3",field:"BEYS2"},
    
    {date:"May 16",home:"BSA1",away:"BEYS3",field:"BSA WALKER"},
    {date:"May 16",home:"BEYS1",away:"BSA2",field:"BEYS1"},
    {date:"May 16",home:"BEYS2",away:"BSA4",field:"BEYS2"},
    
    {date:"May 30",home:"PVYS1",away:"BEYS2",field:"PV1"},
    {date:"May 30",home:"BEYS1",away:"PVYS5",field:"BEYS1"},
    {date:"May 30",home:"BEYS3",away:"BSA3",field:"BEYS2"}
    
    ],
    
    U11:[
    
    {date:"Apr 11",home:"BSA3",away:"BEYS1",field:"BSA Governors"},
    {date:"Apr 11",home:"BEYS2",away:"BEYS3",field:"BEYS1"},
    
    {date:"Apr 18",home:"PVYS2",away:"BEYS2",field:"PV2"},
    {date:"Apr 18",home:"BEYS1",away:"BSA1",field:"BEYS1"},
    {date:"Apr 18",home:"BSA3",away:"BEYS3",field:"BSA Governors"},
    
    {date:"Apr 25",home:"PVYS1",away:"BEYS2",field:"PV1"},
    {date:"Apr 25",home:"BEYS1",away:"BEYS3",field:"BEYS1"},
    
    {date:"May 2",home:"PVYS2",away:"BEYS1",field:"PV1"},
    {date:"May 2",home:"BEYS3",away:"BSA1",field:"BEYS1"},
    {date:"May 2",home:"BEYS2",away:"BSA2",field:"BEYS2"},
    
    {date:"May 9",home:"PVYS1",away:"BEYS3",field:"PV1"},
    {date:"May 9",home:"BEYS1",away:"BEYS2",field:"BEYS1"},
    
    {date:"May 16",home:"PVYS2",away:"BEYS3",field:"BSA PV1"},
    {date:"May 16",home:"BEYS1",away:"BSA2",field:"BEYS1"},
    {date:"May 16",home:"BEYS2",away:"BSA3",field:"BEYS2"},
    
    {date:"May 30",home:"PVYS1",away:"BEYS1",field:"PV1"},
    {date:"May 30",home:"BSA1",away:"BEYS2",field:"BSA WALKER"},
    {date:"May 30",home:"BEYS3",away:"BSA2",field:"BEYS1"}
    
    ],
    
    U13:[
    
    {date:"Apr 11",home:"BEYS1",away:"WBS1",field:"BEYS1"},
    {date:"Apr 11",home:"WBS2",away:"BEYS2",field:"WB1"}
    
    ]
    
    };
    
    const ageGroup = document.getElementById("ageGroup");
    const teamSelect = document.getElementById("teamSelect");
    const scheduleBody = document.getElementById("scheduleBody");
    
    
    ageGroup.addEventListener("change",()=>{
    
    const group = ageGroup.value;
    
    teamSelect.innerHTML = `<option value="">Select Team</option>`;
    
    scheduleBody.innerHTML="";
    
    if(!group) return;
    
    const teams = new Set();
    
    schedules[group].forEach(game=>{
    
    if(game.home.startsWith("BEYS")) teams.add(game.home);
    if(game.away.startsWith("BEYS")) teams.add(game.away);
    
    });
    
    teams.forEach(team=>{
    
    const option=document.createElement("option");
    option.value=team;
    option.textContent=team;
    
    teamSelect.appendChild(option);
    
    });
    
    });
    
    
    teamSelect.addEventListener("change",()=>{
    
    const group = ageGroup.value;
    const team = teamSelect.value;
    
    scheduleBody.innerHTML="";
    
    schedules[group].forEach(game=>{
    
    if(game.home===team || game.away===team){
    
    const opponent = game.home===team ? game.away : game.home;
    
    const row=document.createElement("tr");
    
    row.innerHTML=`
    <td>${game.date}</td>
    <td>${opponent}</td>
    <td>${game.field}</td>
    `;
    
    scheduleBody.appendChild(row);
    
    }
    
    });
    
    });

    function printSchedule() {
        const team = document.getElementById("teamSelect").value;
        if (!team) {
          alert("Please select a team first.");
          return;
        }
      
        window.print();
      }