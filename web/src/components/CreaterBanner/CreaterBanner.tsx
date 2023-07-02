import * as Style from "./CreaterBanner.css";

export function CreaterBanner() {
  return (
    <div className={Style.Container}>
      <img className={Style.Banner} src="/images/dummy-background.png" alt="" />
      <button className={Style.CameraButton}>
        <img src="/images/camera.png" alt="카메라 버튼" />
      </button>
    </div>
  );
}
