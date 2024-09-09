"use client";
import Marquee from "@/ui/marquee";

const reviews = [
  {
    name: "Brain",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/58/Human_brain.png",
  },
  {
    name: "Brain",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/58/Human_brain.png",
  },
  {
    name: "Brain",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/58/Human_brain.png",
  },
  {
    name: "Brain",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/58/Human_brain.png",
  },
];

const firstRow = reviews.slice(0, reviews.length);

const ReviewCard = ({ name, img }: any) => {
  return (
    <figure
      className={
        "relative h-56 w-52 cursor-pointer overflow-hidden rounded-xl border border-gray-400/30 p-4 bg-white/5 flex justify-center items-center"
      }
      onClick={() => alert("Clicked ->" + name)}
    >
      <img src={img} alt={name} className="h-full object-cover" />
    </figure>
  );
};

export function MenuMarquee() {
  return (
    <Marquee pauseOnHover className="[--duration:20s] w-[43rem]">
      {firstRow.map((review) => (
        <ReviewCard key={review.name} {...review} />
      ))}
    </Marquee>
  );
}
