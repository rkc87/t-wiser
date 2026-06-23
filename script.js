// Nosso Banco de Dados Dinâmico Completo (Incluindo Tutorial)
const caseDatabase = {
    "0": {
        title: "[ CASE 0: CALIBRATION PROTOCOL ]",
        location: "London Office, UK",
        time: "Monday, 9 a.m.",
        profile: "- [ CALIBRATION TARGET ]\n- System test for field agent synchronization.\n- Evaluates response time to hidden exchange rate markups.",
        personaId: "0", // Não usado no fluxo normal, mas evita erros
        narrative: "[ CALIBRATION MODE ] The smart coffee machine in the breakroom is malfunctioning and attempting to charge employees a 5% hidden exchange rate markup for an espresso.",
        options: [
            { id: "A", text: "Deploy Agent A (Pink) to unplug the machine", password: "COFFEE-ALPHA-99" },
            { id: "B", text: "Deploy Agent B (Blue) to check the software", password: "COFFEE-BRAVO-42" }
        ],
        accessCode: "MID MARKET RATE",
        intervention: "Great job! The practice code is accepted.",
        postMortem: "CALIBRATION COMPLETE. You are ready. Note: In live cases, before investigating the field, you will first need to Profile the Client's financial behavior."
    },
    "7": {
        title: "[ CASE 7: THE TUSCAN REUNION ]",
        location: "Tuscany, Italy",
        time: "Thursday, 12 p.m.",
        profile: "- Mateo is a global citizen working remotely from Tuscany.\n- Receives salary in USD and converts to spend in EUR.\n- Actively manages multiple digital wallets and relies on app ecosystem.",
        personaId: "1", // 1: International Account User
        narrative: "Mateo's family reunion is starting, but he is standing outside the venue looking panicked. His physical card is missing.",
        options: [
            { id: "A", text: "Deploy Agent A (Pink) to Check Catering", password: "TUSCANY-ALPHA-99" },
            { id: "B", text: "Deploy Agent B (Blue) to Check Luggage", password: "TUSCANY-BRAVO-42" },
            { id: "C", text: "Deploy Agent C (Yellow) to Check Pockets", password: "TUSCANY-CHARLIE-07" },
            { id: "D", text: "Deploy Agent D (Green) to Analyze App", password: "TUSCANY-DELTA-88" }
        ],
        accessCode: "VIRTUAL CARD",
        intervention: "🏆 Great job, Team! You've found the right answer! 🏆 Crisis contained. You guide Mateo to generate a Virtual Card and add it to his digital wallet. Payment successful!",
        postMortem: "TARGET PROFILE: Mateo aligns with the International Account User segment. As a multi-product adopter, he relies on our full ecosystem. The Virtual Card is his ultimate safety net."
    },
    "6": {
        title: "[ CASE 6: THE DUBAI DEADLINE ]",
        location: "Dubai, UAE",
        time: "Thursday, 4 p.m.",
        profile: "- Aisha frequently sends money across borders to support family.\n- Relies heavily on speed and predictability for emergencies.\n- Prefers mobile app for immediate outbound transactions.",
        personaId: "2", // 2: Remitter
        narrative: "You are deployed to a high-rise apartment. Aisha is pacing nervously, staring at an urgent message from her parents stranded in France.",
        options: [
            { id: "A", text: "Deploy Agent A (Pink) to Check Text Message", password: "DUBAI-ALPHA-12" },
            { id: "B", text: "Deploy Agent B (Blue) to Check Bank App", password: "DUBAI-BRAVO-34" },
            { id: "C", text: "Deploy Agent C (Yellow) to Analyze Desk", password: "DUBAI-CHARLIE-56" },
            { id: "D", text: "Deploy Agent D (Green) to Check Laptop", password: "DUBAI-DELTA-78" }
        ],
        accessCode: "INSTANT TRANSFER",
        intervention: "🏆 Great job, Team! 🏆 Strategic override successful. You help Aisha execute an Instant Transfer. The hotel in France is paid in seconds.",
        postMortem: "TARGET PROFILE: Aisha fits the Remitter profile. Speed is her #1 priority. Wise is a lifeline for family support, making Instant Transfers critical."
    },
    "5": {
        title: "[ CASE 5: THE TOKYO TERMINAL ]",
        location: "Tokyo, Japan",
        time: "Friday, 3 a.m.",
        profile: "- Jordan is travelling internationally for leisure.\n- Frequently encounters physical point-of-sale terminals.\n- Vulnerable to dynamic currency conversion (DCC) traps.",
        personaId: "3", // 3: Travel Spender
        narrative: "You arrive in Akihabara. Jordan is at a checkout counter, visibly confused by the options on the payment terminal.",
        options: [
            { id: "A", text: "Deploy Agent A (Pink) to Check POS Terminal", password: "TOKYO-ALPHA-11" },
            { id: "B", text: "Deploy Agent B (Blue) to Check Bank App", password: "TOKYO-BRAVO-22" },
            { id: "C", text: "Deploy Agent C (Yellow) to Analyze Wise App", password: "TOKYO-CHARLIE-33" },
            { id: "D", text: "Deploy Agent D (Green) to Check Smart Tech", password: "TOKYO-DELTA-44" }
        ],
        accessCode: "LOCAL CURRENCY",
        intervention: "🏆 Great job, Team! 🏆 You intervened just in time. Jordan selects 'Pay in Local Currency'. Wise's auto-conversion kicks in at the mid-market rate, saving the 7% fee!",
        postMortem: "TARGET PROFILE: Jordan represents the Travel Spender. Their primary friction occurs at the physical point of sale. Educating them on 'Local Currency' protects their journey."
    },
    "4": {
        title: "[ CASE 4: THE BROOKLYN BUSINESS ]",
        location: "NYC, USA",
        time: "Friday, 10 a.m.",
        profile: "- Sam operates locally but deals with B2B clients.\n- Needs domestic routing numbers and standard account details.\n- Requires seamless local business infrastructure.",
        personaId: "4", // 4: Domestic Account User
        narrative: "You are in a Brooklyn coffee shop. Sam is across from a client, trying to hide panic as they can't provide the right banking details.",
        options: [
            { id: "A", text: "Deploy Agent A (Pink) to Check Client Terms", password: "NYC-ALPHA-10" },
            { id: "B", text: "Deploy Agent B (Blue) to Check Bank App", password: "NYC-BRAVO-20" },
            { id: "C", text: "Deploy Agent C (Yellow) to Analyze Notepad", password: "NYC-CHARLIE-30" },
            { id: "D", text: "Deploy Agent D (Green) to Check Wise Features", password: "NYC-DELTA-40" }
        ],
        accessCode: "RECEIVE",
        intervention: "🏆 Great job, Team! 🏆 Override engaged. You show Sam how to use their local USD Account Details. The client initiates an ACH transfer instantly. Deal signed!",
        postMortem: "TARGET PROFILE: Sam belongs to the domestic segment. Local Account Details allow users to bypass traditional routing delays for critical business infrastructure."
    },
    "3": {
        title: "[ CASE 3: THE LONDON LOCK ]",
        location: "London, UK",
        time: "Saturday, 2 p.m.",
        profile: "- Taylor handles high-value contract payments across borders.\n- Highly sensitive to market fluctuations.\n- Requires exact amounts to land in recipient accounts without variations.",
        personaId: "5", // 5: General Money Sender
        narrative: "You deploy to a London cafe. Taylor is staring at a laptop with a contract that requires an exact Euro amount to be delivered to a partner in Italy.",
        options: [
            { id: "A", text: "Deploy Agent A (Pink) to Check Venue Email", password: "LONDON-ALPHA-15" },
            { id: "B", text: "Deploy Agent B (Blue) to Check Bank App", password: "LONDON-BRAVO-25" },
            { id: "C", text: "Deploy Agent C (Yellow) to Analyze Notes", password: "LONDON-CHARLIE-35" },
            { id: "D", text: "Deploy Agent D (Green) to Check Wise App", password: "LONDON-DELTA-45" }
        ],
        accessCode: "GUARANTEED RATE",
        intervention: "🏆 Great job, Team! 🏆 Success. You guide Taylor to lock in the Guaranteed Rate. The exact amount arrives in Italy. The contract is fulfilled!",
        postMortem: "TARGET PROFILE: Taylor maps completely to this general category. Predictability and the Guaranteed Rate anchor their long-term trust, removing execution risks."
    },
    "2": {
        title: "[ CASE 2: THE SYDNEY SURFBOARD ]",
        location: "Sydney, Australia",
        time: "Sunday, 11 a.m.",
        profile: "- Alex is highly active and makes impulsive local purchases.\n- Demands instant peer-to-peer or local network transfers.\n- Uses physical or digital cards for everyday local spending.",
        personaId: "6", // 6: Local Spender
        narrative: "You materialize in a surf shop. Alex is at the counter, trying to convince the owner to hold a vintage board while waiting for a friend's transfer.",
        options: [
            { id: "A", text: "Deploy Agent A (Pink) to Check Surfboard", password: "SYDNEY-ALPHA-16" },
            { id: "B", text: "Deploy Agent B (Blue) to Check Bank App", password: "SYDNEY-BRAVO-26" },
            { id: "C", text: "Deploy Agent C (Yellow) to Analyze Wise App", password: "SYDNEY-CHARLIE-36" },
            { id: "D", text: "Deploy Agent D (Green) to Check Balance Settings", password: "SYDNEY-DELTA-46" }
        ],
        accessCode: "SPEND",
        intervention: "🏆 Great job, Team! 🏆 Crisis resolved. You provide Alex's AUD Account Details for the NPP network. The money arrives in seconds. Alex taps his card and walks out with the board!",
        postMortem: "TARGET PROFILE: Alex mirrors this fast-paced demographic. Their active lifestyle requires operational agility; receiving and spending local currency instantly is core."
    },
    "1": {
        title: "[ CASE 1: THE SINGAPORE SETUP ]",
        location: "Singapore",
        time: "Sunday, 8 p.m.",
        profile: "- Morgan manages large personal wealth and investments.\n- Highly analytical regarding fee structures and hidden costs.\n- Seeks multi-currency balance consolidation and treasury management.",
        personaId: "7", // 7: Money Manager
        narrative: "You are in a high-tech penthouse. Morgan, a tech founder, is frustrated by the complex fee structure of a traditional wealth management contract.",
        options: [
            { id: "A", text: "Deploy Agent A (Pink) to Check Bank Contract", password: "SINGAPORE-ALPHA-17" },
            { id: "B", text: "Deploy Agent B (Blue) to Check Trading Monitors", password: "SINGAPORE-BRAVO-27" },
            { id: "C", text: "Deploy Agent C (Yellow) to Analyze Phone", password: "SINGAPORE-CHARLIE-37" },
            { id: "D", text: "Deploy Agent D (Green) to Check Wise App", password: "SINGAPORE-DELTA-47" }
        ],
        accessCode: "MULTI CURRENCY",
        intervention: "🏆 Great job, Team! 🏆 Override successful. You show Morgan how to use a Wise Multi-Currency balance. They reject the bank's fees and secure their assets.",
        postMortem: "TARGET PROFILE: Morgan encapsulates our optimization-driven segment. They prioritize strict fee transparency and minimal maintenance expenses to handle wealth."
    }
};
// ATENÇÃO: Mantenha sua variável const caseDatabase = { ... } aqui em cima!

