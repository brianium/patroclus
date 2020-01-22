## Building

Install Node dependencies:

    npm install

### Development

    clojure -A:dev

### Release

    clojure -A:main
    clojure -A:renderer
    npm run package

### Run tests from command line (for CI)

    clojure -A:test
