// her er koden for quizen
let fam = document.getElementById("familie");

let sp1 = document.getElementById("sporsmol1"); // spørsmål
let sp1sa1 = document.getElementById("sp1alternativ1"); // svaralternativ
let sp1sa2 = document.getElementById("sp1alternativ2");
let sp1sa3 = document.getElementById("sp1alternativ3");
let sp1sa4 = document.getElementById("sp1alternativ4");

let sp2 = document.getElementById("sporsmol2");
let sp2sa1 = document.getElementById("sp2alternativ1");
let sp2sa2 = document.getElementById("sp2alternativ2");
let sp2sa3 = document.getElementById("sp2alternativ3");
let sp2sa4 = document.getElementById("sp2alternativ4");

let sp3 = document.getElementById("sporsmol3");
let sp3sa1 = document.getElementById("sp3alternativ1");
let sp3sa2 = document.getElementById("sp3alternativ2");
let sp3sa3 = document.getElementById("sp3alternativ3");
let sp3sa4 = document.getElementById("sp3alternativ4");
let sp3sa5 = document.getElementById("sp3alternativ5");

let sp4 = document.getElementById("sporsmol4"); // =3.5
let sp4sa1 = document.getElementById("sp4alternativ");

let sp5 = document.getElementById("sporsmol5"); //=4
let sp5sa1 = document.getElementById("sp5alternativ1");
let sp5sa2 = document.getElementById("sp5alternativ2");
let sp5sa3 = document.getElementById("sp5alternativ3");
let sp5sa4 = document.getElementById("sp5alternativ4");

 // viste du at... knappen

let lever = document.getElementById("leverSvar");


let panda = document.getElementById("bildePanda"); // bilder
let bjorn = document.getElementById("bildeBjorn");
let elg = document.getElementById("bildeElg");
let hval = document.getElementById("bildeHval");
let elefant = document.getElementById("bildeElefant");
let dinosaur = document.getElementById("bildeDinosaur");
let krokodille = document.getElementById("bildeKrokodille");
let flodhest = document.getElementById("bildeFlodhest");

let boss = document.getElementById("tipsForBoss");
let dusj = document.getElementById("tipsForDusj");
let bil = document.getElementById("tipsForBil");
let kjott = document.getElementById("tipsForKjott");

let DP = document.getElementById("dusjPenger");

// <1

bildePanda.style.display="none"; // bilder av
bildeBjorn.style.display="none";
bildeElg.style.display="none";
bildeHval.style.display="none";
bildeElefant.style.display="none";
bildeDinosaur.style.display="none";
bildeKrokodille.style.display="none";
bildeFlodhest.style.display="none";

boss.style.display="none";
dusj.style.display="none";
bil.style.display="none";
kjott.style.display="none";

// for og while løkker er en ting du burde bruke mer



sp1sa1.addEventListener("click", knappSp1sa1); //alternativ er no en knapp
sp1sa2.addEventListener("click", knappSp1sa2);
sp1sa3.addEventListener("click", knappSp1sa3);
sp1sa4.addEventListener("click", knappSp1sa4);

sp2sa1.addEventListener("click", knappSp2sa1);
sp2sa2.addEventListener("click", knappSp2sa2);
sp2sa3.addEventListener("click", knappSp2sa3);
sp2sa4.addEventListener("click", knappSp2sa4);

sp3sa1.addEventListener("click", knappSp3sa1);
sp3sa2.addEventListener("click", knappSp3sa2);
sp3sa3.addEventListener("click", knappSp3sa3);
sp3sa4.addEventListener("click", knappSp3sa4);
sp3sa5.addEventListener("click", knappSp3sa5);

sp4sa1.addEventListener("click", knappSp4sa1);

sp5sa1.addEventListener("click", knappSp5sa1);
sp5sa2.addEventListener("click", knappSp5sa2);
sp5sa3.addEventListener("click", knappSp5sa3);
sp5sa4.addEventListener("click", knappSp5sa4);


lever.addEventListener("click", knappLever);



TogFsp1sa1 = false;
TogFsp1sa2 = false;
TogFsp1sa3 = false;
TogFsp1sa4 = false;

