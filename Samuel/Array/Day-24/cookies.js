var findContentChildren = function(g, s) {
    let compare = function(a, b) {return b - a};
    g.sort(compare);
    s.sort(compare);
    var j = 0;
    for (var i = 0; i < g.length; i++) {
        if (g[i] <= s[j]) j++;
    }
    return j;
};
