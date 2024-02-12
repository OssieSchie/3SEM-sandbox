//const fullName = "John Olsen Mogensen";
// const fullName = "JohN OLsEn moGEnsEn";
// console.log(fullName.lastIndexOf(`M`));

//  //----------------------------

//  console.log(`*`.repeat(fullName.length));

//  const str1 = "a, b, c, d, e, f, g";
//  console.log(str1.split(`,`));
//  console.log(str1.toUpperCase());
//  console.log(fullName.toUpperCase());

//FIND THE BEGINNING OF THE LAST NAME
// 4: name.lastIndexOf()

//CREATE A STRING OF A SPECIFIC NUMBER OF "*"
// 8: string.repeat/string.slice

//SEPERATE A LIST OF COMMA SEPERATED WORDS IN TO AN ARRAY OF INDIVIDUAL ITEMS
// 12.string.split(`,`)

//CONVERT A STRING TO ONLY CAPITAL LETTERS
// 15: string.toUpperCase()


// console.log(fullName.toLowerCase, fullName.toUpperCase[0]);
// console.log(fullName.charAt(0).toUpperCase() + fullName.slice(1).toLowerCase());

//------------------------------------------------------

const fullName = "Peter Heronimous Lind";
const firstName = fullName.substring(0, fullName.indexOf(" "));
const middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));
const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);
// const firstName = fullName.substring(0, fullName.indexOf(" "));
// const middleName = fullName.substring(fullName.indexOf("H"),16);
// const lastName = fullName.substring(fullName.indexOf("L"));

console.log(firstName);
console.log(middleName);
console.log(lastName);

//------------------------------------------------------

const splitter = "peter";
console.log(splitter.slice(0,2) + splitter.charAt(2).toUpperCase() + splitter.slice(3))


const splitter2 = "John Olsen Jadda Jadda";
console.log(splitter2.charAt(0).toUpperCase() + splitter2.slice(1).toLowerCase())
         