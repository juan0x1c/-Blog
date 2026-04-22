document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation handling (SPA Routing)
    const navLinks = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.view-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            
            // Update Active Link State
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Hide all sections, show target
            sections.forEach(sec => {
                sec.classList.remove('active-section');
                sec.classList.add('hidden');
            });
            const targetSection = document.getElementById(targetId);
            targetSection.classList.remove('hidden');
            targetSection.classList.add('active-section');
            
            // Mobile Menu close
            const mobileMenuBox = document.querySelector('.nav-links');
            if(mobileMenuBox.classList.contains('show')) {
                mobileMenuBox.classList.remove('show');
            }
        });
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    if(mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            document.querySelector('.nav-links').classList.toggle('show');
        });
    }

    // Footer Year
    const yearEl = document.getElementById('year');
    if(yearEl) yearEl.textContent = new Date().getFullYear();

    // Back to tips logic for individual details
    const backBtn = document.getElementById('back-to-tips');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            document.querySelectorAll('.view-section').forEach(sec => {
                sec.classList.remove('active-section');
                sec.classList.add('hidden');
            });
            const tipsSec = document.getElementById('tips');
            tipsSec.classList.remove('hidden');
            tipsSec.classList.add('active-section');
            
            // update nav active state
            document.querySelectorAll('.nav-btn').forEach(l => l.classList.remove('active'));
            document.querySelector('.nav-btn[data-target="tips"]').classList.add('active');
        });
    }

    // Back to blog logic for individual details
    const backBtnBlog = document.getElementById('back-to-blog');
    if (backBtnBlog) {
        backBtnBlog.addEventListener('click', () => {
            document.querySelectorAll('.view-section').forEach(sec => {
                sec.classList.remove('active-section');
                sec.classList.add('hidden');
            });
            const blogSec = document.getElementById('blog');
            blogSec.classList.remove('hidden');
            blogSec.classList.add('active-section');
            
            // update nav active state
            document.querySelectorAll('.nav-btn').forEach(l => l.classList.remove('active'));
            document.querySelector('.nav-btn[data-target="blog"]').classList.add('active');
        });
    }

    // Back to writeups logic for individual details
    const backBtnWriteups = document.getElementById('back-to-writeups');
    if (backBtnWriteups) {
        backBtnWriteups.addEventListener('click', () => {
            document.querySelectorAll('.view-section').forEach(sec => {
                sec.classList.remove('active-section');
                sec.classList.add('hidden');
            });
            const writeupSec = document.getElementById('writeups');
            writeupSec.classList.remove('hidden');
            writeupSec.classList.add('active-section');
            
            // update nav active state
            document.querySelectorAll('.nav-btn').forEach(l => l.classList.remove('active'));
            document.querySelector('.nav-btn[data-target="writeups"]').classList.add('active');
        });
    }

    // 2. Render Data
    renderWhoami();
    renderCompetitions();
    renderBlog();
    renderTagCloud();
    renderWriteups();
    renderWriteupsCategories();
    renderTips();
    renderCategories();
    renderSubCategories();

    // 3. Cinematic Features
    initCinematicSplash();
    initPhishingDetector();
    initAttackMap();
    initSecretGenerator();
});

