This repo demonstrates failing snapshot tests when coverage is enabled in the Jest configuration (see `package.json`).

This has been created in response to https://github.com/facebook/jest/issues/1740#issuecomment-266288149 and https://github.com/facebook/jest/issues/2291.

The snapshots have been created with the `coverage` option set to `false`.
The issue can be seen when running `npm test` and observing the output of a nested functional component that now renders with the name `<Component />` rather than `<FunctionalComponent />` that was captured in the original snapshot.

Note that the snapshot created by using `react-test-renderer` does not have this issue, it only can be seen when using enzyme.
