// Nosso Banco de Dados Dinâmico Completo (Incluindo Tutorial)
const caseDatabase = {
    "0": { title: "[ CASE 0: CALIBRATION PROTOCOL ]", location: "London Office, UK", time: "Monday, 9 a.m.", profile: "- [ CALIBRATION TARGET ]\n- System test for field agent synchronization.\n- Evaluates response time to hidden exchange rate markups.", personaId: "0", narrative: "[ CALIBRATION MODE ] The smart coffee machine in the breakroom is malfunctioning and attempting to charge employees a 5% hidden exchange rate markup for an espresso.", options: [{ id: "A", text: "Deploy Agent A (Pink) to unplug the machine", password: "COFFEE-ALPHA-99" }, { id: "B", text: "Deploy Agent B (Blue) to check the software", password: "COFFEE-BRAVO-42" }], accessCode: "MID MARKET RATE", intervention: "Great job! The practice code is accepted.", postMortem: "CALIBRATION COMPLETE. System is now tuned to your inputs. Get ready for live deployment." },
    "7": { title: "[ CASE 7: THE TUSCAN REUNION ]", location: "Tuscany, Italy", time: "Thursday, 12 p.m.", profile: "- Mateo is a global citizen working remotely from Tuscany.\n- Receives salary in USD and converts to spend in EUR.\n- Actively manages multiple digital wallets and relies on app ecosystem.", personaId: "1", narrative: "Mateo's family reunion is starting, but he is standing outside the venue looking panicked. His physical card is missing.", options: [{ id: "A", text: "Deploy Agent A (Pink) to Check Catering", password: "TUSCANY-ALPHA-99" }, { id: "B", text: "Deploy Agent B (Blue) to Check Luggage", password: "TUSCANY-BRAVO-42" }, { id: "C", text: "Deploy Agent C (Yellow) to Check Pockets", password: "TUSCANY-CHARLIE-07" }, { id: "D", text: "Deploy Agent D (Green) to Analyze App", password: "TUSCANY-DELTA-88" }], accessCode: "VIRTUAL CARD", intervention: "🏆 Great job, Team! You've found the right answer! 🏆 Crisis contained. You guide Mateo to generate a Virtual Card and add it to his digital wallet. Payment successful!", postMortem: "TARGET PROFILE: Mateo aligns with the International Account User segment. As a multi-product adopter, he relies on our full ecosystem. The Virtual Card is his ultimate safety net." },
    "6": { title: "[ CASE 6: THE DUBAI DEADLINE ]", location: "Dubai, UAE", time: "Thursday, 4 p.m.", profile: "- Aisha frequently sends money across borders to support family.\n- Relies heavily on speed and predictability for emergencies.\n- Prefers mobile app for immediate outbound transactions.", personaId: "2", narrative: "You are deployed to a high-rise apartment. Aisha is pacing nervously, staring at an urgent message from her parents stranded in France.", options: [{ id: "A", text: "Deploy Agent A (Pink) to Check Text Message", password: "DUBAI-ALPHA-12" }, { id: "B", text: "Deploy Agent B (Blue) to Check Bank App", password: "DUBAI-BRAVO-34" }, { id: "C", text: "Deploy Agent C (Yellow) to Analyze Desk", password: "DUBAI-CHARLIE-56" }, { id: "D", text: "Deploy Agent D (Green) to Check Laptop", password: "DUBAI-DELTA-78" }], accessCode: "INSTANT TRANSFER", intervention: "🏆 Great job, Team! 🏆 Strategic override successful. You help Aisha execute an Instant Transfer. The hotel in France is paid in seconds.", postMortem: "TARGET PROFILE: Aisha fits the Remitter profile. Speed is her #1 priority. Wise is a lifeline for family support, making Instant Transfers critical." },
    "5": { title: "[ CASE 5: THE TOKYO TERMINAL ]", location: "Tokyo, Japan", time: "Friday, 3 a.m.", profile: "- Jordan is travelling internationally for leisure.\n- Frequently encounters physical point-of-sale terminals.\n- Vulnerable to dynamic currency conversion (DCC) traps.", personaId: "3", narrative: "You arrive in Akihabara. Jordan is at a checkout counter, visibly confused by the options on the payment terminal.", options: [{ id: "A", text: "Deploy Agent A (Pink) to Check POS Terminal", password: "TOKYO-ALPHA-11" }, { id: "B", text: "Deploy Agent B (Blue) to Check Bank App", password: "TOKYO-BRAVO-22" }, { id: "C", text: "Deploy Agent C (Yellow) to Analyze Wise App", password: "TOKYO-CHARLIE-33" }, { id: "D", text: "Deploy Agent D (Green) to Check Smart Tech", password: "TOKYO-DELTA-44" }], accessCode: "LOCAL CURRENCY", intervention: "🏆 Great job, Team! 🏆 You intervened just in time. Jordan selects 'Pay in Local Currency'. Wise's auto-conversion kicks in at the mid-market rate, saving the 7% fee!", postMortem: "TARGET PROFILE: Jordan represents the Travel Spender. Their primary friction occurs at the physical point of sale. Educating them on 'Local Currency' protects their journey." },
    "4": { title: "[ CASE 4: THE BROOKLYN BUSINESS ]", location: "NYC, USA", time: "Friday, 10 a.m.", profile: "- Sam operates locally but deals with B2B clients.\n- Needs domestic routing numbers and standard account details.\n- Requires seamless local business infrastructure.", personaId: "4", narrative: "You are in a Brooklyn coffee shop. Sam is across from a client, trying to hide panic as they can't provide the right banking details.", options: [{ id: "A", text: "Deploy Agent A (Pink) to Check Client Terms", password: "NYC-ALPHA-10" }, { id: "B", text: "Deploy Agent B (Blue) to Check Bank App", password: "NYC-BRAVO-20" }, { id: "C", text: "Deploy Agent C (Yellow) to Analyze Notepad", password: "NYC-CHARLIE-30" }, { id: "D", text: "Deploy Agent D (Green) to Check Wise Features", password: "NYC-DELTA-40" }], accessCode: "RECEIVE", intervention: "🏆 Great job, Team! 🏆 Override engaged. You show Sam how to use their local USD Account Details. The client initiates an ACH transfer instantly. Deal signed!", postMortem: "TARGET PROFILE: Sam belongs to the domestic segment. Local Account Details allow users to bypass traditional routing delays for critical business infrastructure." },
    "3": { title: "[ CASE 3: THE LONDON LOCK ]", location: "London, UK", time: "Saturday, 2 p.m.", profile: "- Taylor handles high-value contract payments across borders.\n- Highly sensitive to market fluctuations.\n- Requires exact amounts to land in recipient accounts without variations.", personaId: "5", narrative: "You deploy to a London cafe. Taylor is staring at a laptop with a contract that requires an exact Euro amount to be delivered to a partner in Italy.", options: [{ id: "A", text: "Deploy Agent A (Pink) to Check Venue Email", password: "LONDON-ALPHA-15" }, { id: "B", text: "Deploy Agent B (Blue) to Check Bank App", password: "LONDON-BRAVO-25" }, { id: "C", text: "Deploy Agent C (Yellow) to Analyze Notes", password: "LONDON-CHARLIE-35" }, { id: "D", text: "Deploy Agent D (Green) to Check Wise App", password: "LONDON-DELTA-45" }], accessCode: "GUARANTEED RATE", intervention: "🏆 Great job, Team! 🏆 Success. You guide Taylor to lock in the Guaranteed Rate. The exact amount arrives in Italy. The contract is fulfilled!", postMortem: "TARGET PROFILE: Taylor maps completely to this general category. Predictability and the Guaranteed Rate anchor their long-term trust, removing execution risks." },
    "2": { title: "[ CASE 2: THE SYDNEY SURFBOARD ]", location: "Sydney, Australia", time: "Sunday, 11 a.m.", profile: "- Alex is highly active and makes impulsive local purchases.\n- Demands instant peer-to-peer or local network transfers.\n- Uses physical or digital cards for everyday local spending.", personaId: "6", narrative: "You materialize in a surf shop. Alex is at the counter, trying to convince the owner to hold a vintage board while waiting for a friend's transfer.", options: [{ id: "A", text: "Deploy Agent A (Pink) to Check Surfboard", password: "SYDNEY-ALPHA-16" }, { id: "B", text: "Deploy Agent B (Blue) to Check Bank App", password: "SYDNEY-BRAVO-26" }, { id: "C", text: "Deploy Agent C (Yellow) to Analyze Wise App", password: "SYDNEY-CHARLIE-36" }, { id: "D", text: "Deploy Agent D (Green) to Check Balance Settings", password: "SYDNEY-DELTA-46" }], accessCode: "SPEND", intervention: "🏆 Great job, Team! 🏆 Crisis resolved. You provide Alex's AUD Account Details for the NPP network. The money arrives in seconds. Alex taps his card and walks out with the board!", postMortem: "TARGET PROFILE: Alex mirrors this fast-paced demographic. Their active lifestyle requires operational agility; receiving and spending local currency instantly is core." },
    "1": { title: "[ CASE 1: THE SINGAPORE SETUP ]", location: "Singapore", time: "Sunday, 8 p.m.", profile: "- Morgan manages large personal wealth and investments.\n- Highly analytical regarding fee structures and hidden costs.\n- Seeks multi-currency balance consolidation and treasury management.", personaId: "7", narrative: "You are in a high-tech penthouse. Morgan, a tech founder, is frustrated by the complex fee structure of a traditional wealth management contract.", options: [{ id: "A", text: "Deploy Agent A (Pink) to Check Bank Contract", password: "SINGAPORE-ALPHA-17" }, { id: "B", text: "Deploy Agent B (Blue) to Check Trading Monitors", password: "SINGAPORE-BRAVO-27" }, { id: "C", text: "Deploy Agent C (Yellow) to Analyze Phone", password: "SINGAPORE-CHARLIE-37" }, { id: "D", text: "Deploy Agent D (Green) to Check Wise App", password: "SINGAPORE-DELTA-47" }], accessCode: "MULTI CURRENCY", intervention: "🏆 Great job, Team! 🏆 Override successful. You show Morgan how to use a Wise Multi-Currency balance. They reject the bank's fees and secure their assets.", postMortem: "TARGET PROFILE: Morgan encapsulates our optimization-driven segment. They prioritize strict fee transparency and minimal maintenance expenses to handle wealth." }
};

