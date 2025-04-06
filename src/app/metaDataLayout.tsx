// import type { Metadata } from 'next';

import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Gaurav Portfolio',
};

export default function MetadataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Gaurav Portfolio</title>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className={`antialiased min-w-screen min-h-screen `}>{children}</body>
    </html>
  );
}
