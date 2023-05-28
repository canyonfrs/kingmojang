import { TextField } from "@kingmojang/ui";

import {
  input,
  search_content,
  search_element,
  search_result,
  wrapper,
} from "./Search.css";

function SearchResult() {
  return (
    <div className={search_element}>
      <span className={search_content}>
        풍월량이 하는 젤다 재밌다~ 어쩌구 저쩌구 어쩌구어쩌구 저쩌구 어쩌구
      </span>
    </div>
  );
}

export function SearchModal() {
  return (
    <div className={wrapper}>
      <TextField placeholder="Search" className={input} />
      <div className={search_result}>
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
      </div>
    </div>
  );
}
