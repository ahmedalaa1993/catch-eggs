function collision(div1, div2) {
    var $div1 = div1.getBoundingClientRect() ; 
    var $div2 = div2.getBoundingClientRect() ; 
    var x1 = $div1.x;
    var y1 = $div1.y;
    var h1 = $div1.height;
    var w1 = $div1.width;
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.x;
    var y2 = $div2.y;
    var h2 = $div2.height;
    var w2 = $div2.width;
    var b2 = y2 + h2;
    var r2 = x2 + w2;
    
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;

    return true;
}
