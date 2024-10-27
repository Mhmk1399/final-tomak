import { motion } from "framer-motion";
// interface CardProps {
//   title: string;
//   content: string;
// }

const Card = ({ title, content }: { title: string; content: string }) => {
  return (
    <motion.div
      className="p-6 bg-gradient-to-r from-black/40 w-full md:w-full to-transparent rounded shadow-md flex flex-col items-center justify-center border-r-4 border-yellow-300"
      initial={{ x: -1000, opacity: 0 }}
      animate={{ x: 0 , opacity: 1 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.05 }}
    >
      <h2 className="text-xl font-bold mb-2 text-white">{title}</h2>
      <p className=" text-gray-300">{content}</p>
    </motion.div>
  );
};

export default Card;
