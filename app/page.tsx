import Link from "next/link";
import styles from "./page.module.css";
import Button from "../components/Button";
import EpisodeCard from "../components/EpisodeCard";
import { getList } from "../lib/microcms";

export const revalidate = 60; // 60秒ごとに再検証（ISR）

export default async function Home({ searchParams }: { searchParams: Promise<{ tag?: string }> }) {
  const { contents: allEpisodes } = await getList();
  const { tag: selectedTag } = await searchParams;

  // 全エピソードからユニークなタグを抽出
  const allTags = Array.from(
    new Set(
      allEpisodes.flatMap(ep => ep.tags ? ep.tags.split(",").map(t => t.trim()) : [])
    )
  ).filter(Boolean);

  // 選択されたタグで絞り込み
  const displayEpisodes = selectedTag 
    ? allEpisodes.filter(ep => ep.tags && ep.tags.split(",").map(t => t.trim()).includes(selectedTag))
    : allEpisodes;

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
          <h2 className={styles.sectionTitle}>
            {selectedTag ? `「${selectedTag}」のエピソード` : "新着エピソード"}
          </h2>
          
          {/* タグフィルター */}
          {allTags.length > 0 && (
            <div className={styles.tagFilter}>
              <Link 
                href="/" 
                className={`${styles.filterTag} ${!selectedTag ? styles.activeTag : ""}`}
              >
                すべて
              </Link>
              {allTags.map(tag => (
                <Link 
                  key={tag} 
                  href={`/?tag=${encodeURIComponent(tag)}`}
                  className={`${styles.filterTag} ${selectedTag === tag ? styles.activeTag : ""}`}
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className={styles.grid}>
          {displayEpisodes.length > 0 ? (
            displayEpisodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))
          ) : (
            <p style={{ color: "var(--foreground-tertiary)" }}>
              該当するエピソードがありません。
            </p>
          )}
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
          <Button href="https://forms.gle/2VvKBzg1YsEhvMWUA" variant="primary" className={styles.ctaButton}>
            エピソードを投稿する
          </Button>
        </div>
      </section>
    </div>
  );
}
