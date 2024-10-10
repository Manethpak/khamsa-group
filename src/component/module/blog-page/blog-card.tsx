import { Paginate } from '@/component/ui/pagination';
import { getImageUrl } from '@/lib/directus';
import { Schema } from '@/lib/schema';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  data: Schema['Blogs'];
};

const BlogCard = ({ data }: Props) => {
  return (
    <Paginate>
      {data.map((blog) => (
        <div key={blog.title} className="relative">
          <Link href={`/blog/` + blog.slug} className="space-y-5">
            <div className="aspect-square max-h-[400px] min-h-[250px] w-full">
              <Image
                src={getImageUrl(blog.image as string)}
                alt={blog.title!}
                width={1400}
                height={1400}
                className="h-full w-full object-cover object-center relative"
              />
            </div>
            
            <div className="flex h-fit flex-col gap-3 overflow-hidden">
              <h1 className="title h-8 overflow-clip ">{blog.title}</h1>
              <p className="max-w-sm h-40 overflow-clip px-1">{blog.description}</p>
            </div>
            <div>{formatDate(blog.date!)}</div>
            <div className="absolute left-0 top-0 m-4 flex  items-center justify-center px-4 py-1 rounded text-white bg-secondPrimary">
              {blog.topic}
            </div>
          </Link>
        </div>
        
      ))}
    </Paginate>
  );
};

export default BlogCard;
