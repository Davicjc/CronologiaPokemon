// ========================================
// POKÉMON WATCH ORDER - JAVASCRIPT
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initLanguageSystem();
    initParticles();
    initNavigation();
    initCursorGlow();
    initItemHoverEffects();
    initDisclaimerAutoHide();
});

// ========================================
// SISTEMA DE IDIOMAS
// ========================================

function initLanguageSystem() {
    // Inicializar seletor de idioma
    initLanguageSelector();
    
    // Aplicar traduções iniciais
    if (window.langManager) {
        window.langManager.applyTranslations();
        translateContentItems();
    }
}

function initLanguageSelector() {
    const selectorBtn = document.querySelector('.language-selector-btn');
    const dropdown = document.querySelector('.language-dropdown');
    const options = document.querySelectorAll('.language-option');
    
    if (!selectorBtn || !dropdown) return;
    
    // Toggle dropdown
    selectorBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
    });
    
    // Selecionar idioma
    options.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = option.dataset.lang;
            if (window.langManager) {
                window.langManager.setLanguage(lang);
                translateContentItems();
            }
            dropdown.classList.remove('show');
        });
    });
    
    // Fechar dropdown ao clicar fora
    document.addEventListener('click', () => {
        dropdown.classList.remove('show');
    });
    
    // Atualizar flag atual
    updateCurrentFlag();
}

function updateCurrentFlag() {
    const current = document.querySelector('.language-selector-current');
    if (current && window.langManager) {
        const flags = {
            'pt-BR': '🇧🇷',
            'en-US': '🇺🇸',
            'es-LA': '🇪🇸'
        };
        current.textContent = flags[window.langManager.currentLang] || '🇧🇷';
    }
}

