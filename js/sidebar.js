/* Side Nav Functions*/

const SBWidth = "200px";

/* Set the width of the side bar to 250px*/
function openNav() {
    document.getElementById("SideBarID").style.width = SBWidth;
}

/* Set the width of the side bar to 0px*/
function closeNav() {
    document.getElementById("SideBarID").style.width = "0px";
}