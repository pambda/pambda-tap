# pambda-tap

Tap for Pambda.

## Installation

```
npm i pambda-tap -S
```

## Usage

``` javascript
import { compose, createLambda } from 'pambda';
import { tap } from 'pambda-tap';

export const handler = createLambda(
  compose(
    tap(),
    // Other pambdas
  )
)
```

## License

MIT
