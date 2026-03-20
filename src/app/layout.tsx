import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://miguelacm.es/tools/hash-generator";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Generador de Hash Online Gratis MD5 SHA-256",
    template: "%s | Hash Generator",
  },
  description:
    "Genera hashes MD5, SHA-1, SHA-256 y SHA-512 al instante. Verificación de integridad de datos. Herramienta gratuita, sin registro, 100% en el navegador.",
  keywords: [
    "hash generator online",
    "md5 online",
    "sha256 generator",
    "sha-512 hash",
    "sha1 online",
    "generador hash",
    "md5 gratis",
    "sha256 online free",
    "hash calculator",
    "checksum generator online",
  ],
  authors: [{ name: "Miguel Ángel Colorado Marin", url: "https://miguelacm.es" }],
  creator: "Miguel Ángel Colorado Marin",
  openGraph: {
    title: "Generador de Hash Online Gratis MD5 SHA-256",
    description:
      "Genera hashes MD5, SHA-1, SHA-256 y SHA-512. Sin registro, gratis. Por MACM.",
    url: SITE_URL,
    siteName: "Hash Generator — MACM",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Generador de Hash Online Gratis MD5 SHA-256",
    description: "Genera hashes MD5 SHA256 SHA512 gratis. Sin registro. Por MACM · miguelacm.es",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="author" href="https://miguelacm.es" />
        <meta name="author" content="Miguel Ángel Colorado Marin" />
        <meta name="copyright" content="Miguel Ángel Colorado Marin — miguelacm.es" />
      </head>
      <body className="antialiased">
        {children}
        <footer className="pb-8 text-center text-xs text-text-muted/40">
          ⚡ por{" "}
          <a
            href="https://miguelacm.es"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted/60 transition-colors hover:text-text-muted underline-offset-2 hover:underline"
          >
            MACM · miguelacm.es
          </a>
          {" · "}
          <a
            href="https://github.com/m-a-c-m/HashGenerator"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted/60 transition-colors hover:text-text-muted underline-offset-2 hover:underline"
          >
            Código abierto
          </a>
        </footer>
      </body>
    </html>
  );
}
