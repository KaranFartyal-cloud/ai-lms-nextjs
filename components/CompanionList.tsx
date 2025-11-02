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
import { usePathname, useRouter } from "next/navigation";

type Props = {
  companions: any;
};

const CompanionList: React.FC<Props> = ({ companions }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      className={`${
        pathname !== "/my-journey" && "hidden"
      } sm:block w-2/3 mt-3 border-2 border-black rounded-2xl overflow-hidden p-4`}
    >
      {/* Title */}
      <h1 className="text-xl sm:text-3xl mb-2 tracking-tight font-bold">
        Recently Completed Lessons
      </h1>

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto">
        <Table className="min-w-[600px] sm:min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-2/3 text-sm sm:text-base">
                Lessons
              </TableHead>
              <TableHead className="w-1/6 text-sm sm:text-base">
                Subject
              </TableHead>
              <TableHead className="w-1/6 text-sm sm:text-base">
                Duration
              </TableHead>
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
                      className="p-2 rounded-md flex-shrink-0"
                    >
                      <Image
                        src={getImage(item.subject)}
                        alt={`${item.subject} image`}
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold text-base sm:text-lg">
                        {item.name}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        Topic: {item.topic}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="w-1/6 text-center">
                  <Badge className="text-xs sm:text-sm">{item.subject}</Badge>
                </TableCell>
                <TableCell className="w-1/6 text-center text-sm sm:text-base">
                  {item.duration} mins
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CompanionList;
