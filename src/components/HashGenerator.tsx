"use client";

import { useState, useEffect, useRef } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

interface Props {
  locale?: string;
}

const SAMPLE = "The quick brown fox jumps over the lazy dog";

// ─── Pure-JS MD5 ────────────────────────────────────────────────────────────
function md5(str: string): string {
  function safeAdd(x: number, y: number) {
    const lsw = (x & 0xffff) + (y & 0xffff);
    const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xffff);
  }
  function rol(n: number, s: number) { return (n << s) | (n >>> (32 - s)); }
  function cmn(q: number, a: number, b: number, x: number, s: number, t: number) {
    return safeAdd(rol(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
  }
  function ff(a: number, b: number, c: number, d: number, x: number, s: number, t: number) { return cmn((b & c) | (~b & d), a, b, x, s, t); }
  function gg(a: number, b: number, c: number, d: number, x: number, s: number, t: number) { return cmn((b & d) | (c & ~d), a, b, x, s, t); }
  function hh(a: number, b: number, c: number, d: number, x: number, s: number, t: number) { return cmn(b ^ c ^ d, a, b, x, s, t); }
  function ii(a: number, b: number, c: number, d: number, x: number, s: number, t: number) { return cmn(c ^ (b | ~d), a, b, x, s, t); }

  function utf8(s: string) { return unescape(encodeURIComponent(s)); }
  function str2binl(s: string) {
    const out: number[] = Array(s.length >> 2).fill(0);
    for (let i = 0; i < s.length * 8; i += 8) out[i >> 5] |= (s.charCodeAt(i / 8) & 0xff) << (i % 32);
    return out;
  }
  function binl2hex(b: number[]) {
    let s = "";
    for (let i = 0; i < b.length * 4; i++) s += "0123456789abcdef"[(b[i >> 2] >> (i % 4) * 8 + 4) & 0xf] + "0123456789abcdef"[(b[i >> 2] >> (i % 4) * 8) & 0xf];
    return s;
  }
  function core(x: number[], len: number) {
    x[len >> 5] |= 0x80 << (len % 32);
    x[(((len + 64) >>> 9) << 4) + 14] = len;
    let a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
    for (let i = 0; i < x.length; i += 16) {
      const [oa, ob, oc, od] = [a, b, c, d];
      a=ff(a,b,c,d,x[i],7,-680876936);d=ff(d,a,b,c,x[i+1],12,-389564586);c=ff(c,d,a,b,x[i+2],17,606105819);b=ff(b,c,d,a,x[i+3],22,-1044525330);
      a=ff(a,b,c,d,x[i+4],7,-176418897);d=ff(d,a,b,c,x[i+5],12,1200080426);c=ff(c,d,a,b,x[i+6],17,-1473231341);b=ff(b,c,d,a,x[i+7],22,-45705983);
      a=ff(a,b,c,d,x[i+8],7,1770035416);d=ff(d,a,b,c,x[i+9],12,-1958414417);c=ff(c,d,a,b,x[i+10],17,-42063);b=ff(b,c,d,a,x[i+11],22,-1990404162);
      a=ff(a,b,c,d,x[i+12],7,1804603682);d=ff(d,a,b,c,x[i+13],12,-40341101);c=ff(c,d,a,b,x[i+14],17,-1502002290);b=ff(b,c,d,a,x[i+15],22,1236535329);
      a=gg(a,b,c,d,x[i+1],5,-165796510);d=gg(d,a,b,c,x[i+6],9,-1069501632);c=gg(c,d,a,b,x[i+11],14,643717713);b=gg(b,c,d,a,x[i],20,-373897302);
      a=gg(a,b,c,d,x[i+5],5,-701558691);d=gg(d,a,b,c,x[i+10],9,38016083);c=gg(c,d,a,b,x[i+15],14,-660478335);b=gg(b,c,d,a,x[i+4],20,-405537848);
      a=gg(a,b,c,d,x[i+9],5,568446438);d=gg(d,a,b,c,x[i+14],9,-1019803690);c=gg(c,d,a,b,x[i+3],14,-187363961);b=gg(b,c,d,a,x[i+8],20,1163531501);
      a=gg(a,b,c,d,x[i+13],5,-1444681467);d=gg(d,a,b,c,x[i+2],9,-51403784);c=gg(c,d,a,b,x[i+7],14,1735328473);b=gg(b,c,d,a,x[i+12],20,-1926607734);
      a=hh(a,b,c,d,x[i+5],4,-378558);d=hh(d,a,b,c,x[i+8],11,-2022574463);c=hh(c,d,a,b,x[i+11],16,1839030562);b=hh(b,c,d,a,x[i+14],23,-35309556);
      a=hh(a,b,c,d,x[i+1],4,-1530992060);d=hh(d,a,b,c,x[i+4],11,1272893353);c=hh(c,d,a,b,x[i+7],16,-155497632);b=hh(b,c,d,a,x[i+10],23,-1094730640);
      a=hh(a,b,c,d,x[i+13],4,681279174);d=hh(d,a,b,c,x[i],11,-358537222);c=hh(c,d,a,b,x[i+3],16,-722521979);b=hh(b,c,d,a,x[i+6],23,76029189);
      a=hh(a,b,c,d,x[i+9],4,-640364487);d=hh(d,a,b,c,x[i+12],11,-421815835);c=hh(c,d,a,b,x[i+15],16,530742520);b=hh(b,c,d,a,x[i+2],23,-995338651);
      a=ii(a,b,c,d,x[i],6,-198630844);d=ii(d,a,b,c,x[i+7],10,1126891415);c=ii(c,d,a,b,x[i+14],15,-1416354905);b=ii(b,c,d,a,x[i+5],21,-57434055);
      a=ii(a,b,c,d,x[i+12],6,1700485571);d=ii(d,a,b,c,x[i+3],10,-1894986606);c=ii(c,d,a,b,x[i+10],15,-1051523);b=ii(b,c,d,a,x[i+1],21,-2054922799);
      a=ii(a,b,c,d,x[i+8],6,1873313359);d=ii(d,a,b,c,x[i+15],10,-30611744);c=ii(c,d,a,b,x[i+6],15,-1560198380);b=ii(b,c,d,a,x[i+13],21,1309151649);
      a=ii(a,b,c,d,x[i+4],6,-145523070);d=ii(d,a,b,c,x[i+11],10,-1120210379);c=ii(c,d,a,b,x[i+2],15,718787259);b=ii(b,c,d,a,x[i+9],21,-343485551);
      a=safeAdd(a,oa);b=safeAdd(b,ob);c=safeAdd(c,oc);d=safeAdd(d,od);
    }
    return [a, b, c, d];
  }
  const u = utf8(str);
  return binl2hex(core(str2binl(u), u.length * 8));
}

// ─── SHA via Web Crypto ───────────────────────────────────────────────────────
async function shaDigest(algo: string, str: string): Promise<string> {
  const buf = await crypto.subtle.digest(algo, new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
}

// ─── Component ───────────────────────────────────────────────────────────────
interface Hashes {
  md5: string;
  sha1: string;
  sha256: string;
  sha512: string;
}

export default function HashGenerator({ locale = "es" }: Props) {
  const isEs = locale === "es";
  const [input, setInput] = useState("");
  const [hashes, setHashes] = useState<Hashes>({ md5: "", sha1: "", sha256: "", sha512: "" });
  const [uppercase, setUppercase] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const computeId = useRef(0);

  useEffect(() => {
    const id = ++computeId.current;
    if (!input) { setHashes({ md5: "", sha1: "", sha256: "", sha512: "" }); return; }
    const m = md5(input);
    setHashes(h => ({ ...h, md5: m }));
    Promise.all([
      shaDigest("SHA-1", input),
      shaDigest("SHA-256", input),
      shaDigest("SHA-512", input),
    ]).then(([s1, s256, s512]) => {
      if (computeId.current !== id) return;
      setHashes({ md5: m, sha1: s1, sha256: s256, sha512: s512 });
    });
  }, [input]);

  function copy(text: string, key: string) {
    navigator.clipboard.writeText(uppercase ? text.toUpperCase() : text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  }

  const fmt = (h: string) => (uppercase ? h.toUpperCase() : h);

  const rows: { key: keyof Hashes; algo: string; bits: number }[] = [
    { key: "md5", algo: "MD5", bits: 128 },
    { key: "sha1", algo: "SHA-1", bits: 160 },
    { key: "sha256", algo: "SHA-256", bits: 256 },
    { key: "sha512", algo: "SHA-512", bits: 512 },
  ];

  return (
    <div className="space-y-5">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => setUppercase(u => !u)}
          className={`rounded-xl border px-3 py-1.5 text-xs font-medium transition-colors ${
            uppercase
              ? "border-primary/50 bg-primary/10 text-primary"
              : "border-border/30 bg-surface/60 text-text-muted hover:text-text"
          }`}
        >
          {isEs ? "Mayúsculas" : "Uppercase"}
        </button>
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => setInput(SAMPLE)}
            className="rounded-xl border border-border/30 bg-surface/60 px-3 py-1.5 text-xs text-text-muted transition-colors hover:text-text"
          >
            {isEs ? "Ejemplo" : "Sample"}
          </button>
          <button
            onClick={() => setInput("")}
            className="rounded-xl border border-border/30 bg-surface/60 px-3 py-1.5 text-xs text-text-muted transition-colors hover:text-text"
          >
            {isEs ? "Limpiar" : "Clear"}
          </button>
        </div>
      </div>

      {/* Input */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold uppercase tracking-widest text-text-muted/60">
          {isEs ? "Texto de entrada" : "Input text"}
        </label>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={isEs ? "Escribe o pega el texto a hashear…" : "Type or paste text to hash…"}
          className="min-h-[120px] w-full resize-y rounded-xl border border-border/30 bg-surface/60 p-4 font-mono text-sm text-text placeholder:text-text-muted/40 outline-none transition-colors focus:border-primary/50 focus:bg-surface/80"
        />
        <span className="text-xs text-text-muted/50">
          {input.length.toLocaleString()} {isEs ? "caracteres" : "chars"} ·{" "}
          {new TextEncoder().encode(input).length.toLocaleString()} bytes UTF-8
        </span>
      </div>

      {/* Hash outputs */}
      <div className="space-y-3">
        {rows.map(({ key, algo, bits }) => {
          const val = hashes[key];
          return (
            <div
              key={key}
              className="flex flex-col gap-1.5 rounded-xl border border-border/20 bg-surface/40 p-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-white">{algo}</span>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary/80">
                    {bits} bits · {bits / 4} {isEs ? "hex" : "hex"}
                  </span>
                </div>
                <button
                  onClick={() => copy(val, key)}
                  disabled={!val}
                  className="flex items-center gap-1.5 rounded-lg border border-border/20 bg-surface/60 px-3 py-1 text-xs text-text-muted transition-colors hover:text-text disabled:opacity-30"
                >
                  {copied === key ? <FiCheck className="text-green-400" /> : <FiCopy />}
                  {copied === key ? (isEs ? "Copiado" : "Copied") : (isEs ? "Copiar" : "Copy")}
                </button>
              </div>
              <p className="break-all font-mono text-sm text-text-muted/80">
                {val ? fmt(val) : (
                  <span className="text-text-muted/30 italic">
                    {isEs ? "Introduce texto para calcular el hash…" : "Enter text to compute hash…"}
                  </span>
                )}
              </p>
            </div>
          );
        })}
      </div>

      {/* Warning */}
      <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-xs leading-relaxed text-amber-400/80">
        ⚠ {isEs
          ? "MD5 y SHA-1 son algoritmos obsoletos para criptografía. Úsalos solo para verificación de integridad no crítica. Para contraseñas y seguridad usa SHA-256 o SHA-512."
          : "MD5 and SHA-1 are deprecated for cryptography. Use them only for non-critical integrity checks. For passwords and security use SHA-256 or SHA-512."}
      </div>
    </div>
  );
}
