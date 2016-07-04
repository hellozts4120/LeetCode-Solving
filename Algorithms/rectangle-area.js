/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    var width = (C - A) + (G - E) - Math.abs(Math.max(G, C) - Math.min(E, A));
    var height = (D - B) + (H - F) - Math.abs(Math.max(H, D) - Math.min(F, B));
    width < 0 && (width = 0);
    height < 0 && (height = 0);
    
    return (C - A) * (D - B) + (G - E) * (H - F) - width * height;
};