TogFsp2sa1 = false;
TogFsp2sa2 = false;
TogFsp2sa3 = false;
TogFsp2sa4 = false;

TogFsp3sa1 = false;
TogFsp3sa2 = false;
TogFsp3sa3 = false;
TogFsp3sa4 = false;
TogFsp3sa5 = false;

TogFsp4sa1 = false;

TogFsp5sa1 = false;
TogFsp5sa2 = false;
TogFsp5sa3 = false;
TogFsp5sa4 = false;

leverSvaret = false;




diagram35();

diagram();

myChart1.style.display="none";
myChart3.style.display="none";


Co2 = 0;
Co22 = 0;
perAr = 0;
poser = 0;
bilUtslipp = 0;
famMedlemer = 0;
svarteDu = 0;
tid = 0;
penger = 0;
pengerFamilieDusj = 0;
dusjPengerAr = 0;


document.getElementById("Co2UtslippUke").innerHTML =Co2;
document.getElementById("Co22Utslipp").innerHTML =Co22;
document.getElementById("Co2PerAr").innerHTML =perAr;
document.getElementById("dusjPenger").innerHTML = "I løpet av et år bruker du &nbsp;" + dusjPengerAr + " &nbsp; kr på å dysje og";
document.getElementById("dusjPengerFam").innerHTML = "familien din bruker &nbsp;" + pengerFamilieDusj + " &nbsp; kr hvis de alle dusjer som deg.";



function TogFsporsmol1() {
    if (TogFsp1sa1 == false) {
        sp1sa1.style.backgroundColor = "#3f5d3f";
    } else {
        sp1sa1.style.backgroundColor = "#336699";
        TogFsp1sa2 = false;
        TogFsp1sa3 = false;
        TogFsp1sa4 = false;
    }

    if (TogFsp1sa2 == false) {
        sp1sa2.style.backgroundColor = "#3f5d3f";
    } else {
        sp1sa2.style.backgroundColor = "#336699";
        TogFsp1sa1 = false;
        TogFsp1sa3 = false;
        TogFsp1sa4 = false;
    }

    if (TogFsp1sa3 == false) {
        sp1sa3.style.backgroundColor = "#3f5d3f";
    } else {
        sp1sa3.style.backgroundColor = "#336699";
        TogFsp1sa1 = false;
        TogFsp1sa2 = false;
        TogFsp1sa4 = false;
    }

    if (TogFsp1sa4 == false) {
        sp1sa4.style.backgroundColor = "#3f5d3f";
    } else {
        sp1sa4.style.backgroundColor = "#336699";
        TogFsp1sa1 = false;
        TogFsp1sa2 = false;
        TogFsp1sa3 = false;
    }
}


function TogFsporsmol2() {
if (TogFsp2sa1 == false) {
    sp2sa1.style.backgroundColor = "#3f5d3f";
} else {
    sp2sa1.style.backgroundColor = "#336699";
    TogFsp2sa2 = false;
    TogFsp2sa3 = false;
    TogFsp2sa4 = false;
}
if (TogFsp2sa2 == false) {
    sp2sa2.style.backgroundColor = "#3f5d3f";
} else {
    sp2sa2.style.backgroundColor = "#336699";
    TogFsp2sa1 = false;
    TogFsp2sa3 = false;
    TogFsp2sa4 = false;
}
if (TogFsp2sa3 == false) {
    sp2sa3.style.backgroundColor = "#3f5d3f";
} else {
    sp2sa3.style.backgroundColor = "#336699";
    TogFsp2sa1 = false;
    TogFsp2sa2 = false;
    TogFsp2sa4 = false;
}
if (TogFsp2sa4 == false) {
    sp2sa4.style.backgroundColor = "#3f5d3f";
} else {
    sp2sa4.style.backgroundColor = "#336699";
    TogFsp2sa1 = false;
    TogFsp2sa2 = false;
    TogFsp2sa3 = false;
}
}



