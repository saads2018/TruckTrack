

function SelectAll(count) {

    var check = document.getElementById("checkAll").checked;

    for (let i = 0; i < count; i++) {
        document.getElementById("check " + i).checked = check;
    }
}

function addButton3(dotnetRef) {
    dotnetRef.invokeMethodAsync('addToList');
}

function getLink() {
    return window.location.href.toString();
}
function getWidth() {
    return window.innerWidth;
}

function getPass(type,username) {
    return document.getElementById(type + username).value;
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
    var btns = document.getElementById("routeCard").getElementsByTagName("label");

    var list = "";
    for (let i = 0; i < btns.length; i++) {
        if (btns[i].className != "addresses") {
            list += btns[i].innerText+":";
        }
    }
    return list;
}

function openNewTab(value) {
    var url = value; // Replace with your desired URL
    window.open(url, "_blank");
}

function getType() {
    return document.getElementById("type").value;
}
function msg(msg) {
    alert(msg);
}
function addButton() {
    var route = document.getElementById('name').value;
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
        var link = document.createElement("a");

        button.draggable = true;
        button.className = "draggable";
        button.innerText = text;
        button.style = "margin-right:5px; margin-top:5px;"
        button.className = "btn btn-sm btn-primary";
        button.id = text;
        button.style.position = "absolute";

        link.innerText = route;
        link.hidden = true;

        btnDelete.innerText = "Delete";
        btnDelete.style = "margin-right:5px; margin-top:5px;"
        btnDelete.className = "btn btn-sm btn-danger";
        
        btnDelete.addEventListener("click", function () {
            document.getElementById("routeCard").removeChild(button);
            document.getElementById("routeCard").removeChild(btnDelete);
            document.getElementById("routeCard").removeChild(link);
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
        document.getElementById("routeCard").appendChild(link);
    }
    else {
        msg("This Route Has Already Been Chosen Before!");
    }
    document.getElementById("name").value = "";
}

function addButton1(dotNetRef) {
    var address = document.getElementById('address').value;
    var route = document.getElementById('name').value;
    var btns = document.getElementById("routeCard").getElementsByClassName("name");
    var btnsAddress = document.getElementById("routeCard").getElementsByClassName("addresses");

    var text = route;

    if (text.length > 20) {
        text = text.substring(0, 20) + "...";
    }

    var routeMod = route.replace(/\s/g, "");
    var addressMod = address.replace(/\s/g, "");

    var exists = false;
    for (let i = 0; i < btns.length; i++) {
        var replace = btns[i].value.replace(/\s/g, "");
        var replaceAddress = btnsAddress[i].innerText.replace(/\s/g, "");
        if (replace == routeMod && replaceAddress == addressMod) {
            exists = true;
        }
    }

    if (!exists) {
        var container = document.createElement("div");
        var container2 = document.createElement("div");
        var label = document.createElement("label");
        var button = document.createElement("button");
        var label2 = document.createElement("label");
        var space = document.createElement("br");
        var space2 = document.createElement("br");
        var item = document.createElement("li");

        container.className = "container border draggable";
        container.draggable = true;
        container.style = "padding:5px; display:flex";

        container2.style = "width:80%; margin-left:5px; margin-top:3px;";

        label.innerText = text;
        label.value = route;
        label.className = "name";

        label2.style = "margin-top:3px;";
        label2.innerText = address;
        label2.className = "addresses";

        button.style = "margin-top:2px;";
        button.className = "btn btn-sm btn-danger";
        button.innerText = "Delete";

        button.addEventListener("click", function () {
            document.getElementById("routeCard").removeChild(container);
            document.getElementById("routeCard").removeChild(space);

            if (document.getElementById("routeCard").children.length == 0) {
                document.getElementById("routeCard").hidden = true;
            }
        });

        document.getElementById("routeCard").hidden = false;

        container2.appendChild(label);
        container2.appendChild(space2);
        container2.appendChild(label2);

        container.appendChild(container2);
        container.appendChild(button);

        document.getElementById("routeCard").appendChild(container);
        document.getElementById("routeCard").appendChild(space);

    }
    else {
        msg("This Route Has Already Been Chosen Before!");
    }
    document.getElementById("name").value = "";
}


function loadSearch(hide) {
    document.getElementById("list").style = hide;
}
function loaderVisibility(hide) {
    document.getElementById("load").style.display = hide;
}

function loaderVisibility1(hide) {
    document.getElementById("load1").style.display = hide;
}

window.dragEndCallback = (elementId,dotNetRef) => {
    var element = document.getElementById(elementId);
    element.addEventListener("dragend", () => {
        dotNetRef.invokeMethodAsync("hondragend");
    });
};

function hideList(dotNetRef) {
    document.addEventListener("click", function (event) {
        if (event.target != document.getElementById("name")) {
            document.getElementById("list").style = "background-color:white;  border-style:solid;  padding-top:10px; padding-left:20px; border-color:#e9e7ec; border-size:10px; font-size:small; width:33.7%; margin-left:150px; margin-top:28px; overflow-y:auto; height:300px; position:fixed; display:none";
            dotNetRef.invokeMethodAsync('hideList');
        }
    });
}

window.addEventListener('popstate', function (event) {
    location.reload();
});

function showDriverList(hide) {
    document.getElementById("routeCard").style.display = hide;
}

function getNameValue() {
    return document.getElementById("name").value;
}

function getAddressValue() {
    return document.getElementById("address").value;
}

function setNameValue(Name, Address) {
    document.getElementById("name").value = Name;
    document.getElementById("address").value = Address;
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function setDriver(id, driver, username) {
    document.getElementById(id).value = driver + ":" + username;
}

function setValue(id, value) {
    document.getElementById(id).value = value;
    document.getElementById(id).innerText = value;
}


class Coordindate {
    constructor(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
}


window.initializeMap = () => {
    // Create the map
    var map = L.map('map').setView([0, 0], 13);

    // Add the tile layer (you can use other tile providers as well)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Retrieve the GPS coordinates from your C# code
    const coordinates = [new Coordindate(30.200862, 71.425972), new Coordindate(30.202884, 71.426678), new Coordindate(30.204423, 71.427075), new Coordindate(30.204395, 71.428839)];

    // Create an array to hold the polyline points
    var polylinePoints = [];

    // Add the polyline points to the array
    for (var i = 0; i < coordinates.length; i++) {
        var coordinate = coordinates[i];
        var marker = L.marker([coordinate.latitude, coordinate.longitude]).addTo(map);
        marker.bindPopup(`Speed: 10 km/h<br>Time: 10:03`);
        var latLng = L.latLng(coordinate.latitude, coordinate.longitude);
        polylinePoints.push(latLng);
    }

    // Create the polyline with the coordinates
    var polyline = L.polyline(polylinePoints, { color: 'red' }).addTo(map);

    // Fit the map to the polyline bounds
    map.fitBounds(polyline.getBounds());

    // Enable the Leaflet.Draw plugin for user interaction (optional)
    var drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    var drawControl = new L.Control.Draw({
        edit: {
            featureGroup: drawnItems
        },
        draw: {
            polyline: false,
            polygon: false,
            circle: false,
            rectangle: false,
            marker: false
        }
    });
    map.addControl(drawControl);
}
