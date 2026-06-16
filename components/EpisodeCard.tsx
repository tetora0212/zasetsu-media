import Link from "next/link";
import styles from "./EpisodeCard.module.css";
import { Episode } from "../data/episodes";

interface EpisodeCardProps {
  episode: Episode;
}

export default function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <Link href={`/episodes/${episode.id}`} className={styles.card}>
      <div className={styles.thumbnailContainer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={episode.thumbnailUrl} 
          alt={episode.title} 
          className={styles.thumbnail}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.tags}>
          {episode.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <h3 className={styles.title}>{episode.title}</h3>
        <p className={styles.excerpt}>{episode.excerpt}</p>
      </div>
    </Link>
  );
}
