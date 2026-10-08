# Java III — Klinika e CSS: shpëto afishen

Skedarët: `index.html`, `style.css` (stili kryesor, variabla `:root`), `gabime.css` (rregullimi i gabimeve).

## Diagnoza në gabime.css
- **Konflikti:** `#poster` (specifikë 1,0,0) mundi `.poster` (0,1,0), sepse specifika vlen para renditjes. Dolën `color: white` mbi `background: white`.
- **Overflow:** `width: 700px` + `padding: 80px` kalon 360 px. Zgjidhja: `width: 100%`, `max-width: 700px`, `padding: clamp(...)`.
- Rregulluar pa `!important`: hoqa selektorin me id dhe lashë një rregull me klasë.

## Box model dhe box-sizing
Me `content-box`, gjerësia totale = width + padding + border. Me `border-box` (`* { box-sizing: border-box }`) width përfshin padding dhe border, ndaj `width: 100%` nuk e kalon kontejnerin.

## Focus-visible
Lidhjet dhe butoni kanë `outline` 3px të verdhë me `outline-offset`, i dukshëm me Tab.

## Etiketat
Falas (✓, kufi i plotë), vende të kufizuara (⚠, kufi me viza), online (🌐). Dallimi është me tekst, simbol dhe stil kufiri, jo vetëm ngjyrë.

## Reflektim
Rregulli me `#poster` fitoi në kaskadë sepse selektori me id ka specifikë më të lartë se ai me klasë; renditja numëron vetëm kur specifika është e barabartë.
