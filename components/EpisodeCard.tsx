import Link from "next/link";
import styles from "./EpisodeCard.module.css";
import { Episode } from "../lib/microcms";

interface EpisodeCardProps {
  episode: Episode;
}

export default function EpisodeCard({ episode }: EpisodeCardProps) {
  // タグがカンマ区切りの文字列で来る想定
  const tagsList = episode.tags ? episode.tags.split(",").map(t => t.trim()) : [];
  // サムネイルがない場合のデフォルト画像
  const imageUrl = episode.thumbnail?.url || "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800";

  return (
    <Link href={`/episodes/${episode.id}`} className={styles.card}>
      <div className={styles.thumbnailContainer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={imageUrl} 
          alt={episode.title} 
          className={styles.thumbnail}
        />
      </div>
      <div className={styles.content}>
        {tagsList.length > 0 && (
          <div className={styles.tags}>
            {tagsList.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
        <h3 className={styles.title}>{episode.title}</h3>
        {episode.excerpt && <p className={styles.excerpt}>{episode.excerpt}</p>}
      </div>
    </Link>
  );
}
