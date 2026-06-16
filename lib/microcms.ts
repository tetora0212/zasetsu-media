import { createClient } from "microcms-js-sdk";

export type Episode = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  tags?: string;
  thumbnail?: {
    url: string;
    height: number;
    width: number;
  };
  excerpt?: string;
  wall?: string;
  action?: string;
  lesson?: string;
};

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getList = async () => {
  const listData = await client.getList<Episode>({
    endpoint: "episodes",
    queries: {
      orders: "-publishedAt",
    },
  });
  return listData;
};

export const getDetail = async (contentId: string) => {
  const detailData = await client.getListDetail<Episode>({
    endpoint: "episodes",
    contentId,
  });
  return detailData;
};
