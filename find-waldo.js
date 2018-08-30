// The second argument/parameter is expected to be a function
function findWaldo(arr, found)
{
  arr.forEach(function(element) 
  { 
    if (element === "Waldo")
    {
      found(arr, element);   // execute callback
    }
  });
}

function actionWhenFound(item, thing) {
  console.log("Found Waldo at index " + item.indexOf(thing) + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
