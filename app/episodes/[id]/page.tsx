import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { episodes } from "../../../data/episodes";
import Link from "next/link";

interface EpisodePageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return episodes.map((episode) => ({
    id: episode.id,
  }));
}

export default async function EpisodePage({ params }: EpisodePageProps) {
  const { id } = await params;
  const episode = episodes.find((ep) => ep.id === id);

  if (!episode) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <article className={styles.article}>
        {/* 記事ヘッダー */}
        <header className={styles.header}>
          <div className={styles.tags}>
            {episode.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
          <h1 className={styles.title}>{episode.title}</h1>
        </header>

        {/* ヒーロー画像 */}
        <div className={styles.thumbnailContainer}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={episode.thumbnailUrl} 
            alt={episode.title} 
            className={styles.thumbnail}
          />
        </div>

        {/* 記事本文（テンプレート） */}
        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.heading}>直面した壁</h2>
            <p className={styles.paragraph}>
              当初描いていた計画が完全に崩れ去り、絶望感でいっぱいでした。あの時は本当に目の前が真っ暗になり、何から手をつければいいのか分かりませんでした。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>どう対処したか</h2>
            <p className={styles.paragraph}>
              最初は何も手につきませんでしたが、周りの人に相談したり、小さな一歩を踏み出すことで、少しずつ状況が好転していきました。できることから一つずつ、焦らずに行動を起こすようにしました。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>今振り返って伝えたいこと</h2>
            <p className={styles.paragraph}>
              失敗は決して無駄ではなく、後になって大きな糧となることをお伝えしたいです。今同じような壁にぶつかって悩んでいる方も、どうか焦らず、自分のペースで前に進んでみてください。
            </p>
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
