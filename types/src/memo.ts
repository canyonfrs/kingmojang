<<<<<<< HEAD
export type Memo = {
  title: string;
  content: string;
  fontName?: string;
  fontStyle?: string;
  fontSize?: number;
};

export interface GetMemoListRequest {
  accessToken: string;

  /**
   * @default 20
   */
  size?: number;
}

export type ServerMemo = Memo & {
  id: number;
  writer: string;
=======
interface IMemoSummary {
  id: number;
  title: string;
  writer: string;
  content: string;
>>>>>>> c04d715 (feat: memo type 정의)
  likeCount: number;
  commentCount: number;
  createdAt: string;
  updatedAt: string;
<<<<<<< HEAD
  isLike: boolean;
};

export interface GetMemoListResponse {
  memos: ServerMemo[];
}
=======
  fontName: "string";
  fontStyle: "string";
  fontSize: number;
  isLike: boolean;
}

interface IRecentMemo {
  status: "SUCCESS" | "ERROR";
  data: {
    memos: IMemoSummary[];
    hasNext: false;
    nextPage: number;
  };
}
export type { IMemoSummary, IRecentMemo };
>>>>>>> c04d715 (feat: memo type 정의)
