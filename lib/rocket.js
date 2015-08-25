var nconf = module.parent.require('nconf'),
	path = module.parent.require('path'),
	Theme = {};

Theme.updateCategories = function(data, callback) {
	// Go through all categories' classes, and assign card-black or card-white if it doesn't have one already
	var categories = data.templateData.categories,
		hasCardClass = /card-(white|black)/,
		x = 0;

	categories.forEach(function(category) {
		if (!hasCardClass.test(category.class)) {
			category.class += ' card-' + (x ? 'white' : 'black');
			x = x ^ 1; // flip da bit
		}
	});

	callback(null, data);
};

module.exports = Theme;