document.addEventListener("DOMContentLoaded", () => {
    // Ordem e Variáveis de Fluxo
    const caseProgression = ["0", "7", "6", "5", "4", "3", "2", "1"];
    let currentCaseIndex = 0; 
    
    // Estados: "BOOT", "OVERRIDE", "LEVEL_SELECT", "PROFILING", "MENU", "CLUE", "INTERVENE", "POSTMORTEM"
    let terminalState = "BOOT"; 
    
    let teamName = "";
    let currentTab = 0; 
    let currentIndex = 0; 
    let typedCode = ""; 
    
    const tabs = ["tab-investigate", "tab-intervene", "tab-help"];
    
    // Variáveis da Máquina de Escrever
    let typeInterval;
    let isTyping = false;
    let currentTypingElement = null;
    let currentTypingCallback = null;
    
    // Seletores DOM
    const bootSection = document.getElementById("boot-section");
    const overrideSection = document.getElementById("override-section");
    const levelSelectSection = document.getElementById("level-select-section");
    const profilingSection = document.getElementById("profiling-section");
    const investigateSection = document.getElementById("investigate-section");
    const interveneSection = document.getElementById("intervene-section");
    const postmortemSection = document.getElementById("postmortem-section");
    
    const teamInput = document.getElementById("team-input");
    const overrideInput = document.getElementById("override-input");
    const levelInput = document.getElementById("level-input");
    const accessCodeInput = document.getElementById("access-code-input");
    
    const menuContainer = document.getElementById("menu-container");
    const clueContainer = document.getElementById("clue-container");
    const actionMenu = document.getElementById("action-menu");
    const clueText = document.getElementById("clue-text");
    const cluePrompt = document.getElementById("clue-prompt");
    const postmortemPrompt = document.getElementById("postmortem-prompt");
    const caseTitleDisplay = document.getElementById("case-title-display");
    const caseHeader = document.getElementById("case-header");
    const btnHelp = document.getElementById("tab-help");

    function hideAllSections() {
        bootSection.style.display = "none";
        overrideSection.style.display = "none";
        levelSelectSection.style.display = "none";
        profilingSection.style.display = "none";
        investigateSection.style.display = "none";
        interveneSection.style.display = "none";
        postmortemSection.style.display = "none";
    }

    function typeText(element, text, speed = 20, onComplete = null) {
        isTyping = true;
        currentTypingElement = element;
        currentTypingCallback = onComplete;
        element.textContent = "";
        element.setAttribute("data-full-text", text); 
        
        let i = 0;
        clearInterval(typeInterval);
        
        typeInterval = setInterval(() => {
            element.textContent += text.charAt(i);
            i++;
            if (i >= text.length) finishTyping();
        }, speed);
    }

    function finishTyping() {
        clearInterval(typeInterval);
        if (currentTypingElement) currentTypingElement.textContent = currentTypingElement.getAttribute("data-full-text");
        isTyping = false;
        let cb = currentTypingCallback;
        currentTypingElement = null;
        currentTypingCallback = null;
        if (cb) cb();
    }

    function startLevelSelect() {
        terminalState = "LEVEL_SELECT";
        caseHeader.style.display = "none";
        hideAllSections();
        levelSelectSection.style.display = "block";
        typedCode = "";
        levelInput.textContent = `> _`;
    }

    function startProfiling(caseId) {
        currentActiveCase = caseId;
        terminalState = "PROFILING";
        hideAllSections();
        profilingSection.style.display = "block";
        currentIndex = 0;
        
        caseHeader.style.display = "block";
        caseTitleDisplay.textContent = caseDatabase[caseId].title;
        
        typeText(document.getElementById("profile-text"), caseDatabase[caseId].profile, 20, () => {
            updateMenuSelection("#profiling-menu .menu-option");
        });
    }

    function startInvestigation(caseId) {
        currentActiveCase = caseId;
        const data = caseDatabase[caseId];
        
        caseHeader.style.display = "block";
        caseTitleDisplay.textContent = data.title;
        
        document.getElementById("location-name").textContent = data.location;
        document.getElementById("location-time").textContent = data.time;
        
        actionMenu.innerHTML = "";
        data.options.forEach((opt, idx) => {
            const li = document.createElement("li");
            li.className = "menu-option";
            if(idx === 0) li.classList.add("active");
            li.setAttribute("data-action", opt.id);
            li.setAttribute("data-password", opt.password);
            li.textContent = opt.text;
            actionMenu.appendChild(li);
        });
        
        terminalState = "MENU";
        currentTab = 0;
        currentIndex = 0;
        hideAllSections();
        investigateSection.style.display = "block";
        menuContainer.style.display = "none";
        clueContainer.style.display = "none";
        
        typeText(document.getElementById("narrative-text"), data.narrative, 20, () => {
            menuContainer.style.display = "block";
            updateMenuSelection("#action-menu .menu-option");
        });
    }

    function updateMenuSelection(selector) {
        const menuItems = document.querySelectorAll(selector);
        menuItems.forEach((item, index) => {
            if (index === currentIndex) item.classList.add("active");
            else item.classList.remove("active");
        });
    }

    function showClue(password) {
        terminalState = "CLUE";
        menuContainer.style.display = "none";
        clueContainer.style.display = "block";
        cluePrompt.style.display = "none";
        
        typeText(clueText, `LOCATION PASSWORD: ${password}`, 20, () => {
            cluePrompt.style.display = "block"; 
        });
    }

    function showPostMortem(caseData) {
        terminalState = "POSTMORTEM";
        hideAllSections();
        postmortemSection.style.display = "block";
        
        document.getElementById("intervention-text").textContent = "";
        document.getElementById("postmortem-text").textContent = "";
        postmortemPrompt.style.display = "none";
        
        typeText(document.getElementById("intervention-text"), caseData.intervention, 20, () => {
            typeText(document.getElementById("postmortem-text"), caseData.postMortem, 20, () => {
                postmortemPrompt.style.display = "block";
            });
        });
    }

    document.addEventListener("keydown", (event) => {
        if (isTyping && event.key === "Enter") {
            finishTyping();
            return; 
        }

        // --- BOOT STATE: COLETAR NOME DO TIME ---
        if (terminalState === "BOOT") {
            if (event.key === "Enter" && typedCode.trim().length > 0) {
                teamName = typedCode.trim();
                terminalState = "OVERRIDE";
                hideAllSections();
                overrideSection.style.display = "block";
                typedCode = "";
                overrideInput.textContent = "> _";
            } else if (event.key === "Backspace") {
                typedCode = typedCode.slice(0, -1);
                teamInput.textContent = `> ${typedCode}_`;
            } else if (event.key.length === 1 && event.key.match(/[a-zA-Z0-9 ]/)) {
                typedCode += event.key.toUpperCase();
                teamInput.textContent = `> ${typedCode}_`;
            }
        }
        
        // --- OVERRIDE STATE: VALIDAR PALAVRA MÁGICA ---
        else if (terminalState === "OVERRIDE") {
            if (event.key === "Enter") {
                if (typedCode.trim() === "TD-TEAM") {
                    // Passou na segurança: vai direto para o Caso 0 (Tutorial)
                    startInvestigation("0");
                } else {
                    overrideInput.textContent = `> ACCESS DENIED. LOCKOUT ACTIVE.`;
                    setTimeout(() => { typedCode = ""; overrideInput.textContent = "> _"; }, 1500);
                }
            } else if (event.key === "Backspace") {
                typedCode = typedCode.slice(0, -1);
                overrideInput.textContent = `> ${typedCode}_`;
            } else if (event.key.length === 1 && event.key.match(/[a-zA-Z0-9-]/)) {
                typedCode += event.key.toUpperCase();
                overrideInput.textContent = `> ${typedCode}_`;
            }
        }

        // --- LEVEL SELECT ---
        else if (terminalState === "LEVEL_SELECT") {
            if (event.key === "Enter" && typedCode.length > 0) {
                if (caseDatabase[typedCode]) {
                    startProfiling(typedCode);
                } else {
                    levelInput.textContent = `> CASE NOT FOUND. TRY AGAIN.`;
                    setTimeout(() => { typedCode = ""; levelInput.textContent = `> _`; }, 1000);
                }
            } else if (event.key === "Backspace") {
                typedCode = typedCode.slice(0, -1);
                levelInput.textContent = `> ${typedCode}_`;
            } else if (event.key.match(/^[1-7]$/)) {
                typedCode += event.key;
                levelInput.textContent = `> ${typedCode}_`;
            }
        }
        
        // --- PROFILING ---
        else if (terminalState === "PROFILING") {
            const menuItems = document.querySelectorAll("#profiling-menu .menu-option");
            if (event.key === "ArrowDown") {
                currentIndex = (currentIndex + 1) % menuItems.length;
                updateMenuSelection("#profiling-menu .menu-option");
            } else if (event.key === "ArrowUp") {
                currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
                updateMenuSelection("#profiling-menu .menu-option");
            } else if (event.key === "Enter") {
                const selectedId = menuItems[currentIndex].getAttribute("data-id");
                if (selectedId === caseDatabase[currentActiveCase].personaId) {
                    startInvestigation(currentActiveCase);
                } else {
                    alert("INCORRECT PROFILE. TRY AGAIN.");
                }
            }
        }

        // --- SYSTEM TABS NAVEGATION ---
        else if (terminalState === "MENU" || terminalState === "INTERVENE") {
            if (event.key === "ArrowRight") {
                currentTab = 1;
                hideAllSections();
                interveneSection.style.display = "block";
                terminalState = "INTERVENE";
                typedCode = "";
                document.getElementById("access-code-input").textContent = "> _";
                document.querySelectorAll(".tab-btn").forEach((b, i) => i === 1 ? b.classList.add("selected") : b.classList.remove("selected"));
            }
            if (event.key === "ArrowLeft") {
                currentTab = 0;
                hideAllSections();
                investigateSection.style.display = "block";
                terminalState = "MENU";
                document.querySelectorAll(".tab-btn").forEach((b, i) => i === 0 ? b.classList.add("selected") : b.classList.remove("selected"));
            }
            
            if (terminalState === "MENU") {
                const menuItems = document.querySelectorAll("#action-menu .menu-option");
                if (event.key === "ArrowDown") { currentIndex = (currentIndex + 1) % menuItems.length; updateMenuSelection("#action-menu .menu-option"); }
                else if (event.key === "ArrowUp") { currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length; updateMenuSelection("#action-menu .menu-option"); }
                else if (event.key === "Enter") {
                    const pass = menuItems[currentIndex].getAttribute("data-password");
                    showClue(pass);
                }
            } 
            else if (terminalState === "INTERVENE") {
                if (event.key === "Enter") {
                    const ans = caseDatabase[currentActiveCase].accessCode.toUpperCase();
                    if (typedCode.trim().toUpperCase() === ans) {
                        showPostMortem(caseDatabase[currentActiveCase]);
                    } else {
                        document.getElementById("access-code-input").textContent = `> SYSTEM REJECTION`;
                        setTimeout(() => { typedCode = ""; document.getElementById("access-code-input").textContent = "> _"; }, 1000);
                        btnHelp.classList.remove("disabled");
                    }
                } else if (event.key === "Backspace") {
                    typedCode = typedCode.slice(0, -1);
                    document.getElementById("access-code-input").textContent = `> ${typedCode}_`;
                } else if (event.key.length === 1 && event.key.match(/[a-zA-Z0-9 ]/)) {
                    typedCode += event.key.toUpperCase();
                    document.getElementById("access-code-input").textContent = `> ${typedCode}_`;
                }
            }
        }
        
        else if (terminalState === "CLUE" && event.key === "Enter") {
            terminalState = "MENU";
            clueContainer.style.display = "none";
            menuContainer.style.display = "block";
        }
        
        else if (terminalState === "POSTMORTEM" && event.key === "Enter") {
            if (currentActiveCase === "0") {
                // Se terminou o tutorial, abre a seleção de casos (1-7)
                startLevelSelect();
            } else {
                // Se terminou um caso normal, volta para selecionar outro
                startLevelSelect();
            }
        }
    });

    // Inicialização da aplicação: tela de Boot limpa
    hideAllSections();
    bootSection.style.display = "block";
    typedCode = "";
});