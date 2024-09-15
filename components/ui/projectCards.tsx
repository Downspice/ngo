// app/components/ProjectCards.tsx
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { ArrowRightCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';

type ProjectCardProps = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
};

const ProjectCards: React.FC<ProjectCardProps> = ({ id, title, description, imageSrc }) => {
  return (
    <div className="flex justify-center py-2">
      <Card className="w-72">
        <CardContent className="p-0">
          <Image
            src={imageSrc}
            alt="project image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="rounded-t-xl"
          />
        </CardContent>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Link className="flex justify-between border" href={`/our-initiatives/${id}`}>
            <p>Read More</p>
            <ArrowRightCircle />
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCards;
