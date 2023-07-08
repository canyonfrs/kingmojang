import type { FormEvent } from "react";
import { useEffect, useState } from "react";

import { ReactComponent as PlusIcon } from "../../images/Plus.svg";
import { ExitModal } from "../ExitModal/ExitModal";
import { Spacing } from "../Spacing/Spacing";
import * as Style from "./CreaterInfo.css";

interface Props {
  currentNickname: string;
  platformSrc: string[];
}

var URLRegExp =
  /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

export function CreaterInfo({ currentNickname, platformSrc }: Props) {
  const [nickname, setNickname] = useState(currentNickname);
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [link, setLink] = useState("");
  const [invalidLink, setInvalidLink] = useState(false);
  const [message, setMessage] = useState("");
  const [exitModal, setExitModal] = useState(false);

  const handleLinkFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    const validUrl = URLRegExp.test(link);
    if (!validUrl) {
      setInvalidLink(true);
      return;
    }
    setMessage("링크가 추가되었어요");
  };

  const handleNicknameFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    setMessage("새로운 닉네임으로 변경되었어요");
  };

  useEffect(() => {
    if (message.length === 0) {
      return;
    }
    const timeout = setTimeout(() => {
      setMessage("");
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [message]);

  return (
    <>
      <ExitModal onClose={() => setExitModal(false)} open={exitModal} />
      <div className={Style.Wrapper}>
        <div className={Style.ProfileImageWrapper}>
          <img className={Style.ProfileImage} src="/images/fall.png" />
          <div className={Style.CameraIcon}>
            <img src="/images/camera.png" />
          </div>
        </div>
        <Spacing size={60} />
        <div className={Style.InputRow}>
          <div className={Style.InputTitle}>닉네임</div>
          <form onSubmit={handleNicknameFormSubmit}>
            <input
              value={nickname}
              className={Style.Input}
              onChange={(event) => setNickname(event.target.value)}
            />
            <Spacing size={8} style={{ display: "inline-block" }} />
            <button
              className={Style.Button({ valid: currentNickname !== nickname })}
            >
              변경하기
            </button>
          </form>
        </div>
        <Spacing size={30} />
        <div className={Style.InputRow}>
          <div className={Style.InputTitle}>비밀번호</div>
          <button className={Style.LongButton}>변경하기</button>
        </div>
        <Spacing size={30} />
        <div className={Style.InputRow}>
          <div className={Style.InputTitle}>링크연결</div>
          <ul className={Style.LinkList}>
            {platformSrc.map((src) => (
              <li className={Style.LinkItem} key={src}>
                <img src={src} />
              </li>
            ))}
            <li className={Style.LinkItem}>
              <PlusIcon onClick={() => setShowLinkInput(!showLinkInput)} />
            </li>
          </ul>
        </div>
        {showLinkInput && (
          <>
            <Spacing size={8} />
            <div className={Style.InputRow}>
              <div className={Style.InputTitle}></div>
              <div>
                <form onSubmit={handleLinkFormSubmit}>
                  <input
                    value={link}
                    className={Style.LinkInput}
                    onChange={(event) => setLink(event.target.value)}
                  />
                  <Spacing size={8} style={{ display: "inline-block" }} />
                  <button
                    className={Style.Button({ valid: Boolean(link.length) })}
                  >
                    추가하기
                  </button>
                </form>
                {invalidLink && (
                  <div className={Style.InvalidLInk}>
                    <img src="/images/alert.png" />
                    잘못된 링크에요! 다시 한번 확인해주세요.
                  </div>
                )}
              </div>
            </div>
          </>
        )}
        <Spacing size={30} />
        <div className={Style.InputRow}>
          <div className={Style.InputTitle}>회원탈퇴</div>
          <button
            className={Style.LongButton}
            onClick={() => setExitModal(true)}
          >
            탈퇴하기
          </button>
        </div>
        <Spacing size={34} />
        {message && <div className={Style.SuccessMessage}>{message}</div>}
      </div>
    </>
  );
}
