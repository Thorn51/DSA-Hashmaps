const HashMap = require("./main");

function main() {
  let lotr = new HashMap();

  lotr.MAX_LOAD_RATIO = 0.5;
  lotr.SIZE_RATIO = 3;

  lotr.set("Hobbit", "Bilbo");
  lotr.set("Hobbit", "Frodo");
  lotr.set("Wizard", "Gandolf");
  lotr.set("Human", "Strider");
  lotr.set("Elf", "Legolas");
  lotr.set("Mair", "The Necromancer");
  lotr.set("Mair", "Sauron");
  lotr.set("RingBearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfElven", "Arwen");
  lotr.set("Ent", "Treebeard");

  //   console.log(lotr);

  let mair = lotr.get("Mair");
  let hobbit = lotr.get("Hobbit");

  console.log("Mair ->", mair, "Hobbit ->", hobbit);
}
main();