function TogFsporsmol3() {

if (TogFsp3sa1 == false) {
    sp3sa1.style.backgroundColor = "#3f5d3f";
} else {
    sp3sa1.style.backgroundColor = "#336699";
    TogFsp3sa2 = false;
    TogFsp3sa3 = false;
    TogFsp3sa4 = false;
    TogFsp3sa5 = false;
}
if (TogFsp3sa2 == false) {
    sp3sa2.style.backgroundColor = "#3f5d3f";
} else {
    sp3sa2.style.backgroundColor = "#336699";
    TogFsp3sa1 = false;
    TogFsp3sa3 = false;
    TogFsp3sa4 = false;
    TogFsp3sa5 = false;
}
if (TogFsp3sa3 == false) {
    sp3sa3.style.backgroundColor = "#3f5d3f";
} else {
    sp3sa3.style.backgroundColor = "#336699";
    TogFsp3sa1 = false;
    TogFsp3sa2 = false;
    TogFsp3sa4 = false;
    TogFsp3sa5 = false;
}
if (TogFsp3sa4 == false) {
    sp3sa4.style.backgroundColor = "#3f5d3f";
} else {
    sp3sa4.style.backgroundColor = "#336699";
    TogFsp3sa1 = false;
    TogFsp3sa2 = false;
    TogFsp3sa3 = false;
    TogFsp3sa5 = false;
}

if (TogFsp3sa5 == false) {
    sp3sa5.style.backgroundColor = "#3f5d3f";
    sporsmol4.style.display="block";
    sp4alternativ.style.display="block";
} else {
    sp3sa5.style.backgroundColor = "#336699";
    TogFsp3sa1 = false;
    TogFsp3sa2 = false;
    TogFsp3sa3 = false;
    TogFsp3sa4 = false;
    sporsmol4.style.display="none";
    sp4alternativ.style.display="none";
}

}


function TogFsporsmol4() {
if (TogFsp4sa1 == true) {
    TogFsp4sa2 = false;
    TogFsp4sa3 = false;
    TogFsp4sa4 = false;
} 
}



function TogFsporsmol5() {

if (TogFsp5sa1 == false) {
    sp5sa1.style.backgroundColor = "#3f5d3f";
} else {
    sp5sa1.style.backgroundColor = "#336699";
    TogFsp5sa2 = false;
    TogFsp5sa3 = false;
    TogFsp5sa4 = false;
}
if (TogFsp5sa2 == false) {
    sp5sa2.style.backgroundColor = "#3f5d3f";
} else {
    sp5sa2.style.backgroundColor = "#336699";
    TogFsp5sa1 = false;
    TogFsp5sa3 = false;
    TogFsp5sa4 = false;
}
if (TogFsp5sa3 == false) {
    sp5sa3.style.backgroundColor = "#3f5d3f";
} else {
    sp5sa3.style.backgroundColor = "#336699";
    TogFsp5sa1 = false;
    TogFsp5sa2 = false;
    TogFsp5sa4 = false;
}
if (TogFsp5sa4 == false) {
    sp5sa4.style.backgroundColor = "#3f5d3f";
} else {
    sp5sa4.style.backgroundColor = "#336699";
    TogFsp5sa1 = false;
    TogFsp5sa2 = false;
    TogFsp5sa3 = false;
}
}

Co2Utslipp();


function Co2Utslipp() {
    // må ha, ellers forsvinner ting
    TogFsporsmol1();
    TogFsporsmol2();
    TogFsporsmol3();
    TogFsporsmol4();
    TogFsporsmol5();
    
    }



function bilde() {
    if (perAr<70) {//hvis perAr er mindre enn 70
        console.log("under 70")
    } else if (perAr<120) {
        bildePanda.style.display="block";
    } else if (perAr<400) {
        bildeBjorn.style.display="block";
    } else if (perAr<700) {
        bildeElg.style.display="block";
    } else if (perAr<1100) {
    bildeKrokodille.style.display="block";
    } else if (perAr<1600) {
        bildeHval.style.display="block";
    } else if (perAr<2300) {
        bildeFlodhest.style.display="block";
    } else if (perAr<6300) {// elefant veier mindre enn 6300
        bildeElefant.style.display="block";
    } else if (perAr<8000) {
        bildeDinosaur.style.display="block";
    } else {
        console.log("over 8000");
    } 
    
}

