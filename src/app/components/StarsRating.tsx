import type { StarsRatingsProps } from "../types/ratingstars";

export default function StarsRating({ rating }: StarsRatingsProps) {
  const filledStars = "★".repeat(Math.round(rating));
  const emptyStars = "☆".repeat(5 - Math.round(rating));

  return (
    <div className="text-yellow-500">
      <span>{filledStars}</span>
      <span>{emptyStars}</span>
    </div>
  );
}
