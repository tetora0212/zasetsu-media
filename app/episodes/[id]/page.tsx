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
              {/* ダミーテキスト */}
              ここは「直面した壁」の詳細エピソードが入るエリアです。<br />
              当初描いていた計画がどのように崩れ、どんな感情を抱いたのかをリアルに語ります。あの時は本当に目の前が真っ暗になり、何から手をつければいいのか分かりませんでした。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>どう対処したか</h2>
            <p className={styles.paragraph}>
              {/* ダミーテキスト */}
              ここは「どう対処したか」の詳細エピソードが入るエリアです。<br />
              落ち込んだ状態から、どのようなきっかけで立ち直り、具体的にどんな行動を起こしたのかを記載します。小さな一歩を踏み出すことで、少しずつ状況が好転していきました。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>今振り返って伝えたいこと</h2>
            <p className={styles.paragraph}>
              {/* ダミーテキスト */}
              ここは「今振り返って伝えたいこと」の詳細エピソードが入るエリアです。<br />
              現在同じような壁にぶつかっている学生に向けて、当時の経験から得た教訓やメッセージを届けます。失敗は決して無駄ではなく、後になって大きな糧となることをお伝えします。
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
