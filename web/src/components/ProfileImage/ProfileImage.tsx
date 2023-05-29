import * as Style from "./ProfileImage.css";

export interface ProfileImageType {
  id: number;
  createrName: string;
  createrImageUrl: string;
}

export interface ProfileImageProps extends ProfileImageType {
  selected: boolean;
  onClick: () => void;
}

export function ProfileImage({
  selected,
  createrName,
  createrImageUrl,
  onClick,
}: ProfileImageProps) {
  return (
    <div className={Style.wrapper({ selected })} onClick={onClick}>
      <img className={Style.image} src={createrImageUrl} alt={createrName} />
    </div>
  );
}
