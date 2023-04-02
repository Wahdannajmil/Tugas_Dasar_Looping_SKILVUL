//NO1
// Kita sudah mengetahui bahwa banyaknya user maksimal adalah 100.
// Buat sebuah program yang menampilkan teks ‘User ke - 1 … User ke - 100’ pada setiap baris di halaman HTML.
// Lakukan FOR LOOP pada Javascript.

		for (var i = 1; i <= 100; i++) {
			// Menampilkan teks "User ke - i" pada console
			console.log("User ke - " + i);
			// Menambahkan teks "User ke - i" ke dalam body halaman HTML
			document.write("User ke - " + i + "<br>");
}
        
//NO2
// Lakukan pengulangan menggunakan FOR LOOP untuk melakukan penambahan nilai sebanyak 10 kali.
// Nilai awal = 0
// Pengulangan = 10 kali
// Nilai awal ditambah 2 setiap pengulangan
// Tampilan hasil penambahan pada setiap pengulangan

var nilaiAwal = 0;
var pengulangan = 10;

for (var i = 1; i <= pengulangan; i++) {
  nilaiAwal += 2;
  console.log("Hasil penambahan ke-" + i + ": " + nilaiAwal);
}

//NO3
// Lakukan pengulangan dengan FOR LOOP yang melakukan iterasi dari 0..20.
// Setiap iterasi/pengulangan lakukan pengecekan apakah nilai tersebut ganjil atau genap.
// Tampilkan keterangan ganjil dan genap pada sebuah nilai setiap pengulangan

for (var i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i + " adalah bilangan genap");
  } else {
    console.log(i + " adalah bilangan ganjil");
  }
}

//NO4
// Tampilkan sebuah Konfirmasi Pop Up kepada user menggunakan confirm();
// Berikan teks ‘Apakah anda mau mengulang’ pada box confirm
// Jika user memilih ‘OK’ maka program akan terus menampilan pop up yang sama
// Jika user memilih ‘Cancel’ maka program akan menampilkan teks ‘Perulangan sudah dilakukan sebanyak …(jumlah klik OK yang dilakukan user)

var count = 0;

function tampilkanPopUp() {
  var result = confirm("Apakah Anda mau mengulang?");
  if (result) {
    count++;
    tampilkanPopUp();
  } else {
    alert("Perulangan sudah dilakukan sebanyak " + count + " kali.");
  }
}

tampilkanPopUp();

//NO5
// Buat sebuah program kuis.
// Tampilkan prompt() untuk meminta inputan dari user. Tampilan teks ‘Sebutkan kepanjangan dari nama IB (Impact Byte)?’
// Lakukan pengecekan apakah jawaban dari user sudah benar
// Jika benar, tampilkan alert ‘Selamat jawaban kamu benar’
// Jika salah, lakukan pengulangan untuk menampilkan prompt() yg sama hingga jawaban dari user benar

var answer = "";
while (answer !== "Impact Byte") {
  answer = prompt("Sebutkan kepanjangan dari nama IB (Impact Byte)?");
  if (answer === "Impact Byte") {
    alert("Selamat jawaban kamu benar!");
  } else {
    alert("Maaf, jawaban kamu salah. Silahkan coba lagi.");
  }
}

