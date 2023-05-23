function SelectAll(count) {

    var check = document.getElementById("checkAll").checked;

    for (let i = 0; i < count; i++) {
        document.getElementById("check " + i).checked = check;
    }
}

function getWidth() {
    return window.innerWidth;
}


function checkIfChecked(count) {

    var indexes = "";
    for (let i = 0; i < count; i++) {
        if (document.getElementById("check " + i).checked == true) {
            indexes += document.getElementById("check " + i).value + ":";
        }
    }

    return indexes;
}

function getDriver() {
    return document.getElementById("driversList").value;
}

function getRoutesList() {
    var btns = document.getElementById("routeCard").getElementsByTagName("button");

    var list = "";
    for (let i = 0; i < btns.length; i++) {
        if (btns[i].innerText != "X") {
            list += btns[i].innerText+":";
        }
    }
    return list;
}

function getType() {
    return document.getElementById("type").value;
}
function msg(msg) {
    alert(msg);
}
function addButton() {
    var route = document.getElementById('routeList321').value;
    var btns = document.getElementById("routeCard").getElementsByTagName("button");
    var routeMod = route.replace(/\s/g, "");

    var exists = false;
    for (let i = 0; i < btns.length; i++) {
        var replace = btns[i].innerText.replace(/\s/g, "");
        if (replace == routeMod) {
            exists = true;
        }
    }

    if (!exists) {
        var button = document.createElement("button");
        var btnDelete = document.createElement("button");

        button.innerText = route;
        button.style = "margin-right:5px;"
        button.className = "btn btn-sm btn-primary";
        button.id = route

        btnDelete.innerText = "X";
        btnDelete.style = "margin-right:5px;"
        btnDelete.className = "btn btn-sm btn-danger";

        btnDelete.addEventListener("click", function () {
            document.getElementById("routeCard").removeChild(button);
            document.getElementById("routeCard").removeChild(btnDelete);
            if (document.getElementById("routeCard").children.length == 0) {
                document.getElementById("routeCard").hidden = true;
            }
        });

        document.getElementById("routeCard").hidden = false;
        if (btns.length > 0 && btns.length % 6==0) {
            var space = document.createElement("br");
            button.style = "margin-right:5px; margin-top:5px;"
            btnDelete.style = "margin-right:5px; margin-top:5px;"
            var x = Number(document.getElementById("routeCard").style.height.replace("px",""));
            x = x + 50;
            document.getElementById("routeCard").style.height = x.toString() + "px";
            document.getElementById("routeCard").appendChild(space);
        }
        document.getElementById("routeCard").appendChild(button);
        document.getElementById("routeCard").appendChild(btnDelete);
    }
    else {
        msg("This Route Has Already Been Chosen Before!");
    }
}