// MAPEAMENTO ESTRITO DE CONSOANTES
const caseConsonants = {
    "7": "B", "6": "C", "5": "D", "4": "F", "3": "G", "2": "H", "1": "J"
};

document.addEventListener("DOMContentLoaded", () => {
    let currentActiveCase = "0";
    let terminalState = "BOOT"; 
    
    let teamName = "N/A";
    let difficulty = null; // "1", "2", "3"
    let completedCases = {}; 
    let solvedCasesCount = 0;
    const totalCases = 7; 
    let currentSessionKey = "None";
    
    let currentTab = 0; 
    let currentIndex = 0; 
    let typedCode = ""; 
    let profilingAttempts = 0; // Limite de tentativas no Profiling
    
    let typeInterval;
    let isTyping = false;
    let currentTypingElement = null;
    let currentTypingCallback = null;
    
    const bootSection = document.getElementById("boot-section");
    const introSection = document.getElementById("intro-section");
    const difficultySelectSection = document.getElementById("difficulty-select-section");
    const overrideSection = document.getElementById("override-section");
    const levelSelectSection = document.getElementById("level-select-section");
    const profilingSection = document.getElementById("profiling-section");
    const investigateSection = document.getElementById("investigate-section");
    const interveneSection = document.getElementById("intervene-section");
    const postmortemSection = document.getElementById("postmortem-section");
    const passwordSection = document.getElementById("password-section");
    const gameOverSection = document.getElementById("game-over-section");
    
    const teamInput = document.getElementById("team-input");
    const introPrompt = document.getElementById("intro-prompt");
    const overrideInput = document.getElementById("override-input");
    const levelInput = document.getElementById("level-input");
    const accessCodeInput = document.getElementById("access-code-input");
    const recoveryInput = document.getElementById("recovery-input");
    
    const menuContainer = document.getElementById("menu-container");
    const clueContainer = document.getElementById("clue-container");
    const actionMenu = document.getElementById("action-menu");
    const clueText = document.getElementById("clue-text");
    const cluePrompt = document.getElementById("clue-prompt");
    const postmortemPrompt = document.getElementById("postmortem-prompt");
    const caseTitleDisplay = document.getElementById("case-title-display");
    const caseHeader = document.getElementById("case-header");
    const btnHelp = document.getElementById("tab-help");
    const displayImage = document.getElementById("display-image");
    
    const displayTeamName = document.getElementById("display-team-name");
    const solvedCounter = document.getElementById("solved-counter");
    const sessionKeyDisplay = document.getElementById("session-key-display");

    function hideAllSections() {
        bootSection.style.display = "none";
        introSection.style.display = "none";
        difficultySelectSection.style.display = "none";
        overrideSection.style.display = "none";
        levelSelectSection.style.display = "none";
        profilingSection.style.display = "none";
        investigateSection.style.display = "none";
        interveneSection.style.display = "none";
        postmortemSection.style.display = "none";
        passwordSection.style.display = "none";
        gameOverSection.style.display = "none";
        document.getElementById("location-box").style.display = "none";
        
        // CORREÇÃO CRÍTICA: Desmarca sempre os botões inferiores ao trocar de tela principal
        document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("selected"));
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

    function startIntroSequence() {
        terminalState = "INTRO";
        hideAllSections();
        introSection.style.display = "block";
        introPrompt.style.display = "none";
        displayImage.src = "images/welcome.png"; 
        const welcomeMessage = `Welcome to the True Wiser Operations Core.\nYou coordinate an elite squad that intercepts high-stakes crises.\n\nYou are a tactical Team of 5:\n[NAV] Navigator -> You (at this terminal)\n[A] Agent A -> PINK physical handout\n[B] Agent B -> BLUE physical handout\n[C] Agent C -> YELLOW physical handout\n[D] Agent D -> GREEN physical handout\n\nLet's run a calibration test to align your interface.`; 
        typeText(document.getElementById("intro-text"), welcomeMessage, 15, () => { introPrompt.style.display = "block"; });
    }
    
    function startDifficultySelect() {
        terminalState = "DIFFICULTY_SELECT";
        hideAllSections();
        difficultySelectSection.style.display = "block";
        currentIndex = 0;
        updateMenuSelection("#difficulty-menu .menu-option");
    }

    function startInvestigation(caseId) {
        currentActiveCase = caseId;
        const data = caseDatabase[caseId];
        caseHeader.style.display = "block";
        caseTitleDisplay.textContent = data.title;
        document.getElementById("location-name").textContent = data.location;
        document.getElementById("location-time").textContent = data.time;
        displayImage.src = `images/case_${caseId}/cover.png`;
        
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
        document.getElementById("location-box").style.display = "block";
        investigateSection.style.display = "block";
        menuContainer.style.display = "none";
        clueContainer.style.display = "none";
        
        // Garante que a primeira aba esteja visualmente selecionada ao entrar na investigação
        document.getElementById("tab-investigate").classList.add("selected");
        
        typeText(document.getElementById("narrative-text"), data.narrative, 20, () => {
            menuContainer.style.display = "block";
            updateMenuSelection("#action-menu .menu-option");
        });
    }

    function startLevelSelect() {
        terminalState = "LEVEL_SELECT";
        caseHeader.style.display = "none";
        hideAllSections();
        levelSelectSection.style.display = "block";
        displayImage.src = "images/case_select.png"; 
        typedCode = "";
        levelInput.textContent = `> _`;
        
        const levelSelectContainer = document.getElementById("level-select-section");
        const existingList = levelSelectContainer.querySelector("ul");
        if (existingList) existingList.remove();
        const list = document.createElement("ul");
        list.id = "case-menu"; 
        
        for (let i = 1; i <= 7; i++) {
            const caseId = i.toString();
            const data = caseDatabase[caseId];
            const li = document.createElement("li");
            li.className = "menu-option";
            
            if (completedCases[caseId]) {
                li.classList.add("completed");
                li.textContent = `${i}: [SOLVED] ${data.title.replace(/\[\s*CASE\s*(\d+)\s*:?\s*/, '').replace(/\s*\]/, '')}`;
            } else {
                li.textContent = `${i}: ${data.title.replace(/\[\s*CASE\s*(\d+)\s*:?\s*/, '').replace(/\s*\]/, '')}`;
            }
            li.setAttribute("data-id", caseId);
            list.appendChild(li);
        }
        
        levelSelectContainer.insertBefore(list, levelInput.previousElementSibling.previousElementSibling.previousElementSibling);
        
        let firstAvailableIndex = -1;
        const menuOptions = list.querySelectorAll(".menu-option");
        for (let i = 0; i < menuOptions.length; i++) {
            if (!menuOptions[i].classList.contains("completed")) {
                firstAvailableIndex = i;
                break;
            }
        }
        
        // CONDIÇÃO DE VITÓRIA (ENDGAME): Todas as 7 consoantes coletadas
        if (firstAvailableIndex === -1 && solvedCasesCount === totalCases) {
            endGame();
            return;
        }
        
        currentIndex = (firstAvailableIndex === -1) ? 0 : firstAvailableIndex;
        updateMenuSelection("#case-menu .menu-option");
    }

    function startProfiling(caseId) {
        currentActiveCase = caseId;
        terminalState = "PROFILING";
        hideAllSections();
        profilingSection.style.display = "block";
        currentIndex = 0;
        profilingAttempts = 0; // Zera as tentativas para este caso
        
        const data = caseDatabase[caseId];
        document.getElementById("location-box").style.display = "block";
        document.getElementById("location-name").textContent = data.location;
        document.getElementById("location-time").textContent = data.time;
        caseHeader.style.display = "block";
        caseTitleDisplay.textContent = data.title;
        displayImage.src = `images/case_${caseId}/cover.png`; 
        
        typeText(document.getElementById("profile-text"), data.profile, 20, () => {
            updateMenuSelection("#profiling-menu .menu-option");
        });
    }

function updateMenuSelection(selector) {
        const menuItems = document.querySelectorAll(selector);
        menuItems.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    }

function showClue(password, actionLetter) {
        terminalState = "CLUE";
        menuContainer.style.display = "none";
        clueContainer.style.display = "block";
        cluePrompt.style.display = "none";
        
        // MUDANÇA: A imagem só altera quando entra na localidade!
        displayImage.src = `images/case_${currentActiveCase}/action_${actionLetter}.png`;
        
        typeText(clueText, `LOCATION PASSWORD FRAGMENT: ${password}`, 20, () => {
            cluePrompt.style.display = "block"; 
        });
    }

    function showPostMortem(caseData) {
        terminalState = "POSTMORTEM";
        hideAllSections();
        postmortemSection.style.display = "block";
        
        // Coleta da consoante e atualização da senha de estado
        if (currentActiveCase !== "0" && !completedCases[currentActiveCase]) {
            completedCases[currentActiveCase] = true;
            solvedCasesCount++;
            currentSessionKey = generateSessionKey(); 
            updateTopBar();
        }
        
        document.getElementById("intervention-text").textContent = "";
        document.getElementById("postmortem-text").textContent = "";
        postmortemPrompt.style.display = "none";
        
        typeText(document.getElementById("intervention-text"), caseData.intervention, 20, () => {
            typeText(document.getElementById("postmortem-text"), caseData.postMortem, 20, () => {
                postmortemPrompt.style.display = "block";
            });
        });
    }
    
    function endGame() {
        terminalState = "GAME_OVER";
        hideAllSections();
        gameOverSection.style.display = "block";
        displayImage.src = "images/game_over.png"; 
        const finalMessage = `True Wiser System Triage:\nOperations Complete. Calibration validated. Tactical competence confirmed in all sectors.\n\n[ SYSTEM LOGOFF ]`;
        typeText(document.getElementById("end-text"), finalMessage, 30);
    }
    
    function showPasswordRecovery() {
        document.getElementById("tab-password").setAttribute("data-previous-state", terminalState);
        terminalState = "RECOVERY";
        hideAllSections();
        passwordSection.style.display = "block";
        displayImage.src = "images/password_recovery.png"; 
        typedCode = "";
        recoveryInput.textContent = "> _";
        
        document.getElementById("tab-password").classList.add("selected");
        
        if (currentSessionKey === "None") currentSessionKey = generateSessionKey();
        updateTopBar();
    }
    
    // ARQUITETURA DE SENHA RÍGIDA: [TIME]-[NÍVEL]-[CONSOANTES]
    function generateSessionKey() {
        if (!difficulty) return "N/A";
        let keyBase = `${teamName.toUpperCase().replace(/\s+/g, '')}-${difficulty}`;
        let cons = "";
        for (let i = 1; i <= 7; i++) {
            if (completedCases[i.toString()]) cons += caseConsonants[i.toString()];
        }
        if (cons.length > 0) return `${keyBase}-${cons}`;
        return `CALIB-${keyBase}`;
    }
    
    function recoverSession(key) {
        const cleanKey = key.trim().toUpperCase();
        // Regex captura Grupos: 1 (Time), 2 (Nível: 1,2,3), 3 (Consoantes BCDFGHJ)
        const match = cleanKey.match(/^([A-Z0-9]+)-([123])-([BCDFGHJ]+)$/);
        
        if (match) {
            teamName = match[1];
            difficulty = match[2];
            const foundConsonants = match[3];
            
            // Reverte consoantes para os IDs dos casos
            for (const [caseId, cons] of Object.entries(caseConsonants)) {
                if (foundConsonants.includes(cons)) completedCases[caseId] = true;
            }
            
            solvedCasesCount = Object.keys(completedCases).length;
            currentSessionKey = cleanKey;
            updateTopBar();
            return true;
        }
        return false;
    }
    
    function updateTopBar() {
        displayTeamName.textContent = teamName;
        solvedCounter.textContent = `${solvedCasesCount}/${totalCases}`;
        sessionKeyDisplay.textContent = currentSessionKey;
    }

    document.addEventListener("keydown", (event) => {
        if (isTyping && event.key === "Enter") {
            finishTyping();
            return; 
        }

      // CORREÇÃO: NAVEGAÇÃO DE ABAS COM ATUALIZAÇÃO DE IMAGENS
        if (terminalState === "MENU" || terminalState === "INTERVENE" || terminalState === "RECOVERY") {
            
            if (terminalState === "MENU" && event.key === "ArrowRight") {
                currentTab = 1;
                hideAllSections();
                interveneSection.style.display = "block";
                terminalState = "INTERVENE";
                displayImage.src = `images/case_${currentActiveCase}/intervene.png`; // Carrega imagem Intervene
                typedCode = "";
                document.getElementById("access-code-input").textContent = "> _";
                document.getElementById("location-box").style.display = "block"; 
                document.getElementById("tab-intervene").classList.add("selected");
            } 
            else if (terminalState === "INTERVENE" && event.key === "ArrowLeft") {
                currentTab = 0;
                hideAllSections();
                investigateSection.style.display = "block";
                terminalState = "MENU";
                displayImage.src = `images/case_${currentActiveCase}/cover.png`; // Restaura a Capa ao voltar
                document.getElementById("location-box").style.display = "block";
                document.getElementById("tab-investigate").classList.add("selected");
                updateMenuSelection("#action-menu .menu-option");
            } 
            else if (terminalState === "INTERVENE" && event.key === "ArrowRight") {
                currentTab = 2;
                showPasswordRecovery(); // A função já carrega a images/password_recovery.png
            } 
            else if (terminalState === "RECOVERY" && event.key === "ArrowLeft") {
                currentTab = 1; 
                terminalState = document.getElementById("tab-password").getAttribute("data-previous-state");
                hideAllSections();
                interveneSection.style.display = "block";
                displayImage.src = `images/case_${currentActiveCase}/intervene.png`; // Restaura Intervene ao voltar do Password
                document.getElementById("location-box").style.display = "block";
                document.getElementById("tab-intervene").classList.add("selected");
                typedCode = ""; 
            }
        }

        if (terminalState === "RECOVERY" && (event.key === "Enter" || event.key === "Backspace" || event.key.match(/^[a-zA-Z0-9\-]$/))) {
            if (event.key === "Enter") {
                if (typedCode.trim().length === 0) {
                    // Cancela e volta para INTERVENE
                    terminalState = document.getElementById("tab-password").getAttribute("data-previous-state");
                    currentTab = 1;
                    hideAllSections();
                    interveneSection.style.display = "block";
                    displayImage.src = `images/case_${currentActiveCase}/intervene.png`; // Restaura Intervene ao cancelar
                    document.getElementById("location-box").style.display = "block";
                    document.getElementById("tab-intervene").classList.add("selected");
                    typedCode = ""; 
                } else if (recoverSession(typedCode)) {
                    startLevelSelect();
                } else {
                    recoveryInput.textContent = `> RECOVERY KEY INVALID. TRY AGAIN.`;
                    setTimeout(() => { typedCode = ""; recoveryInput.textContent = "> _"; }, 1500);
                }
            } else if (event.key === "Backspace") {
                typedCode = typedCode.slice(0, -1);
                recoveryInput.textContent = `> ${typedCode}_`;
            } else if (event.key.length === 1) {
                typedCode += event.key.toUpperCase();
                recoveryInput.textContent = `> ${typedCode}_`;
            }
            return; 
        }

        if (terminalState === "BOOT") {
            if (event.key === "Enter" && typedCode.trim().length > 0) {
                teamName = typedCode.trim().toUpperCase();
                updateTopBar();
                startIntroSequence();
                typedCode = "";
            } else if (event.key === "Backspace") {
                typedCode = typedCode.slice(0, -1);
                teamInput.textContent = `> ${typedCode}_`;
            } else if (event.key.length === 1 && event.key.match(/[a-zA-Z0-9 ]/)) {
                typedCode += event.key.toUpperCase();
                teamInput.textContent = `> ${typedCode}_`;
            }
        }
        else if (terminalState === "INTRO" && event.key === "Enter") {
            startDifficultySelect();
        }
        else if (terminalState === "DIFFICULTY_SELECT") {
            const menuItems = document.querySelectorAll("#difficulty-menu .menu-option");
            if (event.key === "ArrowDown") {
                currentIndex = (currentIndex + 1) % menuItems.length;
                updateMenuSelection("#difficulty-menu .menu-option");
            } else if (event.key === "ArrowUp") {
                currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
                updateMenuSelection("#difficulty-menu .menu-option");
            } else if (event.key === "Enter") {
                difficulty = menuItems[currentIndex].getAttribute("data-difficulty");
                currentSessionKey = generateSessionKey(); 
                updateTopBar();
                startInvestigation("0"); 
            }
        }
        else if (terminalState === "OVERRIDE") {
            if (event.key === "Enter") {
                const standardizedInput = typedCode.trim().replace(/\s+/g, '-'); 
                if (standardizedInput === "TD-TEAM") {
                    startLevelSelect(); 
                } else {
                    overrideInput.textContent = `> ACCESS DENIED. LOCKOUT ACTIVE.`;
                    setTimeout(() => { typedCode = ""; overrideInput.textContent = "> _"; }, 1500);
                }
            } else if (event.key === "Backspace") {
                typedCode = typedCode.slice(0, -1);
                overrideInput.textContent = `> ${typedCode}_`;
            } else if (event.key.length === 1 && event.key.match(/[a-zA-Z0-9\- ]/)) {
                typedCode += event.key.toUpperCase();
                overrideInput.textContent = `> ${typedCode}_`;
            }
        }
        else if (terminalState === "LEVEL_SELECT") {
            const menuItems = document.querySelectorAll("#case-menu .menu-option");
            if (event.key === "Enter") {
                const caseId = menuItems[currentIndex].getAttribute("data-id");
                if (!completedCases[caseId]) {
                    startProfiling(caseId); // Agora SEMPRE vai para o Profiling, independente da dificuldade
                } else {
                    levelInput.textContent = `> ${caseId}: CASE ALREADY SOLVED. SELECT OTHER SECTOR.`;
                    setTimeout(() => { typedCode = ""; levelInput.textContent = `> _`; }, 1200);
                }
            } else if (event.key === "ArrowDown") {
                let nextIndex = currentIndex;
                do { nextIndex = (nextIndex + 1) % menuItems.length; } 
                while (menuItems[nextIndex].classList.contains("completed") && nextIndex !== currentIndex);
                if (!menuItems[nextIndex].classList.contains("completed")) {
                    currentIndex = nextIndex;
                    updateMenuSelection("#case-menu .menu-option");
                }
            } else if (event.key === "ArrowUp") {
                let prevIndex = currentIndex;
                do { prevIndex = (prevIndex - 1 + menuItems.length) % menuItems.length; } 
                while (menuItems[prevIndex].classList.contains("completed") && prevIndex !== currentIndex);
                if (!menuItems[prevIndex].classList.contains("completed")) {
                    currentIndex = prevIndex;
                    updateMenuSelection("#case-menu .menu-option");
                }
            }
        }
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
                    profilingAttempts++;
                    if (profilingAttempts >= 2) {
                        alert("SYSTEM OVERRIDE: 2 Failed Attempts. Forcing alignment to correct profile. Proceeding to Investigation.");
                        startInvestigation(currentActiveCase);
                    } else {
                        alert(`INCORRECT PROFILE. Attempts remaining: ${2 - profilingAttempts}`);
                    }
                }
            }
        }
else if (terminalState === "MENU") {
            const menuItems = document.querySelectorAll("#action-menu .menu-option");
            if (event.key === "ArrowDown") { 
                currentIndex = (currentIndex + 1) % menuItems.length; 
                updateMenuSelection("#action-menu .menu-option"); 
            }
            else if (event.key === "ArrowUp") { 
                currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length; 
                updateMenuSelection("#action-menu .menu-option"); 
            }
            else if (event.key === "Enter") {
                const pass = menuItems[currentIndex].getAttribute("data-password");
                const actionLetter = menuItems[currentIndex].getAttribute("data-action"); // Captura a letra (A, B, C, D)
                showClue(pass, actionLetter); // Envia a letra para trocar a imagem
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
                }
            } else if (event.key === "Backspace") {
                typedCode = typedCode.slice(0, -1);
                document.getElementById("access-code-input").textContent = `> ${typedCode}_`;
            } else if (event.key.length === 1 && event.key.match(/[a-zA-Z0-9 ]/)) {
                typedCode += event.key.toUpperCase();
                document.getElementById("access-code-input").textContent = `> ${typedCode}_`;
            }
        }
        else if (terminalState === "CLUE" && event.key === "Enter") {
            terminalState = "MENU";
            clueContainer.style.display = "none";
            menuContainer.style.display = "block";
            
            // Retorna para a imagem de capa do caso ao voltar para o menu
            displayImage.src = `images/case_${currentActiveCase}/cover.png`;
            
            updateMenuSelection("#action-menu .menu-option");
        }
        else if (terminalState === "POSTMORTEM" && event.key === "Enter") {
            if (currentActiveCase === "0") {
                terminalState = "OVERRIDE";
                hideAllSections();
                overrideSection.style.display = "block";
                displayImage.src = "images/password.png"; 
                typedCode = "";
                overrideInput.textContent = "> _";
            } else {
                startLevelSelect();
            }
        }
    });

    hideAllSections();
    bootSection.style.display = "block";
    displayImage.src = "images/welcome.png"; 
    updateTopBar(); 
    typedCode = "";
});