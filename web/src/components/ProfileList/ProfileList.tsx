import { useSubscribedProfileStore } from "../../stores/subscribedProfile";
import type { ProfileImageType } from "../ProfileImage/ProfileImage";
import { ProfileImage } from "../ProfileImage/ProfileImage";
import * as Style from "./ProfileList.css";

interface ProfileListProps {
  profileList: ProfileImageType[];
}

export function ProfileList({ profileList }: ProfileListProps) {
  const { selectedId, selectProfile } = useSubscribedProfileStore();

  return (
    <ul className={Style.wrapper}>
      {profileList.map((profile) => (
        <li className={Style.item} key={profile.id}>
          <ProfileImage
            selected={profile.id === selectedId}
            onClick={() => selectProfile(profile.id)}
            {...profile}
          />
        </li>
      ))}
      <li className={Style.more}>
        <div className={Style.moreDot} />
        <div className={Style.moreDot} />
        <div className={Style.moreDot} />
      </li>
    </ul>
  );
}
