function salam() {
    alert('Selamat Pagi');
}

let npm = "2125250087";
let umur = "19";
let Status = "true";
let hobi = ['baca, ngoding'];
let mahasiswa = {
    nama: 'Nur Aisyah',
    umur: '19',
    hobi: ['jalan-jalan']
};

document.getElementById('npm').innerHTML = npm;
document.getElementById('umur').innerHTML = umur;
document.getElementById('status').innerHTML = Status;
document.getElementById('hobi').innerHTML = hobi[0];

document.getElementById('mahasiswa').innerHTML = mahasiswa.nama + ', ' + mahasiswa.umur + ', ' + mahasiswa.hobi[0];

hobi.forEach(tampilHobi)

function tampilHobi1(item, index) {
    console.log(item + "" + index);
}

// function tampilHobi2() {
for (let x in hobi) {
    console.log(x);
}
// }

for (let y in mahasiswa) {
    console.log(mahasiswa[hobi][1]);
}