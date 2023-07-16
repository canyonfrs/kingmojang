import type { SVGProps } from "react";

export const TwitchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="42" height="42" rx="21" fill="#9146FF" />
      <path
        d="M14.8607 8.04761L10.0039 12.933V30.5206H15.8881V35.4526L20.7449 30.5206H24.9011L33.4939 21.7734V8.04761H14.8607Z"
        fill="black"
      />
      <path
        d="M15.8881 10.0018H31.5792V20.9824L27.7498 24.7977H23.6402L20.2779 28.0081V24.7977H15.8881V10.0018Z"
        fill="white"
      />
      <path d="M21.3987 13.5379H23.36V19.3074H21.3987V13.5379Z" fill="black" />
      <path d="M26.629 13.5379H28.5904V19.3074H26.629V13.5379Z" fill="black" />
    </svg>
  );
};
