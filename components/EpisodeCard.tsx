import Link from "next/link";
import styles from "./EpisodeCard.module.css";
import { Episode } from "../lib/microcms";

interface EpisodeCardProps {
  episode: Episode;
}

export default function EpisodeCard({ episode }: EpisodeCardProps) {
  const tagsList = episode.tags ? episode.tags.split(",").map(t => t.trim()) : [];
  const imageUrl = episode.thumbnail?.url || "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800";

  // タグ表示部分を共通コンポーネント化
  const renderTags = () => {
    if (tagsList.length === 0) return null;
    return (
      <div className={styles.tags}>
        {tagsList.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
    );
  };

  // --- 長文（特集記事）の場合：リンク付きカード ---
  if (episode.isFeature) {
    return (
      <Link href={`/episodes/${episode.id}`} className={`${styles.card} ${styles.interactive}`}>
        <div className={styles.thumbnailContainer}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageUrl} alt={episode.title} className={styles.thumbnail} />
        </div>
        <div className={styles.content}>
          {renderTags()}
          <h3 className={styles.title}>{episode.title}</h3>
          {episode.excerpt && <p className={styles.featureExcerpt}>{episode.excerpt}</p>}
          <div className={styles.readMore}>続きを読む →</div>
        </div>
      </Link>
    );
  }

  // --- 短文（通常エピソード）の場合：リンクなし全表示カード ---
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        {renderTags()}
        <h3 className={styles.title}>{episode.title}</h3>
        
        {/* 短文フォーマットの全文表示 */}
        <div className={styles.fullTextContainer}>
          {episode.wall && (
            <div className={styles.textSection}>
              <h4 className={styles.sectionLabel}>直面した壁</h4>
              <div className={styles.excerpt} dangerouslySetInnerHTML={{ __html: episode.wall }} />
            </div>
          )}
          {episode.action && (
            <div className={styles.textSection}>
              <h4 className={styles.sectionLabel}>どう対処したか</h4>
              <div className={styles.excerpt} dangerouslySetInnerHTML={{ __html: episode.action }} />
            </div>
          )}
          {episode.lesson && (
            <div className={styles.textSection}>
              <h4 className={styles.sectionLabel}>伝えたいこと</h4>
              <div className={styles.excerpt} dangerouslySetInnerHTML={{ __html: episode.lesson }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
