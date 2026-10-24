console.log("Hello world");

let nilai = 70;

nilai = 80;
console.log(nilai);

// const nim = "A11.2026.16980";

// console.log(nim);

// nim = "B11.2026.8989";

// console.log(nim);

let nama = "Shiko";
console.log(nama);

let desimal = 3.80;
console.log(desimal);

let matkul = ["matriks", "pwt", 1];
console.log(matkul);

let lulus = true;
let gaklulus = false;

console.log(lulus);
console.log(gaklulus);

let alamat = null;
console.log(alamat);

let email;
console.log(email);

let mahasiswa = {
    nama: "Shiko",
    umur: 18,
    jurusan: "STI",
};

console.log(mahasiswa.umur);

let nilaiMatkul = 80;

if (nilaiMatkul > 70) {
    console.log("Lulus");
} else {
    console.log("TidakLulus");
    
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let sisaKuota = 3;
while (sisaKuota > 0) {
    console.log(sisaKuota);
    sisaKuota--;
}

function name() {
    console.log("Hallo!");
}

name();
name();

const judul = document.getElementById("judul")
judul.textContent = "Data Mahasiswa";

const mhs = document.querySelector(".mhs")
mhs.style.color = "blue";

const paragraf = document.createElement("p");

const title = document.getElementById("title");

const btnAdd = document.getElementById("btn-add");

btnAdd.addEventListener("click", function()); {
    title.classList.add("active");
};