# deep-assign-v2

[![Build Status](https://travis-ci.org/banxi1988/deep-assign-v2.svg?branch=master)](https://travis-ci.org/banxi1988/deep-assign-v2)

Object.assign 's like deep version

## Installation

1.  `npm i deep-assign-v2 -S`
2.  `yarn add deep-assign-v2`

## Usage

### JavaScript

```js
const deep_assign = require("deep-assign-v2").default;

it("deep assign override", () => {
  const objA = {
    a: "a",
    b: "b",
    c: { name: "coco" },
    d: { willLost: "anyvalue" }
  };
  const objB = { a: "newA", b: { name: "banxi", age: 18 }, d: "replace" };
  deep_assign(objA, objB);
  assert.deepEqual(objA, {
    a: "newA",
    b: { name: "banxi", age: 18 },
    c: { name: "coco" },
    d: "replace"
  });
});
it("deep assign merge", () => {
  const objA = { a: "a", b: { gender: "male" }, c: { name: "coco" } };
  const objB = { a: "newA", b: { name: "banxi", age: 18 } };
  deep_assign(objA, objB);
  assert.deepEqual(objA, {
    a: "newA",
    b: { name: "banxi", age: 18, gender: "male" },
    c: { name: "coco" }
  });
});
```

### TypeScript

```ts
import "date-assign-v2";
```

### Full check api list

[api list](https://github.com/banxi1988/deep-assign-v2/blob/master/dist/index.d.ts)

## Test

`npm run test`
