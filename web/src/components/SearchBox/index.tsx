import { Form } from "@kingmojang/ui";

import * as Style from "./style.css";

export function SearchBox() {
  return (
    <Form className={Style.Container}>
      <input className={Style.InputStyle} placeholder="검색" />
      <button className={Style.ButtonStyle}>
        <img src="/images/search.png" />
      </button>
    </Form>
  );
}
