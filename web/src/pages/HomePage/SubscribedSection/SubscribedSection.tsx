import { CardList } from "../../../components/CardList/CardList";
import { ProfileList } from "../../../components/ProfileList/ProfileList";
import { Spacing } from "../../../components/Spacing/Spacing";
import * as Style from "./SubscribedSection.css";

// FIXME:
const DUMMY_LIST = [
  {
    id: 0,
    createrName: "풍월량",
    createrImageUrl: "https://avatars.githubusercontent.com/u/26402298?v=4",
  },
  {
    id: 1,
    createrName: "풍월량",
    createrImageUrl: "https://avatars.githubusercontent.com/u/26402298?v=4",
  },
  {
    id: 2,
    createrName: "풍월량",
    createrImageUrl: "https://avatars.githubusercontent.com/u/26402298?v=4",
  },
  {
    id: 3,
    createrName: "풍월량",
    createrImageUrl: "https://avatars.githubusercontent.com/u/26402298?v=4",
  },
  {
    id: 4,
    createrName: "풍월량",
    createrImageUrl: "https://avatars.githubusercontent.com/u/26402298?v=4",
  },
  {
    id: 5,
    createrName: "풍월량",
    createrImageUrl: "https://avatars.githubusercontent.com/u/26402298?v=4",
  },
];

const DUMMY_CARD_LIST = [
  {
    createrName: "풍월량",
    createdDate: new Date("2023-04-17"),
    profileImageSrc:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/7d354ef2-b2a8-4276-8c12-5be7f6301ae0-profile_image-300x300.png",
    like: 2111,
    comment: 555,
    memo: `침착맨 = 임포스터면 말이 많아지고 신남
  시민이면 확실히 목소리 톤 다운
 시민이면 활동력 저하

풍월량 = 개못함 고집 셈 시야 적음

김진배 = 쓰레기 살인마 잠수인지도 알면서 죽임
  수단 방법 안가림

주펄    = 아직 게임 잘 모름 안보이는 사람 찍음`,
  },
  {
    createrName: "풍월량",
    createdDate: new Date("2023-04-17"),
    profileImageSrc:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/7d354ef2-b2a8-4276-8c12-5be7f6301ae0-profile_image-300x300.png",
    like: 2111,
    comment: 555,
    memo: `침착맨 = 임포스터면 말이 많아지고 신남
  시민이면 확실히 목소리 톤 다운
 시민이면 활동력 저하

풍월량 = 개못함 고집 셈 시야 적음

김진배 = 쓰레기 살인마 잠수인지도 알면서 죽임
  수단 방법 안가림

주펄    = 아직 게임 잘 모름 안보이는 사람 찍음`,
  },
  {
    createrName: "풍월량",
    createdDate: new Date("2023-04-17"),
    profileImageSrc:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/7d354ef2-b2a8-4276-8c12-5be7f6301ae0-profile_image-300x300.png",
    like: 2111,
    comment: 555,
    memo: `침착맨 = 임포스터면 말이 많아지고 신남
  시민이면 확실히 목소리 톤 다운
 시민이면 활동력 저하

풍월량 = 개못함 고집 셈 시야 적음

김진배 = 쓰레기 살인마 잠수인지도 알면서 죽임
  수단 방법 안가림

주펄    = 아직 게임 잘 모름 안보이는 사람 찍음`,
  },
  {
    createrName: "풍월량",
    createdDate: new Date("2023-04-17"),
    profileImageSrc:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/7d354ef2-b2a8-4276-8c12-5be7f6301ae0-profile_image-300x300.png",
    like: 2111,
    comment: 555,
    memo: `침착맨 = 임포스터면 말이 많아지고 신남
  시민이면 확실히 목소리 톤 다운
 시민이면 활동력 저하

풍월량 = 개못함 고집 셈 시야 적음

김진배 = 쓰레기 살인마 잠수인지도 알면서 죽임
  수단 방법 안가림

주펄    = 아직 게임 잘 모름 안보이는 사람 찍음`,
  },
  {
    createrName: "풍월량",
    createdDate: new Date("2023-04-17"),
    profileImageSrc:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/7d354ef2-b2a8-4276-8c12-5be7f6301ae0-profile_image-300x300.png",
    like: 2111,
    comment: 555,
    memo: `침착맨 = 임포스터면 말이 많아지고 신남
  시민이면 확실히 목소리 톤 다운
 시민이면 활동력 저하

풍월량 = 개못함 고집 셈 시야 적음

김진배 = 쓰레기 살인마 잠수인지도 알면서 죽임
  수단 방법 안가림

주펄    = 아직 게임 잘 모름 안보이는 사람 찍음`,
  },
];

export function SubscribedSection() {
  return (
    <div className={Style.container}>
      <div className={Style.wrapper}>
        <h2 className={Style.title}>구독중인 킹모장</h2>
        <ProfileList profileList={DUMMY_LIST} />
        <Spacing size={20} />
        <CardList cardList={DUMMY_CARD_LIST} />
      </div>
    </div>
  );
}
