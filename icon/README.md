## @kingmojang/icon

### Install

```bash
yarn add @kingmojang/icon
```

### Usage

```js
import {
  IconKingmojangLogo,
  IconKingmojangWithTextLogo,
} from "@kingmojang/icon";

import * as Styles from "./styles.css";

const App = () => (
  <>
    <IconKingmojangLogo width={24} />
    <IconKingmojangWithTextLogo className={Styles.logo} />
  </>
);
```

### 새로운 아이콘 추가하기

1. 피그마에서 svg export 후에 svg 파일에 넣고, 이름을 바꾼다 (ex: `icon-kingmojang-logo.svg`, IconKingmojangLogo로 컴포넌트 생성됨)
2. `yarn build`를 실행한다.
3. import해서 사용한다.
