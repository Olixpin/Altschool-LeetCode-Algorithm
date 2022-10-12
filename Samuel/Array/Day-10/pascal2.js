var getRow = function(rowIndex) {
	var res = Array(rowIndex + 1);
	var i = 0;
	var j = 0;
	for (i = rowIndex; i >= 0; i--) {
		res[i] = 1;
		for (j = i + 1; j < rowIndex; j++) {
			res[j] += res[j + 1];
		}
	}
	return res;
};