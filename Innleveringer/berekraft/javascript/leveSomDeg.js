// her er koden for quizen
let sp1 = document.getElementById("sporsmol1")
let sp1sa1 = document.getElementById("sp1alternativ1")
let sp1sa2 = document.getElementById("sp1alternativ2")
let sp1sa3 = document.getElementById("sp1alternativ3")
let sp1sa4 = document.getElementById("sp1alternativ4")

let sp2 = document.getElementById("sporsmol2")
let sp2sa1 = document.getElementById("sp2alternativ1")
let sp2sa2 = document.getElementById("sp2alternativ2")
let sp2sa3 = document.getElementById("sp2alternativ3")
let sp2sa4 = document.getElementById("sp2alternativ4")

let sp3 = document.getElementById("sporsmol3")
let sp3sa1 = document.getElementById("sp3alternativ1")
let sp3sa2 = document.getElementById("sp3alternativ2")
let sp3sa3 = document.getElementById("sp3alternativ3")
let sp3sa4 = document.getElementById("sp3alternativ4")

let sp4 = document.getElementById("sporsmol4")
let sp4sa1 = document.getElementById("sp4alternativ")

let sp5 = document.getElementById("sporsmol5")
let sp5sa1 = document.getElementById("sp5alternativ1")
let sp5sa2 = document.getElementById("sp5alternativ2")
let sp5sa3 = document.getElementById("sp5alternativ3")
let sp5sa4 = document.getElementById("sp5alternativ4")

let info = document.getElementById("merInfo")

let lever = document.getElementById("leverSvar")

let FF1 = document.getElementById("funFact1")

sp1sa1.addEventListener("click", knappSp1sa1);
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

sp4sa1.addEventListener("click", knappSp4sa1);

sp5sa1.addEventListener("click", knappSp5sa1);
sp5sa2.addEventListener("click", knappSp5sa2);
sp5sa3.addEventListener("click", knappSp5sa3);
sp5sa4.addEventListener("click", knappSp5sa4);

info.addEventListener("click", knappInfo);

lever.addEventListener("click", knappLever);



TogFsp1sa1 = false
TogFsp1sa2 = false
TogFsp1sa3 = false
TogFsp1sa4 = false

TogFsp2sa1 = false
TogFsp2sa2 = false
TogFsp2sa3 = false
TogFsp2sa4 = false

TogFsp3sa1 = false
TogFsp3sa2 = false
TogFsp3sa3 = false
TogFsp3sa4 = false

TogFsp4sa1 = false

TogFsp5sa1 = false
TogFsp5sa2 = false
TogFsp5sa3 = false
TogFsp5sa4 = false

leverSvaret = false

TogFff1 = false

Co2 = 0
Co22 = 0
perAr = 0

document.getElementById("Co2Utslipp").innerHTML =Co2;
document.getElementById("Co22Utslipp").innerHTML =Co22;
document.getElementById("Co2PerAr").innerHTML =perAr;

function knappInfo() {
    if (TogFff1==false) {
        TogFff1 = true;
    } else {
        TogFff1 = false;
    }
    Co2Utslipp()
}

