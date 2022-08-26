function display() {


    const searchinput = document.getElementById("search");
    const rows = document.querySelector("tr");
    console.log(rows);
    searchinput.addEventListener("keyup", function (event) {
        const q = event.target.value;
        rows.forEach((row) => {
                row.querySelector('td').textContent.toLowerCase().startsWith(q) ? null : (row.style.display = 'none');
            }
        );


    }