function lever1() {
    sp1sa1.removeEventListener("click", knappSp1sa1);
    sp1sa2.removeEventListener("click", knappSp1sa2);
    sp1sa3.removeEventListener("click", knappSp1sa3);
    sp1sa4.removeEventListener("click", knappSp1sa4);

    if (TogFsp1sa1==true) {
        Co2 = Co2+0.61;
        poser = poser+1.75;
    } else if (TogFsp1sa2==true) {
        Co2 = Co2+1.84;
        poser = poser+2.63;
    }else if (TogFsp1sa3==true) {
        Co2 = Co2+3.68;
        poser = poser+5.25;
    }else if (TogFsp1sa4==true) {
        Co2 = Co2+8.58;
        poser = poser+12.25;
    }
    Co2Utslipp();
}

function lever2() {
    sp2sa1.removeEventListener("click", knappSp2sa1);
    sp2sa2.removeEventListener("click", knappSp2sa2);
    sp2sa3.removeEventListener("click", knappSp2sa3);
    sp2sa4.removeEventListener("click", knappSp2sa4);

    if (TogFsp2sa1==true) {
        Co2 = Co2+ 3;// kg Co2 utslipp fra den tiden i dysjen
        penger = 0.8;
    } else if (TogFsp2sa2==true) {
        Co2 = Co2+ 5.9;
        penger = 3.2;
    }else if (TogFsp2sa3==true) {
        Co2 = Co2+ 11.8;
        penger = 7.2;
    }else if (TogFsp2sa4==true) {
        Co2 = Co2+ 23.6;
        penger = 14.4;
    }
    Co2Utslipp();
}

function lever3() {
    sp3sa1.removeEventListener("click", knappSp3sa1);
    sp3sa2.removeEventListener("click", knappSp3sa2);
    sp3sa3.removeEventListener("click", knappSp3sa3);
    sp3sa4.removeEventListener("click", knappSp3sa4);
    sp3sa5.removeEventListener("click", knappSp3sa5);

    if (TogFsp3sa1==true) {
        bilUtslipp = 0.14;// kg Co2 utslipp per km
    } else if (TogFsp3sa2==true) {
        bilUtslipp = 0.16;
    }else if (TogFsp3sa3==true) {
        bilUtslipp = 0.13;
    }else if (TogFsp3sa4==true) {
        bilUtslipp = 0.05;
    }else if (TogFsp3sa5==true) {
        bilUtslipp = 0;
    }
    Co2Utslipp();
}

function lever4() {
    

    let kmKjort = sp4sa1.value;

    Co22 = bilUtslipp * (kmKjort*52);// 52km per time* timer kjørt* utslipp per time= co2 fra bil
    Co2 = Co2+Co22;
    console.log("Co22",Co22);
    console.log("Co2",Co2);
    
    Co2Utslipp();
}

function lever5() {
    sp5sa1.removeEventListener("click", knappSp5sa1);
    sp5sa2.removeEventListener("click", knappSp5sa2);
    sp5sa3.removeEventListener("click", knappSp5sa3);
    sp5sa4.removeEventListener("click", knappSp5sa4);

    if (TogFsp5sa1==true) {
        Co2 = Co2+56;
    } else if (TogFsp5sa2==true) {
        Co2 = Co2+32;
    }else if (TogFsp5sa3==true) {
        Co2 = Co2+16;
    }else if (TogFsp5sa4==true) {
        Co2 = Co2+0;
    }
    Co2Utslipp();
}



