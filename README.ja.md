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
    - 何らかの処理を行う引数 `(event, context)` を持つ関数。
    - デフォルトは `event` をログ出力する。

## License

MIT
