# Java V — Formulari i misionit sekret

Skedarët: `index.html` (formulari + tabela), `pranuar.html` (faqja e demonstrimit), `style.css`.

## Para kodimit

- **Hyrjet:** pseudonimi (tekst 3–20), email, numri i personave (1–5), kategoria (Art/Shkencë), pranimi i rregullave.
- **Daljet:** nëse ka gabim, shfletuesi tregon mesazh dhe nuk dërgon; nëse gjithçka është valide, hapet `pranuar.html?pseudonimi=...&email=...&persona=...&kategoria=...&rregullat=po`.
- **Rast normal:** `Hija`, `hija@example.org`, `3`, Art, rregullat të pranuara → kalon te `pranuar.html`.
- **Rast kufitar 1:** persona `0` ose `6` → refuzohet (`min="1"`, `max="5"`); `1` dhe `5` pranohen.
- **Rast kufitar 2:** pseudonim me 2 karaktere (`Ab`) → refuzohet nga `minlength="3"`; 20 karaktere pranohen, më shumë nuk mund të shkruhen (`maxlength="20"`).

## Rastet e pranimit

- [x] Formulari bosh nuk kalon (`required` te çdo kontroll).
- [x] Email pa format email-i (`type="email"`) dhe grup 0 ose 6 nuk kalojnë.
- [x] Të dhënat valide çojnë te `pranuar.html` me GET; tabela ka `caption` dhe `th scope="col"` / `scope="row"`.

## Shënim për GET

Me `method="get"` vlerat e formularit shtohen në URL, pra duken në shiritin e adresës dhe në historikun e shfletuesit. `pranuar.html` është faqe statike, prandaj asgjë nuk ruhet në server. Kjo është arsyeja pse përdoren vetëm të dhëna të sajuara.

## Reflektim individual

`required` dhe atributet e tjera HTML kontrollohen vetëm në shfletuesin e përdoruesit. Përdoruesi mund t'i heqë me DevTools, ta çaktivizojë validimin (`novalidate`) ose të dërgojë kërkesë direkt me `curl`, pa e hapur fare formularin. Pra validimi në frontend e ndihmon përdoruesin, por nuk mbron sistemin. Në një sistem real serveri duhet t'i kontrollojë sërish të gjitha të dhënat (gjatësinë, formatin, kufijtë), duhet të përdorë HTTPS dhe për të dhëna personale ose sekrete duhet të përdorë POST.
