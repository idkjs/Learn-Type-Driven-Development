// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var $$Set = require("bs-platform/lib/js/set.js");
var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");

function AddAll(A) {
  var addAll = function (from, into) {
    return Curry._3(A.fold, (function (x, result) {
                  return Curry._2(A.add, x, result);
                }), from, into);
  };
  return {
          addAll: addAll
        };
}

var compare = Caml_obj.caml_compare;

var StringSet = $$Set.Make({
      compare: compare
    });

var elements = StringSet.elements;

var of_list = StringSet.of_list;

function addAll(from, into) {
  return Curry._3(StringSet.fold, (function (x, result) {
                return Curry._2(StringSet.add, x, result);
              }), from, into);
}

var StringSetPlus_empty = StringSet.empty;

var StringSetPlus_is_empty = StringSet.is_empty;

var StringSetPlus_mem = StringSet.mem;

var StringSetPlus_add = StringSet.add;

var StringSetPlus_singleton = StringSet.singleton;

var StringSetPlus_remove = StringSet.remove;

var StringSetPlus_union = StringSet.union;

var StringSetPlus_inter = StringSet.inter;

var StringSetPlus_diff = StringSet.diff;

var StringSetPlus_compare = StringSet.compare;

var StringSetPlus_equal = StringSet.equal;

var StringSetPlus_subset = StringSet.subset;

var StringSetPlus_iter = StringSet.iter;

var StringSetPlus_map = StringSet.map;

var StringSetPlus_fold = StringSet.fold;

var StringSetPlus_for_all = StringSet.for_all;

var StringSetPlus_exists = StringSet.exists;

var StringSetPlus_filter = StringSet.filter;

var StringSetPlus_partition = StringSet.partition;

var StringSetPlus_cardinal = StringSet.cardinal;

var StringSetPlus_min_elt = StringSet.min_elt;

var StringSetPlus_min_elt_opt = StringSet.min_elt_opt;

var StringSetPlus_max_elt = StringSet.max_elt;

var StringSetPlus_max_elt_opt = StringSet.max_elt_opt;

var StringSetPlus_choose = StringSet.choose;

var StringSetPlus_choose_opt = StringSet.choose_opt;

var StringSetPlus_split = StringSet.split;

var StringSetPlus_find = StringSet.find;

var StringSetPlus_find_opt = StringSet.find_opt;

var StringSetPlus_find_first = StringSet.find_first;

var StringSetPlus_find_first_opt = StringSet.find_first_opt;

var StringSetPlus_find_last = StringSet.find_last;

var StringSetPlus_find_last_opt = StringSet.find_last_opt;

var StringSetPlus = {
  empty: StringSetPlus_empty,
  is_empty: StringSetPlus_is_empty,
  mem: StringSetPlus_mem,
  add: StringSetPlus_add,
  singleton: StringSetPlus_singleton,
  remove: StringSetPlus_remove,
  union: StringSetPlus_union,
  inter: StringSetPlus_inter,
  diff: StringSetPlus_diff,
  compare: StringSetPlus_compare,
  equal: StringSetPlus_equal,
  subset: StringSetPlus_subset,
  iter: StringSetPlus_iter,
  map: StringSetPlus_map,
  fold: StringSetPlus_fold,
  for_all: StringSetPlus_for_all,
  exists: StringSetPlus_exists,
  filter: StringSetPlus_filter,
  partition: StringSetPlus_partition,
  cardinal: StringSetPlus_cardinal,
  elements: elements,
  min_elt: StringSetPlus_min_elt,
  min_elt_opt: StringSetPlus_min_elt_opt,
  max_elt: StringSetPlus_max_elt,
  max_elt_opt: StringSetPlus_max_elt_opt,
  choose: StringSetPlus_choose,
  choose_opt: StringSetPlus_choose_opt,
  split: StringSetPlus_split,
  find: StringSetPlus_find,
  find_opt: StringSetPlus_find_opt,
  find_first: StringSetPlus_find_first,
  find_first_opt: StringSetPlus_find_first_opt,
  find_last: StringSetPlus_find_last,
  find_last_opt: StringSetPlus_find_last_opt,
  of_list: of_list,
  addAll: addAll
};

var s1 = Curry._1(of_list, {
      hd: "a",
      tl: {
        hd: "b",
        tl: {
          hd: "c",
          tl: /* [] */0
        }
      }
    });

var s2 = Curry._1(of_list, {
      hd: "b",
      tl: {
        hd: "c",
        tl: {
          hd: "d",
          tl: /* [] */0
        }
      }
    });

Curry._1(elements, addAll(s2, s1));

function add(x, coll) {
  return {
          hd: x,
          tl: coll
        };
}

var AddSingleStringList = {
  empty: /* [] */0,
  fold: List.fold_right,
  add: add
};

function addAll$1(from, into) {
  return List.fold_right((function (x, result) {
                return {
                        hd: x,
                        tl: result
                      };
              }), from, into);
}

var StringListPlus = {
  length: List.length,
  compare_lengths: List.compare_lengths,
  compare_length_with: List.compare_length_with,
  cons: List.cons,
  hd: List.hd,
  tl: List.tl,
  nth: List.nth,
  nth_opt: List.nth_opt,
  rev: List.rev,
  init: List.init,
  append: List.append,
  rev_append: List.rev_append,
  concat: List.concat,
  flatten: List.flatten,
  iter: List.iter,
  iteri: List.iteri,
  map: List.map,
  mapi: List.mapi,
  rev_map: List.rev_map,
  fold_left: List.fold_left,
  fold_right: List.fold_right,
  iter2: List.iter2,
  map2: List.map2,
  rev_map2: List.rev_map2,
  fold_left2: List.fold_left2,
  fold_right2: List.fold_right2,
  for_all: List.for_all,
  exists: List.exists,
  for_all2: List.for_all2,
  exists2: List.exists2,
  mem: List.mem,
  memq: List.memq,
  find: List.find,
  find_opt: List.find_opt,
  filter: List.filter,
  find_all: List.find_all,
  partition: List.partition,
  assoc: List.assoc,
  assoc_opt: List.assoc_opt,
  assq: List.assq,
  assq_opt: List.assq_opt,
  mem_assoc: List.mem_assoc,
  mem_assq: List.mem_assq,
  remove_assoc: List.remove_assoc,
  remove_assq: List.remove_assq,
  split: List.split,
  combine: List.combine,
  sort: List.sort,
  stable_sort: List.stable_sort,
  fast_sort: List.fast_sort,
  sort_uniq: List.sort_uniq,
  merge: List.merge,
  addAll: addAll$1
};

addAll$1({
      hd: "a",
      tl: {
        hd: "b",
        tl: /* [] */0
      }
    }, {
      hd: "c",
      tl: {
        hd: "d",
        tl: /* [] */0
      }
    });

exports.AddAll = AddAll;
exports.StringSet = StringSet;
exports.StringSetPlus = StringSetPlus;
exports.s1 = s1;
exports.s2 = s2;
exports.AddSingleStringList = AddSingleStringList;
exports.StringListPlus = StringListPlus;
/* StringSet Not a pure module */
