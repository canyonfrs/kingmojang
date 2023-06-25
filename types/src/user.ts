type UserType = "CREATOR" | "USER";
export type ProviderType = "GOOGLE" | "NAVER" | "TWITCH" | "KAKAO";

interface ILocalLogin {
  username: string;
  password: string;
}

interface ISocialSignup {
  // username: string;
  nickname: string;
  email: string;
  provider: ProviderType;
  memberType: UserType;
}

interface ILocalSignup extends ISocialSignup {
  password: string;
}

interface IRefreshToken {
  memberId: number;
  refreshToken: string;
}

interface IValidateNickname {
  nickname: string;
  type: UserType;
}

interface IToken {
  accessToken: string;
  refreshToken: string;
}

export type {
  ILocalLogin,
  ILocalSignup,
  IRefreshToken,
  ISocialSignup,
  IToken,
  IValidateNickname,
};
