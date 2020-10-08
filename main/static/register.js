function clearele() {
    let d = document.querySelectorAll(".register p");
    if (d != null) {
        d.forEach((d) => {
            d.textContent = "";
        });
    }
}

function validate() {
    clearele();
    event.preventDefault();
    let name = document.forms["register"]["name"].value;
    if (name == "") {
        let b = document.querySelector("div");
        let a = document.createElement("p");
        a.textContent = "Enter the name";
        b.appendChild(a);
    } else {
        if (name.length < 3) {
            let b = document.querySelector("div");
            let a = document.createElement("p");
            a.textContent = "Enter the valid name";
            b.appendChild(a);
        }
    }
    let mail = document.forms["register"]["email"].value;
    if (mail == "") {
        let b = document.querySelector("div");
        let a = document.createElement("p");
        a.textContent = "Enter the mail ID";
        b.appendChild(a);
    }
    let pass = document.forms["register"]["pass"].value;
    if (pass == "") {
        let b = document.querySelector("div");
        let a = document.createElement("p");
        a.textContent = "Enter the password";
        b.appendChild(a);
    } else {
        let l = 0,
            u = 0,
            lo = 0,
            n = 0;
        if (pass.length < 8) {
            l = 1;
        }
        for (i of pass) {
            if (i.match(/[0-9]/g) && n === 0) {
                n = 1;
            } else if (i.match(/[A-Z]/g) && u === 0) {
                u = 1;
            } else if (i.match(/[a-z]/g) && lo === 0) {
                lo = 1;
            }
        }
        if (l == 0) {
            let b = document.querySelector("div");
            let a = document.createElement("p");
            a.textContent = "Enter password length more than 8";
            b.appendChild(a);
        }
        if (lo == 0) {
            let b = document.querySelector("div");
            let a = document.createElement("p");
            a.textContent = "Enter a lowercase in password";
            b.appendChild(a);
        }
        if (u == 0) {
            let b = document.querySelector("div");
            let a = document.createElement("p");
            a.textContent = "Enter a uppercase in password";
            b.appendChild(a);
        }
        if (n == 0) {
            let b = document.querySelector("div");
            let a = document.createElement("p");
            a.textContent = "Enter a number in password";
            b.appendChild(a);
        }
    }
    let passw = document.forms["register"]["passw"].value;
    let b = document.querySelector("div");
    let a = document.createElement("p");
    if (passw == "") {
        let b = document.querySelector("div");
        let a = document.createElement("p");
        a.textContent = "Re-Enter the password";
        b.appendChild(a);
    } else {
        if (!(pass === passw)) {
            let b = document.querySelector("div");
            let a = document.createElement("p");
            a.textContent = "Passwords do not match";
            b.appendChild(a);
        }
    }
}