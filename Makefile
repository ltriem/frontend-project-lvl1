install: 
	npm install

publish:
	npm publish --dry-run

brain-calc:
	npx babel-node src/bin/brain-calc.js

brain-even:
	npx babel-node src/bin/brain-even.js

brain-progression:
	npx babel-node src/bin/brain-progression.js

brain-gcd:
	npx babel-node src/bin/brain-gcd.js

brain-prime:
	npx babel-node src/bin/brain-prime.js

lint:
	npx eslint .