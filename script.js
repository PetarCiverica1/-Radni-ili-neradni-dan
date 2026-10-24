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