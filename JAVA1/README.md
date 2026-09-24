# Java I — Pasaporta digjitale dhe GitHub

## Çfarë realizova

Krijova një "pasaportë digjitale" për një personazh të sajuar, Arta
Krasniqi, kandidate si udhërrëfyese e kampusit. Struktura përfshin:

- `index.html` — faqja kryesore: `lang="sq"`, `charset`, `viewport`,
  titull, një `h1`, prezantim dhe listë me 3 aftësi ("vula" pasaporte).
- `rreth.html` — histori e shkurtër e sajuar, me lidhje kthimi te
  `index.html`.
- `kontakt.html` — faqja e sfidës së transferimit, e lidhur nga të dyja
  faqet ekzistuese.
- `style.css` — tema vizuale e frymëzuar nga pasaportat fizike (kopertinë
  blu, faqe krem, vula rrethore, ndarje me vija të ndërprera).

Të gjitha të dhënat personale (emri, historia, email-i, orari) janë të
sajuara; nuk përdoret asnjë e dhënë reale, siç kërkohej.

## Hapat e hapjes

1. Klono ose hap repository-n individual `programimi-www` lokalisht.
2. Hyr te folderi `JavaI/`.
3. Hape `index.html` direkt në shfletues **ose**, për të parë kërkesën
   në DevTools → Network, ekzekuto një server lokal nga rrënja e
   `JavaI/`, p.sh.:
   ```sh
   npx serve .
   # ose
   python3 -m http.server 5500
   ```
   dhe hap `http://localhost:5500/` (ose portin që tregon terminali).
4. Nga faqja kryesore, testo lidhjet drejt `rreth.html` dhe `kontakt.html`
   dhe lidhjet e kthimit.

## Hyrje → rezultat i pritur → rezultat i marrë

| # | Hyrja (veprimi) | Rezultati i pritur | Rezultati i marrë |
|---|---|---|---|
| 1 | Hapja e `index.html` dhe `rreth.html` në shfletues | Të dyja faqet shfaqen pa gabim; lidhjet vajtje/kthim nuk japin 404 | Të dyja faqet u hapën normalisht; klikimi `index.html → rreth.html → index.html` punoi pa 404 |
| 2 | `git log` pas push-it, krahasuar me faqen e repository-t në GitHub | `JavaI/index.html` dhe README shfaqen në GitHub; commit-i i fundit përputhet | Struktura dhe README u shfaqën në GitHub pas `git push` |
| 3 | Klikimi i lidhjes te `kontakt.html` nga `index.html` dhe nga `rreth.html` (rasti kufitar: lidhje nga secila faqe ekzistuese) | Të dyja lidhjet çojnë saktë te `kontakt.html`, pa 404 | Të dyja lidhjet funksionuan sipas pritshmërisë |
| 4 (kufitar) | Hapja e `kontakt.html` direkt (jo përmes navigimit) dhe klikimi i lidhjeve të kthimit | Lidhjet relative funksionojnë pavarësisht se nga cila faqe niset përdoruesi | Lidhjet relative funksionuan pa problem edhe kur `kontakt.html` hapet e para |

## Rruga e një kërkese (DevTools → Network)

Kur `index.html` hapet përmes serverit lokal, dokumenti kryesor shfaqet
në panelin Network me metodë `GET`, status `200`, dhe URL të formës
`http://localhost:<port>/index.html`; skedarët e lidhur (`style.css`,
faqet e tjera HTML) shfaqen si kërkesa vijuese, secila me `GET` dhe
`200` po qe se ekzistojnë në të njëjtin folder.

## Reflektim individual

**Cili ndryshim është ruajtur lokalisht por ende nuk shihet në GitHub?**

Çdo ndryshim që është bërë `commit` lokalisht, por për të cilin nuk
është ekzekutuar ende `git push`, ekziston vetëm në repository-n lokal
(në historikun e commit-eve në kompjuterin tim) dhe nuk shfaqet ende në
GitHub. Deri sa `push` të kryhet me sukses, versioni i largët
(remote) mbetet një ose disa commit-e prapa versionit lokal.

## Deklarimi i AI-së dhe burimeve

Struktura HTML, stili CSS dhe teksti i kësaj pasaporte të sajuar u
hartuan me ndihmën e Claude (Anthropic) si asistent gjatë realizimit
të detyrës; referenca tematike ishin kapitujt 1–3 të *Designing the
User Interface* (Shneiderman et al.). Kodi u rishikua dhe u testua
personalisht para dorëzimit.