// Render Home/Whoami
function renderWhoami() {
    const container = document.getElementById('whoami-content');
    
    container.innerHTML = `
        <div id="terminal-history">
            <div style="color: var(--accent-green); margin-bottom: 1rem; font-family: var(--font-mono);">daca esti cu adevarat hacker inseamna ca stii sa dai niste comenzi</div>
        </div>
        <div id="terminal-input-line" style="display: flex; align-items: center; padding-top: 0.5rem;">
            <span class="prompt">guest@cybersec:~$</span>
            <input type="text" id="terminal-input" autocomplete="off" spellcheck="false" style="background: transparent; border: none; color: var(--text-main); font-family: var(--font-mono); font-size: 1rem; width: 100%; outline: none;" autofocus>
        </div>
    `;

    const input = document.getElementById('terminal-input');
    const history = document.getElementById('terminal-history');
    let suPending = false;

    // Keep focus on input when clicking terminal body
    const body = document.querySelector('.terminal-body');
    if(body) {
        body.addEventListener('click', () => {
            input.focus();
        });
    }

    input.addEventListener('keydown', async function(e) {
        if (e.key === 'Enter') {
            const cmd = this.value.trim();
            this.value = '';
            
            if (suPending) {
                const cmdHistoryLine = document.createElement('div');
                cmdHistoryLine.innerHTML = `<span class="prompt">Password:</span> <span style="color: var(--text-main); font-family: var(--font-mono);">${'*'.repeat(cmd.length)}</span>`;
                cmdHistoryLine.style.marginBottom = '0.5rem';
                history.appendChild(cmdHistoryLine);

                const msgBuffer = new TextEncoder().encode(cmd);
                const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

                if (hashHex === '34a07356d10f2b44f82a19b06cf2ff91ebfbd91d445fa89fc0bb9a052fc18891') {
                    window.isTerminalAdmin = true;
                    if(typeof renderWriteups === 'function') renderWriteups();
                    const genModal = document.getElementById('secret-generator-modal');
                    if(genModal) genModal.style.display = 'flex';
                    
                    const outputLine = document.createElement('div');
                    outputLine.style.marginBottom = '1.5rem';
                    outputLine.style.color = 'var(--accent-green)';
                    outputLine.innerHTML = `[+] Access granted. Initializing classified generator protocol... <br> [+] Admin mode features unlocked.`;
                    history.appendChild(outputLine);
                } else {
                    const outputLine = document.createElement('div');
                    outputLine.style.marginBottom = '1.5rem';
                    outputLine.style.color = '#ef4444';
                    outputLine.innerHTML = `su: Authentication failure`;
                    history.appendChild(outputLine);
                }

                input.type = 'text';
                suPending = false;
                const activePrompt = document.querySelector('#terminal-input-line .prompt');
                if(activePrompt) activePrompt.innerText = 'guest@cybersec:~$';
                if(body) body.scrollTop = body.scrollHeight;
                return;
            }

            if (cmd === 'su' || cmd === 'sudo su') {
                const cmdHistoryLine = document.createElement('div');
                cmdHistoryLine.innerHTML = `<span class="prompt">guest@cybersec:~$</span> <span style="color: var(--text-main); font-family: var(--font-mono);">${escapeHTML(cmd)}</span>`;
                cmdHistoryLine.style.marginBottom = '0.5rem';
                history.appendChild(cmdHistoryLine);
                
                suPending = true;
                input.type = 'password';
                const activePrompt = document.querySelector('#terminal-input-line .prompt');
                if(activePrompt) activePrompt.innerText = 'Password:';
                if(body) body.scrollTop = body.scrollHeight;
                return;
            }

            // Add typed command to history
            const cmdHistoryLine = document.createElement('div');
            cmdHistoryLine.innerHTML = `<span class="prompt">guest@cybersec:~$</span> <span style="color: var(--text-main); font-family: var(--font-mono);">${escapeHTML(cmd)}</span>`;
            cmdHistoryLine.style.marginBottom = '0.5rem';
            history.appendChild(cmdHistoryLine);

            // Handle execution
            const output = executeTerminalCommand(cmd);
            if (output) {
                const outputLine = document.createElement('div');
                outputLine.style.marginBottom = '1.5rem';
                outputLine.style.color = 'var(--text-main)';
                outputLine.innerHTML = output;
                history.appendChild(outputLine);
            } else {
                // For empty command, just new line
                if (cmd !== 'clear') {
                    const spacer = document.createElement('div');
                    spacer.style.marginBottom = '0.5rem';
                    history.appendChild(spacer);
                }
            }

            // Scroll to bottom
            if(body) {
                body.scrollTop = body.scrollHeight;
            }
        }
    });
}

