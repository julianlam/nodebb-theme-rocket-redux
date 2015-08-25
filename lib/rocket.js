var nconf = module.parent.require('nconf'),
	path = module.parent.require('path'),
	Theme = {};

Theme.preinit = function(params, callback) {
	// This line ensures that if a template file is not found in this plugin, that it falls back to Persona's templates
	nconf.set('base_templates_path', path.join(nconf.get('themes_path'), 'nodebb-theme-persona/templates'));
	callback();
};

module.exports = Theme;