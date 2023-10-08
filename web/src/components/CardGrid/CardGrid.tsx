import type { ServerMemo } from "@kingmojang/types";

import { SummaryCard } from "../SummaryCard/SummaryCard";
import * as Style from "./CardGrid.css";

export default function CardGrid({ cards }: { cards: ServerMemo[] }) {
  return (
    <div className={Style.Wrapper}>
      {cards.map((item) => (
        <SummaryCard {...item} id={item.id} />
      ))}
    </div>
  );
}
