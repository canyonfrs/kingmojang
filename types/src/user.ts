type UserType = "CREATOR" | "USER";
export type ProviderType = "GOOGLE" | "NAVER" | "TWITCH" | "KAKAO";

interface ILocalLogin {
  email: string;
  password: string;
}

interface ILocalLoginSuccess {
  status: string;
  data: IToken;
}

interface ISocialSignup {
  nickname: string;
  email: string;
  provider: ProviderType;
  memberType: UserType;
  code?: string;
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

interface JwtPayload {
  /**
   * @example "www.kmj.app"
   */
  aud: string;

  /**
   * @description 만료 시간
   */
  exp: number;

  /**
   * @description 발급 시간
   */
  iat: number;

  /**
   * @description 발급자
   */
  iss: string;

  /**
   * @description 회원 번호
   */
  memberId: number;

  /**
   * @description 회원 타입
   */
  memberType: UserType;

  /**
   * @description 닉네임
   */
  nickname: string;

  /**
   * @description 회원 이메일
   */
  sub: string;
}

export type {
  ILocalLogin,
  ILocalLoginSuccess,
  ILocalSignup,
  IRefreshToken,
  ISocialSignup,
  IToken,
  IValidateNickname,
  JwtPayload,
};
