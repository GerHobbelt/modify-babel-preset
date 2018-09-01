var babelCore;
try { babelCore = require('@gerhobbelt/babel-core'); } catch(err) {}

module.exports = function normalizePreset(preset, context, options) {
	if (!context) context = babelCore;

	if (preset && typeof preset==='object' && (preset.buildPreset || preset.default)) {
		preset = preset.buildPreset|| preset.default;
	}

	if (typeof preset==='function') {
		preset = preset(context, options || {});
	}

	return preset;
};
