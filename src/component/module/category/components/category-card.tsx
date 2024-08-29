import React, { useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { getImageUrl } from '@/lib/directus';
import { CategoryData } from '@/lib/schema';
import CategoryFilter from './category-filter';
import { motion, useScroll } from 'framer-motion';

type Props = {
  data: CategoryData;
  onFilterClick: () => void;
};

const CategoryCard: React.FC<Props> = ({ data, onFilterClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const [animate, setAnimate] = useState(false);

  const categories = useMemo(() => data.items?.map(item => ({
    title: item.title,
    imageUrl: getImageUrl(item.icon),
    description: item.description,
  })) || [], [data.items]);

  const handleFilterClick = () => {
    setAnimate(true);
    onFilterClick(); // Notify parent to animate header
    setTimeout(() => setAnimate(false), 1000);
  };

  return (
    <div className="relative p-5" ref={ref}>
      <CategoryFilter onChange={handleFilterClick} />
      <section className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, index) => (
          <div key={index} className="relative flex flex-col items-center justify-start rounded-t-lg bg-white p-3 shadow-md transition-shadow duration-300 hover:shadow-lg">
            <div className="relative mb-3 w-full" style={{ width: '423px', height: '400px' }}>
              <Image src={category.imageUrl} alt={category.title} layout="fill" objectFit="cover" className="rounded-t-lg" />
            </div>
            <div className="flex flex-col items-start p-3 text-left">
              <h2 className="text-xl font-semibold text-secondary">{category.title}</h2>
              <p className="text-gray-600 text-base">{category.description}</p>
            </div>
          </div>
        ))}
      </section>
      <svg className="absolute bottom-[20px] right-[20px] h-[54px] w-[54px] p-[4.5px]" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" stroke="gray" strokeWidth="4" fill="none" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          stroke="blue"
          strokeWidth="2"
          fill="none"
          style={{ pathLength: scrollXProgress, opacity: animate ? 1 : 0.5 }}
          strokeDasharray="188.4"
          transition={{ duration: 1 }}
        />
      </svg>
    </div>
  );
};

export default CategoryCard;
