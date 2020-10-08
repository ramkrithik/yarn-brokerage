function clearele() {
    let d = document.querySelectorAll(".login p");
    if (d != null) {
        d.forEach((d) => {
            d.textContent = "";
        });
    }
}

function validate() {
    clearele();
    event.preventDefault();
    let mail = document.forms["login"]["email"].value;
    if (mail == "") {
        let b = document.querySelector("div");
        let a = document.createElement("p");
        a.textContent = "Enter the mail ID";
        b.appendChild(a);
    }
    let pass = document.forms["login"]["pass"].value;
    if (pass == "") {
        let b = document.querySelector("div");
        let a = document.createElement("p");
        a.textContent = "Enter the password";
        b.appendChild(a);
    }
}