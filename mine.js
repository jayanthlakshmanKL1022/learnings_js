const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5,user:{name:"asjw"} },
  { name: "fish", type: "meat", quantity: 22 ,user:{name:"asjw"}},
];

const result = Object.groupBy(inventory, (item) => item?.user?.name);
console.log(result)
