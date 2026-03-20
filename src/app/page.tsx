import type { Metadata } from "next";
import HashGenerator from "../components/HashGenerator";
import { MdFingerprint } from "react-icons/md";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://miguelacm.es/tools/hash-generator";
const EMBED_URL = process.env.NEXT_PUBLIC_EMBED_URL || "https://miguelacm.es/embed/hash-generator";

export const metadata: Metadata = {
  title: "Generador de Hash Online Gratis — MD5, SHA-256 y SHA-512",
  description:
    "Genera hashes MD5, SHA-1, SHA-256 y SHA-512 en tiempo real con soporte Unicode completo. Verificación de integridad. Sin registro, gratis, 100% en el navegador.",
  alternates: { canonical: SITE_URL },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Generador de Hash Online Gratis MD5 SHA-256",
  url: SITE_URL,
  description:
    "Genera hashes MD5, SHA-1, SHA-256 y SHA-512 al instante. Sin registro, 100% en el navegador.",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web",
  inLanguage: "es-ES",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  author: {
    "@type": "Person",
    name: "Miguel Ángel Colorado Marin",
    url: "https://miguelacm.es",
  },
  featureList: [
    "Hash MD5",
    "Hash SHA-1",
    "Hash SHA-256",
    "Hash SHA-512",
    "Soporte Unicode completo",
    "Toggle mayúsculas/minúsculas",
    "Copiar hash individual",
    "Tiempo real",
    "Sin registro",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen px-4 py-12">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary">
              <MdFingerprint className="text-base" />
              Herramienta gratuita · Código abierto
            </div>
            <h1 className="mb-3 text-4xl font-bold text-white md:text-5xl">
              Generador de Hash Online Gratis — MD5, SHA-256 y SHA-512
            </h1>
            <p className="mb-2 text-lg text-text-muted">
              Genera hashes MD5, SHA-1, SHA-256 y SHA-512 en tiempo real con soporte Unicode completo.
            </p>
            <p className="text-sm text-text-muted/60">
              Hecho por{" "}
              <a
                href="https://miguelacm.es"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-text font-medium hover:opacity-80 transition-opacity"
              >
                MACM
              </a>{" "}
              · Sin registro · Sin anuncios · 100% en el navegador
            </p>
          </div>

          {/* Tool */}
          <div className="glass rounded-2xl border border-border/20 p-6 md:p-8">
            <HashGenerator locale="es" />
          </div>

          {/* Feature cards */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                icon: "🔐",
                title: "4 algoritmos simultáneos",
                desc: "MD5, SHA-1, SHA-256 y SHA-512 calculados al mismo tiempo en tiempo real mientras escribes. Sin necesidad de pulsar ningún botón.",
              },
              {
                icon: "⚡",
                title: "Web Crypto API",
                desc: "SHA-1, SHA-256 y SHA-512 usan la Web Crypto API nativa del navegador para máxima velocidad. MD5 usa implementación pura JS.",
              },
              {
                icon: "📋",
                title: "Copia individual",
                desc: "Botón de copia independiente para cada algoritmo. Toggle de mayúsculas/minúsculas para ajustar el formato del hash.",
              },
            ].map((item) => (
              <div key={item.icon} className="glass rounded-xl border border-border/15 p-5">
                <span className="mb-3 block text-2xl">{item.icon}</span>
                <h3 className="mb-1 font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* How to use */}
          <div className="mt-8 rounded-xl border border-border/20 bg-white/3 p-6">
            <h2 className="mb-4 text-lg font-semibold text-white">Cómo usar el generador de hash</h2>
            <ol className="space-y-3">
              {[
                { n: 1, text: "Escribe o pega el texto a hashear en el área de entrada. Los cuatro hashes se calculan automáticamente en tiempo real." },
                { n: 2, text: "Lee los resultados: cada fila muestra el algoritmo, el número de bits y la longitud hex. SHA-256 siempre da 64 caracteres; SHA-512 da 128." },
                { n: 3, text: "Activa el toggle Mayúsculas si necesitas el hash en mayúsculas. Por defecto se muestra en minúsculas (formato más común)." },
                { n: 4, text: "Cada algoritmo tiene su propio botón Copiar con feedback visual. Puedes copiar MD5, SHA-1, SHA-256 y SHA-512 de forma independiente." },
              ].map((step) => (
                <li key={step.n} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                    {step.n}
                  </span>
                  <p className="text-sm text-text-muted leading-relaxed">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* FAQ */}
          <div className="mt-8 space-y-4">
            <h2 className="text-lg font-semibold text-white">Preguntas frecuentes</h2>
            {[
              {
                q: "¿Qué es una función hash criptográfica?",
                a: "Una función hash convierte cualquier entrada en una cadena de longitud fija de forma determinista: la misma entrada siempre produce el mismo hash. Son funciones de un solo sentido usadas para verificar integridad de archivos, almacenar contraseñas y en firmas digitales.",
              },
              {
                q: "¿MD5 es seguro para contraseñas?",
                a: "No. MD5 y SHA-1 son obsoletos para uso criptográfico. Son vulnerables a ataques de colisión y existen bases de datos masivas de rainbow tables. Para contraseñas usa bcrypt, scrypt o Argon2. MD5 sigue siendo útil para verificar integridad en contextos no críticos.",
              },
              {
                q: "¿Cuál es la diferencia entre SHA-256 y SHA-512?",
                a: "Ambos son parte de la familia SHA-2 y son seguros. SHA-256 produce 256 bits (64 hex chars) y SHA-512 produce 512 bits (128 hex chars). En CPUs de 64 bits, SHA-512 puede ser igual de rápido o más. SHA-256 es el más usado en la práctica.",
              },
              {
                q: "¿Para qué sirve verificar integridad con un hash?",
                a: "Cuando descargas software, el desarrollador publica el hash SHA-256. Después de la descarga calculas el hash del archivo y lo comparas. Si coinciden, el archivo es auténtico. Si no coinciden, puede estar corrupto o haber sido manipulado.",
              },
              {
                q: "¿Se envían mis datos a algún servidor?",
                a: "No. MD5 usa una implementación pura en JavaScript que corre en tu navegador. SHA-1, SHA-256 y SHA-512 usan la Web Crypto API del navegador que nunca envía datos externos. Todo el procesamiento ocurre localmente.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-xl border border-border/20 bg-white/3 p-5">
                <h3 className="mb-2 font-medium text-white">{item.q}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          {/* Embed */}
          <div className="mt-8 rounded-xl border border-border/20 bg-white/3 p-6">
            <h2 className="mb-2 font-semibold text-white">Integra el generador en tu web</h2>
            <p className="mb-4 text-sm text-text-muted">
              Puedes embeber este generador de hash en cualquier web con un simple iframe.
            </p>
            <div className="mb-3 rounded-lg bg-black/40 p-3">
              <p className="mb-1 text-xs text-text-muted/60">Iframe (integración directa):</p>
              <code className="break-all text-xs text-green-400">
                {`<iframe src="${EMBED_URL}" width="100%" height="600" style="border:none;border-radius:12px;" title="Hash Generator — miguelacm.es" loading="lazy"></iframe>`}
              </code>
            </div>
            <div className="rounded-lg bg-black/40 p-3">
              <p className="mb-1 text-xs text-text-muted/60">Enlace con atribución:</p>
              <code className="break-all text-xs text-green-400">
                {`<a href="${SITE_URL}" target="_blank" rel="noopener">Generador de hash MD5 SHA-256 gratis por MACM</a>`}
              </code>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