function executeTerminalCommand(cmd) {
    if (!cmd) return '';
    const args = cmd.split(' ').filter(x => x.length > 0);
    const command = args[0].toLowerCase();

    let skillsHtml = portfolioData.user.skills.map(s => `<span style="color: var(--accent-secondary);">"${s}"</span>`).join(', ');

    switch (command) {
        case 'whoami':
            return `
                <div style="padding-left: 0.5rem; line-height: 1.8;">
                    <strong style="color: var(--accent-green)">Name:</strong> ${portfolioData.user.name} <br>
                    <strong style="color: var(--accent-green)">Class:</strong> ${portfolioData.user.classLevel} <br><br>
                    ${portfolioData.user.description}
                    <br><br>
                    <strong style="color: var(--accent-primary)">Skills:</strong> [ ${skillsHtml} ]
                </div>
            `;
        case 'ls':
            return `
                <span style="color: var(--accent-primary); margin-right: 1.5rem; font-family: var(--font-mono);">about.txt</span>
                <span style="color: var(--accent-green); margin-right: 1.5rem; font-family: var(--font-mono);">portfolio_data</span>
                <span style="color: var(--text-dim); margin-right: 1.5rem; font-family: var(--font-mono);">.secrets</span>
            `;
        case 'cat':
            if (args.length < 2) return `<span style="color: #ef4444;">cat: missing file operand</span>`;
            const file = args[1];
            if (file === 'about.txt') {
                return `
                    <div style="padding-left: 0.5rem; line-height: 1.8;">
                        <strong style="color: var(--accent-green)">Name:</strong> ${portfolioData.user.name} <br>
                        <strong style="color: var(--accent-green)">Class:</strong> ${portfolioData.user.classLevel} <br><br>
                        ${portfolioData.user.description}
                        <br><br>
                        <strong style="color: var(--accent-primary)">Skills:</strong> [ ${skillsHtml} ]
                    </div>
                `;
            } else if (file === '.secrets') {
                return `<span style="color: #f43f5e; font-style: italic;">[RESTRICTED FILE]<br>Permission Denied... just kidding: CTF_FLAG{welcome_to_the_matrix_hacker}</span>`;
            } else if (file === 'portfolio_data') {
                return `<span style="color: var(--text-dim);">[+] Portfolio data loaded in memory. GUI visualizer active.</span>`;
            } else {
                return `<span style="color: #ef4444;">cat: ${escapeHTML(file)}: No such file or directory</span>`;
            }
        case 'secrets':
        case 'secrets:)':
        case 'secrets:))':
        case 'secrets:)))':
            return `<span style="color: #f43f5e; font-style: italic;">Ah! Ai găsit secretul! (Sau nu... ?) :)))<br>Hack the planet! 📡</span>`;

        case 'help':
            return `
                <span style="color: var(--accent-secondary); font-weight: bold;">Comenzi disponibile:</span><br>
                <div style="padding-left: 1rem; font-family: var(--font-mono);">
                    whoami  - afișează informații despre mine<br>
                    ls      - listează directoarele/fișierele curente<br>
                    cat     - citește/afișează fișiere (ex: cat about.txt)<br>
                    secrets - interzis!<br>
                    clear   - curăță consola<br>
                    help    - afișează acest mesaj
                </div>
            `;
        case 'clear':
            document.getElementById('terminal-history').innerHTML = '';
            document.getElementById('terminal-history').innerHTML = `<div style="color: var(--accent-green); margin-bottom: 1rem; font-family: var(--font-mono);">daca esti cu adevarat hacker inseamna ca stii sa dai niste comenzi</div>`;
            return '';
        default:
            return `<span style="color: #ef4444;">bash: ${escapeHTML(command)}: command not found</span> <br><span style="color: var(--text-dim);">Încearcă să scrii 'help'.</span>`;
    }
}