// Mapeamento de títulos para chaves de tradução
const CONTENT_MAP = {
    // Geração I
    'Temporada 1: Liga Índigo': 's1_indigo',
    'Season 1: Indigo League': 's1_indigo',
    'Temporada 1: Liga Índigo': 's1_indigo',
    'Filme 01: Mewtwo Contra-Ataca': 'm01_mewtwo',
    'Movie 01: Mewtwo Strikes Back': 'm01_mewtwo',
    'Película 01: Mewtwo Contraataca': 'm01_mewtwo',
    'Temporada 2: Aventuras nas Ilhas Laranja': 's2_orange',
    'Season 2: Adventures on the Orange Islands': 's2_orange',
    'Temporada 2: Aventuras en las Islas Naranja': 's2_orange',
    'Filme 02: O Poder de Um (Lugia)': 'm02_lugia',
    'Movie 02: The Power of One': 'm02_lugia',
    'Película 02: El Poder de Uno': 'm02_lugia',
    
    // Geração II
    'Temporada 3: As Jornadas Johto': 's3_johto',
    'Season 3: The Johto Journeys': 's3_johto',
    'Temporada 3: Los Viajes Johto': 's3_johto',
    'Filme 03: O Feitiço dos Unown': 'm03_unown',
    'Movie 03: Spell of the Unown': 'm03_unown',
    'Película 03: El Hechizo de los Unown': 'm03_unown',
    'Temporada 4: Campeões da Liga Johto': 's4_champions',
    'Season 4: Johto League Champions': 's4_champions',
    'Temporada 4: Los Campeones de la Liga Johto': 's4_champions',
    'Especial: Mewtwo Retorna': 'sp_mewtwo_returns',
    'Special: Mewtwo Returns': 'sp_mewtwo_returns',
    'Especial: Mewtwo Regresa': 'sp_mewtwo_returns',
    'Filme 04: Celebi: A Voz da Floresta': 'm04_celebi',
    'Movie 04: Celebi: Voice of the Forest': 'm04_celebi',
    'Película 04: Celebi: La Voz del Bosque': 'm04_celebi',
    'Temporada 5: Master Quest': 's5_master',
    'Season 5: Master Quest': 's5_master',
    'Filme 05: Heróis (Latios e Latias)': 'm05_heroes',
    'Movie 05: Pokémon Heroes': 'm05_heroes',
    'Película 05: Héroes Pokémon: Latios y Latias': 'm05_heroes',
    
    // Geração III
    'Temporada 6: Advanced': 's6_advanced',
    'Season 6: Advanced': 's6_advanced',
    'Filme 06: Jirachi: Realizador de Desejos': 'm06_jirachi',
    'Movie 06: Jirachi: Wish Maker': 'm06_jirachi',
    'Película 06: Jirachi: Realizador de Deseos': 'm06_jirachi',
    'Temporada 7: Advanced Challenge': 's7_challenge',
    'Season 7: Advanced Challenge': 's7_challenge',
    'Filme 07: Alma Gêmea (Destiny Deoxys)': 'm07_deoxys',
    'Movie 07: Destiny Deoxys': 'm07_deoxys',
    'Película 07: El Destino de Deoxys': 'm07_deoxys',
    'Temporada 8: Advanced Battle': 's8_battle',
    'Season 8: Advanced Battle': 's8_battle',
    'Filme 08: Lucario e o Mistério de Mew': 'm08_lucario',
    'Movie 08: Lucario and the Mystery of Mew': 'm08_lucario',
    'Película 08: Lucario y el Misterio de Mew': 'm08_lucario',
    'Temporada 9: Batalha da Fronteira': 's9_frontier',
    'Season 9: Battle Frontier': 's9_frontier',
    'Temporada 9: Frente de Batalla': 's9_frontier',
    'Filme 09: Pokémon Ranger e o Templo do Mar': 'm09_ranger',
    'Movie 09: Pokémon Ranger and the Temple of the Sea': 'm09_ranger',
    'Película 09: Pokémon Ranger y el Templo del Mar': 'm09_ranger',
    'Especial: O Mestre da Miragem': 'sp_mirage',
    'Special: The Mastermind of Mirage Pokémon': 'sp_mirage',
    'Especial: El Amo de los Pokémon Espejismo': 'sp_mirage',
    'Pokémon Chronicles': 'note_chronicles',
    
    // Geração IV
    'Temporada 10: Diamond & Pearl': 's10_dp',
    'Season 10: Diamond and Pearl': 's10_dp',
    'Filme 10: O Pesadelo de Darkrai': 'm10_darkrai',
    'Movie 10: The Rise of Darkrai': 'm10_darkrai',
    'Película 10: El Surgimiento de Darkrai': 'm10_darkrai',
    'Temporada 11: DP Battle Dimension': 's11_dimension',
    'Season 11: DP Battle Dimension': 's11_dimension',
    'Temporada 11: DP Dimensión de Batalla': 's11_dimension',
    'Filme 11: Giratina e o Guerreiro Celeste': 'm11_giratina',
    'Movie 11: Giratina and the Sky Warrior': 'm11_giratina',
    'Película 11: Giratina y el Guerrero Celestial': 'm11_giratina',
    'Temporada 12: DP Galactic Battles': 's12_galactic',
    'Season 12: DP Galactic Battles': 's12_galactic',
    'Temporada 12: DP Batallas Galácticas': 's12_galactic',
    'Filme 12: Arceus e a Joia da Vida': 'm12_arceus',
    'Movie 12: Arceus and the Jewel of Life': 'm12_arceus',
    'Película 12: Arceus y la Joya de la Vida': 'm12_arceus',
    'Temporada 13: DP Vencedores da Liga Sinnoh': 's13_victors',
    'Season 13: DP Sinnoh League Victors': 's13_victors',
    'Temporada 13: DP Los Vencedores de la Liga Sinnoh': 's13_victors',
    'Filme 13: Zoroark: Mestre das Ilusões': 'm13_zoroark',
    'Movie 13: Zoroark: Master of Illusions': 'm13_zoroark',
    'Película 13: Zoroark: El Maestro de Ilusiones': 'm13_zoroark',
    
    // Geração V
    'Temporada 14: Black & White': 's14_bw',
    'Season 14: Black & White': 's14_bw',
    'Temporada 14: Negro y Blanco': 's14_bw',
    'Filme 14: Victini e Zekrom / Victini e Reshiram': 'm14_victini',
    'Movie 14: White—Victini and Zekrom / Black—Victini and Reshiram': 'm14_victini',
    'Película 14: Victini y Zekrom / Victini y Reshiram': 'm14_victini',
    'Temporada 15: BW Destinos Rivais': 's15_rivals',
    'Season 15: BW Rival Destinies': 's15_rivals',
    'Temporada 15: BW Destinos Rivales': 's15_rivals',
    'Filme 15: Kyurem contra a Espada da Justiça': 'm15_kyurem',
    'Movie 15: Kyurem vs. the Sword of Justice': 'm15_kyurem',
    'Película 15: Kyurem contra la Espada de la Justicia': 'm15_kyurem',
    'Temporada 16: BW Aventuras em Unova': 's16_unova',
    'Season 16: BW Adventures in Unova and Beyond': 's16_unova',
    'Temporada 16: BW Aventuras en Teselia y Más Allá': 's16_unova',
    'Filme 16: Genesect e a Lenda Revelada': 'm16_genesect',
    'Movie 16: Genesect and the Legend Awakened': 'm16_genesect',
    'Película 16: Genesect y el Despertar de una Leyenda': 'm16_genesect',
    
    // Geração VI
    'Temporada 17: XY': 's17_xy',
    'Season 17: XY': 's17_xy',
    'Especial: Mega Evolução - Ato I': 'sp_mega1',
    'Special: Mega Evolution Special I': 'sp_mega1',
    'Especial: Mega Evolución - Acto I': 'sp_mega1',
    'Especial: Mega Evolução - Ato II': 'sp_mega2',
    'Special: Mega Evolution Special II': 'sp_mega2',
    'Especial: Mega Evolución - Acto II': 'sp_mega2',
    'Especial: Mega Evolução - Ato III': 'sp_mega3',
    'Special: Mega Evolution Special III': 'sp_mega3',
    'Especial: Mega Evolución - Acto III': 'sp_mega3',
    'Especial: Mega Evolução - Ato IV': 'sp_mega4',
    'Special: Mega Evolution Special IV': 'sp_mega4',
    'Especial: Mega Evolución - Acto IV': 'sp_mega4',
    'Filme 17: Diancie e o Casulo da Destruição': 'm17_diancie',
    'Movie 17: Diancie and the Cocoon of Destruction': 'm17_diancie',
    'Película 17: Diancie y el Capullo de la Destrucción': 'm17_diancie',
    'Temporada 18: XY Kalos Quest': 's18_kalos',
    'Season 18: XY Kalos Quest': 's18_kalos',
    'Temporada 18: XY Expediciones en Kalos': 's18_kalos',
    'Filme 18: Hoopa e o Duelo Lendário': 'm18_hoopa',
    'Movie 18: Hoopa and the Clash of Ages': 'm18_hoopa',
    'Película 18: Hoopa y el Duelo Legendario': 'm18_hoopa',
    'Temporada 19: XYZ': 's19_xyz',
    'Season 19: XYZ': 's19_xyz',
    'Filme 19: Volcanion e a Maravilha Mecânica': 'm19_volcanion',
    'Movie 19: Volcanion and the Mechanical Marvel': 'm19_volcanion',
    'Película 19: Volcanion y la Maravilla Mecánica': 'm19_volcanion',
    
    // Geração VII
    'Temporada 20: Sun & Moon': 's20_sm',
    'Season 20: Sun & Moon': 's20_sm',
    'Temporada 20: Sol y Luna': 's20_sm',
    'Temporada 21: Sun & Moon - Ultra Adventures': 's21_ultra_adv',
    'Season 21: Sun & Moon—Ultra Adventures': 's21_ultra_adv',
    'Temporada 21: Sol y Luna—Ultra Aventuras': 's21_ultra_adv',
    'Temporada 22: Sun & Moon - Ultra Legends': 's22_ultra_leg',
    'Season 22: Sun & Moon—Ultra Legends': 's22_ultra_leg',
    'Temporada 22: Sol y Luna—Ultra Leyendas': 's22_ultra_leg',
    
    // Geração VIII
    'Temporada 23: Jornadas (Journeys)': 's23_journeys',
    'Season 23: Journeys': 's23_journeys',
    'Temporada 23: Viajes Pokémon': 's23_journeys',
    'Temporada 24: Jornadas de Mestre (Master Journeys)': 's24_master',
    'Season 24: Master Journeys': 's24_master',
    'Temporada 24: Viajes Maestros Pokémon': 's24_master',
    'Temporada 25: Jornadas Supremas': 's25_ultimate',
    'Season 25: Ultimate Journeys': 's25_ultimate',
    'Temporada 25: Viajes Definitivos Pokémon': 's25_ultimate',
    'Especial: As Crônicas de Arceus': 'sp_arceus_chronicles',
    'Special: Pokémon: The Arceus Chronicles': 'sp_arceus_chronicles',
    'Especial: Las Crónicas de Arceus': 'sp_arceus_chronicles',
    'Especial: O Céu Azul Distante': 'sp_blue_sky',
    'Special: Distant Blue Sky': 'sp_blue_sky',
    'Especial: El Cielo Azul Distante': 'sp_blue_sky',
    'Minissérie Final: A Caminho de Mestre Pokémon': 'final_master',
    'Final Miniseries: Pokémon: To Be a Pokémon Master': 'final_master',
    'Miniserie Final: Pokémon: Para Ser un Maestro Pokémon': 'final_master',
    
    // Geração IX
    'Temporada 26: Horizontes Pokémon': 's26_horizons',
    'Season 26: Pokémon Horizons: The Series': 's26_horizons',
    'Temporada 26: Horizontes Pokémon': 's26_horizons',
    'Temporada 27: O Brilho de Terapagos': 's27_terapagos',
    'Season 27: The Shining of Terapagos': 's27_terapagos',
    'Temporada 27: El Brillo de Terapagos': 's27_terapagos',
    'Temporada 28: Estreia Terastal': 's28_terastal',
    'Season 28: Terastal Debut': 's28_terastal',
    'Temporada 28: Debut Teracristal': 's28_terastal',
    'Temporada 29: Rayquaza Ascende': 's29_rayquaza',
    'Season 29: Rayquaza Rising': 's29_rayquaza',
    'Temporada 29: Rayquaza Asciende': 's29_rayquaza',
    
    // Extras - Baseados nos Jogos
    'Pokémon Origins': 'ex_origins',
    'Pokémon Generations': 'ex_generations',
    'Pokémon Evolutions': 'ex_evolutions',
    'Pokémon: Twilight Wings': 'ex_twilight',
    'Pokémon: Alas del Crepúsculo': 'ex_twilight',
    'Pokémon: Hisuian Snow': 'ex_hisuian',
    'Pokémon: Nieves de Hisui': 'ex_hisuian',
    'Pokémon: Paldean Winds': 'ex_paldean',
    'Pokémon: Vientos de Paldea': 'ex_paldean',
    
    // Extras - Divertidos
    'A Concierge Pokémon': 'ex_concierge',
    'Pokémon Concierge': 'ex_concierge',
    'Pokétoon': 'ex_poketoon',
    'Pokémon: A Grande Aventura de Bidoof': 'ex_bidoof',
    'Pokémon: Bidoof\'s Big Stand': 'ex_bidoof',
    'Pokémon: La Gran Aventura de Bidoof': 'ex_bidoof',
    'Pokémon: Rumo ao Pico': 'ex_peak',
    'Pokémon: Path to the Peak': 'ex_peak',
    'Pokémon: Camino a la Cima': 'ex_peak',
    
    // Extras - Universo Alternativo
    'Filme 20: Eu Escolho Você!': 'm20_choose_you',
    'Movie 20: I Choose You!': 'm20_choose_you',
    'Película 20: ¡Yo Te Elijo!': 'm20_choose_you',
    'Filme 21: O Poder de Todos': 'm21_power_us',
    'Movie 21: The Power of Us': 'm21_power_us',
    'Película 21: El Poder de Todos': 'm21_power_us',
    'Filme 23: Segredos da Selva (Koko)': 'm23_secrets',
    'Movie 23: Secrets of the Jungle': 'm23_secrets',
    'Película 23: Los Secretos de la Selva': 'm23_secrets',
    'Remake: Mewtwo Contra-Ataca - Evolução': 'remake_mewtwo',
    'Remake: Mewtwo Strikes Back—Evolution': 'remake_mewtwo',
    'Remake: Mewtwo Contraataca—Evolución': 'remake_mewtwo',
    'Live Action: Detetive Pikachu': 'detective_pikachu',
    'Live Action: Detective Pikachu': 'detective_pikachu'
};

