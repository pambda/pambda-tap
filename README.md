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

## tap(tapper)

- `tapper`
    - A function with argument `(event, context)` that performs some processing.
    - The default is to log `event`.

## License

MIT
