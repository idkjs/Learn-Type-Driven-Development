/* src/Ch05/Ch05_PolymorphicVariantBasics.re */
let colour = `Red; /* (1) */
let angle = `degrees(45.0); /* (2) */

type event = [
  | `clickTap /* (3) */(int, int) /* x, y */ /* x1, y1, x2, y2 */
  | `keypress /* (3) */ /* x, y */(char) /* x1, y1, x2, y2 */
  | `pointerMove /* (3) */ /* x, y */(int, int, int, int) /* x1, y1, x2, y2 */
];

type mobileEvent = [
  event
  | `deviceShake /* (4) */(int) /* how many times */ /* m/s^2 */
  | `accel /* (4) */ /* how many times */(float) /* m/s^2 */
];

let pressA: mobileEvent = `keypress('a'); /* (5) */
/* let shakeThrice: event = `deviceShake(3); /* (6) */ */
