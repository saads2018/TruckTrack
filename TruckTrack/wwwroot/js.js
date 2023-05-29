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
    var text = route;
    if (text.length > 13) {
        text = text.substring(0, 13) + "...";
    }

    var routeMod = text.replace(/\s/g, "");

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

        button.innerText = text;
        button.style = "margin-right:5px; margin-top:5px;"
        button.className = "btn btn-sm btn-primary";
        button.id = text;

        btnDelete.innerText = "X";
        btnDelete.style = "margin-right:5px; margin-top:5px;"
        btnDelete.className = "btn btn-sm btn-danger";

        btnDelete.addEventListener("click", function () {
            document.getElementById("routeCard").removeChild(button);
            document.getElementById("routeCard").removeChild(btnDelete);
            if (document.getElementById("routeCard").children.length == 0) {
                document.getElementById("routeCard").hidden = true;
            }
            else if ((btns.length) % 6 == 0) {
                var space = document.getElementsByTagName("br");
                document.getElementById("routeCard").removeChild(space[space.length - 1]);
                var x = Number(document.getElementById("routeCard").style.height.replace("px", ""));
                x = x - 50;
                document.getElementById("routeCard").style.height = x.toString() + "px";
            }
        });

        document.getElementById("routeCard").hidden = false;
        if (btns.length > 0 && btns.length % 6==0) {
            button.style = "margin-right:5px; margin-top:5px;"
            btnDelete.style = "margin-right:5px; margin-top:5px;"
            var space = document.createElement("br");

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

function hideList(dotNetRef) {
    document.addEventListener("click", function (event) {
        if (event.target != document.getElementById("name")) {
            document.getElementById("list").style = "background-color:white;  border-style:solid;  padding-top:10px; padding-left:20px; border-color:#e9e7ec; border-size:10px; font-size:small; width:33.7%; margin-left:150px; margin-top:28px; overflow-y:auto; height:300px; position:fixed; display:none";
            dotNetRef.invokeMethodAsync('hideList');
        }
    });
}

function getNameValue() {
    return document.getElementById("name").value;
}

function setNameValue(Name) {
   document.getElementById("name").value=Name;
}


