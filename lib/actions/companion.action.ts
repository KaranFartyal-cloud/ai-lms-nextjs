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

export type getAllCompanion = {
  limit?: number;
  page?: number;
  subject?: string | string[];
  topic?: string | string[];
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

  // console.log(data);

  return data[0];
};

export const getAllCompanions = async ({
  limit = 10,
  page = 1,
  subject,
  topic,
}: getAllCompanion) => {
  const supabase = createSupabaseClient();
  const user = await auth();
  const userId = user.userId;

  let query = supabase.from("companions").select().eq("author", userId);

  if (subject && topic) {
    query = query
      .ilike("subject", `%${subject}%`)
      .or(`topic.ilike.%${topic}%, name.ilike.%${topic}%`);
  } else if (subject) {
    query = query.ilike("subject", `%${subject}%`);
  } else if (topic) {
    query = query.or(`topic.ilike.%${topic}%, name.ilike.%${topic}%`);
  }

  query = query.range((page - 1) * limit, page * limit - 1);

  const { data: companions, error } = await query;

  if (error) throw new Error(error?.message);

  return companions;
};

export const getCompanion = async (id: string) => {
  const supabase = createSupabaseClient();

  const { data, error } = await supabase
    .from("companions")
    .select()
    .eq("id", id);

  if (error) return console.log(error);

  return data[0];
};

export const addToSessionHistory = async (companionId: string) => {
  const supabase = createSupabaseClient();
  const { userId } = await auth();

  const res = await supabase.from("session_history").insert({
    companion_id: companionId,
    user_id: userId,
  });

  if (res.error) throw new Error(res.error.message);

  // console.log("this is response sent by supabase", res);

  return res.data;
};

export const getRecentSessions = async (limit = 10, total?: boolean) => {
  const supabase = createSupabaseClient();
  const { userId } = await auth();

  const baseQuery = supabase
    .from("session_history")
    .select(`companions: companion_id(*)`)
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (total === true) {
    const { data, error } = await baseQuery;
    if (error) throw new Error(error.message);
    return data?.length ?? 0;
  }

  const { data, error } = await baseQuery.limit(limit);
  if (error) throw new Error(error.message);

  return data;
};

export const getCompanions = async (limit = 3) => {
  const supabase = createSupabaseClient();
  const { userId } = await auth();

  const { data, error } = await supabase
    .from("companions")
    .select()
    .eq("author", userId)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) throw new Error(error.message);

  return data;
};
