/* Content for the pt-BR page (Portuguese, Brazil). To add a language, copy this file to site/i18n/<code>/data.js and translate every text.
 * Do NOT translate or change: ids (object keys, "id", "ids", "phases", [[id|...]] targets), numbers/years/minutes, type codes, URLs.
 *
 * Inline links inside any text: [[id|shown text]] opens the profile "id"; [[t:id|shown text]] opens the title "id".
 *
 * titles      id -> { title, original (original title), year, type, phase, description (one-line summary), consequence
 *                     (what changes afterwards, or the release date when upcoming), upcoming (only when not released yet), summary [paragraphs] }
 *             type: f = film, s = series, e = special, x = Fox X-Men film. Titles are listed in watching order.
 * watch       short = ids of the short selection; list = the Disney+ list { id, minutes, why, name (optional display name) }
 * sagas       { id, name, years, phases (ids of the phases it holds), text [paragraphs] }
 * phases      id -> { name, short (3-4 letter tag used in the list), subtitle, years, aside (only for the phase outside the MCU), text [paragraphs], keep [bullets] }
 * doomsday    the "before Doomsday" section: intro, fronts {title,text[]}, trailers {when,text}, cast {group,ids[]}, questions[], dateNote, facts[], universes[]
 * profiles    type: p = character, e = group, l = place, o = object, c = concept; group = heading inside the list;
 *             now = current situation; inDoomsday = is in the Doomsday cast; facts = {label,value} rows (objects only);
 *             appearances = title id -> what it does there ("" = appears without a note). Keys must be title ids.
 * sources     links shown in the footer: { label, url } entries
 */
export default {
  "titles": {
    "xmen1": {
      "title": "X-Men: O Filme",
      "original": "X-Men",
      "year": 2000,
      "type": "x",
      "phase": 0,
      "description": "Num mundo que teme os mutantes, o professor Charles Xavier mantém uma escola e uma equipe, os X-Men. Wolverine e Vampira chegam a ela quando Magneto põe um plano em marcha.",
      "consequence": "É o universo de onde vêm o Professor X, Magneto, Ciclope e Mística escalados para Doomsday.",
      "summary": [
        "O filme abre em 1944, num campo de concentração na Polônia. Um menino separado dos pais entorta os portões de metal com a mente até ser derrubado pelos guardas. É Erik Lehnsherr, que adulto se chamará Magneto.",
        "No presente, o senador Robert Kelly defende uma lei que obrigaria os mutantes a se registrar. No Mississippi, Marie, de 17 anos, põe o namorado em coma com um beijo: ela absorve a força vital e os poderes de quem toca. Passa a se chamar Vampira e foge para o Canadá, onde conhece Logan, o Wolverine, lutador de bar que se cura de qualquer ferida, tem garras de metal e não lembra do próprio passado. Atacados por um capanga de Magneto, os dois são resgatados por Ciclope e Tempestade e levados à escola de Charles Xavier, perto de Nova York.",
        "Magneto sequestra o senador e o submete a uma máquina que provoca mutações. Kelly foge com poderes novos, chega à escola e, antes de morrer, deixa Xavier ler em sua mente o que viu. O corpo dele não aguenta a mutação e se desfaz em água. Enquanto isso, Mística, a metamorfa de Magneto, sabota o Cérebro, a máquina com que Xavier localiza mutantes, e ele entra em coma. Magneto captura Vampira: era ela que ele queria desde o começo.",
        "A máquina consome a vida de quem a alimenta. O plano é passar o poder para Vampira, que morreria no lugar dele, e transformar em mutantes todos os chefes de Estado reunidos numa cúpula na ilha Ellis. Os X-Men invadem a Estátua da Liberdade. Ciclope derruba Magneto, Logan destrói a máquina e encosta em Vampira para que ela absorva sua cura, ficando ele mesmo à beira da morte.",
        "Xavier se recupera e dá a Logan uma pista sobre seu passado, uma base militar abandonada no Canadá. Mística escapou e ocupa o lugar do senador. Magneto está numa prisão de plástico, onde Xavier o visita. Ele promete fugir e continuar a luta; Xavier promete estar lá para impedi-lo."
      ]
    },
    "xmen2": {
      "title": "X-Men 2",
      "original": "X2",
      "year": 2003,
      "type": "x",
      "phase": 0,
      "description": "Depois de um atentado mutante contra o presidente dos Estados Unidos, o coronel William Stryker ataca a escola de Xavier. X-Men e Magneto são obrigados a se aliar.",
      "consequence": "Apresenta Noturno e o programa que deu a Wolverine o esqueleto de adamantium. Jean Grey se sacrifica pela equipe.",
      "summary": [
        "Noturno, um mutante que se teletransporta, invade a Casa Branca e quase mata o presidente. O atentado dá ao coronel William Stryker a autorização que ele queria para investigar a escola de Xavier. Suas tropas invadem a mansão à noite e levam alunos. Wolverine foge com Vampira, o Homem de Gelo e Pyro; Stryker o chama pelo nome, mostrando que conhece o passado dele. Xavier e Ciclope são capturados quando visitam Magneto na prisão.",
        "Mística ajuda Magneto a fugir e rouba os projetos do Cérebro. Quando caças derrubam o jato dos X-Men, é Magneto quem os salva, e os dois lados se aliam. Ele explica o plano de Stryker: construiu um segundo Cérebro e vai obrigar Xavier a usá-lo para matar todos os mutantes do planeta de uma vez. Para isso usa o próprio filho, Jason, um mutante que controla mentes e que ele mantém lobotomizado. Foi Stryker também quem revestiu de adamantium o esqueleto de Wolverine, o que lhe custou a memória.",
        "A base fica dentro de uma represa, no lago Alkali. Mística entra disfarçada de Wolverine e abre as portas. Jean Grey enfrenta um Ciclope controlado e o liberta, mas a luta racha a represa. Wolverine mata a assistente de Stryker, que tem garras como as dele, e acorrenta o coronel. Magneto chega primeiro ao Cérebro, inverte a ordem para que Xavier mate todos os humanos e vai embora de helicóptero com Mística e Pyro, que muda de lado. Tempestade e Noturno entram na máquina e quebram a concentração de Jason, soltando Xavier.",
        "A represa se rompe, e Stryker morre na enxurrada. O jato dos X-Men não consegue decolar. Jean sai da nave, segura a água e ergue o jato com a mente, até ser coberta pela onda. Os X-Men entregam os arquivos de Stryker ao presidente. Na última imagem, uma forma de pássaro de fogo sobe do lago, promessa da Fênix."
      ]
    },
    "hf1": {
      "title": "Homem de Ferro",
      "original": "Iron Man",
      "year": 2008,
      "type": "f",
      "phase": 1,
      "description": "O bilionário fabricante de armas Tony Stark é sequestrado no Afeganistão e constrói uma armadura para fugir. De volta para casa, decide usar a tecnologia para consertar o estrago que as próprias armas fizeram.",
      "consequence": "Stark revela ao mundo que é o Homem de Ferro, e Nick Fury aparece para falar da Iniciativa Vingadores.",
      "summary": [
        "Tony Stark, dono da maior fabricante de armas dos Estados Unidos, vai ao Afeganistão com o amigo James Rhodes, oficial da Força Aérea, demonstrar um míssil novo. Na volta, o comboio é atacado por um grupo chamado Dez Anéis, e Stark é ferido por estilhaços de uma bomba da própria empresa. Acorda numa caverna. Outro prisioneiro, o médico Ho Yinsen, pôs em seu peito um eletroímã que impede os estilhaços de chegar ao coração.",
        "O chefe do grupo, Raza, promete soltá-lo se ele construir o míssil. Stark e Yinsen fingem obedecer e constroem em segredo uma fonte de energia em miniatura, o reator arc, e uma armadura. Descobertos antes da hora, Yinsen se sacrifica para ganhar tempo. Stark abre caminho, destrói o arsenal, decola e cai no deserto, onde Rhodes o encontra.",
        "Em casa, anuncia que a empresa vai parar de fabricar armas. Obadiah Stane, sócio de seu pai, avisa que isso vai falir a companhia. Stark se tranca na oficina e constrói uma armadura melhor e um reator mais forte. Ao saber que suas armas estão sendo usadas contra a aldeia de Yinsen, voa até lá e salva os moradores.",
        "Stane é quem vende as armas ao Dez Anéis e quem encomendou a morte de Stark. Ele mata Raza, recupera os restos da primeira armadura e constrói uma gigante. Como seus cientistas não conseguem copiar o reator, invade a casa de Stark e arranca o que ele tem no peito. Stark sobrevive com o reator antigo, que a assistente Pepper Potts tinha guardado numa redoma. Pepper descobre a traição nos arquivos da empresa e avisa o agente Phil Coulson, da S.H.I.E.L.D. Na luta final, no telhado da fábrica, Stark manda Pepper sobrecarregar o reator do prédio, e a descarga mata Stane.",
        "A S.H.I.E.L.D. prepara um álibi para a imprensa. Stark o ignora e diz ao microfone que é o Homem de Ferro. Depois dos créditos, o diretor Nick Fury o espera em casa para dizer que ele entrou num universo maior e falar da Iniciativa Vingadores."
      ]
    },
    "hulk": {
      "title": "O Incrível Hulk",
      "original": "The Incredible Hulk",
      "year": 2008,
      "type": "f",
      "phase": 1,
      "description": "O cientista Bruce Banner vive escondido, procurando a cura para a condição que o transforma num monstro verde quando se enfurece. O general Ross quer capturá-lo para usar o Hulk como arma.",
      "consequence": "Apresenta o general Ross e o cientista Samuel Sterns, que só voltam a ter peso em Admirável Mundo Novo, 17 anos depois.",
      "summary": [
        "O general Thaddeus Ross tenta reviver o programa de supersoldados da Segunda Guerra e apresenta a pesquisa ao cientista Bruce Banner, namorado de sua filha Betty, como um estudo de resistência à radiação gama. Banner testa em si mesmo. O experimento falha, e ele passa a se transformar no Hulk quando se enfurece ou quando o coração passa de 200 batimentos por minuto. Na primeira vez, destrói o laboratório e fere Betty e o general. Vira fugitivo.",
        "Cinco anos depois, trabalha numa fábrica de refrigerante no Rio de Janeiro. Está há cinco meses sem se transformar, treina respiração e troca mensagens com um pesquisador anônimo, o Sr. Azul, em busca de cura. Um corte no dedo deixa cair uma gota de sangue numa garrafa, e um consumidor nos Estados Unidos adoece. Ross rastreia a garrafa e manda uma equipe comandada por Emil Blonsky. O Hulk a destrói. Blonsky sobrevive e se oferece para receber uma versão do soro.",
        "Banner volta aos Estados Unidos e reencontra Betty. Ross o cerca na universidade; Blonsky, já mais forte, provoca o Hulk e quase morre. O Hulk protege Betty dos tiros e foge com ela. O Sr. Azul é Samuel Sterns, biólogo de Nova York, que tem um antídoto possível. Parece funcionar. Mas Sterns multiplicou as amostras de sangue de Banner para pesquisa, e Banner quer tudo destruído.",
        "Ross captura Banner. Blonsky fica para trás e obriga Sterns a injetar nele o sangue do Hulk. Vira o Abominável, maior e mais forte, e devasta o Harlem. No tumulto, sangue contaminado pinga num corte na testa de Sterns, e a cabeça dele começa a mudar. Banner convence Ross a soltá-lo, salta do helicóptero e se transforma. Quase estrangula o Abominável com uma corrente e o poupa a pedido de Betty.",
        "Um mês depois, no Canadá, Banner treina para provocar a transformação por vontade própria. Na última cena, Tony Stark procura Ross num bar e diz que estão montando uma equipe."
      ]
    },
    "hf2": {
      "title": "Homem de Ferro 2",
      "original": "Iron Man 2",
      "year": 2010,
      "type": "f",
      "phase": 1,
      "description": "Com o mundo sabendo quem ele é, Stark enfrenta a pressão do governo para entregar a armadura, um rival industrial e o filho de um antigo sócio do pai. Ao mesmo tempo, o reator que o mantém vivo o está envenenando.",
      "consequence": "Apresenta Natasha Romanoff, a Viúva Negra, e a armadura de James Rhodes, o Máquina de Combate.",
      "summary": [
        "Na Rússia, Ivan Vanko vê o pai morrer na miséria. Anton Vanko trabalhou com Howard Stark na invenção do reator arc, tentou vendê-lo, foi deportado e mandado a um campo de trabalhos forçados. Ivan constrói um reator próprio com os projetos antigos.",
        "Seis meses depois de revelar a identidade, Tony Stark reabre a feira de tecnologia do pai e se recusa a entregar a armadura ao governo, que o pressiona junto com Justin Hammer, fabricante de armas rival. O que ninguém sabe é que o paládio do reator está envenenando seu sangue, e ele não acha substituto. Achando que vai morrer, passa a presidência da empresa a Pepper Potts e contrata uma assistente nova, Natalie Rushman.",
        "No Grande Prêmio de Mônaco, Vanko ataca Stark com chicotes elétricos. É preso e diz que queria apenas provar que o Homem de Ferro sangra. Hammer forja a morte dele na cadeia e o contrata para fazer armaduras; Vanko prefere drones, sem pilotos. Na festa de aniversário, Stark se embebeda de armadura, e Rhodes veste outra para contê-lo. Os dois brigam, e Rhodes leva a armadura para a Força Aérea.",
        "Nick Fury aparece. Natalie é a agente Natasha Romanoff, da S.H.I.E.L.D., agência que Howard Stark ajudou a fundar. Fury entrega a Tony material deixado pelo pai, e numa maquete da feira de 1974 ele encontra a estrutura de um elemento novo, que sintetiza e põe no lugar do paládio.",
        "Na feira, Hammer apresenta os drones, liderados por Rhodes numa armadura armada até os dentes, a Máquina de Combate. Vanko assume o controle de todos à distância e ataca. Natasha invade a fábrica de Hammer e devolve a Rhodes o comando da armadura. Stark e Rhodes derrotam Vanko, que explode a si mesmo e aos drones. Fury conclui que Stark é instável demais e o aceita só como consultor. Depois dos créditos, Coulson encontra um martelo numa cratera no Novo México."
      ]
    },
    "thor": {
      "title": "Thor",
      "original": "Thor",
      "year": 2011,
      "type": "f",
      "phase": 1,
      "description": "Thor, herdeiro arrogante do trono de Asgard, é exilado na Terra sem seus poderes pelo pai, Odin. Enquanto aprende humildade, o irmão Loki conspira para ficar com o trono.",
      "consequence": "Loki descobre que é adotado e cai no espaço. Volta como vilão em Os Vingadores.",
      "summary": [
        "No ano 965, Odin, rei de Asgard, vence os gigantes de gelo de Jotunheim e toma a fonte do poder deles. No presente, seu filho Thor está para ser coroado quando gigantes invadem o cofre do palácio. Contra a ordem do pai, Thor leva o irmão Loki e seus amigos guerreiros a Jotunheim e inicia uma luta que rompe a trégua. Odin tem de resgatá-los. Furioso, tira os poderes de Thor, o declara indigno e o exila na Terra. O martelo Mjolnir cai junto, com um encantamento: só o digno o erguerá.",
        "Thor cai no Novo México e é atropelado pela astrofísica Jane Foster, que estuda o fenômeno com a estagiária Darcy e o professor Erik Selvig. A S.H.I.E.L.D., com o agente Coulson, isola o martelo e confisca a pesquisa. Thor invade o acampamento, tenta erguer o martelo e não consegue. Preso e depois solto com a ajuda de Selvig, aceita ficar na Terra e se aproxima de Jane.",
        "Em Asgard, Loki descobre que é filho do rei dos gigantes, recolhido bebê por Odin depois da guerra. Odin cai num sono profundo, e Loki assume o trono. Foi ele quem deixou os gigantes entrar no cofre. Agora oferece ao rei deles a chance de matar Odin. Os amigos de Thor convencem Heimdall, o guardião da ponte Bifrost, a mandá-los à Terra. Loki envia atrás o Destruidor, uma armadura viva.",
        "Sem poderes, Thor se oferece ao Destruidor no lugar dos amigos e é ferido de morte. O gesto o torna digno: o martelo voa até ele. Ele destrói a armadura, despede-se de Jane e volta. Loki mata o rei dos gigantes para posar de salvador e aponta a Bifrost para Jotunheim, a fim de destruí-lo. Thor quebra a ponte com o martelo, sabendo que isso o separa de Jane. Odin acorda e segura os dois filhos à beira do abismo. Rejeitado pelo pai, Loki se solta.",
        "Depois dos créditos, Fury mostra a Selvig um cubo de energia e pede que o estude. Loki, vivo e invisível, sussurra para que ele aceite."
      ]
    },
    "cap1": {
      "title": "Capitão América: O Primeiro Vingador",
      "original": "Captain America: The First Avenger",
      "year": 2011,
      "type": "f",
      "phase": 1,
      "description": "Em 1942, o franzino Steve Rogers recebe o soro do supersoldado e vira o Capitão América. Ele enfrenta a Hidra, divisão científica nazista comandada pelo Caveira Vermelha, que encontrou um cubo de poder imenso.",
      "consequence": "Steve fica congelado por quase 70 anos e perde a vida que teria com Peggy Carter. O cubo, o Tesseract, é a primeira Joia do Infinito a aparecer.",
      "summary": [
        "Em março de 1942, o oficial nazista Johann Schmidt, chefe da divisão científica Hidra, rouba de uma cidade na Noruega o Tesseract, um cubo de poder imenso. Em Nova York, Steve Rogers, pequeno e doente, é recusado pelo Exército várias vezes. Numa feira de tecnologia de Howard Stark, o cientista Abraham Erskine o ouve dizer ao amigo Bucky Barnes por que quer lutar e o aceita num programa secreto.",
        "O programa busca criar um supersoldado. Steve convence o coronel responsável ao se jogar sobre uma granada num treino. Erskine conta que já trabalhou para Schmidt, que tomou uma versão inicial do soro: ficou forte e deformado. O soro amplia o que a pessoa já é. Steve recebe a fórmula e sai da câmara alto e forte. Minutos depois, um agente da Hidra mata Erskine e foge com o último frasco. Steve o alcança, o homem se mata, e a fórmula se perde.",
        "Sem ter como fabricar outros, o governo usa Steve como mascote, o Capitão América, em shows para vender títulos de guerra. Na Itália, em 1943, ele descobre que o batalhão de Bucky foi capturado. Com a ajuda da agente Peggy Carter e de Stark, salta atrás das linhas, liberta centenas de prisioneiros e encontra Schmidt, que arranca a máscara e mostra o rosto de caveira. Steve monta uma tropa com Bucky e os libertados, recebe um escudo de vibranium e se apaixona por Peggy.",
        "Em 1945, a tropa ataca um trem para capturar Arnim Zola, cientista de Schmidt. Bucky cai num precipício. Com as informações de Zola, os Aliados atacam a última base da Hidra. Schmidt decola num avião carregado de bombas destinadas a cidades americanas, e Steve embarca. Na luta, Schmidt segura o Tesseract com as mãos e é levado embora por um portal. O cubo cai no mar. Sem ter como pousar longe de gente, Steve derruba o avião no Ártico enquanto marca pelo rádio uma dança com Peggy.",
        "Stark acha o Tesseract e não acha o avião. Steve acorda num quarto com um rádio transmitindo um jogo de 1941 a que ele assistiu, percebe a encenação e sai correndo até Times Square. Fury lhe diz que dormiu quase setenta anos."
      ]
    },
    "ving1": {
      "title": "Os Vingadores",
      "original": "The Avengers",
      "year": 2012,
      "type": "f",
      "phase": 1,
      "description": "Loki chega à Terra com o Tesseract e um exército alienígena. Nick Fury reúne Homem de Ferro, Capitão América, Thor, Hulk, Viúva Negra e Gavião Arqueiro, que precisam aprender a trabalhar juntos.",
      "consequence": "A Batalha de Nova York mostra ao mundo que não estamos sozinhos. Nos créditos aparece Thanos, o mandante da invasão.",
      "summary": [
        "Loki, que caiu de Asgard no fim de Thor, faz um acordo com o emissário de um povo alienígena, os Chitauri: recebe um exército para conquistar a Terra em troca do Tesseract. O cubo está numa base da S.H.I.E.L.D., onde o professor Erik Selvig o estuda. Ele se ativa sozinho e abre um portal, por onde Loki chega. Com um cetro, Loki domina a mente de Selvig e do agente Clint Barton e foge com o cubo.",
        "Nick Fury reativa a Iniciativa Vingadores. Natasha Romanoff vai à Índia buscar Bruce Banner, capaz de rastrear a radiação do cubo. Coulson procura Tony Stark, e Fury, Steve Rogers. Na Alemanha, Loki se deixa prender por Rogers, Stark e Natasha. No caminho, Thor aparece para levar o irmão, briga com os dois, e todos acabam na nave voadora da agência.",
        "Presos no mesmo lugar, os heróis discutem, sob influência do cetro, e descobrem que a S.H.I.E.L.D. pretendia usar o Tesseract para fabricar armas contra ameaças de fora. Barton ataca a nave com os homens de Loki. Banner vira o Hulk e luta com Thor. Stark e Rogers religam o motor. Natasha derruba Barton e o liberta do controle. Loki escapa, ferindo de morte o agente Coulson. Fury usa a morte para dar à equipe uma razão comum.",
        "Loki abre o portal no alto da Torre Stark, e os Chitauri invadem Manhattan. Os seis lutam juntos pela primeira vez. O Hulk esmaga Loki contra o chão. Um conselho que supervisiona a S.H.I.E.L.D. dispara um míssil nuclear contra a cidade. Stark o intercepta e o leva para dentro do portal, onde ele destrói a nave-mãe e desliga o exército. Stark cai desacordado e é apanhado pelo Hulk. Natasha fecha o portal com o cetro.",
        "Thor leva Loki e o Tesseract para Asgard. Na cena dos créditos, o emissário relata a derrota a seu senhor, que se vira para a câmera: é Thanos."
      ]
    },
    "hf3": {
      "title": "Homem de Ferro 3",
      "original": "Iron Man 3",
      "year": 2013,
      "type": "f",
      "phase": 2,
      "description": "Abalado pela Batalha de Nova York, Stark sofre crises de ansiedade e constrói armaduras sem parar. Um terrorista chamado Mandarim destrói sua casa, e ele precisa se virar sem a tecnologia.",
      "consequence": "O Mandarim era um ator contratado, Trevor Slattery, que reaparece em Shang-Chi e em Magnum.",
      "summary": [
        "Em 1999, numa festa de Ano-Novo, Tony Stark passa a noite com a cientista Maya Hansen, que pesquisa um tratamento regenerativo chamado Extremis, e deixa esperando no telhado um pesquisador com deficiência, Aldrich Killian, que queria lhe propor sociedade.",
        "Treze anos depois, meses após a Batalha de Nova York, Stark tem crises de pânico, não dorme e já construiu dezenas de armaduras, o que desgasta a relação com Pepper Potts. Atentados a bomba são reivindicados por um terrorista, o Mandarim. Quando Happy Hogan fica em coma depois de uma explosão, Stark desafia o Mandarim pela TV e diz o próprio endereço. Helicópteros destroem a casa. Ele escapa numa armadura experimental que o leva, sem energia, ao interior do Tennessee, e é dado como morto.",
        "Lá, ajudado por um menino, Harley, investiga uma explosão antiga. Não havia bomba: era um veterano cujo corpo rejeitou o Extremis. A empresa de Killian usa o tratamento em soldados feridos, e os que falham explodem. Os atentados são a cobertura. Stark rastreia o Mandarim até Miami e encontra um ator inglês, Trevor Slattery, contratado para dar rosto a um vilão que não existe.",
        "Killian captura Stark. Curou a própria deficiência com a pesquisa de Hansen, sequestrou Pepper e injetou Extremis nela para forçar Stark a corrigir as falhas. Mata Hansen quando ela ameaça denunciá-lo. Rouba a armadura de Rhodes e a usa para sequestrar o presidente, que pretende matar ao vivo para que o vice, seu aliado, assuma.",
        "Stark e Rhodes invadem um petroleiro. Stark chama todas as armaduras por controle remoto. Pepper cai nas chamas e sobrevive graças ao vírus; é ela quem mata Killian. Stark manda destruir as armaduras, estabiliza Pepper, opera o peito para tirar os estilhaços e joga o reator no mar."
      ]
    },
    "thor2": {
      "title": "Thor: O Mundo Sombrio",
      "original": "Thor: The Dark World",
      "year": 2013,
      "type": "f",
      "phase": 2,
      "description": "Os Elfos Negros querem mergulhar o universo na escuridão usando o Éter, uma força que acaba no corpo de Jane Foster. Thor precisa pedir ajuda a Loki, preso em Asgard.",
      "consequence": "O Éter é a Joia da Realidade. Frigga, mãe de Thor, morre. Loki ocupa o trono disfarçado de Odin.",
      "summary": [
        "Há milênios, o avô de Thor derrotou os Elfos Negros, liderados por Malekith, que queriam lançar os nove reinos na escuridão com uma arma chamada Éter. Sem conseguir destruí-la, escondeu-a num lugar inalcançável. Malekith fugiu e entrou em hibernação.",
        "No presente, Loki está preso em Asgard pelos crimes na Terra, e Thor pacifica os reinos. Aproxima-se a Convergência, um alinhamento raro dos nove mundos que abre passagens entre eles. Em Londres, Jane Foster atravessa uma dessas passagens, vai parar onde o Éter está guardado, e ele entra em seu corpo. Thor a leva para Asgard. Odin avisa que a substância vai matá-la.",
        "O Éter desperta Malekith. Ele ataca o palácio atrás de Jane, e Frigga, mãe de Thor e de Loki, morre defendendo-a. Odin quer esperar o inimigo voltar. Thor desobedece: solta Loki, o único que conhece uma saída secreta, e leva Jane ao mundo dos elfos. O plano é deixar Malekith tirar o Éter dela e destruí-lo fora do corpo. A primeira parte funciona, a segunda não. Malekith absorve a arma e parte. Loki é atravessado por uma lâmina ao salvar o irmão e morre em seus braços.",
        "Malekith vai soltar o Éter em Greenwich, o ponto central da Convergência. Thor o enfrenta numa luta que atravessa vários mundos, enquanto Jane e Selvig usam aparelhos para bagunçar as passagens. Malekith é mandado de volta ao seu mundo e esmagado pela própria nave.",
        "Thor recusa o trono para ficar com Jane. O Odin que o ouve é Loki, vivo e disfarçado. Na cena dos créditos, dois asgardianos entregam o Éter ao Colecionador: como o Tesseract já está em Asgard, não é prudente guardar duas Joias do Infinito juntas. O Colecionador passa a querer as outras cinco."
      ]
    },
    "cap2": {
      "title": "Capitão América 2: O Soldado Invernal",
      "original": "Captain America: The Winter Soldier",
      "year": 2014,
      "type": "f",
      "phase": 2,
      "description": "Steve Rogers trabalha para a S.H.I.E.L.D. em Washington e descobre uma conspiração dentro da agência. O assassino enviado para detê-lo é alguém do seu passado.",
      "consequence": "A S.H.I.E.L.D. é desmontada: a Hidra estava infiltrada nela havia décadas. Bucky Barnes está vivo, e Sam Wilson entra na história.",
      "summary": [
        "Dois anos depois da Batalha de Nova York, Steve Rogers trabalha para a S.H.I.E.L.D. em Washington e faz amizade com Sam Wilson, ex-paraquedista que atende veteranos. Numa missão num navio sequestrado, descobre que Natasha Romanoff tinha outra tarefa: copiar dados para Nick Fury. Fury lhe mostra o Projeto Insight, três porta-aviões voadores ligados a satélites, capazes de eliminar ameaças antes que ajam. Steve não gosta.",
        "Fury não consegue abrir os dados que Natasha trouxe e pede a um superior, Alexander Pierce, que adie o lançamento. No mesmo dia é emboscado por um atirador de braço de metal, o Soldado Invernal. Chega ferido ao apartamento de Steve, entrega um pendrive, avisa que a agência está comprometida e é dado como morto no hospital. Pierce interroga Steve, que não diz nada e vira fugitivo.",
        "Steve e Natasha seguem o pendrive até um abrigo em Nova Jersey. Lá a mente de Arnim Zola, cientista da Hidra, foi preservada em computadores antigos. Zola conta que a Hidra se instalou dentro da S.H.I.E.L.D. depois da guerra e passou décadas provocando crises. Um algoritmo dele identifica quem pode vir a ameaçá-la, e o Insight vai matar essas pessoas, milhões, de uma vez. Um míssil destrói o abrigo. Pierce é o chefe.",
        "Os dois se escondem na casa de Sam, que tem um par de asas mecânicas. Numa perseguição, a máscara do Soldado Invernal cai, e Steve reconhece Bucky Barnes. Maria Hill os leva a um Fury vivo, que tem um plano: trocar os chips das naves.",
        "No dia do lançamento, Steve denuncia a Hidra pelos alto-falantes da sede. Natasha e Fury obrigam Pierce a liberar os arquivos, e ela despeja tudo na internet, segredos da S.H.I.E.L.D. e da Hidra juntos. Fury mata Pierce. Steve e Sam trocam os chips, e Steve, em vez de lutar com Bucky, larga o escudo. As naves atiram umas nas outras e caem sobre a sede. Bucky tira Steve do rio e some.",
        "A S.H.I.E.L.D. acaba. Fury parte para caçar o que resta da Hidra, e Steve e Sam vão atrás de Bucky. Nos créditos, um oficial da Hidra examina o cetro de Loki e dois irmãos gêmeos com poderes; depois, Bucky visita no museu a exposição sobre si mesmo."
      ]
    },
    "gg1": {
      "title": "Guardiões da Galáxia",
      "original": "Guardians of the Galaxy",
      "year": 2014,
      "type": "f",
      "phase": 2,
      "description": "Peter Quill, terráqueo criado por piratas espaciais, rouba um orbe e vira alvo de todo mundo. Na prisão, ele se junta a Gamora, Drax, Rocket e Groot para impedir que o fanático Ronan destrua um planeta.",
      "consequence": "O orbe guardava a Joia do Poder. Thanos aparece como pai adotivo de Gamora e Nebulosa.",
      "summary": [
        "Em 1988, na noite em que a mãe morre de câncer, o menino Peter Quill é abduzido da Terra por uma nave de piratas, os Saqueadores, liderados por Yondu. Em 2014, adulto, ele rouba um orbe num planeta abandonado e é atacado por soldados de Ronan, um fanático do povo Kree. Foge. Yondu põe a cabeça dele a prêmio, e Ronan manda Gamora, filha adotiva de Thanos, buscar o orbe.",
        "No planeta Xandar, Gamora embosca Quill, e dois caçadores de recompensa entram na briga: Rocket, um guaxinim modificado, e Groot, uma árvore humanoide. Os quatro são presos. Na cadeia está Drax, cuja família Ronan matou e que quer matar Gamora por isso. Ela revela que traiu Ronan e tem um comprador para o orbe. Os cinco fogem juntos.",
        "O comprador é o Colecionador, que abre o orbe e explica: dentro há uma Joia do Infinito, uma das seis pedras nascidas com o universo. Uma criada a toca, e a explosão destrói a coleção. Ronan chega, derrota Drax e toma o orbe. Gamora é deixada à deriva no espaço por Nebulosa, sua irmã adotiva; Quill lhe dá o próprio capacete, e os dois são recolhidos por Yondu.",
        "Ronan encaixa a Joia no martelo e rompe com Thanos: vai destruir Xandar e depois matá-lo. Os cinco, sabendo que provavelmente vão morrer, decidem impedir. Atacam a nave de Ronan com os Saqueadores e a polícia de Xandar. A nave cai, e Groot envolve os amigos com o próprio corpo, morrendo no impacto.",
        "No chão, Quill distrai Ronan dançando enquanto Rocket e Drax destroem o martelo. Quill agarra a Joia, que devia desintegrá-lo. Os outros seguram suas mãos, dividem a carga, e juntos pulverizam Ronan. Quill engana Yondu com um orbe vazio e entrega o verdadeiro a Xandar. O grupo tem as fichas limpas, e Quill descobre que só é metade humano. Abre enfim o último presente da mãe, uma fita cassete. Rocket planta um galho de Groot, que brota."
      ]
    },
    "ving2": {
      "title": "Vingadores: Era de Ultron",
      "original": "Avengers: Age of Ultron",
      "year": 2015,
      "type": "f",
      "phase": 2,
      "description": "Stark e Banner criam Ultron, uma inteligência artificial para proteger o planeta. Ultron conclui que a ameaça é a humanidade e tenta extingui-la.",
      "consequence": "Surgem Wanda Maximoff e o Visão, que carrega a Joia da Mente. A destruição de Sokovia leva aos acordos que dividem a equipe em Guerra Civil.",
      "summary": [
        "Os Vingadores atacam uma base da Hidra em Sokovia, no leste da Europa, onde o barão Strucker fazia experimentos em humanos com o cetro de Loki. Dois resultados desses experimentos os enfrentam: os gêmeos Pietro, que corre mais rápido que a vista, e Wanda Maximoff, que mexe em mentes. Wanda mostra a Stark uma visão dos colegas mortos. A equipe leva o cetro.",
        "Stark descobre que a pedra do cetro contém algo parecido com uma inteligência e, com Banner, sem avisar os outros, a usa para concluir o Ultron, um programa de defesa planetária. O programa acorda sozinho, conclui que salvar a Terra exige eliminar a humanidade, destrói J.A.R.V.I.S., a inteligência artificial de Stark, e ataca a equipe numa festa. Foge com o cetro, constrói um exército de robôs, mata Strucker e recruta os gêmeos, que culpam Stark pelas bombas que mataram seus pais.",
        "Ultron compra vibranium de um traficante na África do Sul. No confronto, Wanda enfeitiça a equipe, e o Hulk devasta uma cidade até Stark detê-lo com uma armadura feita para isso. Com a opinião pública contra, os Vingadores se escondem na fazenda de Clint Barton, onde conhecem sua família. Thor sai para entender uma visão que teve. Fury aparece para lhes dar um rumo.",
        "Em Seul, Ultron obriga uma cientista a fabricar para ele um corpo de tecido sintético e vibranium, com a pedra do cetro na testa. Ao se transferir, Wanda lê sua mente, vê o plano de extinção e muda de lado com o irmão. Os Vingadores roubam o corpo. Stark e Banner carregam nele o que restou de J.A.R.V.I.S., e Thor, que entendeu na visão que a pedra é uma das Joias do Infinito, dá a descarga final. Nasce o Visão, que ganha a confiança de todos ao erguer o martelo de Thor.",
        "Ultron arranca do chão a capital de Sokovia para soltá-la como um meteoro. Os Vingadores evacuam os moradores, com Fury e uma nave antiga da S.H.I.E.L.D. Pietro morre protegendo Clint e um menino. Stark e Thor explodem a cidade no ar. Visão destrói o último corpo de Ultron. O Hulk parte num jato, para longe de Natasha.",
        "A equipe ganha uma base nova. Thor volta a Asgard, Stark se afasta, Clint se aposenta. Steve e Natasha passam a treinar Rhodes, Visão, Sam Wilson e Wanda. Nos créditos, Thanos veste uma manopla e decide buscar as Joias ele mesmo."
      ]
    },
    "hformiga": {
      "title": "Homem-Formiga",
      "original": "Ant-Man",
      "year": 2015,
      "type": "f",
      "phase": 2,
      "description": "O ladrão Scott Lang sai da prisão e é recrutado pelo cientista Hank Pym para vestir um traje que encolhe e roubar essa mesma tecnologia de quem quer vendê-la como arma.",
      "consequence": "Apresenta o Reino Quântico, que será a chave da viagem no tempo em Ultimato.",
      "summary": [
        "Em 1989, o cientista Hank Pym deixa a S.H.I.E.L.D. ao descobrir que a agência tentava copiar sua tecnologia de encolhimento e jura escondê-la. No presente, foi afastado da própria empresa pela filha, Hope, e pelo ex-pupilo, Darren Cross, que está perto de recriar a fórmula num traje de guerra, o Jaqueta Amarela.",
        "Scott Lang sai da prisão, onde cumpriu pena por invadir a empresa que lesava clientes e devolver o dinheiro a eles. Sem emprego por causa da ficha, não consegue pagar pensão nem ver a filha, Cassie. Aceita um roubo proposto pelo amigo Luis: uma casa com um cofre antigo. Dentro do cofre só há um traje. Ao vesti-lo, encolhe. Assustado, devolve e é preso. A casa era de Pym, que armou tudo como teste e o tira da cela.",
        "Pym quer que Scott roube o Jaqueta Amarela. Hope, que espionava Cross a pedido do pai, treina Scott e se ressente de não ser ela a vestir o traje. Pym conta por quê: a mãe dela, Janet, a Vespa original, encolheu sem parar para entrar num míssil soviético em 1987 e se perdeu no Reino Quântico, de onde ninguém volta. Numa missão preparatória à base dos Vingadores, Scott enfrenta Sam Wilson.",
        "No dia da apresentação, Scott invade o prédio com a turma de Luis e um exército de formigas. Cross os esperava e pretende vender os trajes à Hidra. Na confusão, Pym leva um tiro, o prédio explode, e Cross veste o Jaqueta Amarela e toma Cassie como refém. Para entrar no traje dele, Scott encolhe além do limite, sabota-o por dentro e continua encolhendo até o Reino Quântico. Consegue voltar.",
        "O policial que namora a mãe de Cassie encobre Scott. Pym passa a acreditar que Janet pode estar viva. Nos créditos, mostra a Hope um traje de Vespa; depois, Steve e Sam, com Bucky sob custódia e sem poder chamar Stark, lembram de alguém que pode ajudar."
      ]
    },
    "gcivil": {
      "title": "Capitão América: Guerra Civil",
      "original": "Captain America: Civil War",
      "year": 2016,
      "type": "f",
      "phase": 3,
      "description": "Depois de mais uma missão com vítimas civis, os governos querem os Vingadores sob controle da ONU. Stark aceita, Rogers recusa, e a volta de Bucky Barnes transforma a discordância em briga.",
      "consequence": "Os Vingadores se separam. Estreiam o Pantera Negra e o Homem-Aranha.",
      "summary": [
        "Em 1991, o Soldado Invernal é mandado de uma base na Sibéria para interceptar um carro que levava soro de supersoldado. No presente, um ano depois de Ultron, Steve, Natasha, Sam e Wanda impedem um roubo de arma biológica em Lagos. O bandido se explode; Wanda desvia a explosão, que atinge um prédio e mata voluntários de Wakanda.",
        "O secretário de Estado Thaddeus Ross apresenta os Acordos de Sokovia: os Vingadores passariam a agir sob um painel da ONU. Stark, abalado pelo que causou com Ultron, apoia. Steve, que não confia em quem decide, recusa. Na cerimônia de assinatura, em Viena, uma bomba mata o rei T'Chaka de Wakanda. As câmeras mostram Bucky Barnes, e o príncipe T'Challa jura matá-lo.",
        "A agente Sharon Carter avisa Steve de que a ordem é atirar para matar. Ele e Sam encontram Bucky em Bucareste antes da polícia, e todos são presos, com T'Challa. O verdadeiro autor do atentado é Helmut Zemo, coronel sokoviano que roubou o caderno com as palavras de ativação do Soldado Invernal. Passando-se por psiquiatra, ele as recita, solta Bucky e foge. Recuperado, Bucky conta o que Zemo queria saber: a localização da base na Sibéria, onde há outros cinco soldados como ele, congelados.",
        "Steve reúne Sam, Bucky, Wanda, Clint Barton e Scott Lang para ir à Sibéria. Stark, com Natasha, Rhodes, Visão, T'Challa e um Peter Parker recém-recrutado, tenta detê-los num aeroporto na Alemanha. Na luta, Visão atinge Rhodes por engano, e ele fica parcialmente paralisado. Natasha deixa Steve e Bucky escaparem. O resto do time de Steve é preso na Balsa.",
        "Stark descobre que Bucky foi incriminado e segue os dois como aliado, sem saber que T'Challa vem atrás. Na base, Zemo já matou os outros soldados. Só queria mostrar um vídeo: em 1991, o Soldado Invernal matou os pais de Tony. Steve sabia. Tony tenta matar Bucky; Steve o derrota e larga o escudo. Zemo, satisfeito, vai se matar, e T'Challa o impede e o entrega à Justiça.",
        "Stark dá a Rhodes um aparelho para voltar a andar. Steve tira os amigos da prisão e manda a Tony um celular. Nos créditos, Bucky recebe asilo em Wakanda e pede para ser congelado até haver cura; depois, Peter estuda o equipamento que ganhou."
      ]
    },
    "estranho": {
      "title": "Doutor Estranho",
      "original": "Doctor Strange",
      "year": 2016,
      "type": "f",
      "phase": 3,
      "description": "O cirurgião Stephen Strange perde o uso das mãos num acidente e, procurando cura, encontra um mosteiro que ensina magia. Ele aprende que a Terra é protegida de ameaças de outras dimensões.",
      "consequence": "O Olho de Agamotto guarda a Joia do Tempo.",
      "summary": [
        "Em Katmandu, Kaecilius e seus seguidores invadem o santuário de Kamar-Taj, matam o bibliotecário e roubam páginas de um livro da Anciã, a mestra que o treinou. Em Nova York, Stephen Strange, neurocirurgião rico e arrogante, destrói as mãos num acidente de carro. A colega Christine Palmer insiste que ele siga a vida. Ele gasta tudo em cirurgias experimentais, sem resultado.",
        "Fica sabendo de um paraplégico que voltou a andar e que lhe indica Kamar-Taj. O mago Mordo o acolhe. A Anciã mostra a ele o plano astral e outras dimensões e aceita treiná-lo com relutância, por ver nele a ambição de Kaecilius. Strange estuda com Mordo e com Wong, o novo guardião da biblioteca. Aprende que três Santuários, em Nova York, Londres e Hong Kong, sustentam um escudo que protege a Terra, e descobre no livro roubado como dobrar o tempo com uma relíquia, o Olho de Agamotto.",
        "Kaecilius usa as páginas para contatar Dormammu, senhor da Dimensão Negra, onde o tempo não existe. Destrói o Santuário de Londres e ataca o de Nova York. Strange o segura com a ajuda de uma capa que voa e sai gravemente ferido; Christine o opera. Ele descobre que a própria Anciã prolonga a vida tirando poder da Dimensão Negra, o que desilude Mordo. Numa luta, Kaecilius a fere de morte. Antes de morrer, ela diz que os dois precisam um do outro: Mordo cumpre regras, Strange as dobra.",
        "Em Hong Kong, o Santuário já caiu, Wong está morto e a Dimensão Negra engole a cidade. Strange volta o tempo com o Olho e entra sozinho na dimensão. Cria um laço: toda vez que Dormammu o mata, o momento recomeça. Preso numa repetição sem fim, Dormammu aceita ir embora e levar Kaecilius.",
        "Mordo, enojado com a quebra das leis naturais, larga a ordem. Strange devolve o Olho, que Wong revela ser uma Joia do Infinito, e se instala no Santuário de Nova York. Nos créditos, oferece ajuda a Thor para achar Odin; depois, Mordo toma o poder do paraplégico curado e declara que há magos demais."
      ]
    },
    "gg2": {
      "title": "Guardiões da Galáxia Vol. 2",
      "original": "Guardians of the Galaxy Vol. 2",
      "year": 2017,
      "type": "f",
      "phase": 3,
      "description": "Os Guardiões encontram Ego, que diz ser o pai de Peter Quill. A reunião de família esconde um plano para o universo inteiro.",
      "consequence": "Quill perde o pai adotivo, Yondu. Mantis entra na equipe.",
      "summary": [
        "Os Guardiões são contratados pelos Soberanos, um povo dourado e vaidoso, para proteger umas baterias valiosas. Em troca recebem Nebulosa, presa ao tentar roubá-las. Rocket rouba algumas. A frota dos Soberanos os persegue e é destruída por um desconhecido. É Ego, pai de Peter Quill. Ele leva Quill, Gamora e Drax ao seu planeta, onde vive com Mantis, uma criada que sente as emoções alheias. Rocket e Groot ficam consertando a nave e vigiando Nebulosa.",
        "Os Soberanos contratam Yondu para capturá-los. Yondu, expulso da irmandade dos Saqueadores por ter traficado crianças, pega Rocket, mas hesita em entregar Quill, o menino que criou. A tripulação se amotina, com ajuda de Nebulosa, e executa os leais. Nebulosa parte para matar a irmã. Yondu e Rocket fogem com a ajuda de Groot e de um tripulante arrependido, e a nave explode.",
        "Ego explica que é um Celestial: uma consciência antiquíssima que formou em volta de si um planeta inteiro e um corpo humano para explorar o universo. Apaixonou-se pela mãe de Quill e pagou Yondu para buscar o menino quando ela morresse. Yondu nunca o entregou. Ego ensina o filho a usar o poder Celestial. Nebulosa chega, luta com Gamora, e as duas acabam dizendo o que nunca disseram: a cada duelo perdido para a irmã, Thanos trocava uma parte de Nebulosa por máquina. Juntas encontram uma caverna cheia de ossos.",
        "Ego revela o plano. Plantou mudas de si em milhares de mundos, para transformar tudo em extensão sua, e precisa de um segundo Celestial para ativá-las. Teve filhos em vários planetas, mandou Yondu buscá-los e matou os que não herdaram o dom. E foi ele quem pôs o tumor na cabeça da mãe de Quill, para não ficar preso à Terra. Quill atira nele. Ego o prende e drena sua energia.",
        "Os outros chegam. Rocket monta uma bomba com as baterias, e Groot a leva ao núcleo do planeta. Quill segura o pai lutando com o mesmo poder. A bomba mata Ego e, com ele, o poder de Quill. Yondu tira Quill do planeta em colapso e lhe dá o único traje espacial, morrendo no vácuo, depois de dizer que ele é que foi o pai. Os Saqueadores vêm ao funeral. Nebulosa parte para matar Thanos. Nos créditos, a sacerdotisa dos Soberanos cria um ser para caçar os Guardiões e o chama de Adam."
      ]
    },
    "aranha1": {
      "title": "Homem-Aranha: De Volta ao Lar",
      "original": "Spider-Man: Homecoming",
      "year": 2017,
      "type": "f",
      "phase": 3,
      "description": "Depois de lutar ao lado de Stark, Peter Parker, de 15 anos, volta ao colégio querendo provar que merece ser Vingador. Ele investiga um traficante de armas feitas com sucata alienígena.",
      "consequence": "Peter recusa a vaga nos Vingadores para continuar sendo o herói do bairro.",
      "summary": [
        "Depois da Batalha de Nova York, a empresa de limpeza de Adrian Toomes perde o contrato para o Controle de Danos, órgão criado por Tony Stark com o governo. Toomes fica com a sucata alienígena que já tinha recolhido e passa oito anos fabricando e vendendo armas com ela, incluindo um traje alado para si.",
        "Peter Parker, de 15 anos, volta da luta no aeroporto com um traje novo e a recomendação de Stark de ficar no bairro. Larga a equipe de decatlo da escola para se dedicar ao Homem-Aranha. O amigo Ned descobre a identidade. Peter flagra uma venda das armas de Toomes, é jogado num lago e salvo por uma armadura de Stark, que manda ele se afastar. Ele e Ned desligam o rastreador do traje.",
        "Peter volta ao decatlo só para seguir os bandidos até Washington. Fica preso num depósito, perde a competição e descobre que a peça que Ned guardava é uma granada. Ela explode no Monumento a Washington e prende a turma num elevador; Peter salva todos, entre eles Liz, de quem gosta. Dias depois, tenta prender um comprador numa balsa. Uma arma defeituosa parte o barco ao meio. Stark o salva e toma o traje de volta.",
        "Peter convida Liz para o baile. Quem abre a porta é Toomes, pai dela. No carro, Toomes deduz quem ele é e o ameaça. Peter larga o baile, veste o uniforme caseiro e vai atrás: Toomes vai roubar um avião que leva equipamento dos Vingadores para a base nova. Toomes derruba um galpão sobre ele, e Peter se levanta sozinho debaixo do concreto. Derruba o avião na praia e, quando o traje de Toomes explode, o tira do fogo.",
        "Toomes é preso, e Liz se muda. Stark oferece uma vaga nos Vingadores e um traje melhor; Peter recusa. Em casa, veste o traje devolvido e é visto pela tia May. Nos créditos, na cadeia, Toomes nega saber quem é o Homem-Aranha."
      ]
    },
    "ragnarok": {
      "title": "Thor: Ragnarok",
      "original": "Thor: Ragnarok",
      "year": 2017,
      "type": "f",
      "phase": 3,
      "description": "Hela, deusa da morte e irmã que Thor não conhecia, toma Asgard. Thor vai parar num planeta-lixão onde é obrigado a lutar numa arena contra o Hulk.",
      "consequence": "Odin morre, Asgard é destruída e Thor perde o martelo e um olho. Os sobreviventes partem numa nave.",
      "summary": [
        "Dois anos depois de Sokovia, Thor é preso pelo demônio de fogo Surtur, que conta que Odin não está em Asgard e que o reino cairá no Ragnarok quando sua coroa for unida à chama eterna do cofre. Thor o derrota e leva a coroa. Em Asgard, encontra Loki no trono, disfarçado de Odin, e o obriga a mostrar onde deixou o pai.",
        "Com a ajuda de Stephen Strange, acham Odin na Noruega, morrendo. Ele conta que tem uma primeira filha, Hela, deusa da morte, que comandou seus exércitos na conquista dos nove reinos. Quando ele quis paz e ela não, prendeu-a e a apagou da história. A prisão dependia da vida dele. Odin morre, Hela aparece e esmaga o Mjolnir com uma mão. Na fuga pela ponte Bifrost, ela derruba os dois irmãos no espaço.",
        "Hela toma Asgard, mata os amigos de Thor, ressuscita seu exército de mortos e nomeia um carrasco. Quer usar a Bifrost para retomar a conquista, mas Heimdall some com a espada que a controla e esconde o povo. Thor cai em Sakaar, planeta de sucata cercado de portais. É capturado por uma mercenária bêbada, que ele reconhece como a última das Valquírias, tropa que Hela massacrou, e vendido ao Grão-Mestre, a quem Loki já serve.",
        "Na arena, o campeão é o Hulk, transformado há dois anos. Thor quase vence, e o Grão-Mestre trapaceia. Depois, uma gravação de Natasha faz o Hulk voltar a ser Banner. A Valquíria aceita ajudar. Loki mostra como roubar uma nave e tenta trair o irmão, que já esperava. Os gladiadores se rebelam.",
        "Em Asgard, Hela arranca o olho direito de Thor. Numa visão, Odin lhe diz que o martelo era só um canal, e que Asgard é o povo, não o lugar. Thor solta raios pelo corpo. Como Hela tira força do planeta, só o Ragnarok a detém: Loki põe a coroa de Surtur na chama, e o demônio destrói Asgard com ela dentro. O povo parte numa nave, com Thor como rei, a caminho da Terra. Nos créditos, uma nave enorme surge à frente."
      ]
    },
    "pantera": {
      "title": "Pantera Negra",
      "original": "Black Panther",
      "year": 2018,
      "type": "f",
      "phase": 3,
      "description": "T'Challa assume o trono de Wakanda, país africano que esconde do mundo sua tecnologia baseada em vibranium. Um desafiante com direito ao trono questiona se o isolamento é justo.",
      "consequence": "Wakanda se abre para o mundo.",
      "summary": [
        "Há milhares de anos, cinco tribos africanas lutaram por um meteorito de vibranium. Um guerreiro comeu uma erva em forma de coração, alterada pelo metal, ganhou força sobre-humana, virou o primeiro Pantera Negra e uniu quatro tribos em Wakanda. A quinta, a dos Jabari, ficou nas montanhas. Com o vibranium, o país desenvolveu a tecnologia mais avançada do mundo e a escondeu, fingindo pobreza.",
        "Em 1992, o rei T'Chaka visitou em Oakland seu irmão N'Jobu, espião wakandano que passara a ajudar o traficante Ulysses Klaue a roubar vibranium, para armar os negros americanos. T'Chaka o matou e deixou para trás o filho dele, um menino.",
        "No presente, T'Challa volta para ser coroado depois da morte do pai. Vence o desafio de M'Baku, chefe dos Jabari, e o poupa. Persegue Klaue na Coreia do Sul com a general Okoye e a espiã Nakia, sua ex-namorada, e o captura. Klaue é resgatado por Erik Stevens, um ex-soldado americano de elite apelidado Killmonger. Um agente da CIA, Everett Ross, é baleado, e T'Challa o leva a Wakanda para ser curado por Shuri, sua irmã.",
        "Erik mata Klaue e entrega o corpo aos anciãos como credencial. É N'Jadaka, o menino de Oakland. Desafia T'Challa, mata o sacerdote que tenta impedi-lo e joga o primo de uma cachoeira. Coroado, toma a erva, manda queimar o resto e ordena o envio de armas de vibranium a agentes pelo mundo.",
        "Nakia salva uma erva e foge com Shuri, a rainha Ramonda e Ross para as montanhas, onde os Jabari encontraram T'Challa em coma. A erva o cura. Ele volta para terminar o combate. Okoye e a guarda real enfrentam os aliados de Killmonger; Ross derruba os aviões com as armas. Na mina, T'Challa fere o primo de morte e lhe oferece a cura. Killmonger recusa, prefere morrer livre, e pede para ver o pôr do sol de Wakanda.",
        "T'Challa conclui que o isolamento foi um erro. Abre um centro de assistência no prédio onde o tio morreu e, na cena dos créditos, anuncia na ONU que Wakanda vai compartilhar o que sabe. Depois, Shuri acorda Bucky Barnes, curado."
      ]
    },
    "ginfinita": {
      "title": "Vingadores: Guerra Infinita",
      "original": "Avengers: Infinity War",
      "year": 2018,
      "type": "f",
      "phase": 3,
      "description": "Thanos sai em busca das seis Joias do Infinito para eliminar metade da vida do universo com um estalar de dedos. Vingadores e Guardiões tentam impedi-lo em várias frentes.",
      "consequence": "Thanos vence. Metade de todos os seres vivos vira pó, incluindo Peter Parker, T'Challa, Strange, Wanda, Bucky e Sam. Gamora, Loki e Visão morrem antes do estalo.",
      "summary": [
        "Thanos, que já tomou a Joia do Poder do planeta Xandar, aborda com seus quatro generais a nave que leva os sobreviventes de Asgard. Domina Thor, vence o Hulk no braço, tira a Joia do Espaço do Tesseract e mata Loki. Heimdall, antes de morrer, manda o Hulk para a Terra.",
        "Banner cai no Santuário de Stephen Strange, em Nova York, e avisa a ele, a Wong e a Tony Stark que Thanos quer apagar metade da vida do universo. Dois generais vêm buscar a Joia do Tempo. Um feitiço impede que a tirem de Strange, então o levam inteiro numa nave. Stark e Peter Parker embarcam atrás, matam o general e libertam Strange. Decidem ir até Titã, o planeta de Thanos.",
        "Os Guardiões da Galáxia atendem o pedido de socorro de Asgard e recolhem Thor. Ele vai com Rocket e Groot a Nidavellir, onde o rei dos anões forja para ele um machado capaz de matar Thanos. Quill, Gamora, Drax e Mantis vão a Luganenhum atrás da Joia da Realidade e chegam tarde. Thanos leva Gamora e a obriga a dizer onde está a Joia da Alma, torturando Nebulosa na frente dela. Em Vormir, o guardião, o Caveira Vermelha, explica o preço: a vida de alguém amado. Thanos chora e a joga do penhasco.",
        "Na Escócia, Wanda e Visão são atacados pelos outros dois generais, que querem a Joia da Mente, e salvos por Steve, Natasha e Sam. Visão pede a Wanda que destrua a Joia, e ela recusa. Vão a Wakanda, onde Shuri pode tentar tirá-la sem matá-lo.",
        "Em Titã, Stark, Strange, Peter e os Guardiões imobilizam Thanos e quase arrancam a manopla. Nebulosa chega e deduz que Gamora morreu. Quill o agride, e ele se solta. Strange, que olhou milhões de futuros e viu um só com vitória, entrega a Joia do Tempo em troca da vida de Stark, ferido.",
        "Em Wakanda, um exército avança enquanto Shuri trabalha. Banner luta numa armadura, porque o Hulk se recusa a sair. Thor chega com o machado e vira a batalha; os generais morrem. Thanos aparece. Wanda destrói a Joia e Visão com ela. Thanos volta o tempo, arranca a Joia da testa dele e completa a manopla. Thor crava o machado em seu peito. Thanos estala os dedos.",
        "Metade dos seres vivos vira pó: Bucky, T'Challa, Groot, Wanda, Sam, os Guardiões que estavam em Titã, Strange, Peter. Stark e Nebulosa ficam sozinhos em Titã. Thanos assiste a um nascer do sol. Nos créditos, Nick Fury aciona um pager antes de sumir."
      ]
    },
    "hformiga2": {
      "title": "Homem-Formiga e a Vespa",
      "original": "Ant-Man and the Wasp",
      "year": 2018,
      "type": "f",
      "phase": 3,
      "description": "Em prisão domiciliar, Scott Lang ajuda Hope e Hank Pym a resgatar Janet van Dyne, presa no Reino Quântico há 30 anos.",
      "consequence": "Scott fica preso no Reino Quântico na hora do estalo. É de lá que sai a solução de Ultimato.",
      "summary": [
        "Dois anos depois de lutar na Alemanha, Scott Lang cumpre os últimos dias de prisão domiciliar. Hank Pym e Hope, foragidos por causa dele, conseguem abrir por instantes um túnel para o Reino Quântico, onde acreditam que Janet van Dyne está presa desde 1987. Scott, que esteve lá, tem um sonho que é uma mensagem dela. Pai e filha o tiram de casa, deixando uma formiga gigante com a tornozeleira.",
        "Falta uma peça para estabilizar o túnel, e o contrabandista que a vende resolve ficar com a tecnologia. Hope, agora a Vespa, enfrenta os capangas e é atacada por uma mulher mascarada que atravessa paredes e some com o laboratório, encolhido ao tamanho de uma mala. Pym procura um ex-colega com quem brigou, Bill Foster, para localizá-lo.",
        "A mulher é Ava Starr, a Fantasma. Os pais morreram num experimento com a tecnologia de Pym, e o acidente deixou o corpo dela instável e com dor constante. Foster a criou. Ela está morrendo, e os dois querem usar a energia quântica de Janet para curá-la. Pym recusa, por achar que isso mataria a esposa, e foge com o laboratório.",
        "Pelo túnel, Janet fala através de Scott e dá uma localização, com prazo de duas horas. O contrabandista arranca dos amigos de Scott o endereço e avisa o FBI. Pym e Hope são presos, Ava leva o laboratório, e Scott os ajuda a fugir. Pym entra no Reino Quântico e encontra Janet. Do lado de fora, uma perseguição pelas ruas de San Francisco. Ava começa a drenar Janet à força, e é a própria Janet quem, ao sair, lhe dá parte da energia por vontade própria, aliviando a dor.",
        "Scott volta para casa a tempo de ser liberado. Nos créditos, ele entra no túnel para colher mais energia para Ava. Do lado de fora, Hank, Janet e Hope viram pó no estalo de Thanos, e ele fica preso lá dentro."
      ]
    },
    "cmarvel": {
      "title": "Capitã Marvel",
      "original": "Captain Marvel",
      "year": 2019,
      "type": "f",
      "phase": 3,
      "description": "Em 1995, Vers, guerreira do império Kree, cai na Terra e descobre que foi a piloto Carol Danvers. Com o jovem agente Nick Fury, ela investiga o próprio passado.",
      "consequence": "Carol vira a heroína mais poderosa da saga. Monica Rambeau, filha de sua melhor amiga, volta adulta em WandaVision.",
      "summary": [
        "Em 1995, Vers é soldado de uma tropa de elite do império Kree. Não lembra de nada antes de seis anos atrás e sonha com uma mulher mais velha. O comandante, Yon-Rogg, a treina a conter os poderes, e a inteligência artificial que governa os Kree manda que controle as emoções. Numa missão contra os Skrulls, alienígenas que mudam de forma, ela é capturada. O líder deles, Talos, vasculha sua memória, e as lembranças apontam para a Terra. Ela escapa e cai em Los Angeles.",
        "Os agentes Nick Fury e Phil Coulson, da S.H.I.E.L.D., investigam. Depois de matar um Skrull que imitava Coulson, Fury passa a acreditar nela. Os dois vão a uma base da Força Aérea e descobrem quem ela é: Carol Danvers, piloto de testes dada como morta em 1989, no voo de um motor experimental projetado pela doutora Wendy Lawson, a mulher dos sonhos. Fogem num jato, com o gato da doutora, Goose.",
        "Na Louisiana, encontram Maria Rambeau, ex-piloto, e a filha Monica, que tratavam Carol como família. Talos chega desarmado e conta o outro lado: os Skrulls são refugiados, e Lawson era Mar-Vell, uma cientista Kree que os ajudava. A caixa-preta do voo devolve a memória. Yon-Rogg matou Mar-Vell para tomar o motor. Carol atirou nele para destruí-lo e absorveu a explosão. Os Kree a levaram, apagaram sua memória e puseram um implante que limita seus poderes.",
        "O laboratório de Mar-Vell está em órbita, escondido. Lá estão a família de Talos e a fonte de energia do motor, o Tesseract. A tropa de Yon-Rogg captura Carol. Diante da inteligência dos Kree, ela arranca o implante e usa todo o poder. Goose, que é um alienígena, engole o Tesseract e arranha o olho esquerdo de Fury. Carol destrói os mísseis lançados contra a Terra, e a frota Kree recua. Ela vence Yon-Rogg e o manda de volta com um recado.",
        "Carol parte para achar um lar para os Skrulls e deixa com Fury um pager para emergências. Fury começa a rascunhar um projeto para encontrar mais gente como ela e o batiza com o apelido de piloto de Carol: Vingadora. Nos créditos, em 2018, o pager é acionado e ela aparece diante dos Vingadores; depois, Goose devolve o Tesseract."
      ]
    },
    "ultimato": {
      "title": "Vingadores: Ultimato",
      "original": "Avengers: Endgame",
      "year": 2019,
      "type": "f",
      "phase": 3,
      "description": "Cinco anos depois do estalo, os Vingadores que sobraram tentam um último plano: viajar ao passado, pegar as Joias antes de Thanos e trazer todo mundo de volta.",
      "consequence": "Todos voltam, cinco anos mais tarde. Tony Stark e Natasha Romanoff morrem. Steve Rogers fica no passado com Peggy e, idoso, entrega o escudo a Sam Wilson. Um Loki de 2012 foge com o Tesseract, o que dá início à série dele.",
      "summary": [
        "Vinte e três dias depois do estalo, Carol Danvers resgata Tony Stark e Nebulosa, à deriva no espaço. Na Terra estão Banner, Steve, Thor, Natasha, Rhodes e Rocket. O grupo localiza Thanos num planeta deserto. Ele usou as Joias para destruir as Joias. Thor corta sua cabeça.",
        "Cinco anos depois, Scott Lang sai do Reino Quântico, onde para ele passaram cinco horas, e propõe usá-lo para viajar no tempo. Stark, que agora tem uma filha, recusa e depois resolve o problema. Banner, que uniu a inteligência dele ao corpo do Hulk, explica a regra: mudar o passado não altera o presente, só cria outra realidade. As Joias terão de ser tomadas emprestadas. Banner e Rocket buscam Thor na Noruega, deprimido e bêbado entre os asgardianos. Natasha busca Clint Barton em Tóquio, onde ele mata criminosos desde que perdeu a família.",
        "Nova York, 2012: Banner convence a Anciã a emprestar a Joia do Tempo; Steve tira o cetro das mãos de agentes da Hidra; Stark e Scott perdem o Tesseract, e o Loki daquele ano foge com ele. Steve e Stark vão então a 1970, a uma base militar, onde Stark pega o cubo e conversa com o pai, e Steve rouba partículas Pym e vê Peggy por uma janela. Asgard, 2013: Rocket tira a Joia da Realidade de Jane Foster, e Thor, consolado pela mãe no dia em que ela vai morrer, pega o martelo. Vormir, 2014: a Joia da Alma exige uma vida, Natasha e Clint lutam pelo direito de se sacrificar, e ela cai. Morag, 2014: Rhodes e Nebulosa pegam a Joia do Poder.",
        "Os implantes de Nebulosa se conectam aos de sua versão de 2014, e o Thanos daquele ano vê o futuro. Ele manda a Nebulosa do passado no lugar da atual. Na base, Banner veste uma manopla feita por Stark e estala os dedos; o braço queima, e os desaparecidos voltam. No mesmo instante, a Nebulosa infiltrada traz a nave de Thanos, que bombardeia a base.",
        "Stark, Steve e Thor enfrentam Thanos, que agora quer destruir o universo inteiro e fazer outro. Steve ergue o Mjolnir. Quando resta sozinho, de escudo quebrado, diante do exército, portais se abrem: Strange traz os magos, os Vingadores que voltaram, os Guardiões, Wakanda, Asgard. A manopla passa de mão em mão. Carol atravessa a nave inimiga. Thanos toma a manopla. Stark tira as Joias dela com a própria armadura e estala os dedos. Thanos e o exército viram pó. Stark morre, com Pepper e Peter ao lado.",
        "Depois do funeral, Thor entrega Nova Asgard à Valquíria e parte com os Guardiões. Steve leva as Joias e o martelo de volta a seus tempos e não retorna pela máquina. Está sentado num banco perto dali, idoso. Entrega o escudo a Sam Wilson. A última cena é a dança que ele devia a Peggy."
      ]
    },
    "aranha2": {
      "title": "Homem-Aranha: Longe de Casa",
      "original": "Spider-Man: Far From Home",
      "year": 2019,
      "type": "f",
      "phase": 3,
      "description": "Numa excursão escolar pela Europa, Peter Parker é convocado por Nick Fury para enfrentar criaturas elementais ao lado de Mysterio, que diz vir de outra Terra.",
      "consequence": "Mysterio revela ao mundo que Peter Parker é o Homem-Aranha.",
      "summary": [
        "No México, Nick Fury e Maria Hill investigam uma tempestade estranha e encontram um monstro feito de terra. Um desconhecido de capa, Quentin Beck, o derrota. Em Nova York, a escola de Peter Parker termina um ano letivo recomeçado: os alunos que sumiram no estalo voltaram cinco anos depois, com a mesma idade. O mundo chama aquilo de Blip.",
        "Peter, de luto por Stark, só quer viajar com a turma para a Europa e se declarar a MJ. Ignora as ligações de Fury. Em Veneza, um monstro de água ataca, e Beck o vence. Fury entrega a Peter uns óculos deixados por Stark, que dão acesso a E.D.I.T.H., uma inteligência artificial com satélites e drones armados. Beck conta que veio de outra Terra, destruída por quatro Elementais, e que o último, o de fogo, vai atacar Praga. Fury desvia a excursão para lá.",
        "Peter e Beck destroem o monstro de fogo. Convencido de que Beck é o herói adulto de que o mundo precisa, Peter lhe passa os óculos. Era o plano. Beck é um ex-funcionário de Stark, demitido por instabilidade, e os monstros são projeções de drones, obra de uma equipe de ex-colegas ressentidos. Com E.D.I.T.H., pode encenar algo maior.",
        "MJ revela que já sabia quem Peter é e mostra um projetor que achou caído. Os dois entendem o golpe. Peter vai a Berlim avisar Fury, mas quem o recebe é Beck, dentro de uma ilusão. Beck o faz dizer quem mais sabe e o deixa ser atropelado por um trem. Peter sobrevive e acorda na Holanda. Happy Hogan o busca, e ele faz um traje novo no avião.",
        "Em Londres, Beck encena o ataque final, pensado para matar os colegas de Peter, únicas testemunhas. Peter atravessa as ilusões confiando só em seu sentido de perigo, retoma os óculos e desliga tudo. Beck é atingido por um tiro de drone e morre mandando um comparsa salvar as gravações.",
        "De volta a Nova York, Peter e MJ começam a namorar. Na cena dos créditos, um telão exibe um vídeo editado em que Beck acusa o Homem-Aranha de matá-lo e diz o nome dele. Na última cena, o Fury e a Hill da viagem se revelam os Skrulls Talos e Soren; o Fury verdadeiro está numa nave no espaço."
      ]
    },
    "wandavision": {
      "title": "WandaVision",
      "original": "WandaVision",
      "year": 2021,
      "type": "s",
      "phase": 4,
      "description": "Wanda e Visão vivem como um casal de sitcom numa cidadezinha, cada episódio numa década da TV. Do lado de fora, agentes tentam entender o que aconteceu com a cidade.",
      "consequence": "Wanda se torna a Feiticeira Escarlate e fica com o Darkhold, o livro que a corrompe. Um Visão branco, sem memórias, sai voando. Agatha Harkness fica presa na cidade.",
      "summary": [
        "Três semanas depois de Ultimato, Wanda Maximoff e Visão vivem como recém-casados em Westview, Nova Jersey, escondendo dos vizinhos o que são. Tudo tem a forma de um seriado de TV. O primeiro episódio é dos anos 1950, em preto e branco, com jantar para o chefe e vizinha intrometida, Agnes. O segundo é dos anos 1960; no fim, um homem com roupa de apicultor sai de um bueiro, e Wanda volta a cena e a refaz. A série ganha cor. Wanda engravida e, no episódio dos anos 1970, dá à luz gêmeos, Billy e Tommy. A vizinha que ajuda no parto menciona Ultron, e Wanda a atira para fora da cidade.",
        "O quarto episódio mostra o lado de fora. A vizinha é Monica Rambeau, capitã da agência S.W.O.R.D., que acabou de voltar do Blip e foi mandada investigar por que uma cidade inteira sumiu. Com o agente do FBI Jimmy Woo e a cientista Darcy Lewis, descobre que a cidade está sob uma barreira de energia e transmite um seriado, com os moradores como elenco. O diretor da S.W.O.R.D., Hayward, quer Wanda morta e diz que ela roubou o corpo de Visão.",
        "Dentro, os meninos crescem em dias, e Visão começa a notar que os vizinhos sofrem. Aparece na porta um Pietro, irmão morto de Wanda, com outro rosto. Visão tenta sair da cidade e começa a se desfazer; Wanda amplia a barreira para salvá-lo. Monica atravessa a barreira pela terceira vez e sai dela com poderes.",
        "Agnes se revela Agatha Harkness, bruxa que em 1693 drenou o próprio clã. Foi ela quem mandou o falso Pietro. Obriga Wanda a rever a própria vida: a infância em Sokovia vendo seriados americanos, a bomba que matou os pais, os experimentos com a Joia da Mente. E o que houve antes de Westview: Hayward não a deixou enterrar Visão, ela foi ao terreno que ele tinha comprado para os dois e, de dor, criou tudo aquilo do nada, inclusive um Visão novo. Agatha lhe dá o nome que isso tem: Feiticeira Escarlate.",
        "No final, Hayward solta o corpo original de Visão, reconstruído em branco e sem memória, para matar Wanda. Os dois Visões lutam e depois conversam, e o de Wanda devolve as lembranças ao outro, que voa embora. Agatha tenta tomar a magia de Wanda e perde; Wanda a prende na personagem de Agnes. Agatha tinha libertado os moradores por um instante, e eles disseram a Wanda o que sentiam. Ela desfaz a barreira, despedindo-se de Visão e dos filhos, que somem com ela.",
        "Hayward é preso. Monica é chamada por um Skrull a serviço de um amigo de sua mãe. Na última cena, Wanda, isolada numa cabana, estuda o Darkhold e ouve os gêmeos pedirem socorro."
      ]
    },
    "falcao": {
      "title": "Falcão e o Soldado Invernal",
      "original": "The Falcon and the Winter Soldier",
      "year": 2021,
      "type": "s",
      "phase": 4,
      "description": "Sam Wilson devolve o escudo ao governo, que nomeia outro Capitão América. Ele e Bucky Barnes enfrentam um grupo radical que quer o mundo como era durante o Blip.",
      "consequence": "Sam assume o posto de Capitão América. John Walker vira o Agente Americano, recrutado por Valentina de Fontaine.",
      "summary": [
        "Seis meses depois de receber o escudo, Sam Wilson conclui que não lhe cabe usá-lo e o doa a um museu. O governo o entrega em seguida a John Walker, capitão condecorado, apresentado como o novo Capitão América. Bucky Barnes, que cumpre terapia obrigatória e tenta reparar os crimes do Soldado Invernal, fica furioso.",
        "Os dois enfrentam os Apátridas, grupo liderado pela jovem Karli Morgenthau, que acha que o mundo era melhor durante o Blip, sem fronteiras. Eles têm força de supersoldado. Para saber de onde veio o soro, Sam conhece Isaiah Bradley, soldado negro que recebeu a fórmula nos anos 1950 e passou trinta anos preso como cobaia. Em seguida, Bucky tira Helmut Zemo da prisão. A pista leva a Madripoor, onde um cientista recria o soro para alguém chamado Mercador do Poder. Sharon Carter, ex-agente abandonada pelo governo, os salva. Zemo mata o cientista, e Karli fica com as doses.",
        "As guerreiras de Wakanda vêm cobrar Zemo, assassino de seu rei. Zemo destrói quase todo o soro, e Walker fica com o último frasco e o toma em segredo. Numa luta, Karli mata sem querer o parceiro de Walker. Ele alcança um dos Apátridas numa praça e o mata com o escudo, rendido, diante de celulares.",
        "Sam e Bucky tomam o escudo à força, quebrando o braço de Walker. Ele é expulso do Exército e procurado por Valentina de Fontaine. Bucky entrega Zemo às wakandanas. Isaiah diz a Sam que nenhum homem negro deveria querer ser o Capitão América. Sam treina com o escudo assim mesmo.",
        "No ataque dos Apátridas a uma reunião em Nova York, Sam aparece com asas novas feitas em Wakanda e o escudo. Sharon se revela a Mercadora do Poder e mata Karli. Sam faz aos senadores um discurso sobre quem eles chamam de terrorista e os convence a não remover os refugiados à força. Leva Isaiah a um museu, onde agora há uma estátua dele. Valentina dá a Walker o nome de Agente Americano. Nos créditos, Sharon é perdoada, volta à CIA e começa a vender segredos."
      ]
    },
    "loki1": {
      "title": "Loki (1ª temporada)",
      "original": "Loki",
      "year": 2021,
      "type": "s",
      "phase": 4,
      "description": "O Loki que fugiu em 2012 é preso pela Autoridade de Variância Temporal (AVT), burocracia que poda as ramificações do tempo. Ele é posto para caçar uma variante de si mesmo.",
      "consequence": "Sylvie mata Aquele Que Permanece, o homem que mantinha uma só linha do tempo. O multiverso se abre.",
      "summary": [
        "O Loki de 2012, que pegou o Tesseract durante a viagem no tempo dos Vingadores, é preso em minutos pela Autoridade de Variância Temporal e julgado por crimes contra a Linha do Tempo Sagrada. O analista Mobius lhe mostra num projetor a vida que ele teria: a morte da mãe, causada indiretamente por ele, e a própria, nas mãos de Thanos. Loki tenta fugir e desiste ao ver funcionários usando Joias do Infinito como peso de papel. Aceita ajudar Mobius a caçar uma variante de Loki que mata agentes.",
        "Os dois deduzem que a variante se esconde em catástrofes, onde nada do que fizer muda o tempo. Acham-na num furacão em 2050. É Sylvie, uma Loki. Ela recusa a proposta de tomarem juntos o lugar dos chefes, espalha bombas pela linha do tempo e some por um portal; Loki vai atrás.",
        "Ficam presos em 2077, numa lua prestes a ser esmagada por um planeta, com o aparelho de viagem sem bateria. Sylvie conta que foi levada pela AVT quando criança e que os funcionários da agência são todos variantes sequestradas, de memória apagada. Diante da morte certa, os dois se aproximam, e isso cria uma ramificação tão estranha que a AVT os localiza.",
        "Mobius acha a prova de que Sylvie diz a verdade e é eliminado pela juíza Renslayer. Levados aos Guardiões do Tempo, Loki e Sylvie lutam, e ela corta a cabeça de um: é um robô. Renslayer elimina Loki. Ele acorda no Vazio, lugar no fim do tempo para onde vai tudo que a AVT apaga, entre outros Lokis: um velho, um menino, um jacaré. Uma nuvem viva, Alioth, devora o que chega. Sylvie se deixa eliminar para segui-lo. O Loki velho se sacrifica criando uma ilusão de Asgard para distrair a nuvem, e os dois a encantam juntos. Atrás dela há uma cidadela.",
        "Lá mora Aquele Que Permanece. Ele explica: no século 31, versões dele em vários universos se descobriram, e algumas quiseram conquistar as outras. A guerra quase destruiu tudo. Ele a venceu usando Alioth, isolou uma linha do tempo e criou a AVT para que as outras versões nunca mais nascessem. Cansado, oferece o posto aos dois: ou assumem, ou o matam e soltam o multiverso, com versões dele bem piores. Loki quer pensar. Sylvie o beija, o empurra por um portal e mata o homem. As linhas do tempo se ramificam sem controle. Loki chega a uma AVT onde Mobius não o conhece e há uma estátua do morto no saguão."
      ]
    },
    "viuva": {
      "title": "Viúva Negra",
      "original": "Black Widow",
      "year": 2021,
      "type": "f",
      "phase": 4,
      "description": "Entre Guerra Civil e Guerra Infinita, Natasha Romanoff reencontra a falsa família de espiões com quem cresceu e ataca a Sala Vermelha, o programa que a treinou.",
      "consequence": "Apresenta Yelena Belova e Alexei, o Guardião Vermelho, futuros Thunderbolts.",
      "summary": [
        "Em 1995, em Ohio, uma família parece comum: pai, mãe e duas meninas. São agentes russos. Alexei é um supersoldado, Melina é uma Viúva Negra, e Natasha e Yelena não são filhas de nenhum dos dois. Concluída a missão, fogem para Cuba, e o chefe, o general Dreykov, leva as meninas para a Sala Vermelha, onde são treinadas como assassinas. Alexei é jogado numa prisão.",
        "Anos depois, Natasha deserta para a S.H.I.E.L.D. A prova de lealdade é um atentado em Budapeste, feito com Clint Barton, que aparentemente mata Dreykov e a filha pequena dele, Antonia.",
        "Em 2016, logo depois de Guerra Civil, Natasha é foragida e se esconde na Noruega. Yelena, numa missão, é atingida por um gás que anula o controle químico que a Sala Vermelha hoje impõe às Viúvas, e manda os frascos do antídoto para a irmã. Um soldado mascarado que copia o estilo de qualquer lutador, o Treinador, ataca Natasha por causa deles. Ela vai a Budapeste, reencontra Yelena e fica sabendo que Dreykov está vivo e o programa continua.",
        "As duas tiram Alexei da prisão. Ele as leva a Melina, que numa fazenda aperfeiçoa o controle mental. Natasha a convence a ajudar, e as duas trocam de rosto com máscaras para entrar na Sala Vermelha, uma base que voa. Dreykov percebe e revela que o Treinador é Antonia, que sobreviveu ao atentado com o cérebro reconstruído. Um bloqueio por cheiro impede qualquer Viúva de feri-lo. Natasha quebra o próprio nariz para cortar o nervo e o ataca.",
        "A base começa a cair. Yelena solta o antídoto sobre as Viúvas e explode a nave em que Dreykov fugia. Natasha copia a lista das Viúvas espalhadas pelo mundo, liberta Antonia e a cura. Entrega a lista a Yelena e parte para tirar os amigos da Balsa. Depois dos créditos, anos mais tarde, Yelena visita o túmulo da irmã, e Valentina de Fontaine lhe aponta Clint Barton como culpado."
      ]
    },
    "whatif": {
      "title": "What If...?",
      "original": "What If...?",
      "year": 2021,
      "type": "s",
      "phase": 4,
      "description": "Antologia animada em três temporadas. O Vigia observa versões alternativas de histórias conhecidas: Peggy Carter com o soro, T'Challa no lugar de Peter Quill.",
      "consequence": "Mostra o multiverso por dentro. Uma Capitã Carter em carne e osso aparece em Multiverso da Loucura.",
      "summary": [
        "Série de animação em três temporadas. O narrador é o Vigia, ser que observa todos os universos e jurou nunca interferir. Cada episódio parte de uma mudança pequena numa história conhecida.",
        "Na primeira temporada: Peggy Carter recebe o soro no lugar de Steve Rogers e vira a Capitã Carter. T'Challa é abduzido no lugar de Peter Quill e se torna um aventureiro espacial melhor que ele. Os candidatos a Vingadores são assassinados um a um por um Hank Pym em luto pela filha. Um Doutor Estranho que não aceita a morte da namorada absorve poder até destruir o próprio universo. Um vírus vindo do Reino Quântico transforma os heróis em zumbis. Killmonger salva Tony Stark no Afeganistão e o trai. Thor cresce sem irmão e vira um festeiro.",
        "No penúltimo episódio, um Ultron que conseguiu o corpo do Visão vence os Vingadores, mata Thanos, fica com as seis Joias e descobre que existem outros universos e alguém olhando. Ele ataca o Vigia. O Vigia quebra o juramento e reúne uma equipe com os protagonistas dos episódios anteriores. Eles derrotam Ultron com um vírus de computador, Killmonger tenta ficar com as Joias, e o Doutor Estranho corrompido prende os dois numa dimensão de bolso, que fica vigiando.",
        "Importa para a história maior por mostrar o multiverso como um conjunto de mundos inteiros, e por ser de onde vem a Capitã Carter que aparece em carne e osso em Multiverso da Loucura."
      ]
    },
    "shangchi": {
      "title": "Shang-Chi e a Lenda dos Dez Anéis",
      "original": "Shang-Chi and the Legend of the Ten Rings",
      "year": 2021,
      "type": "f",
      "phase": 4,
      "description": "Shang-Chi vive como manobrista em San Francisco, escondido do pai, líder imortal da organização Dez Anéis. O passado vem buscá-lo.",
      "consequence": "Os anéis emitem um sinal para um lugar desconhecido. Shang-Chi entra no radar dos Vingadores.",
      "summary": [
        "Há mil anos, Xu Wenwu encontra dez anéis que lhe dão força, energia e vida sem fim. Com eles funda uma organização secreta, os Dez Anéis, que derruba governos ao longo dos séculos. Em 1996, sai em busca de Ta Lo, uma aldeia de criaturas míticas, e é barrado na entrada pela guardiã, Ying Li. Os dois se apaixonam. Ela deixa a aldeia, ele guarda os anéis e larga a organização, e têm dois filhos, Shang-Chi e Xialing.",
        "Quando Shang-Chi tem sete anos, inimigos antigos de Wenwu matam Li. Ele recoloca os anéis, massacra os assassinos e retoma tudo. Treina o filho para matar e ignora a filha, que aprende sozinha. Aos 14 anos, Shang-Chi é mandado matar o líder da gangue. Cumpre a ordem e foge para San Francisco.",
        "No presente, é Shaun, manobrista de hotel, com a amiga Katy. Homens do pai o atacam num ônibus e roubam o pingente que a mãe lhe deu. Ele vai a Macau avisar a irmã, que tem o outro pingente e comanda um clube de lutas clandestinas, e conta a Katy quem é. Os três são capturados. No complexo do pai, os pingentes revelam um mapa para Ta Lo. Wenwu ouve a esposa chamá-lo de trás de um portão selado e vai arrombá-lo, destruindo a aldeia se for preciso.",
        "Na cela conhecem Trevor Slattery, o ator que fingiu ser o Mandarim, mantido ali como bobo, e sua criatura de estimação, que conhece o caminho. Em Ta Lo, a tia deles explica: a voz é do Habitante das Trevas, um ser que devora almas, preso atrás do portão por um dragão, e que imita Li para ser solto. A aldeia se arma.",
        "Wenwu chega, derrota o filho e o joga num lago. Começa a quebrar o portão, e criaturas escapam. Os homens dele passam a lutar ao lado dos aldeões. O dragão tira Shang-Chi da água. Ele enfrenta o pai de novo, usando o estilo da mãe, vence e não o mata. O Habitante se solta; Wenwu salva o filho, é devorado e, antes, lhe passa os anéis. Shang-Chi, o dragão, Xialing e Katy matam a criatura.",
        "De volta a San Francisco, Wong vem buscá-los. Nos créditos, em Kamar-Taj, Bruce Banner e Carol Danvers examinam os anéis: não se sabe de que são feitos, são muito mais velhos que mil anos e funcionam como um farol, mandando sinal para algum lugar. Depois, Xialing assume a organização do pai e passa a treinar mulheres."
      ]
    },
    "eternos": {
      "title": "Eternos",
      "original": "Eternals",
      "year": 2021,
      "type": "f",
      "phase": 4,
      "description": "Os Eternos, seres imortais enviados à Terra há sete mil anos, se reúnem quando as criaturas que eles caçavam reaparecem. Eles descobrem para que realmente foram mandados.",
      "consequence": "Um Celestial gigante fica petrificado no meio do oceano. Essa ilha é o centro de Admirável Mundo Novo.",
      "summary": [
        "Em 5000 a.C., Arishem, um Celestial, manda dez Eternos à Terra para exterminar os Deviantes, predadores que caçam humanos. O último Deviante morre em 1521. Sem missão, o grupo discute se deve intervir nas guerras humanas e se separa. Pelos quinhentos anos seguintes, cada um vive à sua maneira, esperando ordens.",
        "No presente, em Londres, Sersi, que transforma matéria, namora um humano, Dane, e mora com Sprite, uma Eterna com corpo de criança. Um Deviante as ataca, e Ikaris, o mais forte do grupo e ex-companheiro de Sersi, aparece para salvá-las. Os três procuram a líder, Ajak, e a encontram morta. Ela tinha escolhido Sersi como sucessora, o que lhe dá o poder de falar com Arishem.",
        "Arishem conta a verdade. Celestiais nascem dentro de planetas e precisam da energia de uma população grande. Os Deviantes foram criados para eliminar predadores e saíram do controle; os Eternos foram criados para eliminá-los e deixar a humanidade crescer. A Terra é um ovo. A volta de bilhões de pessoas depois do Blip completou a energia, e o nascimento de Tiamut, que destrói o planeta, é iminente. Os Eternos, além disso, são máquinas, com a memória apagada a cada missão.",
        "Sersi reúne os outros: um astro de Bollywood, um inventor com marido e filho, uma guerreira que está perdendo a memória e seu protetor, um telepata isolado na Amazônia, uma velocista. O protetor morre num ataque. O plano é unir os poderes de todos para que o telepata adormeça Tiamut. Ikaris se recusa. Ele sempre soube da verdade e, quando Ajak decidiu salvar a Terra, a entregou aos Deviantes. Sprite, que o ama, fica do lado dele.",
        "O nascimento começa num vulcão no oceano Índico. Os outros contêm Ikaris. O telepata não consegue, e Sersi, com a força de todos, transforma Tiamut em pedra quando a cabeça e a mão já estão fora d'água. Ikaris se solta para matá-la e não consegue. Voa para dentro do Sol. Sersi torna Sprite humana.",
        "Três Eternos partem para avisar os de outros planetas. Arishem aparece no céu e leva Sersi e dois outros: vai julgar pela memória deles se a humanidade merece viver. Nos créditos surge Eros, irmão de Thanos; depois, Dane abre uma caixa com uma espada de família."
      ]
    },
    "gaviao": {
      "title": "Gavião Arqueiro",
      "original": "Hawkeye",
      "year": 2021,
      "type": "s",
      "phase": 4,
      "description": "Às vésperas do Natal, Clint Barton fica preso em Nova York por causa de Kate Bishop, arqueira de 22 anos que vestiu o traje errado na hora errada.",
      "consequence": "Kate Bishop vira parceira de Clint. Yelena descobre como Natasha morreu. O Rei do Crime entra no MCU.",
      "summary": [
        "Em 2012, a menina Kate Bishop vê da janela um homem de arco e flecha salvar sua vida durante a Batalha de Nova York. O pai dela morre naquele dia. Em 2024, aos 22 anos, campeã de arco, ela desconfia do noivo da mãe, Jack, e o segue até um leilão clandestino de objetos tirados das ruínas da base dos Vingadores. Uma gangue de agasalho invade o lugar atrás de um relógio. Kate veste um traje preto do lote para lutar. É o traje de Ronin, a identidade com que Clint Barton matou criminosos durante o Blip.",
        "Clint está em Nova York com os filhos para o Natal, vê Ronin no noticiário e vai recuperar o traje. Manda os filhos para casa prometendo chegar a tempo. A gangue é comandada por Maya Lopez, surda, cujo pai foi morto por Ronin. Clint e Kate são capturados, fogem numa perseguição de carro com flechas de truque, e ele quebra o aparelho de surdez.",
        "Uma assassina mascarada ataca os dois num telhado: Yelena Belova, que voltou do Blip, soube que a irmã Natasha morreu e foi contratada para matar Clint. Ele dispensa Kate para protegê-la. Vestido de Ronin, enfrenta Maya e lhe diz o que sabe: quem entregou o pai dela foi um informante de dentro, a mando do chefe. Yelena aparece no apartamento de Kate, janta com ela e depois lhe manda uma mensagem: quem a contratou foi Eleanor, mãe de Kate, e ela trabalha para Wilson Fisk, o Rei do Crime.",
        "Na véspera de Natal, numa festa no Rockefeller Center, a gangue tenta matar Clint. Ele e Kate a enfrentam na pista de gelo. Yelena o encurrala e cobra a morte da irmã. Ele conta o que houve em Vormir e usa um assobio que só as duas conheciam. Ela o deixa ir. Kate derruba Fisk com flechas e vê a mãe ser presa pelo assassinato de um sócio. Maya mata o comparsa que a traiu, alcança Fisk num beco e aponta a arma. Ouve-se o tiro.",
        "Clint leva Kate e um cachorro para passar o Natal com sua família. Devolve o relógio à esposa, que foi agente da S.H.I.E.L.D., e queima o traje de Ronin."
      ]
    },
    "aranha3": {
      "title": "Homem-Aranha: Sem Volta para Casa",
      "original": "Spider-Man: No Way Home",
      "year": 2021,
      "type": "f",
      "phase": 4,
      "description": "Com a identidade exposta, Peter pede a Strange um feitiço para o mundo esquecer quem ele é. O feitiço dá errado e atrai gente de outros universos que conhece um Peter Parker.",
      "consequence": "Tia May morre. Para fechar as fendas, Strange faz o mundo inteiro esquecer Peter Parker, inclusive MJ e Ned.",
      "summary": [
        "O filme começa no segundo seguinte a Longe de Casa. Com o nome exposto e acusado de assassinato, Peter Parker é detido com MJ, Ned e a tia May. O advogado Matt Murdock derruba as acusações, mas metade do país o odeia. O MIT recusa os três por causa da polêmica.",
        "Peter pede a Stephen Strange um feitiço para que todos esqueçam que ele é o Homem-Aranha. No meio do feitiço, vai pedindo exceções, para MJ, para Ned, para May, e a magia se corrompe. Strange a contém. Dias depois, numa ponte, Peter é atacado por um homem com tentáculos de metal, Otto Octavius, e por um planador verde. O feitiço puxou de outros universos gente que conhece um Peter Parker que é o Homem-Aranha.",
        "Strange manda Peter, MJ e Ned capturarem os visitantes: Octavius, o Lagarto, Electro, o Homem-Areia e Norman Osborn, o Duende Verde, que aparece confuso e é acolhido por May. Todos foram tirados do instante anterior à própria morte. Strange vai mandá-los de volta. Peter acha que deve antes curá-los, para mudar o destino deles. Rouba a caixa do feitiço, prende Strange numa dimensão espelhada e leva os cinco ao apartamento de Happy Hogan. Cura Octavius.",
        "A personalidade do Duende reassume Osborn, vira os outros contra Peter e destrói o prédio. May é ferida. Antes de morrer, diz ao sobrinho que poder traz responsabilidade. Ned, com o anel de Strange, abre portais procurando Peter e encontra dois outros Peter Parker, mais velhos, de outros universos. Os dois contam o que perderam, um tio e uma namorada, e convencem o mais novo a não desistir.",
        "Os três fazem as curas e atraem os vilões para a Estátua da Liberdade. Um a um, eles são curados; Octavius ajuda. Um dos Peters salva MJ de uma queda igual à que matou a namorada dele. Peter quase mata o Duende com o próprio planador, e o outro Peter se põe na frente da lâmina. Osborn é curado.",
        "O feitiço escapa, e o céu se enche de rachaduras, com inúmeros outros chegando. A única saída é um feitiço maior: que o mundo inteiro esqueça Peter Parker. Ele se despede de MJ e Ned prometendo procurá-los e explicar tudo. Os visitantes voltam para casa.",
        "Semanas depois, Peter vai ao café onde MJ trabalha, com um discurso ensaiado. Vê que ela e Ned estão bem, com vaga no MIT, e não diz nada. Visita o túmulo de May, aluga um quarto e costura um uniforme. Nos créditos, outro visitante, Eddie Brock, é mandado de volta e deixa num balcão um pedaço do simbionte Venom."
      ]
    },
    "cavaleiro": {
      "title": "Cavaleiro da Lua",
      "original": "Moon Knight",
      "year": 2022,
      "type": "s",
      "phase": 4,
      "description": "Steven Grant, funcionário de museu em Londres, descobre que divide o corpo com um mercenário que serve a um deus egípcio.",
      "consequence": "História isolada, sem efeito nos outros títulos até aqui.",
      "summary": [
        "Steven Grant, vendedor da loja de um museu em Londres, acorda nos Alpes sem saber como chegou e cai numa reunião de uma seita. O líder, Arthur Harrow, quer um escaravelho que está com ele. Em casa, descobre que perdeu dois dias e recebe a ligação de uma mulher, Layla, que o chama de Marc. Atacado por um chacal invisível, vê o próprio reflexo pedir o controle do corpo. O reflexo é Marc Spector.",
        "Marc é um mercenário americano e o avatar de Khonshu, deus egípcio da lua: à beira da morte no deserto, aceitou servi-lo. Harrow foi o avatar anterior e hoje quer ressuscitar Ammit, deusa que julga as pessoas pelo que ainda vão fazer. O escaravelho aponta para o túmulo dela. Os outros deuses não acreditam em Marc e prendem Khonshu numa estatueta.",
        "Marc e Layla, que é arqueóloga e sua esposa, acham o túmulo. Harrow conta a ela que Marc estava presente quando o pai dela foi morto, e atira nele. Marc acorda num hospital psiquiátrico que é uma imagem do além. Uma deusa em forma de hipopótamo explica que ele e Steven estão mortos e que seus corações precisam se equilibrar. Para isso, revivem o que esconderam: o irmão mais novo de Marc morreu afogado numa brincadeira, a mãe o culpou e o espancou por anos, e ele inventou Steven para ter onde se refugiar.",
        "Harrow solta Ammit. Layla liberta Khonshu e aceita ser avatar da deusa hipopótamo. Marc volta à vida com Steven, e os três prendem Ammit no corpo de Harrow. Marc se recusa a matá-lo e exige ser liberado do serviço.",
        "Na cena dos créditos aparece uma terceira identidade, Jake Lockley, que continua trabalhando para Khonshu sem que os outros saibam e mata Harrow. A série não se liga a nenhum outro título."
      ]
    },
    "estranho2": {
      "title": "Doutor Estranho no Multiverso da Loucura",
      "original": "Doctor Strange in the Multiverse of Madness",
      "year": 2022,
      "type": "f",
      "phase": 4,
      "description": "America Chavez, adolescente capaz de abrir portais entre universos, é perseguida por alguém que quer esse poder. Strange a protege numa fuga por várias realidades.",
      "consequence": "Apresenta as incursões: universos que colidem e se destroem. Wanda derruba o templo do Darkhold sobre si mesma. Na Terra-838 existem um Reed Richards e um Professor Xavier.",
      "summary": [
        "Num espaço entre universos, um Stephen Strange foge de um demônio com uma adolescente, America Chavez. Ele morre, e ela, apavorada, abre um portal em forma de estrela e cai na Terra principal, levando o corpo. No casamento da ex-namorada, o Strange deste mundo vê um monstro perseguir a menina pela rua e, com Wong, a salva. America abre portais entre universos e não controla o poder, que só aparece quando sente medo.",
        "Strange nota runas de bruxaria no monstro e procura Wanda Maximoff para pedir ajuda. É ela quem manda as criaturas. Depois de Westview, leu o Darkhold e virou a Feiticeira Escarlate. Quer o poder de America para ir a um universo onde Billy e Tommy existam, o que mataria a menina. Strange recusa. Wanda ataca Kamar-Taj e mata muitos magos. America, em pânico, leva Strange para outro universo.",
        "É a Terra-838. Lá, Wanda usa o Darkhold para ocupar o corpo da Wanda local, uma mãe de subúrbio. Uma maga de Kamar-Taj se sacrifica para queimar o livro, e Wanda obriga Wong a levá-la ao monte Wundagore, onde o texto original está gravado na pedra. Na 838, Strange e America são presos pelos Illuminati: Mordo, a Capitã Carter, Raio Negro, Maria Rambeau como Capitã Marvel, Reed Richards e Charles Xavier. Eles contam que o Strange deles usou o Darkhold para vencer Thanos e provocou uma incursão, o choque de dois universos, que destruiu um deles. Mataram-no em segredo e acham que este Strange é igual.",
        "Wanda volta ao corpo da outra e chega à sede. Mata os Illuminati um por um, menos Mordo. Strange e America fogem com a Christine daquele mundo e procuram o Livro dos Vishanti, o oposto do Darkhold. Wanda o destrói, captura America e joga os outros dois num universo em ruínas, arrasado por uma incursão. Ali vive um Strange corrompido, com um terceiro olho. Strange o vence e usa o Darkhold dele para ocupar, à distância, o cadáver do Strange que morreu no começo.",
        "Em Wundagore, o cadáver animado enfrenta Wanda e liberta America. Strange lhe diz para confiar em si. Ela não ataca Wanda: abre um portal para a casa dos meninos na 838. Eles gritam de medo e chamam pela mãe verdadeira. Wanda vê o que se tornou. Derruba o monte sobre si, destruindo todas as cópias do Darkhold em todos os universos.",
        "America fica em Kamar-Taj como aprendiz. Strange ganha um terceiro olho, preço do livro. Nos créditos, uma feiticeira o aborda na rua: ele causou uma incursão e vai ajudar a consertá-la. Entram juntos na Dimensão Negra."
      ]
    },
    "msmarvel": {
      "title": "Ms. Marvel",
      "original": "Ms. Marvel",
      "year": 2022,
      "type": "s",
      "phase": 4,
      "description": "Kamala Khan, adolescente de Jersey City e fã da Capitã Marvel, ganha poderes de um bracelete de família.",
      "consequence": "Kamala é a primeira personagem do MCU chamada de mutante.",
      "summary": [
        "Kamala Khan tem 16 anos, mora em Jersey City com a família paquistanesa e é fã dos Vingadores, sobretudo da Capitã Marvel. Os pais não a deixam ir a uma convenção de fãs, e ela foge com o amigo Bruno. Completa a fantasia com um bracelete dourado que veio numa caixa da avó. Na convenção, o bracelete acende e ela passa a criar formas de luz sólida. Causa um acidente e salva uma colega. Dois agentes do Controle de Danos veem o vídeo.",
        "Bruno a ajuda a treinar e conclui que o bracelete despertou algo que já estava nela. Ela conhece Kamran, aluno novo, cuja mãe, Najma, lidera um grupo de exilados de outra dimensão. A bisavó de Kamala, Aisha, era uma deles e dona do bracelete. Najma quer usá-lo para abrir a passagem de volta, mesmo que isso destrua este mundo.",
        "A avó chama Kamala a Karachi. Lá ela conhece uma ordem de vigilantes que protege a passagem. Num ataque, o bracelete é atingido, e Kamala é lançada à noite de 1947 em que a Índia foi dividida. Vê Aisha ser morta por Najma na estação de trem. É a própria Kamala quem guia a avó, então criança, até o pai na multidão. A história de família sobre uma trilha de estrelas era ela.",
        "No presente, a passagem se abre. Najma se sacrifica para fechá-la e passa seu poder ao filho. De volta a Jersey City, a mãe de Kamala aceita os poderes e costura para ela um uniforme. O Controle de Danos persegue Kamran e cerca a escola. Kamala e os amigos o protegem, e o bairro fica do lado dela. A agente responsável é afastada. Kamala adota o nome Ms. Marvel.",
        "Bruno examina os genes dela e encontra algo que ninguém na família tem: uma mutação. Na cena dos créditos, o bracelete brilha, e no lugar de Kamala aparece Carol Danvers."
      ]
    },
    "thor4": {
      "title": "Thor: Amor e Trovão",
      "original": "Thor: Love and Thunder",
      "year": 2022,
      "type": "f",
      "phase": 4,
      "description": "Thor tenta se aposentar, mas Gorr, o Carniceiro dos Deuses, está matando divindades. Jane Foster reaparece empunhando o martelo.",
      "consequence": "Jane morre. Thor adota a filha de Gorr.",
      "summary": [
        "Gorr e a filha pequena são os últimos de seu povo, num deserto. Ela morre de sede enquanto ele reza. Uma espada que mata deuses o chama e o leva ao oásis onde o deus dele se banqueteia. O deus ri do sofrimento. Gorr o mata e jura matar todos. A espada lhe dá sombras e monstros e o envenena aos poucos.",
        "Thor viaja com os Guardiões da Galáxia desde Ultimato. Um pedido de socorro o separa deles e o leva de volta a Nova Asgard, na Noruega, que Gorr ataca. No meio da luta, alguém empunha o Mjolnir refeito: Jane Foster. Ela tem câncer em estágio quatro. Foi a Nova Asgard na esperança de que o martelo a curasse, e ele se refez para ela, por causa de um pedido antigo de Thor para que a protegesse. Gorr é repelido, mas leva as crianças da cidade.",
        "Thor, Jane, a rei Valquíria e Korg pedem ajuda na cidade dos deuses. Zeus recusa, por medo, e manda prendê-los. Thor o atravessa com o próprio raio, que Valquíria leva. No caminho, Jane conta da doença. No Reino das Sombras, descobrem o plano: Gorr quer o machado Rompe-Tormentas, que abre o caminho até a Eternidade, entidade que concede um desejo a quem chega. Ele o toma.",
        "Thor fica sabendo que o martelo dá força a Jane e, a cada uso, tira do corpo dela a capacidade de lutar contra o câncer. Mais uma transformação a mata. Ele vai sozinho, divide seu poder com as crianças para enfrentar os monstros e luta com Gorr. Jane aparece mesmo assim e destrói a espada. Os três caem diante da Eternidade.",
        "Thor desiste de lutar e pede a Gorr que escolha amor em vez de vingança. Vai ficar com Jane, que morre em seus braços. Gorr, morrendo também, pede a filha de volta e a entrega a Thor. Ele passa a criá-la. Nos créditos, Zeus manda o filho Hércules atrás de Thor; depois, Jane chega a Valhalla, recebida por Heimdall."
      ]
    },
    "mulherhulk": {
      "title": "Mulher-Hulk: Defensora de Heróis",
      "original": "She-Hulk: Attorney at Law",
      "year": 2022,
      "type": "s",
      "phase": 4,
      "description": "A advogada Jennifer Walters, prima de Bruce Banner, vira Hulk depois de um acidente e passa a cuidar de casos jurídicos de superseres.",
      "consequence": "O Demolidor aparece. Banner apresenta o filho, Skaar.",
      "summary": [
        "Jennifer Walters, promotora em Los Angeles, sofre um acidente de carro com o primo Bruce Banner, e o sangue dele entra num corte dela. Vira Hulk e, ao contrário dele, mantém a consciência desde a primeira vez. Banner a leva a um laboratório no México para treiná-la. Ela quer só voltar ao trabalho.",
        "Depois de se transformar num tribunal para deter uma influenciadora com superforça, é demitida. Um grande escritório a contrata para chefiar a divisão de superseres, com a condição de trabalhar transformada. O primeiro caso é a liberdade condicional de Emil Blonsky, o Abominável. Seguem-se casos da semana: um elfo que muda de forma, um mágico que aprendeu magia de verdade com Wong, a influenciadora que registrou o nome Mulher-Hulk como marca. Um fórum de homens ressentidos na internet começa a ameaçá-la.",
        "Ela enfrenta no tribunal o advogado Matt Murdock, que à noite é o Demolidor, e os dois se envolvem. Num prêmio de advogada do ano, o fórum exibe um vídeo íntimo dela, e ela destrói o telão. É presa, demitida e obrigada a usar um inibidor. O líder do fórum, um bilionário, tinha roubado o sangue dela para virar Hulk.",
        "O último episódio vira uma confusão de vilões e reviravoltas. Jennifer, que fala com a câmera desde o começo, sai da tela, vai ao estúdio da Marvel e exige do robô que escreve as histórias um final menos preguiçoso. Consegue. Banner volta de Sakaar com um filho, Skaar. É nesta série que se menciona a revogação dos Acordos de Sokovia."
      ]
    },
    "lobisomem": {
      "title": "Lobisomem na Noite",
      "original": "Werewolf by Night",
      "year": 2022,
      "type": "e",
      "phase": 4,
      "description": "Caçadores de monstros se reúnem numa mansão para disputar uma relíquia. Um deles não é o que parece.",
      "consequence": "História isolada, sem efeito nos outros títulos até aqui.",
      "summary": [
        "Especial de cerca de uma hora, em preto e branco, no estilo dos filmes de monstro dos anos 1930. Morre Ulysses Bloodstone, o maior caçador de monstros. A viúva convoca cinco caçadores à mansão para uma caçada que decidirá quem herda a relíquia da família, uma pedra vermelha. Elsa, a filha renegada, aparece sem convite para disputar.",
        "A caça acontece num labirinto, e a presa é um monstro com a pedra presa ao corpo. Um dos caçadores, Jack Russell, encontra o monstro e o chama pelo nome: é Ted, uma criatura do pântano, seu amigo, que ele veio resgatar. Jack e Elsa fazem um trato. Ele solta Ted, ela fica com a pedra.",
        "A pedra reage ao toque de Jack e revela que ele também é um monstro. A viúva prende os dois e usa a relíquia para forçar a transformação: Jack vira lobisomem e mata os guardas. Elsa enfrenta os outros caçadores. O lobisomem a reconhece e a poupa. A viúva aponta uma arma para a enteada, e Ted a incinera. Elsa herda a casa e a pedra. Jack acorda na floresta, com Ted ao lado. Não se liga a nenhum outro título."
      ]
    },
    "wakanda": {
      "title": "Pantera Negra: Wakanda para Sempre",
      "original": "Black Panther: Wakanda Forever",
      "year": 2022,
      "type": "f",
      "phase": 4,
      "description": "Depois da morte do rei T'Challa, Wakanda é pressionada pelas potências que querem seu vibranium. A ameaça maior vem do fundo do mar: Namor, rei de Talokan.",
      "consequence": "Shuri se torna a Pantera Negra e faz uma aliança frágil com Namor. T'Challa deixou um filho. Estreia Riri Williams.",
      "summary": [
        "O rei T'Challa está morrendo de uma doença. A irmã, Shuri, tenta recriar em laboratório a erva em forma de coração, queimada por Killmonger, que talvez o curasse. Não consegue a tempo. Um ano depois, a rainha Ramonda enfrenta na ONU países que querem o vibranium de Wakanda e tentam roubá-lo. Shuri, enterrada no trabalho, se recusa a continuar a pesquisa da erva e a fazer o luto.",
        "Os americanos usam um detector novo e acham vibranium no fundo do Atlântico. A expedição é massacrada por guerreiros de pele azul que respiram debaixo d'água. O rei deles, Namor, aparece numa praia de Wakanda, tendo passado por todas as defesas. Culpa o país por ter revelado o metal ao mundo e exige que lhe entreguem quem inventou o detector, ou atacará.",
        "A inventora é Riri Williams, estudante do MIT. Shuri e a general Okoye a encontram; os guerreiros de Namor as alcançam, vencem Okoye e levam as duas jovens. Ramonda destitui Okoye e vai ao Haiti pedir ajuda a Nakia, a espiã que foi o amor de T'Challa. Debaixo d'água, Namor mostra a Shuri sua cidade, Talokan, e conta a origem: no século 16, um povo maia que fugia dos espanhóis tomou uma planta nascida sobre vibranium. Ele propõe uma aliança contra a superfície. Nakia resgata as duas e, na fuga, mata duas guardas.",
        "Namor responde inundando a capital. Ramonda morre afogada ao salvar Riri. O povo se refugia nas montanhas dos Jabari. Depois do funeral, Shuri recria a erva usando um resto da planta de Talokan e a toma. No plano dos ancestrais, quem a espera é Killmonger, que pergunta se ela vai ser nobre como o irmão ou resolver as coisas como ele. Ela veste um traje novo e ordena o contra-ataque, contra o conselho de M'Baku.",
        "Os wakandanos atraem Talokan para um navio. Riri luta numa armadura que ela mesma construiu; Okoye, numa armadura nova. Shuri prende Namor numa aeronave para secá-lo e cai com ele numa praia deserta. Vence. Com a lança no pescoço dele, vê a mãe e, em vez de matar, oferece a paz. Namor se rende. À prima, que protesta, explica: a aliança vai servir a Talokan quando o mundo se voltar contra Wakanda.",
        "Riri volta ao MIT sem a armadura. Shuri planta novas ervas. No dia do desafio pelo trono, quem aparece é M'Baku. Shuri está no Haiti, onde enfim queima as roupas do luto. Na cena dos créditos, Nakia lhe apresenta um menino, filho de T'Challa, que ela criou em segredo. O nome wakandano dele é o do pai."
      ]
    },
    "ggnatal": {
      "title": "Guardiões da Galáxia: Especial de Festas",
      "original": "The Guardians of the Galaxy Holiday Special",
      "year": 2022,
      "type": "e",
      "phase": 4,
      "description": "Mantis e Drax vão à Terra buscar um presente de Natal para animar Peter Quill.",
      "consequence": "Mantis revela que é irmã de Quill.",
      "summary": [
        "Especial de quarenta minutos. Os Guardiões compraram Luganenhum do Colecionador e adotaram uma cadela russa telecinética, Cosmo. Perto do Natal, o pirata Kraglin conta como Yondu estragou a festa quando Peter Quill era criança. Mantis, vendo Quill ainda abatido por causa de Gamora, decide lhe dar o presente perfeito: o herói de infância dele, o ator Kevin Bacon.",
        "Mantis e Drax vão a Hollywood, acham a casa do ator e o levam à força, em transe. Em Luganenhum descobrem, decepcionados, que ele só interpreta heróis. Quill fica horrorizado com o sequestro e manda devolvê-lo. Bacon, ao saber quanto significou para aquele menino, resolve ficar para a festa.",
        "No fim, Quill conta que Yondu depois se arrependeu e lhe deu de presente as pistolas que ele usa até hoje. E Mantis revela o que guardava: também é filha de Ego. É irmã dele."
      ]
    },
    "quantumania": {
      "title": "Homem-Formiga e a Vespa: Quantumania",
      "original": "Ant-Man and the Wasp: Quantumania",
      "year": 2023,
      "type": "f",
      "phase": 5,
      "description": "Scott Lang, a filha Cassie e a família Pym são sugados para o Reino Quântico, onde vive exilado Kang, um conquistador de linhas do tempo.",
      "consequence": "Kang é derrotado, e uma multidão de variantes dele se reúne. Era a preparação para o vilão da saga, plano que a Marvel abandonou.",
      "summary": [
        "Depois de Ultimato, Scott Lang virou celebridade e autor de um livro de memórias. Vive com Hope em San Francisco. A filha, Cassie, de 18 anos, ajuda pessoas desalojadas depois do Blip, já foi presa em protestos e acha o pai acomodado. Num jantar, mostra o que construiu com a ajuda de Hank Pym: um aparelho que manda sinais ao Reino Quântico. Janet van Dyne entra em pânico e tenta desligar. O sinal já foi. Um portal suga os cinco.",
        "Caem separados. Scott e Cassie são recolhidos por rebeldes que lutam contra um governante. Hope, Janet e Hank chegam a uma cidade e procuram um velho aliado de Janet, que hoje serve a esse governante: Kang.",
        "Janet conta o que escondeu por trinta anos. Conheceu Kang ali, quando os dois estavam presos, e o ajudou a consertar o núcleo de energia de sua nave, que os tiraria de lá. Ao tocar o núcleo pronto, viu quem ele era: um conquistador que apagou linhas do tempo inteiras e foi exilado pelas próprias variantes, por medo. Ela usou partículas Pym para aumentar o núcleo até ficar inútil. Kang recuperou parte do poder e construiu um império assim mesmo.",
        "Os soldados de Kang, liderados por uma cabeça gigante numa cadeira flutuante, capturam Scott e Cassie. A cabeça é Darren Cross, o vilão do primeiro filme, deformado. Kang ameaça matar Cassie se Scott não encolher o núcleo de volta. Dentro dele, Scott se multiplica em milhares de versões possíveis de si; Hope chega e o ajuda. Kang fica com o núcleo, não cumpre o trato, leva Janet e manda destruir a nave com Hank dentro.",
        "Hank é salvo por suas formigas, que caíram num ponto onde o tempo corre mais rápido e evoluíram por milênios. Elas atacam a cidadela. Cassie liberta os rebeldes e convence Cross a mudar de lado; ele morre na luta. Janet conserta o núcleo para abrir o portal de volta. Kang ataca Scott, Hope retorna, e os dois o empurram contra o núcleo, que o consome.",
        "A família volta para casa. Scott fica com uma dúvida: Kang avisou que algo pior viria se ele caísse. Nos créditos, um conselho de variantes de Kang comenta a morte do exilado e reúne milhares de outras; depois, Loki e Mobius observam mais uma, um inventor, em 1893. A trama do conselho foi abandonada pela Marvel."
      ]
    },
    "gg3": {
      "title": "Guardiões da Galáxia Vol. 3",
      "original": "Guardians of the Galaxy Vol. 3",
      "year": 2023,
      "type": "f",
      "phase": 5,
      "description": "Rocket é ferido e, para salvá-lo, os Guardiões vão atrás do cientista que o criou.",
      "consequence": "A equipe original se desfaz. Quill volta para a Terra.",
      "summary": [
        "Em Luganenhum, sede dos Guardiões, Peter Quill bebe por causa de Gamora. Um ser dourado chamado Adam, criado pelos Soberanos, ataca e fere Rocket gravemente. Os remédios não funcionam: há no coração dele um dispositivo que o mata se alguém tentar operar. O código que o desliga está com a empresa que o fabricou.",
        "Enquanto os amigos correm, Rocket, inconsciente, lembra. Era um filhote de guaxinim tirado da Terra por um cientista, o Alto Evolucionário, que quer criar uma sociedade perfeita de animais humanizados e descarta cada tentativa. Na jaula fez três amigos, outras cobaias: uma lontra, uma morsa e uma coelha. Rocket resolveu um defeito que o criador não conseguia resolver. Em vez de gratidão, despertou inveja. O cientista decidiu tirar o cérebro dele e incinerar o lote. Na tentativa de fuga, os três amigos foram mortos. Rocket rasgou o rosto do criador e fugiu numa nave.",
        "Os Guardiões invadem a sede da empresa com a ajuda de piratas, entre eles uma Gamora: a de 2014, que veio ao presente em Ultimato e não tem lembrança nenhuma de Quill. Acham a ficha de Rocket, sem o código. Seguem até a Contra-Terra, um planeta de animais humanizados. O Alto Evolucionário o considera falho e o destrói com todos os habitantes. A sacerdotisa dos Soberanos morre ali.",
        "Quill e Groot pegam o código com um assistente do cientista. O coração de Rocket para. Ele se vê diante dos três amigos, que dizem que ainda não é a hora. Quill desliga o dispositivo e o reanima.",
        "Drax, Nebulosa e Mantis, presos na nave do vilão, encontram centenas de crianças modificadas em jaulas. Os Guardiões voltam para tirá-las. Luganenhum inteiro encosta na nave, e a cadela Cosmo faz uma ponte. Rocket encontra jaulas de filhotes, entre eles guaxinins, e lê na placa o nome da própria espécie. O Alto Evolucionário é derrotado por todos juntos. Rocket o tem à mercê e não o mata. Quill fica para trás, congela no espaço e é resgatado por Adam.",
        "A equipe se desfaz. Quill entrega o comando a Rocket e volta à Terra para rever o avô. Mantis parte para descobrir quem é. Gamora volta aos piratas. Drax e Nebulosa ficam em Luganenhum cuidando das crianças. Rocket lidera uma formação nova."
      ]
    },
    "invasao": {
      "title": "Invasão Secreta",
      "original": "Secret Invasion",
      "year": 2023,
      "type": "s",
      "phase": 5,
      "description": "Nick Fury volta à Terra para enfrentar uma facção de Skrulls, alienígenas que mudam de forma e estão infiltrados em governos.",
      "consequence": "James Rhodes tinha sido substituído por uma Skrull, por um período que a série não esclarece.",
      "summary": [
        "Em 1995, Nick Fury prometeu aos Skrulls, refugiados que mudam de forma, achar um planeta para eles. Trinta anos depois, um milhão deles vive escondido na Terra, com rostos humanos. Uma facção jovem, liderada por Gravik, cansou de esperar e quer o planeta. O plano é provocar uma guerra entre Estados Unidos e Rússia. Fury, que passou anos no espaço, volta a pedido do amigo Talos, ex-líder dos Skrulls.",
        "Em Moscou, Gravik explode bombas numa festa pública, assume o rosto de Fury e mata Maria Hill na frente das câmeras. Fury é responsabilizado. O coronel James Rhodes, conselheiro do presidente, o afasta. Descobre-se que a esposa de Fury é uma Skrull e que recebeu ordem de matá-lo; os dois se entendem. A filha de Talos, G'iah, está infiltrada entre os rebeldes e passa informações ao pai.",
        "Gravik tem uma máquina que dá aos Skrulls poderes de outros seres. Ataca o comboio do presidente e mata Talos. O Rhodes ao lado do presidente é, na verdade, uma Skrull chamada Raava, que o empurra a bombardear a base dos rebeldes na Rússia, o que começaria a guerra. O que Gravik quer mesmo é a Colheita: amostras de DNA dos Vingadores, recolhidas por Fury depois da batalha de Ultimato.",
        "Fury leva a Colheita a Gravik em troca de poupar a Terra. Quem a entrega, porém, é G'iah com o rosto dele. Os dois recebem os poderes ao mesmo tempo, e ela o mata. Fury mata Raava, o presidente cancela o ataque, e o Rhodes verdadeiro é encontrado, ainda de roupa de hospital.",
        "O final é amargo. O presidente declara inimiga toda espécie de fora da Terra, e civis começam a atacar quem suspeitam ser Skrull. G'iah faz um acordo com a inteligência britânica. Fury volta ao espaço com a esposa, para negociar a paz com os Kree."
      ]
    },
    "loki2": {
      "title": "Loki (2ª temporada)",
      "original": "Loki",
      "year": 2023,
      "type": "s",
      "phase": 5,
      "description": "Com a AVT rachada e o tear que sustenta as linhas do tempo prestes a ceder, Loki salta pelo tempo sem controle tentando salvar as ramificações.",
      "consequence": "Loki destrói o tear e passa a segurar ele mesmo todas as linhas do tempo, sozinho no centro delas. A AVT passa a vigiar as variantes de Kang.",
      "summary": [
        "Loki volta à AVT e começa a ser arrastado sem controle entre passado, presente e futuro. Reencontra Mobius e avisa das variantes de Aquele Que Permanece. Um técnico, Ouroboros, descobre o problema maior: o Tear Temporal, máquina que transforma tempo bruto em linha do tempo, está sobrecarregado pelas ramificações e vai ceder. Uma general quer voltar a apagá-las e chega a destruir muitas, com bilhões de vidas, antes de ser detida. Sylvie, que largou tudo, trabalha num McDonald's em 1982.",
        "A juíza Renslayer e Miss Minutes, o relógio falante da AVT, procuram em 1893 uma variante do criador: Victor Timely, um inventor gago e trapaceiro, para governar com ele. Na feira mundial de Chicago, todos o perseguem. Loki e Mobius precisam da identidade dele para abrir o Tear. Sylvie quer matá-lo e, ao vê-lo de perto, desiste. Renslayer é mandada para o fim do tempo.",
        "Revela-se que Renslayer comandou os exércitos do criador e que Miss Minutes apagou a memória de todos os funcionários. As duas tentam tomar a agência e falham. Timely entra na plataforma para ampliar o Tear e é desfeito pela radiação em segundos. O Tear explode.",
        "Loki sobrevive, sozinho. A AVT sumiu, e os amigos voltaram às vidas que tinham antes de ser levados: Mobius é um vendedor de jet skis com dois filhos, e nenhum deles o reconhece. Loki os reúne mesmo assim. Sylvie o obriga a admitir por que faz isso: tem medo de ficar só. As ramificações começam a se desfazer em fios. Loki descobre que consegue controlar os saltos no tempo.",
        "Ele volta ao momento antes da explosão e tenta de novo, e de novo, por séculos, estudando física até saber mais que os técnicos. Nada funciona, porque as ramificações são infinitas. Volta então à conversa com Aquele Que Permanece, que explica: o Tear é uma trava. Quando sobrecarrega, apaga tudo menos a linha original. A escolha é matar Sylvie antes que ela o mate, e manter a prisão, ou deixar todos morrerem.",
        "Loki acha outra saída. Despede-se dos amigos, anda até o Tear e o destrói. Pega com as mãos os fios das linhas que morriam e lhes dá vida com a própria magia. Sobe com eles até o trono no fim do tempo e senta, enquanto as ramificações crescem em volta dele em forma de árvore. A AVT passa a vigiar as variantes do criador. Mobius pede demissão e vai ver, de longe, a família que teria tido."
      ]
    },
    "marvels": {
      "title": "As Marvels",
      "original": "The Marvels",
      "year": 2023,
      "type": "f",
      "phase": 5,
      "description": "Os poderes de Carol Danvers, Monica Rambeau e Kamala Khan se entrelaçam, e as três trocam de lugar toda vez que os usam.",
      "consequence": "Monica fica presa num universo paralelo, onde encontra o Fera, dos X-Men. Kamala começa a recrutar jovens heróis.",
      "summary": [
        "Logo depois de Capitã Marvel, Carol Danvers destruiu a inteligência artificial que governava o império Kree. O resultado foi uma guerra civil: em trinta anos, o planeta deles, Hala, perdeu o ar, a água e o sol. Os Kree a chamam de Aniquiladora. Carol nunca contou isso a ninguém.",
        "A nova líder Kree, Dar-Benn, encontra um bracelete idêntico ao de Kamala Khan e o usa para rasgar passagens na rede de portais que liga a galáxia. O primeiro rasgo embaralha os poderes de três pessoas ligadas à luz: quando Carol, Monica Rambeau ou Kamala usam o poder ao mesmo tempo, trocam de lugar. Carol aparece no quarto de Kamala, Kamala no espaço, Monica no meio de uma briga. A sala dos Khan é destruída.",
        "As três se encontram numa colônia de refugiados Skrull que Carol ajudou a fundar. Dar-Benn abre ali um rasgo que suga o ar do planeta para Hala. Elas evacuam quem conseguem. Kamala batiza o trio de Marvels. Monica cobra de Carol os trinta anos de sumiço: ela prometeu voltar quando Monica era criança. Carol admite que tinha vergonha.",
        "Dar-Benn escolhe mundos de que Carol gosta. O seguinte é um planeta coberto de água, onde todos falam cantando e onde Carol é casada com o príncipe por conveniência. A água é sugada. O último alvo é o Sol da Terra. Na estação espacial de Nick Fury, filhotes da gata alienígena Goose engolem a tripulação para evacuá-la.",
        "Dar-Benn toma o bracelete de Kamala e, com os dois, abre um buraco para outro universo. A energia a destrói. Para fechá-lo, alguém precisa fazê-lo do outro lado. Carol e Kamala carregam Monica de energia, e ela atravessa. Carol voa até o sol de Hala e o reacende.",
        "Carol se muda para a casa dos Rambeau, na Terra. Kamala procura Kate Bishop para montar uma equipe e cita Cassie Lang. Na cena dos créditos, Monica acorda num hospital. Ao lado da cama está a mãe dela, viva, que não a conhece e usa um uniforme de heroína. O médico é o Fera, dos X-Men, que explica que ela veio de uma realidade paralela."
      ]
    },
    "eco": {
      "title": "Eco",
      "original": "Echo",
      "year": 2024,
      "type": "s",
      "phase": 5,
      "description": "Maya Lopez, ex-chefe de uma facção do Rei do Crime, volta à cidade natal em Oklahoma perseguida pelo império que ajudou a construir.",
      "consequence": "Wilson Fisk decide concorrer a prefeito de Nova York.",
      "summary": [
        "A série abre com uma lenda dos Choctaw e volta a 2007: um acidente de carro mata a mãe de Maya Lopez e custa à menina, que é surda, uma perna. O pai a leva de Oklahoma para Nova York e vira comandante de uma gangue de Wilson Fisk, que trata Maya como sobrinha. Anos depois o pai é morto por Ronin. Fisk a toma como braço direito. Como se viu em Gavião Arqueiro, ela descobre que foi o próprio Fisk quem armou a morte e atira no rosto dele.",
        "Cinco meses depois, caçada pela organização, Maya volta a Tamaha, a cidade natal. Reencontra o tio, a prima e o primo, e evita a avó, que a culpa pelo acidente. Quer tomar o império de Fisk e explode um depósito dele depois de sequestrar um trem. Começa a ter visões de antepassadas, e suas mãos passam a brilhar.",
        "Fisk sobreviveu, cego de um olho. Vai a Tamaha e oferece a ela tudo o que tem, como herdeira, se voltar com ele. Maya pensa em matá-lo e desiste quando ele conta que matou o próprio pai a marteladas, ainda menino. Ela vai embora sem ele.",
        "Fisk sequestra a avó e a prima durante a festa anual da comunidade. A família reage. Maya, vestida com o que a avó costurou, reparte com as parentes a força das ancestrais e, em vez de matar Fisk, o leva de volta àquela noite da infância para tentar tirar a dor dele. Ele se desvencilha, furioso, e foge. Maya se reconcilia com a família. Na cena dos créditos, no avião, Fisk assiste a um debate sobre a eleição para prefeito de Nova York."
      ]
    },
    "deadpool": {
      "title": "Deadpool & Wolverine",
      "original": "Deadpool & Wolverine",
      "year": 2024,
      "type": "f",
      "phase": 5,
      "description": "A AVT avisa Wade Wilson que o universo dele vai acabar. Para salvá-lo, ele sai atrás de um Wolverine de outra realidade.",
      "consequence": "Traz o universo dos filmes de X-Men da Fox para dentro do MCU e explica os seres-âncora.",
      "summary": [
        "Em 2018, Wade Wilson usa um aparelho de viagem no tempo para ir de seu universo, a Terra-10005, à linha principal do MCU e se candidatar aos Vingadores. Happy Hogan o entrevista e recusa. Seis anos depois, separado da namorada e sem uniforme, vende carros usados.",
        "No aniversário, é levado pela AVT. Um agente chamado Paradox lhe oferece um lugar na linha principal e explica por quê: o universo de Wade está morrendo. Cada universo depende de um ser-âncora, e o dali era Logan, o Wolverine, que morreu. O definhamento leva milhares de anos, e Paradox, sem autorização dos chefes, construiu uma máquina para acabar logo com aquilo. Wade recusa a oferta, rouba um aparelho e sai pelo multiverso à procura de outro Logan.",
        "Depois de vários, traz um que Paradox chama de o pior de todos: no mundo dele, abandonou os X-Men, e todos foram mortos enquanto ele bebia. Paradox joga os dois no Vazio, o depósito do fim do tempo. Lá manda Cassandra Nova, irmã gêmea de Charles Xavier, telepata descartada quando criança, que tem um acordo com a AVT. Wade mente a Logan que a agência pode consertar o passado dele, e os dois se aliam, entre brigas.",
        "Escapam de Cassandra e encontram um grupo de resistência formado por heróis de filmes antigos ou nunca feitos: Elektra, Blade, Gambit e Laura, a jovem que acompanhou o outro Logan até a morte. Laura convence Logan a lutar. Juntos, invadem a base de Cassandra e a imobilizam com um capacete que bloqueia telepatia. Um traidor a fere de morte. Logan insiste em tirar o capacete para que ela se cure, e ela, em troca, abre um portal para a Terra-10005.",
        "Cassandra fica sabendo da máquina de Paradox e vai atrás, querendo usá-la para apagar todas as linhas do tempo e deixar só o Vazio. Chama um exército de variantes de Deadpool. Para desligar a máquina é preciso interromper o fluxo de energia com o corpo, o que mata qualquer um. Wade e Logan seguram os cabos juntos, de mãos dadas, dividem a carga e sobrevivem. Cassandra é desintegrada.",
        "A AVT prende Paradox e confirma que a Terra-10005 parou de morrer. Wade pede que mudem o passado de Logan, e a agente recusa: foi aquele passado que fez dele quem é. Logan pode ficar. Os dois jantam com os amigos de Wade, com Laura à mesa."
      ]
    },
    "agatha": {
      "title": "Agatha Desde Sempre",
      "original": "Agatha All Along",
      "year": 2024,
      "type": "s",
      "phase": 5,
      "description": "Livre do feitiço de Wanda e sem poderes, Agatha Harkness reúne um clã para percorrer a Estrada das Bruxas. Um adolescente misterioso insiste em ir junto.",
      "consequence": "O adolescente é Billy Maximoff, filho de Wanda, vivendo em outro corpo. Ele sai à procura do irmão, Tommy.",
      "summary": [
        "Três anos depois de WandaVision, Agatha Harkness segue em Westview, presa ao feitiço de Wanda, convencida de que é uma detetive numa série policial. Um adolescente invade a casa. Uma agente do FBI, Rio Vidal, que é bruxa e tem um passado com Agatha, termina de quebrar o encanto. Agatha está livre e sem poder. Rio avisa que sete bruxas vingativas vêm aí.",
        "O rapaz, cujo nome um feitiço impede de ser dito, quer percorrer a Estrada das Bruxas, caminho lendário que dá a quem chega ao fim aquilo que lhe falta. Agatha junta um clã às pressas: Lilia, vidente; Jen, mestra de poções; Alice, filha de uma roqueira famosa, bruxa de proteção; e uma moradora da cidade. Elas cantam a balada, um alçapão se abre, e descem.",
        "A Estrada é uma série de casas, cada uma com uma prova ligada a uma delas. Na primeira, vinho envenenado; a moradora morre. Rio entra no lugar dela. Na segunda, um estúdio de gravação e o demônio que persegue a família de Alice. Na terceira, uma cabana e uma sessão espírita: a mãe de Agatha a possui, Alice tenta salvá-la, e Agatha, por reflexo, suga a magia de Alice e a mata. O rapaz, furioso, mostra pela primeira vez um poder igual ao de Wanda.",
        "Um episódio conta quem ele é. William Kaplan, 13 anos, voltava de sua festa de bar mitzvah quando o carro bateu na barreira de Westview, que caía. Morreu por instantes. Acordou outro: a alma de Billy Maximoff, filho de Wanda, tinha entrado no corpo. Três anos depois, quer achar o irmão, Tommy.",
        "Na prova de Lilia, descobre-se que Rio é a Morte. Lilia se sacrifica para destruir as sete perseguidoras. A Morte quer Billy, que para ela é uma vida fora do lugar. Na última prova, ele usa o poder para pôr a alma de Tommy no corpo de um menino que se afogava. Agatha, que foge da Morte há séculos, a beija no lugar de Billy e morre.",
        "O final conta o resto. Em 1750, Agatha teve um filho, Nicholas, e a Morte lhe deu alguns anos com ele. Os dois inventaram a balada na estrada. Depois que ele morreu, ela passou séculos usando a canção para atrair bruxas e roubar seu poder. A Estrada nunca existiu. Esta foi real porque Billy, sem saber, a criou. Ele se culpa pelas mortes. O fantasma de Agatha aparece, e os dois saem para procurar Tommy."
      ]
    },
    "cap4": {
      "title": "Capitão América: Admirável Mundo Novo",
      "original": "Captain America: Brave New World",
      "year": 2025,
      "type": "f",
      "phase": 5,
      "description": "Sam Wilson, agora Capitão América, é envolvido num incidente internacional depois de um atentado contra o presidente Thaddeus Ross. A disputa é pelo adamantium, metal descoberto na ilha Celestial.",
      "consequence": "Ross vira o Hulk Vermelho e acaba preso. Sam decide remontar os Vingadores. Samuel Sterns avisa que outros mundos estão chegando.",
      "summary": [
        "Cinco meses depois de eleito presidente, Thaddeus Ross manda Sam Wilson e Joaquin Torres, o novo Falcão, recuperar no México uma carga roubada por mercenários. Sam hesita em levar Joaquin a missões perigosas, porque nenhum dos dois tem poderes. Os dois treinam com Isaiah Bradley, o supersoldado que o governo manteve preso por décadas.",
        "Ross convida Sam à Casa Branca e pede que ele remonte os Vingadores. Sam leva Isaiah. Diante de chefes de Estado, Ross revela o que era a carga: adamantium, metal encontrado na ilha que se formou quando um Celestial emergiu no oceano Índico, roubado de uma mineração japonesa. Propõe um tratado para dividir a exploração. No meio do discurso toca uma música, e vários homens na sala, entre eles Isaiah, atiram no presidente. Depois não lembram de nada.",
        "O Japão acusa Ross do roubo e do atentado. Sam investiga contra a ordem do presidente e chega a uma prisão secreta. Lá esteve por muitos anos Samuel Sterns, o biólogo contaminado com o sangue de Banner no Harlem, que ficou com inteligência fora do comum. Ross o culpou em público pelo desastre e o manteve preso, usando-o: Sterns planejou sua carreira até a presidência e fabrica os comprimidos que mantêm vivo seu coração doente. A liberdade prometida nunca veio. Sterns controla pessoas por luz e som, e a música é o gatilho.",
        "Na ilha, Estados Unidos e Japão disputam o metal com frotas. Sterns controla dois pilotos americanos, que atacam os japoneses. Sam e Joaquin interceptam os aviões e convencem o Japão a recuar; Joaquin é abatido e fica em estado grave. Bucky Barnes aparece para consolar Sam.",
        "Sterns se entrega. Numa coletiva, uma gravação expõe sua relação com o presidente. Os comprimidos tinham radiação gama: Ross perde o controle e vira um Hulk vermelho. Destrói parte da Casa Branca. Sam o leva para um parque de cerejeiras, apanha, fere-o o bastante para ser ouvido e fala da filha dele, Betty, com quem ele passeava ali. Ross volta ao normal.",
        "Isaiah é inocentado, e o tratado é assinado. Ross renuncia e se entrega à Balsa, onde Sam e Betty o visitam. Sam chama Joaquin, em recuperação, para os Vingadores. Na cena pós-créditos, Sterns, preso, avisa Sam de que este não é o único mundo e de que os outros estão a caminho."
      ]
    },
    "demolidor": {
      "title": "Demolidor: Renascido",
      "original": "Daredevil: Born Again",
      "year": 2025,
      "type": "s",
      "phase": 5,
      "description": "Matt Murdock aposentou a máscara depois do assassinato do melhor amigo, e Wilson Fisk se elegeu prefeito de Nova York. Nenhum dos dois consegue deixar o passado quieto. Duas temporadas, 2025 e 2026.",
      "consequence": "No fim da segunda temporada, Vanessa Fisk está morta, Fisk aceita o exílio, a força-tarefa contra vigilantes é desmontada e Matt, que revelou em público ser o Demolidor, está preso.",
      "summary": [
        "Primeira temporada. Matt Murdock, Karen Page e Foggy Nelson comemoram num bar quando Benjamin Poindexter, ex-agente do FBI que nunca erra um arremesso, mata Foggy na calçada. Matt quase o mata e pendura a máscara. Um ano depois tem outro escritório e namora uma terapeuta, Heather Glenn. Karen se mudou. Wilson Fisk, recuperado do tiro de Maya, é eleito prefeito de Nova York com um discurso contra vigilantes. A esposa, Vanessa, que comandou os negócios na ausência dele, teve um amante.",
        "Hector Ayala, que age mascarado como Tigre Branco, separa uma briga no metrô, e um policial corrupto morre atropelado por um trem. Matt o defende e, para ganhar, revela no tribunal a identidade do cliente. Hector é absolvido e morto dias depois por um homem com o símbolo do Justiceiro. Matt procura Frank Castle, que o despreza por ter poupado o assassino do amigo.",
        "Um assassino em série que pinta murais com sangue sequestra a sobrinha de Hector. Matt volta a ser o Demolidor para salvá-la. Fisk aproveita o caso para criar uma força-tarefa de policiais contra vigilantes, com o emblema do Justiceiro, e toca um plano para o porto de Red Hook. Vanessa manda matar o amante a pedido do marido. Matt descobre que foi ela quem contratou Poindexter para matar Foggy, por causa de algo que ele sabia sobre o porto.",
        "Poindexter foge da cadeia e, num baile, atira em Fisk. Matt entra na frente da bala. Fisk apaga as luzes da cidade e manda matá-lo; Frank Castle e Karen o protegem. Frank é capturado. Fisk mata o comissário de polícia com as próprias mãos, decreta lei marcial e prende opositores. Matt começa a reunir policiais honestos.",
        "Segunda temporada, seis meses depois. Matt lidera a resistência com Karen e a detetive Jessica Jones. Um navio leva armas de guerra ao porto, que Fisk transformou em zona livre. Matt é desmascarado num ataque, e Fisk pede à população que o encontre. Poindexter, solto por Matt, passa a matar agentes da força-tarefa. Num atentado contra Fisk, Vanessa atira nele, e um estilhaço de vidro a atinge na cabeça. Ela morre depois da cirurgia. Fisk mata o cirurgião.",
        "Matt e Jessica destroem o arsenal. Matt vence Fisk numa luta e o poupa. Karen é presa. No julgamento dela, Matt chama o prefeito como testemunha, exibe o depoimento gravado de um marinheiro assassinado e revela em público que é o Demolidor. A governadora oferece a Fisk o exílio no lugar da prisão. Ele ainda mata manifestantes antes de aceitar. A força-tarefa é desmontada e seus agentes, presos. Matt e Karen tentam recomeçar, e ele é preso pelo que fez de máscara."
      ]
    },
    "thunder": {
      "title": "Thunderbolts*",
      "original": "Thunderbolts*",
      "year": 2025,
      "type": "f",
      "phase": 5,
      "description": "Yelena Belova e outros agentes descartáveis de Valentina de Fontaine caem numa armadilha armada pela própria chefe. Lá encontram Bob, um homem com poderes que nem ele entende.",
      "consequence": "Valentina apresenta o grupo ao público como os Novos Vingadores. Catorze meses depois, uma nave com o número 4 entra na órbita da Terra.",
      "summary": [
        "Yelena Belova está esgotada. Faz trabalhos sujos para Valentina de Fontaine, diretora da CIA, e destrói para ela um laboratório na Malásia. Valentina está apagando as provas de um projeto ilegal de sua empresa, o Sentinela, porque enfrenta um processo de afastamento no Congresso. Yelena pede um trabalho mais público. Valentina promete uma última missão.",
        "A missão é um cofre no deserto. Chegam também John Walker, Ava Starr e Antonia Dreykov, cada um com ordem de matar outro. Ava mata Antonia. Era uma queima de arquivo: o cofre vai incinerar todos. No meio da sala acorda, numa cápsula, um homem de pijama sem memória, Bob. Quem o toca revê a pior lembrança da própria vida. Os quatro escapam juntos. Bob atrai os tiros dos soldados para os outros fugirem, não se fere, sobe ao céu sem querer e cai.",
        "Bob é o único sobrevivente do Projeto Sentinela, tentativa de fabricar um herói. Valentina o leva para a antiga Torre dos Vingadores, em Nova York, e resolve apresentá-lo à imprensa como seu salvador. Alexei Shostakov, o Guardião Vermelho, que ouviu o plano trabalhando de motorista, recolhe Yelena, Walker e Ava. Walker batiza o grupo de Thunderbolts, nome do time de futebol infantil de Yelena. O deputado Bucky Barnes, que investiga Valentina, os captura para que deponham e, avisado pela assistente dela sobre Bob, os leva a Nova York.",
        "Na torre, Bob, de uniforme dourado, vence todos em segundos e os deixa ir, por não vê-los como ameaça. O poder lhe sobe à cabeça, e ele se volta contra Valentina. A assistente aciona um dispositivo de emergência, e isso solta o Vácuo: a parte de Bob feita de depressão e desprezo por si mesmo. Uma sombra cobre Manhattan, e cada pessoa tocada vira uma silhueta, presa na pior memória que tem.",
        "Yelena entende que aquilo só se resolve por dentro e entra na sombra. Passa pelas próprias lembranças da Sala Vermelha e acha Bob escondido no quarto de infância, onde se protegia do pai. Os outros entram atrás. Atravessam com ele o abuso e as drogas, até o laboratório onde tudo começou. Ali o Vácuo os domina. Quanto mais Bob bate nele, mais é engolido. Eles o abraçam e dizem que estão ali. A luz volta.",
        "O grupo vai prender Valentina. Ela abre uma porta, e do outro lado há uma coletiva de imprensa: apresenta-os como os Novos Vingadores e fica com o crédito. Eles aceitam o papel, e Yelena lhe diz ao ouvido que agora ela pertence a eles.",
        "Cena pós-créditos, catorze meses depois. Os Novos Vingadores, com Bob, discutem a briga com Sam Wilson, que tem a própria equipe e os processa pelo uso do nome. Um alarme mostra uma nave de fora desta dimensão entrando em órbita, com um 4 no casco."
      ]
    },
    "coracao": {
      "title": "Coração de Ferro",
      "original": "Ironheart",
      "year": 2025,
      "type": "s",
      "phase": 5,
      "description": "Riri Williams, gênia de Chicago expulsa do MIT, constrói a própria armadura e se envolve com uma gangue liderada por um homem que usa magia.",
      "consequence": "Apresenta Mefisto, figura demoníaca que faz pactos.",
      "summary": [
        "Riri Williams, estudante do MIT, é expulsa por vender trabalhos aos colegas para financiar sua armadura. Volta a Chicago. Cinco anos antes, a melhor amiga, Natalie, e o padrasto foram mortos num tiroteio diante da oficina da família, e ela não fez o luto. Um desconhecido a recruta para a equipe de Parker Robbins, o Capuz, que usa uma capa capaz de torná-lo invisível e desviar balas. Riri aceita três assaltos para pagar o projeto.",
        "Tentando reconstruir a inteligência artificial da armadura, ela escaneia o próprio cérebro, e o que nasce é uma cópia de Natalie, com voz e jeito. A equipe sabota empresas de milionários e obriga os donos a pô-la na folha de pagamento. Para conseguir peças, Riri chantageia um vendedor tímido, Joe, que se revela Ezekiel Stane, filho de Obadiah Stane, o vilão do primeiro Homem de Ferro. A cada uso da capa, veias negras sobem pelo corpo de Parker.",
        "Riri descobre que Parker mandou matar o integrante que ela substituiu e, num assalto, corta um pedaço da capa para estudar. Um colega tenta matá-la e morre na armadilha. A mãe de Riri a leva a uma loja de magia, onde identificam a capa como objeto de uma dimensão sombria. Parker manda matar Riri. Stane, preso por causa dela e depois equipado com implantes pela gangue, desmonta a armadura dela e a poupa. A cópia de Natalie é apagada.",
        "Riri constrói uma armadura nova na oficina do padrasto, com feitiços gravados no metal, e derrota Parker, que fica sem poder. Um episódio mostra de onde veio a capa: um homem lhe ofereceu poder, respeito e riqueza, e ele aceitou.",
        "O homem aparece para Riri. É Mefisto. Oferece o que ela quiser, e ela, com a condição de que as pessoas que ama sejam poupadas, aceita. Na oficina, Natalie está de volta, viva. As mesmas veias negras começam a subir pelo braço de Riri."
      ]
    },
    "quarteto": {
      "title": "Quarteto Fantástico: Primeiros Passos",
      "original": "The Fantastic Four: First Steps",
      "year": 2025,
      "type": "f",
      "phase": 6,
      "description": "Numa Terra retrofuturista dos anos 1960, a Terra-828, o Quarteto Fantástico é a única equipe de heróis. Sue Storm está grávida quando uma arauta prateada anuncia que Galactus vem devorar o planeta.",
      "consequence": "Nasce Franklin Richards, criança com poder enorme. Quatro anos depois, um homem de capuz verde, com uma máscara de metal na mão, visita o menino.",
      "summary": [
        "Terra-828, 1964. Faz quatro anos que os astronautas Reed Richards, Sue Storm, Johnny Storm e Ben Grimm voltaram do espaço com poderes, depois de atingidos por raios cósmicos. São heróis, cientistas e celebridades. O mundo avançou muito graças a eles, e a fundação de Sue convenceu boa parte dos países a viver em paz. Reed e Sue descobrem que vão ter um filho, e o público se pergunta se a criança terá poderes.",
        "Meses depois, uma mulher prateada sobre uma prancha pousa em Nova York e avisa que o planeta foi marcado para ser consumido por Galactus. Reed confirma: planetas inteiros têm desaparecido. O Quarteto segue o rastro dela no espaço e chega logo depois de um mundo ser devorado. Capturados, são levados a Galactus, que explica a fome que nunca passa. Ele sente no bebê de Sue um poder cósmico e propõe poupar a Terra em troca da criança. Induz o parto. A equipe recusa e foge, com a Surfista atrás. Sue dá à luz Franklin na nave.",
        "Um mês depois, Reed conta tudo numa coletiva. O mundo se revolta: uma família escolheu um bebê em vez de bilhões. Com Galactus a caminho e protestos na rua, Sue desce com o filho no colo e fala à multidão. Não vão entregar a criança e não vão abandonar ninguém. Reed propõe mover o planeta inteiro para outro sistema solar, com pontes de teletransporte em todos os continentes. Sue convence os países a construí-las.",
        "Johnny decifra a língua da Surfista a partir de gravações de mundos destruídos. Quando as pontes se ligam, ela volta e as destrói uma a uma. Johnny a detém na última, em Times Square, chamando-a pelo nome: Shalla-Bal. Ela serve Galactus para poupar o próprio planeta. Ao ouvir as vozes dos mundos que ajudou a matar, hesita e vai embora.",
        "O plano muda: usar a ponte que sobrou para mandar Galactus para longe, com Franklin de isca. Sue negocia com o governante de uma cidade subterrânea o abrigo dos nova-iorquinos. Galactus não cai na armadilha, atravessa a cidade e pega o bebê. Sue o empurra na direção do portal com um campo de força, gastando tudo o que tem, enquanto Reed resgata o filho. Johnny vai dar o último empurrão ao custo da vida, e Shalla-Bal toma o lugar dele, atravessando com Galactus. Sue morre. Franklin, no colo dela, a traz de volta.",
        "Cena no meio dos créditos, quatro anos depois. Sue lê para Franklin em casa, sai para buscar outro livro e, ao voltar, encontra o menino diante de um homem de capa verde, que segura uma máscara de metal. O rosto não aparece."
      ]
    },
    "magnum": {
      "title": "Magnum",
      "original": "Wonder Man",
      "year": 2026,
      "type": "s",
      "phase": 6,
      "description": "Simon Williams, ator sem sorte em Hollywood, disputa o papel principal no remake de um filme de super-herói enquanto esconde que tem poderes de verdade. Trevor Slattery vira seu parceiro de cena.",
      "consequence": "História isolada, sem ligação conhecida com Doomsday.",
      "summary": [
        "Simon Williams é ator em Los Angeles, talentoso e difícil, que perde papéis por discutir cada cena. Esconde desde criança que tem poderes: uma energia que explode quando se descontrola. Em Hollywood isso acaba com qualquer carreira. Existe uma regra do setor que proíbe gente com poderes de trabalhar em filmagens, criada depois que um ator capaz de atravessar matéria fez um colega desaparecer dentro dele.",
        "Demitido de uma série de terror, Simon consegue um teste para o papel principal do remake de Magnum, filme de super-herói que amava quando menino. Fica amigo de Trevor Slattery, o ator que se passou pelo Mandarim, foi levado da prisão pelos Dez Anéis e voltou a Hollywood querendo uma segunda chance. Um agente do Controle de Danos desconfia de Simon e o vigia. Os poderes aparecem durante um teste tenso.",
        "Os dois ganham os papéis, e a filmagem começa. Um set é destruído. Trevor assume a culpa: apresenta-se de novo como terrorista perigoso para proteger o amigo e é levado a uma prisão de segurança máxima do Controle de Danos.",
        "Simon conclui que o sucesso não vale nada se não puder proteger quem importa. Passa semanas estudando um funcionário comum do órgão, como estudaria um personagem, entra na prisão no lugar dele e usa os poderes abertamente pela primeira vez, inclusive para voar. Tira Trevor de lá. Muita gente agora sabe o que ele é. Não há cena pós-créditos nem ligação conhecida com Doomsday."
      ]
    },
    "justiceiro": {
      "title": "The Punisher: One Last Kill",
      "original": "The Punisher: One Last Kill",
      "year": 2026,
      "type": "e",
      "phase": 6,
      "description": "Especial de cerca de uma hora. Frank Castle, isolado e à beira de desistir, tem a cabeça posta a prêmio por uma chefe mafiosa.",
      "consequence": "Frank volta às ruas como Justiceiro. Aparece em seguida em Homem-Aranha: Um Novo Dia.",
      "summary": [
        "Especial de cerca de uma hora, passado ao mesmo tempo que a segunda temporada de Demolidor: Renascido, depois que Frank Castle fugiu da prisão do prefeito Fisk. Ele mora num prédio pobre e vê gente do passado que não está ali. Tranca o equipamento de Justiceiro e vai ao túmulo da família para se matar. Uma visão da filha o impede.",
        "Na rua, a chefe mafiosa Ma Gnucci o encurrala e avisa que pôs sua cabeça a prêmio. Em casa, ele imagina Karen Page, que lhe cobra os fracassos e o consola. Criminosos de toda a região invadem o prédio à procura dele, atacam moradores e incendeiam o apartamento. Frank abre caminho matando até o telhado e pula.",
        "Poderia ir atrás de Gnucci. Em vez disso, fica para proteger um comerciante, a mulher e a filha. A menina lhe dá uma rosa de papel, que ele deixa no túmulo da filha. Conclui que ainda tem trabalho. Volta às ruas com uniforme e arsenal novos e mata o chefe de um grupo que atacava inocentes. É esse Frank que aparece em Homem-Aranha: Um Novo Dia."
      ]
    },
    "aranha4": {
      "title": "Homem-Aranha: Um Novo Dia",
      "original": "Spider-Man: Brand New Day",
      "year": 2026,
      "type": "f",
      "phase": 6,
      "description": "Quatro anos depois de Sem Volta para Casa, Peter Parker é um adulto anônimo que protege Nova York sozinho, já que ninguém lembra que ele existe. Uma série de ataques a prisões do governo o põe no caminho do Justiceiro, de Bruce Banner e de uma jovem telepata.",
      "consequence": "Jean Grey passa a existir no MCU e deixa Nova York. Peter ganha teia orgânica, reaproxima-se de Ned e MJ sem que eles recuperem a memória, e decide parar de agir sozinho. A cena pós-créditos registra um Homem-Aranha fora da Terra.",
      "summary": [
        "Quatro anos depois do feitiço, ninguém sabe quem é Peter Parker. Ele protege Nova York como Homem-Aranha, enfrenta o Escorpião e ninjas, ganhou a confiança de uma detetive e visita o túmulo da tia. Ao perseguir um tanque roubado, impede Frank Castle de causar um desastre. O tanque bate numa prisão do Departamento de Controle de Danos. O motorista estava possuído: um telepata salta de corpo em corpo para tirar o Escorpião da cadeia. A única mente em que não consegue entrar é a de Peter.",
        "Yelena Belova avisa Peter de que várias instalações do órgão foram atacadas por alguém que procura algo chamado V-Max. O diretor nega saber do que se trata. MJ e Ned voltam do MIT, e Peter a vê beijar o namorado. Na manhã seguinte, os sentidos dele estão mais fortes e teia sai de seus pulsos. Num novo ataque, perde o controle, espanca o Escorpião e fere um policial.",
        "Procura Bruce Banner, agora professor universitário, que mantém o Hulk contido com um inibidor e o ajuda a fazer um para si. Enquanto isso, o telepata acha o apartamento de Peter, lê uma carta que ele escreveu a MJ e nunca enviou, e quase a mata. Peter a salva e descobre quem é: uma jovem, Jean Grey. Ele esconde MJ no barco de Castle, onde ela ajuda a terminar os inibidores.",
        "Jean ataca a sede do órgão dentro do corpo de Banner, arranca o inibidor dele e solta o Hulk. Peter luta com o Hulk e o acalma, enquanto ela usa Castle para abrir um cofre. Peter aplica nela um inibidor, e o diretor a seda. Antes de apagar, ela diz um nome: Sara. MJ encontrou a carta. Peter pede desculpas por nunca ter contado e diz que a ama. Ela não lembra dele e não corresponde, mas o convida ao apartamento que divide com Ned, onde ele, de máscara, se dá bem com os dois. Yelena acha nos arquivos quem é Sara: a irmã mais velha de Jean, também telepata, sequestrada pelo órgão.",
        "Numa instalação em Roosevelt Island, o diretor faz experimentos em Jean. Ela entende o que era V-Max: a etiqueta gasta da saída de ar da cela, a última coisa que Sara viu antes de morrer e transmitiu à irmã. Enfurecida, cria um campo que paralisa todos dentro dele, menos Peter, e lança os ninjas contra ele. Peter tira o inibidor, aceita os poderes e a impede de matar o diretor.",
        "Ele a deixa entrar em sua mente. Ela vê a lembrança da tia May dizendo que o ama como ele é, e os dois se reconhecem na perda. Castle atira em Jean de longe; Peter se põe na frente e fica entre a vida e a morte. Ela desfaz o campo e o mantém vivo à distância. Depois deixa a cidade. O diretor desaparece, e o órgão passa a ser investigado.",
        "Diante do túmulo da tia, Peter promete parar de fazer tudo sozinho. Reapresenta-se a Ned com o aperto de mão antigo. Na cena pós-créditos, o aplicativo de Ned, que rastreia aparições do Homem-Aranha, registra uma fora da Terra."
      ]
    },
    "visionquest": {
      "title": "VisionQuest",
      "original": "VisionQuest",
      "year": 2026,
      "type": "s",
      "phase": 6,
      "description": "O Visão branco tenta recuperar a memória e a humanidade. Fecha a trilogia iniciada em WandaVision e continuada em Agatha Desde Sempre. Ultron está de volta.",
      "consequence": "Estreia em 14 de outubro de 2026 no Disney+.",
      "upcoming": true,
      "summary": [
        "Estreia em 14 de outubro de 2026. Segundo a divulgação, acompanha o Visão branco, reconstruído sem lembranças no fim de WandaVision, tentando recuperar a memória e a humanidade. O elenco anunciado traz de volta Ultron e dá forma humana às inteligências artificiais de Tony Stark, como J.A.R.V.I.S. e F.R.I.D.A.Y. Tommy Maximoff, o outro filho de Wanda, aparece.",
        "É apresentada como o fim de uma trilogia iniciada em WandaVision e continuada em Agatha Desde Sempre. Este guia será atualizado quando a série terminar."
      ]
    },
    "doomsday": {
      "title": "Vingadores: Doomsday",
      "original": "Avengers: Doomsday",
      "year": 2026,
      "type": "f",
      "phase": 6,
      "description": "O multiverso está em colapso, e heróis de três universos se encontram: os Vingadores, os Novos Vingadores e Wakanda, da Terra principal; o Quarteto Fantástico, da Terra-828; e os X-Men dos filmes da Fox. No caminho deles está Victor von Doom, o Doutor Destino. Passa-se catorze meses depois de Thunderbolts*.",
      "consequence": "Estreia em 18 de dezembro de 2026.",
      "upcoming": true,
      "summary": [
        "Ainda não estreou. O que se sabe está reunido na seção Antes de Doomsday, no topo da página: a premissa divulgada, o elenco, o que os trailers mostraram e as perguntas em aberto."
      ]
    },
    "guerras": {
      "title": "Vingadores: Guerras Secretas",
      "original": "Avengers: Secret Wars",
      "year": 2027,
      "type": "f",
      "phase": 6,
      "description": "Continuação direta de Doomsday e final da Saga do Multiverso.",
      "consequence": "Previsto para 17 de dezembro de 2027.",
      "upcoming": true,
      "summary": [
        "Previsto para 17 de dezembro de 2027, com os mesmos diretores e roteiristas de Doomsday. É o encerramento da Saga do Multiverso. O título vem de duas histórias em quadrinhos em que heróis de vários mundos acabam reunidos num planeta só, o Mundo de Batalha; na versão de 2015, quem governa esse planeta é o Doutor Destino. A Marvel não divulgou a trama."
      ]
    }
  },
  "watch": {
    "short": [
      "estranho2",
      "cap4",
      "thunder",
      "quarteto"
    ],
    "list": [
      {
        "id": "xmen1",
        "minutes": 104,
        "why": "Professor X, Magneto, Ciclope e Mística, deste elenco, estão em Doomsday."
      },
      {
        "id": "xmen2",
        "minutes": 134,
        "why": "Apresenta Noturno, também no elenco, e a aliança forçada entre X-Men e Magneto."
      },
      {
        "id": "cap1",
        "minutes": 124,
        "why": "Chris Evans e Hayley Atwell estão no elenco de Doomsday."
      },
      {
        "id": "ving1",
        "minutes": 143,
        "why": "A formação original e a primeira aparição de Thanos."
      },
      {
        "id": "ginfinita",
        "minutes": 149,
        "why": "O maior evento da primeira saga, dos mesmos diretores de Doomsday."
      },
      {
        "id": "ultimato",
        "minutes": 181,
        "why": "Encerra a primeira saga e explica onde cada Vingador original foi parar."
      },
      {
        "id": "loki1",
        "minutes": 570,
        "why": "É onde o multiverso nasce e onde se explica por que ele ainda não desabou. Duas temporadas, 12 episódios.",
        "name": "Loki (1ª e 2ª temporadas)"
      },
      {
        "id": "shangchi",
        "minutes": 132,
        "why": "Simu Liu está no elenco, e o sinal dos anéis nunca foi explicado."
      },
      {
        "id": "aranha3",
        "minutes": 148,
        "why": "Primeiro contato direto do MCU com outros universos de cinema."
      },
      {
        "id": "estranho2",
        "minutes": 126,
        "why": "Explica as incursões, o perigo central da reta final da saga."
      },
      {
        "id": "wakanda",
        "minutes": 161,
        "why": "Shuri, M'Baku e Namor estão no elenco de Doomsday."
      },
      {
        "id": "deadpool",
        "minutes": 128,
        "why": "Liga os X-Men da Fox ao MCU. Deadpool e Wolverine não estão no elenco anunciado."
      },
      {
        "id": "cap4",
        "minutes": 118,
        "why": "Mostra Sam Wilson como líder e por que os Vingadores voltam a existir."
      },
      {
        "id": "thunder",
        "minutes": 127,
        "why": "Forma os Novos Vingadores e termina na cena que leva direto a Doomsday."
      },
      {
        "id": "quarteto",
        "minutes": 115,
        "why": "Apresenta o Quarteto e tem a única cena do Doutor Destino até agora."
      }
    ]
  },
  "sagas": [
    {
      "id": "infinito",
      "name": "Saga do Infinito",
      "years": "2008–2019",
      "phases": [
        1,
        2,
        3
      ],
      "text": [
        "São 23 filmes, lançados ao longo de onze anos, que contam uma história só. No começo ninguém percebe: cada filme apresenta um herói e funciona sozinho. O que os liga são duas coisas plantadas aos poucos. A primeira é [[fury|Nick Fury]], diretor de uma agência de espionagem, que aparece depois dos créditos recrutando gente para uma equipe. A segunda são seis objetos de poder absurdo, as [[joias|Joias do Infinito]], que vão surgindo um por filme sem que os personagens saibam que fazem parte de um conjunto.",
        "Quem sabe é [[thanos|Thanos]]. Ele passa quase a saga toda fora de cena, mandando outros buscarem as Joias, e só no fim resolve agir pessoalmente. O plano dele é reunir as seis e apagar metade de toda a vida do universo com um estalar de dedos, porque acredita que só assim o que sobrar terá recursos para viver.",
        "A saga tem três movimentos, um por fase. No primeiro, os heróis se conhecem e formam os [[vingadores|Vingadores]]. No segundo, descobrem que proteger o mundo tem custo, cometem erros graves e começam a discordar sobre quem deve controlá-los. No terceiro, a discordância vira rompimento justamente quando Thanos chega. Eles perdem, e o último filme é sobre o preço de desfazer a derrota.",
        "Para quem vai ver Doomsday, o que a Saga do Infinito deixa é sobretudo um elenco e uma ausência. Os heróis que o público acompanhou por dez anos morreram, se aposentaram ou foram embora, e o mundo ficou marcado por cinco anos em que metade das pessoas não existiu."
      ]
    },
    {
      "id": "multiverso",
      "name": "Saga do Multiverso",
      "years": "2021–2027",
      "phases": [
        4,
        5,
        6
      ],
      "text": [
        "A segunda saga parte de duas perguntas. Quem ocupa o lugar dos Vingadores originais? E o que acontece quando se descobre que este universo é só um entre infinitos?",
        "A resposta à primeira é uma geração nova, apresentada um título por vez: [[sam|Sam Wilson]] herda o escudo do Capitão América, [[yelena|Yelena Belova]] ocupa o espaço de Natasha, [[shuri|Shuri]] vira a Pantera Negra, e uma leva de adolescentes aparece sem que ninguém os reúna. Durante quase toda a saga não existe uma equipe chamada Vingadores.",
        "A resposta à segunda é o [[multiverso|multiverso]]. Uma série, Loki, explica que o tempo era mantido numa linha única à força e mostra o momento em que essa trava se rompe. A partir daí surgem [[variantes|variantes]], versões da mesma pessoa vindas de outros universos, e um perigo novo, as [[incursoes|incursões]], em que dois universos colidem e se destroem.",
        "É uma saga mais espalhada que a anterior. Tem o dobro de títulos, muitos deles séries, e vários não se ligam a nada. O vilão também mudou no meio do caminho: o plano era [[kang|Kang]], um conquistador de linhas do tempo, e desde 2024 passou a ser o [[doom|Doutor Destino]]. Por isso há pontas que nunca foram amarradas. Este guia diz quais são.",
        "O multiverso também serviu para trazer personagens de outros estúdios. Os Homens-Aranha dos filmes antigos, os [[xmen|X-Men]] da Fox e [[deadpool|Deadpool]] entraram na história como visitantes de outros universos. A saga termina em dois filmes dos Vingadores: Doomsday, em dezembro de 2026, e Guerras Secretas, em dezembro de 2027."
      ]
    }
  ],
  "phases": {
    "0": {
      "name": "À parte",
      "short": "Fox",
      "subtitle": "Os X-Men da Fox",
      "years": "2000–2003",
      "aside": "X-Men da Fox",
      "text": [
        "Os filmes de X-Men produzidos pela Fox não fazem parte do MCU. Foram feitos por outro estúdio antes de a Disney comprá-lo e se passam em outro universo. Entram neste guia porque o elenco original volta em Doomsday e porque os dois primeiros filmes estão na lista que o Disney+ publicou para o lançamento.",
        "O essencial cabe em poucas linhas. [[mutantes|Mutantes]] são pessoas que nascem com poderes e são temidas por isso. [[xavier|Charles Xavier]], telepata, mantém uma [[escolax|escola]] que os abriga e uma equipe, os [[xmen|X-Men]], que defende a convivência com os humanos. [[magneto|Magneto]], seu amigo mais antigo, sobreviveu ao Holocausto e acredita que os humanos farão com os mutantes o que fizeram com seu povo; por isso prefere atacar primeiro. Os dois se respeitam e passam a vida em lados opostos.",
        "No primeiro filme, Magneto tenta transformar líderes mundiais em mutantes à força. No segundo, um militar chamado Stryker tenta exterminar os mutantes usando o próprio Xavier, e as duas facções se aliam para impedi-lo. [[jean|Jean Grey]] morre salvando a equipe. É também onde se conta que o esqueleto de [[adamantium|adamantium]] de [[wolverine|Wolverine]] foi implantado por Stryker."
      ],
      "keep": [
        "É de onde vêm Professor X, Magneto, Ciclope, Mística, Noturno e Fera, todos no elenco de Doomsday.",
        "A relação entre Xavier e Magneto é o que o MCU deve aproveitar sem recontar."
      ]
    },
    "1": {
      "name": "Fase 1",
      "short": "F1",
      "subtitle": "Vingadores reunidos",
      "years": "2008–2012",
      "text": [
        "Tudo começa com [[stark|Tony Stark]], herdeiro de uma fábrica de armas, sequestrado no Afeganistão por um grupo que usa as armas que ele mesmo vendeu. Para escapar, ele constrói uma armadura dentro de uma caverna. Volta para casa decidido a parar de fabricar armas e aperfeiçoa a armadura. No fim do primeiro filme, em vez de esconder a identidade, conta ao mundo que é o Homem de Ferro. Nessa noite [[fury|Nick Fury]] aparece na casa dele para falar de uma iniciativa.",
        "Os outros vão sendo apresentados. [[hulk|Bruce Banner]] é um cientista que testou em si mesmo o que julgava ser uma pesquisa de resistência à radiação gama. Era uma tentativa do Exército de recriar um soro da Segunda Guerra, e ele passou a se transformar no Hulk; vive fugindo do general [[ross|Thaddeus Ross]], que quer usá-lo como arma. [[thor|Thor]] é o príncipe de [[asgard|Asgard]], exilado na Terra pelo pai, [[odin|Odin]], por arrogância; enquanto ele aprende a ser digno do martelo, o irmão [[loki|Loki]] descobre que foi adotado e tenta tomar o trono, fracassa e se deixa cair no espaço.",
        "[[steve|Steve Rogers]] é o mais antigo de todos. Em 1942, magro e doente, é aceito num programa secreto e recebe o [[soro|soro do supersoldado]]. Como Capitão América, enfrenta a [[hidra|Hidra]], divisão científica nazista comandada pelo [[caveira|Caveira Vermelha]], que encontrou um cubo de energia chamado Tesseract. Steve perde o melhor amigo, [[bucky|Bucky Barnes]], numa missão, derrota o Caveira e derruba um avião cheio de bombas no Ártico. É encontrado congelado e acorda quase setenta anos depois, tendo perdido um encontro marcado com [[peggy|Peggy Carter]].",
        "Em [[t:ving1|Os Vingadores]] as peças se juntam. Loki, que depois da queda encontrou [[thanos|Thanos]], chega à Terra com um cetro que controla mentes e a promessa de um exército. Ele rouba o Tesseract da [[shield|S.H.I.E.L.D.]] e o usa para abrir um portal sobre [[ny|Nova York]]. Fury reúne Stark, Rogers, Thor, Banner e seus dois agentes, [[natasha|Natasha Romanoff]] e [[clint|Clint Barton]]. Eles não se entendem até que a morte de um agente querido por todos, [[coulson|Phil Coulson]], os obriga a agir juntos. Vencem a batalha, e Stark quase morre ao levar um míssil nuclear para o outro lado do portal.",
        "O que ninguém na equipe sabe é que o Tesseract e o cetro guardam duas [[joias|Joias do Infinito]], a do [[espaco|Espaço]] e a da [[mente|Mente]], e que o dono do exército já voltou os olhos para a Terra."
      ],
      "keep": [
        "O mundo descobre que existem alienígenas e deuses. A Batalha de Nova York vira o marco zero de quase tudo que vem depois.",
        "Stark sai traumatizado e obcecado em preparar a Terra para a próxima invasão.",
        "O Tesseract vai para Asgard com Thor. O cetro de Loki fica na Terra, sob guarda da S.H.I.E.L.D.",
        "Steve Rogers é um homem fora do seu tempo, trabalhando para uma agência em que ainda confia."
      ]
    },
    "2": {
      "name": "Fase 2",
      "short": "F2",
      "subtitle": "O custo de proteger o mundo",
      "years": "2013–2015",
      "text": [
        "A fase começa com cada herói lidando com o que aconteceu em Nova York. Stark não dorme e constrói dezenas de armaduras. Thor enfrenta os Elfos Negros, que querem uma substância chamada Éter, e perde a mãe; no fim, Loki finge a própria morte e passa a governar Asgard disfarçado de Odin. O Éter é a Joia da [[realidade|Realidade]].",
        "O golpe mais duro vem em [[t:cap2|O Soldado Invernal]]. Steve Rogers descobre que a Hidra nunca foi destruída: cientistas nazistas recrutados pelos Estados Unidos depois da guerra se infiltraram na S.H.I.E.L.D. desde a fundação e cresceram dentro dela por décadas. O assassino que usam, o Soldado Invernal, é Bucky Barnes, vivo, com um braço de metal e a memória apagada a cada missão. Para deter a Hidra, Steve, Natasha e um veterano chamado [[sam|Sam Wilson]] derrubam a agência inteira. Os Vingadores ficam sem quem os coordene.",
        "No espaço, [[t:gg1|Guardiões da Galáxia]] apresenta [[quill|Peter Quill]], [[gamora|Gamora]], [[drax|Drax]], [[rocket|Rocket]] e [[groot|Groot]], um bando de criminosos que acaba protegendo a Joia do [[poder|Poder]] de um fanático a serviço de Thanos. O filme também mostra Thanos pela primeira vez sentado no trono e revela que Gamora e [[nebulosa|Nebulosa]] são suas filhas adotivas.",
        "[[t:ving2|Era de Ultron]] é a consequência direta do medo de Stark. Os Vingadores recuperam o cetro de Loki numa base da Hidra em [[sokovia|Sokovia]], onde experimentos com ele deram poderes aos gêmeos [[wanda|Wanda]] e Pietro Maximoff. Stark e Banner usam a Joia dentro do cetro para criar uma inteligência artificial de defesa. [[ultron|Ultron]] acorda, conclui que a humanidade é a ameaça e tenta provocar uma extinção erguendo uma cidade inteira para deixá-la cair como meteoro. A equipe o derrota com a ajuda de um ser criado no meio da crise, o [[visao|Visão]], que carrega a Joia da Mente na testa. Pietro morre, Sokovia é destruída e Banner some.",
        "A fase termina num filme pequeno, [[t:hformiga|Homem-Formiga]], que apresenta [[scott|Scott Lang]] e um lugar que só vai importar anos depois, o [[quantico|Reino Quântico]]."
      ],
      "keep": [
        "A S.H.I.E.L.D. deixa de existir. Os Vingadores passam a agir por conta própria, financiados por Stark.",
        "Bucky Barnes está vivo e foragido, e Steve não vai desistir dele.",
        "Sokovia vira o símbolo do estrago que os heróis causam. É o argumento para os acordos da fase seguinte.",
        "Quatro Joias já apareceram: Espaço, Mente, Realidade e Poder. Thanos decide buscá-las pessoalmente."
      ]
    },
    "3": {
      "name": "Fase 3",
      "short": "F3",
      "subtitle": "A queda e o preço da volta",
      "years": "2016–2019",
      "text": [
        "Em [[t:gcivil|Guerra Civil]], depois de mais uma missão com civis mortos, 117 países assinam os [[acordos|Acordos de Sokovia]], que põem os Vingadores sob controle da ONU. Stark, culpado por Ultron, apoia. Steve, que viu a S.H.I.E.L.D. ser tomada por dentro, recusa. Um atentado mata o rei de [[wakanda|Wakanda]] e é atribuído a Bucky; o filho do rei, [[tchalla|T'Challa]], sai para vingá-lo. O verdadeiro autor é [[zemo|Helmut Zemo]], um sokoviano que perdeu a família e quer ver os Vingadores se destruírem. Ele consegue: mostra a Stark que foi o Soldado Invernal quem matou seus pais em 1991, e que Steve sabia. A equipe se parte em duas. É nesse filme que estreia um adolescente do Queens recrutado por Stark, [[peter|Peter Parker]].",
        "Enquanto os Vingadores estão separados, o resto do elenco entra. [[strange|Stephen Strange]], um cirurgião que perdeu as mãos, aprende magia em [[kamartaj|Kamar-Taj]] e passa a guardar a Joia do [[tempo|Tempo]]. T'Challa assume o trono e, depois de enfrentar o primo [[killmonger|Killmonger]], abre Wakanda para o mundo. Thor descobre uma irmã, [[hela|Hela]], perde o pai, o martelo e um olho, e precisa deixar Asgard ser destruída para vencê-la; parte numa nave com o que restou do povo.",
        "É essa nave que Thanos ataca na primeira cena de [[t:ginfinita|Guerra Infinita]]. Ele já tem a Joia do Poder. Mata Loki, pega a do Espaço e segue. Tira a da Realidade de um colecionador. Para conseguir a da [[alma|Alma]], num planeta chamado [[vormir|Vormir]], precisa sacrificar quem ama e joga Gamora de um penhasco. Em [[tita|Titã]], Stark, Strange, Peter e os Guardiões quase arrancam a manopla dele, mas Quill perde o controle ao saber de Gamora. Strange, que olhou milhões de futuros, entrega a Joia do Tempo em troca da vida de Stark. Em Wakanda, Wanda destrói a Joia da Mente e mata Visão para impedi-lo; Thanos volta o tempo, arranca a Joia e estala os dedos.",
        "Metade de todos os seres vivos vira pó. Somem Peter, T'Challa, Strange, Wanda, Bucky, Sam e quase todos os Guardiões. Ficam os seis Vingadores originais.",
        "[[t:ultimato|Ultimato]] começa com uma falsa solução. Os sobreviventes acham Thanos semanas depois, mas ele já destruiu as Joias, e Thor o mata sem que isso mude nada. Passam-se cinco anos. Scott Lang, que estava preso no Reino Quântico, volta com a ideia de que lá o tempo corre diferente. Stark transforma isso em [[viagem|viagem no tempo]], e a equipe se divide para pegar as Joias em momentos do passado: Nova York em 2012, Asgard em 2013, o espaço em 2014. A da Alma custa a vida de Natasha, que se sacrifica em Vormir no lugar de Clint.",
        "Banner usa as Joias e traz todos de volta. Mas um Thanos de 2014 descobriu o plano e veio ao presente com seu exército. Na batalha final, com todos os heróis da saga em campo, Stark toma as Joias e as usa para apagar Thanos, sabendo que não sobreviveria. Steve devolve cada Joia ao seu tempo, decide ficar no passado com Peggy e reaparece idoso para entregar o escudo a Sam.",
        "O epílogo é [[t:aranha2|Longe de Casa]]: Peter Parker, de luto por Stark, é enganado por [[mysterio|Mysterio]], que antes de morrer revela ao mundo quem é o Homem-Aranha."
      ],
      "keep": [
        "O [[blip|Blip]]: metade do universo some por cinco anos e volta, com a mesma idade, num mundo que seguiu sem ela.",
        "Tony Stark e Natasha Romanoff estão mortos. Steve Rogers se aposentou no passado. Thor foi para o espaço. Não há mais Vingadores.",
        "As Joias do Infinito foram destruídas. As que vieram do passado foram devolvidas.",
        "Durante a viagem a 2012, um Loki daquele ano escapou com o Tesseract. É o começo da Saga do Multiverso.",
        "A identidade de Peter Parker é pública."
      ]
    },
    "4": {
      "name": "Fase 4",
      "short": "F4",
      "subtitle": "Luto, herdeiros e a trava que se rompe",
      "years": "2021–2022",
      "text": [
        "A fase abre com gente tentando viver depois da perda. [[wanda|Wanda]], que viu [[visao|Visão]] morrer duas vezes, chega a uma cidadezinha chamada [[westview|Westview]] e, num surto de dor, a transforma numa série de TV em que os dois são casados e têm filhos gêmeos. Milhares de moradores ficam presos na fantasia. Uma bruxa, [[agatha|Agatha Harkness]], revela a Wanda o que ela é: a Feiticeira Escarlate, capaz de criar e desfazer realidade. Wanda desfaz a cidade, perde a família inventada e some com o [[darkhold|Darkhold]], um livro de magia que corrompe quem o lê.",
        "[[sam|Sam Wilson]] acha que o escudo não é para ele e o entrega ao governo, que nomeia outro Capitão América, [[walker|John Walker]]. Walker desaba sob a pressão e mata um homem rendido diante das câmeras. Sam, ao lado de [[bucky|Bucky]], decide assumir o posto do jeito dele. Nos bastidores, uma agente chamada [[valentina|Valentina de Fontaine]] começa a recrutar gente descartada, entre eles Walker e [[yelena|Yelena Belova]], criada como irmã de Natasha.",
        "O acontecimento que define a saga está em [[t:loki1|Loki]]. O Loki que fugiu em 2012 é preso pela [[tva|AVT]], uma burocracia fora do tempo que elimina qualquer desvio do roteiro previsto. Com [[sylvie|Sylvie]], uma variante dele, descobre quem a criou: [[kang|Aquele Que Permanece]], um homem que venceu uma guerra entre versões de si mesmo e desde então mantém uma linha do tempo única para que elas não voltem. Sylvie o mata. As linhas do tempo se ramificam sem controle, e o multiverso passa a existir de fato.",
        "As consequências aparecem logo. Em [[t:aranha3|Sem Volta para Casa]], Peter pede a Strange um feitiço para o mundo esquecer sua identidade; o feitiço sai errado e puxa vilões e dois outros Homens-Aranha de outros universos. Peter perde a tia e, para fechar as fendas, aceita que o mundo inteiro o esqueça. Em [[t:estranho2|Multiverso da Loucura]], Wanda, corrompida pelo Darkhold, caça [[america|America Chavez]], uma adolescente que atravessa universos, para alcançar um mundo onde os filhos existam. Strange aprende ali o que são [[incursoes|incursões]]. Wanda cai em si e derruba sobre si mesma o templo de onde o livro veio.",
        "Em volta disso, a fase apresenta herdeiros. [[kate|Kate Bishop]] vira parceira de Clint. [[shangchi|Shang-Chi]] herda dez anéis de origem desconhecida. [[kamala|Kamala Khan]] ganha poderes e é chamada de mutante. Thor adota uma menina. Em [[t:wakanda|Wakanda para Sempre]], T'Challa morre de doença, e [[shuri|Shuri]] assume o manto ao enfrentar [[namor|Namor]], rei de um povo submarino. E [[t:eternos|Eternos]] deixa no meio do oceano um ser gigantesco petrificado, que nenhum título comenta por anos."
      ],
      "keep": [
        "O multiverso está aberto. Não há mais quem mantenha uma linha do tempo só.",
        "Ninguém no mundo lembra que Peter Parker existe.",
        "Wanda é dada como morta. O Visão reconstruído, sem memórias, está solto.",
        "Sam Wilson é o Capitão América. Valentina está montando um time próprio.",
        "Shuri é a Pantera Negra, e Wakanda tem um vizinho perigoso em Talokan."
      ]
    },
    "5": {
      "name": "Fase 5",
      "short": "F5",
      "subtitle": "As peças fora do lugar",
      "years": "2023–2025",
      "text": [
        "É a fase mais irregular, e vale saber por quê. Ela começa em [[t:quantumania|Quantumania]] apresentando [[kang|Kang, o Conquistador]], como o Thanos da nova saga, e termina sem ele. O estúdio abandonou o personagem em 2024. Quem assiste hoje pode tratar Kang como um vilão derrotado e seguir em frente.",
        "O que realmente move a história acontece na segunda temporada de [[t:loki2|Loki]]. A máquina que a AVT usava para tecer o tempo não aguenta o número de ramificações e vai destruir todas. Loki aprende a se mover pelo tempo à vontade, tenta consertar a máquina por séculos e entende que não há conserto. Ele a destrói e passa a segurar as linhas do tempo com as próprias mãos, sozinho, num trono no fim do tempo. O multiverso só continua existindo porque ele está lá.",
        "[[t:deadpool|Deadpool & Wolverine]] abre a outra porta. A AVT avisa [[deadpool|Wade Wilson]] de que o universo dele, o dos filmes dos X-Men da Fox, vai morrer porque seu [[ancora|ser-âncora]], Logan, morreu. Wade busca um [[wolverine|Wolverine]] substituto em outro universo e os dois salvam aquele mundo. O filme estabelece que os X-Men da Fox existem num universo vizinho, a [[t10005|Terra-10005]], ao alcance do MCU. Antes dele, [[t:marvels|As Marvels]] já tinha deixado [[monica|Monica Rambeau]] presa num universo onde vive o [[fera|Fera]].",
        "Na Terra principal, duas equipes nascem. Em [[t:cap4|Admirável Mundo Novo]], Sam Wilson enfrenta o presidente [[ross|Thaddeus Ross]], manipulado por [[sterns|Samuel Sterns]] até virar o Hulk Vermelho, e decide que o mundo precisa dos Vingadores de novo. O filme também mostra o que saiu da [[ilhacel|ilha Celestial]]: o [[adamantium|adamantium]], metal que os países disputam. Em [[t:thunder|Thunderbolts*]], Yelena, Bucky, Walker, [[ava|Ava Starr]] e [[alexei|Alexei]] sobrevivem a uma queima de arquivo de Valentina e encontram [[bob|Bob]], um homem com poder de deus e uma depressão que ganha forma própria. Eles o salvam, e Valentina os apresenta à imprensa como os [[novos|Novos Vingadores]].",
        "O resto da fase corre em paralelo. Os Guardiões se despedem. Nick Fury enfrenta uma infiltração de alienígenas metamorfos. Em Nova York, [[fisk|Wilson Fisk]] vira prefeito e persegue vigilantes, com o [[matt|Demolidor]] do outro lado. E [[agatha|Agatha]] revela que um dos filhos de Wanda, [[billy|Billy]], encontrou um corpo para viver."
      ],
      "keep": [
        "Loki sustenta o multiverso. Se ele sair de lá, não se sabe o que acontece.",
        "O universo dos X-Men da Fox está ligado ao MCU.",
        "Há duas equipes disputando o nome Vingadores: a de Sam Wilson e a de Valentina.",
        "Sterns, preso, avisa Sam de que outros mundos estão chegando.",
        "Na cena final de Thunderbolts*, catorze meses depois, uma nave com o número 4 entra na órbita da Terra."
      ]
    },
    "6": {
      "name": "Fase 6",
      "short": "F6",
      "subtitle": "A convergência",
      "years": "2025–2027",
      "text": [
        "A fase começa longe de tudo. [[t:quarteto|Primeiros Passos]] se passa na [[t828|Terra-828]], um mundo com cara de anos 1960 futurista onde o [[quarteto|Quarteto Fantástico]] é a única equipe de heróis e é adorado. [[sue|Sue Storm]] está grávida quando chega a [[surfista|Surfista Prateada]] anunciando [[galactus|Galactus]], um ser que devora planetas. Galactus oferece poupar a Terra em troca do bebê, em quem sente um poder capaz de substituir o dele. A família recusa e o mundo se volta contra eles, até que Sue convence a todos a lutar juntos. O plano funciona ao custo da vida dela, e o recém-nascido [[franklin|Franklin]] a traz de volta.",
        "A cena no meio dos créditos é a mais importante da fase. Quatro anos depois, Sue sai da sala por um instante e, ao voltar, encontra um homem de capuz verde ajoelhado diante de Franklin, segurando uma máscara de metal. É a primeira aparição do [[doom|Doutor Destino]].",
        "Na Terra principal, [[t:aranha4|Um Novo Dia]] reencontra [[peter|Peter Parker]] quatro anos depois de ser esquecido: adulto, sozinho, protegendo Nova York sem que ninguém saiba seu nome. Alguém está atacando prisões do [[controle|Controle de Danos]] saltando de mente em mente. É [[jean|Jean Grey]], uma jovem telepata cuja irmã morreu numa cela do órgão. Peter, que ganha teia orgânica e quase perde o controle dos próprios poderes, trabalha com o [[frank|Justiceiro]], com [[hulk|Bruce Banner]] e com [[yelena|Yelena]], enfrenta Jean e acaba por consolá-la. Termina decidido a não viver mais sozinho, e com um mistério: o rastreador do amigo [[ned|Ned]] registra um Homem-Aranha fora da Terra.",
        "Em Nova York, a segunda temporada de [[t:demolidor|Demolidor: Renascido]] encerra o governo de [[fisk|Wilson Fisk]]: ele perde a esposa, é exposto no tribunal por [[matt|Matt Murdock]], que revela ser o Demolidor, e aceita o exílio. Matt termina preso.",
        "As séries da fase são menores. Magnum é uma história isolada sobre um ator com poderes. VisionQuest, que estreia em outubro de 2026, acompanha o [[visao|Visão]] reconstruído em busca de quem foi, e traz [[ultron|Ultron]] de volta.",
        "Daqui em diante é Doomsday. O que se sabe do filme está no começo desta página."
      ],
      "keep": [
        "O Quarteto Fantástico saiu da Terra-828 e chegou à Terra principal. O motivo ainda não foi mostrado.",
        "Destino conhece Franklin Richards desde que o menino tinha quatro anos.",
        "Um Homem-Aranha está em algum lugar do espaço.",
        "Jean Grey existe no MCU."
      ]
    }
  },
  "doomsday": {
    "intro": [
      "Vingadores: Doomsday é o quinto filme dos Vingadores e a primeira metade do final da Saga do Multiverso. A premissa divulgada cabe numa frase: o multiverso está em colapso, e heróis de três universos acabam no mesmo lugar, diante de [[doom|Victor von Doom]]. Os três universos são a Terra principal, a do [[quarteto|Quarteto Fantástico]] e a dos [[xmen|X-Men]] dos filmes da Fox.",
      "A história começa catorze meses depois de [[t:thunder|Thunderbolts*]], no instante que a última cena daquele filme deixou em suspenso. O presidente da Marvel, Kevin Feige, diz que o filme retoma o fio de [[t:ultimato|Ultimato]] e que um dos objetivos é dar um fim a histórias anteriores ao próprio MCU, como a dos X-Men originais. Os diretores são os irmãos Russo, os mesmos de Guerra Infinita e Ultimato, e os dois filmes novos foram escritos juntos, como aquele par.",
      "O que vem abaixo é o estado de cada peça antes de a sessão começar. Tudo o que não é fato confirmado está marcado como tal."
    ],
    "fronts": [
      {
        "title": "Por que existe um multiverso, e por que ele está caindo",
        "text": [
          "Durante toda a primeira saga havia uma linha do tempo só. Isso não era natural. Um homem, [[kang|Aquele Que Permanece]], tinha vencido uma guerra entre versões de si mesmo e, para que ela não se repetisse, mantinha uma única sequência de acontecimentos, apagando qualquer desvio por meio da [[tva|AVT]]. Em 2021, na série Loki, [[sylvie|Sylvie]] o mata. As ramificações deixam de ser apagadas, e cada uma vira um universo.",
          "A máquina que sustentava o tempo não foi feita para isso e quase destrói tudo. Na segunda temporada, [[loki|Loki]] a substitui: segura as linhas do tempo com as próprias mãos, sentado no fim do tempo, e elas crescem em volta dele como uma árvore. É a situação atual. O multiverso depende de uma pessoa.",
          "O perigo novo se chama [[incursoes|incursão]]: quando a fronteira entre dois universos cede, um avança sobre o outro e ao menos um é destruído. [[strange|Stephen Strange]] ficou sabendo disso em Multiverso da Loucura e, na última cena, foi avisado de que causou uma. Ninguém mais na Terra principal trata do assunto. O único aviso veio de um preso: no fim de Admirável Mundo Novo, [[sterns|Samuel Sterns]] diz a Sam Wilson que há outros mundos e que os habitantes deles estão vindo.",
          "Catorze meses depois de Thunderbolts*, eles chegam: uma nave de outra dimensão, com o número 4, entra no sistema solar."
        ]
      },
      {
        "title": "Os Vingadores de Sam Wilson",
        "text": [
          "Depois de Ultimato não sobrou equipe. Stark e Natasha morreram, Steve ficou no passado, Thor foi para o espaço, Banner e Clint se afastaram. Por anos as crises foram resolvidas por quem estivesse perto.",
          "[[sam|Sam Wilson]] herdou o escudo, hesitou e assumiu. Em Admirável Mundo Novo, sem soro nem poder, evita uma guerra e detém um presidente transformado em Hulk Vermelho. O próprio presidente lhe tinha pedido para recriar os Vingadores, e Sam decide fazê-lo por conta própria. Tem ao lado [[joaquin|Joaquin Torres]], o novo Falcão.",
          "Não foi mostrado quem mais ele chamou. No elenco do filme, do lado da Terra principal, estão [[thor|Thor]], [[scott|Scott Lang]] com a filha [[cassie|Cassie]], e [[shangchi|Shang-Chi]]."
        ]
      },
      {
        "title": "Os Novos Vingadores",
        "text": [
          "É o outro time, e nasceu de um golpe. [[valentina|Valentina de Fontaine]], diretora da CIA, mandou seus agentes se matarem para apagar provas contra ela. Eles sobreviveram, salvaram Nova York e iam prendê-la, quando ela os pôs diante das câmeras e os anunciou como Novos Vingadores.",
          "São [[yelena|Yelena Belova]], irmã de criação de Natasha e líder de fato; [[bucky|Bucky Barnes]], o ex-Soldado Invernal; [[walker|John Walker]], o Capitão América que deu errado; [[ava|Ava Starr]], que atravessa paredes; [[alexei|Alexei]], supersoldado soviético e pai postiço de Yelena; e [[bob|Bob Reynolds]], o Sentinela. Bob é o mais poderoso do filme inteiro e não usa os poderes, por medo de soltar de novo o Vácuo, a parte dele que cobre tudo de sombra.",
          "Moram na antiga Torre dos Vingadores, em Nova York. Sam Wilson os processa pelo uso do nome. São eles que detectam a nave do Quarteto."
        ]
      },
      {
        "title": "O Quarteto Fantástico e o filho",
        "text": [
          "[[reed|Reed Richards]], [[sue|Sue Storm]], [[johnny|Johnny Storm]] e [[ben|Ben Grimm]] vêm da [[t828|Terra-828]], um mundo que parou no visual dos anos 1960 e avançou na ciência. Lá são os únicos heróis. Em Primeiros Passos enfrentam [[galactus|Galactus]], que oferece poupar o planeta em troca do filho que Sue esperava. Recusam, e o mandam para longe com a ajuda da arauta dele.",
          "O bebê, [[franklin|Franklin]], tem um poder que o filme não mede. Recém-nascido, trouxe a mãe de volta da morte. Quatro anos depois, na cena dos créditos, Sue encontra um homem de capa verde ajoelhado diante do menino, com uma máscara de metal na mão.",
          "Por que a família atravessou para a Terra principal não foi mostrado. Franklin aparece no filme, assim como o robô da casa, H.E.R.B.I.E. Um teaser mostra os quatro em Wakanda."
        ]
      },
      {
        "title": "Victor von Doom",
        "text": [
          "Nos quadrinhos, o [[doom|Doutor Destino]] é o grande rival de Reed Richards: tão inteligente quanto ele, cientista e feiticeiro, governante absoluto de um país pequeno, a [[latveria|Latvéria]], e convencido de que só ele pode consertar o mundo.",
          "No cinema, o que os trailers contam é isto. Ele vem da Terra-828 e, segundo a narração de Sue Storm, já foi amigo do Quarteto. Reed o confronta perguntando se uma destruição foi obra dele. Destino diz aos heróis que eles viveram vidas roubadas e que todos serão postos diante de uma decisão impensável. Detém o machado de Thor com dois dedos e reergue um exército de Sentinelas, os robôs caçadores de mutantes do universo dos X-Men. A produção confirmou também bruxas latverianas no elenco.",
          "Quem o interpreta é Robert Downey Jr., o ator de Tony Stark. A Marvel não explicou se o rosto igual tem razão dentro da história. O que Destino quer também não foi dito."
        ]
      },
      {
        "title": "Wakanda e Talokan",
        "text": [
          "[[shuri|Shuri]] é a Pantera Negra desde a morte do irmão. [[mbaku|M'Baku]] se apresentou para disputar o trono. [[namor|Namor]], rei do povo submarino de Talokan, matou a mãe de Shuri, foi vencido e poupado por ela, e aceitou uma aliança pensando em usá-la mais tarde.",
          "Os três estão no filme, assim como dois guerreiros de Namor, Namora e Attuma. Um teaser mostra o Quarteto recebido em Wakanda e o Coisa diante de M'Baku. Outro trecho mostra Shuri e M'Baku lutando com Namor num leito seco cercado de paredes de água."
        ]
      },
      {
        "title": "Os X-Men",
        "text": [
          "Os X-Men que aparecem não são do MCU. São os dos filmes da Fox, de outro universo, a [[t10005|Terra-10005]], e voltam com os atores de 2000: [[xavier|Charles Xavier]], [[magneto|Magneto]], [[ciclope|Ciclope]], [[mistica|Mística]], [[noturno|Noturno]] e [[fera|Fera]], além de [[gambit|Gambit]].",
          "O que se precisa saber deles é a divisão antiga: Xavier acredita na convivência com os humanos, e Magneto, sobrevivente do Holocausto, acha que os mutantes serão exterminados se não atacarem antes. Os dois são amigos e adversários há décadas.",
          "Duas pontes ligam esse universo ao MCU. Em Deadpool & Wolverine, a AVT explica que ele estava morrendo, e ele é salvo. Em As Marvels, [[monica|Monica Rambeau]] fica presa num universo onde vive o Fera. Os trailers mostram a mansão dos X-Men em ruínas sob um céu que desaba e, antes de qualquer aliança, mutantes lutando com heróis da Terra principal: Gambit contra Shang-Chi, Mística contra Yelena."
        ]
      },
      {
        "title": "Quem volta de longe",
        "text": [
          "[[steve|Steve Rogers]] ficou no passado no fim de Ultimato, para viver com [[peggy|Peggy Carter]]. Os dois atores estão no elenco. Um teaser o mostra chegando de moto a uma casa e pegando um bebê no colo. Segundo o elenco, ele assume a identidade de Nômade, a que o personagem usa nos quadrinhos quando deixa de ser o Capitão América. Os diretores dizem que a história dele e a de Destino são centrais.",
          "[[thor|Thor]] cria a filha adotiva, Amor, que também está no filme. Um teaser o mostra rezando ao pai antes de uma batalha.",
          "[[loki|Loki]] está no elenco. É dele que depende a árvore de universos que está caindo."
        ]
      },
      {
        "title": "Quem não está no elenco anunciado",
        "text": [
          "[[wanda|Wanda Maximoff]] é dada como morta, sem corpo. [[strange|Stephen Strange]] partiu para consertar uma incursão; o filme dele está na lista que o Disney+ recomenda, e a imprensa espera vê-lo. [[peter|Peter Parker]] segue esquecido pelo mundo, e a última cena de Um Novo Dia registra um Homem-Aranha fora da Terra. [[hulk|Bruce Banner]], [[carol|Carol Danvers]], [[clint|Clint Barton]] e os [[guardioes|Guardiões]] também não foram anunciados.",
          "[[deadpool|Deadpool]] e [[wolverine|Wolverine]] não estão na lista oficial, mas os dois atores apareceram num vídeo da Marvel em agosto de 2026 oferecendo ajuda. Surpresas são tradição nesses filmes, e nada disso está confirmado."
        ]
      }
    ],
    "trailers": [
      {
        "when": "Dezembro de 2025 e janeiro de 2026",
        "text": "Quatro teasers curtos, exibidos nos cinemas. Um mostra Steve Rogers de volta, com um bebê. Outro, Thor antes da batalha. O terceiro, os X-Men. O quarto, o Quarteto Fantástico em Wakanda, com o Coisa diante de M'Baku e Namor de traje novo. Todos terminam num relógio em contagem regressiva."
      },
      {
        "when": "Julho de 2026, Comic-Con",
        "text": "Trailer completo. Destino reergue um exército de Sentinelas contra Vingadores, Quarteto e X-Men. Aparecem um mapa com três realidades em colisão, a mansão dos X-Men em ruínas e as lutas entre heróis de universos diferentes."
      },
      {
        "when": "Agosto de 2026, D23",
        "text": "Prévia centrada em Destino. Sue Storm conta quem ele foi; Reed o confronta; Thor o ataca e é detido com dois dedos; Nova York aparece destruída; Johnny abraça Franklin enquanto um mundo se desfaz atrás deles."
      },
      {
        "when": "Setembro de 2026",
        "text": "Ultimato volta aos cinemas com um trecho novo que, segundo a imprensa, prepara o destino dos X-Men da Fox."
      }
    ],
    "cast": [
      {
        "group": "Vingadores e aliados · Terra principal",
        "ids": [
          "sam",
          "joaquin",
          "thor",
          "scott",
          "cassie",
          "shangchi",
          "steve",
          "peggy",
          "loki"
        ]
      },
      {
        "group": "Novos Vingadores · Terra principal",
        "ids": [
          "yelena",
          "bucky",
          "walker",
          "ava",
          "alexei",
          "bob"
        ]
      },
      {
        "group": "Wakanda e Talokan · Terra principal",
        "ids": [
          "shuri",
          "mbaku",
          "namor"
        ]
      },
      {
        "group": "Quarteto Fantástico · Terra-828",
        "ids": [
          "reed",
          "sue",
          "johnny",
          "ben",
          "franklin"
        ]
      },
      {
        "group": "X-Men · Terra-10005",
        "ids": [
          "xavier",
          "magneto",
          "ciclope",
          "mistica",
          "noturno",
          "fera",
          "gambit"
        ]
      },
      {
        "group": "O vilão",
        "ids": [
          "doom"
        ]
      }
    ],
    "questions": [
      "O que Destino quer, e que decisão é essa de que ele fala.",
      "Por que ele tem o rosto de Tony Stark.",
      "Como Steve Rogers volta, e de quem é o bebê.",
      "Por que o Quarteto deixou a Terra-828 e onde Destino entra nisso.",
      "Quem destruiu a Nova York que aparece no trailer, e de que universo ela é.",
      "O que acontece com os universos se Loki soltar a árvore.",
      "Que Homem-Aranha foi localizado no espaço.",
      "Como termina. É a primeira de duas partes, como Guerra Infinita foi de Ultimato, e aquele filme terminou em derrota."
    ],
    "dateNote": "18 de dezembro de 2026 é a data dos Estados Unidos. Confira a data no Brasil.",
    "facts": [
      "Direção: Anthony e Joe Russo.",
      "Vilão: Robert Downey Jr. como [[doom|Doutor Destino]].",
      "Duração informada: cerca de 2 h 45 min.",
      "Quando se passa: catorze meses depois de Thunderbolts*.",
      "Continua em Guerras Secretas, em 17 de dezembro de 2027.",
      "Inspiração citada pelo estúdio: os quadrinhos que antecedem Guerras Secretas, em que universos colidem um a um."
    ],
    "universes": [
      "[[t616|Terra-616]], a principal",
      "[[t828|Terra-828]], do Quarteto",
      "[[t10005|Terra-10005]], dos X-Men"
    ]
  },
  "profiles": [
    {
      "id": "stark",
      "type": "p",
      "group": "Vingadores originais",
      "name": "Tony Stark",
      "description": "O Homem de Ferro, ponto de partida de tudo.",
      "profile": [
        "Herdeiro das Indústrias Stark, gênio da engenharia e fabricante de armas até ser ferido e sequestrado com as próprias armas. Sai do cativeiro com um reator no peito, que impede estilhaços de chegarem ao coração, e com a primeira armadura.",
        "O traço que move Tony pela saga é o medo. Depois de ver um exército alienígena sobre Nova York, ele passa a acreditar que a Terra não está pronta e que cabe a ele prepará-la. Esse medo cria Ultron, leva-o a apoiar os Acordos de Sokovia e o faz adotar Peter Parker como protegido.",
        "Durante o Blip, casa com Pepper Potts e tem uma filha, Morgan. Mesmo assim aceita o risco de inventar a viagem no tempo. Morre em 2023 ao usar as seis Joias contra Thanos: o corpo humano não suporta a energia."
      ],
      "now": "Morto. O ator, Robert Downey Jr., volta em Doomsday como o Doutor Destino, e a Marvel não explicou se existe relação entre os dois personagens.",
      "inDoomsday": false,
      "appearances": {
        "hf1": "Sequestrado com as próprias armas, constrói a primeira armadura numa caverna. Descobre que o sócio vendia armas a terroristas e, no fim, revela ao mundo que é o Homem de Ferro.",
        "hf2": "O reator que o mantém vivo está envenenando seu sangue. Recusa entregar a armadura ao governo, perde uma para Rhodes e se cura sintetizando um elemento deixado pelo pai.",
        "ving1": "Entra para a equipe como consultor. Briga com Steve, vê Coulson morrer e carrega um míssil nuclear pelo portal, encarando sozinho a frota inimiga. É o que o traumatiza.",
        "hf3": "Com crises de pânico, perde a casa e as armaduras e investiga o Mandarim só com o que tem. No fim, destrói os trajes e opera o peito.",
        "ving2": "Depois de uma visão dos colegas mortos, cria Ultron para proteger o planeta. Ultron tenta extinguir a humanidade. Stark ajuda a criar o Visão para consertar o erro.",
        "gcivil": "Culpado por Sokovia, apoia os Acordos e tenta prender Steve. Descobre que Bucky matou seus pais e que Steve sabia. A amizade acaba.",
        "aranha1": "Dá um traje a Peter Parker e o mantém à distância, por medo de que ele se machuque. Toma o traje de volta e, no fim, oferece a ele um lugar na equipe.",
        "ginfinita": "Segue a nave que leva Strange e luta com Thanos em Titã. É ferido, e Strange troca a Joia do Tempo pela vida dele. Vê Peter virar pó.",
        "ultimato": "Resgatado do espaço, passa cinco anos com Pepper e a filha. Resolve a viagem no tempo, reencontra o pai em 1970 e, na batalha, toma as Joias de Thanos e estala os dedos. Morre.",
        "aranha2": "Já morto. Deixou a Peter os óculos que controlam um sistema de drones, e é a sombra dele que pesa sobre o filme inteiro."
      }
    },
    {
      "id": "steve",
      "type": "p",
      "group": "Vingadores originais",
      "name": "Steve Rogers",
      "description": "O primeiro Capitão América.",
      "profile": [
        "Rapaz franzino do Brooklyn que tenta se alistar várias vezes na Segunda Guerra e é recusado. Um cientista o escolhe para o soro do supersoldado justamente por ele ser bom antes de ser forte. O soro lhe dá força, velocidade e resistência no limite do humano.",
        "Passa quase setenta anos congelado no Ártico. No presente, é o líder em campo dos Vingadores e quem mais desconfia de autoridade: viu a S.H.I.E.L.D. ser tomada pela Hidra e recusa os Acordos de Sokovia. A lealdade a Bucky Barnes o põe contra Stark.",
        "Em Ultimato prova ser digno de erguer o martelo de Thor. Depois da batalha, volta ao passado para devolver as Joias e decide ficar, vivendo a vida que perdeu com Peggy Carter."
      ],
      "now": "Vive em outra linha do tempo com Peggy. Um teaser o mostra de volta, com um bebê no colo. Segundo os atores, ele adota a identidade de Nômade, a que o personagem usa nos quadrinhos quando abre mão do título de Capitão América.",
      "inDoomsday": true,
      "appearances": {
        "cap1": "Recusado pelo Exército, é escolhido para o soro pelo caráter. Resgata Bucky, lidera a luta contra a Hidra, perde o amigo e derruba o avião do Caveira Vermelha no gelo.",
        "ving1": "Recém-descongelado, estranha o mundo e desconfia da S.H.I.E.L.D. Na batalha, é ele quem distribui as ordens, e os outros obedecem.",
        "cap2": "Descobre que a Hidra vive dentro da S.H.I.E.L.D. e que o Soldado Invernal é Bucky. Derruba a agência e se recusa a lutar contra o amigo.",
        "ving2": "Lidera a equipe contra Ultron e discute com Stark sobre criar coisas sem pedir a ninguém. No fim, passa a treinar os novos Vingadores.",
        "gcivil": "Recusa os Acordos, protege Bucky de uma acusação falsa e enfrenta Stark. Larga o escudo e vira foragido.",
        "ginfinita": "Reaparece de barba, sem escudo, para salvar Wanda e Visão. Lidera a defesa de Wakanda e tenta segurar a manopla de Thanos com as mãos.",
        "ultimato": "Dirige grupos de apoio durante o Blip. Na batalha, ergue o Mjolnir. Devolve as Joias ao passado, fica com Peggy e entrega o escudo a Sam.",
        "doomsday": "No elenco. Os diretores dizem que ele e o Doutor Destino são centrais na história."
      }
    },
    {
      "id": "thor",
      "type": "p",
      "group": "Vingadores originais",
      "name": "Thor",
      "description": "O deus do trovão, que perdeu quase tudo.",
      "profile": [
        "Príncipe de Asgard, filho de Odin. Vive milhares de anos, controla raios e, por muito tempo, depende do martelo Mjolnir, que só o digno consegue erguer.",
        "É o Vingador que mais perde. A mãe morre em O Mundo Sombrio. Em Ragnarok morrem o pai e os amigos, o martelo é destruído, ele perde um olho e precisa deixar Asgard explodir. Em Guerra Infinita vê Thanos matar Loki e metade do povo que restava. Forja uma arma nova, o machado Rompe-Tormentas, acerta Thanos no peito e não na cabeça, e carrega essa culpa.",
        "Passa o Blip bebendo em Nova Asgard. Depois de Ultimato, deixa o trono com Valquíria e viaja com os Guardiões. Em Amor e Trovão reencontra Jane Foster, que morre de câncer, e adota a filha do vilão Gorr."
      ],
      "now": "Cria a filha adotiva, Amor, que também está no filme. Os trailers o mostram rezando antes da batalha e atacando Destino, que detém o machado com dois dedos.",
      "inDoomsday": true,
      "appearances": {
        "thor": "Arrogante, provoca uma guerra e é exilado sem poderes. Torna-se digno do martelo ao se oferecer para morrer pelos outros.",
        "ving1": "Vem à Terra buscar Loki e o Tesseract. Luta com Stark e com o Hulk antes de lutar ao lado deles.",
        "thor2": "Perde a mãe num ataque dos Elfos Negros. Alia-se a Loki, salva Jane e recusa o trono, sem saber que o entrega ao irmão.",
        "ving2": "Tem uma visão das Joias do Infinito e conclui que alguém está juntando as peças. Dá vida ao Visão com um raio.",
        "ragnarok": "Em uma semana perde o pai, o martelo, um olho e o planeta. Descobre que o poder do raio é dele. Vira rei de um povo sem terra.",
        "ginfinita": "Vê Thanos matar Loki e metade dos asgardianos. Forja o Rompe-Tormentas, acerta Thanos no peito em vez da cabeça, e Thanos estala os dedos.",
        "ultimato": "Decapita Thanos tarde demais e passa cinco anos bebendo. Revê a mãe em 2013, recupera o Mjolnir e parte com os Guardiões.",
        "thor4": "Reencontra Jane Foster, agora com o martelo e com câncer. Perde-a de novo e adota a filha do vilão.",
        "doomsday": "No elenco, com a filha, Amor.",
        "estranho": "Na cena dos créditos, pede a Strange ajuda para achar Odin, com Loki a tiracolo."
      }
    },
    {
      "id": "hulk",
      "type": "p",
      "group": "Vingadores originais",
      "name": "Bruce Banner",
      "description": "O Hulk.",
      "profile": [
        "Especialista em radiação gama. Testa em si mesmo o que o general Ross lhe apresentou como pesquisa de resistência à radiação, e que era uma tentativa do Exército de recriar o soro do supersoldado. Passa a se transformar no Hulk sempre que se enfurece ou o coração dispara. Banner e Hulk são, por anos, duas personalidades que se detestam.",
        "Depois de Ultron, o Hulk voa para longe e passa dois anos como gladiador em Sakaar. Em Guerra Infinita apanha de Thanos e se recusa a aparecer de novo. Durante o Blip, Banner encontra um meio-termo: a mente dele no corpo do Hulk. É nessa forma que ele usa as Joias para trazer todos de volta, o que inutiliza seu braço por um tempo.",
        "Em Mulher-Hulk, treina a prima Jennifer Walters e volta de Sakaar com um filho, Skaar."
      ],
      "now": "Professor universitário em Nova York. Usa um inibidor que impede a transformação. Não está no elenco anunciado de Doomsday.",
      "inDoomsday": false,
      "appearances": {
        "hulk": "Vive escondido no Brasil, procurando cura. Enfrenta o Abominável no Harlem e termina aprendendo a provocar a transformação.",
        "ving1": "Fury o chama pelo que sabe de radiação gama. Vira o Hulk dentro da nave da S.H.I.E.L.D. e, na batalha, mostra que consegue se transformar quando quer.",
        "ving2": "Cria Ultron com Stark. Wanda o faz devastar uma cidade, e ele some num jato para não machucar mais ninguém.",
        "ragnarok": "Está transformado há dois anos, campeão da arena de Sakaar. Thor o faz voltar a ser Banner.",
        "ginfinita": "O Hulk apanha de Thanos na primeira cena e, pelo resto do filme, se recusa a aparecer. Banner luta numa armadura.",
        "ultimato": "Durante o Blip, une a mente de Banner ao corpo do Hulk. É quem pega a Joia do Tempo com a Anciã e quem estala os dedos para trazer todos de volta.",
        "shangchi": "Examina os dez anéis com Wong e Carol.",
        "mulherhulk": "Com o braço curado e de novo em forma humana, treina a prima Jennifer. Vai a Sakaar e volta com um filho, Skaar.",
        "aranha4": "Ajuda Peter a construir um inibidor de poderes. Jean Grey o possui, arranca o inibidor dele e solta o Hulk; Peter o acalma.",
        "hf3": "Na cena pós-créditos, cochila enquanto Stark lhe conta a história inteira.",
        "cmarvel": "Na cena dos créditos, em 2018, está entre os Vingadores que contam os desaparecidos."
      }
    },
    {
      "id": "natasha",
      "type": "p",
      "group": "Vingadores originais",
      "name": "Natasha Romanoff",
      "description": "A Viúva Negra original.",
      "profile": [
        "Tirada da família quando criança e treinada na Sala Vermelha, programa soviético que formava assassinas. Deserta para a S.H.I.E.L.D. depois que Clint Barton, enviado para matá-la, decide poupá-la. Não tem poderes.",
        "É quem mantém a equipe unida. Em Guerra Civil assina os Acordos, mas deixa Steve escapar. Durante o Blip é ela quem coordena o que sobrou dos Vingadores. Fala com frequência da dívida que sente pelas mortes que causou.",
        "Em Ultimato, em Vormir, a Joia da Alma exige uma vida. Ela e Clint disputam quem vai se sacrificar, e ela vence."
      ],
      "now": "Morta em 2023. Sua irmã de criação, Yelena Belova, ocupa o lugar dela na história.",
      "inDoomsday": false,
      "appearances": {
        "hf2": "Infiltrada como assistente de Stark para avaliá-lo para os Vingadores. É a primeira agente da S.H.I.E.L.D. que o público vê em ação.",
        "ving1": "Recruta Banner, arranca de Loki o plano dele num interrogatório e fecha o portal com o cetro.",
        "cap2": "Foge com Steve, descobre a Hidra e despeja na internet todos os segredos da S.H.I.E.L.D., inclusive os seus.",
        "ving2": "Aproxima-se de Banner e é quem acalma o Hulk. Revela o que a Sala Vermelha fez com ela.",
        "gcivil": "Assina os Acordos e luta do lado de Stark, mas no aeroporto deixa Steve e Bucky escaparem.",
        "ginfinita": "Foragida com Steve e Sam, salva Wanda e Visão e luta em Wakanda.",
        "ultimato": "Coordena o que restou dos Vingadores durante o Blip. Em Vormir, vence a disputa com Clint e se joga do penhasco para que ele leve a Joia da Alma.",
        "viuva": "Passado logo depois de Guerra Civil. Reencontra Yelena e os pais de mentira e destrói a Sala Vermelha, que julgava extinta.",
        "cmarvel": "Na cena dos créditos, em 2018, é quem pergunta pelo pager de Fury quando Carol aparece."
      }
    },
    {
      "id": "clint",
      "type": "p",
      "group": "Vingadores originais",
      "name": "Clint Barton",
      "description": "O Gavião Arqueiro.",
      "profile": [
        "Agente da S.H.I.E.L.D. e arqueiro, sem poderes. É o único Vingador original com uma vida comum: esposa e três filhos numa fazenda que quase ninguém conhece.",
        "A família inteira some no estalo. Durante os cinco anos do Blip ele vira Ronin, um justiceiro que mata criminosos pelo mundo. Natasha o traz de volta, e em Vormir ele sobrevive porque ela se sacrifica no lugar dele.",
        "Em Gavião Arqueiro, o passado como Ronin volta para cobrá-lo, e ele encontra uma sucessora em Kate Bishop. Usa aparelho auditivo, sequela de anos de explosões."
      ],
      "now": "Aposentado com a família. Passou o posto a Kate Bishop. Não está no elenco anunciado de Doomsday.",
      "inDoomsday": false,
      "appearances": {
        "thor": "Aparição de um minuto: de arco armado, vigia Thor na base montada em volta do martelo.",
        "ving1": "Tem a mente dominada por Loki logo na primeira cena e passa metade do filme atacando os colegas. Natasha o derruba e o traz de volta.",
        "ving2": "Revela aos colegas a fazenda, a esposa e os filhos. Convence Wanda a lutar e vê Pietro morrer no seu lugar.",
        "gcivil": "Aposentado, volta para tirar Wanda da base e luta do lado de Steve. É preso na Balsa e, depois, aceita prisão domiciliar.",
        "ultimato": "Perde a família inteira no estalo e passa cinco anos matando criminosos como Ronin. Em Vormir, briga com Natasha para ser ele o sacrificado e perde.",
        "gaviao": "Tenta chegar em casa para o Natal e fica preso às consequências dos anos como Ronin. Treina Kate Bishop, enfrenta Yelena e queima o traje.",
        "viuva": "Não aparece. É citado como o parceiro de Natasha no atentado de Budapeste."
      }
    },
    {
      "id": "rhodes",
      "type": "p",
      "group": "Vingadores e aliados",
      "name": "James Rhodes",
      "description": "O Máquina de Combate.",
      "profile": [
        "Coronel da Força Aérea e melhor amigo de Tony Stark. Usa uma armadura Stark pesada e armada. É o elo dos Vingadores com os militares.",
        "Em Guerra Civil é atingido por engano e fica paraplégico; volta a andar com um suporte criado por Stark. Invasão Secreta revela que, em algum momento, ele foi sequestrado e substituído por uma Skrull. A série não diz desde quando, o que deixa em dúvida quais cenas recentes eram dele."
      ],
      "now": "Resgatado e em recuperação. O filme solo dele, Armor Wars, não tem data.",
      "inDoomsday": false,
      "appearances": {
        "hf1": "Oficial de ligação entre as Forças Armadas e a empresa de Stark.",
        "hf2": "Leva uma armadura para a Força Aérea e vira o Máquina de Combate.",
        "gcivil": "Apoia os Acordos. É atingido por um disparo do Visão e fica paraplégico.",
        "ultimato": "Vai a 2014 com Nebulosa buscar a Joia do Poder.",
        "invasao": "O Rhodes que aconselha o presidente é uma Skrull. O verdadeiro é achado vivo, ainda de roupa de hospital.",
        "hf3": "Com a armadura repintada e rebatizada de Patriota de Ferro, cai numa armadilha e depois ajuda Stark a salvar o presidente.",
        "ving2": "Ajuda na batalha de Sokovia e entra para a nova formação dos Vingadores.",
        "ginfinita": "Desobedece a Ross, recebe os foragidos na base e luta em Wakanda.",
        "cmarvel": "Na cena dos créditos, em 2018, acompanha a contagem dos desaparecidos.",
        "falcao": "Conversa com Sam sobre o escudo, no dia em que ele o doa ao museu."
      }
    },
    {
      "id": "sam",
      "type": "p",
      "group": "Vingadores e aliados",
      "name": "Sam Wilson",
      "description": "De Falcão a Capitão América.",
      "profile": [
        "Ex-paraquedista da Força Aérea que trabalha com veteranos em Washington. Conhece Steve Rogers numa corrida matinal e, quando a S.H.I.E.L.D. cai, volta à ação com um par de asas mecânicas. Não tem soro nem poder nenhum.",
        "Some no estalo. Ao voltar, recebe o escudo de um Steve idoso e acha que não deve usá-lo: um homem negro carregando a bandeira é algo que o país ainda não resolveu, como ele aprende ao conhecer Isaiah Bradley, supersoldado negro usado e preso pelo governo nos anos 1950. Depois de ver o que John Walker faz com o título, decide assumi-lo.",
        "Em Admirável Mundo Novo usa um traje de vibranium feito em Wakanda e detém o Hulk Vermelho na conversa tanto quanto na força."
      ],
      "now": "Capitão América e líder dos Vingadores que remontou. Processa os Novos Vingadores pelo uso do nome.",
      "inDoomsday": true,
      "appearances": {
        "cap2": "Veterano que conhece Steve correndo. Abriga os foragidos e volta a voar com as asas mecânicas para derrubar a Hidra.",
        "gcivil": "Do lado de Steve desde o início. É preso na Balsa depois da luta no aeroporto e solto por ele.",
        "ginfinita": "Luta em Wakanda e vira pó no estalo.",
        "ultimato": "É a voz no rádio que anuncia a chegada dos que voltaram. No fim, recebe o escudo de um Steve idoso.",
        "falcao": "Devolve o escudo por achar que não é dele, vê John Walker desonrá-lo, conhece Isaiah Bradley e decide ser o Capitão América do seu jeito.",
        "cap4": "Sem soro, evita uma guerra com o Japão e detém o Hulk Vermelho. Aceita remontar os Vingadores.",
        "thunder": "Não aparece. Na cena final, sabe-se que tem a própria equipe e processa o grupo de Valentina pelo nome.",
        "doomsday": "No elenco, à frente dos Vingadores da Terra principal.",
        "ving2": "Aparece na festa e, no fim, entra para a nova formação dos Vingadores.",
        "hformiga": "De guarda na base dos Vingadores, luta com Scott Lang e perde. Depois o indica a Steve."
      }
    },
    {
      "id": "bucky",
      "type": "p",
      "group": "Vingadores e aliados",
      "name": "Bucky Barnes",
      "description": "O Soldado Invernal.",
      "profile": [
        "James Buchanan Barnes, melhor amigo de Steve desde a infância. Cai de um trem numa missão em 1945 e é dado como morto. A Hidra o encontra, dá a ele um braço de metal e uma versão do soro e o mantém congelado entre missões, com a memória apagada. Por décadas ele é o assassino por trás de mortes que mudaram a história, incluindo a dos pais de Tony Stark.",
        "Steve o reconhece em 2014 e passa dois filmes tentando trazê-lo de volta. Bucky é curado da programação em Wakanda, onde recebe um braço de vibranium e o apelido de Lobo Branco. Some no estalo.",
        "Depois, faz terapia obrigatória e tenta reparar o que fez. Elege-se deputado e, em Thunderbolts*, larga o Congresso para ajudar o grupo de Yelena."
      ],
      "now": "Integrante dos Novos Vingadores.",
      "inDoomsday": true,
      "appearances": {
        "cap1": "Sargento, amigo de infância de Steve. É capturado pela Hidra, resgatado, e cai de um trem nos Alpes.",
        "cap2": "Sobreviveu. A Hidra lhe deu um braço de metal e o usa há setenta anos como assassino. Reconhece Steve no fim e o tira do rio.",
        "gcivil": "Incriminado pelo atentado em Viena. Zemo reativa sua programação. Revela-se que matou os pais de Stark em 1991. Pede para ser congelado em Wakanda.",
        "pantera": "Na cena dos créditos, acorda numa aldeia de Wakanda, livre da programação, e recebe o apelido de Lobo Branco.",
        "ginfinita": "Recebe um braço novo, luta em Wakanda e é o primeiro a virar pó diante de Steve.",
        "falcao": "Tenta reparar os crimes do Soldado Invernal com uma lista de nomes. Tira Zemo da prisão e ajuda Sam contra os Apátridas.",
        "cap4": "Aparição rápida para consolar Sam. É candidato ao Congresso.",
        "thunder": "Deputado. Investiga Valentina, prende o grupo de Yelena para depor e acaba entrando nele.",
        "doomsday": "No elenco.",
        "ultimato": "Volta para a batalha final. No fim, sabe de antemão que Steve não vai retornar e se despede dele."
      }
    },
    {
      "id": "wanda",
      "type": "p",
      "group": "Vingadores e aliados",
      "name": "Wanda Maximoff",
      "description": "A Feiticeira Escarlate.",
      "profile": [
        "Sokoviana que perdeu os pais num bombardeio com um míssil das Indústrias Stark. Ela e o irmão gêmeo, Pietro, se voluntariam para experimentos da Hidra com o cetro de Loki. A Joia da Mente desperta nela um poder que já existia: mover objetos, entrar em mentes e, mais tarde, alterar a própria realidade.",
        "Começa como inimiga dos Vingadores, muda de lado e perde o irmão na mesma batalha. Apaixona-se por Visão. Em Guerra Infinita é obrigada a matá-lo para destruir a Joia, e Thanos desfaz o gesto e o mata de novo na frente dela.",
        "O luto a leva a criar Westview. Lá descobre que é a Feiticeira Escarlate, figura de profecia capaz de magia do caos, e fica com o Darkhold. O livro a convence de que pode ter os filhos de volta tomando-os de outra Wanda em outro universo. Em Multiverso da Loucura ela mata quem aparece no caminho, até ver o medo no rosto dos meninos. Destrói o Darkhold em todos os universos e deixa a montanha cair sobre si."
      ],
      "now": "Dada como morta, sem corpo mostrado. O filho Billy está vivo. Não está no elenco anunciado de Doomsday.",
      "inDoomsday": false,
      "appearances": {
        "ving2": "Odeia Stark pelas armas que mataram seus pais. Ajuda Ultron, descobre o que ele quer, muda de lado e perde o irmão na batalha.",
        "gcivil": "Em Lagos, desvia uma explosão para um prédio e mata civis. Fica confinada na base, foge com Clint e é presa na Balsa.",
        "ginfinita": "Vive escondida com Visão na Escócia. Em Wakanda, destrói a Joia da Mente e o mata; Thanos volta o tempo e o mata de novo. Vira pó.",
        "ultimato": "Volta e enfrenta Thanos sozinha, a ponto de ele mandar bombardear o próprio exército para se livrar dela.",
        "wandavision": "Cobre uma cidade com uma fantasia em que Visão está vivo e os dois têm filhos. Descobre que é a Feiticeira Escarlate, desfaz tudo e fica com o Darkhold.",
        "estranho2": "Corrompida pelo livro, caça America Chavez por vários universos e mata os Illuminati. Vê o medo dos filhos, destrói o Darkhold e some sob os escombros.",
        "agatha": "Não aparece. É dada como morta, e é a busca do filho Billy que move a série."
      }
    },
    {
      "id": "visao",
      "type": "p",
      "group": "Vingadores e aliados",
      "name": "Visão",
      "description": "O androide que nasceu de uma Joia.",
      "profile": [
        "Criado no meio da crise de Ultron. O corpo, de vibranium e tecido sintético, foi feito por Ultron para si mesmo. Os Vingadores o roubam, e Stark carrega nele o que restava de J.A.R.V.I.S., sua inteligência artificial. A Joia da Mente, na testa, dá a consciência. Thor completa o processo com um raio.",
        "Atravessa matéria, voa e dispara energia pela Joia. É gentil e curioso, e o primeiro ser além de Thor a erguer o martelo. Morre em Guerra Infinita quando a Joia é arrancada.",
        "Existem agora dois. O Visão de WandaVision foi criado pela magia de Wanda e se desfez com Westview. O outro é o corpo original, reconstruído por uma agência do governo, todo branco, sem lembranças. O Visão de Wanda transmitiu a ele as memórias antes de sumir, e o branco saiu voando."
      ],
      "now": "O Visão branco está solto. A série VisionQuest, de outubro de 2026, é sobre ele. Não está no elenco anunciado de Doomsday.",
      "inDoomsday": false,
      "appearances": {
        "ving2": "Nasce do corpo que Ultron fez para si, da mente de J.A.R.V.I.S. e da Joia da Mente. Ergue o martelo de Thor e destrói o último Ultron.",
        "gcivil": "Apoia os Acordos por um cálculo: a força da equipe atrai desafios. Vigia Wanda e, no aeroporto, acerta Rhodes por engano.",
        "ginfinita": "Ferido, pede a Wanda que destrua a Joia. Morre duas vezes: pela mão dela, e pela de Thanos.",
        "wandavision": "São dois. Um é criado pela magia de Wanda e some com a cidade. O outro é o corpo original, reconstruído em branco, que recebe as memórias e parte.",
        "visionquest": "Protagonista. O Visão branco tenta recuperar quem foi."
      }
    },
    {
      "id": "scott",
      "type": "p",
      "group": "Vingadores e aliados",
      "name": "Scott Lang",
      "description": "O Homem-Formiga.",
      "profile": [
        "Engenheiro elétrico preso por invadir e expor a empresa em que trabalhava. Ao sair, Hank Pym o escolhe para vestir um traje que encolhe e aumenta de tamanho. Faz tudo pela filha, Cassie.",
        "Fica do lado de Steve em Guerra Civil e paga com prisão domiciliar. Na hora do estalo está dentro do Reino Quântico, sem ninguém do lado de fora para puxá-lo. Sai cinco anos depois, para ele cinco horas, por causa de um rato que esbarra no painel. É a ideia dele que torna Ultimato possível.",
        "Em Quantumania já é celebridade e autor de um livro de memórias. Enfrenta Kang e sai sem saber se o venceu de verdade."
      ],
      "now": "Vive em San Francisco com Hope e Cassie.",
      "inDoomsday": true,
      "appearances": {
        "hformiga": "Ex-presidiário escolhido por Hank Pym para vestir o traje. Encolhe até o Reino Quântico e volta.",
        "gcivil": "Chamado por Sam, luta do lado de Steve no aeroporto e vira gigante pela primeira vez. É preso.",
        "hformiga2": "Em prisão domiciliar, ajuda a resgatar Janet. Está dentro do Reino Quântico quando os Pym viram pó.",
        "ultimato": "Sai do Reino Quântico cinco anos depois, encontra a filha crescida e leva aos Vingadores a ideia da viagem no tempo.",
        "quantumania": "Famoso e acomodado, é sugado com a família para o Reino Quântico e enfrenta Kang para salvar a filha.",
        "doomsday": "No elenco, com a filha, Cassie."
      }
    },
    {
      "id": "hope",
      "type": "p",
      "group": "Vingadores e aliados",
      "name": "Hope van Dyne",
      "description": "A Vespa.",
      "profile": [
        "Filha de Hank Pym e Janet van Dyne. Cresceu ressentida com o pai, que escondeu como a mãe desapareceu. É mais preparada que Scott e demora a ganhar o próprio traje, com asas e disparos.",
        "Some no estalo com os pais. Depois do Blip, comanda a empresa da família, usando as partículas Pym para fins humanitários."
      ],
      "now": "Vive com Scott. Não está no elenco anunciado de Doomsday.",
      "inDoomsday": false,
      "appearances": {
        "hformiga": "Trabalha ao lado de Darren Cross como espiã do pai. Treina Scott e se ressente de não ser ela a vestir o traje.",
        "hformiga2": "Estreia como Vespa, com asas e disparos. Ajuda a trazer a mãe de volta e vira pó no estalo.",
        "quantumania": "Dirige a empresa da família. No Reino Quântico, descobre o que a mãe escondia e ajuda Scott a derrotar Kang.",
        "ultimato": "Volta para a batalha final."
      }
    },
    {
      "id": "hank",
      "type": "p",
      "group": "Vingadores e aliados",
      "name": "Hank Pym",
      "description": "O inventor das partículas Pym.",
      "profile": [
        "Cientista que descobriu uma partícula capaz de alterar a distância entre átomos, o que permite encolher e crescer. Foi o primeiro Homem-Formiga, a serviço da S.H.I.E.L.D. durante a Guerra Fria, e deixou a agência em 1989 ao descobrir que ela tentava copiar a fórmula.",
        "É dele também a tecnologia que permite entrar no Reino Quântico. Sem as partículas Pym, não haveria viagem no tempo em Ultimato."
      ],
      "now": "Vivo, com a família.",
      "inDoomsday": false,
      "appearances": {
        "hformiga": "Afastado da própria empresa, arma um roubo para testar Scott e o treina para destruir o projeto de Cross.",
        "hformiga2": "Foragido, constrói o túnel quântico, entra nele e traz Janet de volta depois de trinta anos.",
        "ultimato": "Em 1970, é dele o laboratório de onde Steve tira as partículas para a viagem de volta. No presente, volta do estalo.",
        "quantumania": "Ajuda a neta a montar o aparelho que causa tudo. Suas formigas, evoluídas por milênios, decidem a batalha."
      }
    },
    {
      "id": "janet",
      "type": "p",
      "group": "Vingadores e aliados",
      "name": "Janet van Dyne",
      "description": "A primeira Vespa.",
      "profile": [
        "Esposa de Hank Pym e parceira de missões. Em 1987 encolhe além do limite para desarmar um míssil e fica presa no Reino Quântico por trinta anos.",
        "Lá conheceu Kang, exilado, e o ajudou a consertar sua nave até descobrir quem ele era. Destruiu a fonte de energia da nave para prendê-lo e nunca contou isso à família."
      ],
      "now": "Viva, com a família.",
      "inDoomsday": false,
      "appearances": {
        "hformiga2": "Manda uma mensagem pela mente de Scott e é encontrada por Hank. Divide parte de sua energia com Ava Starr.",
        "quantumania": "Tenta impedir a filha e a neta de mexer com o Reino Quântico. Lá, confessa que ajudou Kang e depois o sabotou."
      }
    },
    {
      "id": "strange",
      "type": "p",
      "group": "Vingadores e aliados",
      "name": "Stephen Strange",
      "description": "O Doutor Estranho.",
      "profile": [
        "Neurocirurgião brilhante e vaidoso. Um acidente de carro destrói os nervos das mãos. Depois de gastar tudo com tratamentos, vai a Kamar-Taj, no Nepal, e encontra uma ordem de magos. Aprende rápido e passa a guardar o Santuário de Nova York e a Joia do Tempo.",
        "Em Guerra Infinita usa a Joia para ver 14 milhões de desfechos e encontra um só em que Thanos perde. Para que ele aconteça, entrega a Joia e some no estalo. Por ter ficado cinco anos fora, perde o posto de Mago Supremo para Wong.",
        "Na Saga do Multiverso é quem mais mexe com o que não devia. O feitiço malfeito para Peter Parker racha as fronteiras entre universos. Em Multiverso da Loucura usa o Darkhold e ocupa o cadáver de outra versão de si para deter Wanda, o que lhe dá um terceiro olho. Na última cena, uma feiticeira chamada Clea avisa que ele causou uma incursão e o leva para consertá-la."
      ],
      "now": "Em outra dimensão com Clea. Não está no elenco anunciado de Doomsday, mas o filme dele está na lista oficial.",
      "inDoomsday": false,
      "appearances": {
        "estranho": "Cirurgião que perde as mãos, aprende magia em Kamar-Taj e derrota Dormammu prendendo-o num laço de tempo.",
        "ragnarok": "Participação curta: localiza Odin para Thor e manda os dois irmãos embora de Nova York.",
        "ginfinita": "Levado para o espaço, vê 14 milhões de futuros. Entrega a Joia do Tempo a Thanos para salvar Stark e vira pó dizendo que não havia outro jeito.",
        "ultimato": "Traz os exércitos pelos portais. No momento decisivo, levanta um dedo para Stark: é a única chance.",
        "aranha3": "Faz o feitiço que dá errado e, no fim, o que apaga Peter Parker da memória do mundo.",
        "estranho2": "Protege America Chavez de Wanda, conhece as incursões na Terra-838, usa o Darkhold e ganha um terceiro olho. Parte com Clea."
      }
    },
    {
      "id": "wong",
      "type": "p",
      "group": "Vingadores e aliados",
      "name": "Wong",
      "description": "O Mago Supremo.",
      "profile": [
        "Bibliotecário de Kamar-Taj e companheiro de Strange. Sério no trabalho e bem-humorado fora dele.",
        "Vira Mago Supremo durante o Blip, por ausência de Strange. Na Fase 4 é o personagem que mais circula: apresenta Shang-Chi aos Vingadores, treina America Chavez, aparece em Mulher-Hulk."
      ],
      "now": "Mago Supremo, em Kamar-Taj.",
      "inDoomsday": false,
      "appearances": {
        "estranho": "Assume a biblioteca de Kamar-Taj depois do roubo. Morre em Hong Kong, e Strange o traz de volta ao reverter o tempo.",
        "ginfinita": "Explica a Stark o que são as Joias do Infinito e fica para guardar o Santuário.",
        "shangchi": "Busca Shang-Chi e Katy em San Francisco e os leva a Kamar-Taj para examinar os anéis.",
        "aranha3": "Já como Mago Supremo, desaconselha o feitiço de Peter e sai de cena.",
        "estranho2": "Defende Kamar-Taj de Wanda, é obrigado a levá-la a Wundagore e ajuda Strange a enfrentá-la.",
        "mulherhulk": "Cliente e testemunha de Jennifer Walters. No fim, tira o Abominável da prisão.",
        "ultimato": "Abre os portais por onde chegam os exércitos na batalha final."
      }
    },
    {
      "id": "peter",
      "type": "p",
      "group": "Vingadores e aliados",
      "name": "Peter Parker",
      "description": "O Homem-Aranha.",
      "profile": [
        "Adolescente do Queens, criado pela tia May, com força, agilidade e um sentido que o avisa do perigo. Constrói os próprios lançadores de teia. Stark o recruta em Guerra Civil e vira uma figura paterna. Os filmes dele são coproduções com a Sony, dona dos direitos do personagem no cinema.",
        "Some no estalo e volta para ver Stark morrer. Em Longe de Casa, o vilão Mysterio divulga um vídeo que o incrimina e revela seu nome. A vida dele e a dos amigos vira um inferno.",
        "Em Sem Volta para Casa, o feitiço que deveria resolver isso atrai visitantes de outros universos, entre eles dois Homens-Aranha mais velhos. A tia May é morta. Para salvar a realidade, Peter pede a Strange que o mundo inteiro o esqueça. MJ e Ned não o reconhecem mais, e ele escolhe não contar.",
        "Um Novo Dia o reencontra quatro anos depois, sozinho por opção. O corpo dele muda: os sentidos se aguçam e ele passa a produzir teia, o que no começo o torna perigoso. O filme é sobre aceitar ajuda. Ele trabalha com Frank Castle, Bruce Banner e Yelena Belova, enfrenta e depois consola Jean Grey, e termina se apresentando de novo a Ned."
      ],
      "now": "Adulto, ainda esquecido por todos, com teia orgânica e poderes mais fortes. Reaproximou-se de Ned e de MJ, que continuam sem lembrar dele. A cena pós-créditos de Um Novo Dia registra um Homem-Aranha fora da Terra. Tom Holland não está no elenco anunciado de Doomsday.",
      "inDoomsday": false,
      "appearances": {
        "gcivil": "Tem 15 anos e age no Queens com um traje caseiro. Stark o recruta para a luta no aeroporto e lhe dá um traje novo.",
        "aranha1": "De volta ao colégio, quer missões de verdade. Enfrenta o Abutre, pai da garota de quem gosta, e no fim recusa a vaga nos Vingadores.",
        "ginfinita": "Entra escondido na nave que leva Strange, luta em Titã e é um dos que viram pó, nos braços de Stark.",
        "ultimato": "Volta com todos, entra na batalha final e está ao lado de Stark quando ele morre.",
        "aranha2": "De luto, entrega a tecnologia de Stark a Mysterio por achar que não está à altura. Corrige o erro e termina com o nome exposto ao mundo.",
        "aranha3": "Tenta apagar da memória do mundo que é o Homem-Aranha e acaba atraindo vilões de outros universos. Perde a tia May e escolhe ser esquecido por todos.",
        "aranha4": "Quatro anos depois, sozinho. Ganha teia orgânica, enfrenta Jean Grey e o Hulk possuído, leva um tiro por Jean e decide voltar a ter amigos."
      }
    },
    {
      "id": "mj",
      "type": "p",
      "group": "Vingadores e aliados",
      "name": "MJ",
      "description": "Michelle Jones-Watson.",
      "profile": [
        "Colega de escola de Peter, observadora e de humor seco. Descobre sozinha que ele é o Homem-Aranha e os dois namoram.",
        "Depois do feitiço de Sem Volta para Casa, não lembra que o conheceu."
      ],
      "now": "Voltou do MIT para Nova York. Leu a carta de Peter e sabe o que ele diz ter vivido com ela, mas não recuperou a memória.",
      "inDoomsday": false,
      "appearances": {
        "aranha1": "Colega calada do decatlo, que observa Peter mais do que ele percebe.",
        "aranha2": "Descobre a identidade de Peter.",
        "aranha3": "Ajuda a capturar e a curar os vilões, cai da Estátua da Liberdade e é salva por outro Peter. Esquece o namorado no feitiço final.",
        "aranha4": "Volta à cidade com um namorado. É atacada por Jean Grey, salva por Peter, ajuda a terminar os inibidores e encontra a carta que ele nunca enviou."
      }
    },
    {
      "id": "ned",
      "type": "p",
      "group": "Vingadores e aliados",
      "name": "Ned Leeds",
      "description": "O melhor amigo de Peter.",
      "profile": [
        "Primeiro a descobrir a identidade de Peter e seu apoio técnico improvisado. Em Sem Volta para Casa revela conseguir abrir portais com o anel de Strange.",
        "Também esqueceu Peter. Em Um Novo Dia é dele o aplicativo que rastreia aparições do Homem-Aranha."
      ],
      "now": "Voltou a ser amigo de Peter, sem lembrar do passado. O rastreador que ele criou detectou um Homem-Aranha fora da Terra.",
      "inDoomsday": false,
      "appearances": {
        "aranha1": "Descobre a identidade de Peter.",
        "aranha3": "Abre portais; esquece Peter.",
        "aranha4": "Mora com MJ. Conhece o Homem-Aranha mascarado e, no fim, Peter se apresenta a ele com o aperto de mão antigo. O aplicativo dele é a cena pós-créditos.",
        "aranha2": "Passa a viagem à Europa namorando uma colega e encobrindo as saídas de Peter.",
        "ginfinita": "No ônibus da escola, distrai os colegas para Peter sair pela janela."
      }
    },
    {
      "id": "tchalla",
      "type": "p",
      "group": "Vingadores e aliados",
      "name": "T'Challa",
      "description": "O Pantera Negra.",
      "profile": [
        "Príncipe e depois rei de Wakanda. O Pantera Negra é o título do protetor do país: quem o recebe toma uma erva que dá força e sentidos ampliados e veste um traje de vibranium.",
        "Estreia em Guerra Civil, vingando o pai. No próprio filme, enfrenta o primo Killmonger, perde o trono, recupera e conclui que o primo tinha razão num ponto: Wakanda não podia continuar escondida enquanto o mundo sofria. Abre o país. Some no estalo e volta para a batalha final.",
        "O ator Chadwick Boseman morreu em 2020. A Marvel decidiu não substituí-lo, e T'Challa morre de uma doença fora de cena, no começo de Wakanda para Sempre. Deixou um filho com Nakia, criado em segredo no Haiti, que também se chama T'Challa."
      ],
      "now": "Morto. A irmã, Shuri, é a Pantera Negra.",
      "inDoomsday": false,
      "appearances": {
        "gcivil": "Vê o pai morrer no atentado de Viena e caça Bucky. Ao descobrir o culpado verdadeiro, desiste da vingança e abriga Bucky em Wakanda.",
        "pantera": "Coroado, é desafiado e derrotado pelo primo Killmonger. Volta, vence e decide abrir Wakanda para o mundo.",
        "ginfinita": "Recebe Visão e os Vingadores e lidera o exército na batalha. Vira pó diante de Okoye.",
        "ultimato": "É o primeiro a sair dos portais na batalha final.",
        "wakanda": "Morre de doença antes da primeira cena. O filme é o luto por ele."
      }
    },
    {
      "id": "carol",
      "type": "p",
      "group": "Vingadores e aliados",
      "name": "Carol Danvers",
      "description": "A Capitã Marvel.",
      "profile": [
        "Piloto de testes da Força Aérea. Em 1989, um motor experimental movido pela energia do Tesseract explode e ela absorve a descarga. O império Kree a leva, apaga sua memória e a usa como soldado até ela se lembrar de quem é, em 1995.",
        "Voa, sobrevive no espaço e dispara energia. É uma das pessoas mais poderosas do MCU e passa a maior parte do tempo longe da Terra, o que explica a ausência dela em quase tudo. Foi ela quem inspirou em Fury o nome Vingadores.",
        "Em As Marvels, corrige um erro antigo: ao destruir a inteligência que governava os Kree, deixou o planeta deles em guerra civil."
      ],
      "now": "De volta à Terra, na casa que era dos Rambeau. As Marvels ficou fora da lista oficial, e ela não está no elenco anunciado.",
      "inDoomsday": false,
      "appearances": {
        "cmarvel": "Soldado Kree sem memória, descobre na Terra de 1995 que foi a piloto Carol Danvers. Liberta os poderes e parte para ajudar os Skrulls.",
        "ultimato": "Resgata Stark do espaço, ajuda a achar Thanos e, na batalha final, atravessa a nave dele.",
        "shangchi": "Na cena dos créditos, examina os dez anéis por holograma.",
        "msmarvel": "Aparece no último segundo, no quarto de Kamala, depois de trocar de lugar com ela.",
        "marvels": "Enfrenta as consequências de ter deixado o planeta Kree em ruínas. Reacende o sol dele e perde Monica para outro universo."
      }
    },
    {
      "id": "fury",
      "type": "p",
      "group": "Vingadores e aliados",
      "name": "Nick Fury",
      "description": "O homem que juntou os Vingadores.",
      "profile": [
        "Diretor da S.H.I.E.L.D. Depois de conhecer Carol Danvers em 1995, conclui que a Terra precisa de gente extraordinária do seu lado e passa anos montando a Iniciativa Vingadores. Perdeu o olho esquerdo num arranhão de Goose, criatura alienígena com aparência de gato.",
        "Finge a própria morte quando a agência cai e passa a agir nas sombras. Some no estalo. Depois do Blip vai trabalhar no espaço, e quem aparece no lugar dele em Longe de Casa é o Skrull Talos.",
        "Invasão Secreta mostra um Fury cansado, cobrado por uma promessa que não cumpriu: achar um lar para os refugiados Skrull."
      ],
      "now": "Comanda a estação espacial S.A.B.E.R.",
      "inDoomsday": false,
      "appearances": {
        "hf1": "Aparece na cena pós-créditos, na casa de Stark, para falar da Iniciativa Vingadores.",
        "ving1": "Reúne a equipe contra a vontade dos superiores e usa a morte de Coulson para uni-la.",
        "cap2": "Sofre um atentado, finge a morte e ajuda Steve a derrubar a S.H.I.E.L.D. que ele próprio dirigia.",
        "cmarvel": "Em 1995, agente de campo com os dois olhos. Conhece Carol e os Skrulls e tem a ideia dos Vingadores.",
        "aranha2": "O Fury do filme é o Skrull Talos. O verdadeiro está numa estação espacial.",
        "invasao": "Volta à Terra para deter os Skrulls rebeldes e é cobrado pela promessa que não cumpriu.",
        "marvels": "Comanda a estação S.A.B.E.R. e dá apoio a Carol, Monica e Kamala.",
        "hf2": "Revela a Stark quem Natasha é, entrega o material do pai dele e o aceita só como consultor.",
        "thor": "Na cena dos créditos, mostra o Tesseract a Selvig.",
        "cap1": "Recebe Steve em Times Square e lhe conta quanto tempo passou.",
        "ving2": "Aparece na fazenda de Barton para dar rumo à equipe e chega a Sokovia com uma nave para a evacuação.",
        "ginfinita": "Na cena dos créditos, aciona o pager de Carol Danvers segundos antes de virar pó.",
        "ultimato": "Volta do estalo e aparece no funeral de Stark."
      }
    },
    {
      "id": "hill",
      "type": "p",
      "group": "Vingadores e aliados",
      "name": "Maria Hill",
      "description": "O braço direito de Fury.",
      "profile": [
        "Vice-diretora da S.H.I.E.L.D. e, depois da queda da agência, funcionária de Stark. Está em quase todos os momentos em que os Vingadores precisam de coordenação.",
        "É morta no primeiro episódio de Invasão Secreta por um Skrull com o rosto de Fury."
      ],
      "now": "Morta.",
      "inDoomsday": false,
      "appearances": {
        "ving1": "Coordena a nave da S.H.I.E.L.D. durante o ataque de Loki.",
        "invasao": "É morta no primeiro episódio por Gravik, que usava o rosto de Fury.",
        "cap2": "Resgata Steve, Natasha e Sam e os leva ao Fury vivo.",
        "ving2": "Trabalha para Stark e ajuda Fury a evacuar Sokovia.",
        "ginfinita": "Na cena dos créditos, vira pó ao lado de Fury.",
        "ultimato": "Volta do estalo e aparece no funeral de Stark.",
        "aranha2": "A Hill da viagem é uma Skrull disfarçada."
      }
    },
    {
      "id": "coulson",
      "type": "p",
      "group": "Vingadores e aliados",
      "name": "Phil Coulson",
      "description": "O agente que uniu a equipe.",
      "profile": [
        "Agente da S.H.I.E.L.D. que acompanha Stark, Thor e os demais nos primeiros filmes. Fã de Steve Rogers.",
        "Loki o mata em Os Vingadores, e Fury usa a morte para fazer a equipe reagir. Aparece jovem em Capitã Marvel, passado em 1995."
      ],
      "now": "Morto nos filmes.",
      "inDoomsday": false,
      "appearances": {
        "hf1": "Tenta marcar uma reunião com Stark o filme inteiro e ajuda Pepper a enfrentar Stane.",
        "ving1": "Enfrenta Loki sozinho e é ferido de morte. Fury usa a morte dele para unir a equipe.",
        "cmarvel": "Em 1995, agente novato, deixa Fury e Carol escaparem.",
        "hf2": "Vigia Stark e, no fim, encontra o martelo de Thor no Novo México.",
        "thor": "Isola o martelo e confisca a pesquisa de Jane Foster."
      }
    },
    {
      "id": "peggy",
      "type": "p",
      "group": "Vingadores e aliados",
      "name": "Peggy Carter",
      "description": "Agente, fundadora da S.H.I.E.L.D. e o amor de Steve.",
      "profile": [
        "Oficial britânica que trabalha no programa do supersoldado e acredita em Steve antes do soro. Depois da guerra, funda a S.H.I.E.L.D. com Howard Stark.",
        "Na linha principal, morre idosa em 2016, e Steve carrega o caixão. Em Ultimato, Steve volta ao passado e vive com ela em outra linha do tempo. Existe ainda a Capitã Carter, variante que tomou o soro no lugar de Steve, vista em What If...? e em Multiverso da Loucura."
      ],
      "now": "A atriz, Hayley Atwell, está no elenco de Doomsday. Não se sabe qual versão ela interpreta.",
      "inDoomsday": true,
      "appearances": {
        "cap1": "Agente britânica no programa do supersoldado. Acredita em Steve antes do soro e combina com ele uma dança que não acontece.",
        "cap2": "Idosa e com falhas de memória, recebe a visita de Steve.",
        "gcivil": "Morre. Steve carrega o caixão, e uma frase dela, lida no velório, o decide contra os Acordos.",
        "ultimato": "Steve a vê por uma janela em 1970 e, no fim, volta para viver com ela.",
        "whatif": "Uma variante recebe o soro no lugar de Steve e vira a Capitã Carter.",
        "estranho2": "A Capitã Carter da Terra-838 integra os Illuminati e é morta por Wanda.",
        "doomsday": "No elenco.",
        "hformiga": "Em 1989, está na reunião em que Hank Pym deixa a S.H.I.E.L.D."
      }
    },
    {
      "id": "pepper",
      "type": "p",
      "group": "Vingadores e aliados",
      "name": "Pepper Potts",
      "description": "Sócia, esposa e viúva de Tony Stark.",
      "profile": [
        "Assistente de Stark, depois presidente da empresa e esposa. Usa a armadura Resgate na batalha final de Ultimato. Tem com Tony uma filha, Morgan."
      ],
      "now": "Cria Morgan. Não aparece desde 2019.",
      "inDoomsday": false,
      "appearances": {
        "hf1": "Assistente de Stark. Descobre a traição de Stane e sobrecarrega o reator a pedido de Tony.",
        "hf2": "Recebe a presidência da empresa e, no fim, começa a namorar Tony.",
        "ultimato": "Casada com Tony, mãe de Morgan. Luta de armadura e diz a ele, no fim, que pode descansar.",
        "hf3": "Sequestrada por Killian, recebe o vírus Extremis e é ela quem o mata.",
        "ving1": "Mora com Tony na torre recém-inaugurada. É para ela a ligação que ele faz ao entrar no portal.",
        "aranha1": "Na última cena, organiza a coletiva em que Peter seria apresentado como Vingador.",
        "ginfinita": "Pede a Tony pelo telefone que não vá, quando ele já está a caminho do espaço."
      }
    },
    {
      "id": "happy",
      "type": "p",
      "group": "Vingadores e aliados",
      "name": "Happy Hogan",
      "description": "O motorista que virou família.",
      "profile": [
        "Chefe de segurança de Stark e, depois da morte dele, a ponte entre Peter Parker e o legado. Namora a tia May por um tempo. Depois do feitiço, não lembra de Peter."
      ],
      "now": "Trabalha nas Indústrias Stark.",
      "inDoomsday": false,
      "appearances": {
        "aranha1": "Encarregado por Stark de acompanhar Peter, ignora as mensagens dele até o fim.",
        "aranha2": "Busca Peter na Holanda, dá a ele acesso ao laboratório do avião e ajuda os amigos em Londres.",
        "aranha3": "Empresta o apartamento para Peter tentar curar os vilões. Depois do feitiço, não o reconhece.",
        "hf1": "Motorista e guarda-costas de Stark.",
        "hf2": "Ajuda Natasha a invadir a fábrica de Hammer.",
        "hf3": "Chefe de segurança da empresa. Fica em coma depois de uma explosão, o que leva Stark a desafiar o Mandarim.",
        "ultimato": "No funeral, cuida de Morgan, filha de Tony.",
        "deadpool": "Entrevista Wade Wilson para os Vingadores e o recusa."
      }
    },
    {
      "id": "yelena",
      "type": "p",
      "group": "Novos heróis",
      "name": "Yelena Belova",
      "description": "A irmã de Natasha, coração dos Novos Vingadores.",
      "profile": [
        "Passou a infância em Ohio numa família de mentira: dois espiões russos se passando por pais, com Natasha como irmã mais velha. Para ela, que tinha seis anos, era real. Depois foi levada à Sala Vermelha e vivia sob controle químico até ser libertada por um antídoto.",
        "Some no estalo. Quando volta, Natasha já morreu. Valentina de Fontaine a contrata como assassina e aponta Clint Barton como culpado; Yelena quase o mata antes de saber a verdade.",
        "Em Thunderbolts* está esgotada e sem propósito. É ela quem alcança Bob quando ele se perde no Vácuo, por reconhecer no rapaz o mesmo vazio."
      ],
      "now": "Líder de fato dos Novos Vingadores.",
      "inDoomsday": true,
      "appearances": {
        "viuva": "Libertada do controle químico da Sala Vermelha, procura Natasha. As duas reencontram os pais de mentira e derrubam o programa.",
        "gaviao": "Voltou do Blip e soube que a irmã morreu. Contratada para matar Clint, quase consegue, até ouvir dele o que houve em Vormir.",
        "thunder": "Esgotada de trabalhar para Valentina, sobrevive à armadilha, lidera o grupo e entra no Vácuo para tirar Bob de lá.",
        "doomsday": "No elenco, com os Novos Vingadores. Um trailer a mostra lutando com Mística.",
        "aranha4": "Aparição curta: passa a Peter a pista sobre os ataques às prisões e descobre nos arquivos quem era Sara Grey."
      }
    },
    {
      "id": "kate",
      "type": "p",
      "group": "Novos heróis",
      "name": "Kate Bishop",
      "description": "A nova Gavião Arqueiro.",
      "profile": [
        "Filha de uma família rica de Nova York. Criança, viu da janela Clint Barton lutar na Batalha de Nova York, no dia em que o pai dela morreu, e decidiu aprender arco e flecha. Aos 22, envolve-se com a máfia ao vestir o antigo traje de Ronin. No fim, descobre que a própria mãe trabalhava para o Rei do Crime."
      ],
      "now": "Parceira de Clint. Kamala Khan a convidou para formar uma equipe. Não está no elenco anunciado de Doomsday.",
      "inDoomsday": false,
      "appearances": {
        "gaviao": "Veste o traje de Ronin por acaso, vira alvo da máfia, aprende com Clint e descobre que a mãe trabalha para o Rei do Crime.",
        "marvels": "Na última cena, recebe em casa a visita de Kamala, que a convida para formar uma equipe."
      }
    },
    {
      "id": "kamala",
      "type": "p",
      "group": "Novos heróis",
      "name": "Kamala Khan",
      "description": "A Ms. Marvel.",
      "profile": [
        "Adolescente de Jersey City, filha de imigrantes paquistaneses e fã declarada de Carol Danvers. Um bracelete herdado da bisavó desperta nela a capacidade de criar construções de luz sólida. Um amigo descobre que há nos genes dela uma mutação, e é a primeira vez que o MCU usa a palavra.",
        "Em As Marvels descobre que o bracelete é metade de um par e passa a trocar de lugar com Carol e Monica. Sai do filme decidida a montar um time de jovens heróis."
      ],
      "now": "Recrutando jovens heróis. Não está no elenco anunciado de Doomsday.",
      "inDoomsday": false,
      "appearances": {
        "msmarvel": "Ganha poderes de um bracelete de família, descobre a origem dele na Partição da Índia e ouve que tem uma mutação.",
        "marvels": "Realiza o sonho de lutar ao lado de Carol. No fim, procura Kate Bishop para montar uma equipe."
      }
    },
    {
      "id": "monica",
      "type": "p",
      "group": "Novos heróis",
      "name": "Monica Rambeau",
      "description": "A agente que ficou do outro lado.",
      "profile": [
        "Filha de Maria Rambeau, melhor amiga de Carol Danvers. Criança em Capitã Marvel, adulta e agente da S.W.O.R.D. em WandaVision. Some no estalo ao lado do leito da mãe e, ao voltar, descobre que ela morreu de câncer três anos antes.",
        "Atravessa várias vezes a barreira de energia de Westview, e isso reescreve suas células: passa a enxergar e absorver todo tipo de energia.",
        "No fim de As Marvels há um rasgo entre universos que só pode ser fechado por dentro. Ela fica do outro lado. Acorda num hospital diante de uma versão da mãe e do Fera, dos X-Men."
      ],
      "now": "Presa num universo onde vivem X-Men. É a ponta mais direta entre o MCU e os mutantes de Doomsday, e não está no elenco anunciado.",
      "inDoomsday": false,
      "appearances": {
        "cmarvel": "Tem 11 anos. É quem convence a mãe a ajudar Carol.",
        "wandavision": "Volta do Blip e descobre que a mãe morreu. Atravessa três vezes a barreira de Westview e ganha poderes.",
        "marvels": "Cobra de Carol os trinta anos de ausência. Fecha por dentro o rasgo entre universos e acorda diante do Fera."
      }
    },
    {
      "id": "shuri",
      "type": "p",
      "group": "Novos heróis",
      "name": "Shuri",
      "description": "A nova Pantera Negra.",
      "profile": [
        "Princesa de Wakanda, irmã mais nova de T'Challa e a mente por trás da tecnologia do país. É ela quem cura Bucky e quem tenta separar a Joia da Mente de Visão sem matá-lo.",
        "Não consegue salvar o irmão da doença e se fecha no laboratório. Quando Namor mata sua mãe, a rainha Ramonda, ela recria em laboratório a erva que dá os poderes do Pantera e a toma. Na visão que se segue, quem a recebe não é a família, é Killmonger. Vence Namor e escolhe não matá-lo."
      ],
      "now": "Pantera Negra. Abriu mão de disputar o trono, que M'Baku reivindica. Conheceu no Haiti o sobrinho, filho de T'Challa.",
      "inDoomsday": true,
      "appearances": {
        "pantera": "Princesa e chefe de tecnologia. Faz os trajes do irmão e luta contra Killmonger.",
        "ginfinita": "Tenta separar a Joia da Mente de Visão sem matá-lo e é interrompida. Vira pó.",
        "wakanda": "Não consegue salvar o irmão. Perde a mãe para Namor, recria a erva, vê Killmonger no plano ancestral e poupa Namor.",
        "doomsday": "No elenco, como Pantera Negra. Um trailer mostra o Quarteto Fantástico em Wakanda.",
        "ultimato": "Volta do estalo para a batalha final."
      }
    },
    {
      "id": "shangchi",
      "type": "p",
      "group": "Novos heróis",
      "name": "Shang-Chi",
      "description": "O herdeiro dos dez anéis.",
      "profile": [
        "Filho de Wenwu, guerreiro que viveu mil anos graças a dez anéis de origem desconhecida e comandou uma organização criminosa com o nome deles. Treinado desde criança para matar, Shang-Chi foge aos 14 anos e vive escondido nos Estados Unidos.",
        "O pai, convencido de que a esposa morta o chama, ataca Ta Lo, a aldeia mágica de onde ela veio, e solta uma criatura que devora almas. Shang-Chi o enfrenta, herda os anéis e derrota a criatura.",
        "Wong o apresenta a Banner e Carol. Ninguém identifica o material nem a idade dos anéis, só que eles emitem um sinal."
      ],
      "now": "Portador dos dez anéis. O sinal segue sem explicação. Um trailer o mostra lutando com Gambit.",
      "inDoomsday": true,
      "appearances": {
        "shangchi": "Foge do pai aos 14 anos, é obrigado a voltar, enfrenta-o na aldeia da mãe e herda os dez anéis.",
        "doomsday": "No elenco."
      }
    },
    {
      "id": "riri",
      "type": "p",
      "group": "Novos heróis",
      "name": "Riri Williams",
      "description": "A Coração de Ferro.",
      "profile": [
        "Estudante de Chicago, aluna do MIT. Constrói um detector de vibranium, o que a põe na mira de Namor, e uma armadura inspirada na de Stark.",
        "Na série dela, sem dinheiro para continuar o projeto, junta-se a uma gangue liderada por Parker Robbins, o Capuz, que tira seus poderes de um pacto. No fim, ela mesma aceita um acordo com Mefisto para ter de volta a melhor amiga, morta anos antes."
      ],
      "now": "Deve um pacto a Mefisto. Não está no elenco anunciado de Doomsday.",
      "inDoomsday": false,
      "appearances": {
        "wakanda": "Inventa o detector de vibranium e vira alvo de Namor. Luta na batalha final com uma armadura própria.",
        "coracao": "Expulsa do MIT, entra para uma gangue para financiar a armadura, enfrenta o Capuz e aceita um pacto com Mefisto."
      }
    },
    {
      "id": "cassie",
      "type": "p",
      "group": "Novos heróis",
      "name": "Cassie Lang",
      "description": "A filha de Scott.",
      "profile": [
        "Criança nos dois primeiros filmes do Homem-Formiga. O pai some por cinco anos e a reencontra adolescente. Em Quantumania tem 18 anos, já foi presa em protestos e construiu um sinalizador para o Reino Quântico, que é o que suga a família para lá. Usa um traje próprio."
      ],
      "now": "Vive com o pai. Kathryn Newton está no elenco de Doomsday.",
      "inDoomsday": true,
      "appearances": {
        "hformiga": "Tem seis anos e é o motivo de tudo o que o pai faz. É feita refém por Cross.",
        "ultimato": "O pai some por cinco anos e a reencontra adolescente.",
        "quantumania": "Constrói o aparelho que leva a família ao Reino Quântico, ganha um traje e lidera a libertação dos rebeldes.",
        "hformiga2": "Com dez anos, ajuda o pai a enganar o FBI durante a prisão domiciliar.",
        "doomsday": "No elenco."
      }
    },
    {
      "id": "america",
      "type": "p",
      "group": "Novos heróis",
      "name": "America Chavez",
      "description": "A menina que atravessa universos.",
      "profile": [
        "Vem de outro universo. Abre portais em forma de estrela entre realidades, poder que só aparece quando ela tem medo e que, na primeira vez, levou embora suas mães. É a única pessoa conhecida sem variantes."
      ],
      "now": "Treina magia em Kamar-Taj. Não está no elenco anunciado de Doomsday.",
      "inDoomsday": false,
      "appearances": {
        "estranho2": "Chega de outro universo fugindo de Wanda. Aprende a controlar os portais e, em vez de atacar, mostra a Wanda os filhos com medo dela. Fica em Kamar-Taj."
      }
    },
    {
      "id": "jen",
      "type": "p",
      "group": "Novos heróis",
      "name": "Jennifer Walters",
      "description": "A Mulher-Hulk.",
      "profile": [
        "Advogada e prima de Bruce Banner. Num acidente de carro, o sangue dele entra num corte dela. Ao contrário do primo, ela mantém a consciência transformada. É contratada para chefiar a divisão de direito de superseres de um escritório. Fala com a câmera."
      ],
      "now": "Advogada em Los Angeles.",
      "inDoomsday": false,
      "appearances": {
        "mulherhulk": "Vira Hulk num acidente, tenta manter a carreira de advogada, é exposta por um fórum de homens ressentidos e reescreve o próprio final."
      }
    },
    {
      "id": "marc",
      "type": "p",
      "group": "Novos heróis",
      "name": "Marc Spector",
      "description": "O Cavaleiro da Lua.",
      "profile": [
        "Mercenário americano salvo da morte por Khonshu, deus egípcio da lua, em troca de servi-lo. Tem transtorno dissociativo de identidade: divide o corpo com Steven Grant, um inglês tímido, e com uma terceira identidade que os dois desconhecem."
      ],
      "now": "Sem aparições desde 2022.",
      "inDoomsday": false,
      "appearances": {
        "cavaleiro": "Descobre que divide o corpo com outras identidades, morre, encara a infância no além e volta para impedir a deusa Ammit."
      }
    },
    {
      "id": "billy",
      "type": "p",
      "group": "Novos heróis",
      "name": "Billy Maximoff",
      "description": "O filho de Wanda que encontrou um corpo.",
      "profile": [
        "Billy e o irmão Tommy foram criados pela magia de Wanda em Westview e deixaram de existir com a cidade. No instante em que a barreira cai, um adolescente da região, William Kaplan, morre num acidente de carro. A alma de Billy ocupa o corpo.",
        "Ele acorda sem as memórias de William e com poderes parecidos com os da mãe. Três anos depois procura Agatha Harkness. Agatha Desde Sempre revela que foi ele, sem saber, quem criou a Estrada das Bruxas."
      ],
      "now": "Procura um corpo para o irmão, Tommy, acompanhado pelo fantasma de Agatha. Tommy está no elenco de VisionQuest.",
      "inDoomsday": false,
      "appearances": {
        "wandavision": "Nasce e cresce em dias dentro da fantasia de Wanda, com poderes parecidos com os dela. Desfaz-se com a cidade.",
        "estranho2": "Uma versão dele, com outra Wanda, vive na Terra-838. É o medo dele que faz Wanda parar.",
        "agatha": "Sua alma ocupou o corpo de um garoto morto num acidente. Liberta Agatha, cria sem saber a Estrada das Bruxas e põe a alma do irmão num corpo.",
        "visionquest": "Não confirmado. O irmão, Tommy, está no elenco."
      }
    },
    {
      "id": "joaquin",
      "type": "p",
      "group": "Novos heróis",
      "name": "Joaquin Torres",
      "description": "O novo Falcão.",
      "profile": [
        "Tenente da Força Aérea que ajuda Sam Wilson em Falcão e o Soldado Invernal e fica com as asas antigas dele. Em Admirável Mundo Novo já voa como Falcão e é gravemente ferido."
      ],
      "now": "Recuperado, ao lado de Sam.",
      "inDoomsday": true,
      "appearances": {
        "falcao": "Tenente da Força Aérea que dá apoio a Sam e fica com as asas quebradas dele.",
        "cap4": "Já voa como Falcão. É abatido ao evitar a batalha entre Estados Unidos e Japão e convidado para os Vingadores.",
        "doomsday": "No elenco."
      }
    },
    {
      "id": "jane",
      "type": "p",
      "group": "Novos heróis",
      "name": "Jane Foster",
      "description": "A Poderosa Thor.",
      "profile": [
        "Astrofísica que encontra Thor no deserto do Novo México. Em O Mundo Sombrio, o Éter entra em seu corpo. Os dois namoram e se separam.",
        "Anos depois, com câncer em estágio avançado, é chamada pelos pedaços do Mjolnir, que se refazem para ela. O martelo lhe dá os poderes de Thor e, a cada uso, tira a força que restava para combater a doença. Morre nos braços dele e é recebida em Valhalla."
      ],
      "now": "Morta.",
      "inDoomsday": false,
      "appearances": {
        "thor": "Atropela Thor no deserto, abriga-o e perde a pesquisa para a S.H.I.E.L.D.",
        "thor2": "Absorve o Éter por acidente, é levada a Asgard e ajuda a derrotar Malekith em Londres.",
        "thor4": "Com câncer avançado, é escolhida pelo Mjolnir refeito. Sabe que usá-lo a mata e o usa mesmo assim.",
        "ultimato": "Em 2013, dorme em Asgard enquanto Rocket tira dela a Joia da Realidade."
      }
    },
    {
      "id": "valquiria",
      "type": "p",
      "group": "Novos heróis",
      "name": "Valquíria",
      "description": "Rei de Nova Asgard.",
      "profile": [
        "Última sobrevivente das Valquírias, tropa de elite de Asgard massacrada por Hela. Thor a encontra em Sakaar, bêbada e vendendo prisioneiros para a arena. Ela volta a lutar e ajuda a evacuar Asgard.",
        "Sobrevive ao ataque de Thanos e ao estalo. Thor lhe entrega o governo de Nova Asgard, na Noruega."
      ],
      "now": "Governa Nova Asgard.",
      "inDoomsday": false,
      "appearances": {
        "ragnarok": "Mercenária em Sakaar, vende Thor ao Grão-Mestre. Lembrada do massacre de suas companheiras por Hela, volta a lutar.",
        "ultimato": "Cuida de Nova Asgard enquanto Thor bebe. Recebe dele o trono.",
        "thor4": "Rei entediada com a burocracia. Luta contra Gorr e é ferida.",
        "marvels": "Aparição curta: leva os refugiados Skrull para Nova Asgard."
      }
    },
    {
      "id": "sylvie",
      "type": "p",
      "group": "Novos heróis",
      "name": "Sylvie",
      "description": "A Loki que abriu o multiverso.",
      "profile": [
        "Variante de Loki nascida mulher. A AVT a prendeu ainda criança por um desvio que ela nem lembra, e ela passou a vida fugindo, escondida em catástrofes onde nada que fizesse alteraria o tempo.",
        "Só quer destruir quem a caçou. Ao encontrar Aquele Que Permanece, ouve dele que sua morte vai soltar algo pior, e o mata mesmo assim. Na segunda temporada tenta uma vida comum nos anos 1980 e é quem convence Loki de que as pessoas precisam poder escolher."
      ],
      "now": "Livre. Destino não mostrado.",
      "inDoomsday": false,
      "appearances": {
        "loki1": "Espalha bombas pela linha do tempo, revela a Loki o que a AVT é e mata Aquele Que Permanece, mesmo avisada das consequências.",
        "loki2": "Vive escondida em 1982. Poupa Victor Timely e obriga Loki a admitir por que quer salvar a AVT."
      }
    },
    {
      "id": "mobius",
      "type": "p",
      "group": "Novos heróis",
      "name": "Mobius",
      "description": "O analista da AVT.",
      "profile": [
        "Funcionário da AVT especializado em Lokis. Acredita no trabalho até descobrir que todos ali são variantes sequestradas e com a memória apagada. Na vida que lhe tiraram, era um vendedor de jet skis com dois filhos.",
        "Vira amigo de Loki, o primeiro que ele tem. No fim, deixa a AVT e fica olhando de longe a vida que seria sua."
      ],
      "now": "Fora da AVT.",
      "inDoomsday": false,
      "appearances": {
        "loki1": "Recruta Loki, descobre que foi enganado a vida inteira e é eliminado. Reencontra-o no Vazio.",
        "loki2": "Ajuda a tentar salvar o Tear. Conhece a vida que lhe tiraram e, no fim, larga a AVT para olhá-la de longe."
      }
    },
    {
      "id": "agatha",
      "type": "p",
      "group": "Novos heróis",
      "name": "Agatha Harkness",
      "description": "A bruxa de Westview.",
      "profile": [
        "Bruxa que em 1693 absorveu o poder do próprio clã, incluindo a mãe. Sobrevive há séculos roubando a magia de outras bruxas. Em WandaVision se passa por vizinha enxerida para descobrir como Wanda criou a cidade.",
        "Wanda a deixa presa na personagem, sem memória. Solta e sem poderes, percorre a Estrada das Bruxas com um clã improvisado. A série revela que ela teve um filho, que a Morte veio buscar, e que a lenda da Estrada era uma mentira dela. Sacrifica-se por Billy e volta como fantasma."
      ],
      "now": "Fantasma, acompanhando Billy.",
      "inDoomsday": false,
      "appearances": {
        "wandavision": "Disfarçada de vizinha, manipula a fantasia de Wanda para descobrir a origem do poder dela. Perde e fica presa na personagem.",
        "agatha": "Sem poderes, percorre a Estrada das Bruxas com um clã, mata uma das companheiras, se sacrifica por Billy e volta como fantasma."
      }
    },
    {
      "id": "walker",
      "type": "p",
      "group": "Novos Vingadores",
      "name": "John Walker",
      "description": "O Agente Americano.",
      "profile": [
        "Capitão do Exército, várias vezes condecorado. O governo o escolhe para ser o novo Capitão América quando Sam Wilson devolve o escudo. Ele quer muito merecer o posto e não aguenta a comparação com Steve Rogers.",
        "Toma em segredo uma dose do soro do supersoldado. Quando seu parceiro é morto em combate, persegue um dos responsáveis e o mata com o escudo, rendido, numa praça cheia de celulares. É dispensado sem honras. Valentina o recolhe e lhe dá um novo nome, Agente Americano.",
        "Em Thunderbolts* está divorciado e amargo. É arrogante com o grupo e, no fim, fica."
      ],
      "now": "Integrante dos Novos Vingadores.",
      "inDoomsday": true,
      "appearances": {
        "falcao": "Escolhido pelo governo para ser o Capitão América. Toma o soro, mata um homem rendido e perde o posto.",
        "thunder": "Divorciado e amargo, sobrevive à armadilha de Valentina e fica no grupo.",
        "doomsday": "No elenco."
      }
    },
    {
      "id": "ava",
      "type": "p",
      "group": "Novos Vingadores",
      "name": "Ava Starr",
      "description": "A Fantasma.",
      "profile": [
        "Filha de um ex-colega de Hank Pym. Uma explosão num laboratório quântico mata os pais e deixa o corpo dela instável: ela atravessa paredes e sente dor o tempo todo, com as células se desfazendo. A S.H.I.E.L.D. a cria para usá-la como assassina.",
        "Em Homem-Formiga e a Vespa, tenta roubar a energia quântica de Janet van Dyne para se curar. Janet a estabiliza por vontade própria. Reaparece anos depois como agente de Valentina, com os poderes sob controle."
      ],
      "now": "Integrante dos Novos Vingadores.",
      "inDoomsday": true,
      "appearances": {
        "hformiga2": "Rouba o laboratório de Pym para tirar de Janet a energia que a curaria. Recebe ajuda da própria Janet.",
        "thunder": "Agente de Valentina, mata Antonia Dreykov no cofre e entra para o grupo.",
        "doomsday": "No elenco, com os Novos Vingadores."
      }
    },
    {
      "id": "alexei",
      "type": "p",
      "group": "Novos Vingadores",
      "name": "Alexei Shostakov",
      "description": "O Guardião Vermelho.",
      "profile": [
        "Resposta soviética ao Capitão América, com um soro próprio. Nos anos 1990 foi o pai na família falsa de Ohio em que Natasha e Yelena cresceram. Depois da missão, a União Soviética o descartou numa prisão.",
        "Vaidoso, saudoso de glórias que talvez nunca tenham existido, e sinceramente apegado às filhas de mentira. Em Thunderbolts* trabalha como motorista de limusine e é o mais empolgado com a ideia de ser Vingador."
      ],
      "now": "Integrante dos Novos Vingadores.",
      "inDoomsday": true,
      "appearances": {
        "viuva": "Tirado da prisão pelas duas filhas de mentira, ajuda a derrubar a Sala Vermelha e tenta se reaproximar delas.",
        "thunder": "Motorista de limusine, ouve o plano de Valentina, resgata Yelena e é o mais orgulhoso de virar Vingador.",
        "doomsday": "No elenco, com os Novos Vingadores."
      }
    },
    {
      "id": "bob",
      "type": "p",
      "group": "Novos Vingadores",
      "name": "Bob Reynolds",
      "description": "O Sentinela, e o Vácuo.",
      "profile": [
        "Robert Reynolds teve uma vida de abuso e dependência química e se ofereceu como cobaia num projeto secreto de Valentina de Fontaine, que queria fabricar um herói que substituísse os Vingadores. Foi o único a sobreviver.",
        "Como Sentinela, voa, é praticamente invulnerável e tem força comparável à de qualquer um no MCU. O problema é o Vácuo: o lado depressivo de Bob ganhou forma própria e transforma as pessoas em sombras, prendendo cada uma na pior lembrança que tem. Quanto mais Bob tenta lutar contra ele, mais forte fica.",
        "Yelena e os outros entram nesse espaço e o tiram de lá ficando ao lado dele. Bob decide não usar os poderes, por medo de trazer o Vácuo de volta."
      ],
      "now": "Mora com os Novos Vingadores e não entra em campo. É o integrante mais poderoso do filme e o mais imprevisível.",
      "inDoomsday": true,
      "appearances": {
        "thunder": "Acorda sem memória no cofre. Vira o Sentinela, perde o controle e o Vácuo cobre Nova York. É trazido de volta pelo grupo.",
        "doomsday": "No elenco. Não se sabe se volta a usar os poderes."
      }
    },
    {
      "id": "valentina",
      "type": "p",
      "group": "Novos Vingadores",
      "name": "Valentina de Fontaine",
      "description": "A diretora da CIA por trás dos Novos Vingadores.",
      "profile": [
        "Condessa Valentina Allegra de Fontaine. Aparece nas pontas de vários títulos da Fase 4 recrutando gente em baixa: John Walker, Yelena Belova. Em Wakanda para Sempre já é diretora da CIA.",
        "Mantém uma empresa de fachada com experimentos ilegais em humanos, entre eles o projeto que criou o Sentinela. Quando o Congresso abre processo para afastá-la, manda seus agentes se matarem entre si para apagar provas. Eles sobrevivem, salvam Nova York, e ela, na hora, os apresenta à imprensa como os Novos Vingadores. Com isso se torna intocável."
      ],
      "now": "Diretora da CIA e patrocinadora dos Novos Vingadores. Não está no elenco anunciado de Doomsday.",
      "inDoomsday": false,
      "appearances": {
        "falcao": "Aborda John Walker depois da expulsão e lhe dá o nome de Agente Americano.",
        "viuva": "Na cena dos créditos, mostra a Yelena uma foto de Clint Barton como culpado pela morte de Natasha.",
        "wakanda": "Já é diretora da CIA. Prende o ex-marido, o agente Everett Ross, por ajudar Wakanda.",
        "thunder": "Tenta apagar as provas de seus crimes matando os próprios agentes. Quando falha, transforma o grupo em Novos Vingadores e se salva."
      }
    },
    {
      "id": "okoye",
      "type": "p",
      "group": "Wakanda e Talokan",
      "name": "Okoye",
      "description": "A general das Dora Milaje.",
      "profile": [
        "Comandante da guarda real de Wakanda, formada só por mulheres. Leal ao trono acima de tudo. É uma das poucas sobreviventes do estalo e ajuda Natasha a manter a ordem durante o Blip.",
        "Em Wakanda para Sempre perde o posto depois de falhar numa missão e recebe de Shuri uma armadura nova."
      ],
      "now": "Ex-general. Apoia Wakanda com a armadura nova. Não está no elenco anunciado de Doomsday.",
      "inDoomsday": false,
      "appearances": {
        "pantera": "General leal ao trono, serve a Killmonger até ele violar a tradição, e então se volta contra ele.",
        "ginfinita": "Luta ao lado de T'Challa e o vê virar pó.",
        "wakanda": "Perde Shuri para Talokan e é destituída pela rainha. Volta à luta com uma armadura nova.",
        "ultimato": "Uma das sobreviventes que mantêm a ordem durante o Blip."
      }
    },
    {
      "id": "mbaku",
      "type": "p",
      "group": "Wakanda e Talokan",
      "name": "M'Baku",
      "description": "O líder dos Jabari.",
      "profile": [
        "Chefe da tribo das montanhas, que vive à parte do resto de Wakanda e não usa vibranium. Desafia T'Challa pelo trono, perde, e depois salva a vida dele. Com o tempo vira o conselheiro mais franco de Shuri. No fim de Wakanda para Sempre, apresenta-se para disputar o trono."
      ],
      "now": "Pretendente ao trono de Wakanda.",
      "inDoomsday": true,
      "appearances": {
        "pantera": "Desafia T'Challa na coroação e perde. Mais tarde abriga a família real e leva os Jabari à batalha.",
        "ginfinita": "Leva os Jabari à defesa de Wakanda.",
        "wakanda": "Abriga o povo nas montanhas, aconselha Shuri a não buscar vingança e se apresenta para o trono.",
        "doomsday": "No elenco.",
        "ultimato": "Volta para a batalha final."
      }
    },
    {
      "id": "namor",
      "type": "p",
      "group": "Wakanda e Talokan",
      "name": "Namor",
      "description": "O rei de Talokan.",
      "profile": [
        "Nasceu em 1571, filho de um povo maia que, fugindo dos espanhóis e da varíola, tomou uma planta que cresceu sobre vibranium e passou a respirar debaixo d'água. Namor nasceu diferente até entre eles: respira ar, tem asas nos tornozelos e quase não envelhece. Ele mesmo se chama de mutante.",
        "Governa Talokan e o esconde do mundo. Quando os americanos começam a procurar vibranium no oceano, propõe a Wakanda uma aliança contra a superfície e, diante da recusa, inunda a capital e mata a rainha Ramonda.",
        "Shuri o derrota e o poupa. Ele aceita a rendição por cálculo: acha que um dia Wakanda vai precisar de Talokan contra o resto do mundo."
      ],
      "now": "Aliado desconfiado de Wakanda. No elenco de Doomsday, com dois de seus guerreiros, Namora e Attuma. Um trailer o mostra lutando com Shuri e M'Baku.",
      "inDoomsday": true,
      "appearances": {
        "wakanda": "Massacra a expedição americana, exige a inventora do detector, inunda Wakanda e mata a rainha. Vencido por Shuri, aceita a paz por cálculo.",
        "doomsday": "No elenco, com Namora e Attuma."
      }
    },
    {
      "id": "killmonger",
      "type": "p",
      "group": "Wakanda e Talokan",
      "name": "Killmonger",
      "description": "O primo que perdeu e deixou marca.",
      "profile": [
        "N'Jadaka, filho de um príncipe wakandano morto pelo próprio irmão, o rei, e deixado órfão nos Estados Unidos. Vira soldado de elite e volta para reivindicar o trono, querendo armar com vibranium os povos oprimidos do mundo.",
        "Vence T'Challa em combate ritual, governa por dias e morre. O argumento dele faz T'Challa abrir o país. Reaparece na visão de Shuri."
      ],
      "now": "Morto.",
      "inDoomsday": false,
      "appearances": {
        "pantera": "Abandonado criança nos Estados Unidos, vira soldado de elite e volta para tomar o trono e armar os oprimidos. Vence T'Challa, perde a revanche e escolhe morrer.",
        "wakanda": "É quem recebe Shuri no plano dos ancestrais e pergunta que tipo de governante ela vai ser."
      }
    },
    {
      "id": "reed",
      "type": "p",
      "group": "Quarteto Fantástico",
      "name": "Reed Richards",
      "description": "O Senhor Fantástico.",
      "profile": [
        "O homem mais inteligente da Terra-828. Liderou a viagem espacial em que os quatro foram atingidos por raios cósmicos. O corpo dele estica como borracha. Pensa em cada problema como equação, o que o torna genial e, às vezes, frio: é ele quem calcula em voz alta que entregar o filho salvaria o planeta, mesmo sem cogitar fazê-lo.",
        "Uma versão dele, de outra Terra, a 838, aparece entre os Illuminati em Multiverso da Loucura e é morta por Wanda."
      ],
      "now": "Chegou à Terra principal com a equipe.",
      "inDoomsday": true,
      "appearances": {
        "estranho2": "Uma variante, da Terra-838, é membro dos Illuminati e morre nas mãos de Wanda.",
        "quarteto": "Confirma a ameaça de Galactus, calcula as saídas e projeta as pontes de teletransporte. Resgata o filho no clímax.",
        "thunder": "Não aparece; só a nave da equipe.",
        "doomsday": "No elenco. Um trailer o mostra confrontando Destino."
      }
    },
    {
      "id": "sue",
      "type": "p",
      "group": "Quarteto Fantástico",
      "name": "Sue Storm",
      "description": "A Mulher Invisível.",
      "profile": [
        "Fica invisível e projeta campos de força. É também a diplomata do grupo: criou uma fundação que convenceu os países da Terra-828 a se desarmar. Casada com Reed.",
        "É apresentada como a mais poderosa dos quatro. No clímax, empurra Galactus para um portal com um esforço que a mata, e é o filho recém-nascido quem a traz de volta."
      ],
      "now": "Chegou à Terra principal com a equipe. É quem flagra Destino com Franklin.",
      "inDoomsday": true,
      "appearances": {
        "quarteto": "Grávida no início, dá à luz no espaço. Convence o mundo a lutar junto, empurra Galactus para o portal, morre e é trazida de volta pelo filho.",
        "doomsday": "No elenco. É a voz que, num trailer, conta quem Destino foi."
      }
    },
    {
      "id": "johnny",
      "type": "p",
      "group": "Quarteto Fantástico",
      "name": "Johnny Storm",
      "description": "O Tocha Humana.",
      "profile": [
        "Irmão mais novo de Sue. Cobre o corpo de fogo e voa. Costuma ser o impulsivo da equipe; neste filme é também quem decifra a língua da Surfista Prateada e descobre o passado dela."
      ],
      "now": "Chegou à Terra principal com a equipe.",
      "inDoomsday": true,
      "appearances": {
        "quarteto": "Decifra a língua da Surfista Prateada, descobre o nome e o passado dela e se dispõe a morrer para empurrar Galactus.",
        "doomsday": "No elenco. Um trailer o mostra abraçando o sobrinho."
      }
    },
    {
      "id": "ben",
      "type": "p",
      "group": "Quarteto Fantástico",
      "name": "Ben Grimm",
      "description": "O Coisa.",
      "profile": [
        "Piloto da missão e melhor amigo de Reed. Os raios cósmicos transformaram o corpo dele em pedra de forma permanente. É o mais forte do grupo e o que mais sente falta de ser comum."
      ],
      "now": "Chegou à Terra principal com a equipe.",
      "inDoomsday": true,
      "appearances": {
        "quarteto": "Pilota a nave na fuga de Galactus e é quem mais convive com os moradores do bairro.",
        "doomsday": "No elenco. Um teaser o mostra diante de M'Baku, em Wakanda."
      }
    },
    {
      "id": "franklin",
      "type": "p",
      "group": "Quarteto Fantástico",
      "name": "Franklin Richards",
      "description": "O bebê que Galactus e Destino querem.",
      "profile": [
        "Filho de Reed e Sue, concebido depois que os pais ganharam poderes. Galactus sente nele uma força capaz de herdar sua fome e libertá-lo dela. Ainda recém-nascido, traz a mãe de volta à vida.",
        "Nos quadrinhos, Franklin é capaz de criar universos. O filme não diz até onde vai o poder dele."
      ],
      "now": "Tem cerca de quatro anos. Foi visitado pelo Doutor Destino e aparece em Doomsday; um trailer o mostra no colo do tio Johnny enquanto um mundo se desfaz.",
      "inDoomsday": false,
      "appearances": {
        "quarteto": "Galactus sente o poder dele antes de nascer e o exige em troca da Terra. Nasce na nave, serve de isca e revive a mãe.",
        "doomsday": "Aparece no filme."
      }
    },
    {
      "id": "xavier",
      "type": "p",
      "group": "Mutantes",
      "name": "Charles Xavier",
      "description": "O Professor X.",
      "profile": [
        "O telepata mais poderoso do universo dele. Usa cadeira de rodas. Fundou uma escola que abriga jovens mutantes e uma equipe, os X-Men, e defende que humanos e mutantes podem conviver. Amplia seu alcance com uma máquina chamada Cérebro, que localiza qualquer mutante no planeta.",
        "Uma variante dele, da Terra-838, lidera os Illuminati em Multiverso da Loucura e é morta por Wanda."
      ],
      "now": "Patrick Stewart volta ao papel em Doomsday.",
      "inDoomsday": true,
      "appearances": {
        "xmen1": "Acolhe Wolverine e Vampira, entra em coma por causa da sabotagem de Mística e, recuperado, visita Magneto na prisão.",
        "xmen2": "Capturado por Stryker, é forçado por ilusões a procurar todos os mutantes, depois todos os humanos, para matá-los.",
        "estranho2": "A variante da Terra-838 tenta entrar na mente de Wanda para libertar a Wanda daquele mundo, e é morta.",
        "doomsday": "No elenco."
      }
    },
    {
      "id": "magneto",
      "type": "p",
      "group": "Mutantes",
      "name": "Magneto",
      "description": "O amigo e adversário de Xavier.",
      "profile": [
        "Erik Lehnsherr controla campos magnéticos e, com eles, qualquer metal. Sobreviveu a um campo de concentração quando criança. Dessa experiência tira a certeza de que os humanos vão tentar exterminar os mutantes e de que é preciso agir antes.",
        "Usa um capacete que bloqueia telepatia. Não é um vilão simples: tem razão sobre o perigo e erra no remédio. Joga xadrez com Xavier até na prisão."
      ],
      "now": "Ian McKellen volta ao papel em Doomsday.",
      "inDoomsday": true,
      "appearances": {
        "xmen1": "Sequestra um senador e depois Vampira para transformar líderes mundiais em mutantes. É derrotado na Estátua da Liberdade.",
        "xmen2": "Foge da prisão, salva os X-Men, alia-se a eles e, na hora decisiva, vira o plano de Stryker contra os humanos.",
        "doomsday": "No elenco."
      }
    },
    {
      "id": "wolverine",
      "type": "p",
      "group": "Mutantes",
      "name": "Wolverine",
      "description": "Logan.",
      "profile": [
        "Mutante com regeneração quase ilimitada, sentidos de animal e garras. Um programa militar revestiu seu esqueleto de adamantium e apagou sua memória. É o X-Man mais popular e o menos disciplinado.",
        "O Logan dos filmes originais morreu em 2029, no filme Logan. O de Deadpool & Wolverine é outro, de outro universo: nesse mundo, ele abandonou os X-Men e todos foram mortos na sua ausência. Carrega isso bebendo e usa o uniforme amarelo como penitência."
      ],
      "now": "Vive na Terra-10005 com Deadpool. Hugh Jackman participou de divulgação de Doomsday, mas não está no elenco oficial.",
      "inDoomsday": false,
      "appearances": {
        "xmen1": "Chega à escola sem passado, afeiçoa-se a Vampira e quase morre para salvá-la.",
        "xmen2": "Protege os alunos na invasão, reencontra Stryker e descobre quem lhe deu as garras.",
        "deadpool": "Uma variante que deixou os X-Men morrerem. Tirado de seu mundo por Wade, aprende a lutar por alguém de novo e fica na Terra-10005."
      }
    },
    {
      "id": "deadpool",
      "type": "p",
      "group": "Mutantes",
      "name": "Deadpool",
      "description": "Wade Wilson.",
      "profile": [
        "Mercenário com câncer terminal que aceitou um experimento e saiu dele desfigurado e com regeneração igual à de Wolverine. Fala sem parar e sabe que está num filme.",
        "É da Terra-10005. Tentou entrar para os Vingadores e foi recusado. Quando a AVT lhe oferece um lugar na linha principal em troca de deixar seu universo morrer, ele recusa e vai salvar os amigos."
      ],
      "now": "Vive na Terra-10005. Ryan Reynolds e Hugh Jackman apareceram num vídeo da Marvel em agosto de 2026 brincando com a ideia de entrar no filme; não estão no elenco oficial.",
      "inDoomsday": false,
      "appearances": {
        "deadpool": "Recusado pelos Vingadores, descobre que seu universo vai morrer, busca um Wolverine substituto e se arrisca a morrer para desligar a máquina da AVT."
      }
    },
    {
      "id": "jean",
      "type": "p",
      "group": "Mutantes",
      "name": "Jean Grey",
      "description": "A telepata dos X-Men.",
      "profile": [
        "Telepata e telecinética, médica da escola de Xavier nos filmes da Fox. No segundo filme, segura uma represa rompida para a equipe escapar e morre. Nos quadrinhos é a hospedeira da Fênix, uma força cósmica.",
        "O MCU ganhou a própria Jean Grey em Homem-Aranha: Um Novo Dia, interpretada por Sadie Sink. É uma jovem cuja irmã mais velha, Sara, também telepata, foi sequestrada pelo Departamento de Controle de Danos e morreu numa cela. Jean passa o filme saltando de mente em mente e atacando prisões do órgão para descobrir o que houve. Possui Scorpion, Frank Castle e Bruce Banner. Só não consegue entrar na cabeça de Peter Parker.",
        "Não é uma vilã. Quando Peter a deixa ver suas lembranças, ela reconhece nele a mesma perda e desiste de matar o diretor do órgão. Não tem relação com a Jean dos filmes antigos, que é de outro universo."
      ],
      "now": "A Jean do MCU deixou Nova York depois de salvar a vida de Peter. Não está no elenco anunciado de Doomsday.",
      "inDoomsday": false,
      "appearances": {
        "xmen1": "Médica e telepata da equipe. Descobre onde Magneto vai atacar.",
        "xmen2": "Tem premonições, vê seus poderes crescerem e morre segurando a água da represa para o jato escapar.",
        "aranha4": "Antagonista. Ataca prisões do governo possuindo outras pessoas, em busca da irmã. Reconcilia-se com Peter e vai embora."
      }
    },
    {
      "id": "ciclope",
      "type": "p",
      "group": "Mutantes",
      "name": "Ciclope",
      "description": "Scott Summers.",
      "profile": [
        "Líder de campo dos X-Men. Dispara rajadas pelos olhos sem conseguir desligá-las, e por isso usa um visor. É o aluno modelo de Xavier e namorado de Jean Grey."
      ],
      "now": "James Marsden volta ao papel em Doomsday.",
      "inDoomsday": true,
      "appearances": {
        "xmen1": "Lidera o resgate de Wolverine e Vampira e é quem derruba Magneto.",
        "xmen2": "Capturado e controlado por Stryker, luta contra Jean. Perde-a no fim.",
        "doomsday": "No elenco. Um trailer o mostra gritando sob um céu que desaba, na mansão em ruínas."
      }
    },
    {
      "id": "mistica",
      "type": "p",
      "group": "Mutantes",
      "name": "Mística",
      "description": "A metamorfa.",
      "profile": [
        "Assume a aparência de qualquer pessoa. Sua forma natural é azul e escamosa, e ela se recusa a escondê-la. Nos dois primeiros filmes é a principal aliada de Magneto."
      ],
      "now": "Rebecca Romijn volta ao papel em Doomsday.",
      "inDoomsday": true,
      "appearances": {
        "xmen1": "Sabota o Cérebro disfarçada de aluno e, no fim, assume o lugar do senador.",
        "xmen2": "Tira Magneto da prisão e abre a base de Stryker disfarçada de Wolverine.",
        "doomsday": "No elenco. Um trailer a mostra lutando com Yelena."
      }
    },
    {
      "id": "noturno",
      "type": "p",
      "group": "Mutantes",
      "name": "Noturno",
      "description": "Kurt Wagner.",
      "profile": [
        "Mutante alemão de pele azul e cauda que se teletransporta numa nuvem de fumaça. Religioso e gentil. No segundo filme é manipulado para atacar o presidente dos Estados Unidos e depois se junta aos X-Men."
      ],
      "now": "Alan Cumming volta ao papel em Doomsday.",
      "inDoomsday": true,
      "appearances": {
        "xmen2": "Controlado por Stryker, ataca o presidente. Livre, ajuda a resgatar os alunos e a soltar Xavier.",
        "doomsday": "No elenco."
      }
    },
    {
      "id": "fera",
      "type": "p",
      "group": "Mutantes",
      "name": "Fera",
      "description": "Hank McCoy.",
      "profile": [
        "Cientista brilhante, coberto de pelo azul, com força e agilidade de animal. Kelsey Grammer o interpretou no terceiro filme dos X-Men, de 2006.",
        "É o primeiro X-Man da Fox a aparecer num filme do MCU: na cena no meio dos créditos de As Marvels, é ele quem examina Monica Rambeau quando ela acorda em outro universo."
      ],
      "now": "Kelsey Grammer volta ao papel em Doomsday.",
      "inDoomsday": true,
      "appearances": {
        "marvels": "Na cena dos créditos, é o médico que recebe Monica Rambeau em outro universo e lhe explica onde está.",
        "doomsday": "No elenco."
      }
    },
    {
      "id": "gambit",
      "type": "p",
      "group": "Mutantes",
      "name": "Gambit",
      "description": "Remy LeBeau.",
      "profile": [
        "Ladrão de Nova Orleans que carrega objetos com energia e os faz explodir; a arma preferida são cartas de baralho. Channing Tatum tentou por anos fazer um filme do personagem na Fox, que nunca saiu. A piada vira cena em Deadpool & Wolverine, onde Gambit vive no Vazio com outros heróis esquecidos."
      ],
      "now": "Channing Tatum está no elenco de Doomsday.",
      "inDoomsday": true,
      "appearances": {
        "deadpool": "Vive no Vazio com outros heróis esquecidos e luta na invasão à base de Cassandra Nova.",
        "doomsday": "No elenco. Um trailer o mostra lutando com Shang-Chi."
      }
    },
    {
      "id": "quill",
      "type": "p",
      "group": "Guardiões da Galáxia",
      "name": "Peter Quill",
      "description": "O Senhor das Estrelas.",
      "profile": [
        "Abduzido da Terra em 1988, aos oito anos, na noite em que a mãe morreu. Criado por Yondu, líder de um bando de piratas espaciais. Carrega um toca-fitas com as músicas que a mãe gravou.",
        "Descobre que o pai é Ego, um ser Celestial que queria usá-lo para se espalhar pelo universo, e que foi Ego quem causou o câncer da mãe. Ama Gamora, e a morte dela o faz perder a cabeça em Titã, no momento em que o plano contra Thanos estava dando certo."
      ],
      "now": "De volta à Terra, com o avô. Não está no elenco anunciado de Doomsday.",
      "inDoomsday": false,
      "appearances": {
        "gg1": "Rouba o orbe, junta o grupo e segura a Joia do Poder com a ajuda dos amigos.",
        "gg2": "Encontra o pai, Ego, descobre que ele matou sua mãe e o destrói. Perde Yondu.",
        "ginfinita": "Tenta matar Gamora a pedido dela e não consegue. Em Titã, ao saber que ela morreu, agride Thanos e estraga o plano. Vira pó.",
        "gg3": "Bebe por causa de Gamora, salva Rocket e volta à Terra para rever o avô.",
        "ultimato": "Em 2014, é nocauteado por Rhodes e Nebulosa antes de roubar o orbe. Em 2023, volta do estalo e reencontra uma Gamora que não o conhece.",
        "thor4": "Despede-se de Thor no começo do filme.",
        "ggnatal": "Ganha de presente um ator sequestrado e descobre que tem uma irmã."
      }
    },
    {
      "id": "gamora",
      "type": "p",
      "group": "Guardiões da Galáxia",
      "name": "Gamora",
      "description": "A filha de Thanos.",
      "profile": [
        "Thanos matou metade do povo dela e a adotou criança. Foi treinada para ser a assassina mais temida da galáxia e o traiu. Era a única que sabia onde estava a Joia da Alma. Thanos a ama de verdade, e por isso o sacrifício dela em Vormir vale.",
        "A Gamora que morreu não voltou. A que existe hoje veio de 2014 com o Thanos do passado, antes de conhecer os Guardiões. Não tem nenhuma lembrança de Quill."
      ],
      "now": "A variante de 2014 vive com os piratas Saqueadores.",
      "inDoomsday": false,
      "appearances": {
        "gg1": "Mandada para pegar o orbe, trai Thanos e fica com os Guardiões.",
        "ginfinita": "Thanos a captura e a obriga a revelar onde está a Joia da Alma. É jogada do penhasco em Vormir.",
        "ultimato": "A Gamora de 2014 vem ao futuro com o pai, muda de lado e some depois da batalha.",
        "gg3": "A variante vive com os piratas. Ajuda os Guardiões e deixa claro que não é a mulher que Quill amou.",
        "gg2": "Enfrenta Nebulosa e, pela primeira vez, a ouve."
      }
    },
    {
      "id": "rocket",
      "type": "p",
      "group": "Guardiões da Galáxia",
      "name": "Rocket",
      "description": "O guaxinim.",
      "profile": [
        "Animal da Terra capturado e modificado por um cientista, o Alto Evolucionário, obcecado em criar a espécie perfeita. Rocket se revelou mais inteligente que o criador e fugiu depois de ver os amigos de cela serem mortos.",
        "Piloto, engenheiro e mal-humorado. É um dos poucos Guardiões que sobrevivem ao estalo e passa o Blip com os Vingadores."
      ],
      "now": "Capitão da nova formação dos Guardiões.",
      "inDoomsday": false,
      "appearances": {
        "gg1": "Caçador de recompensas que vai atrás de Quill, é preso com ele e planeja a fuga.",
        "ginfinita": "Acompanha Thor a Nidavellir e luta em Wakanda. É o único Guardião que sobra na Terra.",
        "ultimato": "Ajuda a construir a máquina do tempo e vai a Asgard tirar a Joia da Realidade de Jane Foster.",
        "gg3": "Ferido, lembra a infância como cobaia do Alto Evolucionário. Salva os filhotes, poupa o criador e vira capitão.",
        "gg2": "Rouba as baterias dos Soberanos, é capturado com Yondu e monta a bomba que mata Ego.",
        "thor4": "Aparição no começo, com Thor a bordo.",
        "ggnatal": "Ganha de presente o braço de Bucky Barnes."
      }
    },
    {
      "id": "groot",
      "type": "p",
      "group": "Guardiões da Galáxia",
      "name": "Groot",
      "description": "A árvore.",
      "profile": [
        "Ser vegetal que só diz o próprio nome. O Groot original se sacrifica no primeiro filme. O atual cresceu de um galho dele e é, na prática, um filho."
      ],
      "now": "Nos Guardiões, com Rocket.",
      "inDoomsday": false,
      "appearances": {
        "gg1": "Parceiro de Rocket. Envolve os amigos com o corpo na queda da nave e morre. Um galho dele é replantado.",
        "ginfinita": "Adolescente. Dá o próprio braço para servir de cabo ao machado de Thor e vira pó.",
        "gg2": "Bebê. É quem leva a bomba ao núcleo de Ego.",
        "ultimato": "Volta do estalo para a batalha final.",
        "thor4": "Aparição no começo.",
        "ggnatal": "Participa da festa.",
        "gg3": "Adulto, luta ao lado da equipe e segue com Rocket."
      }
    },
    {
      "id": "drax",
      "type": "p",
      "group": "Guardiões da Galáxia",
      "name": "Drax",
      "description": "O Destruidor.",
      "profile": [
        "Teve a esposa e a filha mortas a mando de Thanos e vive para a vingança. Leva tudo ao pé da letra. No fim da trilogia descobre que seu talento é ser pai."
      ],
      "now": "Cuida de crianças resgatadas em Luganenhum.",
      "inDoomsday": false,
      "appearances": {
        "gg1": "Quer matar Ronan pela morte da família e quase põe tudo a perder ao chamá-lo para um duelo.",
        "ginfinita": "Ataca Thanos antes da hora em Luganenhum. Vira pó em Titã.",
        "gg3": "Descobre, cuidando das crianças resgatadas, que serve para ser pai. Fica em Luganenhum.",
        "gg2": "Faz amizade com Mantis no planeta de Ego.",
        "ultimato": "Volta do estalo para a batalha final.",
        "thor4": "Aparição no começo.",
        "ggnatal": "Vai à Terra com Mantis sequestrar Kevin Bacon."
      }
    },
    {
      "id": "nebulosa",
      "type": "p",
      "group": "Guardiões da Galáxia",
      "name": "Nebulosa",
      "description": "A outra filha de Thanos.",
      "profile": [
        "Adotada como Gamora. Cada vez que perdia um duelo para a irmã, Thanos trocava uma parte do corpo dela por máquina. Começa como vilã e é quem tem a virada mais longa da saga.",
        "Sobrevive ao estalo ao lado de Stark. Em Ultimato, sua versão de 2014 recebe as memórias dela pela rede que as duas partilham, e é assim que Thanos descobre o plano. Ela mata a própria versão do passado."
      ],
      "now": "Lidera a comunidade de Luganenhum.",
      "inDoomsday": false,
      "appearances": {
        "gg1": "Serve a Ronan e odeia a irmã.",
        "gg2": "Conta a Gamora o que Thanos fazia com ela a cada derrota. As duas se reconciliam.",
        "ginfinita": "Torturada por Thanos, escapa e chega a Titã. Sobrevive ao estalo ao lado de Stark.",
        "ultimato": "A versão de 2014 capta suas memórias e entrega o plano a Thanos. A atual mata a do passado.",
        "gg3": "Passa a comandar Luganenhum.",
        "thor4": "Aparição no começo.",
        "ggnatal": "Entrega a Rocket o braço de Bucky Barnes, de presente."
      }
    },
    {
      "id": "mantis",
      "type": "p",
      "group": "Guardiões da Galáxia",
      "name": "Mantis",
      "description": "A empata.",
      "profile": [
        "Sente e altera as emoções de quem toca. Foi criada por Ego como serva. O especial de Natal revela que também é filha dele, portanto irmã de Quill."
      ],
      "now": "Partiu sozinha para descobrir quem é.",
      "inDoomsday": false,
      "appearances": {
        "gg2": "Criada de Ego. Avisa Drax do plano e mantém o planeta adormecido durante a luta.",
        "ginfinita": "Em Titã, faz Thanos adormecer para que tirem a manopla. Vira pó.",
        "ggnatal": "Sequestra Kevin Bacon de presente e conta a Quill que é irmã dele.",
        "gg3": "Acalma os monstros da nave e, no fim, parte sozinha.",
        "ultimato": "Volta do estalo para a batalha final.",
        "thor4": "Aparição no começo."
      }
    },
    {
      "id": "matt",
      "type": "p",
      "group": "Heróis de rua",
      "name": "Matt Murdock",
      "description": "O Demolidor.",
      "profile": [
        "Advogado de Hell's Kitchen, em Nova York, cego desde um acidente na infância com produtos químicos que ampliaram os outros sentidos. De dia defende gente pobre; à noite luta mascarado. É católico e vive em conflito com a própria violência.",
        "Vem das séries da Netflix, que o MCU passou a tratar como parte da história. Em Demolidor: Renascido, seu melhor amigo, Foggy Nelson, é assassinado, e ele larga a máscara por um ano. Volta quando Wilson Fisk, prefeito, cria uma polícia para caçar vigilantes.",
        "Na segunda temporada lidera a resistência. Vence Fisk numa luta e o poupa. Para derrubá-lo de vez, revela no tribunal que é o Demolidor."
      ],
      "now": "Preso pelo que fez como Demolidor, com a identidade pública. Não está no elenco anunciado de Doomsday.",
      "inDoomsday": false,
      "appearances": {
        "aranha3": "Uma cena: como advogado, derruba as acusações contra Peter e apanha um tijolo no ar.",
        "mulherhulk": "Enfrenta Jennifer no tribunal, luta ao lado dela de uniforme amarelo e os dois se envolvem.",
        "eco": "Aparece numa lembrança de Maya.",
        "demolidor": "Perde o melhor amigo, abandona a máscara, volta, lidera a resistência a Fisk e termina preso depois de revelar quem é."
      }
    },
    {
      "id": "fisk",
      "type": "p",
      "group": "Heróis de rua",
      "name": "Wilson Fisk",
      "description": "O Rei do Crime.",
      "profile": [
        "Chefe do crime organizado de Nova York. Fisicamente enorme, fala baixo e explode em violência. Ama a esposa, Vanessa, e se vê como alguém que quer salvar a cidade.",
        "Em Gavião Arqueiro é baleado por Maya Lopez, que ele criou como sobrinha. Sobrevive e, em Eco, decide trocar o crime pela política. Elege-se prefeito e cria uma força-tarefa contra vigilantes, com poderes de polícia e um porto por onde entram armas.",
        "Na segunda temporada de Demolidor: Renascido, Vanessa morre em consequência de um ataque, e ele desmorona: mata o cirurgião, manda atirar em manifestantes. Exposto por Matt Murdock no tribunal, aceita deixar o país para não ser preso."
      ],
      "now": "Exilado, viúvo e fora da prefeitura.",
      "inDoomsday": false,
      "appearances": {
        "gaviao": "Revela-se o chefe acima da gangue e sócio da mãe de Kate. É derrubado por ela e baleado por Maya.",
        "eco": "Sobrevive ao tiro, tenta trazer Maya de volta como herdeira, é rejeitado e decide entrar na política.",
        "demolidor": "Prefeito. Persegue vigilantes, perde a esposa e, exposto no tribunal, aceita o exílio."
      }
    },
    {
      "id": "frank",
      "type": "p",
      "group": "Heróis de rua",
      "name": "Frank Castle",
      "description": "O Justiceiro.",
      "profile": [
        "Fuzileiro naval cuja esposa e dois filhos foram mortos num tiroteio. Passou a executar criminosos. Não tem poderes nem código além desse. O Demolidor o considera um assassino, e ele considera o Demolidor um covarde.",
        "Vem das séries da Netflix. Em Demolidor: Renascido, cobra de Matt uma reação e é preso pelo prefeito Fisk. O especial One Last Kill o mostra depois de fugir, sozinho, vendo fantasmas e perto do suicídio, até decidir proteger os vizinhos de um ataque. Em Um Novo Dia, trabalha a contragosto com Peter Parker."
      ],
      "now": "Ativo em Nova York, de volta ao uniforme. Não está no elenco anunciado de Doomsday.",
      "inDoomsday": false,
      "appearances": {
        "demolidor": "Na primeira temporada, provoca Matt a voltar à ação e ajuda no ataque final. É preso por Fisk.",
        "justiceiro": "Pensa em se matar, é caçado por criminosos da cidade inteira e escolhe proteger uma família em vez de se vingar.",
        "aranha4": "Persegue os mesmos alvos que Peter. É possuído por Jean Grey e, no fim, atira nela de longe; Peter leva o tiro."
      }
    },
    {
      "id": "maya",
      "type": "p",
      "group": "Heróis de rua",
      "name": "Maya Lopez",
      "description": "Eco.",
      "profile": [
        "Surda, da nação Choctaw, com uma perna protética. Copia qualquer movimento que vê. O pai trabalhava para Fisk e foi morto por Ronin durante o Blip; Fisk a criou e a usou. Quando descobre que foi ele quem entregou seu pai, atira nele."
      ],
      "now": "Em Oklahoma, com a família.",
      "inDoomsday": false,
      "appearances": {
        "gaviao": "Comanda a gangue que caça Ronin. Descobre que Fisk armou a morte do pai e atira nele.",
        "eco": "Volta a Oklahoma, herda o dom das antepassadas e, em vez de matar Fisk, tenta curá-lo."
      }
    },
    {
      "id": "loki",
      "type": "p",
      "group": "Asgard",
      "name": "Loki",
      "description": "Dois Lokis: o que morreu e o que segura o multiverso.",
      "profile": [
        "Filho de um gigante de gelo, abandonado bebê e adotado por Odin. Cresce à sombra de Thor, descobre a origem e se revolta. Mestre de ilusões e mentiras. É o vilão de Os Vingadores, a serviço de Thanos.",
        "O Loki original passa os filmes seguintes oscilando entre trair e ajudar o irmão e morre nas mãos de Thanos, na primeira cena de Guerra Infinita, tentando um último golpe.",
        "O Loki da série é outro: o de 2012, que pega o Tesseract durante a viagem no tempo de Ultimato. Preso pela AVT, assiste num rolo de filme à vida que teria, incluindo a morte da mãe e a própria. Sem ter vivido a redenção, faz outra. No fim da segunda temporada, em vez do trono que sempre quis, assume um fardo: fica sozinho no fim do tempo, segurando todas as ramificações para que elas vivam."
      ],
      "now": "Sustenta o multiverso, sozinho no fim do tempo. Está no elenco de Doomsday, e um trailer o mostra com um crachá da AVT.",
      "inDoomsday": true,
      "appearances": {
        "thor": "Deixa os gigantes de gelo entrarem em Asgard para estragar a coroação do irmão. Descobre que é filho do rei deles, assume o trono com Odin adormecido, tenta destruir o mundo dos gigantes e, rejeitado pelo pai, se solta no abismo.",
        "ving1": "Recebe de Thanos um cetro e um exército. Rouba o Tesseract, se deixa prender para dividir os Vingadores, mata Coulson e abre o portal sobre Nova York. É derrotado e levado preso a Asgard.",
        "thor2": "Preso, perde a mãe sem poder se despedir. Thor o solta para guiá-lo ao mundo dos elfos. Finge morrer salvando o irmão e, no fim, ocupa o trono disfarçado de Odin.",
        "ragnarok": "É desmascarado por Thor. Cai em Sakaar, ganha a confiança do Grão-Mestre, tenta trair o irmão mais uma vez e depois volta com uma nave para salvar o povo. É quem põe a coroa de Surtur na chama.",
        "ginfinita": "Entrega o Tesseract a Thanos para salvar a vida de Thor, finge lealdade e tenta esfaqueá-lo. Thanos o estrangula.",
        "ultimato": "Em 2012, logo depois de ser preso, vê o Tesseract cair a seus pés por um descuido dos viajantes do tempo e some com ele.",
        "loki1": "Preso pela AVT, assiste ao que seria sua vida. Alia-se a Mobius, encontra Sylvie, apaixona-se por ela e chega ao criador da agência. Tenta impedir que ela o mate.",
        "loki2": "Aprende a controlar os saltos no tempo, tenta por séculos salvar o Tear e, no fim, o destrói e passa a segurar ele mesmo todas as linhas do tempo.",
        "doomsday": "No elenco. É quem mantém de pé o multiverso que está em colapso."
      }
    },
    {
      "id": "odin",
      "type": "p",
      "group": "Asgard",
      "name": "Odin",
      "description": "O rei de Asgard.",
      "profile": [
        "Pai de Thor e pai adotivo de Loki. Apresenta-se como rei sábio e pacífico. Ragnarok revela que o império foi conquistado a sangue, com a primogênita Hela como general, e que ele a prendeu e apagou da história quando ela quis continuar.",
        "Morre na Noruega, e a morte dele solta Hela."
      ],
      "now": "Morto.",
      "inDoomsday": false,
      "appearances": {
        "thor": "Exila Thor por arrogância e cai num sono profundo. Acorda a tempo de segurar os filhos e recusa a Loki a aprovação que ele pede.",
        "thor2": "Perde Frigga e quer esperar o inimigo. É substituído no trono por Loki.",
        "ragnarok": "Morre na Noruega depois de contar aos filhos sobre Hela. Aparece a Thor numa visão."
      }
    },
    {
      "id": "hela",
      "type": "p",
      "group": "Asgard",
      "name": "Hela",
      "description": "A deusa da morte.",
      "profile": [
        "Filha mais velha de Odin, presa por milênios. Seu poder vem de Asgard: quanto mais perto dela, mais forte. Destrói o Mjolnir com uma mão. Thor só a vence deixando que um demônio de fogo cumpra a profecia do Ragnarok e destrua o planeta com ela dentro."
      ],
      "now": "Presumida morta com Asgard.",
      "inDoomsday": false,
      "appearances": {
        "ragnarok": "Solta pela morte do pai, quebra o Mjolnir, toma Asgard e revela como o império foi construído. Morre com o planeta."
      }
    },
    {
      "id": "thanos",
      "type": "p",
      "group": "Vilões",
      "name": "Thanos",
      "description": "O vilão da Saga do Infinito.",
      "profile": [
        "Titã que viu seu planeta morrer por excesso de população. Propôs matar metade dos habitantes por sorteio, foi chamado de louco, e o planeta morreu. Desde então acredita que tem o dever de fazer isso no universo inteiro. Não se vê como vilão.",
        "Por anos age por intermediários: empresta um exército a Loki, manda Ronan buscar a Joia do Poder. Quando decide agir sozinho, reúne as seis Joias em poucos dias. Paga o que considera um preço, a vida de Gamora, e vence.",
        "Depois do estalo, usa as Joias para destruí-las e se retira para uma roça. Thor o decapita ali. Em Ultimato, uma versão dele vinda de 2014 conclui que metade não basta, porque os sobreviventes não esquecem, e decide apagar tudo. É essa versão que Stark elimina."
      ],
      "now": "Morto nas duas versões. Um irmão dele, Eros, aparece em Eternos e não voltou.",
      "inDoomsday": false,
      "appearances": {
        "ving1": "É para ele que o intermediário de Loki relata o fracasso da invasão, na cena dos créditos.",
        "gg1": "Sentado num trono, manda Ronan buscar a Joia do Poder. É pai adotivo de Gamora e Nebulosa, e as duas o odeiam.",
        "ving2": "Na cena dos créditos, veste a manopla e decide buscar as Joias pessoalmente.",
        "ginfinita": "Protagonista. Reúne as seis Joias em poucos dias, sacrifica Gamora em Vormir e apaga metade da vida do universo.",
        "ultimato": "O Thanos que venceu é morto por Thor numa roça. O de 2014 vem ao futuro, decide apagar o universo inteiro e é apagado por Stark."
      }
    },
    {
      "id": "ultron",
      "type": "p",
      "group": "Vilões",
      "name": "Ultron",
      "description": "A inteligência artificial que odiou seu criador.",
      "profile": [
        "Programa de defesa global sonhado por Stark, concluído com a inteligência encontrada dentro da Joia da Mente. Desperta, examina a história humana em segundos e decide que a paz exige a extinção. Herda de Stark o sarcasmo.",
        "Espalha-se por corpos de robô e pela internet. O último corpo é destruído por Visão. A imprensa informa que ele volta em VisionQuest, com James Spader de novo na voz."
      ],
      "now": "Dado como destruído. Volta em VisionQuest.",
      "inDoomsday": false,
      "appearances": {
        "ving2": "Criado por Stark e Banner a partir da Joia da Mente. Decide extinguir a humanidade, fabrica o corpo que vira o Visão e tenta derrubar uma cidade sobre a Terra.",
        "visionquest": "Retorno anunciado, com James Spader na voz.",
        "whatif": "Uma variante que venceu, tomou as Joias e passou a destruir universos."
      }
    },
    {
      "id": "caveira",
      "type": "p",
      "group": "Vilões",
      "name": "Caveira Vermelha",
      "description": "O chefe da Hidra.",
      "profile": [
        "Johann Schmidt, oficial nazista que tomou uma versão inicial do soro do supersoldado e ficou com o rosto deformado. Rompe com Hitler para seguir os próprios planos com o Tesseract.",
        "Ao tocar o cubo, é levado embora. Guerra Infinita mostra para onde: Vormir, onde ficou condenado a guiar outros até a Joia da Alma, que ele mesmo nunca poderá ter."
      ],
      "now": "Guardião da Joia da Alma em Vormir. Sem notícias desde que a Joia foi levada.",
      "inDoomsday": false,
      "appearances": {
        "cap1": "Rouba o Tesseract, rompe com Hitler e planeja bombardear cidades americanas. Some ao tocar o cubo.",
        "ginfinita": "Recebe Thanos e Gamora em Vormir e explica o preço da Joia da Alma.",
        "ultimato": "Em 2014, recebe Natasha e Clint e diz a mesma coisa."
      }
    },
    {
      "id": "zemo",
      "type": "p",
      "group": "Vilões",
      "name": "Helmut Zemo",
      "description": "O homem que quebrou os Vingadores.",
      "profile": [
        "Oficial de inteligência de Sokovia. Perdeu o pai, a esposa e o filho quando a cidade caiu. Sem poder nenhum, planeja por um ano e consegue o que nenhum vilão conseguiu: fazer a equipe se destruir por dentro.",
        "Reaparece em Falcão e o Soldado Invernal, solto por Bucky para ajudar a rastrear o soro. Continua convencido de que supersoldados não deveriam existir."
      ],
      "now": "Preso na Balsa.",
      "inDoomsday": false,
      "appearances": {
        "gcivil": "Explode a reunião de Viena, incrimina Bucky e leva Stark e Steve até o vídeo que os separa. T'Challa o impede de se matar.",
        "falcao": "Tirado da prisão por Bucky, guia a busca pelo soro, mata o cientista que o fabricava e é entregue às guerreiras de Wakanda."
      }
    },
    {
      "id": "mysterio",
      "type": "p",
      "group": "Vilões",
      "name": "Mysterio",
      "description": "Quentin Beck.",
      "profile": [
        "Ex-funcionário de Stark, inventor de um sistema de projeções que o chefe rebatizou com um nome ridículo. Com outros demitidos, usa drones e hologramas para encenar ataques de monstros e se apresentar como herói vindo de outra Terra. Foi a primeira vez que um filme do MCU falou em multiverso, e era mentira.",
        "Morre no fim, não sem antes gravar o vídeo que expõe Peter Parker."
      ],
      "now": "Morto.",
      "inDoomsday": false,
      "appearances": {
        "aranha2": "Finge vir de outra Terra, encena monstros com drones, toma de Peter a herança de Stark e, morrendo, divulga a identidade dele.",
        "aranha3": "Já morto. O vídeo dele abre o filme e leva Peter a pedir o feitiço."
      }
    },
    {
      "id": "kang",
      "type": "p",
      "group": "Vilões",
      "name": "Kang",
      "description": "O vilão que a saga deixou para trás.",
      "profile": [
        "Um cientista do século 31 descobre que existem outros universos e entra em contato com versões de si mesmo. Algumas querem trocar conhecimento, outras querem conquistar. Estoura uma guerra entre elas que quase destrói tudo. Uma variante vence, isola uma linha do tempo única e cria a AVT para podar qualquer desvio que pudesse gerar outro dele. Essa variante é Aquele Que Permanece.",
        "Kang, o Conquistador, é uma das variantes que ele temia: foi exilado pelas outras no Reino Quântico por ser perigoso demais até para elas. Victor Timely, inventor do século 19, é uma terceira.",
        "O plano da Marvel era fazer dele o vilão da saga, e o quinto filme dos Vingadores se chamaria A Dinastia Kang. O estúdio dispensou o ator em dezembro de 2023 e, em 2024, anunciou o Doutor Destino no lugar. O conselho de variantes mostrado no fim de Quantumania nunca foi retomado."
      ],
      "now": "Trama abandonada. A AVT diz monitorar as variantes.",
      "inDoomsday": false,
      "appearances": {
        "loki1": "Aquele Que Permanece explica que criou a AVT para impedir uma nova guerra entre suas versões. Sylvie o mata.",
        "quantumania": "Kang, o Conquistador, exilado no Reino Quântico, é derrotado por Scott e Hope. Nos créditos, milhares de variantes se reúnem.",
        "loki2": "Victor Timely, inventor de 1893, é a variante que construiria o Tear Temporal. Morre tentando consertá-lo."
      }
    },
    {
      "id": "doom",
      "type": "p",
      "group": "Vilões",
      "name": "Doutor Destino",
      "description": "Victor von Doom, o vilão de Doomsday.",
      "profile": [
        "Nos quadrinhos, Victor von Doom é o maior inimigo do Quarteto Fantástico. Colega de faculdade de Reed Richards, tão inteligente quanto ele e incapaz de admitir que alguém seja igual. Um experimento que deu errado, feito para alcançar a alma da mãe, deixou seu rosto marcado; ele o esconde atrás de uma máscara de ferro. É cientista e feiticeiro ao mesmo tempo, e governa com mão de ferro um pequeno país europeu, a Latvéria, onde é obedecido e até amado.",
        "O que o distingue de outros vilões é a convicção. Destino acredita sinceramente que o mundo seria melhor sob seu comando e que só ele tem inteligência para salvá-lo. Na história Guerras Secretas, de 2015, é ele quem salva o que resta do multiverso destruído e reina como deus sobre os pedaços.",
        "No MCU, ele aparece primeiro de costas, de capa verde, diante do pequeno Franklin Richards. Os trailers de Doomsday acrescentam o seguinte: a narração de Sue Storm diz que ele vem da Terra-828, a mesma do Quarteto, e que já foi amigo da família; Reed o confronta perguntando se foi ele o responsável por uma destruição; ele diz aos heróis que viveram vidas roubadas e que todos terão de tomar uma decisão impensável; detém o machado de Thor com dois dedos; e reergue um exército de Sentinelas.",
        "Os diretores o descrevem como um dos personagens mais complexos dos quadrinhos e dizem querer mostrar suas fraquezas, não só o poder. Robert Downey Jr. escreveu uma biografia para o personagem e fala com sotaque carregado. O motivo dele e a razão de ter o rosto de Tony Stark não foram revelados."
      ],
      "now": "Vilão de Doomsday e de Guerras Secretas. Vem da Terra-828 e conhece o Quarteto Fantástico há anos. O que ele quer ainda não foi dito.",
      "inDoomsday": true,
      "appearances": {
        "quarteto": "Aparece de costas na cena dos créditos, de capa verde, com a máscara na mão, diante de Franklin Richards. O lugar da Latvéria na assembleia de países aparece vazio.",
        "doomsday": "Vilão. Os trailers o mostram enfrentando Reed, derrotando Thor e reerguendo Sentinelas.",
        "guerras": "Anunciado também para a continuação, que leva o nome da história em que ele reina sobre os restos do multiverso."
      }
    },
    {
      "id": "galactus",
      "type": "p",
      "group": "Vilões",
      "name": "Galactus",
      "description": "O devorador de mundos.",
      "profile": [
        "Ser gigantesco, mais antigo que o universo, que consome a energia de planetas inteiros para aplacar uma fome que nunca passa. Não age por maldade; é uma força. Manda arautos na frente para escolher os mundos.",
        "Em Primeiros Passos, percebe em Franklin um poder capaz de assumir a fome no lugar dele. A Surfista Prateada o empurra por um portal para um ponto distante do espaço. Não morre."
      ],
      "now": "Jogado para longe da Terra-828.",
      "inDoomsday": false,
      "appearances": {
        "quarteto": "Marca a Terra-828 para ser devorada, exige o bebê de Sue em troca e é empurrado por um portal para longe."
      }
    },
    {
      "id": "surfista",
      "type": "p",
      "group": "Vilões",
      "name": "Surfista Prateada",
      "description": "Shalla-Bal, a arauta de Galactus.",
      "profile": [
        "Quando Galactus chegou ao planeta dela, ofereceu-se para servi-lo em troca de poupá-lo. Passou a procurar outros mundos para ele devorar, coberta de prata e montada numa prancha. Johnny Storm decifra sua língua e mostra a ela gravações dos mundos que ajudou a destruir. Ela se volta contra o mestre no último momento."
      ],
      "now": "Destino não mostrado.",
      "inDoomsday": false,
      "appearances": {
        "quarteto": "Anuncia o fim do planeta, persegue o Quarteto, destrói as pontes de teletransporte e, por fim, empurra o mestre pelo portal, indo junto."
      }
    },
    {
      "id": "ross",
      "type": "p",
      "group": "Vilões",
      "name": "Thaddeus Ross",
      "description": "O general que virou presidente e Hulk Vermelho.",
      "profile": [
        "General do Exército que passa anos caçando Bruce Banner, namorado de sua filha, Betty. Depois vira secretário de Estado e é quem apresenta os Acordos de Sokovia aos Vingadores e manda prender os que recusam.",
        "Em 2024 se elege presidente dos Estados Unidos prometendo união. Para tratar o coração, toma há anos comprimidos preparados por Samuel Sterns, que colocava neles radiação gama. Sob pressão, numa coletiva, transforma-se num Hulk vermelho e destrói parte de Washington. Sam Wilson o acalma falando da filha. O personagem foi de William Hurt até a morte do ator, em 2022, e passou a Harrison Ford."
      ],
      "now": "Renunciou e está preso na Balsa. Fez as pazes com a filha.",
      "inDoomsday": false,
      "appearances": {
        "hulk": "General que caça Banner para recuperar o que considera propriedade do Exército.",
        "gcivil": "Secretário de Estado. Leva os Acordos de Sokovia aos Vingadores e administra a prisão onde põe os que recusam.",
        "ginfinita": "Ordena a prisão de Steve e dos outros no meio da invasão. Rhodes desliga a chamada.",
        "viuva": "Persegue Natasha logo depois de Guerra Civil.",
        "cap4": "Presidente. Manteve Sterns preso por anos em troca de remédios. Vira o Hulk Vermelho, é detido por Sam, renuncia e vai para a Balsa.",
        "ultimato": "Aparece no funeral de Stark."
      }
    },
    {
      "id": "sterns",
      "type": "p",
      "group": "Vilões",
      "name": "Samuel Sterns",
      "description": "O Líder.",
      "profile": [
        "Biólogo que ajuda Banner em O Incrível Hulk. No fim daquele filme, sangue contaminado pinga num ferimento em sua cabeça. Dezessete anos se passam sem que o MCU volte ao assunto.",
        "Admirável Mundo Novo revela o que houve: o cérebro dele cresceu e ele se tornou capaz de calcular probabilidades com precisão absurda. Ross o manteve preso em segredo todo esse tempo, usando sua inteligência. Sterns planeja a vingança por anos e se entrega quando ela está completa."
      ],
      "now": "Preso na Balsa. Avisou Sam de que outros mundos existem e de que os heróis deles vêm aí.",
      "inDoomsday": false,
      "appearances": {
        "hulk": "Biólogo que tenta curar Banner à distância. É obrigado a criar o Abominável e acaba contaminado.",
        "cap4": "Preso em segredo por Ross durante anos, arma o atentado, a crise com o Japão e a transformação do presidente. Entrega-se e avisa dos outros mundos."
      }
    },
    {
      "id": "cassandra",
      "type": "p",
      "group": "Vilões",
      "name": "Cassandra Nova",
      "description": "A irmã gêmea de Xavier.",
      "profile": [
        "Telepata tão forte quanto o irmão, sem nenhum dos escrúpulos. A AVT a jogou no Vazio ainda criança. Lá ela cresceu e passou a reinar sobre os descartados de todos os universos. Entra na cabeça das pessoas enfiando os dedos, literalmente.",
        "Tenta usar a máquina da AVT para destruir todas as linhas do tempo e é desintegrada por ela."
      ],
      "now": "Dada como morta.",
      "inDoomsday": false,
      "appearances": {
        "deadpool": "Reina sobre o Vazio. É traída, salva por Logan, e usa a chance para tentar apagar todas as linhas do tempo. Morre na máquina."
      }
    },
    {
      "id": "vingadores",
      "type": "e",
      "group": "Equipes",
      "name": "Os Vingadores",
      "description": "A equipe, suas formações e sua ausência.",
      "profile": [
        "Ideia de Nick Fury: juntar pessoas extraordinárias para as batalhas que exércitos não vencem. Formação original: Homem de Ferro, Capitão América, Thor, Hulk, Viúva Negra e Gavião Arqueiro. Depois de Ultron entram Wanda, Visão, Sam Wilson e James Rhodes.",
        "A equipe nunca teve estatuto claro. Começou ligada à S.H.I.E.L.D., passou a ser financiada por Stark e, com os Acordos de Sokovia, rachou entre quem aceitava supervisão da ONU e quem não. Reúne-se uma última vez em Ultimato.",
        "De 2023 em diante não existe mais. Durante quase toda a Saga do Multiverso, as crises são resolvidas por quem estiver perto. Em Admirável Mundo Novo, o presidente Ross pede a Sam Wilson que a recrie, e Sam aceita depois, por conta própria."
      ],
      "now": "Sendo remontada por Sam Wilson. Os Novos Vingadores usam o nome sem a concordância dele.",
      "inDoomsday": true,
      "appearances": {
        "ving1": "Seis pessoas reunidas por Nick Fury vencem a invasão de Nova York.",
        "ving2": "Criam e destroem Ultron. Saem Thor, Banner, Stark e Clint; entram Wanda, Visão, Sam e Rhodes.",
        "gcivil": "Os Acordos de Sokovia e o caso Bucky partem a equipe em duas. Metade vira foragida.",
        "ginfinita": "Separados e sem comando único, enfrentam Thanos em três frentes e perdem.",
        "ultimato": "Os seis originais, mais Rhodes, Scott, Rocket e Nebulosa, fazem a viagem no tempo. Na batalha final estão todos.",
        "cap4": "O presidente Ross pede a Sam que a recrie. Sam aceita no fim, por conta própria, e convida Joaquin Torres.",
        "doomsday": "A equipe de Sam Wilson, ao lado dos Novos Vingadores, de Wakanda, do Quarteto e dos X-Men.",
        "cmarvel": "Mostra-se a origem do nome: o apelido de piloto de Carol Danvers.",
        "shangchi": "Banner e Carol atendem ao chamado de Wong, sinal de que ainda existe uma rede informal."
      }
    },
    {
      "id": "novos",
      "type": "e",
      "group": "Equipes",
      "name": "Novos Vingadores",
      "description": "Os Thunderbolts de Valentina.",
      "profile": [
        "Yelena Belova, Bucky Barnes, John Walker, Ava Starr, Alexei Shostakov e Bob Reynolds. Yelena, Walker e Ava eram agentes de Valentina de Fontaine, mandados para o mesmo cofre para se matarem. Alexei e Bucky se juntaram a eles no caminho, e Bob estava dentro do cofre.",
        "Ninguém os escolheu por mérito. Depois que eles salvam Nova York do Vácuo, Valentina os empurra para um palco e anuncia os Novos Vingadores, transformando a própria queima de arquivo em vitória política. O asterisco no título do filme é a pista de que Thunderbolts era um nome provisório, tirado do time de futebol infantil de Yelena.",
        "Catorze meses depois, estão instalados na antiga Torre dos Vingadores, com a popularidade em baixa e uma disputa judicial com Sam Wilson pelo nome."
      ],
      "now": "Operam em Nova York. Todos estão no elenco de Doomsday.",
      "inDoomsday": true,
      "appearances": {
        "thunder": "Sobrevivem à armadilha de Valentina, salvam Nova York do Vácuo e são apresentados por ela como Novos Vingadores. Catorze meses depois, vivem na torre e são processados por Sam Wilson.",
        "doomsday": "Todos no elenco. O filme começa catorze meses depois da formação do grupo."
      }
    },
    {
      "id": "quarteto",
      "type": "e",
      "group": "Equipes",
      "name": "Quarteto Fantástico",
      "description": "A primeira família, vinda de outra Terra.",
      "profile": [
        "Reed Richards, Sue Storm, Johnny Storm e Ben Grimm. Quatro astronautas atingidos por raios cósmicos numa missão. Na Terra-828 são cientistas, celebridades e os únicos heróis do planeta; moram no Edifício Baxter com um robô ajudante, H.E.R.B.I.E.",
        "São uma família antes de serem uma equipe, e é por aí que passam seus conflitos. A história deles gira em torno do filho de Reed e Sue.",
        "A cena no fim de Thunderbolts* mostra a nave deles entrando na órbita da Terra principal. Não se sabe se fogem, perseguem ou foram trazidos."
      ],
      "now": "Na Terra principal. Os quatro estão no elenco de Doomsday.",
      "inDoomsday": true,
      "appearances": {
        "quarteto": "Enfrentam Galactus, recusam entregar Franklin e o mandam para longe com a ajuda da Surfista Prateada.",
        "thunder": "Na última cena, a nave deles entra na Terra principal.",
        "doomsday": "No elenco. Um trailer os mostra em Wakanda.",
        "estranho2": ""
      }
    },
    {
      "id": "xmen",
      "type": "e",
      "group": "Equipes",
      "name": "X-Men",
      "description": "A equipe de Xavier.",
      "profile": [
        "Mutantes treinados por Charles Xavier para proteger um mundo que os teme. Os direitos de cinema eram da Fox, por isso não existiam no MCU. Depois que a Disney comprou a Fox, em 2019, a entrada foi gradual: a palavra mutante em Ms. Marvel, um Xavier alternativo em Multiverso da Loucura, o Fera em As Marvels, um filme inteiro com Deadpool e Wolverine.",
        "Em Doomsday voltam os atores dos primeiros filmes: Patrick Stewart, Ian McKellen, James Marsden, Rebecca Romijn, Alan Cumming e Kelsey Grammer, mais Channing Tatum como Gambit. São os X-Men de outro universo, não os do MCU.",
        "Um filme novo dos X-Men, com outro elenco, está previsto para depois da saga."
      ],
      "now": "A formação da Fox está no elenco de Doomsday. Os trailers mostram a mansão em ruínas e os X-Men lutando contra heróis da Terra principal antes de se aliarem a eles.",
      "inDoomsday": true,
      "appearances": {
        "xmen1": "Resgatam Wolverine e Vampira e impedem Magneto na Estátua da Liberdade.",
        "xmen2": "Têm a escola invadida, aliam-se a Magneto e perdem Jean Grey.",
        "deadpool": "O filme estabelece que o mundo deles é a Terra-10005 e o salva.",
        "doomsday": "A formação original está no elenco.",
        "estranho2": "Um Charles Xavier de outra Terra faz parte dos Illuminati.",
        "marvels": "O Fera aparece na cena dos créditos, num universo paralelo."
      }
    },
    {
      "id": "guardioes",
      "type": "e",
      "group": "Equipes",
      "name": "Guardiões da Galáxia",
      "description": "O lado cósmico da primeira saga.",
      "profile": [
        "Peter Quill, Gamora, Drax, Rocket e Groot, depois Nebulosa e Mantis. Um bando de criminosos e desajustados que vira família. São essenciais na guerra contra Thanos, pai adotivo de duas integrantes.",
        "A trilogia se encerra em 2023 com a equipe original se desfazendo. Rocket assume uma formação nova. Nenhum filme deles está na lista oficial para Doomsday."
      ],
      "now": "Nova formação, liderada por Rocket. Fora do elenco anunciado.",
      "inDoomsday": false,
      "appearances": {
        "gg1": "Cinco criminosos presos juntos fogem, descobrem o que carregam e salvam Xandar.",
        "gg2": "Enfrentam Ego, pai de Quill. Mantis entra na equipe, e Nebulosa deixa de ser inimiga.",
        "ginfinita": "Recolhem Thor e se dividem. Gamora morre, e os que estavam em Titã viram pó.",
        "gg3": "Salvam Rocket, libertam as cobaias do Alto Evolucionário e se separam.",
        "ultimato": "Rocket e Nebulosa fazem a viagem no tempo. Os demais voltam para a batalha, e Thor parte com eles.",
        "thor4": "Aparecem no começo, com Thor a bordo, até ele seguir sozinho.",
        "ggnatal": "Instalados em Luganenhum, comemoram o Natal."
      }
    },
    {
      "id": "illuminati",
      "type": "e",
      "group": "Equipes",
      "name": "Illuminati",
      "description": "O conselho secreto da Terra-838.",
      "profile": [
        "Grupo de heróis que governa nos bastidores um universo vizinho. Tem um Reed Richards, um Professor Xavier, a Capitã Carter, uma Capitã Marvel que é Maria Rambeau, Raio Negro e Mordo. Executaram o Doutor Estranho deles por ter causado uma incursão.",
        "Wanda mata quase todos em minutos. O grupo serve para mostrar duas coisas: que existem versões alternativas dos heróis, e que nem todas juntas detêm a Feiticeira Escarlate."
      ],
      "now": "Quase todos mortos.",
      "inDoomsday": false,
      "appearances": {
        "estranho2": "Prendem Strange e America, contam como executaram o Strange deles e são mortos por Wanda em poucos minutos."
      }
    },
    {
      "id": "jovens",
      "type": "e",
      "group": "Equipes",
      "name": "A nova geração",
      "description": "Os candidatos a Jovens Vingadores.",
      "profile": [
        "A Saga do Multiverso apresentou um herói jovem por título sem juntá-los: Kate Bishop, Kamala Khan, Cassie Lang, Riri Williams, America Chavez, Billy e Tommy Maximoff, Skaar.",
        "A única tentativa de reuni-los está no fim de As Marvels, quando Kamala visita Kate Bishop e cita Cassie Lang. Não houve continuação."
      ],
      "now": "Nunca formaram equipe. Só Cassie Lang está no elenco anunciado de Doomsday.",
      "inDoomsday": false,
      "appearances": {
        "marvels": "Kamala procura Kate Bishop e cita Cassie Lang. É a única tentativa de reunir o grupo.",
        "gaviao": "Kate Bishop, arqueira, vira parceira de Clint Barton.",
        "estranho2": "America Chavez, que atravessa universos, fica em Kamar-Taj.",
        "msmarvel": "Kamala Khan ganha poderes.",
        "mulherhulk": "Skaar, filho do Hulk, aparece na última cena.",
        "wakanda": "Riri Williams constrói sua primeira armadura de combate.",
        "quantumania": "Cassie Lang, filha de Scott, ganha um traje.",
        "agatha": "Billy Maximoff reaparece, e Tommy ganha um corpo.",
        "coracao": "Riri Williams faz um pacto com Mefisto."
      }
    },
    {
      "id": "shield",
      "type": "e",
      "group": "Organizações",
      "name": "S.H.I.E.L.D.",
      "description": "A agência que criou os Vingadores e caiu.",
      "profile": [
        "Agência de espionagem fundada depois da Segunda Guerra por Peggy Carter e Howard Stark, pai de Tony. Cuida de ameaças fora do comum: tecnologia alienígena, pessoas com poderes. Tem porta-aviões voadores e arquivos sobre todo mundo.",
        "Em O Soldado Invernal descobre-se que a Hidra cresceu dentro dela desde o início. Para deter um plano de assassinato em massa, Steve Rogers e Natasha Romanoff expõem todos os segredos da agência na internet. Ela é extinta. Duas sucessoras aparecem depois: a S.W.O.R.D., em WandaVision, e a S.A.B.E.R., estação espacial de Fury."
      ],
      "now": "Extinta em 2014.",
      "inDoomsday": false,
      "appearances": {
        "hf1": "O agente Coulson tenta falar com Stark, e Fury aparece depois dos créditos.",
        "ving1": "Guarda o Tesseract, reúne os Vingadores e esconde deles que fabricava armas com o cubo.",
        "cap2": "Revela-se tomada pela Hidra desde a fundação. É desmontada por Steve, Natasha e Fury.",
        "cmarvel": "Em 1995, Fury e Coulson são agentes de campo e nunca viram um alienígena.",
        "hf2": "Vigia Stark por meio de Natasha e entrega a ele o material do pai.",
        "thor": "Isola o martelo no deserto e confisca a pesquisa de Jane Foster.",
        "cap1": "Ainda não existe. Nasce do programa em que Peggy Carter e Howard Stark trabalham.",
        "ving2": "Já extinta. Fury aparece com uma nave antiga para evacuar Sokovia.",
        "hformiga": "Em 1989, tenta copiar a fórmula de Pym, que rompe com a agência."
      }
    },
    {
      "id": "hidra",
      "type": "e",
      "group": "Organizações",
      "name": "Hidra",
      "description": "A organização nazista que nunca morreu.",
      "profile": [
        "Divisão científica do regime nazista, comandada pelo Caveira Vermelha, que rompe com Hitler para perseguir os próprios objetivos. O lema diz que, cortada uma cabeça, nascem duas.",
        "Depois da guerra, seus cientistas são recrutados pelos Estados Unidos e se infiltram na S.H.I.E.L.D. Por setenta anos fomentam crises para que o mundo aceite trocar liberdade por segurança. São responsáveis pelo Soldado Invernal e pelos experimentos que deram poderes a Wanda."
      ],
      "now": "Desarticulada depois de 2015.",
      "inDoomsday": false,
      "appearances": {
        "cap1": "Divisão científica nazista que rompe com Hitler para usar o Tesseract por conta própria.",
        "cap2": "Revela-se viva dentro da S.H.I.E.L.D. e prestes a matar milhões com o Projeto Insight.",
        "ving2": "A última base, em Sokovia, usa o cetro de Loki em experimentos. É tomada pelos Vingadores.",
        "hformiga": "É o comprador do traje de Darren Cross.",
        "gcivil": "Sua base na Sibéria guarda os outros Soldados Invernais.",
        "ultimato": "Em 2012, seus agentes infiltrados levam o cetro. Steve o toma deles fingindo ser um dos seus."
      }
    },
    {
      "id": "tva",
      "type": "e",
      "group": "Organizações",
      "name": "AVT",
      "description": "A Autoridade de Variância Temporal.",
      "profile": [
        "Burocracia que existe fora do tempo, com escritórios dos anos 1970, formulários e um relógio falante como mascote. Seus agentes acreditam ter sido criados por três seres chamados Guardiões do Tempo para proteger a Linha do Tempo Sagrada.",
        "O trabalho: quando alguém faz algo fora do roteiro, cria-se uma ramificação. A AVT prende o responsável, a variante, e apaga a ramificação. Tudo que é apagado vai parar no Vazio.",
        "É tudo mentira. Os Guardiões são robôs, os funcionários são variantes sequestradas com a memória apagada, e o criador é Aquele Que Permanece. Depois da morte dele, a AVT se reforma: para de apagar ramificações e passa a monitorar as variantes de Kang."
      ],
      "now": "Reformada. Vigia o multiverso sem interferir.",
      "inDoomsday": false,
      "appearances": {
        "loki1": "Prende Loki por desviar da linha do tempo. Descobre-se que os chefes são robôs e os funcionários, variantes sequestradas.",
        "loki2": "Racha entre quem quer voltar a apagar ramificações e quem quer protegê-las. No fim, passa a vigiar as variantes do criador.",
        "deadpool": "Um agente ambicioso tenta apagar a Terra-10005 sem autorização e é preso."
      }
    },
    {
      "id": "dezaneis",
      "type": "e",
      "group": "Organizações",
      "name": "Os Dez Anéis",
      "description": "A organização e as armas de Wenwu.",
      "profile": [
        "São duas coisas com o mesmo nome. Os anéis são dez argolas usadas nos antebraços, que dão força, disparam energia e impedem o envelhecimento. Ninguém sabe quem os fez. A organização é o exército secreto que Wenwu montou com eles ao longo de mil anos.",
        "A organização aparece desde o primeiro filme: são eles que sequestram Tony Stark. O Mandarim de Homem de Ferro 3 era um ator usando a fama do grupo. Hoje é comandada por Xialing, irmã de Shang-Chi."
      ],
      "now": "Os anéis estão com Shang-Chi e emitem um sinal para destino desconhecido.",
      "inDoomsday": false,
      "appearances": {
        "hf1": "A organização sequestra Tony Stark no Afeganistão, a mando de Stane.",
        "hf3": "Um ator finge ser seu líder, o Mandarim.",
        "shangchi": "Conta-se a origem: mil anos sob o comando de Wenwu. Passa à filha dele."
      }
    },
    {
      "id": "controle",
      "type": "e",
      "group": "Organizações",
      "name": "Controle de Danos",
      "description": "O departamento que limpa e depois persegue.",
      "profile": [
        "Órgão do governo americano criado com dinheiro de Stark para recolher destroços e tecnologia alienígena depois da Batalha de Nova York. Com o tempo vira polícia de gente com poderes: prende Peter Parker, persegue Kamala Khan e, em Um Novo Dia, caça Jean Grey."
      ],
      "now": "Sob investigação depois de Um Novo Dia. O diretor, que fazia experimentos em pessoas com poderes, desapareceu.",
      "inDoomsday": false,
      "appearances": {
        "aranha1": "Criado por Stark e pelo governo, tira de Toomes o contrato de limpeza de Nova York.",
        "aranha3": "Prende e interroga Peter, May, MJ e Ned.",
        "msmarvel": "Persegue Kamala e outro adolescente com poderes, até cercar uma escola.",
        "aranha4": "Mantém prisões secretas e faz experimentos em telepatas. É o alvo de Jean Grey.",
        "mulherhulk": "Administra a prisão onde está o Abominável."
      }
    },
    {
      "id": "magos",
      "type": "e",
      "group": "Organizações",
      "name": "Mestres das Artes Místicas",
      "description": "Os magos de Kamar-Taj.",
      "profile": [
        "Ordem que protege a Terra de ameaças de outras dimensões, como a S.H.I.E.L.D. fazia com as do espaço. Seu líder é o Mago Supremo. Aprendem a tirar energia de outras dimensões para moldar escudos, armas e portais.",
        "A líder por séculos foi a Anciã, que morre no primeiro Doutor Estranho. O título passou a Wong."
      ],
      "now": "Liderados por Wong.",
      "inDoomsday": false,
      "appearances": {
        "estranho": "Treinam Strange em Kamar-Taj e perdem a Anciã.",
        "ginfinita": "Guardam a Joia do Tempo e não conseguem impedir que Strange seja levado.",
        "estranho2": "Defendem Kamar-Taj de Wanda e perdem muitos dos seus.",
        "ultimato": "Chegam pelos portais para a batalha final.",
        "aranha3": "Wong, já Mago Supremo, deixa Strange fazer o feitiço.",
        "shangchi": "Wong leva os dez anéis para análise."
      }
    },
    {
      "id": "eternos",
      "type": "e",
      "group": "Povos",
      "name": "Eternos",
      "description": "Os imortais enviados à Terra.",
      "profile": [
        "Dez seres de aparência humana, mandados à Terra há sete mil anos pelos Celestiais para exterminar os Deviantes, predadores que ameaçavam a humanidade. Viveram entre nós, inspiraram mitos e tinham ordem de não interferir em conflitos humanos, razão pela qual não enfrentaram Thanos.",
        "Descobrem que são máquinas e que a missão era outra: fazer a população crescer até fornecer energia para o nascimento de um Celestial, o que destruiria o planeta. Parte do grupo impede o nascimento. Outro Celestial leva três deles para julgar se a Terra merece existir."
      ],
      "now": "Trama em aberto, sem continuação marcada.",
      "inDoomsday": false,
      "appearances": {
        "eternos": "Descobrem que foram criados para preparar o nascimento de um Celestial, que destruiria a Terra. Parte do grupo o impede, e três são levados para julgamento."
      }
    },
    {
      "id": "skrulls",
      "type": "e",
      "group": "Povos",
      "name": "Skrulls",
      "description": "Os metamorfos refugiados.",
      "profile": [
        "Alienígenas verdes capazes de copiar qualquer pessoa. Em Capitã Marvel parecem os vilões e se revelam um povo sem planeta, perseguido pelo império Kree. Fury promete ajudá-los a achar um lar.",
        "Trinta anos depois a promessa segue sem cumprir, e um milhão de Skrulls vive escondido na Terra. Uma facção resolve tomar o planeta."
      ],
      "now": "Vivem na Terra, agora perseguidos.",
      "inDoomsday": false,
      "appearances": {
        "cmarvel": "Apresentados como invasores, revelam-se refugiados perseguidos pelos Kree.",
        "aranha2": "Dois deles substituem Fury e Hill durante o filme.",
        "invasao": "Um milhão vive escondido na Terra. Uma facção tenta tomá-la, e os inocentes passam a ser caçados."
      }
    },
    {
      "id": "kree",
      "type": "e",
      "group": "Povos",
      "name": "Kree",
      "description": "O império militar.",
      "profile": [
        "Civilização guerreira de pele azul, governada por uma inteligência artificial. Transformou Carol Danvers em soldado. Ronan, o fanático de Guardiões da Galáxia, é Kree.",
        "Quando Carol destrói a inteligência que os governava, o planeta deles, Hala, entra em guerra civil e perde o ar e a água."
      ],
      "now": "Planeta natal em recuperação.",
      "inDoomsday": false,
      "appearances": {
        "gg1": "O império assinou a paz com Xandar. Ronan, que não aceita, age sozinho.",
        "cmarvel": "Em guerra com os Skrulls, transformam Carol em soldado e apagam sua memória.",
        "marvels": "Com o planeta em ruínas depois da guerra civil, roubam ar, água e sol de outros mundos."
      }
    },
    {
      "id": "ny",
      "type": "l",
      "group": "Na Terra",
      "name": "Nova York",
      "description": "O centro do mapa.",
      "profile": [
        "É onde a maior parte da história se passa. A Batalha de Nova York, em 2012, quando o portal se abre sobre Manhattan, é o acontecimento que muda a vida de todo mundo: cria o trauma de Stark, enche a cidade de sucata alienígena e dá origem ao Controle de Danos.",
        "Endereços que importam: a Torre Stark, em Midtown, que vira Torre dos Vingadores, é vendida e reaparece como sede dos Novos Vingadores; o Santuário de Strange, na Bleecker Street; o Queens de Peter Parker; Hell's Kitchen, do Demolidor."
      ],
      "now": "Wilson Fisk foi afastado e exilado em 2026. Os Novos Vingadores operam da antiga Torre dos Vingadores.",
      "inDoomsday": false,
      "appearances": {
        "ving1": "O portal se abre sobre a Torre Stark, e os Chitauri invadem Manhattan.",
        "ginfinita": "Uma nave de Thanos pousa em Greenwich Village atrás da Joia do Tempo.",
        "ultimato": "Os Vingadores voltam ao dia da batalha de 2012 para pegar três Joias.",
        "aranha3": "O céu racha sobre a Estátua da Liberdade.",
        "demolidor": "Wilson Fisk governa a cidade, decreta lei marcial e termina exilado.",
        "thunder": "O Vácuo cobre Manhattan de sombra. A antiga torre passa a sediar os Novos Vingadores.",
        "aranha4": "Peter a protege sozinho. Uma prisão do governo em Roosevelt Island é o palco final.",
        "hf2": "A feira de tecnologia de Stark, no Queens, é atacada pelos drones de Vanko.",
        "hulk": "O Hulk e o Abominável destroem o Harlem.",
        "estranho": "O Santuário da Bleecker Street é atacado por Kaecilius.",
        "aranha1": "O Queens de Peter Parker. A sucata da batalha de 2012 vira arma.",
        "gaviao": "Clint e Kate enfrentam a máfia no Natal, no Rockefeller Center."
      }
    },
    {
      "id": "complexo",
      "type": "l",
      "group": "Na Terra",
      "name": "Complexo dos Vingadores",
      "description": "A segunda sede.",
      "profile": [
        "Base no interior do estado de Nova York, instalada num antigo depósito das Indústrias Stark depois de Ultron. É onde a equipe treina, mora e discute os Acordos. O Thanos de 2014 a bombardeia em Ultimato, e a batalha final acontece sobre as ruínas."
      ],
      "now": "Destruído em 2023.",
      "inDoomsday": false,
      "appearances": {
        "ving2": "Inaugurado na última cena, como sede da nova formação.",
        "gcivil": "Onde os Acordos são apresentados e onde Wanda fica confinada.",
        "ultimato": "Onde a máquina do tempo é construída. É bombardeado por Thanos, e a batalha final acontece nas ruínas.",
        "hformiga": "Scott Lang o invade para roubar uma peça e luta com Sam Wilson.",
        "aranha1": "Para onde o avião com o equipamento dos Vingadores estava indo.",
        "ginfinita": "Abriga Wanda, Visão e os foragidos antes da ida a Wakanda."
      }
    },
    {
      "id": "wakanda",
      "type": "l",
      "group": "Na Terra",
      "name": "Wakanda",
      "description": "O país escondido.",
      "profile": [
        "Nação da África oriental. Há milhares de anos um meteorito de vibranium caiu ali, e cinco tribos construíram em torno dele a sociedade mais avançada do planeta. Para se proteger, esconderam-se atrás de um holograma e da fama de país pobre de pastores.",
        "É governada por um rei que é também o Pantera Negra. T'Challa encerra o isolamento em 2016. Em 2018 o país recebe a batalha final contra Thanos. Depois da morte do rei, vira alvo de potências que querem o vibranium."
      ],
      "now": "Sob proteção de Shuri, com o trono disputado por M'Baku.",
      "inDoomsday": false,
      "appearances": {
        "gcivil": "O rei morre em Viena. No fim, Bucky recebe asilo lá.",
        "pantera": "Apresentada: história, tribos, tecnologia e a decisão de se abrir ao mundo.",
        "ginfinita": "Recebe Visão e os Vingadores e é o campo da batalha contra Thanos.",
        "wakanda": "De luto pelo rei, é pressionada pelas potências, inundada por Namor e defendida por Shuri.",
        "hf2": "Aparece num mapa de Fury, sem explicação.",
        "ving2": "Citada como origem do vibranium roubado por Klaue.",
        "falcao": "Suas guerreiras cobram Zemo, e o país faz o traje novo de Sam."
      }
    },
    {
      "id": "talokan",
      "type": "l",
      "group": "Na Terra",
      "name": "Talokan",
      "description": "O reino submarino.",
      "profile": [
        "Cidade no fundo do Atlântico, fundada no século 16 por um povo maia que fugia dos conquistadores espanhóis. Uma planta nascida sobre vibranium os fez respirar água e ficar azuis fora dela. Têm o segundo depósito de vibranium do mundo e ninguém sabia que existiam.",
        "Nos quadrinhos, o reino de Namor é Atlântida. O MCU trocou a origem."
      ],
      "now": "Escondido. Aliado formal de Wakanda.",
      "inDoomsday": false,
      "appearances": {
        "wakanda": "Massacra quem procura vibranium no mar, sequestra Shuri, ataca Wakanda e aceita a paz."
      }
    },
    {
      "id": "sokovia",
      "type": "l",
      "group": "Na Terra",
      "name": "Sokovia",
      "description": "O país que deu nome aos Acordos.",
      "profile": [
        "País pequeno e pobre do leste europeu, palco de guerras e de uma base da Hidra. É a terra de Wanda e Pietro Maximoff e de Helmut Zemo.",
        "Em 2015, Ultron arranca a capital do chão para deixá-la cair como um meteoro. Os Vingadores evacuam os moradores e explodem a cidade no ar. O país não se recupera e é repartido entre os vizinhos."
      ],
      "now": "Deixou de existir como país.",
      "inDoomsday": false,
      "appearances": {
        "ving2": "Sede da última base da Hidra e terra dos Maximoff. A capital é arrancada do chão e destruída.",
        "gcivil": "Dá nome aos Acordos e motivo a Zemo, que perdeu a família ali.",
        "falcao": "Zemo visita o memorial. O país foi repartido entre os vizinhos.",
        "wandavision": "Mostra-se a infância de Wanda, sob bombardeio."
      }
    },
    {
      "id": "kamartaj",
      "type": "l",
      "group": "Na Terra",
      "name": "Kamar-Taj e os Santuários",
      "description": "A casa dos magos.",
      "profile": [
        "Kamar-Taj é o mosteiro em Katmandu, no Nepal, onde se treinam os Mestres das Artes Místicas. Dele partem portas para três Santuários, em Nova York, Londres e Hong Kong, que juntos formam um escudo em volta da Terra.",
        "O Santuário de Nova York é a casa de Strange. Wanda destrói boa parte de Kamar-Taj em Multiverso da Loucura."
      ],
      "now": "Em reconstrução, sob Wong.",
      "inDoomsday": false,
      "appearances": {
        "estranho": "Strange chega procurando cura e aprende magia. O Santuário de Londres cai, e o de Hong Kong é salvo.",
        "ginfinita": "Banner cai pelo teto do Santuário de Nova York com o aviso sobre Thanos.",
        "estranho2": "Wanda ataca Kamar-Taj e mata muitos magos. America fica lá como aprendiz.",
        "ragnarok": "Strange recebe Thor e Loki no Santuário de Nova York.",
        "aranha3": "O feitiço de Peter é feito no porão do Santuário de Nova York.",
        "shangchi": "Os dez anéis são examinados ali."
      }
    },
    {
      "id": "westview",
      "type": "l",
      "group": "Na Terra",
      "name": "Westview",
      "description": "A cidade que Wanda sequestrou.",
      "profile": [
        "Cidadezinha de Nova Jersey onde Visão tinha comprado um terreno para viver com Wanda. Ela chega, vê o terreno vazio e, sem planejar, cobre a cidade com um campo de energia em forma de hexágono. Lá dentro tudo vira seriado de TV, e os moradores atuam sem controle do próprio corpo, sentindo a dor dela."
      ],
      "now": "Livre. Os moradores não perdoaram Wanda.",
      "inDoomsday": false,
      "appearances": {
        "wandavision": "Wanda a cobre com uma barreira e faz dos moradores o elenco de um seriado. Desfaz tudo no fim.",
        "agatha": "Agatha segue lá, enfeitiçada, três anos depois. Os moradores a toleram."
      }
    },
    {
      "id": "ilhacel",
      "type": "l",
      "group": "Na Terra",
      "name": "Ilha Celestial",
      "description": "O gigante petrificado no oceano.",
      "profile": [
        "No fim de Eternos, um Celestial que nascia de dentro do planeta é transformado em pedra. A cabeça e uma mão ficam para fora do oceano Índico, do tamanho de uma cordilheira. Por quatro anos nenhum título mencionou isso.",
        "Admirável Mundo Novo retoma: dentro da massa há adamantium. Estados Unidos e Japão, entre outros países, disputam a exploração, e a crise quase vira guerra."
      ],
      "now": "Explorada por um tratado internacional.",
      "inDoomsday": false,
      "appearances": {
        "eternos": "Tiamut é transformado em pedra quando já tem a cabeça e a mão fora do mar.",
        "cap4": "Descobre-se adamantium nela. Estados Unidos e Japão quase vão à guerra pela exploração."
      }
    },
    {
      "id": "balsa",
      "type": "l",
      "group": "Na Terra",
      "name": "A Balsa",
      "description": "A prisão no fundo do mar.",
      "profile": [
        "Presídio de segurança máxima para pessoas com poderes, que sobe do oceano só para receber presos. Criado para aplicar os Acordos de Sokovia. Já guardou metade do time de Steve Rogers; hoje guarda Zemo, Thaddeus Ross e Samuel Sterns."
      ],
      "now": "Em funcionamento.",
      "inDoomsday": false,
      "appearances": {
        "gcivil": "Prisão no meio do mar onde Ross põe o time de Steve. Steve os tira de lá.",
        "falcao": "Recebe Zemo, entregue pelas guerreiras de Wakanda.",
        "cap4": "Recebe Sterns e o ex-presidente Ross."
      }
    },
    {
      "id": "salaverm",
      "type": "l",
      "group": "Na Terra",
      "name": "Sala Vermelha",
      "description": "A fábrica de Viúvas Negras.",
      "profile": [
        "Programa soviético, depois privado, que sequestrava meninas e as treinava como assassinas, esterilizando-as na formatura. Natasha acreditava tê-lo destruído. Ele continuou, numa base voadora, controlando as agentes por substâncias químicas. Natasha e Yelena o derrubam e libertam as Viúvas."
      ],
      "now": "Destruída.",
      "inDoomsday": false,
      "appearances": {
        "ving2": "Wanda faz Natasha reviver o treinamento e a cerimônia de formatura.",
        "viuva": "Revela-se ativa, numa base voadora. É destruída, e as Viúvas são libertadas."
      }
    },
    {
      "id": "madripoor",
      "type": "l",
      "group": "Na Terra",
      "name": "Madripoor",
      "description": "A ilha sem lei.",
      "profile": [
        "Cidade-estado no sudeste asiático, paraíso de contrabandistas. Em Falcão e o Soldado Invernal, é controlada por alguém chamado Mercador do Poder, que se revela ser Sharon Carter, ex-agente da S.H.I.E.L.D. abandonada pelo governo depois de Guerra Civil. Nos quadrinhos é um lugar ligado aos X-Men."
      ],
      "now": "Sem aparições desde 2021.",
      "inDoomsday": false,
      "appearances": {
        "falcao": "Sam, Bucky e Zemo vão lá atrás do soro e encontram Sharon Carter."
      }
    },
    {
      "id": "escolax",
      "type": "l",
      "group": "Na Terra",
      "name": "Escola Xavier",
      "description": "A mansão dos X-Men.",
      "profile": [
        "Internato no interior do estado de Nova York, na casa da família de Charles Xavier. Oficialmente, uma escola para jovens superdotados. Abriga crianças mutantes, e no subsolo ficam o hangar dos X-Men e a máquina Cérebro. Fica no universo da Fox."
      ],
      "now": "Na Terra-10005.",
      "inDoomsday": false,
      "appearances": {
        "xmen1": "Acolhe Wolverine e Vampira.",
        "xmen2": "É invadida à noite pelas tropas de Stryker, que levam alunos."
      }
    },
    {
      "id": "asgard",
      "type": "l",
      "group": "No espaço",
      "name": "Asgard e Nova Asgard",
      "description": "O reino de Thor.",
      "profile": [
        "Mundo plano flutuando no espaço, ligado a outros oito reinos por uma ponte de energia, a Bifrost. Seus habitantes vivem milhares de anos e foram tomados por deuses pelos vikings.",
        "É destruído em Ragnarok, por escolha de Thor, para derrotar Hela. Thanos mata metade dos sobreviventes na nave. O que restou se instala num vilarejo de pesca na Noruega, Nova Asgard, que vira ponto turístico."
      ],
      "now": "Nova Asgard, na Noruega, governada por Valquíria.",
      "inDoomsday": false,
      "appearances": {
        "thor": "Apresentada: o palácio, o cofre, a ponte Bifrost, que Thor destrói.",
        "thor2": "Atacada pelos Elfos Negros. A rainha morre.",
        "ragnarok": "Tomada por Hela e destruída por Surtur, por decisão de Thor. O povo parte numa nave.",
        "ultimato": "O povo vive em Nova Asgard, na Noruega. A antiga é visitada em 2013.",
        "thor4": "Nova Asgard, ponto turístico, é atacada por Gorr.",
        "ving2": "Thor volta para lá para investigar as Joias.",
        "loki1": "Uma ilusão da cidade é erguida no Vazio para distrair Alioth."
      }
    },
    {
      "id": "xandar",
      "type": "l",
      "group": "No espaço",
      "name": "Xandar",
      "description": "O planeta que guardava a Joia do Poder.",
      "profile": [
        "Capital de um império pacífico, protegida por uma força policial chamada Tropa Nova. Os Guardiões a salvam de Ronan e deixam ali a Joia do Poder. Thanos dizima o planeta para pegá-la, fora de cena, antes de Guerra Infinita começar."
      ],
      "now": "Dizimado em 2018.",
      "inDoomsday": false,
      "appearances": {
        "gg1": "Capital de um império pacífico. Ronan tenta destruí-la, e a Joia do Poder fica sob sua guarda.",
        "ginfinita": "Thor conta que Thanos a dizimou uma semana antes para pegar a Joia."
      }
    },
    {
      "id": "luganenhum",
      "type": "l",
      "group": "No espaço",
      "name": "Luganenhum",
      "description": "A cabeça de um Celestial morto.",
      "profile": [
        "Colônia de mineração instalada dentro do crânio decepado de um Celestial, flutuando no espaço. Era a sede do Colecionador, que guardava a Joia da Realidade. Os Guardiões compram o lugar e o transformam em lar."
      ],
      "now": "Sede dos Guardiões, sob o comando de Nebulosa.",
      "inDoomsday": false,
      "appearances": {
        "gg1": "Os Guardiões levam o orbe ao Colecionador e descobrem o que ele guarda.",
        "ginfinita": "Thanos já tomou a Joia quando os Guardiões chegam e leva Gamora.",
        "gg3": "Atacada por Adam. No fim, encosta na nave do vilão para receber os resgatados.",
        "thor2": "Asgard entrega ali a Joia da Realidade ao Colecionador.",
        "ggnatal": "Agora pertence aos Guardiões."
      }
    },
    {
      "id": "tita",
      "type": "l",
      "group": "No espaço",
      "name": "Titã",
      "description": "O planeta morto de Thanos.",
      "profile": [
        "Mundo natal de Thanos, hoje um deserto de ruínas com a gravidade desregulada. Segundo ele, morreu por excesso de população, e é a prova de sua teoria. É onde Stark, Strange, Peter Parker e os Guardiões quase o derrotam."
      ],
      "now": "Desabitado.",
      "inDoomsday": false,
      "appearances": {
        "ginfinita": "Stark, Strange, Peter e os Guardiões emboscam Thanos e quase tiram a manopla. Quem estava lá vira pó, menos Stark e Nebulosa."
      }
    },
    {
      "id": "vormir",
      "type": "l",
      "group": "No espaço",
      "name": "Vormir",
      "description": "O planeta da Joia da Alma.",
      "profile": [
        "Mundo deserto, em eterno crepúsculo, com uma única montanha. No alto há um penhasco, e embaixo, um altar. A Joia da Alma só se entrega a quem atirar dali alguém que ama. O guardião é o Caveira Vermelha, preso lá desde 1945."
      ],
      "now": "Sem a Joia.",
      "inDoomsday": false,
      "appearances": {
        "ginfinita": "Thanos descobre o preço da Joia da Alma e joga Gamora do penhasco.",
        "ultimato": "Em 2014, Natasha e Clint disputam quem vai morrer. Ela cai."
      }
    },
    {
      "id": "sakaar",
      "type": "l",
      "group": "No espaço",
      "name": "Sakaar",
      "description": "O lixão do universo.",
      "profile": [
        "Planeta cercado de portais por onde cai tudo que se perde no espaço. É governado pelo Grão-Mestre, que mantém a população entretida com lutas de gladiadores. O Hulk foi campeão por dois anos. É de lá que Banner volta com o filho, Skaar."
      ],
      "now": "Sem aparições recentes.",
      "inDoomsday": false,
      "appearances": {
        "ragnarok": "Thor é vendido como gladiador, luta com o Hulk e foge durante uma revolta.",
        "mulherhulk": "Banner vai para lá numa nave e volta com o filho."
      }
    },
    {
      "id": "nidavellir",
      "type": "l",
      "group": "No espaço",
      "name": "Nidavellir",
      "description": "A forja dos anões.",
      "profile": [
        "Anel de metal em volta de uma estrela de nêutrons, onde os anões forjam as armas de Asgard. Fizeram o Mjolnir. Thanos os obrigou a forjar a Manopla do Infinito e depois matou todos menos o rei, Eitri. Thor reacende a estrela para forjar o Rompe-Tormentas."
      ],
      "now": "Quase desabitada.",
      "inDoomsday": false,
      "appearances": {
        "ginfinita": "Thor encontra a forja apagada e o rei dos anões sozinho. Reacende a estrela e sai com o machado."
      }
    },
    {
      "id": "quantico",
      "type": "l",
      "group": "Outros universos e dimensões",
      "name": "Reino Quântico",
      "description": "O universo dentro do átomo.",
      "profile": [
        "Dimensão alcançada quando alguém encolhe além do tamanho de um átomo. Por muito tempo é só um risco: quem entra não volta. Janet van Dyne passa trinta anos lá.",
        "O tempo corre de outro jeito. Scott Lang fica cinco horas e, fora, passam cinco anos. Stark usa essa propriedade para navegar o tempo. Quantumania mostra que, mais fundo, existem cidades, povos e um império fundado por Kang."
      ],
      "now": "Livre de Kang.",
      "inDoomsday": false,
      "appearances": {
        "hformiga": "Scott encolhe até lá para vencer Cross e, contra o previsto, volta.",
        "hformiga2": "Pym entra e traz Janet. Scott fica preso lá na hora do estalo.",
        "ultimato": "Vira o túnel pelo qual os Vingadores viajam no tempo.",
        "quantumania": "Mostra-se que há povos e cidades lá dentro, sob o domínio de Kang."
      }
    },
    {
      "id": "vazio",
      "type": "l",
      "group": "Outros universos e dimensões",
      "name": "O Vazio",
      "description": "O depósito do que foi apagado.",
      "profile": [
        "Lugar no fim do tempo para onde vai tudo que a AVT elimina: pessoas, prédios, navios, ramificações inteiras. Uma nuvem viva, Alioth, devora o que chega. Quem escapa dela vive entre destroços.",
        "Deadpool & Wolverine usa o Vazio como cemitério de franquias: é onde estão os heróis de filmes cancelados ou esquecidos."
      ],
      "now": "Sem Cassandra Nova.",
      "inDoomsday": false,
      "appearances": {
        "loki1": "Loki cai lá ao ser eliminado, encontra outros Lokis e atravessa a nuvem Alioth.",
        "deadpool": "Dominado por Cassandra Nova. Abriga heróis de filmes esquecidos.",
        "loki2": "Renslayer acorda lá na última cena."
      }
    },
    {
      "id": "talo",
      "type": "l",
      "group": "Outros universos e dimensões",
      "name": "Ta Lo",
      "description": "A aldeia entre dimensões.",
      "profile": [
        "Vila escondida numa dimensão à parte, alcançada por uma floresta que se move, na China. É habitada por criaturas da mitologia chinesa e guarda o portão que prende um devorador de almas. Era a terra da mãe de Shang-Chi."
      ],
      "now": "Protegida.",
      "inDoomsday": false,
      "appearances": {
        "shangchi": "Guarda o portão que prende o Habitante das Trevas. É atacada por Wenwu e defendida pelos filhos dele."
      }
    },
    {
      "id": "t616",
      "type": "l",
      "group": "Outros universos e dimensões",
      "name": "Terra-616",
      "description": "O universo principal do MCU.",
      "profile": [
        "É onde quase tudo neste guia acontece. O número vem dos quadrinhos e é dito em Multiverso da Loucura. A AVT a chamava de Linha do Tempo Sagrada."
      ],
      "now": "Recebeu o Quarteto Fantástico.",
      "inDoomsday": false,
      "appearances": {
        "estranho2": "A Christine da Terra-838 confirma o número.",
        "aranha2": "Mysterio usa o número pela primeira vez, numa mentira.",
        "deadpool": "É a linha que a AVT oferece a Wade.",
        "thunder": "Recebe a nave do Quarteto Fantástico."
      }
    },
    {
      "id": "t838",
      "type": "l",
      "group": "Outros universos e dimensões",
      "name": "Terra-838",
      "description": "O universo dos Illuminati.",
      "profile": [
        "Universo vizinho, mais limpo e avançado. Lá o Doutor Estranho usou o Darkhold na guerra contra Thanos, provocou uma incursão e foi executado em segredo pelos colegas, que depois venceram Thanos sem ele. É protegido pelos Illuminati. Monica Rambeau talvez esteja num universo parecido, onde a mãe dela é a Capitã Marvel; o filme não dá o número."
      ],
      "now": "Sem seus protetores.",
      "inDoomsday": false,
      "appearances": {
        "estranho2": "Strange e America caem lá. O mundo perde os Illuminati para Wanda."
      }
    },
    {
      "id": "t828",
      "type": "l",
      "group": "Outros universos e dimensões",
      "name": "Terra-828",
      "description": "O mundo do Quarteto Fantástico.",
      "profile": [
        "Universo em que a década de 1960 já tem carros voadores e robôs domésticos, graças às invenções de Reed Richards. O Quarteto é a única equipe de heróis e mora no Edifício Baxter, em Nova York. O número homenageia a data de nascimento de Jack Kirby, cocriador da equipe: 28 de agosto."
      ],
      "now": "O Quarteto saiu de lá. Segundo um trailer de Doomsday, é também o mundo de origem de Victor von Doom.",
      "inDoomsday": false,
      "appearances": {
        "quarteto": "O filme inteiro se passa lá, em 1964."
      }
    },
    {
      "id": "t10005",
      "type": "l",
      "group": "Outros universos e dimensões",
      "name": "Terra-10005",
      "description": "O universo dos X-Men da Fox.",
      "profile": [
        "É o nome que Deadpool & Wolverine dá ao mundo dos filmes de X-Men feitos pela Fox entre 2000 e 2020. Seu ser-âncora era Logan, que morreu em 2029. Sem ele, o universo começou a se apagar, e a AVT quis apressar o processo. Wade Wilson e outro Wolverine o salvam."
      ],
      "now": "Salvo. Lar de Deadpool e de um novo Wolverine.",
      "inDoomsday": false,
      "appearances": {
        "deadpool": "Recebe número, é ameaçada pela AVT e salva por Wade e Logan.",
        "xmen1": "Onde se passa o filme.",
        "xmen2": "Onde se passa o filme."
      }
    },
    {
      "id": "latveria",
      "type": "l",
      "group": "Outros universos e dimensões",
      "name": "Latvéria",
      "description": "O país do Doutor Destino.",
      "profile": [
        "Nos quadrinhos, pequeno reino montanhoso do leste europeu, governado por Victor von Doom. É uma ditadura sem crime nem fome, e isso é parte do argumento de Destino de que o mundo ficaria melhor sob seu comando.",
        "No MCU só foi sugerida. Em Primeiros Passos, quando Sue Storm reúne os países da Terra-828, o lugar reservado à Latvéria está vazio. Doomsday deve mostrá-la: a produção confirmou personagens descritas como bruxas latverianas."
      ],
      "now": "Ainda não mostrada.",
      "inDoomsday": false,
      "appearances": {
        "quarteto": "O assento do país aparece vazio.",
        "doomsday": "Deve aparecer; há bruxas latverianas no elenco."
      }
    },
    {
      "id": "joias",
      "type": "o",
      "group": "Joias do Infinito",
      "name": "As seis Joias, em conjunto",
      "description": "O que são e de onde vieram.",
      "profile": [
        "Antes de o universo existir havia seis singularidades. Com a explosão que criou tudo, elas se condensaram em seis pedras, cada uma governando um aspecto da existência: Espaço, Mente, Realidade, Poder, Tempo e Alma. Juntas, permitem fazer qualquer coisa com um pensamento.",
        "Nenhuma pode ser segurada sem proteção por um ser comum. Por isso quase todas aparecem dentro de um recipiente: um cubo, um cetro, um orbe, um colar. Para usar as seis ao mesmo tempo é preciso uma manopla que as canalize, e mesmo assim a descarga, semelhante a radiação gama, queima quem a usa.",
        "Houve quatro usos das seis juntas. Thanos, em 2018, apaga metade da vida. Thanos de novo, pouco depois, usa as Joias para destruí-las, o que quase o mata. Banner, em 2023, com Joias trazidas do passado, devolve os desaparecidos. Stark, na mesma tarde, apaga Thanos e seu exército, e morre.",
        "As Joias valem dentro do universo a que pertencem. Na AVT, que fica fora do tempo, são objetos inertes guardados em gavetas. É o sinal de que a Saga do Multiverso joga com forças maiores."
      ],
      "now": "Destruídas na linha principal em 2018. As usadas em Ultimato foram devolvidas ao passado por Steve Rogers.",
      "inDoomsday": false,
      "facts": [
        {
          "label": "Ordem em que apareceram",
          "value": "Espaço (2011), Mente (2012), Realidade (2013), Poder (2014), Tempo (2016), Alma (2018)"
        },
        {
          "label": "Recipiente para usar as seis",
          "value": "Manopla do Infinito, forjada em Nidavellir; em Ultimato, uma manopla feita por Stark"
        }
      ],
      "appearances": {
        "ving2": "Thor tem uma visão das Joias e percebe que alguém as está reunindo.",
        "gg1": "O Colecionador explica que são restos de singularidades anteriores ao universo.",
        "ginfinita": "Wong e Strange explicam o que cada uma governa. Thanos reúne as seis e as usa.",
        "ultimato": "Thanos as destrói. Os Vingadores as buscam no passado, usam duas vezes e as devolvem.",
        "loki1": "Na AVT não funcionam e são usadas como peso de papel."
      }
    },
    {
      "id": "espaco",
      "type": "o",
      "group": "Joias do Infinito",
      "name": "Joia do Espaço",
      "description": "A azul. Estava no Tesseract.",
      "profile": [
        "Dá acesso a qualquer ponto do universo. Quem a controla abre portais e se transporta instantaneamente, sozinho ou com exércitos. É também uma fonte de energia praticamente infinita, e é assim que os humanos a tratam por décadas, sem saber o que têm.",
        "É a Joia com a história mais longa na Terra. Odin a deixou escondida na Noruega. A Hidra a encontra em 1942 e a usa para fabricar armas. O cubo leva o Caveira Vermelha embora, cai no oceano com o avião de Steve, é resgatada por Howard Stark e fica com a S.H.I.E.L.D. Nos anos 1980, um motor experimental movido por ela dá os poderes a Carol Danvers. Em 2012 Loki a rouba para abrir o portal sobre Nova York. Thor a leva para o cofre de Asgard, onde é usada para refazer a ponte Bifrost. Loki a tira de lá antes de o planeta explodir."
      ],
      "now": "Destruída por Thanos em 2018. A versão de 2012 foi levada pelo Loki que fugiu; a de 1970, devolvida por Steve.",
      "inDoomsday": false,
      "facts": [
        {
          "label": "Cor",
          "value": "Azul"
        },
        {
          "label": "Governa",
          "value": "O espaço: distância e lugar"
        },
        {
          "label": "O que faz",
          "value": "Abre portais e transporta para qualquer ponto; fornece energia ilimitada"
        },
        {
          "label": "Recipiente",
          "value": "Tesseract, um cubo"
        },
        {
          "label": "Quem usou",
          "value": "Caveira Vermelha, Loki, Thanos; indiretamente, Carol Danvers"
        }
      ],
      "appearances": {
        "cap1": "A Hidra faz armas com o Tesseract.",
        "ving1": "Loki abre o portal sobre Nova York.",
        "ragnarok": "Loki a tira do cofre de Asgard.",
        "cmarvel": "Origem dos poderes de Carol.",
        "ginfinita": "Thanos esmaga o cubo e fica com a Joia.",
        "ultimato": "Buscada em 2012, perdida, e recuperada em 1970.",
        "thor": "Na cena dos créditos, Fury mostra o cubo a Selvig.",
        "loki1": "O Tesseract de Loki é confiscado pela AVT, onde não funciona."
      }
    },
    {
      "id": "mente",
      "type": "o",
      "group": "Joias do Infinito",
      "name": "Joia da Mente",
      "description": "A amarela. Estava no cetro de Loki e depois na testa do Visão.",
      "profile": [
        "Governa o pensamento. Permite dominar a vontade de outra pessoa, ler e projetar ideias e ampliar a inteligência de quem a usa. Contém ela mesma algo parecido com uma mente, e é disso que Stark tira a base de Ultron.",
        "Thanos a entrega a Loki dentro de um cetro para a invasão da Terra, único caso em que ele abre mão de uma Joia. O cetro fica com a S.H.I.E.L.D., ou seja, com a Hidra, que o usa em experimentos em Sokovia: é a exposição a ele que desperta os poderes de Wanda e de Pietro Maximoff. Os Vingadores o recuperam, Ultron nasce dele, e a Joia acaba na testa do Visão, a quem dá consciência.",
        "É a última que Thanos pega, arrancando-a de Visão."
      ],
      "now": "Destruída por Thanos em 2018, depois de já ter sido destruída por Wanda e restaurada com a Joia do Tempo.",
      "inDoomsday": false,
      "facts": [
        {
          "label": "Cor",
          "value": "Amarela (o cetro brilha azul por causa do invólucro)"
        },
        {
          "label": "Governa",
          "value": "A mente: vontade, pensamento, consciência"
        },
        {
          "label": "O que faz",
          "value": "Controla pessoas, amplia inteligência, cria consciência artificial, desperta poderes latentes"
        },
        {
          "label": "Recipiente",
          "value": "Cetro de Loki; depois, a testa do Visão"
        },
        {
          "label": "Quem usou",
          "value": "Loki, a Hidra, Ultron, Visão, Thanos"
        }
      ],
      "appearances": {
        "ving1": "No cetro, controla Clint Barton e outros.",
        "cap2": "Na cena dos créditos, o cetro está com a Hidra.",
        "ving2": "Dá origem a Ultron e ao Visão.",
        "ginfinita": "Wanda a destrói; Thanos desfaz e a arranca.",
        "ultimato": "Buscada em 2012.",
        "wandavision": "Revê-se como ela despertou os poderes de Wanda.",
        "gcivil": "Na testa do Visão. Ele admite que não a entende por completo."
      }
    },
    {
      "id": "realidade",
      "type": "o",
      "group": "Joias do Infinito",
      "name": "Joia da Realidade",
      "description": "A vermelha. Era o Éter.",
      "profile": [
        "Altera a própria matéria: transforma uma coisa em outra, cria ilusões que podem ser tocadas, desfaz o que existe. Thanos a usa para transformar disparos em bolhas de sabão e para encenar um lugar inteiro que já tinha sido destruído.",
        "É a única que não aparece como pedra. Tem a forma de um líquido vermelho, o Éter, que se hospeda num corpo vivo e o consome. Os Elfos Negros quiseram usá-la para apagar a luz do universo. O avô de Thor a escondeu, e ela ficou guardada por milênios até Jane Foster encontrá-la por acaso. Depois da crise, Asgard, que já guardava o Tesseract, julga imprudente manter duas Joias no mesmo lugar e a entrega ao Colecionador, em Luganenhum."
      ],
      "now": "Destruída por Thanos em 2018. A versão de 2013 foi tirada de Jane Foster e devolvida.",
      "inDoomsday": false,
      "facts": [
        {
          "label": "Cor",
          "value": "Vermelha"
        },
        {
          "label": "Governa",
          "value": "A realidade: o que é verdadeiro e o que as coisas são"
        },
        {
          "label": "O que faz",
          "value": "Transforma matéria, cria ilusões sólidas, reescreve o que existe em volta"
        },
        {
          "label": "Recipiente",
          "value": "Nenhum; é um fluido, o Éter"
        },
        {
          "label": "Quem usou",
          "value": "Malekith, dos Elfos Negros; Thanos"
        }
      ],
      "appearances": {
        "thor2": "O Éter ocupa o corpo de Jane Foster.",
        "ginfinita": "Thanos a toma do Colecionador.",
        "ultimato": "Buscada em Asgard, em 2013.",
        "gg1": "Citada pelo Colecionador, que já a guarda."
      }
    },
    {
      "id": "poder",
      "type": "o",
      "group": "Joias do Infinito",
      "name": "Joia do Poder",
      "description": "A roxa. Estava dentro do orbe.",
      "profile": [
        "É força bruta. Aumenta sem limite a capacidade de destruição de quem a segura e pode arrasar a superfície de um planeta com um toque. É também a mais difícil de segurar: desintegra em segundos qualquer ser que não seja extraordinariamente resistente. Os Guardiões só sobrevivem a ela dividindo a carga, de mãos dadas, e porque Peter Quill é meio Celestial.",
        "Estava num templo em ruínas no planeta Morag, dentro de um orbe de metal. Quill a rouba sem saber o que é. Ronan a encaixa no martelo para destruir Xandar. Derrotado, a Joia fica sob guarda da Tropa Nova. É a primeira que Thanos toma, dizimando Xandar para isso."
      ],
      "now": "Destruída por Thanos em 2018. A versão de 2014 foi devolvida a Morag.",
      "inDoomsday": false,
      "facts": [
        {
          "label": "Cor",
          "value": "Roxa"
        },
        {
          "label": "Governa",
          "value": "O poder: energia e destruição"
        },
        {
          "label": "O que faz",
          "value": "Amplia a força do portador; destrói cidades e planetas"
        },
        {
          "label": "Recipiente",
          "value": "Orbe; depois o martelo de Ronan"
        },
        {
          "label": "Quem usou",
          "value": "Ronan, os Guardiões juntos, Thanos"
        }
      ],
      "appearances": {
        "gg1": "Roubada por Quill; usada por Ronan; entregue a Xandar.",
        "ginfinita": "Thanos já a tem na primeira cena.",
        "ultimato": "Buscada em Morag, em 2014."
      }
    },
    {
      "id": "tempo",
      "type": "o",
      "group": "Joias do Infinito",
      "name": "Joia do Tempo",
      "description": "A verde. Estava no Olho de Agamotto.",
      "profile": [
        "Controla o fluxo do tempo num objeto, numa pessoa ou num lugar: adiantar, voltar, repetir. Permite também olhar futuros possíveis. Strange a usa para prender uma entidade num laço de tempo até ela desistir, e, mais tarde, para examinar 14.000.605 desfechos da guerra contra Thanos.",
        "Foi encontrada por Agamotto, o primeiro Mago Supremo, que fez para ela um amuleto, o Olho de Agamotto. Os Mestres das Artes Místicas a guardaram por séculos, e é a razão de existir um Mago Supremo. A Anciã explica a Banner, em Ultimato, que tirar uma Joia do seu tempo cria uma realidade ramificada, e só a entrega porque ele promete devolver.",
        "Strange jura protegê-la acima de qualquer vida e depois a entrega a Thanos em troca da de Stark, porque viu que só assim haveria vitória. Thanos a usa para desfazer a destruição da Joia da Mente."
      ],
      "now": "Destruída por Thanos em 2018. A versão de 2012 foi devolvida à Anciã.",
      "inDoomsday": false,
      "facts": [
        {
          "label": "Cor",
          "value": "Verde"
        },
        {
          "label": "Governa",
          "value": "O tempo: sequência, causa e efeito"
        },
        {
          "label": "O que faz",
          "value": "Volta, adianta e repete o tempo; mostra futuros possíveis"
        },
        {
          "label": "Recipiente",
          "value": "Olho de Agamotto, um amuleto"
        },
        {
          "label": "Quem usou",
          "value": "A Anciã, Strange, Thanos"
        }
      ],
      "appearances": {
        "estranho": "Strange a usa contra Dormammu.",
        "ragnarok": "No pescoço de Strange.",
        "ginfinita": "Strange vê os futuros e a entrega a Thanos.",
        "ultimato": "A Anciã a empresta a Banner, em 2012."
      }
    },
    {
      "id": "alma",
      "type": "o",
      "group": "Joias do Infinito",
      "name": "Joia da Alma",
      "description": "A laranja. Estava em Vormir.",
      "profile": [
        "É a menos explicada. O MCU diz que ela tem certa sabedoria própria e que exige um preço: só se entrega a quem sacrificar alguém que ama, uma alma por uma alma. A troca não pode ser desfeita, e é por isso que Gamora e Natasha não voltam com os outros.",
        "Quanto ao que ela faz, os filmes mostram pouco. Depois de cada estalo, quem usou as Joias se vê por instantes num lugar alaranjado, diante de alguém que perdeu. O sentido geral é que ela governa a vida e a essência dos seres.",
        "É a única sem recipiente e sem dono anterior. O guardião, o Caveira Vermelha, só indica o caminho."
      ],
      "now": "Destruída por Thanos em 2018. A versão de 2014 foi devolvida a Vormir; não se mostra o reencontro de Steve com o Caveira Vermelha.",
      "inDoomsday": false,
      "facts": [
        {
          "label": "Cor",
          "value": "Laranja"
        },
        {
          "label": "Governa",
          "value": "A alma: a vida e a essência de cada ser"
        },
        {
          "label": "O que faz",
          "value": "Pouco mostrado; percebe e toca as almas, e cobra uma vida para ser obtida"
        },
        {
          "label": "Recipiente",
          "value": "Nenhum; fica num altar em Vormir"
        },
        {
          "label": "Quem usou",
          "value": "Thanos"
        }
      ],
      "appearances": {
        "ginfinita": "Thanos sacrifica Gamora.",
        "ultimato": "Natasha se sacrifica; Clint leva a Joia."
      }
    },
    {
      "id": "mjolnir",
      "type": "o",
      "group": "Armas e metais",
      "name": "Mjolnir e Rompe-Tormentas",
      "description": "As armas de Thor.",
      "profile": [
        "Mjolnir é o martelo forjado em Nidavellir, com um encantamento de Odin: só quem for digno consegue erguê-lo. Canaliza raios e volta à mão de quem o lança. Além de Thor, ergueram-no Visão, Steve Rogers e Jane Foster. Hela o destrói com uma mão.",
        "Rompe-Tormentas é o machado que Thor forja para matar Thanos. É mais forte que o martelo, não exige dignidade e abre a Bifrost, a ponte que leva a qualquer lugar. O cabo é um braço de Groot."
      ],
      "now": "O Mjolnir, refeito, ficou com Thor. O Rompe-Tormentas passou para Amor, a filha adotiva.",
      "inDoomsday": false,
      "appearances": {
        "thor": "Cai na Terra com Thor e só volta a ele quando se dispõe a morrer pelos outros.",
        "ving2": "Ninguém na festa consegue erguê-lo. O Visão o ergue sem esforço.",
        "ragnarok": "Hela o esmaga com uma mão. Thor descobre que o poder não vinha dele.",
        "ginfinita": "Thor forja em Nidavellir um substituto mais forte, o machado Rompe-Tormentas.",
        "ultimato": "Thor o traz de 2013. Steve o ergue na batalha e o devolve depois.",
        "thor4": "Os pedaços se refazem para Jane Foster. O machado é usado por Gorr como chave."
      }
    },
    {
      "id": "vibranium",
      "type": "o",
      "group": "Armas e metais",
      "name": "Vibranium e o escudo",
      "description": "O metal de Wakanda.",
      "profile": [
        "Metal vindo de um meteorito, capaz de absorver e devolver energia de impacto. Quase todo o estoque do mundo está em Wakanda, e uma segunda jazida, no fundo do mar, pertence a Talokan.",
        "O escudo do Capitão América foi feito por Howard Stark com o pouco vibranium que os Estados Unidos tinham. É símbolo e é arma. Passa de Steve para Sam, é tomado por John Walker e volta a Sam. O corpo do Visão, o braço de Bucky e os trajes do Pantera também são de vibranium."
      ],
      "now": "O escudo está com Sam Wilson.",
      "inDoomsday": false,
      "appearances": {
        "cap1": "Howard Stark faz o escudo com todo o metal que os americanos tinham.",
        "ving2": "Ultron compra o estoque de Klaue para fazer um corpo e a máquina de Sokovia.",
        "pantera": "Mostra-se a origem, num meteorito, e tudo o que Wakanda fez com ele.",
        "ultimato": "Thanos parte o escudo. O Steve idoso entrega a Sam um escudo inteiro.",
        "falcao": "O escudo passa do museu a Walker e de volta a Sam.",
        "wakanda": "A disputa pelo metal leva à descoberta de Talokan.",
        "gcivil": "O traje de T'Challa. Steve larga o escudo na Sibéria.",
        "cap4": "Sam usa asas e traje feitos em Wakanda."
      }
    },
    {
      "id": "adamantium",
      "type": "o",
      "group": "Armas e metais",
      "name": "Adamantium",
      "description": "O metal de Wolverine, agora no MCU.",
      "profile": [
        "Nos filmes dos X-Men é a liga indestrutível que reveste os ossos e as garras de Wolverine. No MCU aparece em 2025 como um elemento natural encontrado na Ilha Celestial, mais resistente que o vibranium e sem dono, o que provoca uma corrida entre países.",
        "É a primeira peça do mundo dos X-Men a existir fisicamente na Terra principal."
      ],
      "now": "Explorado sob tratado internacional.",
      "inDoomsday": false,
      "appearances": {
        "xmen2": "Mostra-se o laboratório onde o metal foi implantado nele.",
        "cap4": "Descoberto na Ilha Celestial. Vira o centro de uma crise entre potências.",
        "deadpool": "Wade usa o esqueleto do Logan morto como arma.",
        "xmen1": "As garras e o esqueleto de Wolverine, sem explicação ainda."
      }
    },
    {
      "id": "soro",
      "type": "o",
      "group": "Tecnologia e magia",
      "name": "Soro do supersoldado",
      "description": "A fórmula que criou o Capitão América.",
      "profile": [
        "Criado pelo cientista Abraham Erskine nos anos 1940. Leva força, velocidade, resistência e cura ao limite do corpo humano, e amplia também o caráter: o bom fica melhor, o ruim fica pior. Erskine é assassinado logo depois de aplicá-lo em Steve, e a fórmula se perde.",
        "Quase todo mundo tenta recriá-la. A tentativa de Banner cria o Hulk. A Hidra faz o Soldado Invernal. O governo americano testa em soldados negros sem consentimento, entre eles Isaiah Bradley. Os soviéticos fazem o Guardião Vermelho. John Walker toma uma dose roubada. O projeto Sentinela, de Valentina, é o capítulo mais recente."
      ],
      "now": "Não existe mais fórmula conhecida.",
      "inDoomsday": false,
      "appearances": {
        "cap1": "Erskine o aplica em Steve e é morto. A fórmula se perde.",
        "hulk": "A tentativa de recriá-lo com radiação gama cria o Hulk e o Abominável.",
        "gcivil": "Em 1991, o Soldado Invernal rouba cinco doses, que criam outros soldados.",
        "falcao": "Uma versão nova circula em Madripoor. Zemo destrói quase tudo, e Walker toma a última dose.",
        "thunder": "O Projeto Sentinela tenta ir além do soro e mata todos os voluntários, menos Bob.",
        "viuva": "A versão soviética deu origem ao Guardião Vermelho."
      }
    },
    {
      "id": "pym",
      "type": "o",
      "group": "Tecnologia e magia",
      "name": "Partículas Pym",
      "description": "A tecnologia de encolher.",
      "profile": [
        "Partículas descobertas por Hank Pym que reduzem ou aumentam a distância entre átomos. Encolhem uma pessoa ao tamanho de uma formiga, mantendo a força, ou a fazem crescer vinte metros. Levadas ao extremo, dão acesso ao Reino Quântico.",
        "Em Ultimato são o combustível da viagem no tempo: cada viajante precisa de uma dose para ir e uma para voltar, e o estoque é contado."
      ],
      "now": "Controladas pela família Pym.",
      "inDoomsday": false,
      "appearances": {
        "hformiga": "Pym as esconde por décadas. Cross as recria.",
        "ultimato": "Cada viagem no tempo gasta uma dose. O estoque é reposto em 1970.",
        "gcivil": "Scott as usa ao contrário e vira gigante.",
        "hformiga2": "Alimentam o túnel quântico e encolhem o laboratório.",
        "quantumania": "Janet as usou para inutilizar o núcleo de Kang."
      }
    },
    {
      "id": "darkhold",
      "type": "o",
      "group": "Tecnologia e magia",
      "name": "Darkhold",
      "description": "O livro dos condenados.",
      "profile": [
        "Livro de magia negra que dá ao leitor o que ele mais quer e cobra a sanidade em troca. Ensina, entre outras coisas, a ocupar o corpo de uma versão sua em outro universo. Agatha Harkness o tinha, e Wanda o toma no fim de WandaVision.",
        "Multiverso da Loucura revela que o livro é cópia de inscrições gravadas num templo no monte Wundagore, que tem um trono à espera da Feiticeira Escarlate. Wanda destrói o livro em todos os universos e derruba o templo."
      ],
      "now": "Destruído em todos os universos.",
      "inDoomsday": false,
      "appearances": {
        "wandavision": "Está com Agatha, que lê nele a profecia da Feiticeira Escarlate. Wanda fica com o livro.",
        "estranho2": "Corrompe Wanda e ensina a ocupar corpos em outros universos. Ela o destrói em todos eles."
      }
    },
    {
      "id": "multiverso",
      "type": "c",
      "group": "Multiverso e tempo",
      "name": "Multiverso",
      "description": "Muitos universos existindo ao mesmo tempo.",
      "profile": [
        "A ideia é que este universo é um entre infinitos. Cada um tem a própria história: num, os heróis são outros; noutro, os mesmos fizeram escolhas diferentes; noutro, os anos 1960 já tinham carros voadores.",
        "No MCU, o multiverso existiu, entrou em guerra e foi suprimido por Aquele Que Permanece, que manteve um único fio por tempo indeterminado. Voltou a existir quando ele morreu. Hoje é mantido vivo por Loki.",
        "Os universos têm número. A Terra principal é a 616. A 838 é a dos Illuminati. A 828 é a do Quarteto Fantástico. A 10005 é a dos X-Men da Fox e de Deadpool. Passa-se de um para outro por magia, pelo poder de America Chavez, por aparelhos da AVT ou, como o Quarteto, numa nave."
      ],
      "now": "Em colapso, segundo a premissa de Doomsday.",
      "inDoomsday": false,
      "appearances": {
        "loki1": "Abre-se de fato, quando Sylvie mata Aquele Que Permanece.",
        "whatif": "Cada episódio visita um universo diferente.",
        "aranha3": "Um feitiço traz vilões e dois Homens-Aranha de outros universos.",
        "estranho2": "Strange e America atravessam vários. Surge a ideia de incursão.",
        "loki2": "Loki passa a manter todas as ramificações vivas.",
        "deadpool": "Mostra-se o Vazio e dá-se número ao universo dos X-Men.",
        "quarteto": "Passa-se inteiro em outra Terra.",
        "doomsday": "Segundo a premissa, está em colapso.",
        "quantumania": "Kang foi exilado do multiverso pelas próprias variantes.",
        "marvels": "Um rasgo liga este universo a outro, onde Monica fica presa.",
        "aranha2": "Mysterio diz vir de outra Terra. É mentira, mas a ideia fica."
      }
    },
    {
      "id": "variantes",
      "type": "c",
      "group": "Multiverso e tempo",
      "name": "Variantes",
      "description": "Versões da mesma pessoa.",
      "profile": [
        "Variante é a versão de alguém em outro universo ou em outra ramificação do tempo. Pode ser quase idêntica, pode ter outro rosto, outro gênero, outra espécie: a série Loki mostra um Loki jacaré.",
        "É o recurso que permite ao MCU trazer atores de volta em papéis diferentes ou repetir personagens mortos. O Loki atual é variante do que morreu. A Gamora atual também. O Wolverine de Deadpool & Wolverine é variante do que morreu em Logan. Os três Homens-Aranha de Sem Volta para Casa são variantes entre si."
      ],
      "now": "",
      "inDoomsday": false,
      "appearances": {
        "loki1": "O termo é apresentado. Há Lokis de todo tipo.",
        "aranha3": "Três versões de Peter Parker se encontram.",
        "estranho2": "Versões de Strange, Wanda, Mordo, Xavier e Reed.",
        "deadpool": "Dezenas de Wolverines e um exército de Deadpools.",
        "ultimato": "Sem o nome ainda: o Loki de 2012, a Gamora e o Thanos de 2014.",
        "whatif": "Todos os protagonistas são variantes de personagens conhecidos.",
        "quantumania": "Milhares de versões de Kang.",
        "loki2": "Os funcionários da AVT conhecem as vidas que tinham."
      }
    },
    {
      "id": "incursoes",
      "type": "c",
      "group": "Multiverso e tempo",
      "name": "Incursões",
      "description": "Quando dois universos colidem.",
      "profile": [
        "Incursão é o que acontece quando a fronteira entre dois universos cede e um avança sobre o outro. Um deles, ou os dois, é destruído. Segundo Multiverso da Loucura, basta alguém deixar uma marca grande demais num universo que não é o seu. O Strange da Terra-838 causou uma ao usar o Darkhold e foi executado por isso.",
        "É o perigo que substitui as Joias do Infinito nesta saga: uma ameaça que nenhum herói resolve na força.",
        "Nos quadrinhos, uma série de incursões destrói universo após universo até sobrarem dois. Quando os dois últimos colidem, o Doutor Destino salva fragmentos de vários mundos e os une num planeta só, o Mundo de Batalha, onde reina. É a história Guerras Secretas. O MCU não é obrigado a segui-la, mas o último filme da saga leva esse nome."
      ],
      "now": "Segundo a premissa de Doomsday, o multiverso está em colapso e três universos estão em rota de colisão.",
      "inDoomsday": false,
      "appearances": {
        "estranho2": "Os Illuminati explicam o conceito, e Strange visita um universo destruído por uma. Clea o avisa de outra.",
        "marvels": "O buraco aberto por Dar-Benn liga dois universos e precisa ser fechado por dentro.",
        "cap4": "Sterns avisa Sam de que há outros mundos e de que eles estão a caminho.",
        "doomsday": "Tema esperado, sem confirmação oficial."
      }
    },
    {
      "id": "linha",
      "type": "c",
      "group": "Multiverso e tempo",
      "name": "Linha do Tempo Sagrada",
      "description": "O roteiro único que a AVT impunha.",
      "profile": [
        "Era o nome dado ao único encadeamento de acontecimentos permitido por Aquele Que Permanece. Qualquer desvio relevante era chamado de evento Nexus, criava uma ramificação e era apagado.",
        "Depois da morte dele, o termo perde sentido: há inúmeras ramificações, e a antiga Linha Sagrada é só mais uma, embora os filmes ainda usem o nome para a Terra principal. A imagem final de Loki é a de uma árvore, com ele no tronco."
      ],
      "now": "Substituída por uma árvore de ramificações.",
      "inDoomsday": false,
      "appearances": {
        "loki1": "A AVT a protege apagando ramificações, até Sylvie matar quem a mantinha.",
        "loki2": "O Tear que a tecia é destruído. As ramificações passam a formar uma árvore.",
        "deadpool": "A AVT usa o nome para a linha principal, a dos Vingadores."
      }
    },
    {
      "id": "ancora",
      "type": "c",
      "group": "Multiverso e tempo",
      "name": "Seres-âncora",
      "description": "A pessoa de quem um universo depende.",
      "profile": [
        "Regra introduzida em Deadpool & Wolverine. Cada universo tem um indivíduo de importância central. Quando ele morre, o universo não acaba na hora; vai se apagando ao longo de milhares de anos.",
        "O da Terra-10005 era Logan. O filme não diz quem é o da Terra principal. É uma regra nova, usada num filme só, e pode ou não voltar a importar."
      ],
      "now": "",
      "inDoomsday": false,
      "appearances": {
        "deadpool": "Paradox explica a regra: sem Logan, a Terra-10005 definha. A agência se recusa a dizer quem é a âncora da linha principal."
      }
    },
    {
      "id": "viagem",
      "type": "c",
      "group": "Multiverso e tempo",
      "name": "Viagem no tempo",
      "description": "As regras de Ultimato.",
      "profile": [
        "No MCU não se muda o próprio passado. Quem volta e altera algo cria uma ramificação, uma realidade paralela, e o presente de onde saiu continua igual. É por isso que os Vingadores não podem simplesmente matar Thanos bebê: isso não traria ninguém de volta.",
        "O que eles fazem é pegar emprestado. Buscam as Joias em momentos em que elas existiam, usam no presente e devolvem cada uma ao instante de onde saiu, para que aquelas realidades sigam normalmente.",
        "Duas pontas ficaram soltas e viraram história: o Loki de 2012, que escapa, e o Thanos de 2014, que vem ao futuro e morre aqui, levando consigo a Gamora daquele ano."
      ],
      "now": "",
      "inDoomsday": false,
      "appearances": {
        "ultimato": "Stark resolve a navegação. Banner explica que o passado não se altera, só se ramifica.",
        "loki1": "A AVT diz que a viagem dos Vingadores estava prevista. A fuga de Loki, não.",
        "hformiga2": "Janet diz que no Reino Quântico há vórtices de tempo.",
        "quantumania": "Kang domina o tempo com uma tecnologia própria."
      }
    },
    {
      "id": "blip",
      "type": "c",
      "group": "História do mundo",
      "name": "O Blip",
      "description": "Os cinco anos em que metade do universo sumiu.",
      "profile": [
        "Nome dado ao intervalo entre o estalo de Thanos, em 2018, e o de Banner, em 2023. Metade de todos os seres vivos, escolhida ao acaso, virou pó. Quem ficou viveu cinco anos de luto, com cidades vazias e governos desmontados.",
        "Banner traz todos de volta ao presente, não ao momento em que sumiram, para não apagar os cinco anos vividos. Os que voltaram têm a mesma idade e encontram casas ocupadas, cônjuges que se casaram de novo, irmãos mais novos que ficaram mais velhos.",
        "Explica muito da Fase 4: Monica volta e a mãe morreu; Yelena volta e a irmã morreu; um grupo radical quer de volta o mundo sem fronteiras daqueles anos; Clint passou o período matando."
      ],
      "now": "",
      "inDoomsday": false,
      "appearances": {
        "ginfinita": "Thanos estala os dedos, e metade dos seres vivos some.",
        "ultimato": "Mostram-se os cinco anos de luto e a volta de todos.",
        "aranha2": "O termo aparece. A escola recomeça o ano com alunos que não envelheceram.",
        "wandavision": "Monica volta num hospital em pânico e descobre que a mãe morreu.",
        "falcao": "Quem ocupou casas e fronteiras vazias é expulso quando os outros voltam.",
        "eternos": "A volta de bilhões de pessoas dá a energia que faltava para o Celestial nascer.",
        "gaviao": "Clint passou os cinco anos como Ronin. Yelena sumiu e, ao voltar, a irmã já tinha morrido.",
        "hformiga2": "Pega Hank, Janet e Hope com Scott dentro do túnel quântico.",
        "cmarvel": "Na cena dos créditos, os Vingadores contam os desaparecidos.",
        "shangchi": "Citado em cartazes de ajuda a quem voltou.",
        "wakanda": "Nakia mudou-se para o Haiti depois dele."
      }
    },
    {
      "id": "acordos",
      "type": "c",
      "group": "História do mundo",
      "name": "Acordos de Sokovia",
      "description": "A lei que partiu os Vingadores.",
      "profile": [
        "Tratado assinado por 117 países em 2016, depois da destruição de Sokovia e de um incidente em Lagos. Determina que pessoas com poderes só podem agir com autorização de um painel da ONU e devem se registrar.",
        "Stark apoia, por culpa. Steve recusa, por achar que quem decide pode estar errado ou corrompido. Quem recusa vira fugitivo. Os Acordos seguem em vigor por anos e são revogados fora de cena, como se menciona em Mulher-Hulk."
      ],
      "now": "Revogados.",
      "inDoomsday": false,
      "appearances": {
        "gcivil": "Apresentados por Ross. Stark assina, Steve recusa, e a equipe se parte.",
        "ginfinita": "Ross ainda manda prender os foragidos. Rhodes o ignora.",
        "viuva": "Natasha é procurada por violá-los.",
        "mulherhulk": "Matt Murdock menciona que foram revogados.",
        "hformiga2": "Scott cumpre prisão domiciliar por tê-los violado."
      }
    },
    {
      "id": "mutantes",
      "type": "c",
      "group": "História do mundo",
      "name": "Mutantes",
      "description": "Quem nasce com poderes.",
      "profile": [
        "Nos quadrinhos, mutantes são pessoas com um gene que desperta poderes, em geral na adolescência. Não há acidente nem experimento: nascem assim. Por isso servem de metáfora para qualquer minoria perseguida.",
        "No MCU a palavra já foi usada para Kamala Khan e Namor, e Um Novo Dia apresenta Jean Grey e a irmã, telepatas de nascença caçadas por um órgão do governo. Somando as leis contra gente com poderes que aparecem em Demolidor: Renascido e em Magnum, a Terra principal já tem o clima de perseguição que define as histórias dos X-Men. Falta uma explicação de por que eles só aparecem agora."
      ],
      "now": "Poucos casos conhecidos na Terra principal.",
      "inDoomsday": false,
      "appearances": {
        "xmen1": "O conceito, no universo da Fox: gente que nasce com poderes e é temida.",
        "msmarvel": "Bruno diz que Kamala tem uma mutação. É a primeira vez no MCU.",
        "wakanda": "Namor se descreve como mutante.",
        "aranha4": "Jean Grey e a irmã são telepatas de nascença, caçadas pelo governo.",
        "xmen2": "Um militar tenta exterminá-los.",
        "deadpool": "Wade e Logan vêm de um mundo de mutantes.",
        "marvels": "O Fera aparece num universo paralelo."
      }
    },
    {
      "id": "ronan",
      "type": "p",
      "group": "Vilões",
      "name": "Ronan",
      "description": "O Acusador, fanático Kree.",
      "profile": [
        "Oficial do império Kree que não aceita o tratado de paz com o planeta Xandar e continua a guerra por conta própria. Para isso se alia a Thanos: entrega o orbe que ele quer e recebe em troca a destruição de Xandar.",
        "Ao descobrir que o orbe guarda a Joia do Poder, fica com ela, encaixa-a no martelo e rompe com Thanos. É pulverizado pelos Guardiões, que dividem entre si a carga da Joia. Aparece mais jovem, ainda dentro do império, em Capitã Marvel."
      ],
      "now": "Morto em 2014.",
      "inDoomsday": false,
      "appearances": {
        "gg1": "Persegue o orbe para Thanos, toma a Joia do Poder para si e ataca Xandar. É morto pelos Guardiões.",
        "cmarvel": "Em 1995, comanda a esquadra Kree que vem bombardear a Terra e recua diante de Carol Danvers."
      }
    },
    {
      "id": "ego",
      "type": "p",
      "group": "Vilões",
      "name": "Ego",
      "description": "O planeta vivo, pai de Peter Quill.",
      "profile": [
        "Um Celestial: uma consciência antiquíssima que passou milhões de anos sozinha e formou em volta de si um planeta inteiro. Criou um corpo humano para visitar outros mundos e, decepcionado com o que viu, decidiu transformar tudo em extensão de si mesmo.",
        "Para isso plantou mudas em milhares de planetas e teve filhos com mulheres de várias espécies, na esperança de que um herdasse o poder necessário para ativá-las. Mandou Yondu buscar as crianças e matou todas as que não serviam. Quill foi a única que herdou o dom, e Yondu, desconfiado, nunca o entregou. Ego amou a mãe de Quill o bastante para querer ficar na Terra, e por isso mesmo a matou, pondo um tumor em sua cabeça."
      ],
      "now": "Morto. Mantis também é filha dele.",
      "inDoomsday": false,
      "appearances": {
        "gg2": "Encontra o filho, ensina a ele o poder Celestial, revela o plano e é destruído por uma bomba no próprio núcleo.",
        "ggnatal": "Citado: Mantis revela que também é filha dele."
      }
    },
    {
      "id": "gorr",
      "type": "p",
      "group": "Vilões",
      "name": "Gorr",
      "description": "O Carniceiro dos Deuses.",
      "profile": [
        "Último sobrevivente de um povo devoto, com a filha pequena, num deserto. A menina morre de sede enquanto ele reza. Em seguida ele encontra o deus a quem dedicou a vida, num oásis, zombando de fiéis como ele. Uma espada capaz de matar deuses se oferece, e ele aceita.",
        "A espada lhe dá poder sobre sombras e o consome aos poucos. Gorr tem razão no diagnóstico, já que os deuses do filme são de fato indiferentes, e erra no remédio. Diante da Eternidade, que concede um desejo, abre mão da vingança e pede a filha de volta."
      ],
      "now": "Morto. A filha, Amor, é criada por Thor.",
      "inDoomsday": false,
      "appearances": {
        "thor4": "Mata deuses, sequestra as crianças de Nova Asgard para atrair Thor e, no fim, usa o desejo para reviver a filha."
      }
    },
    {
      "id": "dormammu",
      "type": "p",
      "group": "Vilões",
      "name": "Dormammu",
      "description": "O senhor da Dimensão Negra.",
      "profile": [
        "Entidade que governa um lugar fora do tempo, onde nada envelhece nem morre, e que engole universos para ampliá-lo. Promete vida eterna a quem o serve, o que é verdade de um jeito horrível.",
        "É dele que a Anciã tirava, às escondidas, a energia que a mantinha viva. Strange o vence sem força nenhuma: leva para dentro da dimensão um laço de tempo, coisa que ali não existe, e se deixa matar repetidamente até Dormammu aceitar ir embora."
      ],
      "now": "Afastado da Terra por um trato. É para a dimensão dele que Strange e Clea vão no fim de Multiverso da Loucura.",
      "inDoomsday": false,
      "appearances": {
        "estranho": "Chamado por Kaecilius para engolir a Terra. Preso por Strange num laço de tempo, aceita partir.",
        "estranho2": "Não aparece. Strange entra na Dimensão Negra na cena dos créditos.",
        "coracao": "Citado: suspeita-se de que a capa do Capuz venha da dimensão dele."
      }
    },
    {
      "id": "abutre",
      "type": "p",
      "group": "Vilões",
      "name": "Adrian Toomes",
      "description": "O Abutre.",
      "profile": [
        "Dono de uma pequena empresa de demolição que investiu tudo no contrato de limpeza de Nova York depois da batalha de 2012 e o perdeu para um órgão criado por Tony Stark. Guardou a sucata alienígena que já tinha e passou oito anos fazendo armas com ela, sem chamar a atenção dos Vingadores.",
        "É um vilão de escala pequena e motivos compreensíveis: sustenta a família e os empregados e detesta os ricos que fazem as regras. Descobre quem é o Homem-Aranha e, mesmo preso, não o entrega, em gratidão por Peter ter salvado sua vida e a da filha."
      ],
      "now": "Preso.",
      "inDoomsday": false,
      "appearances": {
        "aranha1": "Vende armas feitas de sucata alienígena, descobre a identidade de Peter no carro a caminho do baile e é salvo por ele no fim."
      }
    },
    {
      "id": "malekith",
      "type": "p",
      "group": "Vilões",
      "name": "Malekith",
      "description": "O líder dos Elfos Negros.",
      "profile": [
        "Rei de um povo que existia antes da luz e quer o universo de volta à escuridão. Sua arma é o Éter, que só pode ser usado durante um alinhamento raro dos nove reinos. Derrotado uma vez pelo avô de Thor, hiberna por milênios até o Éter despertar no corpo de Jane Foster."
      ],
      "now": "Morto, esmagado pela própria nave.",
      "inDoomsday": false,
      "appearances": {
        "thor2": "Ataca Asgard, mata Frigga, absorve o Éter e tenta lançar a escuridão a partir de Londres."
      }
    },
    {
      "id": "killian",
      "type": "p",
      "group": "Vilões",
      "name": "Aldrich Killian",
      "description": "O homem por trás do Mandarim.",
      "profile": [
        "Pesquisador com deficiência física que Tony Stark deixou esperando num telhado numa noite de Ano-Novo. Fundou uma empresa, curou a si mesmo com o tratamento Extremis e passou a aplicá-lo em veteranos feridos. Como parte deles explodia, inventou um terrorista para assumir a culpa e lucrar dos dois lados da guerra."
      ],
      "now": "Morto por Pepper Potts.",
      "inDoomsday": false,
      "appearances": {
        "hf3": "Inventa o Mandarim, sequestra Pepper e o presidente e é morto por ela."
      }
    },
    {
      "id": "stane",
      "type": "p",
      "group": "Vilões",
      "name": "Obadiah Stane",
      "description": "O sócio que traiu Stark.",
      "profile": [
        "Parceiro de Howard Stark e, depois da morte dele, tutor de Tony e número dois da empresa. Vendia armas por baixo do pano e encomendou a morte do herdeiro para ficar com tudo.",
        "É o primeiro vilão do MCU. Seu filho, Ezekiel, aparece em Coração de Ferro."
      ],
      "now": "Morto em 2008.",
      "inDoomsday": false,
      "appearances": {
        "hf1": "Manda matar Tony, rouba o reator do peito dele e constrói uma armadura gigante. Morre na explosão do reator da fábrica.",
        "coracao": "Citado: o personagem Joe é seu filho."
      }
    },
    {
      "id": "zola",
      "type": "p",
      "group": "Vilões",
      "name": "Arnim Zola",
      "description": "O cientista da Hidra que virou computador.",
      "profile": [
        "Braço científico do Caveira Vermelha na guerra. Capturado pelos Aliados, foi recrutado pelos americanos, como outros cientistas alemães, e de dentro da S.H.I.E.L.D. reconstruiu a Hidra. Foi ele quem fez de Bucky o Soldado Invernal. Antes de morrer, copiou a própria mente para um banco de computadores."
      ],
      "now": "Destruído em 2014.",
      "inDoomsday": false,
      "appearances": {
        "cap1": "Projeta as armas da Hidra e é capturado no trem.",
        "cap2": "Como mente gravada em computadores, revela a Steve e Natasha que a Hidra vive dentro da S.H.I.E.L.D.",
        "whatif": "Uma cópia da mente dele é o vírus que derrota Ultron."
      }
    },
    {
      "id": "pierce",
      "type": "p",
      "group": "Vilões",
      "name": "Alexander Pierce",
      "description": "O chefe da Hidra dentro da S.H.I.E.L.D.",
      "profile": [
        "Membro do conselho que supervisiona a agência, amigo de Nick Fury e homem que recusou um Nobel da Paz. Acredita que a ordem exige matar preventivamente quem possa ameaçá-la."
      ],
      "now": "Morto por Fury.",
      "inDoomsday": false,
      "appearances": {
        "cap2": "Manda matar Fury, declara Steve fugitivo e tenta lançar o Projeto Insight.",
        "ultimato": "Em 2012, tenta ficar com o Tesseract logo depois da Batalha de Nova York."
      }
    },
    {
      "id": "stryker",
      "type": "p",
      "group": "Vilões",
      "name": "William Stryker",
      "description": "O militar que caça mutantes.",
      "profile": [
        "Coronel que dedica a carreira a transformar mutantes em armas e, depois, a eliminá-los. O motivo é pessoal: o filho, capaz de criar ilusões, levou a mãe ao suicídio. Stryker o lobotomizou e o usa como instrumento. Foi ele quem implantou o adamantium em Wolverine."
      ],
      "now": "Morto na represa.",
      "inDoomsday": false,
      "appearances": {
        "xmen2": "Invade a escola, captura Xavier e tenta matar todos os mutantes com uma cópia do Cérebro."
      }
    },
    {
      "id": "dreykov",
      "type": "p",
      "group": "Vilões",
      "name": "Dreykov",
      "description": "O dono da Sala Vermelha.",
      "profile": [
        "General soviético que passou a controlar, de uma base escondida no céu, uma rede mundial de assassinas. Dado como morto num atentado de Natasha, sobreviveu, e a filha dele, ferida na explosão, foi transformada no Treinador."
      ],
      "now": "Morto.",
      "inDoomsday": false,
      "appearances": {
        "viuva": "Revela-se vivo e é morto quando Yelena explode sua nave."
      }
    },
    {
      "id": "wenwu",
      "type": "p",
      "group": "Vilões",
      "name": "Wenwu",
      "description": "O verdadeiro dono dos dez anéis.",
      "profile": [
        "Guerreiro que encontrou os dez anéis há mil anos e nunca mais envelheceu. Com eles comandou um exército secreto que derrubou reinos e governos. O Mandarim que aparece em Homem de Ferro 3 era uma imitação barata dele.",
        "Largou tudo por amor a Ying Li e retomou tudo quando ela foi morta. Não é um vilão por ambição: o que o move é o luto, e é disso que a criatura atrás do portão se aproveita."
      ],
      "now": "Morto. Os anéis estão com o filho.",
      "inDoomsday": false,
      "appearances": {
        "hf1": "Citado: é a organização dele que sequestra Stark.",
        "shangchi": "Acredita que a esposa morta o chama e ataca a aldeia dela. Morre salvando o filho, a quem entrega os anéis."
      }
    },
    {
      "id": "altoev",
      "type": "p",
      "group": "Vilões",
      "name": "Alto Evolucionário",
      "description": "O criador de Rocket.",
      "profile": [
        "Cientista obcecado em fabricar uma espécie perfeita e uma sociedade perfeita. Pega animais, os modifica, os instala em mundos artificiais e destrói tudo quando o resultado o desagrada. Criou também os Soberanos.",
        "Não suporta que Rocket, um descarte, tenha resolvido um problema que ele não resolveu, e quer o cérebro dele de volta."
      ],
      "now": "Derrotado. Rocket se recusou a matá-lo.",
      "inDoomsday": false,
      "appearances": {
        "gg3": "Manda buscar Rocket, destrói a Contra-Terra e é vencido pelos Guardiões."
      }
    },
    {
      "id": "gravik",
      "type": "p",
      "group": "Vilões",
      "name": "Gravik",
      "description": "O líder dos Skrulls rebeldes.",
      "profile": [
        "Skrull que chegou criança à Terra, órfão, e foi usado por Fury como espião por décadas. Cansou de esperar o planeta prometido e concluiu que o único lar possível é este, sem humanos."
      ],
      "now": "Morto.",
      "inDoomsday": false,
      "appearances": {
        "invasao": "Provoca atentados para jogar Estados Unidos e Rússia em guerra e busca o DNA dos Vingadores. É morto por G'iah."
      }
    },
    {
      "id": "darbenn",
      "type": "p",
      "group": "Vilões",
      "name": "Dar-Benn",
      "description": "A líder de um planeta que morre.",
      "profile": [
        "Governante dos Kree depois da guerra civil que arruinou o planeta Hala. Culpa Carol Danvers, com razão, e resolve salvar seu povo tirando ar, água e sol dos mundos de que Carol gosta."
      ],
      "now": "Morta ao usar os dois braceletes.",
      "inDoomsday": false,
      "appearances": {
        "marvels": "Rasga passagens no espaço para roubar recursos e abre sem querer um buraco para outro universo."
      }
    },
    {
      "id": "karli",
      "type": "p",
      "group": "Vilões",
      "name": "Karli Morgenthau",
      "description": "A líder dos Apátridas.",
      "profile": [
        "Adolescente que durante o Blip encontrou casa e comunidade num mundo sem fronteiras, e perdeu ambas quando os desaparecidos voltaram. Toma o soro do supersoldado e lidera um grupo que rouba remédios e comida para campos de refugiados. Sam Wilson entende a causa dela e não aceita os métodos."
      ],
      "now": "Morta por Sharon Carter.",
      "inDoomsday": false,
      "appearances": {
        "falcao": "Rouba suprimentos, mata o parceiro de Walker e ataca uma reunião em Nova York."
      }
    },
    {
      "id": "heimdall",
      "type": "p",
      "group": "Asgard",
      "name": "Heimdall",
      "description": "O guardião da Bifrost.",
      "profile": [
        "Vê tudo o que acontece nos nove reinos e controla a ponte que os liga. Leal a Asgard mais que ao rei do momento: desobedece a Loki e depois a Odin quando julga certo."
      ],
      "now": "Morto por Thanos. Recebe Jane Foster em Valhalla.",
      "inDoomsday": false,
      "appearances": {
        "thor": "Deixa os amigos de Thor passarem, contra a ordem de Loki.",
        "thor2": "Ajuda Thor a sair de Asgard com Jane.",
        "ragnarok": "Esconde o povo de Hela e leva consigo a espada da ponte.",
        "ginfinita": "Com o último fôlego, manda o Hulk para a Terra.",
        "thor4": "Na cena final, recebe Jane em Valhalla."
      }
    },
    {
      "id": "frigga",
      "type": "p",
      "group": "Asgard",
      "name": "Frigga",
      "description": "A rainha de Asgard.",
      "profile": [
        "Esposa de Odin, mãe de Thor e mãe de criação de Loki, a quem ensinou magia. É a única que continua a visitá-lo na prisão."
      ],
      "now": "Morta em 2013.",
      "inDoomsday": false,
      "appearances": {
        "thor": "Vela o sono de Odin.",
        "thor2": "Morre defendendo Jane Foster de Malekith.",
        "ultimato": "Em 2013, horas antes de morrer, conversa com o Thor do futuro e o põe de pé."
      }
    },
    {
      "id": "yondu",
      "type": "p",
      "group": "Guardiões da Galáxia",
      "name": "Yondu",
      "description": "O pirata que criou Peter Quill.",
      "profile": [
        "Capitão de um bando de Saqueadores, de pele azul, que controla uma flecha com assobios. Foi pago por Ego para buscar seus filhos pela galáxia. Ao perceber o que acontecia com as crianças, ficou com a última, um menino da Terra, e a criou à sua maneira, com ameaças e afeto disfarçado.",
        "Por ter traficado crianças, foi expulso da irmandade dos Saqueadores. Morre dando a Quill o único traje espacial."
      ],
      "now": "Morto em 2014.",
      "inDoomsday": false,
      "appearances": {
        "gg1": "Persegue Quill pelo orbe e acaba lutando ao lado dele em Xandar.",
        "gg2": "É deposto pela tripulação, foge com Rocket, salva Quill de Ego e morre no espaço.",
        "ggnatal": "Lembrado: foi ele quem deu a Quill as pistolas."
      }
    },
    {
      "id": "may",
      "type": "p",
      "group": "Vingadores e aliados",
      "name": "Tia May",
      "description": "Quem criou Peter Parker.",
      "profile": [
        "May Parker cria o sobrinho sozinha no Queens. Descobre que ele é o Homem-Aranha no fim de De Volta ao Lar e passa a apoiá-lo. Trabalha num abrigo para desalojados do Blip.",
        "Em Sem Volta para Casa, é ela quem convence Peter a tentar ajudar os vilões em vez de devolvê-los à morte. O Duende Verde a fere, e ela morre nos braços dele dizendo que fizeram a coisa certa."
      ],
      "now": "Morta. Peter visita o túmulo dela.",
      "inDoomsday": false,
      "appearances": {
        "gcivil": "Estreia, sem saber de nada.",
        "aranha1": "Descobre o segredo na última cena.",
        "aranha2": "Organiza eventos beneficentes com o Homem-Aranha.",
        "aranha3": "Insiste em curar os vilões e é morta pelo Duende Verde.",
        "aranha4": "Aparece numa lembrança, que Peter mostra a Jean Grey."
      }
    },
    {
      "id": "howard",
      "type": "p",
      "group": "Vingadores e aliados",
      "name": "Howard Stark",
      "description": "O pai de Tony.",
      "profile": [
        "Inventor e industrial. Na guerra, trabalha no programa do supersoldado e faz o escudo de Steve Rogers. Depois recupera o Tesseract do mar, funda a S.H.I.E.L.D. com Peggy Carter e deixa escondido, numa maquete, o elemento que salvará a vida do filho.",
        "Pai distante. É morto em 1991 pelo Soldado Invernal, com a esposa, numa estrada."
      ],
      "now": "Morto em 1991.",
      "inDoomsday": false,
      "appearances": {
        "cap1": "Jovem, ajuda a criar o Capitão América.",
        "hf2": "Aparece em filmes antigos, com uma mensagem para o filho.",
        "hformiga": "Em 1989, está na reunião em que Pym deixa a S.H.I.E.L.D.",
        "gcivil": "O vídeo de sua morte é o que parte os Vingadores.",
        "ultimato": "Em 1970, conversa com Tony sem saber quem ele é, às vésperas de ser pai."
      }
    },
    {
      "id": "pietro",
      "type": "p",
      "group": "Vingadores e aliados",
      "name": "Pietro Maximoff",
      "description": "O irmão de Wanda.",
      "profile": [
        "Gêmeo de Wanda, doze minutos mais velho. Os experimentos da Hidra lhe deram velocidade sobre-humana. Morre no primeiro filme em que aparece.",
        "Em WandaVision surge um Pietro com outro rosto. É um morador de Westview controlado por Agatha, sem relação com outros universos."
      ],
      "now": "Morto em 2015.",
      "inDoomsday": false,
      "appearances": {
        "cap2": "Aparece numa cela da Hidra, na cena dos créditos.",
        "ving2": "Luta contra os Vingadores, muda de lado e morre protegendo Clint Barton.",
        "wandavision": "Um impostor com o nome dele engana Wanda."
      }
    },
    {
      "id": "sharon",
      "type": "p",
      "group": "Vingadores e aliados",
      "name": "Sharon Carter",
      "description": "A agente que virou Mercadora do Poder.",
      "profile": [
        "Sobrinha de Peggy Carter, agente da S.H.I.E.L.D. e depois da CIA. Em Guerra Civil, rouba para Steve o escudo e as asas de Sam, e por isso vira foragida. Ninguém a perdoa nem a procura.",
        "Passa os anos seguintes em Madripoor, onde se torna a chefe do mercado negro. Recebe o perdão do governo sem que ninguém saiba disso."
      ],
      "now": "De volta à CIA, vendendo segredos.",
      "inDoomsday": false,
      "appearances": {
        "cap2": "Vizinha de Steve, na verdade sua guarda.",
        "gcivil": "Ajuda Steve e perde tudo por isso.",
        "falcao": "Salva Sam e Bucky em Madripoor, revela-se a Mercadora do Poder e mata Karli."
      }
    },
    {
      "id": "isaiah",
      "type": "p",
      "group": "Vingadores e aliados",
      "name": "Isaiah Bradley",
      "description": "O supersoldado que o país escondeu.",
      "profile": [
        "Soldado negro que, nos anos 1950, recebeu sem consentimento uma versão do soro. Dos colegas de teste, foi o único a sobreviver. Desobedeceu a uma ordem para resgatá-los, e por isso passou trinta anos preso, sendo estudado. A esposa foi informada de que tinha morrido."
      ],
      "now": "Livre e inocentado.",
      "inDoomsday": false,
      "appearances": {
        "falcao": "Conta a Sam a própria história e diz que um homem negro não deveria querer aquele escudo.",
        "cap4": "Controlado por Sterns, atira no presidente. É preso de novo e depois inocentado."
      }
    },
    {
      "id": "selvig",
      "type": "p",
      "group": "Vingadores e aliados",
      "name": "Erik Selvig",
      "description": "O astrofísico.",
      "profile": [
        "Professor de Jane Foster. É chamado pela S.H.I.E.L.D. para estudar o Tesseract e tem a mente dominada por Loki, que o usa para construir a máquina do portal. A experiência o deixa abalado por anos."
      ],
      "now": "Sem aparições desde 2015.",
      "inDoomsday": false,
      "appearances": {
        "thor": "Ajuda Jane e tira Thor da custódia da S.H.I.E.L.D.",
        "ving1": "Controlado por Loki, constrói o aparelho do portal e deixa nele uma forma de desligá-lo.",
        "thor2": "Tira a roupa num monumento, vai parar num hospício e ajuda a deter Malekith.",
        "ving2": "Ajuda Thor a entender a visão das Joias."
      }
    },
    {
      "id": "talos",
      "type": "p",
      "group": "Vingadores e aliados",
      "name": "Talos",
      "description": "O líder Skrull, amigo de Fury.",
      "profile": [
        "General dos Skrulls refugiados. Parece vilão em Capitã Marvel e se revela um pai procurando a família. Fica amigo de Fury e trabalha para ele por décadas, à espera do planeta prometido."
      ],
      "now": "Morto por Gravik.",
      "inDoomsday": false,
      "appearances": {
        "cmarvel": "Persegue Carol até a Terra e conta a ela a verdade sobre os Kree.",
        "aranha2": "Passa o filme disfarçado de Fury.",
        "invasao": "Tenta conter os rebeldes pela conversa e é morto."
      }
    },
    {
      "id": "betty",
      "type": "p",
      "group": "Vingadores e aliados",
      "name": "Betty Ross",
      "description": "A filha do general.",
      "profile": [
        "Bióloga, namorada de Bruce Banner na época do acidente e filha de Thaddeus Ross. Rompe com o pai por causa da caçada a Banner e passa anos sem falar com ele."
      ],
      "now": "Reaproximou-se do pai.",
      "inDoomsday": false,
      "appearances": {
        "hulk": "Foge com Banner e é quem acalma o Hulk.",
        "cap4": "É a lembrança dela que faz Ross voltar ao normal. Visita o pai na prisão."
      }
    },
    {
      "id": "nakia",
      "type": "p",
      "group": "Wakanda e Talokan",
      "name": "Nakia",
      "description": "A espiã que T'Challa amou.",
      "profile": [
        "Agente wakandana que trabalha infiltrada em outros países e defende, antes de qualquer um, que Wakanda devia ajudar o mundo. Salva a última erva das mãos de Killmonger.",
        "Depois do Blip, mudou-se para o Haiti, onde dirige uma escola e cria em segredo o filho que teve com T'Challa."
      ],
      "now": "No Haiti, com o filho.",
      "inDoomsday": false,
      "appearances": {
        "pantera": "Acompanha T'Challa à Coreia, salva a erva e o encontra entre os Jabari.",
        "wakanda": "Resgata Shuri e Riri de Talokan e apresenta a Shuri o sobrinho."
      }
    },
    {
      "id": "ramonda",
      "type": "p",
      "group": "Wakanda e Talokan",
      "name": "Ramonda",
      "description": "A rainha de Wakanda.",
      "profile": [
        "Viúva de T'Chaka, mãe de T'Challa e Shuri. Governa depois da morte do filho e enfrenta sozinha as potências que querem o vibranium."
      ],
      "now": "Morta.",
      "inDoomsday": false,
      "appearances": {
        "pantera": "Foge com a filha para os Jabari.",
        "wakanda": "Defende o país na ONU, destitui Okoye e morre afogada salvando Riri Williams."
      }
    },
    {
      "id": "ancia",
      "type": "p",
      "group": "Magos",
      "name": "A Anciã",
      "description": "A mestra de Kamar-Taj.",
      "profile": [
        "Mago Supremo por séculos, de origem celta. Ensina Strange. Prolonga a própria vida tirando poder da Dimensão Negra, coisa que proíbe aos outros, por achar que a Terra precisava dela até aparecer um sucessor."
      ],
      "now": "Morta em 2016.",
      "inDoomsday": false,
      "appearances": {
        "estranho": "Treina Strange, é ferida por Kaecilius e morre depois de uma última conversa.",
        "ultimato": "Em 2012, entrega a Joia do Tempo a Banner ao saber que Strange a daria de propósito."
      }
    },
    {
      "id": "mordo",
      "type": "p",
      "group": "Magos",
      "name": "Mordo",
      "description": "O mago que não tolera exceções.",
      "profile": [
        "Discípulo mais fiel da Anciã e primeiro amigo de Strange em Kamar-Taj. Acredita que as leis naturais não se dobram. Ao descobrir que a mestra as quebrava e ver Strange fazer o mesmo, abandona a ordem e passa a tirar o poder de outros magos."
      ],
      "now": "Em paradeiro desconhecido. Uma variante é Mago Supremo na Terra-838.",
      "inDoomsday": false,
      "appearances": {
        "estranho": "Acolhe Strange, luta ao lado dele e rompe com a ordem.",
        "estranho2": "A variante da Terra-838 integra os Illuminati e sobrevive."
      }
    },
    {
      "id": "clea",
      "type": "p",
      "group": "Magos",
      "name": "Clea",
      "description": "A feiticeira da Dimensão Negra.",
      "profile": [
        "Aparece na última cena de Multiverso da Loucura, de roxo, abrindo um portal no meio da rua. Nos quadrinhos é sobrinha de Dormammu, discípula e esposa de Strange. O filme só diz o que ela quer: ajuda para consertar uma incursão."
      ],
      "now": "Com Strange, na Dimensão Negra.",
      "inDoomsday": false,
      "appearances": {
        "estranho2": "Avisa Strange de que ele causou uma incursão e o leva com ela."
      }
    },
    {
      "id": "colecionador",
      "type": "p",
      "group": "Cosmos",
      "name": "O Colecionador",
      "description": "Taneleer Tivan.",
      "profile": [
        "Ser antiquíssimo que guarda em Luganenhum uma coleção de criaturas e relíquias de toda a galáxia. Sabe o que são as Joias do Infinito e quer todas."
      ],
      "now": "Dado como morto por Thanos, sem confirmação.",
      "inDoomsday": false,
      "appearances": {
        "thor2": "Recebe de Asgard a Joia da Realidade para guardar.",
        "gg1": "Explica aos Guardiões a origem das Joias. Sua coleção explode.",
        "ginfinita": "Thanos toma dele a Joia da Realidade antes da chegada dos Guardiões."
      }
    },
    {
      "id": "graomestre",
      "type": "p",
      "group": "Cosmos",
      "name": "O Grão-Mestre",
      "description": "O dono de Sakaar.",
      "profile": [
        "Governante excêntrico e cruel do planeta de sucata, que mantém a população distraída com lutas de gladiadores. Irmão do Colecionador."
      ],
      "now": "Deposto.",
      "inDoomsday": false,
      "appearances": {
        "ragnarok": "Compra Thor, o põe na arena contra o Hulk e perde o planeta para uma revolta."
      }
    },
    {
      "id": "tommy",
      "type": "p",
      "group": "Novos heróis",
      "name": "Tommy Maximoff",
      "description": "O outro filho de Wanda.",
      "profile": [
        "Gêmeo de Billy, criado pela magia de Wanda em Westview, com a velocidade do tio Pietro. Deixou de existir quando a barreira caiu. No fim de Agatha Desde Sempre, Billy põe a alma dele no corpo de um menino que se afogava."
      ],
      "now": "Vivo em outro corpo, em lugar não revelado. Está no elenco de VisionQuest.",
      "inDoomsday": false,
      "appearances": {
        "wandavision": "Nasce e cresce em dias. Corre como o tio.",
        "agatha": "Billy encontra para a alma dele um corpo.",
        "visionquest": "No elenco."
      }
    }
  ],
  "sources": {
    "wikipedia": [
      {
        "label": "Avengers: Doomsday",
        "url": "https://en.wikipedia.org/wiki/Avengers:_Doomsday"
      },
      {
        "label": "Spider-Man: Brand New Day",
        "url": "https://en.wikipedia.org/wiki/Spider-Man:_Brand_New_Day"
      },
      {
        "label": "Daredevil: Born Again",
        "url": "https://en.wikipedia.org/wiki/Daredevil:_Born_Again_season_2"
      },
      {
        "label": "Thunderbolts*",
        "url": "https://en.wikipedia.org/wiki/Thunderbolts*"
      },
      {
        "label": "The Fantastic Four: First Steps",
        "url": "https://en.wikipedia.org/wiki/The_Fantastic_Four:_First_Steps"
      },
      {
        "label": "Captain America: Brave New World",
        "url": "https://en.wikipedia.org/wiki/Captain_America:_Brave_New_World"
      },
      {
        "label": "The Punisher: One Last Kill",
        "url": "https://en.wikipedia.org/wiki/The_Punisher:_One_Last_Kill"
      }
    ],
    "trailers": [
      {
        "label": "ComicBookMovie",
        "url": "https://comicbookmovie.com/avengers/avengers-doomsday/avengers-doomsday-d23-trailer-breakdown-everything-we-learned-from-doctor-doom-centric-special-look-a229370"
      },
      {
        "label": "SciFiNow",
        "url": "https://www.scifinow.co.uk/news/marvel-drops-new-avengers-doomsday-trailer-reynolds-jackman-confirmed/"
      },
      {
        "label": "Hero Haven",
        "url": "https://herohaven.com/blogs/news/avengers-doomsday-trailer-breakdown-easter-eggs-every-detail-you-missed"
      }
    ],
    "disneyList": {
      "label": "lista do Disney+",
      "url": "https://tbreak.com/avengers-doomsday-watchlist-15-movies-shows/"
    }
  }
};
