import { uniqueNamesGenerator, colors, animals } from "unique-names-generator";

const seed1 = "0_1B:10_2B:12_3B:5_4B:5_ST:6";
const seed2 = "0_1B:10_2B:10_3B:6_4B:5_ST:7";

const name1 = uniqueNamesGenerator({
  dictionaries: [colors, animals],
  seed: seed1,
});

const name2 = uniqueNamesGenerator({
  dictionaries: [colors, animals],
  seed: seed2,
});

if (seed1 === seed2) {
  throw new error("Same seeds provided");
}

console.log("name1:", name1, "name2:", name2);

if (name1 === name2) {
  console.log("Same name generated for different seed  😲");
} else {
  console.log("Different names generated for different seeds");
}
