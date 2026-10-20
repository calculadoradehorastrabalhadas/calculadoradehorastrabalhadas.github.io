#!/usr/bin/env python3
"""Validasi hasil build: python3 scripts/check.py public https://calculadoradehorastrabalhadas.github.io"""
import sys, json, re, pathlib
from html.parser import HTMLParser

pub = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "public")
base = (sys.argv[2] if len(sys.argv) > 2 else "https://calculadoradehorastrabalhadas.github.io").rstrip("/")
errors, warns = [], []

class P(HTMLParser):
    def __init__(s):
        super().__init__(); s.title = ""; s.in_title = False; s.meta = {}; s.canon = None
        s.h = []; s.ld = []; s.in_ld = False; s.links = []; s.imgs = []; s.lang = None
    def handle_starttag(s, t, a):
        a = dict(a)
        if t == "html": s.lang = a.get("lang")
        if t == "title": s.in_title = True
        if t == "meta" and a.get("name"): s.meta[a["name"]] = a.get("content", "")
        if t == "link" and a.get("rel") == "canonical": s.canon = a.get("href")
        if t in ("h1","h2","h3","h4"): s.h.append(int(t[1]))
        if t == "script" and a.get("type") == "application/ld+json": s.in_ld = True; s.ld.append("")
        if t == "a" and a.get("href"): s.links.append(a["href"])
        if t == "img": s.imgs.append(a)
    def handle_endtag(s, t):
        if t == "title": s.in_title = False
        if t == "script": s.in_ld = False
    def handle_data(s, d):
        if s.in_title: s.title += d
        if s.in_ld: s.ld[-1] += d

pages = sorted(pub.rglob("*.html"))
if not pages: sys.exit("Tidak ada HTML di " + str(pub))
urls = set()
for f in pages:
    rel = f.relative_to(pub).as_posix()
    is404 = rel == "404.html"
    raw = f.read_text(encoding="utf-8")
    p = P(); p.feed(raw)
    if "exemplo.com.br" in raw: errors.append(f"{rel}: e-mail placeholder (exemplo.com.br) belum diganti")
    url = "/" if rel == "index.html" else "/" + rel.removesuffix("index.html")
    if not is404: urls.add(url)
    def err(m): errors.append(f"{rel}: {m}")
    def warn(m): warns.append(f"{rel}: {m}")
    if p.lang != "pt-BR": err("lang bukan pt-BR")
    t = p.title.strip()
    if not t: err("title kosong")
    elif len(t) > 60: warn(f"title {len(t)} karakter (>60)")
    d = p.meta.get("description", "")
    if not is404 and not 150 <= len(d) <= 155: err(f"meta description {len(d)} karakter (harus 150-155)")
    if p.h.count(1) != 1: err(f"jumlah H1 = {p.h.count(1)}")
    for a, b in zip(p.h, p.h[1:]):
        if b - a > 1: err(f"lompatan heading H{a} -> H{b}")
    if not p.canon: err("canonical tidak ada")
    elif not is404 and p.canon != base + url: err(f"canonical salah: {p.canon}")
    robots = p.meta.get("robots", "")
    if is404 and "noindex" not in robots: err("404 harus noindex")
    if not is404 and "noindex" in robots: err("halaman terindeks memakai noindex")
    if not p.ld: err("JSON-LD tidak ada")
    for blob in p.ld:
        try: json.loads(blob)
        except Exception as e: err(f"JSON-LD tidak valid: {e}")
    for i in p.imgs:
        if "alt" not in i: err("img tanpa alt")
        if "width" not in i or "height" not in i: warn("img tanpa width/height")
    for h in p.links:
        if h.startswith(("http","mailto:","tel:","#")): continue
        path = h.split("#")[0].split("?")[0]
        if not path: continue
        tgt = pub / path.lstrip("/")
        if not (tgt.is_file() or (tgt / "index.html").is_file()): err(f"tautan rusak: {h}")

sm = pub / "sitemap.xml"
if not sm.exists(): errors.append("sitemap.xml tidak ada")
else:
    s = sm.read_text(encoding="utf-8")
    for u in urls:
        if base + u not in s: errors.append(f"sitemap tidak memuat {u}")
if not (pub / "fonts" / "InterVariable-latin.woff2").exists(): errors.append("fonts/InterVariable-latin.woff2 tidak ada (font Inter belum dipasang)")
rb = pub / "robots.txt"
if not rb.exists() or "Sitemap:" not in rb.read_text(): errors.append("robots.txt tidak ada / tanpa Sitemap")

print(f"{len(pages)} halaman diperiksa")
for w in warns: print("PERINGATAN", w)
for e in errors: print("ERROR", e)
sys.exit(1 if errors else 0)
