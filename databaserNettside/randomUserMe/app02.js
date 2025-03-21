async function hentePerson() {
    const res = await fetch('https://randomuser.me/api/?results=5'); //de henter og gjør om en vits fra nettsiden til en variabel 
    const data = await res.json(); // konventerer vitsen til {} 

    console.log(data.results[0].gender);
    console.log(data.results[0].name.last);
    console.log(data.results[0].picture.thumbnail);

    // let infoOmPerson = document.createElement('div')
    // infoOmPerson.innerText = data.results[0].name.first + " " + data.results[0].name.last +  " (" + data.results[0].gender + ")";
    // document.body.appendChild(infoOmPerson);

    // let bildeAvPerson = document.createElement('img');
    // bildeAvPerson.src = data.results[0].picture.thumbnail;
    // document.body.appendChild(bildeAvPerson);

    for (let i = 0; i < data.results.length ; i++){
    
        let infoOmPerson = document.createElement('div')
        infoOmPerson.innerText = data.results[i].name.first + " " + data.results[i].name.last +  " (" + data.results[i].gender + ")";
        document.body.appendChild(infoOmPerson);

        let bildeAvPerson = document.createElement('img');
        bildeAvPerson.src = data.results[i].picture.thumbnail;
        document.body.appendChild(bildeAvPerson);
    }
}


hentePerson(); // Slik at me får ein vits med ein gong me lastar sida