function knappLever() {
    svarteDu = svarteDu+fam.value;
    lever4(); // da ser de hva sp4sa1 er
    lever2()
    kmKjort = sp4sa1.value;// instrukser må gis på ny
    console.log("dusj",pengerFamilieDusj)

    if (svarteDu > 0 && kmKjort > 0 ) { // bruker må ha gitt et svar høyere enn 0 for å levere
        familie.style.backgroundColor="white";
        sp4alternativ.style.backgroundColor="white";
        leverSvar.style.backgroundColor="white";

        myChart1.style.display="block";
        myChart.style.display="none";
        myChart3.style.display="block";
        myChart35.style.display="none";
    
        document.getElementById("familie").disabled= true;
        document.getElementById("sp4alternativ").disabled= true;
        document.getElementById("leverSvar").disabled= true;
    
        lever1();
        lever2();
        lever3();
        lever4();
        lever5();
    
        Co2Utslipp();
    
        perAr = Co2*52.2;
    
        bilde();
    
        famMedlemer = fam.value; // no vet jeg hvor mange det er i familien deres
        bossEnPerson = poser/famMedlemer;
    
        dittBossIAret = bossEnPerson*52.2;
    
        dittBossIAret.value;

            kjortPerAr = (kmKjort*52)*52.2;
        ukePenger = penger*5
        dusjPengerAr = ukePenger*52.2
        console.log("dusj",dusjPengerAr)

        pengerFamilieDusj = dusjPengerAr*famMedlemer
    
        diagram1();
        diagram3();
    
        document.getElementById("Co2UtslippUke").innerHTML = Co2.toFixed(2);// kun to desimaler
        document.getElementById("Co22Utslipp").innerHTML = Co22.toFixed(2);
        document.getElementById("Co2PerAr").innerHTML = perAr.toFixed(2);
        document.getElementById("dusjPenger").innerHTML =dusjPengerAr;
        document.getElementById("dusjPengerFam").innerHTML =pengerFamilieDusj;
    
    
    }else{

        if (svarteDu < 1 && kmKjort <1) {// hvis begge mangler svar blir begge rød
            familie.style.backgroundColor="red";
            sp4alternativ.style.backgroundColor="red";
        } else if  (kmKjort <1) {
            sp4alternativ.style.backgroundColor="red";// kun den som mangler blir rødt
        } else if (svarteDu < 1) {
            familie.style.backgroundColor="red"};

        leverSvar.style.backgroundColor="red"; //knapp er rød uansett
    }

}


function knappSp1sa1() {
    if (TogFsp1sa1 == false) {
        TogFsp1sa1 = true;
    } else {
        TogFsp1sa1 = false;
    }

    Co2Utslipp();
}
function knappSp1sa2() {
    if (TogFsp1sa2 == false) {
        TogFsp1sa2 = true;
    } else {
        TogFsp1sa2 = false;
    }
    Co2Utslipp();
}

function knappSp1sa3() {
    if (TogFsp1sa3 == false) {
        TogFsp1sa3 = true;
    } else {
        TogFsp1sa3 = false;
    }
    Co2Utslipp();
}

function knappSp1sa4() {
    if (TogFsp1sa4 == false) {
        TogFsp1sa4 = true;
    } else {
        TogFsp1sa4 = false;
    }
    Co2Utslipp();
}




function knappSp2sa1() {
    if (TogFsp2sa1 == false) {
        TogFsp2sa1 = true;
    } else {
        TogFsp2sa1 = false;
    }
    Co2Utslipp();
}
function knappSp2sa2() {
    if (TogFsp2sa2 == false) {
        TogFsp2sa2 = true;
    } else {
        TogFsp2sa2 = false;
    }
    Co2Utslipp();
}

function knappSp2sa3() {
    if (TogFsp2sa3 == false) {
        TogFsp2sa3 = true;
    } else {
        TogFsp2sa3 = false;
    }
    Co2Utslipp();
}

function knappSp2sa4() {
    if (TogFsp2sa4 == false) {
        TogFsp2sa4 = true;
    } else {
        TogFsp2sa4 = false;
    }
    Co2Utslipp();
}




function knappSp3sa1() {
    if (TogFsp3sa1 == false) {
        TogFsp3sa1 = true;
    } else {
        TogFsp3sa1 = false;
    }
    Co2Utslipp();
}
function knappSp3sa2() {
    if (TogFsp3sa2 == false) {
        TogFsp3sa2 = true;
    } else {
        TogFsp3sa2 = false;
    }
    Co2Utslipp();
}

