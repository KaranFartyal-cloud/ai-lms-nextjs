import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Props = {
  id: string;
  subject: string;
  name: string;
  topic: string;
  duration: number;
  color: string;
};

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Clock } from "lucide-react";
import Link from "next/link";

const CompanionCard: React.FC<Props> = ({
  id,
  subject,
  name,
  topic,
  duration,
  color,
}) => {
  return (
    <Card
      className={`w-full max-w-md border-1 border-black`}
      style={{ backgroundColor: color }}
    >
      <CardHeader>
        <div className="flex justify-between items-center w-full">
          <Badge>{subject}</Badge>
          <Image
            src={"/save-instagram.png"}
            height={20}
            width={20}
            alt="save-icon"
          />
        </div>
        <CardTitle className="text-2xl font-bold">{topic}</CardTitle>
        <p className="text-gray-700">{name}</p>
        <CardDescription className="flex items-center">
          <Clock height={17} /> &nbsp;&nbsp;{duration} minutes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={`/companion/${id}`}>
          <Button className="w-full hover:bg-[#ec5331] bg-[#FE5933] rounded-lg h-10 text-white">
            Launch Session
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CompanionCard;
