export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  categoryColor: string;
  tagColor: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  description: string;
  featured?: boolean;
  content: string;
  keyTakeaways: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'cronograma-pno-radcom-editais-mcom',
    title: 'Cronograma PNO Radcom: O que esperar dos novos editais de Rádios Comunitárias do Ministério das Comunicações',
    category: 'Rádio Comunitária',
    categoryColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    tagColor: 'text-cyan-700 border-cyan-200 bg-cyan-50',
    date: '02 Set, 2026',
    readTime: '5 min de leitura',
    author: 'Dr. Ivan Alves',
    authorRole: 'Diretor Jurídico e Regulatório da IMEA Radiodifusão',
    featured: true,
    description: 'O MCom divulgou novas diretrizes para o Plano Nacional de Outorgas (PNO). Confira as exigências de documentação, os critérios de habilitação e como preparar sua associação mantenedora.',
    keyTakeaways: [
      'Publicação periódica de editais divididos por blocos estaduais e municípios prioritários.',
      'Exigência de atas de eleição e posse devidamente registradas e sem pendências no cartório e na Receita Federal.',
      'Critérios de desempate rigorosos caso mais de uma entidade pleiteie o mesmo canal comunitário.',
      'Apresentação de projeto técnico e localização da estação transmissora em raio compatível.'
    ],
    content: `
      <p>O Ministério das Comunicações (MCom) intensificou a liberação de novos lotes de editais através do <strong>Plano Nacional de Outorgas (PNO)</strong> para o serviço de Rádio Comunitária (Radcom). A medida visa regularizar associações comunitárias que operam há anos aguardando chancela oficial, além de abrir espaço para novas vozes culturais e cívicas em centenas de municípios brasileiros.</p>
      
      <h2>1. Como funciona a seleção do PNO Radcom?</h2>
      <p>Diferente de estações comerciais que disputam licitações públicas com base em propostas financeiras, as Rádios Comunitárias são outorgadas com base no <strong>cumprimento de requisitos legais e de representatividade social</strong>.</p>
      <p>Quando um edital é publicado para determinada localidade, abre-se um prazo legal (geralmente de 60 dias) para que qualquer associação civil sem fins lucrativos legalmente constituída no município apresente seu requerimento de outorga e documentação de habilitação jurídica.</p>

      <blockquote>
        "O maior índice de inabilitação nos editais do PNO não ocorre por falta de idoneidade da entidade, mas sim por erros materiais e descuidos na formatação de atas, ausência de certidões conjuntas federais e estatutos incompatíveis com a Lei 9.612/1998."
      </blockquote>

      <h2>2. Documentos essenciais para não ser desclassificado</h2>
      <p>Antes mesmo do lançamento do edital da sua cidade, a diretoria da associação mantenedora deve auditar os seguintes documentos:</p>
      <ul>
        <li><strong>Estatuto Social Atualizado:</strong> Deve prever expressamente a finalidade de executar serviços de radiodifusão comunitária, sem fins lucrativos e sem discriminação política, religiosa ou partidária.</li>
        <li><strong>Ata de Eleição e Posse Vigente:</strong> A diretoria em exercício precisa ter mandato em curso, registrado no Cartório de Registro Civil de Pessoas Jurídicas (RCPJ).</li>
        <li><strong>Certidão Negativa de Débitos Federais (CND):</strong> Regularidade tributária perante a Secretaria da Receita Federal e Procuradoria-Geral da Fazenda Nacional.</li>
        <li><strong>Comprovante de Residência dos Dirigentes:</strong> Todos os integrantes da diretoria executiva e do conselho fiscal devem comprovar domicílio dentro da área de cobertura pretendida.</li>
      </ul>

      <h2>3. Disputa pelo mesmo canal: Critérios de desempate</h2>
      <p>Em cidades onde duas ou mais associações se habilitam validamente para o mesmo canal de 25W, a legislação determina a tentativa de conciliação para compartilhamento de horário no transmissor. Caso não haja consenso, o MCom aplica critérios de pontuação objetiva, incluindo tempo de constituição formal da entidade e número de associados cadastrados na comunidade.</p>

      <h2>4. Como a IMEA Radiodifusão apoia sua entidade</h2>
      <p>Com mais de 20 anos de atuação especializada, a IMEA Radiodifusão realiza a <strong>auditoria preventiva completa</strong> do acervo documental da sua rádio, formula as manifestações eletrônicas no CADSE/SEI e defende a homologação da sua outorga perante os técnicos do Ministério das Comunicações até o decreto final.</p>
    `
  },
  {
    slug: 'prazo-12-meses-renovacao-outorga-cadse',
    title: 'Renovação de Outorga nos 12 meses anteriores: O risco real da perda de concessão por decurso de prazo',
    category: 'Renovação de Outorga',
    categoryColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    tagColor: 'text-blue-700 border-blue-200 bg-blue-50',
    date: '28 Ago, 2026',
    readTime: '6 min de leitura',
    author: 'Equipe Regulatória IMEA Radiodifusão',
    authorRole: 'Assessoria Federal em Radiodifusão',
    featured: true,
    description: 'A Lei 5.785/1972 e os regramentos federais exigem protocolo rigoroso no CADSE até um ano antes do vencimento. Veja as medidas preventivas para emissoras comerciais e educativas.',
    keyTakeaways: [
      'Protocolo obrigatório entre 12 e 2 meses antes da data de expiração da concessão ou permissão.',
      'O protocolo tempestivo garante a continuidade legal das transmissões mesmo se o MCom demorar para julgar.',
      'A perda do prazo pode ensejar processo de perempção e perda irremediável da frequência.',
      'Laudos de irradiação com ART e certidões negativas são itens de conferência imediata.'
    ],
    content: `
      <p>Muitas emissoras de rádio (AM, FM e Comunitárias) e canais de televisão cometem um erro silencioso, mas com potencial devastador: <strong>deixar para organizar a documentação de renovação de outorga nas últimas semanas antes do vencimento</strong>.</p>
      <p>No ordenamento jurídico brasileiro de telecomunicações, o prazo para requerimento de renovação é peremptório. O Decreto nº 52.795/1963 e a legislação complementar determinam que o pedido deve ser formalizado perante o Ministério das Comunicações durante os <strong>12 (doze) meses anteriores à data final da concessão</strong>.</p>

      <h2>1. A garantia da prorrogação tácita (Art. 4º da Lei 5.785/1972)</h2>
      <p>O maior benefício de protocolar o pedido dentro do prazo legal de 12 meses é a <strong>proteção jurídica da operação</strong>. Caso o Ministério das Comunicações ou a Presidência da República não concluam a análise técnica antes do vencimento formal da portaria anterior, a emissora obtém o direito legal de continuar transmitindo normalmente sem risco de autuação por operação clandestina.</p>
      
      <blockquote>
        "Se a emissora protocolar sua renovação tempestivamente, ela está legalmente blindada contra desligamento forçado, mesmo que o processo federal tramite por meses no CADSE."
      </blockquote>

      <h2>2. O que acontece se a emissora perder o prazo de 12 meses?</h2>
      <p>Quando a data de expiração é ultrapassada sem protocolo registrado no sistema eletrônico do Governo Federal:</p>
      <ul>
        <li>A concessão entra em estado de <em>perempção</em> (extinção por inércia do concessionário);</li>
        <li>A Anatel pode lacrar os transmissores em fiscalização de rotina;</li>
        <li>A emissora perde a prioridade e o canal volta ao banco de frequências disponíveis da União;</li>
        <li>A regularização passa a exigir um processo complexo de repactuação com fundamentação jurídica extraordinária.</li>
      </ul>

      <h2>3. Principais documentos exigidos no CADSE</h2>
      <p>Para instruir o requerimento de renovação, a IMEA Radiodifusão audita antecipadamente:</p>
      <ul>
        <li>Certidões negativas da Receita Federal, FGTS e Justiça do Trabalho;</li>
        <li>Declarações de cumprimento das exigências de 5 horas semanais de jornalismo e 2 horas de programas educativos;</li>
        <li>Relação atualizada de sócios e diretores sem condenações que impliquem inabilitação para o exercício de função pública;</li>
        <li>Laudo de vistoria técnica e radiometria subscrito por engenheiro de telecomunicações habilitado no CREA.</li>
      </ul>

      <h2>4. Recomendações práticas da IMEA Radiodifusão</h2>
      <p>Não espere a data limite. Nossa equipe realiza a varredura preventiva de todas as certidões e histórico cadastral da sua emissora para que o protocolo seja protocolado com 10 a 12 meses de antecedência, garantindo tranquilidade jurídica total aos acionistas e diretores.</p>
    `
  },
  {
    slug: 'defesa-anatel-auto-infracao-pado-potencia',
    title: 'Notificação e PADO da Anatel por excesso de potência ou irradiação espúria: Como elaborar a defesa prévia',
    category: 'Fiscalização Anatel',
    categoryColor: 'bg-red-500/10 text-red-400 border-red-500/30',
    tagColor: 'text-red-700 border-red-200 bg-red-50',
    date: '19 Ago, 2026',
    readTime: '7 min de leitura',
    author: 'Dr. Ivan Alves',
    authorRole: 'Especialista em Direito Regulatório Anatel',
    featured: true,
    description: 'Fiscalizações móveis com medidores de campo podem gerar multas pesadas. Entenda o prazo de 10 a 30 dias para impugnar autos de infração e laudos de medição de estações.',
    keyTakeaways: [
      'O recebimento de Notificação de Fiscalização inicia o prazo preclusivo de defesa.',
      'Laudos de medição de intensidade de campo da Anatel podem ser impugnados se houver falhas de calibração ou metodologia.',
      'Defesas técnicas bem fundamentadas podem converter penalidades pecuniárias em sanção de advertência.',
      'A inércia processual leva à revelia e inscrição imediata do débito no CADIN da União.'
    ],
    content: `
      <p>Poucas situações causam tanta preocupação aos diretores de uma emissora de rádio quanto a chegada de um fiscal da Agência Nacional de Telecomunicações (Anatel) ou a intimação de um <strong>Processo de Apuração de Descumprimento de Obrigação (PADO)</strong>.</p>
      <p>A Anatel realiza fiscalizações rotineiras através de viaturas equipadas com analisadores de espectro e antenas receptoras móveis. Quando é detectada qualquer divergência em relação à licença de funcionamento da estação, o fiscal lavra um Relatório de Fiscalização e um Auto de Infração.</p>

      <h2>1. Infrações mais comuns flagradas pela Anatel</h2>
      <p>Em mais de duas décadas de atuação na defesa de emissoras em todo o território nacional, os principais motivos de autuação envolvem:</p>
      <ul>
        <li><strong>Potência de Irradiação Superior (ERP):</strong> Operar acima dos watts autorizados no Plano Básico de Distribuição de Canais (em especial rádios comunitárias limitadas a 25W);</li>
        <li><strong>Irradiação Espúria e Harmônicas:</strong> Emissão de sinais secundários em frequências adjacentes que provocam interferência em sistemas aeronáuticos ou de segurança pública;</li>
        <li><strong>Transmissor sem Homologação:</strong> Utilização de equipamentos ou módulos de amplificação sem certificado de conformidade técnica emitido pela Anatel;</li>
        <li><strong>Mudança de Coordenadas Geográficas:</strong> Instalação da antena transmissora em endereço diferente daquele outorgado pelo Ministério.</li>
      </ul>

      <blockquote>
        "Muitos autos de infração são lavrados com inconsistências de medição de campo ou erros no cálculo de atenuação do relevo. Uma defesa técnica fundamentada em engenharia e jurisprudência administrativa é o único caminho para anular a penalidade."
      </blockquote>

      <h2>2. O rito processual do PADO e os prazos tempestivos</h2>
      <p>Após a intimação, a emissora dispõe de prazo legal (geralmente de <strong>10 a 30 dias</strong>, conforme o caso concreto) para apresentar <em>Defesa Prévia</em> ou <em>Impugnação</em> perante a Gerência Regional da Anatel.</p>
      <p>Se a emissora permanecer inerte ou apresentar uma justificativa informal ("o técnico estava consertando e aumentou o botão"), o processo corre à revelia. O resultado é a aplicação direta de multas que podem atingir dezenas de milhares de reais, além de risco de suspensão temporária do sinal.</p>

      <h2>3. Estratégias jurídicas e técnicas de defesa da IMEA Radiodifusão</h2>
      <p>Nossa assessoria atua em duas frentes integradas:</p>
      <ul>
        <li><strong>Impugnação Técnica da Medição:</strong> Auditamos o certificado de calibração do equipamento utilizado pelos fiscais, a distância da medição e a influência de reflexões topográficas ou edifícios adjacentes;</li>
        <li><strong>Princípios de Dosimetria e Atenuantes:</strong> Demonstramos a inexistência de dolo, a primariedade da emissora e pleiteamos a substituição da multa por sanção de advertência pedagógica (art. 176 da LGT).</li>
      </ul>

      <h2>4. Atendimento emergencial</h2>
      <p>Se a sua emissora recebeu notificação ou auto de infração recente, entre em contato imediatamente com o plantão da IMEA Radiodifusão para iniciarmos a análise do processo antes do esgotamento do prazo de defesa.</p>
    `
  },
  {
    slug: 'migracao-am-para-fm-estendida-efm',
    title: 'Migração AM para FM Estendida (eFM): Desafios técnicos, custos de antena e transição definitiva',
    category: 'Engenharia & Técnica',
    categoryColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    tagColor: 'text-indigo-700 border-indigo-200 bg-indigo-50',
    date: '11 Ago, 2026',
    readTime: '6 min de leitura',
    author: 'Engenharia Técnica IMEA Radiodifusão',
    authorRole: 'Consultoria de Espectro e Radiodifusão',
    featured: false,
    description: 'Com o esgotamento do dial FM convencional nos grandes centros, a faixa de 76 a 88 MHz tornou-se a rota principal. Descubra os requisitos técnicos e o cálculo de viabilidade econômica.',
    keyTakeaways: [
      'A faixa eFM (76 a 88 MHz) foi liberada com a desocupação dos canais analógicos 5 e 6 de TV.',
      'Todos os novos receptores veiculares e smartphones fabricados no Brasil já vêm de fábrica sintonizados na faixa estendida.',
      'O processo exige estudo de viabilidade técnica de canal e pagamento da diferença de outorga ao MCom.',
      'Modernização da qualidade de som elimina os ruídos eletromagnéticos urbanos típicos da modulação AM.'
    ],
    content: `
      <p>O processo de <strong>migração das emissoras de Onda Média (AM) para o dial de Frequência Modulada (FM)</strong> é uma das transformações tecnológicas mais importantes da radiodifusão brasileira nas últimas décadas.</p>
      <p>Nas capitais e regiões metropolitanas com dial convencional (88,1 a 107,9 MHz) completamente saturado, a saída viabilizada pelo Governo Federal e pela Anatel foi a criação da <strong>faixa FM estendida (eFM)</strong>, ocupando as frequências de 76,1 a 87,5 MHz.</p>

      <h2>1. Por que migrar é uma questão de sobrevivência comercial?</h2>
      <p>A transmissão em Amplitude Modulada (AM) sofre severamente com ruídos e interferências eletromagnéticas provocadas por redes de energia, transformadores, lâmpadas de LED e dispositivos eletrônicos. Como resultado, o ouvinte moderno abandonou os canais AM, reduzindo drasticamente o apelo comercial da emissora.</p>
      <p>Ao migrar para FM:</p>
      <ul>
        <li>A emissora ganha som com fidelidade estéreo e nitidez comparável ao streaming;</li>
        <li>Recupera a audiência que transita em automóveis e transporte público;</li>
        <li>Permite inserção em plataformas digitais e receptores modernos;</li>
        <li>Multiplica o valor de mercado da concessão da emissora perante o mercado publicitário.</li>
      </ul>

      <h2>2. Os novos receptores já captam a faixa estendida?</h2>
      <p>Sim. Desde 2017, portarias do Ministério das Comunicações e da Anatel determinaram que todos os aparelhos de rádio, sistemas de entretenimento de veículos nacionais e importados, e aparelhos celulares com receptor FM comercializados no Brasil devem obrigatoriamente abranger a faixa de 76 a 108 MHz.</p>

      <h2>3. Etapas do processo regulatório e técnico de migração</h2>
      <p>A migração não é automática. Ela obedece a um rito legal detalhado:</p>
      <ol>
        <li><strong>Manifestação Formal de Interesse:</strong> Protocolo de pedido formal junto ao MCom;</li>
        <li><strong>Estudo de Viabilidade Técnica:</strong> A Anatel realiza a inclusão do novo canal no Plano Básico com classe compatível;</li>
        <li><strong>Cálculo do Valor da Outorga:</strong> A emissora recolhe ao FISTEL o valor da diferença de outorga estabelecido por tabela ministerial;</li>
        <li><strong>Projeto Técnico de Instalação:</strong> Engenheiro credenciado elabora o projeto de instalação do transmissor, antena e linhas de transmissão;</li>
        <li><strong>Licenciamento e Entrada no Ar:</strong> Vistoria técnica e emissão da Licença de Funcionamento da Estação (LFE).</li>
      </ol>

      <h2>4. Consultoria especializada da IMEA Radiodifusão</h2>
      <p>A IMEA Radiodifusão elabora todo o planejamento técnico-regulatório da sua migração, calculando o melhor arranjo de potência e classe para maximizar o alcance da sua nova estação sem gerar custos desnecessários com outorga.</p>
    `
  },
  {
    slug: 'apoio-cultural-radio-comunitaria-limites-legais',
    title: 'Apoio Cultural em Rádios Comunitárias: Os limites entre sustentabilidade e publicidade comercial irregular',
    category: 'Legislação & Compliance',
    categoryColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    tagColor: 'text-emerald-700 border-emerald-200 bg-emerald-50',
    date: '04 Ago, 2026',
    readTime: '5 min de leitura',
    author: 'Iara Marques Roberto Alves',
    authorRole: 'Coordenação de Compliance Documental da IMEA Radiodifusão',
    featured: false,
    description: 'A Portaria MCom nº 4.334/2015 e a Lei 9.612/1998 impõem regras rígidas. Saiba exatamente o que pode e o que não pode ser veiculado para afastar denúncias e multas.',
    keyTakeaways: [
      'A Lei proíbe expressamente publicidade e propaganda comercial com veiculação de preços ou ofertas.',
      'O apoio cultural deve restringir-se à identificação do apoiador, ramo de atividade e dados de contato.',
      'É vedado o uso de slogans apelativos, jingles mercadológicos e menções a condições facilitadas de pagamento.',
      'Descumprimento acarreta multas gravíssimas e risco de cassação definitiva da outorga comunitária.'
    ],
    content: `
      <p>A sustentabilidade financeira é, sem dúvida, um dos maiores desafios enfrentados pelas associações comunitárias mantenedoras de rádios em todo o Brasil. No entanto, é fundamental compreender com extrema clareza a linha que divide o <strong>Apoio Cultural lícito</strong> da <strong>Publicidade Comercial irregular</strong>.</p>
      <p>O artigo 18 da Lei Federal nº 9.612/1998 e a Portaria MCom nº 4.334/2015 estabelecem que as emissoras comunitárias podem receber apoio cultural de entidades e do comércio local para custear sua programação, mas <em>vedam expressamente a inserção de propaganda comercial</em>.</p>

      <h2>1. O que É permitido na veiculação de Apoio Cultural?</h2>
      <p>Durante a programação da Radcom, a emissora pode veicular mensagens informativas de patrocínio que contenham <strong>apenas</strong>:</p>
      <ul>
        <li>Nome ou razão social do apoiador cultural (ex: "Padaria Central");</li>
        <li>Ramo de atividade ou profissão (ex: "Panificação e Confeitaria");</li>
        <li>Endereço físico, telefone e canais de contato eletrônico (site, Instagram, WhatsApp);</li>
        <li>Frase padrão de fechamento informando o apoio cultural à emissora.</li>
      </ul>

      <h2>2. O que É ESTRITAMENTE PROIBIDO no ar?</h2>
      <p>As fiscalizações do MCom e da Anatel gravam a programação das emissoras e autuam qualquer mensagem que apresente características mercadológicas, tais como:</p>
      <ul>
        <li><strong>Preços de Produtos e Serviços:</strong> "Cerveja por apenas R$ 4,99" ou "Cortes de cabelo a partir de R$ 30";</li>
        <li><strong>Condições de Pagamento:</strong> "Parcele em até 10 vezes sem juros no cartão";</li>
        <li><strong>Slogans Comerciais Vencedores:</strong> "O melhor frango assado da região" ou "A loja que vende mais barato";</li>
        <li><strong>Jingles e Trilhas Comerciais de Varejo:</strong> Jingles cantados com apelo direto à compra;</li>
        <li><strong>Promoções e Vantagens Exclusivas:</strong> Sorteios atrelados à compra no estabelecimento parceiro.</li>
      </ul>

      <blockquote>
        "Um único anúncio com divulgação de preço ou jingle gravado por fiscais da Anatel é prova suficiente para a abertura imediata de PADO punitivo contra a associação."
      </blockquote>

      <h2>3. Como formatar contratos e recibos de apoio cultural seguros</h2>
      <p>Além da redação do áudio no ar, a documentação interna da rádio precisa estar protegida. Os termos de apoio cultural devem ser firmados por escrito, detalhando o valor das doações voluntárias destinadas exclusivamente à manutenção técnica e operacional da associação.</p>

      <h2>4. Como a IMEA Radiodifusão pode ajudar</h2>
      <p>Auditamos os textos das vinhetas de apoio cultural da sua rádio e fornecemos modelos de contratos preventivos para que sua emissora arrecade recursos de forma 100% legal e transparente perante os órgãos federais.</p>
    `
  },
  {
    slug: 'alteracao-societaria-atas-diretoria-mcom',
    title: 'Mudança de Sócios ou Eleição de Diretoria: Por que a averbação em cartório não basta para a Anatel e MCom',
    category: 'Gestão Societária',
    categoryColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    tagColor: 'text-cyan-700 border-cyan-200 bg-cyan-50',
    date: '22 Jul, 2026',
    readTime: '5 min de leitura',
    author: 'Dr. Ivan Alves & Equipe IMEA Radiodifusão',
    authorRole: 'Assessoria Jurídica Societária',
    featured: false,
    description: 'Trocas no quadro societário ou novas atas de posse exigem anuência ou comunicação formal no sistema federal. Veja como manter seu acervo societário 100% blindado.',
    keyTakeaways: [
      'Toda e qualquer alteração societária em rádio ou TV requer validação ou comunicação tempestiva perante o MCom.',
      'Mudanças de controle societário dependem de autorização ministerial prévia.',
      'Diretoria vencida de rádio comunitária paralisa imediatamente peticionamentos eletrônicos no CADSE/SEI.',
      'Sócio não brasileiro nato ou com pendências eleitorais impede a aprovação cadastral federal.'
    ],
    content: `
      <p>Um dos erros mais comuns de radiodifusores e administradores de associações é acreditar que a aprovação de uma alteração de contrato social na Junta Comercial ou o registro de uma nova ata de posse em Cartório de Registro Civil são suficientes para dar validade à operação da emissora.</p>
      <p>Por se tratar de um serviço público outorgado pela União sob regime de concessão ou autorização, <strong>qualquer modificação na gestão, titularidade de cotas ou diretoria deve ser obrigatoriamente comunicada e validada perante o Ministério das Comunicações</strong>.</p>

      <h2>1. Transferência direta vs. Transferência indireta de cotas</h2>
      <p>A legislação de radiodifusão diferencia as modalidades de alteração societária:</p>
      <ul>
        <li><strong>Alterações Ordinárias (Sem Mudança de Controle):</strong> Saída ou entrada de sócios minoritários, redistribuição interna de cotas e mudanças meramente administrativas. Devem ser comunicadas e averbadas perante o Ministério nos prazos regulamentares.</li>
        <li><strong>Transferência de Controle Societário:</strong> Quando há mudança no comando efetivo da concessão (sócio majoritário). Exige <em>anuência prévia obrigatória</em> do Ministério das Comunicações através de processo instrutório específico antes da alteração contratual definitiva.</li>
      </ul>

      <h2>2. O problema da diretoria vencida nas Rádios Comunitárias</h2>
      <p>No caso de Rádios Comunitárias (Radcom), o mandato dos diretores é fixado pelo Estatuto Social (geralmente de 2 a 4 anos). Quando o mandato expira sem eleição e averbação tempestiva:</p>
      <ul>
        <li>O presidente perde a legitimidade para assinar procurações e petições no sistema SEI/MCom;</li>
        <li>O sistema federal CADSE bloqueia protocolos de renovação e defesas contra a Anatel;</li>
        <li>O Ministério emite notificação com prazo improrrogável de regularização sob pena de extinção da outorga.</li>
      </ul>

      <blockquote>
        "A regularidade da diretoria é a chave de acesso a todos os atos regulatórios federais. Se a ata venceu, a rádio fica juridicamente muda perante o Governo Federal."
      </blockquote>

      <h2>3. Requisitos obrigatórios para novos sócios e dirigentes</h2>
      <p>A Constituição Federal e as portarias do MCom exigem que todos os novos cotistas ou membros de diretoria executiva comprovem:</p>
      <ul>
        <li>Nacionalidade brasileira (pelo menos 70% do capital com direito a voto);</li>
        <li>Pleno gozo dos direitos civis e políticos (certidão de quitação eleitoral sem pendências);</li>
        <li>Inexistência de condenação penal por crimes hediondos, contra a administração pública ou patrimônio;</li>
        <li>Não ser detentor de mandato parlamentar (deputado, senador) que cause incompatibilidade legal.</li>
      </ul>

      <h2>4. Como a IMEA Radiodifusão atua</h2>
      <p>A equipe da IMEA Radiodifusão elabora as minutas contratuais, redige as atas de eleição e posse de acordo com o modelo padrão federal e protocola todo o dossiê comprobatório no Ministério das Comunicações, garantindo certidões limpas e proteção patrimonial da emissora.</p>
    `
  }
];
