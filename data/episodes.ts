export interface Episode {
  id: string;
  title: string;
  tags: string[];
  thumbnailUrl: string;
  excerpt: string;
}

export const episodes: Episode[] = [
  {
    id: "1",
    title: "第一志望の大学に落ちた日。そこから私の『本当の学び』が始まった",
    tags: ["大学受験", "文系", "10代"],
    thumbnailUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    excerpt: "ずっと目指していた大学の不合格通知を見た瞬間、目の前が真っ暗になりました。しかし、浪人生活の中で気づいたことがありました。",
  },
  {
    id: "2",
    title: "研究テーマが全否定された大学院1年の冬",
    tags: ["大学院", "理系", "20代"],
    thumbnailUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
    excerpt: "1年間進めてきた研究の方向性が完全に間違っていると指導教員から指摘され、すべてを最初からやり直すことに。",
  },
  {
    id: "3",
    title: "初めての就活で50社連続お祈り。自己否定から立ち直るまで",
    tags: ["就職活動", "20代", "IT志望"],
    thumbnailUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    excerpt: "周りが次々と内定をもらう中、私だけが『お祈りメール』の山。自分の何がいけないのか、どう修正すればいいのか分からず苦しみました。",
  },
];
