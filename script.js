const dani = ["Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota", "Nedjelja"];

function ispis(broj) {
  const naziv = dani[broj - 1];
  console.log("Dan: " + naziv);
  console.log(broj <= 5 ? "Radni dan" : "Neradni dan");

  if (broj === 1) console.log("Ja najviše volim JS od svih programskih jezika");
  if (broj === 4) console.log("Mali petak!");
  if (broj === 5) console.log("Vikend na Vidiku!");
}
let danas = new Date().getDay();
if (danas === 0) danas = 7;
ispis(danas);

if (unos !== "" && !isNaN(unos)) {
  const n = Number(unos);
  if (Number.isInteger(n) && n >= 1 && n <= 17) {
    const dan = ((n - 1) % 7) + 1;
    console.log("Broj " + n + " je " + dani[dan - 1]);
    ispis(dan);
     } 
  else {
    console.log("Greška: unesi cijeli broj od 1 do 17!");
    }
  } 
  else {
  const i = dani.findIndex(d => d.toLowerCase() === unos.toLowerCase());
  if (i !== -1) {
    console.log(dani[i] + " je dan broj " + (i + 1));
    ispis(i + 1);
  } else {
    console.log("Greška: nepoznat naziv dana!");
  }
}