// ========================================
// POKÉMON WATCH ORDER - TRANSLATIONS
// Nomes OFICIAIS de cada país/região
// ========================================

const TRANSLATIONS = {
    // ========================================
    // PORTUGUÊS (BR) - Padrão
    // ========================================
    'pt-BR': {
        // Interface
        ui: {
            subtitle: 'Ordem de Assistir',
            headerDescription: 'A ordem completa para maratonar toda a saga!',
            listBy: '📋 Lista sugerida por',
            disclaimerTitle: '🎮 <strong>Feito por fã, para fãs!</strong> Esta lista representa minha visão pessoal da ordem cronológica ideal para assistir Pokémon.',
            disclaimerCopyright: '⚠️ Conteúdo sem fins lucrativos. Pokémon™ é marca registrada da Nintendo, The Pokémon Company e Game Freak.',
            disclaimerTimer: 'Sumindo em <strong>%s</strong>s',
            dataToggle: '💾 Seus dados <strong>Importante!</strong>',
            dataWarningTitle: '<strong>Seus dados são salvos apenas neste navegador!</strong>',
            dataWarningText: 'Se trocar de navegador ou dispositivo, seu progresso não aparecerá. Use os botões abaixo para fazer backup.',
            exportBtn: '📤 Exportar',
            importBtn: '📥 Importar',
            navAll: 'Todos',
            navAsh: 'Saga Ash',
            navHorizons: 'Horizontes',
            footerSlogan: 'Gotta Watch \'Em All! 🎬',
            footerCredits: 'Lista organizada por',
            suggestionsTitle: '📝 <strong>Sugestões são bem-vindas!</strong>',
            suggestionsText: 'Achou algo errado ou quer sugerir uma mudança? Entre em contato:',
            legalToggle: '⚠️ Aviso Legal',
            legalText1: 'Projeto de fã sem fins lucrativos. Esta ordem representa a visão pessoal do autor.',
            legalText2: 'Pokémon™ e seus personagens são propriedade de <strong>Nintendo</strong>, <strong>The Pokémon Company</strong> e <strong>Game Freak</strong>.',
            legalText3: '© 1997-2026 Pokémon. © 1995-2026 Nintendo/Creatures Inc./GAME FREAK inc.',
            privacyLink: '🔒 Política de Privacidade (Google)',
            badgeTV: 'TV',
            badgeMovie: 'FILME',
            badgeSpecial: 'ESPECIAL',
            badgeNote: 'NOTA',
            badgeNew: 'NOVO',
            badgeFinal: 'FINAL',
            episodes: 'Episódios',
            close: 'Fechar',
            episodeLabel: 'Ep:'
        },
        
        // Sagas
        sagas: {
            ashTitle: '🧢 A Saga de Ash Ketchum',
            ashYears: '1997 – 2023',
            horizonsTitle: '🧭 A Saga Horizontes',
            horizonsYears: '2023 – Atual',
            extrasTitle: '📂 Extras, Spin-offs e Especiais',
            extrasYears: 'Conteúdo Adicional'
        },
        
        // Gerações
        generations: {
            gen1: { title: 'Geração I', subtitle: 'Kanto & Ilhas Laranja' },
            gen2: { title: 'Geração II', subtitle: 'Johto' },
            gen3: { title: 'Geração III', subtitle: 'Hoenn & Batalha da Fronteira' },
            gen4: { title: 'Geração IV', subtitle: 'Sinnoh' },
            gen5: { title: 'Geração V', subtitle: 'Unova' },
            gen6: { title: 'Geração VI', subtitle: 'Kalos' },
            gen7: { title: 'Geração VII', subtitle: 'Alola' },
            gen8: { title: 'Geração VIII', subtitle: 'Jornadas' },
            gen9: { title: 'Geração IX', subtitle: 'Paldea (Liko & Roy)' },
            games: { title: 'Baseados nos Jogos', subtitle: 'Histórias do Lore Pokémon' },
            fun: { title: 'Relaxantes e Divertidos', subtitle: 'Conteúdo Leve' },
            alternate: { title: 'Universo Alternativo', subtitle: 'Filmes Fora da Linha Principal' }
        },
        
        // Conteúdo
        content: {
            // Geração I
            's1_indigo': 'Temporada 1: Liga Índigo',
            'm01_mewtwo': 'Filme 01: Mewtwo Contra-Ataca',
            's2_orange': 'Temporada 2: Aventuras nas Ilhas Laranja',
            'm02_lugia': 'Filme 02: O Poder de Um (Lugia)',
            
            // Geração II
            's3_johto': 'Temporada 3: As Jornadas Johto',
            'm03_unown': 'Filme 03: O Feitiço dos Unown',
            's4_champions': 'Temporada 4: Campeões da Liga Johto',
            'sp_mewtwo_returns': 'Especial: Mewtwo Retorna',
            'm04_celebi': 'Filme 04: Celebi: A Voz da Floresta',
            's5_master': 'Temporada 5: Master Quest',
            'm05_heroes': 'Filme 05: Heróis (Latios e Latias)',
            
            // Geração III
            's6_advanced': 'Temporada 6: Advanced',
            'm06_jirachi': 'Filme 06: Jirachi: Realizador de Desejos',
            's7_challenge': 'Temporada 7: Advanced Challenge',
            'm07_deoxys': 'Filme 07: Alma Gêmea (Destiny Deoxys)',
            's8_battle': 'Temporada 8: Advanced Battle',
            'm08_lucario': 'Filme 08: Lucario e o Mistério de Mew',
            's9_frontier': 'Temporada 9: Batalha da Fronteira',
            'm09_ranger': 'Filme 09: Pokémon Ranger e o Templo do Mar',
            'sp_mirage': 'Especial: O Mestre da Miragem',
            'sp_mirage_note': 'Ponte entre Gen 3 e 4',
            'note_chronicles': 'Pokémon Chronicles',
            'note_chronicles_desc': 'Incluindo A Lenda do Trovão - pode ser visto nesta era',
            
            // Geração IV
            's10_dp': 'Temporada 10: Diamond & Pearl',
            'm10_darkrai': 'Filme 10: O Pesadelo de Darkrai',
            's11_dimension': 'Temporada 11: DP Battle Dimension',
            'm11_giratina': 'Filme 11: Giratina e o Guerreiro Celeste',
            's12_galactic': 'Temporada 12: DP Galactic Battles',
            'm12_arceus': 'Filme 12: Arceus e a Joia da Vida',
            's13_victors': 'Temporada 13: DP Vencedores da Liga Sinnoh',
            'm13_zoroark': 'Filme 13: Zoroark: Mestre das Ilusões',
            
            // Geração V
            's14_bw': 'Temporada 14: Black & White',
            'm14_victini': 'Filme 14: Victini e Zekrom / Victini e Reshiram',
            's15_rivals': 'Temporada 15: BW Destinos Rivais',
            'm15_kyurem': 'Filme 15: Kyurem contra a Espada da Justiça',
            's16_unova': 'Temporada 16: BW Aventuras em Unova',
            'm16_genesect': 'Filme 16: Genesect e a Lenda Revelada',
            
            // Geração VI
            's17_xy': 'Temporada 17: XY',
            'sp_mega1': 'Especial: Mega Evolução - Ato I',
            'sp_mega2': 'Especial: Mega Evolução - Ato II',
            'sp_mega3': 'Especial: Mega Evolução - Ato III',
            'sp_mega4': 'Especial: Mega Evolução - Ato IV',
            'm17_diancie': 'Filme 17: Diancie e o Casulo da Destruição',
            's18_kalos': 'Temporada 18: XY Kalos Quest',
            'm18_hoopa': 'Filme 18: Hoopa e o Duelo Lendário',
            's19_xyz': 'Temporada 19: XYZ',
            'm19_volcanion': 'Filme 19: Volcanion e a Maravilha Mecânica',
            
            // Geração VII
            's20_sm': 'Temporada 20: Sun & Moon',
            's21_ultra_adv': 'Temporada 21: Sun & Moon - Ultra Adventures',
            's22_ultra_leg': 'Temporada 22: Sun & Moon - Ultra Legends',
            
            // Geração VIII
            's23_journeys': 'Temporada 23: Jornadas (Journeys)',
            's24_master': 'Temporada 24: Jornadas de Mestre (Master Journeys)',
            's25_ultimate': 'Temporada 25: Jornadas Supremas',
            'sp_arceus_chronicles': 'Especial: As Crônicas de Arceus',
            'sp_arceus_chronicles_eps': '4 Episódios',
            'sp_blue_sky': 'Especial: O Céu Azul Distante',
            'final_master': 'Minissérie Final: A Caminho de Mestre Pokémon',
            'final_master_eps': '11 Episódios - FINAL DA SAGA ASH',
            
            // Geração IX
            's26_horizons': 'Temporada 26: Horizontes Pokémon',
            's26_horizons_note': 'Liko e Roy',
            's27_terapagos': 'Temporada 27: O Brilho de Terapagos',
            's28_terastal': 'Temporada 28: Estreia Terastal',
            's29_rayquaza': 'Temporada 29: Rayquaza Ascende',
            
            // Extras - Baseados nos Jogos
            'ex_origins': 'Pokémon Origins',
            'ex_origins_eps': 'Red & Blue (4 Episódios)',
            'ex_generations': 'Pokémon Generations',
            'ex_generations_eps': 'Gerações 1 a 6 (18 Episódios)',
            'ex_evolutions': 'Pokémon Evolutions',
            'ex_evolutions_eps': 'Gerações 1 a 8 (8 Episódios)',
            'ex_twilight': 'Pokémon: Twilight Wings',
            'ex_twilight_eps': 'Região de Galar (8 Episódios)',
            'ex_hisuian': 'Pokémon: Hisuian Snow',
            'ex_hisuian_eps': 'Legends Arceus (3 Episódios)',
            'ex_paldean': 'Pokémon: Paldean Winds',
            'ex_paldean_eps': 'Região de Paldea (4 Episódios)',
            
            // Extras - Relaxantes
            'ex_concierge': 'A Concierge Pokémon',
            'ex_concierge_eps': 'Netflix (4 Episódios)',
            'ex_poketoon': 'Pokétoon',
            'ex_poketoon_eps': 'Curtas Animados Variados',
            'ex_bidoof': 'Pokémon: A Grande Aventura de Bidoof',
            'ex_peak': 'Pokémon: Rumo ao Pico',
            'ex_peak_eps': 'TCG (4 Episódios)',
            
            // Extras - Universo Alternativo
            'm20_choose_you': 'Filme 20: Eu Escolho Você!',
            'm21_power_us': 'Filme 21: O Poder de Todos',
            'm23_secrets': 'Filme 23: Segredos da Selva (Koko)',
            'remake_mewtwo': 'Remake: Mewtwo Contra-Ataca - Evolução',
            'detective_pikachu': 'Live Action: Detetive Pikachu'
        }
    },
    
    // ========================================
    // ENGLISH (US) - Official Names
    // ========================================
    'en-US': {
        // Interface
        ui: {
            subtitle: 'Watch Order',
            headerDescription: 'The complete order to binge-watch the entire saga!',
            listBy: '📋 List curated by',
            disclaimerTitle: '🎮 <strong>Made by a fan, for fans!</strong> This list represents my personal view of the ideal chronological order to watch Pokémon.',
            disclaimerCopyright: '⚠️ Non-profit content. Pokémon™ is a trademark of Nintendo, The Pokémon Company, and Game Freak.',
            disclaimerTimer: 'Disappearing in <strong>%s</strong>s',
            dataToggle: '💾 Your data <strong>Important!</strong>',
            dataWarningTitle: '<strong>Your data is only saved in this browser!</strong>',
            dataWarningText: 'If you switch browsers or devices, your progress will not appear. Use the buttons below to backup.',
            exportBtn: '📤 Export',
            importBtn: '📥 Import',
            navAll: 'All',
            navAsh: 'Ash Saga',
            navHorizons: 'Horizons',
            footerSlogan: 'Gotta Watch \'Em All! 🎬',
            footerCredits: 'List organized by',
            suggestionsTitle: '📝 <strong>Suggestions are welcome!</strong>',
            suggestionsText: 'Found something wrong or want to suggest a change? Contact:',
            legalToggle: '⚠️ Legal Notice',
            legalText1: 'Fan project with no profit. This order represents the author\'s personal view.',
            legalText2: 'Pokémon™ and its characters are property of <strong>Nintendo</strong>, <strong>The Pokémon Company</strong>, and <strong>Game Freak</strong>.',
            legalText3: '© 1997-2026 Pokémon. © 1995-2026 Nintendo/Creatures Inc./GAME FREAK inc.',
            privacyLink: '🔒 Privacy Policy (Google)',
            badgeTV: 'TV',
            badgeMovie: 'MOVIE',
            badgeSpecial: 'SPECIAL',
            badgeNote: 'NOTE',
            badgeNew: 'NEW',
            badgeFinal: 'FINALE',
            episodes: 'Episodes',
            close: 'Close',
            episodeLabel: 'Ep:'
        },
        
        // Sagas
        sagas: {
            ashTitle: '🧢 The Ash Ketchum Saga',
            ashYears: '1997 – 2023',
            horizonsTitle: '🧭 The Horizons Saga',
            horizonsYears: '2023 – Present',
            extrasTitle: '📂 Extras, Spin-offs & Specials',
            extrasYears: 'Additional Content'
        },
        
        // Gerações
        generations: {
            gen1: { title: 'Generation I', subtitle: 'Kanto & Orange Islands' },
            gen2: { title: 'Generation II', subtitle: 'Johto' },
            gen3: { title: 'Generation III', subtitle: 'Hoenn & Battle Frontier' },
            gen4: { title: 'Generation IV', subtitle: 'Sinnoh' },
            gen5: { title: 'Generation V', subtitle: 'Unova' },
            gen6: { title: 'Generation VI', subtitle: 'Kalos' },
            gen7: { title: 'Generation VII', subtitle: 'Alola' },
            gen8: { title: 'Generation VIII', subtitle: 'Journeys' },
            gen9: { title: 'Generation IX', subtitle: 'Paldea (Liko & Roy)' },
            games: { title: 'Based on Games', subtitle: 'Pokémon Lore Stories' },
            fun: { title: 'Relaxing & Fun', subtitle: 'Lighthearted Content' },
            alternate: { title: 'Alternate Universe', subtitle: 'Movies Outside Main Timeline' }
        },
        
        // Content - Official US Names
        content: {
            // Generation I
            's1_indigo': 'Season 1: Indigo League',
            'm01_mewtwo': 'Movie 01: Mewtwo Strikes Back',
            's2_orange': 'Season 2: Adventures on the Orange Islands',
            'm02_lugia': 'Movie 02: The Power of One',
            
            // Generation II
            's3_johto': 'Season 3: The Johto Journeys',
            'm03_unown': 'Movie 03: Spell of the Unown',
            's4_champions': 'Season 4: Johto League Champions',
            'sp_mewtwo_returns': 'Special: Mewtwo Returns',
            'm04_celebi': 'Movie 04: Celebi: Voice of the Forest',
            's5_master': 'Season 5: Master Quest',
            'm05_heroes': 'Movie 05: Pokémon Heroes',
            
            // Generation III
            's6_advanced': 'Season 6: Advanced',
            'm06_jirachi': 'Movie 06: Jirachi: Wish Maker',
            's7_challenge': 'Season 7: Advanced Challenge',
            'm07_deoxys': 'Movie 07: Destiny Deoxys',
            's8_battle': 'Season 8: Advanced Battle',
            'm08_lucario': 'Movie 08: Lucario and the Mystery of Mew',
            's9_frontier': 'Season 9: Battle Frontier',
            'm09_ranger': 'Movie 09: Pokémon Ranger and the Temple of the Sea',
            'sp_mirage': 'Special: The Mastermind of Mirage Pokémon',
            'sp_mirage_note': 'Bridge between Gen 3 and 4',
            'note_chronicles': 'Pokémon Chronicles',
            'note_chronicles_desc': 'Including The Legend of Thunder! - can be watched in this era',
            
            // Generation IV
            's10_dp': 'Season 10: Diamond and Pearl',
            'm10_darkrai': 'Movie 10: The Rise of Darkrai',
            's11_dimension': 'Season 11: DP Battle Dimension',
            'm11_giratina': 'Movie 11: Giratina and the Sky Warrior',
            's12_galactic': 'Season 12: DP Galactic Battles',
            'm12_arceus': 'Movie 12: Arceus and the Jewel of Life',
            's13_victors': 'Season 13: DP Sinnoh League Victors',
            'm13_zoroark': 'Movie 13: Zoroark: Master of Illusions',
            
            // Generation V
            's14_bw': 'Season 14: Black & White',
            'm14_victini': 'Movie 14: White—Victini and Zekrom / Black—Victini and Reshiram',
            's15_rivals': 'Season 15: BW Rival Destinies',
            'm15_kyurem': 'Movie 15: Kyurem vs. the Sword of Justice',
            's16_unova': 'Season 16: BW Adventures in Unova and Beyond',
            'm16_genesect': 'Movie 16: Genesect and the Legend Awakened',
            
            // Generation VI
            's17_xy': 'Season 17: XY',
            'sp_mega1': 'Special: Mega Evolution Special I',
            'sp_mega2': 'Special: Mega Evolution Special II',
            'sp_mega3': 'Special: Mega Evolution Special III',
            'sp_mega4': 'Special: Mega Evolution Special IV',
            'm17_diancie': 'Movie 17: Diancie and the Cocoon of Destruction',
            's18_kalos': 'Season 18: XY Kalos Quest',
            'm18_hoopa': 'Movie 18: Hoopa and the Clash of Ages',
            's19_xyz': 'Season 19: XYZ',
            'm19_volcanion': 'Movie 19: Volcanion and the Mechanical Marvel',
            
            // Generation VII
            's20_sm': 'Season 20: Sun & Moon',
            's21_ultra_adv': 'Season 21: Sun & Moon—Ultra Adventures',
            's22_ultra_leg': 'Season 22: Sun & Moon—Ultra Legends',
            
            // Generation VIII
            's23_journeys': 'Season 23: Journeys',
            's24_master': 'Season 24: Master Journeys',
            's25_ultimate': 'Season 25: Ultimate Journeys',
            'sp_arceus_chronicles': 'Special: Pokémon: The Arceus Chronicles',
            'sp_arceus_chronicles_eps': '4 Episodes',
            'sp_blue_sky': 'Special: Distant Blue Sky',
            'final_master': 'Final Miniseries: Pokémon: To Be a Pokémon Master',
            'final_master_eps': '11 Episodes - ASH SAGA FINALE',
            
            // Generation IX
            's26_horizons': 'Season 26: Pokémon Horizons: The Series',
            's26_horizons_note': 'Liko and Roy',
            's27_terapagos': 'Season 27: The Shining of Terapagos',
            's28_terastal': 'Season 28: Terastal Debut',
            's29_rayquaza': 'Season 29: Rayquaza Rising',
            
            // Extras - Based on Games
            'ex_origins': 'Pokémon Origins',
            'ex_origins_eps': 'Red & Blue (4 Episodes)',
            'ex_generations': 'Pokémon Generations',
            'ex_generations_eps': 'Generations 1 to 6 (18 Episodes)',
            'ex_evolutions': 'Pokémon Evolutions',
            'ex_evolutions_eps': 'Generations 1 to 8 (8 Episodes)',
            'ex_twilight': 'Pokémon: Twilight Wings',
            'ex_twilight_eps': 'Galar Region (8 Episodes)',
            'ex_hisuian': 'Pokémon: Hisuian Snow',
            'ex_hisuian_eps': 'Legends Arceus (3 Episodes)',
            'ex_paldean': 'Pokémon: Paldean Winds',
            'ex_paldean_eps': 'Paldea Region (4 Episodes)',
            
            // Extras - Fun
            'ex_concierge': 'Pokémon Concierge',
            'ex_concierge_eps': 'Netflix (4 Episodes)',
            'ex_poketoon': 'Pokétoon',
            'ex_poketoon_eps': 'Various Animated Shorts',
            'ex_bidoof': 'Pokémon: Bidoof\'s Big Stand',
            'ex_peak': 'Pokémon: Path to the Peak',
            'ex_peak_eps': 'TCG (4 Episodes)',
            
            // Extras - Alternate Universe
            'm20_choose_you': 'Movie 20: I Choose You!',
            'm21_power_us': 'Movie 21: The Power of Us',
            'm23_secrets': 'Movie 23: Secrets of the Jungle',
            'remake_mewtwo': 'Remake: Mewtwo Strikes Back—Evolution',
            'detective_pikachu': 'Live Action: Detective Pikachu'
        }
    },
    
    // ========================================
    // ESPAÑOL (Latinoamérica) - Nombres Oficiales
    // ========================================
    'es-LA': {
        // Interfaz
        ui: {
            subtitle: 'Orden para Ver',
            headerDescription: '¡El orden completo para maratonear toda la saga!',
            listBy: '📋 Lista sugerida por',
            disclaimerTitle: '🎮 <strong>¡Hecho por un fan, para fans!</strong> Esta lista representa mi visión personal del orden cronológico ideal para ver Pokémon.',
            disclaimerCopyright: '⚠️ Contenido sin fines de lucro. Pokémon™ es marca registrada de Nintendo, The Pokémon Company y Game Freak.',
            disclaimerTimer: 'Desapareciendo en <strong>%s</strong>s',
            dataToggle: '💾 Tus datos <strong>¡Importante!</strong>',
            dataWarningTitle: '<strong>¡Tus datos solo se guardan en este navegador!</strong>',
            dataWarningText: 'Si cambias de navegador o dispositivo, tu progreso no aparecerá. Usa los botones de abajo para hacer respaldo.',
            exportBtn: '📤 Exportar',
            importBtn: '📥 Importar',
            navAll: 'Todos',
            navAsh: 'Saga Ash',
            navHorizons: 'Horizontes',
            footerSlogan: 'Gotta Watch \'Em All! 🎬',
            footerCredits: 'Lista organizada por',
            suggestionsTitle: '📝 <strong>¡Las sugerencias son bienvenidas!</strong>',
            suggestionsText: '¿Encontraste algo mal o quieres sugerir un cambio? Contacta:',
            legalToggle: '⚠️ Aviso Legal',
            legalText1: 'Proyecto de fan sin fines de lucro. Este orden representa la visión personal del autor.',
            legalText2: 'Pokémon™ y sus personajes son propiedad de <strong>Nintendo</strong>, <strong>The Pokémon Company</strong> y <strong>Game Freak</strong>.',
            legalText3: '© 1997-2026 Pokémon. © 1995-2026 Nintendo/Creatures Inc./GAME FREAK inc.',
            privacyLink: '🔒 Política de Privacidad (Google)',
            badgeTV: 'TV',
            badgeMovie: 'PELÍCULA',
            badgeSpecial: 'ESPECIAL',
            badgeNote: 'NOTA',
            badgeNew: 'NUEVO',
            badgeFinal: 'FINAL',
            episodes: 'Episodios',
            close: 'Cerrar',
            episodeLabel: 'Ep:'
        },
        
        // Sagas
        sagas: {
            ashTitle: '🧢 La Saga de Ash Ketchum',
            ashYears: '1997 – 2023',
            horizonsTitle: '🧭 La Saga Horizontes',
            horizonsYears: '2023 – Actual',
            extrasTitle: '📂 Extras, Spin-offs y Especiales',
            extrasYears: 'Contenido Adicional'
        },
        
        // Generaciones
        generations: {
            gen1: { title: 'Generación I', subtitle: 'Kanto e Islas Naranja' },
            gen2: { title: 'Generación II', subtitle: 'Johto' },
            gen3: { title: 'Generación III', subtitle: 'Hoenn y Frente de Batalla' },
            gen4: { title: 'Generación IV', subtitle: 'Sinnoh' },
            gen5: { title: 'Generación V', subtitle: 'Teselia' },
            gen6: { title: 'Generación VI', subtitle: 'Kalos' },
            gen7: { title: 'Generación VII', subtitle: 'Alola' },
            gen8: { title: 'Generación VIII', subtitle: 'Viajes' },
            gen9: { title: 'Generación IX', subtitle: 'Paldea (Liko y Roy)' },
            games: { title: 'Basados en los Juegos', subtitle: 'Historias del Lore Pokémon' },
            fun: { title: 'Relajantes y Divertidos', subtitle: 'Contenido Ligero' },
            alternate: { title: 'Universo Alternativo', subtitle: 'Películas Fuera de la Línea Principal' }
        },
        
        // Contenido - Nombres Oficiales Latinoamérica
        content: {
            // Generación I
            's1_indigo': 'Temporada 1: Liga Índigo',
            'm01_mewtwo': 'Película 01: Mewtwo vs. Mew',
            's2_orange': 'Temporada 2: Aventuras en las Islas Naranja',
            'm02_lugia': 'Película 02: Pokémon 2000: El Poder de Uno',
            
            // Generación II
            's3_johto': 'Temporada 3: Los Viajes Johto',
            'm03_unown': 'Película 03: El Hechizo de los Unown',
            's4_champions': 'Temporada 4: Los Campeones de la Liga Johto',
            'sp_mewtwo_returns': 'Especial: El Regreso de Mewtwo',
            'm04_celebi': 'Película 04: Pokémon 4Ever: Celebi, La Voz del Bosque',
            's5_master': 'Temporada 5: Master Quest',
            'm05_heroes': 'Película 05: Héroes Pokémon',
            
            // Generación III
            's6_advanced': 'Temporada 6: Advanced',
            'm06_jirachi': 'Película 06: Jirachi: Deseador de Estrellas',
            's7_challenge': 'Temporada 7: Advanced Challenge',
            'm07_deoxys': 'Película 07: Destino Deoxys',
            's8_battle': 'Temporada 8: Advanced Battle',
            'm08_lucario': 'Película 08: Lucario y el Misterio de Mew',
            's9_frontier': 'Temporada 9: Battle Frontier',
            'm09_ranger': 'Película 09: Pokémon Ranger y el Templo del Mar',
            'sp_mirage': 'Especial: El Maestro de los Espejismos',
            'sp_mirage_note': 'Puente entre Gen 3 y 4',
            'note_chronicles': 'Crónicas Pokémon',
            'note_chronicles_desc': 'Incluyendo La Leyenda del Trueno - puede verse en esta era',
            
            // Generación IV
            's10_dp': 'Temporada 10: Diamante y Perla',
            'm10_darkrai': 'Película 10: El Desafío de Darkrai',
            's11_dimension': 'Temporada 11: DP Dimensión de Batalla',
            'm11_giratina': 'Película 11: Giratina y el Defensor de los Cielos',
            's12_galactic': 'Temporada 12: DP Batallas Galácticas',
            'm12_arceus': 'Película 12: Arceus y la Joya de la Vida',
            's13_victors': 'Temporada 13: DP Los Vencedores de la Liga Sinnoh',
            'm13_zoroark': 'Película 13: Zoroark: El Maestro de las Ilusiones',
            
            // Generación V
            's14_bw': 'Temporada 14: Negro y Blanco',
            'm14_victini': 'Película 14: Victini y Reshiram / Victini y Zekrom',
            's15_rivals': 'Temporada 15: BW: Destinos Rivales',
            'm15_kyurem': 'Película 15: Kyurem vs. El Espadachín Místico',
            's16_unova': 'Temporada 16: BW: Aventuras en Teselia y Más Allá',
            'm16_genesect': 'Película 16: Genesect y el Despertar de una Leyenda',
            
            // Generación VI
            's17_xy': 'Temporada 17: XY',
            'sp_mega1': 'Especial: Mega Evolución - Acto I',
            'sp_mega2': 'Especial: Mega Evolución - Acto II',
            'sp_mega3': 'Especial: Mega Evolución - Acto III',
            'sp_mega4': 'Especial: Mega Evolución - Acto IV',
            'm17_diancie': 'Película 17: Diancie y la Crisálida de la Destrucción',
            's18_kalos': 'Temporada 18: XY: Desafío en Kalos',
            'm18_hoopa': 'Película 18: Hoopa y un Duelo Histórico',
            's19_xyz': 'Temporada 19: XYZ',
            'm19_volcanion': 'Película 19: Volcanion y la Maravilla Mecánica',
            
            // Generación VII
            's20_sm': 'Temporada 20: Sol y Luna',
            's21_ultra_adv': 'Temporada 21: Sol y Luna—Ultra Aventuras',
            's22_ultra_leg': 'Temporada 22: Sol y Luna—Ultra Leyendas',
            
            // Generación VIII
            's23_journeys': 'Temporada 23: Viajes Pokémon',
            's24_master': 'Temporada 24: Viajes Maestros Pokémon',
            's25_ultimate': 'Temporada 25: Viajes Definitivos Pokémon',
            'sp_arceus_chronicles': 'Especial: Las Crónicas de Arceus',
            'sp_arceus_chronicles_eps': '4 Episodios',
            'sp_blue_sky': 'Especial: El Cielo Azul Distante',
            'final_master': 'Miniserie Final: Pokémon: Para Ser un Maestro Pokémon',
            'final_master_eps': '11 Episodios - FINAL DE LA SAGA ASH',
            
            // Generación IX
            's26_horizons': 'Temporada 26: Horizontes Pokémon',
            's26_horizons_note': 'Liko y Roy',
            's27_terapagos': 'Temporada 27: El Brillo de Terapagos',
            's28_terastal': 'Temporada 28: Debut Teracristal',
            's29_rayquaza': 'Temporada 29: Rayquaza Asciende',
            
            // Extras - Basados en Juegos
            'ex_origins': 'Pokémon Origins',
            'ex_origins_eps': 'Rojo y Azul (4 Episodios)',
            'ex_generations': 'Pokémon Generations',
            'ex_generations_eps': 'Generaciones 1 a 6 (18 Episodios)',
            'ex_evolutions': 'Pokémon Evolutions',
            'ex_evolutions_eps': 'Generaciones 1 a 8 (8 Episodios)',
            'ex_twilight': 'Pokémon: Alas del Crepúsculo',
            'ex_twilight_eps': 'Región de Galar (8 Episodios)',
            'ex_hisuian': 'Pokémon: Nieves de Hisui',
            'ex_hisuian_eps': 'Legends Arceus (3 Episodios)',
            'ex_paldean': 'Pokémon: Vientos de Paldea',
            'ex_paldean_eps': 'Región de Paldea (4 Episodios)',
            
            // Extras - Divertidos
            'ex_concierge': 'Pokémon Concierge',
            'ex_concierge_eps': 'Netflix (4 Episodios)',
            'ex_poketoon': 'Pokétoon',
            'ex_poketoon_eps': 'Cortos Animados Variados',
            'ex_bidoof': 'Pokémon: La Gran Aventura de Bidoof',
            'ex_peak': 'Pokémon: Camino a la Cima',
            'ex_peak_eps': 'TCG (4 Episodios)',
            
            // Extras - Universo Alternativo
            'm20_choose_you': 'Película 20: ¡Te Elijo a Ti!',
            'm21_power_us': 'Película 21: El Poder de Todos',
            'm23_secrets': 'Película 23: Los Secretos de la Selva',
            'remake_mewtwo': 'Remake: Mewtwo Contraataca: Evolución',
            'detective_pikachu': 'Live Action: Detective Pikachu'
        }
    }
};