function Co2Utslipp() {
    if (TogFff1==false) {
        FF1.style.display="none"
    } else {
        FF1.style.display="block"
    }

    if (TogFsp1sa1 == false) {
        sp1sa1.style.backgroundColor = "red"
    } else {
        sp1sa1.style.backgroundColor = "blue"
        TogFsp1sa2 = false
        TogFsp1sa3 = false
        TogFsp1sa4 = false
    }

    if (TogFsp1sa2 == false) {
        sp1sa2.style.backgroundColor = "red"
    } else {
        sp1sa2.style.backgroundColor = "blue"
        TogFsp1sa1 = false
        TogFsp1sa3 = false
        TogFsp1sa4 = false
    }

    if (TogFsp1sa3 == false) {
        sp1sa3.style.backgroundColor = "red"
    } else {
        sp1sa3.style.backgroundColor = "blue"
        TogFsp1sa1 = false
        TogFsp1sa2 = false
        TogFsp1sa4 = false
    }

    if (TogFsp1sa4 == false) {
        sp1sa4.style.backgroundColor = "red"
    } else {
        sp1sa4.style.backgroundColor = "blue"
        TogFsp1sa1 = false
        TogFsp1sa2 = false
        TogFsp1sa3 = false
    }



    if (TogFsp2sa1 == false) {
        sp2sa1.style.backgroundColor = "pink"
    } else {
        sp2sa1.style.backgroundColor = "blue"
        TogFsp2sa2 = false
        TogFsp2sa3 = false
        TogFsp2sa4 = false
    }
    if (TogFsp2sa2 == false) {
        sp2sa2.style.backgroundColor = "pink"
    } else {
        sp2sa2.style.backgroundColor = "blue"
        TogFsp2sa1 = false
        TogFsp2sa3 = false
        TogFsp2sa4 = false
    }
    if (TogFsp2sa3 == false) {
        sp2sa3.style.backgroundColor = "pink"
    } else {
        sp2sa3.style.backgroundColor = "blue"
        TogFsp2sa1 = false
        TogFsp2sa2 = false
        TogFsp2sa4 = false
    }
    if (TogFsp2sa4 == false) {
        sp2sa4.style.backgroundColor = "pink"
    } else {
        sp2sa4.style.backgroundColor = "blue"
        TogFsp2sa1 = false
        TogFsp2sa2 = false
        TogFsp2sa3 = false
    }




    if (TogFsp3sa1 == false) {
        sp3sa1.style.backgroundColor = "yellow"
    } else {
        sp3sa1.style.backgroundColor = "blue"
        TogFsp3sa2 = false
        TogFsp3sa3 = false
        TogFsp3sa4 = false
    }
    if (TogFsp3sa2 == false) {
        sp3sa2.style.backgroundColor = "yellow"
    } else {
        sp3sa2.style.backgroundColor = "blue"
        TogFsp3sa1 = false
        TogFsp3sa3 = false
        TogFsp3sa4 = false
    }
    if (TogFsp3sa3 == false) {
        sp3sa3.style.backgroundColor = "yellow"
    } else {
        sp3sa3.style.backgroundColor = "blue"
        TogFsp3sa1 = false
        TogFsp3sa2 = false
        TogFsp3sa4 = false
    }
    if (TogFsp3sa4 == false) {
        sp3sa4.style.backgroundColor = "yellow"
    } else {
        sp3sa4.style.backgroundColor = "blue"
        TogFsp3sa1 = false
        TogFsp3sa2 = false
        TogFsp3sa3 = false
    }



    if (TogFsp4sa1 == false) {
        sp4sa1.style.backgroundColor = "lightBlue"
    } else {
        sp4sa1.style.backgroundColor = "blue"
        TogFsp4sa2 = false
        TogFsp4sa3 = false
        TogFsp4sa4 = false
    }



    if (TogFsp5sa1 == false) {
        sp5sa1.style.backgroundColor = "green"
    } else {
        sp5sa1.style.backgroundColor = "blue"
        TogFsp5sa2 = false
        TogFsp5sa3 = false
        TogFsp5sa4 = false
    }
    if (TogFsp5sa2 == false) {
        sp5sa2.style.backgroundColor = "green"
    } else {
        sp5sa2.style.backgroundColor = "blue"
        TogFsp5sa1 = false
        TogFsp5sa3 = false
        TogFsp5sa4 = false
    }
    if (TogFsp5sa3 == false) {
        sp5sa3.style.backgroundColor = "green"
    } else {
        sp5sa3.style.backgroundColor = "blue"
        TogFsp5sa1 = false
        TogFsp5sa2 = false
        TogFsp5sa4 = false
    }
    if (TogFsp5sa4 == false) {
        sp5sa4.style.backgroundColor = "green"
    } else {
        sp5sa4.style.backgroundColor = "blue"
        TogFsp5sa1 = false
        TogFsp5sa2 = false
        TogFsp5sa3 = false
    }
}

Co2Utslipp()

function knappLever() {

    document.getElementById("leverSvar").disabled= true;
    sp1sa1.removeEventListener("click", knappSp1sa1);
    sp1sa2.removeEventListener("click", knappSp1sa2);
    sp1sa3.removeEventListener("click", knappSp1sa3);
    sp1sa4.removeEventListener("click", knappSp1sa4);

    sp2sa1.removeEventListener("click", knappSp2sa1);
    sp2sa2.removeEventListener("click", knappSp2sa2);
    sp2sa3.removeEventListener("click", knappSp2sa3);
    sp2sa4.removeEventListener("click", knappSp2sa4);

    sp3sa1.removeEventListener("click", knappSp3sa1);
    sp3sa2.removeEventListener("click", knappSp3sa2);
    sp3sa3.removeEventListener("click", knappSp3sa3);
    sp3sa4.removeEventListener("click", knappSp3sa4);

    document.getElementById("sp4alternativ").disabled= true;

    sp5sa1.removeEventListener("click", knappSp5sa1);
    sp5sa2.removeEventListener("click", knappSp5sa2);
    sp5sa3.removeEventListener("click", knappSp5sa3);
    sp5sa4.removeEventListener("click", knappSp5sa4);

    
    if (TogFsp1sa1==true) {
        Co2 = Co2+1.347
    } else if (TogFsp1sa2==true) {
        Co2 = Co2+3.9925
    }else if (TogFsp1sa3==true) {
        Co2 = Co2+8.35
    }else if (TogFsp1sa4==true) {
        Co2 = Co2+16.17
    }

    if (TogFsp2sa1==true) {
        Co2 = Co2+ 2.95
    } else if (TogFsp2sa2==true) {
        Co2 = Co2+ 5.90
    }else if (TogFsp2sa3==true) {
        Co2 = Co2+ 11.80
    }else if (TogFsp2sa4==true) {
        Co2 = Co2+ 23.60
    }

    if (TogFsp3sa1==true) {
        bilUtslipp = 1.43
    } else if (TogFsp3sa2==true) {
        bilUtslipp = 1.64
    }else if (TogFsp3sa3==true) {
        bilUtslipp = 1.262
    }else if (TogFsp3sa4==true) {
        bilUtslipp = 0.50
    }

    if (TogFsp4sa1) {
        let kmKjort = sp4sa1.value
        
        Co22 = bilUtslipp * kmKjort
        Co2 = Co2+Co22
        console.log(Co22)
        console.log(Co2)
    }

    if (TogFsp5sa1==true) {
        Co2 = Co2+56
    } else if (TogFsp5sa2==true) {
        Co2 = Co2+32
    }else if (TogFsp5sa3==true) {
        Co2 = Co2+16
    }else if (TogFsp5sa4==true) {
        Co2 = Co2+0
    }
    perAr = Co2*52,177

    Co2Utslipp()
    document.getElementById("Co2Utslipp").innerHTML =Co2;
    document.getElementById("Co22Utslipp").innerHTML =Co22;
document.getElementById("Co2PerAr").innerHTML =perAr;

    
}