function translateContentItems() {
    if (!window.langManager) return;
    
    const lang = window.langManager.currentLang;
    const translations = window.TRANSLATIONS[lang];
    if (!translations) return;
    
    // Traduzir todos os títulos de conteúdo
    document.querySelectorAll('.content-item h4').forEach(h4 => {
        const currentText = h4.textContent.trim();
        const key = findContentKey(currentText);
        
        if (key && translations.content[key]) {
            h4.textContent = translations.content[key];
        }
    });
    
    // Traduzir badges
    document.querySelectorAll('.item-badge').forEach(badge => {
        const text = badge.textContent.trim();
        const badgeMap = {
            'TV': 'badgeTV',
            'FILME': 'badgeMovie',
            'MOVIE': 'badgeMovie',
            'PELÍCULA': 'badgeMovie',
            'ESPECIAL': 'badgeSpecial',
            'SPECIAL': 'badgeSpecial',
            'NOTA': 'badgeNote',
            'NOTE': 'badgeNote',
            'NOVO': 'badgeNew',
            'NEW': 'badgeNew',
            'NUEVO': 'badgeNew',
            'FINAL': 'badgeFinal',
            'FINALE': 'badgeFinal'
        };
        
        const key = badgeMap[text];
        if (key && translations.ui[key]) {
            badge.textContent = translations.ui[key];
        }
    });
    
    // Traduzir texto "Episódios"
    document.querySelectorAll('.episodes').forEach(ep => {
        const text = ep.textContent;
        if (text.includes('Episódios') || text.includes('Episodes') || text.includes('Episodios')) {
            ep.textContent = text
                .replace(/Episódios/g, translations.ui.episodes)
                .replace(/Episodes/g, translations.ui.episodes)
                .replace(/Episodios/g, translations.ui.episodes);
        }
    });
    
    // Atualizar flag do seletor
    updateCurrentFlag();
}