// Render Competitions
function renderCompetitions() {
    const container = document.getElementById('competitions-list');
    
    let html = '';
    portfolioData.competitions.forEach(comp => {
        let imagesHtml = '';
        if (comp.images && comp.images.length > 0) {
            imagesHtml = `<div class="comp-images" style="display: flex; gap: 10px; margin-top: 15px;">`;
            comp.images.forEach(img => {
                imagesHtml += `<img src="${img}" alt="${comp.title}" style="width: 150px; height: 150px; object-fit: cover; border-radius: 8px; border: 1px solid var(--border-color);">`;
            });
            imagesHtml += `</div>`;
        }
        
        html += `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <span class="comp-date">${comp.date} [Status: ${comp.status}]</span>
                    <h3 class="comp-title">${comp.title}</h3>
                    <p class="card-desc">${comp.description}</p>
                    ${imagesHtml}
                    ${comp.link !== '#' ? `<a href="${comp.link}" target="_blank" class="card-link" style="margin-top: 1rem;">View Details <i class="fa-solid fa-arrow-right"></i></a>` : ''}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Render Blog
let currentTag = null;

function renderTagCloud() {
    const container = document.getElementById('tag-cloud');
    if (!container) return;
    const allTags = [...new Set(portfolioData.blogPosts.map(p => p.tag))];
    let html = `<span class="tag${!currentTag ? ' active' : ''}" data-tag="all">All</span>`;
    allTags.forEach(t => {
        const activeClass = (currentTag === t) ? ' active' : '';
        html += `<span class="tag${activeClass}" data-tag="${t}">${t}</span>`;
    });
    container.innerHTML = html;
    container.querySelectorAll('.tag').forEach(el => {
        el.addEventListener('click', () => {
            currentTag = el.dataset.tag === 'all' ? null : el.dataset.tag;
            renderBlog();
            renderTagCloud();
        });
    });
}

function renderBlog() {
    const container = document.getElementById('blog-list');
    let html = '';
    const posts = currentTag ? portfolioData.blogPosts.filter(p => p.tag === currentTag) : portfolioData.blogPosts;
    posts.forEach(post => {
        html += `
            <div class="card">
                <span class="card-tag" style="background: rgba(255,255,255,0.1); color: var(--text-main); border: 1px solid rgba(255,255,255,0.2);">${post.tag}</span>
                <h3 class="card-title">${post.title}</h3>
                <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-dim);">${post.date}</span>
                <p class="card-desc">${post.snippet}</p>
                <a href="#" class="card-link" onclick="showBlogDetail(event, ${post.id})">Citește Mai Mult <i class="fa-solid fa-book-open"></i></a>
            </div>
        `;
    });
    container.innerHTML = html;
}

function showBlogDetail(event, id) {
    if(event) event.preventDefault();
    const post = portfolioData.blogPosts.find(p => p.id === id);
    if(!post) return;
    
    // Hide all sections
    document.querySelectorAll('.view-section').forEach(sec => {
        sec.classList.remove('active-section');
        sec.classList.add('hidden');
    });
    
    // Show blog-detail
    const detailSec = document.getElementById('blog-detail');
    detailSec.classList.remove('hidden');
    detailSec.classList.add('active-section');
    
    // Render content
    const container = document.getElementById('blog-content-container');
    container.innerHTML = `
        <h1 style="font-size: 2.2rem; color: var(--text-main); margin-bottom: 0.5rem; margin-top: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">${post.title}</h1>
        <div style="font-family: var(--font-mono); color: var(--text-dim); font-size: 0.9rem; margin-bottom: 2rem; margin-top: 1rem;">
            <span><i class="fa-regular fa-calendar"></i> ${post.date}</span> &nbsp;|&nbsp; 
            <span style="color: var(--accent-secondary);">${post.tag}</span>
        </div>
        <div style="color: var(--text-main); font-size: 1.05rem; line-height: 1.8; max-width: 800px; white-space: pre-wrap; font-family: var(--font-sans);">
            ${post.content}
        </div>
    `;
}

// Render Write-ups
function renderWriteups(filterCat = "Toate") {
    const container = document.getElementById('writeups-list');
    
    let filtered = portfolioData.writeups;
    if(filterCat !== "Toate") {
        filtered = portfolioData.writeups.filter(w => w.category === filterCat);
    }
    
    let html = '';
    filtered.forEach(post => {
        let deleteBtn = '';
        if (window.isTerminalAdmin) {
            deleteBtn = `<button onclick="deleteWriteup(event, ${post.id})" style="position: absolute; top: 1rem; right: 1rem; background: transparent; border: none; color: #ef4444; font-size: 1.2rem; cursor: pointer; z-index: 10;" title="Șterge din memorie"><i class="fa-solid fa-trash"></i></button>`;
        }
        
        html += `
            <div class="card" style="border-left: 2px solid var(--accent-primary); position: relative;">
                ${deleteBtn}
                <span class="card-tag" style="background: var(--accent-dim); color: var(--accent-primary); border: 1px solid var(--border-color);">${post.tag}</span>
                <h3 class="card-title">${post.title}</h3>
                <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-dim);">${post.date}</span>
                <p class="card-desc">${post.snippet}</p>
                <a href="#" class="card-link" onclick="showWriteupDetail(event, ${post.id})">Citește Rezolvarea <i class="fa-solid fa-flag"></i></a>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function showWriteupDetail(event, id) {
    if(event) event.preventDefault();
    const post = portfolioData.writeups.find(p => p.id === id);
    if(!post) return;
    
    // Hide all sections
    document.querySelectorAll('.view-section').forEach(sec => {
        sec.classList.remove('active-section');
        sec.classList.add('hidden');
    });
    
    // Show writeup-detail
    const detailSec = document.getElementById('writeup-detail');
    detailSec.classList.remove('hidden');
    detailSec.classList.add('active-section');
    
    // Render content
    const container = document.getElementById('writeup-content-container');
    container.innerHTML = `
        <h1 style="font-size: 2.5rem; color: var(--accent-primary); margin-bottom: 0.5rem; margin-top: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">${post.title}</h1>
        <div style="font-family: var(--font-mono); color: var(--text-dim); font-size: 0.95rem; margin-bottom: 3rem; margin-top: 1rem;">
            <span><i class="fa-regular fa-calendar"></i> ${post.date}</span> &nbsp;|&nbsp; 
            <span style="color: var(--text-main); border-bottom: 1px dashed var(--accent-primary);">${post.tag}</span>
        </div>
        <div style="color: var(--text-dim); font-size: 1.15rem; line-height: 1.8; max-width: 850px; font-family: var(--font-sans);">
            ${post.content}
        </div>
    `;
}

// Render Write-ups Categories
function renderWriteupsCategories() {
    const container = document.getElementById('writeups-categories');
    if(!container) return;
    
    let html = '';
    portfolioData.writeupsCategories.forEach((cat, index) => {
        html += `<button class="filter-btn ${index === 0 ? 'active' : ''}" data-filter="${cat}">${cat}</button>`;
    });
    
    container.innerHTML = html;

    // Add filter logic
    const filterBtns = container.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update Active Buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const category = e.target.getAttribute('data-filter');
            renderWriteups(category);
        });
    });
}

