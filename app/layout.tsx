import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "失敗から学ぶ、リアルなストーリー | 挫折エピソード共有メディア",
  description: "大学受験や研究、進路などで直面した「挫折エピソード」を集めて共有し、悩んでいる学生の背中を押すためのWebメディアです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
