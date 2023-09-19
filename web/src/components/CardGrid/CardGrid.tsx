import { SummaryCard, type SummaryCardProps } from "../SummaryCard/SummaryCard";
import * as Style from "./CardGrid.css";

export default function CardGrid({ cards }: { cards: SummaryCardProps[] }) {
  return (
    <div className={Style.Wrapper}>
      {cards.map((item) => (
        <SummaryCard {...item} />
      ))}
    </div>
  );
}