function findContentKey(text) {
    // Tentar encontrar a chave diretamente
    if (CONTENT_MAP[text]) {
        return CONTENT_MAP[text];
    }
    
    // Tentar encontrar por correspondência parcial
    for (const [title, key] of Object.entries(CONTENT_MAP)) {
        // Comparar sem episódios
        const cleanText = text.split(' (')[0].split(' - ')[0].trim();
        const cleanTitle = title.split(' (')[0].split(' - ')[0].trim();
        
        if (cleanText === cleanTitle) {
            return key;
        }
    }
    
    return null;
}

// ========================================
// AUTO-HIDE DISCLAIMER BOX
// ========================================

let disclaimerInterval = null;

function initDisclaimerAutoHide() {
    const disclaimerBox = document.getElementById('disclaimer-box');
    const timerElement = document.getElementById('disclaimer-timer');
    
    if (disclaimerBox && timerElement) {
        let countdown = 10;
        
        // Função para obter o texto traduzido do timer
        const getTimerText = (seconds) => {
            if (window.langManager && window.TRANSLATIONS) {
                const lang = window.langManager.currentLang;
                const template = window.TRANSLATIONS[lang]?.ui?.disclaimerTimer || 'Sumindo em <strong>%s</strong>s';
                return template.replace('%s', seconds);
            }
            return `Sumindo em <strong>${seconds}</strong>s`;
        };
        
        disclaimerInterval = setInterval(() => {
            countdown--;
            timerElement.innerHTML = getTimerText(countdown);
            
            if (countdown <= 0) {
                clearInterval(disclaimerInterval);
                disclaimerBox.classList.add('fade-out');
                setTimeout(() => {
                    disclaimerBox.style.display = 'none';
                }, 500);
            }
        }, 1000);
    }
}

