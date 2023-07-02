import * as Style from "./Tab.css";

export interface TabProps {
  options: string[];
  value: string;
  onChange: (item: string) => void;
}

export function Tab({ options, value, onChange }: TabProps) {
  return (
    <ul className={Style.List}>
      {options.map((option) => (
        <li
          key={option}
          className={Style.Item({ selected: option === value })}
          onClick={() => onChange(option)}
        >
          {option}
        </li>
      ))}
    </ul>
  );
}
