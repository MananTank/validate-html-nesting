const headings = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);
const emptySet = new Set([]);

/**
 * maps element to set of elements that can be it's children, no other */
const onlyValidChildren = {
	head: new Set([
		'base',
		'basefront',
		'bgsound',
		'link',
		'meta',
		'title',
		'noscript',
		'noframes',
		'style',
		'script',
		'template',
	]),
	optgroup: new Set(['option']),
	select: new Set(['optgroup', 'option']),
	math: new Set(['mrow']),
	script: new Set(),
	// table
	table: new Set(['caption', 'colgroup', 'tbody', 'tfoot', 'thead']),
	tr: new Set(['td', 'th']),
	colgroup: new Set(['col']),
	tbody: new Set(['tr']),
	thead: new Set(['tr']),
	tfoot: new Set(['tr']),
	// these elements can not have any children elements
	iframe: emptySet,
	option: emptySet,
	textarea: emptySet,
	style: emptySet,
	title: emptySet,
};

/** maps elements to set of elements which can be it's parent, no other */
const onlyValidParents = {
	// sections
	html: emptySet,
	body: new Set(['html']),
	head: new Set(['html']),
	// table
	td: new Set(['tr']),
	colgroup: new Set(['table']),
	caption: new Set(['table']),
	tbody: new Set(['table']),
	tfoot: new Set(['table']),
	col: new Set(['colgroup']),
	th: new Set(['tr']),
	thead: new Set(['table']),
	tr: new Set(['tbody', 'thead', 'tfoot']),
	// data list
	dd: new Set(['dl']),
	dt: new Set(['dl']),
	// other
	figcaption: new Set(['figure']),
	// li: new Set(["ul", "ol"]),
	summary: new Set(['details']),
	area: new Set(['map']),
};

/** maps element to set of elements that can not be it's children, others can */
const knownInvalidChildren = {
	p: new Set([
		'address',
		'article',
		'aside',
		'blockquote',
		'center',
		'details',
		'dialog',
		'dir',
		'div',
		'dl',
		'fieldset',
		'figure',
		'footer',
		'form',
		'h1',
		'h2',
		'h3',
		'h4',
		'h5',
		'h6',
		'header',
		'hgroup',
		'input',
		'hr',
		'li',
		'main',
		'nav',
		'menu',
		'ol',
		'p',
		'pre',
		'section',
		'table',
		'ul',
	]),
};

/** maps element to set of elements that can not be it's parent, others can */
const knownInvalidParents = {
	a: new Set(['a']),
	button: new Set(['button']),
	dd: new Set(['dd', 'dt']),
	dt: new Set(['dd', 'dt']),
	form: new Set(['form']),
	li: new Set(['li']),
	h1: headings,
	h2: headings,
	h3: headings,
	h4: headings,
	h5: headings,
	h6: headings,
};

module.exports = {
	onlyValidChildren,
	onlyValidParents,
	knownInvalidChildren,
	knownInvalidParents,
};
