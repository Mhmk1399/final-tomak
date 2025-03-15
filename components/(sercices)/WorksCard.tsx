import { useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
  type PanInfo,
} from "framer-motion";
import Image from "next/image";

interface WorkCard {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface CardProps {
  data: WorkCard;
  frontCard: boolean;
  drag?: "x" | "y" | false;
  index?: number;
  setIndex?: (newIndex: number) => void;
}

function Card({ data, ...props }: CardProps) {
  const [exitX, setExitX] = useState(0);
  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
  const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
    clamp: false,
  });

  function handleDragEnd(_: MouseEvent | TouchEvent, info: PanInfo) {
    if (info.offset.x < -100 && props.setIndex && props.index !== undefined) {
      setExitX(-250);
      props.setIndex(props.index + 1);
    }
    if (info.offset.x > 100 && props.setIndex && props.index !== undefined) {
      setExitX(250);
      props.setIndex(props.index + 1);
    }
  }

  const variantsFrontCard = {
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: (custom: number) => ({
      x: custom,
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.2 },
    }),
  };

  const variantsBackCard = {
    initial: { scale: 0, y: 105, opacity: 0 },
    animate: { scale: 0.75, y: 30, opacity: 0.5 },
  };

  return (
    <motion.div
      className="absolute top-0 w-[300px] h-[400px]"
      style={{ x, rotate, cursor: "grab" }}
      whileTap={{ cursor: "grabbing" }}
      drag={props.drag}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      onDragEnd={handleDragEnd}
      variants={props.frontCard ? variantsFrontCard : variantsBackCard}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={exitX}
      transition={
        props.frontCard
          ? { type: "spring", stiffness: 300, damping: 20 }
          : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
      }
    >
      <motion.div
        className="w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden"
        style={{ scale }}
      >
        <div className="relative h-1/2">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">{data.title}</h3>
          <p className="text-gray-600 text-sm">{data.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function WorksShowcase() {
  const [index, setIndex] = useState(0);

  const works: WorkCard[] = [
    {
      id: 1,
      image: "/work1.jpg",
      title: "Project One",
      description: "Description for project one goes here",
    },
    // Add more work items here
  ];

  return (
    <div className="relative w-[300px] h-[400px] mx-auto">
      <AnimatePresence initial={false}>
        <Card
          key={index + 1}
          frontCard={false}
          data={works[(index + 1) % works.length]}
        />
        <Card
          key={index}
          frontCard={true}
          index={index}
          setIndex={setIndex}
          drag="x"
          data={works[index % works.length]}
        />
      </AnimatePresence>

      <button
        onClick={() => setIndex(index + 1)}
        className="absolute top-4 right-4 bg-black/40 p-2 rounded-lg cursor-pointer"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </button>
    </div>
  );
}
