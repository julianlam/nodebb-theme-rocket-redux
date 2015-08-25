var nconf = module.parent.require('nconf'),
	path = module.parent.require('path'),
	categories = module.parent.require('./categories'),
	Theme = {};

Theme.updateCategories = function(data, callback) {
	// Go through all categories' classes, and assign card-black or card-white if it doesn't have one already
	var apiCategories = data.templateData.categories,
		hasCardClass = /card-(white|black)/,
		hasInvertClass = /card-invert/,
		someColours = ['#ec6917', '#d928dc', '#ffffff', '#4fe9e6', '#61a50b', '#000000', '#ab13c1', '#5cc586', '#0090ff', '#856f41', '#dd4141'],
		colourIncr = 0,
		x = 0;

	categories.isIgnored(apiCategories.map(function(category) {
		return category.cid;
	}), data.req.uid, function(err, ignored) {
		ignored.forEach(function(state, idx) {
			apiCategories[idx].isIgnored = state;
		});
	});

	apiCategories.forEach(function(category) {
		if (!hasCardClass.test(category.class)) {
			category.class += ' card-' + (x ? 'white' : 'black');
		}

		if (!hasInvertClass.test(category.class) && x) {
			category.class += ' card-invert';
		}

		// Little known fact -- when NodeBB creates a category, it assigns a text colour value of #fff,
		// but the colour selector saves #ffffff, so if the value is #fff, then the user simply hasn't
		// changed it yet, so let's randomly assign one.
		if (category.color === '#fff') {
			category.color = someColours[colourIncr];
			if (colourIncr === someColours.length) {
				colourIncr = 0;
			} else {
				colourIncr++;
			}
		}

		x = x ^ 1; // flip da bit
	});

	callback(null, data);
};

module.exports = Theme;