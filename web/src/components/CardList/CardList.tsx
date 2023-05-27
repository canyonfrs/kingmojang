import Slider from "react-slick";

import type { SummaryCardProps } from "../SummaryCard/SummaryCard";
import { SummaryCard } from "../SummaryCard/SummaryCard";

interface CardListProps {
  cardList: SummaryCardProps[];
}

const SLIDER_SETTINGS = {
  slidesToShow: 3,
};

export function CardList({ cardList }: CardListProps) {
  return (
    <Slider {...SLIDER_SETTINGS}>
      {cardList.map((item) => (
        <SummaryCard {...item} />
      ))}
    </Slider>
  );
}
