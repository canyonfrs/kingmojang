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
  likeCount: number;
  commentCount: number;
  createdAt: string;
  updatedAt: string;
  isLike: boolean;
};

export interface GetMemoListResponse {
  memos: ServerMemo[];
}
