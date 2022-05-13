# validate-html-nesting

- Test a parent-child nesting is valid html or not
- it only considers the nesting "invalid" if browser automatically "fixes" it. Other nestings such as `h1 > div` though technically invalid as per HTML spec, it's still considered valid because the browser does not fix it
- supports all tags, including svg

<br/>

## Install

```bash
npm i validate-html-nesting
```

<br/>

## API

```javascript
isValidHTMLNesting(parentTag: string, childTag: string) : boolean
```

<br/>

## Usage Example

```javascript
import { isValidHTMLNesting } from 'validate-html-nesting';

isValidHTMLNesting('a', 'a'); // false
// because <a> can not be child of <a>

isValidHTMLNesting('p', 'hr'); // false
// because <hr> can not be child of <p>

isValidHTMLNesting('div', 'a'); // true
// because <a> can be child of <div>
```

<br/>

## Tests

Refer to [validation.test.js](/tests/validation.test.js) to see full test suite
