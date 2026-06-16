import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { getList, getDetail } from "../../../lib/microcms";
import Link from "next/link";

interface EpisodePageProps {
  params: Promise<{
    id: string;
  }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const { contents } = await getList();
  return contents.map((episode) => ({
    id: episode.id,
  }));
}

export default async function EpisodePage({ params }: EpisodePageProps) {
  const { id } = await params;
  let episode;
  try {
    episode = await getDetail(id);
  } catch (error) {
    notFound();
  }

  const tagsList = episode.tags ? episode.tags.split(",").map(t => t.trim()) : [];
  const imageUrl = episode.thumbnail?.url || "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800";

  return (
    <div className={styles.container}>
      <article className={styles.article}>
        {/* 記事ヘッダー */}
        <header className={styles.header}>
          {tagsList.length > 0 && (
            <div className={styles.tags}>
              {tagsList.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          )}
          <h1 className={styles.title}>{episode.title}</h1>
        </header>

        {/* ヒーロー画像 */}
        <div className={styles.thumbnailContainer}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={imageUrl} 
            alt={episode.title} 
            className={styles.thumbnail}
          />
        </div>

        {/* 記事本文 */}
        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.heading}>直面した壁</h2>
            <div 
              className={styles.paragraph}
              dangerouslySetInnerHTML={{ __html: episode.wall || "本文がありません" }} 
            />
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>どう対処したか</h2>
            <div 
              className={styles.paragraph}
              dangerouslySetInnerHTML={{ __html: episode.action || "本文がありません" }} 
            />
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>今振り返って伝えたいこと</h2>
            <div 
              className={styles.paragraph}
              dangerouslySetInnerHTML={{ __html: episode.lesson || "本文がありません" }} 
            />
          </section>
        </div>

        {/* フッターリンク */}
        <div className={styles.backLinkContainer}>
          <Link href="/" className={styles.backLink}>
            ← エピソード一覧に戻る
          </Link>
        </div>
      </article>
    </div>
  );
}
