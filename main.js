// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
// console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1() {
    let total = 0;
    let avg;
    for (let i = 0 ; i < data.length ; i++) {
        total = total + data[i].price;
    }
    avg = total / data.length;
    console.log(avg);
}

// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  // create a arrey to get info.
  let array = [];
  for (let i = 0 ; i < data.length; i ++ ) {
      if (( data[i].price >= 14.00 ) && ( data[i].price <= 18.00)){
      array.push(data[i].title);
    }
  }
  console.log(array);
  //let them go through 25 item of array
  //compare >=14 and less then 18 dollars
  //push then to the array to show.
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
    let item = [];
    let object = {};
    for (let i = 0 ; i < data.length ; i++) {
        if (data[i].currency_code === "GBP") {
            // item.push(data[i].title, data[i].price);
         object = item.name = data[i].title,
         object = item.price = data[i].price
        item.push(object);
        }
    }
      console.log(item);
  }

    //check data which item have GBP code for currency_code
    //find the product name
    //create array store name and price inside.
    //print them out.
  // Answer:


// 4: Display a list of all items who are made of wood.
function question4 () {
 let tree = [];
 for (let i = 0; i < data.length; i++) {
   let materials = data[i].materials
   for (let j = 0; j < materials.length; j++) {
     if (materials[j] === "wood") {
       tree.push(data[i].title);
     }
   }
 }
 console.log(tree);
}


// function question4 () {
//     let material = [];
//     for (let i = 0 ; i < data.length ; i ++) {
//     for (let j = 0; j < data[i].materials.length ; j++) {
//         if (data[i].materials[j] === "wood") {
//             material.push(data[i].title);
//             // material.push(data[j].materials);
//         }
//       }
//     }
// }
// console.log(question4());
// Answer:
//set for a wood
//set a condition
//add them into array
// print them out


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5() {
    // set a value for array
    // check which item have 8 material (length = 8)
    // add them inside array with title and material
    // print it out
    let etsy = [];
    let items = [];
    for (let i = 0 ; i < data.length ; i++) {
        if (data[i].materials.length  >= 8) {
            etsy.push(data[i].title);
            items.push(data[i].materials);
            // items.name = data[i].title,
            // items.amount = data[i].materials
            // etsy.push(item);

        //  etsy.push("item name :" data[i].title + "how many item : " + etsy.length + "item material : " + data[i].materials)
    }
  // Answer:

}  console.log("Item: " + etsy[0] + " " +  items[0] + " item2 :" + etsy[1] + " " +  items[1]) ;
// console.log("item : " + etsy + "Total item : " + etsy.length + "material : " + items );
}
console.log(question5());


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  // set array
  // got through loops
  // condition  who_made = i_did
  //console.log
  let made = [];
  for (let i = 0 ; i < data.length ; i ++) {
      if (data[i].who_made === "i_did") {
          made.push(data[i].title);
      }
  }
  console.log(made.length);
}

console.log(question6() + "items were made by their sellers.");
