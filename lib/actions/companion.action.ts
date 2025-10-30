"use server";

import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "../supabase";

export type createCompanion = {
  name: string;
  subject: string;
  topic: string;
  voice: string;
  style: string;
  duration: number;
};

export const createCompanion = async (formData: createCompanion) => {
  const user = await auth();

  const { userId: author } = user;
  const supabase = createSupabaseClient();

  const { data, error } = await supabase
    .from("companions")
    .insert({ ...formData, author })
    .select();

  if (error || !data)
    throw new Error(error?.message || "failed to create a companion");

  //   console.log(data);

  return data[0];
};
