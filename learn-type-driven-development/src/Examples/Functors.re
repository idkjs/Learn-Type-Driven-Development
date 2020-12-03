module IntSet =
   Set.Make(
     {
       let compare = Pervasives.compare;
       type t = int;
     }
 );

let myIntSet = IntSet.of_list([1,2,3]);
Js.log(myIntSet)
/**
 node src/Examples/Functors.bs.js
{
  l: 0,
  v: 1,
  r: { l: 0, v: 2, r: { l: 0, v: 3, r: 0, h: 1 }, h: 2 },
  h: 3
}

*/
module type Comparable = {
   type t;
   let equal: (t, t) => bool;
 };

module MakeSet = (Item: Comparable) => {
   /* 1 */
   type backingType = list(Item.t);
   let empty = [];
   let add = (currentSet: backingType, newItem: Item.t) : backingType =>
     if (List.exists((x) => Item.equal(x, newItem), currentSet)) {
       currentSet /* 2 */
     } else {
       [
         newItem,
         ...currentSet /* 3 */
       ]
     };
 };

module IntPair = {
   type t = (int, int);
   let equal = ((x1, y1), (x2, y2)) => x1 == x2 && y1 == y2;
   let create = (x, y) => (x, y);
 };

module SetOfIntPairs = MakeSet(IntPair);

let aSetOfPairItems: SetOfIntPairs.backingType = SetOfIntPairs.empty;
Js.log(aSetOfPairItems);
let otherSetOfPairItems = SetOfIntPairs.add(aSetOfPairItems, (1, 2));
Js.log(otherSetOfPairItems);
let thirdSetOfPairItems = SetOfIntPairs.add(otherSetOfPairItems, (2, 3));
Js.log(thirdSetOfPairItems);
