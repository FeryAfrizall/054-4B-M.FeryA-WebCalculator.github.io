let equal_pressed = 0;
let button_input = document.querySelectorAll(".input-button");

let input =document.getElementById("input");
let equal =document.getElementById("equal");
let clear =document.getElementById("clear");
let erase =document.getElementById("erase");

window.onload = () => {
    input.value = "";
}

//akses setiap kelas menggunakan forEach
button_input.forEach((button_class) => {
    button_class.addEventListener("click", () => {
        if (equal_pressed == 1) {
            input.value = "";
            equal_pressed = 0;
        }
        //display hasil setiap diteka
        input.value += button_class.value;
    })
})

//solve user input ketika diklik
equal.addEventListener("click", () => {
    equal_pressed = 1;
    let inp_val =input.value;
    try {
        //eval user input
        let solution = eval(inp_val);
        //true untuk angka asli
        //salah untuk decimal
        if (Number.isInteger(solution)) {
            input.value = solution;
        } else {
            input.value = solution.toFixed(2);
        }
    } catch (err) {
        //jika user input tidak valid
      alert("input tidak valid");
    }
});

//bersihkan semua inputan
clear.addEventListener("click", () => {
    input.value = "";
})

//bersihkan setiap digit inputan
erase.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length - 1);
});