function knappSp3sa3() {
    if (TogFsp3sa3 == false) {
        TogFsp3sa3 = true;
    } else {
        TogFsp3sa3 = false;
    }
    Co2Utslipp();
}

function knappSp3sa4() {
    if (TogFsp3sa4 == false) {
        TogFsp3sa4 = true;
    } else {
        TogFsp3sa4 = false;
    }
    Co2Utslipp();
}

function knappSp3sa5() {
    if (TogFsp3sa5 == false) {
        TogFsp3sa5 = true;
    } else {
        TogFsp3sa5 = false;
    }
    Co2Utslipp();
}




function knappSp4sa1() {
    if (TogFsp4sa1 == false) {
        TogFsp4sa1 = true;
    } 
    Co2Utslipp();
}
function knappSp4sa2() {
    if (TogFsp4sa2 == false) {
        TogFsp4sa2 = true;
    } else {
        TogFsp4sa2 = false;
    }
    Co2Utslipp();
}

function knappSp4sa3() {
    if (TogFsp4sa3 == false) {
        TogFsp4sa3 = true;
    } else {
        TogFsp4sa3 = false;
    }
    Co2Utslipp();
}

function knappSp4sa4() {
    if (TogFsp4sa4 == false) {
        TogFsp4sa4 = true;
    } else {
        TogFsp4sa4 = false;
    }
    Co2Utslipp();
}




function knappSp5sa1() {
    if (TogFsp5sa1 == false) {
        TogFsp5sa1 = true;
    } else {
        TogFsp5sa1 = false;
    }
    Co2Utslipp();
}
function knappSp5sa2() {
    if (TogFsp5sa2 == false) {
        TogFsp5sa2 = true;
    } else {
        TogFsp5sa2 = false;
    }
    Co2Utslipp();
}

function knappSp5sa3() {
    if (TogFsp5sa3 == false) {
        TogFsp5sa3 = true;
    } else {
        TogFsp5sa3 = false;
    }
    Co2Utslipp();
}

function knappSp5sa4() {
    if (TogFsp5sa4 == false) {
        TogFsp5sa4 = true;
    } else {
        TogFsp5sa4 = false;
    }
    Co2Utslipp();
}                        

function diagram() {
    const ctx = document.getElementById('myChart');

    var barColors = ["#b5e2fa","#eddea4","#f7a072","#ffa5ab","#51d493", "rgb(203, 42, 42)"]

    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Norge', 'Amerika', 'Kina', 'Canada', 'Verden', 'Du'],
            datasets: [{
                label: 'Kg boss i gjennomsnitt per år',
                data: [205, 810, 405, 510, 270],
                borderWidth: 1,
                backgroundColor: barColors,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    }

function diagram1() {
    
const ctx = document.getElementById('myChart1');
var barColors = ["#b5e2fa","#eddea4","#f7a072","#ffa5ab","#51d493", "#a25ed5"]

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Norge', 'Amerika', 'Kina', 'Canada', 'Verden', 'Du'],
        datasets: [{
            label: 'Kg boss i gjennomsnitt per år',
            data: [205, 810, 405, 510, 270, dittBossIAret],
            borderWidth: 1,
            backgroundColor: barColors,
            
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}







    function diagram3() {
    
        const ctx = document.getElementById('myChart3');
        var barColors2 = ["#b5e2fa","#eddea4","#ffa5ab", "#a25ed5"]

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Norge', 'Canada', 'Amerika', 'Deg'],
                datasets: [{
                    label: 'Kg Co2 per Km',
                    data: [11274, 21721.5, 15200, kjortPerAr],
                    borderWidth: 1,
                    backgroundColor: barColors2,
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        }

        function diagram35() {
    
            const ctx = document.getElementById('myChart35');
            var barColors2 = ["#b5e2fa","#eddea4","#ffa5ab", "#a25ed5"]
    
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Norge', 'Amerika', 'Canada', 'Deg'],
                    datasets: [{
                        label: 'Kg Co2 per Km',
                        data: [11274, 21721.5, 15200, 0],
                        borderWidth: 1,
                        backgroundColor: barColors2,
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
            }
