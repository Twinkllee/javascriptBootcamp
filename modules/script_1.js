var ogrenciAd_1 = "Ada";
var ogrenciSoyad_1 = "Bilgi";
var ogrenciDogumTarihi_1 = "2012"
var ogrenci1_matematik1 = 70
var ogrenci1_matematik2 = 70
var ogrenci1_matematik3 = 80
var ogrenci1_ortalama = (ogrenci1_matematik1 + ogrenci1_matematik2 + ogrenci1_matematik3) / 3
console.log(ogrenci1_ortalama);

var mevcutYil = new Date().getFullYear();

var ogrenciAd_2 = "Yigit";
var ogrenciSoyad_2 = "Bilgi";
var ogrenciDogumTarihi_2 = "2010"
var ogrenci2_matematik1 = 40
var ogrenci2_matematik2 = 40
var ogrenci2_matematik3 = 50
var ogrenci2_ortalama = (ogrenci2_matematik1 + ogrenci2_matematik2 + ogrenci2_matematik3) / 3
console.log(ogrenci2_ortalama);

var ogrenci1_yas = mevcutYil - parseInt(ogrenciDogumTarihi_1);
var ogrenci2_yas = mevcutYil - parseInt(ogrenciDogumTarihi_2);
console.log(ogrenci2_yas);
console.log(ogrenci1_yas);

console.log(ogrenci1_ortalama >=50) 
console.log(ogrenci2_ortalama >=50) 
