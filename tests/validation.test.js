const { isValidHTMLNesting } = require('../src/index');

test('form', () => {
	// invalid
	expect(isValidHTMLNesting('form', 'form')).toBe(false);

	// valid
	expect(isValidHTMLNesting('form', 'div')).toBe(true);
	expect(isValidHTMLNesting('form', 'input')).toBe(true);
	expect(isValidHTMLNesting('form', 'select')).toBe(true);
	expect(isValidHTMLNesting('form', 'button')).toBe(true);
	expect(isValidHTMLNesting('form', 'label')).toBe(true);
	expect(isValidHTMLNesting('form', 'h1')).toBe(true);
});

test('p', () => {
	// invalid
	expect(isValidHTMLNesting('p', 'p')).toBe(false);
	expect(isValidHTMLNesting('p', 'div')).toBe(false);
	expect(isValidHTMLNesting('p', 'hr')).toBe(false);
	expect(isValidHTMLNesting('p', 'input')).toBe(false);
	expect(isValidHTMLNesting('p', 'blockquote')).toBe(false);
	expect(isValidHTMLNesting('p', 'pre')).toBe(false);

	// valid
	expect(isValidHTMLNesting('p', 'a')).toBe(true);
	expect(isValidHTMLNesting('p', 'span')).toBe(true);
	expect(isValidHTMLNesting('p', 'abbr')).toBe(true);
	expect(isValidHTMLNesting('p', 'button')).toBe(true);
	expect(isValidHTMLNesting('p', 'b')).toBe(true);
	expect(isValidHTMLNesting('p', 'i')).toBe(true);
});

test('a', () => {
	// invalid
	expect(isValidHTMLNesting('a', 'a')).toBe(false);

	// valid
	expect(isValidHTMLNesting('a', 'div')).toBe(true);
	expect(isValidHTMLNesting('a', 'span')).toBe(true);
});

test('button', () => {
	// invalid
	expect(isValidHTMLNesting('button', 'button')).toBe(false);

	// valid
	expect(isValidHTMLNesting('button', 'div')).toBe(true);
	expect(isValidHTMLNesting('button', 'span')).toBe(true);
});

test('table', () => {
	// invalid
	expect(isValidHTMLNesting('table', 'tr')).toBe(false);
	expect(isValidHTMLNesting('table', 'table')).toBe(false);
	expect(isValidHTMLNesting('table', 'td')).toBe(false);

	// valid
	expect(isValidHTMLNesting('table', 'thead')).toBe(true);
	expect(isValidHTMLNesting('table', 'tbody')).toBe(true);
	expect(isValidHTMLNesting('table', 'tfoot')).toBe(true);
	expect(isValidHTMLNesting('table', 'caption')).toBe(true);
	expect(isValidHTMLNesting('table', 'colgroup')).toBe(true);
});

test('td', () => {
	// valid
	expect(isValidHTMLNesting('td', 'span')).toBe(true);
	expect(isValidHTMLNesting('tr', 'td')).toBe(true);

	// invalid
	expect(isValidHTMLNesting('td', 'td')).toBe(false);
	expect(isValidHTMLNesting('div', 'td')).toBe(false);
});

test('tbody', () => {
	// invalid
	expect(isValidHTMLNesting('tbody', 'td')).toBe(false);

	// valid
	expect(isValidHTMLNesting('tbody', 'tr')).toBe(true);
});

test('tr', () => {
	// invalid
	expect(isValidHTMLNesting('tr', 'tr')).toBe(false);
	expect(isValidHTMLNesting('table', 'tr')).toBe(false);

	// valid
	expect(isValidHTMLNesting('tbody', 'tr')).toBe(true);
	expect(isValidHTMLNesting('thead', 'tr')).toBe(true);
	expect(isValidHTMLNesting('tfoot', 'tr')).toBe(true);
	expect(isValidHTMLNesting('tr', 'td')).toBe(true);
	expect(isValidHTMLNesting('tr', 'th')).toBe(true);
});

test('li', () => {
	// invalid
	expect(isValidHTMLNesting('li', 'li')).toBe(false);
	// valid
	expect(isValidHTMLNesting('li', 'div')).toBe(true);
	expect(isValidHTMLNesting('li', 'ul')).toBe(true);
});

test('svg', () => {
	// invalid
	expect(isValidHTMLNesting('svg', 'div')).toBe(false);
	expect(isValidHTMLNesting('svg', 'img')).toBe(false);
	expect(isValidHTMLNesting('svg', 'p')).toBe(false);

	// valid
	expect(isValidHTMLNesting('svg', 'a')).toBe(true);
	expect(isValidHTMLNesting('svg', 'g')).toBe(true);
	expect(isValidHTMLNesting('svg', 'ellipse')).toBe(true);
	expect(isValidHTMLNesting('div', 'svg')).toBe(true);
	expect(isValidHTMLNesting('section', 'svg')).toBe(true);
	expect(isValidHTMLNesting('section', 'feOffset')).toBe(true);
});

test('headings', () => {
	// invalid
	expect(isValidHTMLNesting('h1', 'h1')).toBe(false);
	expect(isValidHTMLNesting('h2', 'h1')).toBe(false);
	expect(isValidHTMLNesting('h3', 'h1')).toBe(false);
	expect(isValidHTMLNesting('h1', 'h6')).toBe(false);

	// valid
	expect(isValidHTMLNesting('h1', 'div')).toBe(true);
});
