import CardWrapper from '../wrapper';
import { BLOG_IMAGE_DIMENSION, BlogCardProps } from './interface';
import { CustomImage } from '@components/custom-image';
import Link from 'next/link';

export default function BlogCard({ slug, image, title }: BlogCardProps) {
  return (
    <CardWrapper cardBorderRadius="radius-one" cardShadow="shadow-one">
      <Link href={slug} passHref className="block">
        <div className="group/card relative h-full bg-success/[.2]">
          <div className="overflow-hidden">
            <CustomImage
              className={
                'transition-transform ease-in-out group-hover/card:scale-110'
              }
              src={image.src}
              alt={image.alt}
              lqip={image.lqip}
              width={BLOG_IMAGE_DIMENSION.width}
              height={BLOG_IMAGE_DIMENSION.height}
            />
          </div>
          <div className="flex flex-col space-y-3 p-5 pt-8">
            <h3 className="line-clamp-2 flex-1 text-lg font-bold">{title}</h3>
          </div>
        </div>
      </Link>
    </CardWrapper>
  );
}
