const { svgTags } = require('./svg-tags');
const {
	onlyValidChildren,
	onlyValidParents,
	knownInvalidChildren,
	knownInvalidParents,
} = require('./mapping');

/**
 * returns true if given parent-child nesting is valid html
 * @param {string} child
 * @param {string} parent
 * @returns {boolean}
 */
function isValidHTMLNesting(parent, child) {
	// if we know the list of children that are the only valid chidren for given parent
	if (parent in onlyValidChildren) {
		return onlyValidChildren[parent].has(child);
	}

	// if we know the list of parents that are the only valid parents for given child
	if (child in onlyValidParents) {
		return onlyValidParents[child].has(parent);
	}

	// if we know the lsit of children that not valid for given parent
	if (parent in knownInvalidChildren) {
		// check if child is in the list of invalid children
		// if so, return false
		if (knownInvalidChildren[parent].has(child)) return false;
	}

	// if we know list of parents that are not valid for given children
	if (child in knownInvalidParents) {
		// check if parent is in the list of invalid parents
		// if so, return false
		if (knownInvalidParents[child].has(parent)) return false;
	}

	// svg tags should only contain svg tags
	if (svgTags.has(parent) && child !== "a" && !svgTags.has(child)) {
		return false;
	}

	return true;
}

module.exports = {
	isValidHTMLNesting,
};