let currentTipsCategory = "Toate";
let currentTipsSubCategory = null;

function renderCategories() {
    const container = document.getElementById('tips-categories');
    if (!container) return;
    
    let html = '';
    portfolioData.categories.forEach((cat) => {
        const activeClass = (currentTipsCategory === cat) ? 'active' : '';
        html += `<button class="filter-btn ${activeClass}" data-filter="${cat}">${cat}</button>`;
    });
    
    container.innerHTML = html;

    const filterBtns = container.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentTipsCategory = e.target.getAttribute('data-filter');
            currentTipsSubCategory = null; // Reset subcategory on main category change
            
            // Update UI
            renderCategories(); 
            renderSubCategories();
            renderTips();
        });
    });
}

function renderSubCategories() {
    const container = document.getElementById('tips-subcategories');
    if (!container) return;

    if (currentTipsCategory === "Toate") {
        container.classList.add('hidden');
        return;
    }

    // Find subcategories for the current category
    const subcats = [...new Set(
        portfolioData.tipsTricks
            .filter(t => t.category === currentTipsCategory && t.subcategory)
            .map(t => t.subcategory)
    )];

    if (subcats.length === 0) {
        container.classList.add('hidden');
        return;
    }

    container.classList.remove('hidden');
    let html = `<button class="sub-filter-btn ${!currentTipsSubCategory ? 'active' : ''}" data-sub="all">Toate ${currentTipsCategory}</button>`;
    subcats.forEach(sub => {
        const activeClass = (currentTipsSubCategory === sub) ? 'active' : '';
        html += `<button class="sub-filter-btn ${activeClass}" data-sub="${sub}">${sub}</button>`;
    });

    container.innerHTML = html;

    const subBtns = container.querySelectorAll('.sub-filter-btn');
    subBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentTipsSubCategory = e.target.getAttribute('data-sub') === 'all' ? null : e.target.getAttribute('data-sub');
            renderSubCategories();
            renderTips();
        });
    });
}