// ========================================
// LANGUAGE MANAGER
// ========================================

class LanguageManager {
    constructor() {
        this.currentLang = this.getSavedLanguage() || this.detectLanguage();
        this.translations = TRANSLATIONS;
    }
    
    detectLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('es')) return 'es-LA';
        if (browserLang.startsWith('en')) return 'en-US';
        return 'pt-BR';
    }
    
    getSavedLanguage() {
        return localStorage.getItem('pokemon-language');
    }
    
    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('pokemon-language', lang);
        this.applyTranslations();
    }
    
    get(path) {
        const keys = path.split('.');
        let result = this.translations[this.currentLang];
        for (const key of keys) {
            if (result && result[key] !== undefined) {
                result = result[key];
            } else {
                // Fallback to Portuguese
                result = this.translations['pt-BR'];
                for (const k of keys) {
                    if (result && result[k] !== undefined) {
                        result = result[k];
                    } else {
                        return path; // Return path if not found
                    }
                }
                break;
            }
        }
        return result;
    }
    
    applyTranslations() {
        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang === 'pt-BR' ? 'pt-BR' : 
                                         this.currentLang === 'en-US' ? 'en' : 'es';
        
        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.get(key);
            if (translation) {
                el.innerHTML = translation;
            }
        });
        
        // Update all translatable attributes
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            const translation = this.get(key);
            if (translation) {
                el.title = translation;
            }
        });
        
        // Update language selector display
        this.updateLanguageSelector();
    }
    
    updateLanguageSelector() {
        const selector = document.querySelector('.language-selector-current');
        if (selector) {
            const flags = {
                'pt-BR': '🇧🇷',
                'en-US': '🇺🇸',
                'es-LA': '🇪🇸'
            };
            selector.textContent = flags[this.currentLang];
        }
    }
}

// Global instance
const langManager = new LanguageManager();

// Export for use in other scripts
window.langManager = langManager;
window.TRANSLATIONS = TRANSLATIONS;
