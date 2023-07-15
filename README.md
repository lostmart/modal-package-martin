## Description

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

The Modal Package is a lightweight and customizable package that allows you to easily display modal windows in your React applications. With this package, you can create and manage modal windows with minimal effort, providing a seamless user experience.

##Installation
To install the Modal Package, use the following command:

```bash
npm install modal-package-martin
```

## Usage

This project needs to use `useState` with a variable `showModal` to toggle the modal visibility

`const [showModal, setModal] = useState(false);`

and a function to change its visibility

```javascript
const handleClick = () => {
	setModal(() => !showModal)
}
```

The modal accepts three props:

- showModal (a boolean that respresents the modal visibility)
- onClick (a fn to change the modal visibility)
- children (the elements that will be displayed in the modal content)

```javascript
import Modal from 'modal-package-martin-test/dist/Modal'

// Example usage
const App = () => {
	const [showModal, setModal] = useState(false)

	const handleClick = () => {
		// Perform action to toggle modal
		setModal(() => !showModal)
	}

	return (
		<div className="container">
			<button onClick={handleClick}>Show Modal</button>
			<Modal showModal={showModal} onClick={handleClick}>
				{/* Modal content goes here */}
			</Modal>
		</div>
	)
}
```

Recomended html structure:

```html
<>
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
      </div>
      <div className="modal-body">
        <p>Modal body text goes here.</p>
      </div>
</>
```

The classes "modal-header", "modal\*title" and "modal-body" already have some default css rules than can be overridden using inle styling or regular a simple css file that targets these classes

## Package Details

### Package.json

```json
{
	"name": "modal-package",
	"version": "0.1.0",
	"dependencies": {
		"@testing-library/jest-dom": "^5.16.5",
		"@testing-library/react": "^13.4.0",
		"@testing-library/user-event": "^13.5.0",
		"web-vitals": "^2.1.4"
	},
	"scripts": {
		"start": "react-scripts start",
		"build": "rm -rf dist && NODE_ENV=production babel src/lib --out-dir dist --copy-files --ignore __tests__,spec.js,test.js,__snapshots__",
		"test": "react-scripts test",
		"eject": "react-scripts eject"
	},
	"eslintConfig": {
		"extends": ["react-app", "react-app/jest"]
	},
	"browserslist": {
		"production": [">0.2%", "not dead", "not op_mini all"],
		"development": [
			"last 1 chrome version",
			"last 1 firefox version",
			"last 1 safari version"
		]
	},
	"devDependencies": {
		"babel-cli": "^6.26.0",
		"react": "^18.2.0",
		"react-dom": "^18.2.0",
		"react-scripts": "5.0.1"
	},
	"main": "dist/index.js",
	"module": "dist/index.js",
	"files": ["dist", "README.md"],
	"repository": {
		"type": "git",
		"url": "URL_OF_YOUR_REPOSITORY"
	}
}
```

## Dependencies

The Modal Package has the following dependencies:

- [@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom): "^5.16.5"
- [@testing-library/react](https://www.npmjs.com/package/@testing-library/react): "^13.4.0"
- [@testing-library/user-event](https://www.npmjs.com/package/@testing-library/user-event): "^13.5.0"
- [web-vitals](https://www.npmjs.com/package/web-vitals): "^2.1.4"

## Dev Dependencies

The Modal Package has the following dev dependencies:

- [babel-cli](https://www.npmjs.com/package/babel-cli): "^6.26.0"
- [react](https://www.npmjs.com/package/react): "^18.2.0"
- [react-dom](https://www.npmjs.com/package/react-dom): "^18.2.0"
- [react-scripts](https://www.npmjs.com/package/react-scripts): "5.0.1"

## Repository

The Modal Package repository can be found at

- [https://github.com/lostmart/modal-package-martin](https://github.com/lostmart/modal-package-martin)

## Online Snadbox

- [https://codesandbox.io/s/modal-sample-g5m7nn](https://codesandbox.io/s/modal-sample-g5m7nn)
