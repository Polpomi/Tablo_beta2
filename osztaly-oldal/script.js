function openPage(id) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

let elmenyGrid = document.getElementById("elmeny-grid");
for (let i = 1; i <= 15; i++) {
    let img = document.createElement("img");
    img.src = "kepek/elmenyek/" + i + ".jpg";
    elmenyGrid.appendChild(img);
}

function openSub(id) {
    document.querySelectorAll('.subgrid').forEach(s => s.innerHTML = "");

    let grid = document.getElementById(id);
    for (let i = 1; i <= 10; i++) {
        let img = document.createElement("img");
        img.src = "kepek/" + id + "/" + i + ".jpg";
        grid.appendChild(img);
    }
}
