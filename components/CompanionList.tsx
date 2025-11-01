"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { getImage } from "@/lib/utils";
import { subjectsColors } from "@/constants";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
  companions: any;
};

const CompanionList: React.FC<Props> = ({ title, companions }) => {
  const router = useRouter();

  return (
    <div className="w-2/3 mt-3 border-2 border-black rounded-2xl overflow-hidden p-4">
      <h1 className="text-3xl mb-2 tracking-tighter font-bold">
        Recently Completed Lessons
      </h1>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-2/3">Lessons</TableHead>
            <TableHead className="w-1/6">Subject</TableHead>
            <TableHead className="w-1/6">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions.map((item: any, index: number) => (
            <TableRow
              key={index}
              onClick={() => router.push(`/companion/${item.id}`)}
              className="w-full cursor-pointer hover:bg-gray-100 transition"
            >
              <TableCell className="w-2/3">
                <div className="flex gap-2 items-center">
                  <div
                    style={{
                      backgroundColor:
                        subjectsColors[
                          item.subject as keyof typeof subjectsColors
                        ],
                    }}
                    className="p-2 rounded-md"
                  >
                    <Image
                      src={getImage(item.subject)}
                      alt={`${item.subject} image`}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold text-[20px]">{item.name}</p>
                    <p className="text-sm text-gray-500">Topic: {item.topic}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="w-1/6">
                <Badge>{item.subject}</Badge>
              </TableCell>
              <TableCell className="w-1/6 text-[18px]">
                {item.duration} mins
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompanionList;
