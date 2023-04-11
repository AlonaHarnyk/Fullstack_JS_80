// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function(itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };

// invokeInventoryAction('Medkit', inventory.add);
// // Invoking action on Medkit
// // Adding Medkit to inventory

// // console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction('Gas mask', inventory.remove);
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// // console.log(inventory.items); // ['Knife', 'Medkit']

// // BIND

// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };

// invokeInventoryAction('Medkit', inventory.add.bind(inventory));


// // Invoking action on Medkit
// // Adding Medkit to inventory

// // console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
// // // Invoking action on Gas mask
// // // Removing Gas mask from inventory

// // // console.log(inventory.items); // ['Knife', 'Medkit']


// // CALL
// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   // console.log(this)
//   console.log(`Invoking action on ${itemName}`);
//   action.call(this, itemName);
// };

// invokeInventoryAction.call(inventory, 'Medkit', inventory.add);
// // Invoking action on Medkit
// // Adding Medkit to inventory

// // console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction.call(inventory, 'Gas mask', inventory.remove);
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// // console.log(inventory.items); // ['Knife', 'Medkit']

// APPLY
// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(this)
//   console.log(`Invoking action on ${itemName}`);
//   action.apply(this, [itemName]);
// };

// invokeInventoryAction.apply(inventory, ['Medkit', inventory.add]);
// // Invoking action on Medkit
// // Adding Medkit to inventory

// // console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction.apply(inventory, ['Gas mask', inventory.remove]);
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// // console.log(inventory.items); // ['Knife', 'Medkit']