// Escape HTML for XSS payloads securely
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}

function renderTips() {
    const container = document.getElementById('tips-list');
    if (!container) return;
    
    let filteredTips = portfolioData.tipsTricks;
    
    // Primary category filter
    if(currentTipsCategory !== "Toate") {
        filteredTips = filteredTips.filter(t => t.category === currentTipsCategory);
    }

    // Secondary subcategory filter
    if(currentTipsSubCategory) {
        filteredTips = filteredTips.filter(t => t.subcategory === currentTipsSubCategory);
    }

    let html = '';
    filteredTips.forEach(tip => {
        html += `
            <div class="card" style="border-left: 2px solid ${getColorForCat(tip.category)}">
                <span class="card-tag" data-cat="${tip.category}">${tip.category}</span>
                <h3 class="card-title">${tip.title}</h3>
                <p class="card-desc">${tip.description}</p>
                <a href="#" class="card-link" onclick="showTipDetail(event, ${tip.id})">Aprofundează <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function showTipDetail(event, id) {
    if(event) event.preventDefault();
    const tip = portfolioData.tipsTricks.find(t => t.id === id);
    if(!tip) return;
    
    // Hide all sections
    document.querySelectorAll('.view-section').forEach(sec => {
        sec.classList.remove('active-section');
        sec.classList.add('hidden');
    });
    
    // Show tip-detail
    const detailSec = document.getElementById('tip-detail');
    detailSec.classList.remove('hidden');
    detailSec.classList.add('active-section');
    
    // Render content
    const container = document.getElementById('tip-content-container');
    container.innerHTML = `
        <h2 class="section-title" style="margin-top:1rem;">${tip.title} <span class="card-tag" style="font-size:0.45em; vertical-align:middle; background:rgba(255,255,255,0.1); border:1px solid ${getColorForCat(tip.category)}" data-cat="${tip.category}">${tip.category}</span></h2>
        <p class="section-desc">${tip.description}</p>
        <div class="terminal-card" style="margin-top:2rem; width:100%; max-width:100%;">
            <div class="terminal-header" style="border-bottom: 1px solid ${getColorForCat(tip.category)};">
                <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
                <span class="title">cat /tips/${tip.category.toLowerCase()}_methods.txt</span>
            </div>
            <pre style="padding: 1.5rem; font-family: var(--font-mono); font-size: 0.95rem; color: var(--accent-green); white-space: pre-wrap; word-break: break-all; overflow-x: auto; line-height: 1.6;">${escapeHTML(tip.content)}</pre>
        </div>
    `;
}

function getColorForCat(cat) {
    const colors = {
        'Pwn': '#f43f5e', // Rose-500
        'Web': '#10b981', // Emerald-500
        'Crypto': '#8b5cf6', // Violet-500
        'PCAP': '#0ea5e9', // Sky-500
        'Stego': '#d946ef', // Fuchsia-500
        'Forensics': '#eab308', // Yellow-500
        'Reverse': '#f97316' // Orange-500
    };
    return colors[cat] || '#818cf8'; // Indigo-400
}

/* =========================================================================
   CINEMATIC & EFFECTS LOGIC
   ========================================================================= */

// 2. Cinematic Splash Screen
function initCinematicSplash() {
    const splash = document.getElementById('splash-screen');
    if (!splash) return;

    // Check if already visited
    if (sessionStorage.getItem('hacker_visited') === 'true') {
        splash.style.display = 'none';
        return;
    }

    const authBtn = document.getElementById('start-auth-btn');
    const statusText = document.getElementById('splash-status');
    const logText = document.getElementById('splash-log');
    const progressBar = document.getElementById('splash-bar');

    authBtn.addEventListener('click', () => {
        authBtn.classList.add('scanning');
        statusText.innerText = 'AUTHENTICATING...';
        statusText.dataset.text = 'AUTHENTICATING...';
        
        let progress = 0;
        let pInterval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) progress = 100;
            progressBar.style.width = progress + '%';
            
            if (progress > 20 && progress < 50) logText.innerText = 'Decrypting credentials...';
            else if (progress >= 50 && progress < 80) logText.innerText = 'Bypassing firewall...';
            else if (progress >= 80) logText.innerText = 'Extracting handshake...';

            if (progress === 100) {
                clearInterval(pInterval);
                setTimeout(() => {
                    authBtn.classList.remove('scanning');
                    statusText.innerText = 'ACCESS GRANTED';
                    statusText.dataset.text = 'ACCESS GRANTED';
                    statusText.style.color = 'var(--accent-green)';
                    logText.innerText = 'Welcome back, operator.';
                    
                    setTimeout(() => {
                        splash.style.opacity = '0';
                        setTimeout(() => {
                            splash.style.display = 'none';
                            sessionStorage.setItem('hacker_visited', 'true');
                        }, 500);
                    }, 1500);
                }, 500);
            }
        }, 300);
    });
}

// 3. Phishing Detector Mock
function initPhishingDetector() {
    const scanBtn = document.getElementById('phish-scan-btn');
    const inputField = document.getElementById('phish-input');
    const outputContainer = document.getElementById('phish-output');
    if(!scanBtn || !inputField || !outputContainer) return;

    scanBtn.addEventListener('click', () => {
        const target = inputField.value.trim();
        if(!target) {
            outputContainer.innerHTML = '<span style="color: #ef4444;">[!] Please enter a target email to analyze.</span>';
            return;
        }

        outputContainer.innerHTML = '<span style="color: var(--accent-secondary);">[~] Analyzing headers and PTR records...</span>';
        
        // Simulate progress
        setTimeout(() => {
            outputContainer.innerHTML = '<span style="color: var(--accent-secondary);">[~] Checking SPF/DKIM/DMARC alignment...</span>';
            
            setTimeout(() => {
                // Determine mock result based on input length parity (pseudo-random but deterministic for the same input)
                const isMalicious = target.length % 2 === 0 || target.includes('paypal') || target.includes('support') || target.includes('login');
                
                if (isMalicious) {
                    outputContainer.innerHTML = `
                        <span style="color: #ef4444; font-weight: bold;">[!] ALERT: MALICIOUS PATTERN DETECTED</span><br>
                        <span style="color: var(--text-dim);">- Domain reputation: LOW<br>- Lookalike domain detected.</span>
                    `;
                } else {
                    outputContainer.innerHTML = `
                        <span style="color: var(--accent-green); font-weight: bold;">[+] STATUS: CLEAN</span><br>
                        <span style="color: var(--text-dim);">- Authentication checks passed. No anomalies found.</span>
                    `;
                }
            }, 1200);
        }, 800);
    });
}

// 4. Attack Map Simulation
function initAttackMap() {
    const svg = document.getElementById('world-map-svg');
    if (!svg) return;

    // Random coordinates inside the 1000x500 svg viewBox
    setInterval(() => {
        const startX = Math.random() * 800 + 100;
        const startY = Math.random() * 300 + 100;
        const endX = Math.random() * 800 + 100;
        const endY = Math.random() * 300 + 100;

        // Draw Line
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", startX);
        line.setAttribute("y1", startY);
        line.setAttribute("x2", endX);
        line.setAttribute("y2", endY);
        line.setAttribute("stroke", "rgba(239, 68, 68, 0.4)");
        line.setAttribute("stroke-width", "2");
        line.classList.add("attack-line");
        
        // Draw Node
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", endX);
        circle.setAttribute("cy", endY);
        circle.setAttribute("r", "2");
        circle.setAttribute("fill", "#ef4444");
        circle.classList.add("attack-node");

        // Tooltip
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", endX + 10);
        text.setAttribute("y", endY - 10);
        text.textContent = "ATTACK DETECTED";
        text.classList.add("attack-popup");

        svg.appendChild(line);
        svg.appendChild(circle);
        svg.appendChild(text);

        // Cleanup after animation completes
        setTimeout(() => {
            if (svg.contains(line)) svg.removeChild(line);
            if (svg.contains(circle)) svg.removeChild(circle);
            if (svg.contains(text)) svg.removeChild(text);
        }, 4000); // 4s based on CSS animation duration
        
    }, 2000); // Trigger an attack every 2 seconds
}

// 5. Secret Generator
function initSecretGenerator() {
    const modal = document.getElementById('secret-generator-modal');
    if(!modal) return;
    
    const closeBtn = document.getElementById('gen-close-btn');
    if(closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    const genBtn = document.getElementById('gen-btn');
    const copyBtn = document.getElementById('gen-copy-btn');
    const output = document.getElementById('gen-output');

    if(genBtn) {
        genBtn.addEventListener('click', () => {
            const title = document.getElementById('gen-title').value;
            const tag = document.getElementById('gen-tag').value;
            const cat = document.getElementById('gen-cat').value;
            const desc = document.getElementById('gen-desc').value;
            const content = document.getElementById('gen-content').value;

            let nextId = 1;
            if (typeof portfolioData !== 'undefined' && portfolioData.writeups && portfolioData.writeups.length > 0) {
                nextId = Math.max(...portfolioData.writeups.map(w => w.id || 0)) + 1;
            }

            let formattedContent = content;
            if (!content.includes('<') && !content.includes('>') && content.trim() !== '') {
                formattedContent = content.replace(/\n\n/g, '</p><p style="margin-top: 1rem;">').replace(/\n/g, '<br>');
                formattedContent = `<p>${formattedContent}</p>`;
            }

            // 1. Generate text for Copy-Paste
            const template = `        {
            id: ${nextId},
            title: "${title.replace(/"/g, '\\"')}",
            date: "Recent",
            tag: "${tag.replace(/"/g, '\\"')}",
            category: "${cat.replace(/"/g, '\\"')}",
            snippet: "${desc.replace(/"/g, '\\"')}",
            content: \\\`
${formattedContent}\\\`
        },`;

            output.value = template;
            output.classList.remove('hidden');
            output.style.display = 'block';
            
            copyBtn.classList.remove('hidden');
            copyBtn.style.display = 'inline-block';
            
            // 2. LIVE PREVIEW: push to standard array and re-render the ui instantly
            if (typeof portfolioData !== 'undefined' && portfolioData.writeups) {
                portfolioData.writeups.push({
                    id: nextId,
                    title: title,
                    date: "Recent",
                    tag: tag,
                    category: cat,
                    snippet: desc,
                    content: formattedContent
                });
                
                // Switch view to writeups automatically to show the preview
                document.querySelectorAll('.view-section').forEach(sec => {
                    sec.classList.remove('active-section');
                    sec.classList.add('hidden');
                });
                const writeupSec = document.getElementById('writeups');
                if(writeupSec) {
                    writeupSec.classList.remove('hidden');
                    writeupSec.classList.add('active-section');
                }
                
                // Update nav active state
                document.querySelectorAll('.nav-btn').forEach(l => l.classList.remove('active'));
                const targetLink = document.querySelector('.nav-btn[data-target="writeups"]')
                if(targetLink) targetLink.classList.add('active');
                
                // Trigger re-render to view it
                if (typeof renderWriteups === 'function') {
                    renderWriteups();
                }
                
                // Optionally auto-close the generator
                modal.style.display = 'none';
            }
        });
    }

    if(copyBtn) {
        copyBtn.addEventListener('click', () => {
            output.select();
            document.execCommand('copy');
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copiat!';
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
            }, 2000);
        });
    }
}
 
// 6. Delete Admin Logic
window.deleteWriteup = function(event, id) {
    if(event) { event.preventDefault(); event.stopPropagation(); }
    if(confirm("Ești sigur că vrei să ștergi acest write-up din vizualizarea live?")) {
        portfolioData.writeups = portfolioData.writeups.filter(w => w.id !== id);
        
        // render with currently active category
        const activeCatBtn = document.querySelector('#writeups-categories .filter-btn.active');
        const cat = activeCatBtn ? activeCatBtn.getAttribute('data-filter') : "Toate";
        renderWriteups(cat);
    }
};
