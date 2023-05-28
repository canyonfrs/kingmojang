import { style } from "@vanilla-extract/css";

export const wrapper = style({
  width: "444px",
  height: "270px",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const input = style({
  width: "100%",
  height: "42px",
  borderRadius: "8px",
  padding: "8px 18px",
  border: "1px solid",
});

export const search_result = style({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  padding: "4px",
  borderRadius: "8px",
  backgroundColor: "white",
  overflowY: "auto",
  overflowX: "hidden",

  // "::-webkit-scrollbar-track": {
  //   width: "500px",
  //   height: "30px",
  //   color: "red",
  //   backgroundColor: "red",
  // },
  // "::-webkit-scrollbar-thumb": {
  //   width: "4px",
  //   height: "30px",
  //   color: "red",
  //   backgroundColor: "red",
  // },
});

// const scrollbar = style({
//   // 스크롤바 너비
//   width: "10px",

//   // 스크롤바 트랙 배경색
//   backgroundColor: "#f1f1f1",

//   // 스크롤바 슬라이더 색상
//   "&::-webkit-scrollbar-thumb": {
//     backgroundColor: "#888",
//   },
// });

export const search_element = style({
  display: "flex",
  alignItems: "center",
  height: "36px",
  //   width: "100%",
  minWidth: "50px",
  width: "426px",
  //   backgroundColor: "#F3F3F3",
  borderRadius: "8px",
  padding: "4px 18px",
  "::-webkit-scrollbar": {
    width: "400px",
  },
});

export const search_content = style({
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
});
