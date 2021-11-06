function hitungvolume() {
  panjang = document.getElementById("panjang").value;
  lebar = document.getElementById("lebar").value;

tinggi = document.getElementById("tinggi").value;


  volume = panjang * lebar * tinggi;
  document.getElementById("volume").value = volume;
}