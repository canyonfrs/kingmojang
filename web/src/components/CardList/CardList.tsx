import Slider from "react-slick";

import type { SummaryCardProps } from "../SummaryCard/SummaryCard";
import { SummaryCard } from "../SummaryCard/SummaryCard";

interface CardListProps {
  cardList: SummaryCardProps[];
}

const SLIDER_SETTINGS = {
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
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
