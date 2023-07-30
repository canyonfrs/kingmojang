import { IconSearch } from "@kingmojang/icon";
import { TextField } from "@kingmojang/ui";

import { COLOR } from "../../styles/theme.css";
import * as style from "./Search.css";

function SearchResult({
  content,
  keyword,
}: {
  content: string;
  keyword: string;
}) {
  const highlightText = content.replaceAll(
    keyword,
    `<span style="color: ${COLOR.Primary};">${keyword}</span>`,
  );
  return (
    <div className={style.searchElement}>
      <span
        className={style.searchContent}
        dangerouslySetInnerHTML={{
          __html: highlightText,
        }}
      />
    </div>
  );
}

const DUMMY_CONTENT =
  " 풍월량이 하는 젤다 재밌다~ 어쩌구 저쩌구 어쩌구어쩌구 저쩌구 어쩌구";
export function SearchModal() {
  return (
    <div className={style.wrapper}>
      <div className={style.input_wrapper}>
        <TextField placeholder="Search" className={style.input} />
        <IconSearch className={style.icon} />
      </div>
      <div
        style={{
          padding: "6px 5px",
          height: "100%",
          backgroundColor: "white",
          borderRadius: "8px",
        }}
      >
        <div className={style.search_result}>
          <SearchResult content={DUMMY_CONTENT} keyword="풍월량" />
          <SearchResult
            content="풍월량이 하는 젤다 재밌다~ 풍월량 저쩌구 어쩌구어쩌구  어쩌구"
            keyword="풍월량"
          />
          <SearchResult content={DUMMY_CONTENT} keyword="풍월량" />
          <SearchResult content={DUMMY_CONTENT} keyword="풍월량" />
          <SearchResult content={DUMMY_CONTENT} keyword="풍월량" />
          <SearchResult content={DUMMY_CONTENT} keyword="풍월량" />
          <SearchResult content={DUMMY_CONTENT} keyword="풍월량" />
          <SearchResult content={DUMMY_CONTENT} keyword="풍월량" />
          <SearchResult content={DUMMY_CONTENT} keyword="풍월량" />
          <SearchResult content={DUMMY_CONTENT} keyword="풍월량" />
          <SearchResult content={DUMMY_CONTENT} keyword="풍월량" />
          <SearchResult content={DUMMY_CONTENT} keyword="풍월량" />
        </div>
      </div>
    </div>
  );
}