function knappSp1sa1() {
    if (TogFsp1sa1 == false) {
        TogFsp1sa1 = true
        console.log("heip")
    } else {
        TogFsp1sa1 = false
    }

    Co2Utslipp()
}
function knappSp1sa2() {
    if (TogFsp1sa2 == false) {
        TogFsp1sa2 = true
    } else {
        TogFsp1sa2 = false
    }
    Co2Utslipp()
}

function knappSp1sa3() {
    if (TogFsp1sa3 == false) {
        TogFsp1sa3 = true
    } else {
        TogFsp1sa3 = false
    }
    Co2Utslipp()
}

function knappSp1sa4() {
    if (TogFsp1sa4 == false) {
        TogFsp1sa4 = true
    } else {
        TogFsp1sa4 = false
    }
    Co2Utslipp()
}




function knappSp2sa1() {
    if (TogFsp2sa1 == false) {
        TogFsp2sa1 = true
    } else {
        TogFsp2sa1 = false
    }

    Co2Utslipp()
}
function knappSp2sa2() {
    if (TogFsp2sa2 == false) {
        TogFsp2sa2 = true
    } else {
        TogFsp2sa2 = false
    }
    Co2Utslipp()
}

function knappSp2sa3() {
    if (TogFsp2sa3 == false) {
        TogFsp2sa3 = true
    } else {
        TogFsp2sa3 = false
    }
    Co2Utslipp()
}

function knappSp2sa4() {
    if (TogFsp2sa4 == false) {
        TogFsp2sa4 = true
    } else {
        TogFsp2sa4 = false
    }
    Co2Utslipp()
}




function knappSp3sa1() {
    if (TogFsp3sa1 == false) {
        TogFsp3sa1 = true
    } else {
        TogFsp3sa1 = false
    }

    Co2Utslipp()
}
function knappSp3sa2() {
    if (TogFsp3sa2 == false) {
        TogFsp3sa2 = true
    } else {
        TogFsp3sa2 = false
    }
    Co2Utslipp()
}

function knappSp3sa3() {
    if (TogFsp3sa3 == false) {
        TogFsp3sa3 = true
    } else {
        TogFsp3sa3 = false
    }
    Co2Utslipp()
}

function knappSp3sa4() {
    if (TogFsp3sa4 == false) {
        TogFsp3sa4 = true
    } else {
        TogFsp3sa4 = false
    }
    Co2Utslipp()
}




function knappSp4sa1() {
    if (TogFsp4sa1 == false) {
        TogFsp4sa1 = true
    } 

    Co2Utslipp()
}
function knappSp4sa2() {
    if (TogFsp4sa2 == false) {
        TogFsp4sa2 = true
    } else {
        TogFsp4sa2 = false
    }
    Co2Utslipp()
}

function knappSp4sa3() {
    if (TogFsp4sa3 == false) {
        TogFsp4sa3 = true
    } else {
        TogFsp4sa3 = false
    }
    Co2Utslipp()
}

function knappSp4sa4() {
    if (TogFsp4sa4 == false) {
        TogFsp4sa4 = true
    } else {
        TogFsp4sa4 = false
    }
    Co2Utslipp()
}




function knappSp5sa1() {
    if (TogFsp5sa1 == false) {
        TogFsp5sa1 = true
    } else {
        TogFsp5sa1 = false
    }

    Co2Utslipp()
}
function knappSp5sa2() {
    if (TogFsp5sa2 == false) {
        TogFsp5sa2 = true
    } else {
        TogFsp5sa2 = false
    }
    Co2Utslipp()
}

function knappSp5sa3() {
    if (TogFsp5sa3 == false) {
        TogFsp5sa3 = true
    } else {
        TogFsp5sa3 = false
    }
    Co2Utslipp()
}

function knappSp5sa4() {
    if (TogFsp5sa4 == false) {
        TogFsp5sa4 = true
    } else {
        TogFsp5sa4 = false
    }
    Co2Utslipp()
}



