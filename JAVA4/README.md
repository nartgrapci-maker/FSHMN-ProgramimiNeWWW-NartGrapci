# Java IV — Festivali që përshtatet në çdo ekran

## Çfarë realizova

Një faqe me gjashtë karta aktivitetesh (titull, kategori, orar, lidhje detajesh) dhe një menu.

- Menuja përdor Flexbox (`flex-wrap`).
- Kartat përdorin Grid: 1 kolonë nën 600 px, 2 nga 600 px, 3 nga 900 px.
- Imazhi është fleksibël (`max-width: 100%; height: auto`) dhe teksti nuk ka lartësi fikse.
- Teksti i gjatë mbetet brenda kartës (`overflow-wrap: anywhere` dhe `min-width: 0`).
- Menuja është e përdorshme me tastierë; fokusi është i dukshëm.

## Hapat e hapjes

Hap `index.html` në shfletues. Nuk nevojitet server.

## Testet

| Hyrje | Rezultat i pritur | Rezultat i marrë |
|---|---|---|
| 360 px | 1 kolonë, pa scroll horizontal | 1 kolonë, pa scroll |
| 768 px | 2 kolona, pa scroll horizontal | 2 kolona, pa scroll |
| 1280 px | 3 kolona, pa scroll horizontal | 3 kolona, pa scroll |
| `Tab` nga fillimi | fokus te "Kalo te përmbajtja", pastaj lidhjet e menusë | e saktë, me kufi fokusi të dukshëm |
| Titull 100 karakteresh pa hapësira (360/768/1280 px) | brenda kartës, pa scroll horizontal | brenda kartës, pa scroll |

## Reflektim

Flexbox e zgjedh kur elementet renditen në një drejtim (një rresht ose një kolonë), si menuja. Grid e zgjedh kur kam rreshta dhe kolona njëkohësisht, si rrjeta e kartave.

## Deklarimi i AI/burimeve

Tek Kodi dhe README ka ndihmuar Claude (Anthropic). Imazhi `assets/festival.svg` është një ilustrim i thjeshtë i krijuar për këtë ushtrim. Referenca: kap. 6–7 të librit të lëndës.