function closeDisclaimer() {
    const disclaimerBox = document.getElementById('disclaimer-box');
    if (disclaimerInterval) {
        clearInterval(disclaimerInterval);
    }
    if (disclaimerBox) {
        disclaimerBox.classList.add('fade-out');
        setTimeout(() => {
            disclaimerBox.style.display = 'none';
        }, 500);
    }
}

// ========================================
// PARTÍCULAS INTERATIVAS
// ========================================

function initParticles() {
    const container = document.getElementById('particles-container');
    const particleCount = 20; // Reduzido para melhor performance
    const colors = [
        'rgba(255, 222, 0, 0.5)',   // Amarelo Pokémon
        'rgba(255, 0, 0, 0.4)',     // Vermelho
        'rgba(59, 76, 202, 0.4)',   // Azul
    ];

    for (let i = 0; i < particleCount; i++) {
        createParticle(container, colors);
    }

    // Criar novas partículas periodicamente (intervalo maior)
    setInterval(() => {
        if (container.children.length < 40) {
            createParticle(container, colors);
        }
    }, 1000);
}

function createParticle(container, colors) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 15 + 5;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;

    particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        left: ${left}%;
        bottom: -20px;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
        box-shadow: 0 0 ${size * 2}px ${color};
    `;

    container.appendChild(particle);

    // Remover partícula após animação
    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
        }
    }, (duration + delay) * 1000);
}

// ========================================
// NAVEGAÇÃO
// ========================================

function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const ashSection = document.querySelector('[data-saga="ash"]');
    const horizontesSection = document.querySelector('[data-saga="horizontes"]');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover active de todos
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const gen = btn.dataset.gen;

            // Animação de transição
            const sections = document.querySelectorAll('.saga-section');
            
            if (gen === 'all') {
                sections.forEach(s => {
                    s.style.display = 'block';
                    fadeIn(s);
                });
            } else if (gen === 'ash') {
                ashSection.style.display = 'block';
                horizontesSection.style.display = 'none';
                fadeIn(ashSection);
            } else if (gen === 'horizontes') {
                ashSection.style.display = 'none';
                horizontesSection.style.display = 'block';
                fadeIn(horizontesSection);
            }

            // Scroll suave para o topo do conteúdo
            document.querySelector('.main-container').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}

function fadeIn(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    
    requestAnimationFrame(() => {
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    });
}

// ========================================
// EFEITO DE BRILHO NO CURSOR
// ========================================

function initCursorGlow() {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);

    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Animação suave do brilho seguindo o cursor
    function animateGlow() {
        const dx = mouseX - glowX;
        const dy = mouseY - glowY;
        
        glowX += dx * 0.1;
        glowY += dy * 0.1;
        
        glow.style.left = glowX + 'px';
        glow.style.top = glowY + 'px';
        
        requestAnimationFrame(animateGlow);
    }
    
    animateGlow();

    // Esconder em dispositivos touch
    if ('ontouchstart' in window) {
        glow.style.display = 'none';
    }
}

// ========================================
// EFEITOS DE HOVER NOS ITEMS
// ========================================

function initItemHoverEffects() {
    const items = document.querySelectorAll('.content-item');
    
    items.forEach((item, index) => {
        // Adicionar checkbox de visto
        addWatchedCheckbox(item);
        
        // Adicionar tracker de episódio
        addEpisodeTracker(item, index);
        
        item.addEventListener('mouseenter', () => {
            // Efeito de ripple
            createRipple(item);
        });
    });
}

function getItemUniqueId(item) {
    const title = item.querySelector('h4').textContent;
    const episodesEl = item.querySelector('.episodes');
    const episodes = episodesEl ? episodesEl.textContent : '';
    return episodes ? `${title} | ${episodes}` : title;
}

function addWatchedCheckbox(item) {
    const uniqueId = getItemUniqueId(item);
    
    // Criar checkbox
    const checkbox = document.createElement('div');
    checkbox.className = 'watched-checkbox';
    checkbox.innerHTML = '<span class="check-mark">✓</span>';
    
    // Verificar se já está marcado
    const saved = localStorage.getItem('pokemon-watched');
    if (saved) {
        const watchedItems = JSON.parse(saved);
        if (watchedItems.includes(uniqueId)) {
            checkbox.classList.add('checked');
            item.classList.add('watched');
            item.style.opacity = '0.6';
        }
    }
    
    // Evento de clique
    checkbox.addEventListener('click', (e) => {
        e.stopPropagation();
        checkbox.classList.toggle('checked');
        
        if (checkbox.classList.contains('checked')) {
            item.classList.add('watched');
            item.style.opacity = '0.6';
        } else {
            item.classList.remove('watched');
            item.style.opacity = '1';
        }
        
        saveWatchedState();
    });
    
    // Inserir no início do item
    item.insertBefore(checkbox, item.firstChild);
}

function addEpisodeTracker(item, index) {
    // Não adicionar tracker para filmes, especiais sem episódios ou notas
    if (item.classList.contains('movie') || item.classList.contains('note')) {
        return;
    }
    
    // Verificar se é um especial sem episódios (não tem "Episódios" no texto)
    const episodesText = item.querySelector('.episodes');
    if (item.classList.contains('special') && !episodesText) {
        return;
    }
    
    const title = item.querySelector('h4').textContent;
    const itemId = `ep-${index}-${title.substring(0, 20).replace(/\s/g, '-')}`;
    
    // Criar container do tracker
    const tracker = document.createElement('div');
    tracker.className = 'episode-tracker';
    
    // Label
    const label = document.createElement('span');
    label.className = 'episode-label';
    label.textContent = 'Ep:';
    
    // Input
    const input = document.createElement('input');
    input.type = 'number';
    input.className = 'episode-input';
    input.placeholder = '--';
    input.min = '0';
    input.max = '999';
    input.dataset.itemId = itemId;
    
    // Botão de seta para cima
    const upBtn = document.createElement('button');
    upBtn.className = 'episode-up-btn';
    upBtn.innerHTML = '▲';
    upBtn.title = 'Próximo episódio';
    
    upBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const currentVal = parseInt(input.value) || 0;
        input.value = currentVal + 1;
        localStorage.setItem(`pokemon-ep-${itemId}`, input.value);
    });
    
    // Carregar valor salvo
    const savedEp = localStorage.getItem(`pokemon-ep-${itemId}`);
    if (savedEp) {
        input.value = savedEp;
    }
    
    // Salvar ao mudar
    input.addEventListener('change', () => {
        if (input.value) {
            localStorage.setItem(`pokemon-ep-${itemId}`, input.value);
        } else {
            localStorage.removeItem(`pokemon-ep-${itemId}`);
        }
    });
    
    // Prevenir propagação do clique
    input.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    
    tracker.appendChild(label);
    tracker.appendChild(input);
    tracker.appendChild(upBtn);
    
    // Inserir antes do badge
    const badge = item.querySelector('.item-badge');
    if (badge) {
        item.insertBefore(tracker, badge);
    } else {
        item.appendChild(tracker);
    }
}

function createRipple(element) {
    const ripple = document.createElement('span');
    ripple.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 5px;
        height: 5px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    `;
    
    // Adicionar keyframes se não existir
    if (!document.querySelector('#ripple-style')) {
        const style = document.createElement('style');
        style.id = 'ripple-style';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: translate(-50%, -50%) scale(100);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

function toggleWatched(item) {
    // Função mantida para compatibilidade
    const checkbox = item.querySelector('.watched-checkbox');
    if (checkbox) {
        checkbox.click();
    }
}

function saveWatchedState() {
    const watchedItems = [];
    document.querySelectorAll('.content-item.watched').forEach(item => {
        const uniqueId = getItemUniqueId(item);
        watchedItems.push(uniqueId);
    });
    localStorage.setItem('pokemon-watched', JSON.stringify(watchedItems));
}

// Carregar estado salvo (agora tratado no addWatchedCheckbox)
function loadWatchedState() {
    // Estado agora é carregado quando o checkbox é criado
}

// Carregar estado quando a página carregar
document.addEventListener('DOMContentLoaded', loadWatchedState);

// ========================================
// EASTER EGG - KONAMI CODE
// ========================================

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    // Criar Pikachu gigante
    const pikachu = document.createElement('img');
    pikachu.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png';
    pikachu.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        width: 400px;
        height: 400px;
        z-index: 10000;
        filter: drop-shadow(0 0 50px rgba(255, 222, 0, 0.8));
        animation: pikachuPop 2s ease forwards;
        pointer-events: none;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pikachuPop {
            0% { transform: translate(-50%, -50%) scale(0) rotate(0deg); }
            50% { transform: translate(-50%, -50%) scale(1.2) rotate(10deg); }
            70% { transform: translate(-50%, -50%) scale(1) rotate(-5deg); }
            100% { transform: translate(-50%, -50%) scale(0) rotate(0deg); }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(pikachu);
    
    // Confetti
    for (let i = 0; i < 100; i++) {
        setTimeout(() => createConfetti(), i * 20);
    }
    
    setTimeout(() => {
        pikachu.remove();
        style.remove();
    }, 2000);
}

function createConfetti() {
    const confetti = document.createElement('div');
    const colors = ['#FF0000', '#FFDE00', '#3B4CCA', '#4CAF50', '#FF9800', '#E91E63'];
    
    confetti.style.cssText = `
        position: fixed;
        top: -10px;
        left: ${Math.random() * 100}vw;
        width: ${Math.random() * 10 + 5}px;
        height: ${Math.random() * 10 + 5}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
        z-index: 9999;
        pointer-events: none;
        animation: confettiFall ${Math.random() * 2 + 2}s linear forwards;
    `;
    
    if (!document.querySelector('#confetti-style')) {
        const style = document.createElement('style');
        style.id = 'confetti-style';
        style.textContent = `
            @keyframes confettiFall {
                to {
                    transform: translateY(100vh) rotate(720deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 4000);
}

// ========================================
// EFEITO DE DIGITAÇÃO NO TÍTULO
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
        // Obter texto traduzido
        let text = subtitle.textContent;
        if (window.langManager && window.TRANSLATIONS) {
            const lang = window.langManager.currentLang;
            text = window.TRANSLATIONS[lang]?.ui?.subtitle || text;
        }
        
        subtitle.textContent = '';
        subtitle.style.borderRight = '2px solid var(--pokemon-yellow)';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // Remover cursor após digitação
                setTimeout(() => {
                    subtitle.style.borderRight = 'none';
                }, 500);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
});

// ========================================
// SMOOTH SCROLL PARA LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

console.log(`
    ⚡️ Pokémon Watch Order ⚡️
    ========================
    
    Dica: Digite o Código Konami para uma surpresa!
    ↑ ↑ ↓ ↓ ← → ← → B A
    
    Clique nos itens para marcar como assistido!
    
    Gotta Watch 'Em All! 🎬
`);

// ========================================
// EXPORTAR E IMPORTAR SAVE
// ========================================

function exportSave() {
    const saveData = {
        version: 1,
        exportDate: new Date().toISOString(),
        watched: localStorage.getItem('pokemon-watched') || '[]',
        episodes: {}
    };
    
    // Coletar todos os dados de episódios
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('pokemon-ep-')) {
            saveData.episodes[key] = localStorage.getItem(key);
        }
    }
    
    // Criar arquivo JSON
    const blob = new Blob([JSON.stringify(saveData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    // Baixar arquivo
    const a = document.createElement('a');
    a.href = url;
    a.download = `pokemon-progresso-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Feedback visual
    showNotification('✅ Progresso exportado com sucesso!');
}

function importSave(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const saveData = JSON.parse(e.target.result);
            
            // Validar dados
            if (!saveData.watched) {
                throw new Error('Arquivo inválido');
            }
            
            // Confirmar importação
            if (confirm('⚠️ Isso irá substituir seu progresso atual. Deseja continuar?')) {
                // Importar dados de assistidos
                localStorage.setItem('pokemon-watched', saveData.watched);
                
                // Importar dados de episódios
                if (saveData.episodes) {
                    for (const [key, value] of Object.entries(saveData.episodes)) {
                        localStorage.setItem(key, value);
                    }
                }
                
                showNotification('✅ Progresso importado! Recarregando...');
                
                // Recarregar página após 1.5s
                setTimeout(() => {
                    location.reload();
                }, 1500);
            }
        } catch (error) {
            showNotification('❌ Erro: Arquivo inválido!', true);
        }
    };
    reader.readAsText(file);
    
    // Limpar input para permitir reimportar o mesmo arquivo
    event.target.value = '';
}

function showNotification(message, isError = false) {
    // Remover notificação anterior se existir
    const existing = document.querySelector('.save-notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'save-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        padding: 15px 30px;
        background: ${isError ? '#f44336' : '#4CAF50'};
        color: white;
        border-radius: 10px;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 0.95rem;
        z-index: 10000;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        animation: slideUp 0.3s ease;
    `;
    
    // Adicionar keyframes se não existir
    if (!document.querySelector('#notification-style')) {
        const style = document.createElement('style');
        style.id = 'notification-style';
        style.textContent = `
            @keyframes slideUp {
                from { transform: translateX(-50%) translateY(100px); opacity: 0; }
                to { transform: translateX(-50%) translateY(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}
