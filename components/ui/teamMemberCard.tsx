import Image from "next/image";
import React from "react";

interface TeamMemberCardProps {
  name: string;
  title: string;
  imageUrl: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, title, imageUrl }) => {
  return (
    <div className="relative max-w-xs bg-white rounded-lg overflow-hidden shadow-lg">
      {/* Image fills the card */}
      <Image
        className="w-full h-full object-cover"
        src={imageUrl}
        alt={`${name}'s photo`}
      />
      
      {/* Text block at the bottom */}
      <div className="absolute  text-center bottom-0 left-0 right-0 bg-white bg-opacity-70 p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">{title}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
