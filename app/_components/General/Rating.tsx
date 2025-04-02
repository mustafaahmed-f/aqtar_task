import EmptyStar from "@/app/_icons/EmptyStar";
import FullStar from "@/app/_icons/FullStar";
import HalfStar from "@/app/_icons/HalfStar";

interface RatingProps {
  ratingValue: number;
}

function Rating({ ratingValue }: RatingProps) {
  let rating: number = ratingValue;
  let ratings: number[] = [];
  while (ratings.length < 5) {
    if (rating >= 1) {
      ratings.push(1);
      rating--;
    } else {
      if (rating === 0) {
        ratings.push(0);
      } else {
        ratings.push(0.5);
        rating = 0;
      }
    }
  }
  return (
    <div className="flex items-center justify-start gap-2 text-sm">
      {ratings.map((el, i) => {
        return el === 1 ? (
          <FullStar key={i} />
        ) : el === 0 ? (
          <EmptyStar key={i} />
        ) : (
          <HalfStar key={i} />
        );
      })}
    </div>
  );
}

export default Rating;
