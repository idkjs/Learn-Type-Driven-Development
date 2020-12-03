'use strict';


function makePerson(id, name) {
  return {
          id: id,
          name: name
        };
}

exports.makePerson = makePerson;
/* No side effect */
