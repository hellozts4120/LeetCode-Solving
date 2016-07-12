/**
 * @param {number} n - a positive integer
 * @return {number}
 */
//number-of-1-bits
var hammingWeight = function(n) {
    var m1 = 0x11 | (0x11 << 8);
  	var mask = m1 | (m1 << 16);
  	var s = n & mask;
  	s += (n >> 1) & mask;
  	s += (n >> 2) & mask;
  	s += (n >> 3) & mask;

  	s = s + (s >> 16);
  
  	mask = 0xF | (0xF << 8);
  	s = (s & mask) + ((s >> 4) & mask);
  	return (s + (s >> 8)) & 0x3F;
  
};