import styles from "./page.module.css";
import Button from "../components/Button";
import EpisodeCard from "../components/EpisodeCard";
import { episodes } from "../data/episodes";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* ヒーローセクション */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>失敗から学ぶ、<br />リアルなストーリー</h1>
          <p className={styles.subtitle}>
            大学受験、研究、就活など、誰もが直面する人生の「壁」。<br />
            先輩たちの挫折と立ち直りのエピソードが、あなたの背中を押します。
          </p>
        </div>
      </section>

      {/* 記事一覧セクション */}
      <section className={styles.episodesSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>新着エピソード</h2>
        </div>
        <div className={styles.grid}>
          {episodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      </section>

      {/* CTAセクション */}
      <section className={styles.ctaSection} id="share">
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>あなたの挫折エピソードを共有しませんか？</h2>
          <p className={styles.ctaDescription}>
            あなたの経験が、今同じように壁にぶつかり悩んでいる誰かの希望になるかもしれません。<br />
            飾らないリアルなストーリーをお待ちしています。
          </p>
          <Button variant="primary" className={styles.ctaButton}>
            エピソードを投稿する
          </Button>
        </div>
      </section>
    </div>
  );
}
