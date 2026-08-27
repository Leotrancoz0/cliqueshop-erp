const icons = {
  inicio:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 10.5 12 4l8 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-8Z" stroke-width="1.7"/><path d="M9.5 20v-6h5v6" stroke-width="1.7"/></svg>',
  operacao:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2" stroke-width="1.7"/><path d="M8 3v4m8-4v4M8 11h8m-8 4h5" stroke-width="1.7" stroke-linecap="round"/></svg>',
  financeiro:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3.5" y="6" width="17" height="13" rx="2.5" stroke-width="1.7"/><path d="M3.5 10h17m-4 4.5h1" stroke-width="1.7" stroke-linecap="round"/></svg>',
  estoque:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m4 8 8-4 8 4v9l-8 4-8-4V8Z" stroke-width="1.7"/><path d="m4 8 8 4 8-4m-8 4v9" stroke-width="1.7"/></svg>',
  marketplace:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 9v10h14V9M4 9l1.4-5h13.2L20 9" stroke-width="1.7"/><path d="M4 9a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0M9 19v-5h6v5" stroke-width="1.7"/></svg>',
  posvenda:
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 7H4v-4" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.5 7.5A8 8 0 1 1 5 17" stroke-width="1.7" stroke-linecap="round"/><path d="M12 8v4l3 2" stroke-width="1.7" stroke-linecap="round"/></svg>',
};

const views = [
  {
    id: "inicio",
    label: "Início",
    eyebrow: "VISÃO GERAL",
    headline: "O que exige atenção agora.",
    description:
      "Indicadores consolidados e prioridades operacionais aparecem antes do restante do sistema.",
    modules: ["Prioridades", "Indicadores", "A liberar", "Notificações", "Movimentações"],
    metrics: [
      { label: "Resultado do mês", value: "R$ 24.680", note: "visão por competência", tone: "up" },
      { label: "Caixa disponível", value: "R$ 61.340", note: "posição reconciliada", tone: "neutral" },
      { label: "Estoque valorizado", value: "R$ 92.760", note: "custo médio sintético", tone: "neutral" },
      { label: "Valores a liberar", value: "R$ 18.420", note: "próximos 7 dias", tone: "attention" },
    ],
    panel: {
      title: "Fluxo dos últimos 7 dias",
      subtitle: "entradas líquidas demonstrativas",
      bars: [
        { label: "Qui", value: 42, amount: "5,2k" },
        { label: "Sex", value: 68, amount: "8,5k" },
        { label: "Sáb", value: 51, amount: "6,4k" },
        { label: "Dom", value: 33, amount: "4,1k" },
        { label: "Seg", value: 82, amount: "10,3k" },
      ],
    },
    table: {
      title: "Últimas movimentações",
      subtitle: "caixa e marketplace",
      columns: ["Evento", "Origem", "Valor", "Situação"],
      rows: [
        ["Liberação DEMO-1842", "Marketplace", "R$ 3.482", { label: "Conciliado", status: "good" }],
        ["Compra LOTE-024", "Estoque", "− R$ 2.160", { label: "Registrado", status: "info" }],
        ["Venda direta VD-108", "Comercial", "R$ 780", { label: "Recebido", status: "good" }],
      ],
    },
    signals: {
      title: "Prioridades",
      items: [
        { icon: "2", color: "orange", title: "Decisões comerciais", detail: "margem abaixo do cenário planejado" },
        { icon: "3", color: "", title: "Tarefas de hoje", detail: "duas operacionais e uma financeira" },
        { icon: "6", color: "green", title: "Rotinas concluídas", detail: "sincronizações sem pendência" },
      ],
    },
    advisor: {
      title: "Radar de decisão",
      text: "Um anúncio perdeu margem após alteração de custo. A evidência sintética está disponível em Marketplace.",
    },
  },
  {
    id: "operacao",
    label: "Operação",
    eyebrow: "EXECUÇÃO",
    headline: "Rotina organizada por responsabilidade.",
    description:
      "Tarefas, agenda, recorrências e alertas conectam a execução diária aos eventos do ERP.",
    modules: ["Tarefas", "Agenda", "Checklists", "Recorrências", "Alertas", "Telegram", "Advisor", "Cadastros", "Acessos"],
    metrics: [
      { label: "Tarefas de hoje", value: "8", note: "3 concluídas", tone: "neutral" },
      { label: "A vencer", value: "2", note: "até o fim do dia", tone: "attention" },
      { label: "Rotinas automáticas", value: "6/6", note: "execuções concluídas", tone: "up" },
      { label: "Alertas ativos", value: "3", note: "sem duplicidade", tone: "neutral" },
    ],
    panel: {
      title: "Carga da semana",
      subtitle: "tarefas por dia",
      bars: [
        { label: "Seg", value: 72, amount: "9" },
        { label: "Ter", value: 56, amount: "7" },
        { label: "Qua", value: 88, amount: "11" },
        { label: "Qui", value: 64, amount: "8" },
        { label: "Sex", value: 40, amount: "5" },
      ],
    },
    table: {
      title: "Fila operacional",
      subtitle: "próximas ações",
      columns: ["Tarefa", "Contexto", "Responsável", "Situação"],
      rows: [
        ["Revisar custo DEMO-341", "Viabilidade", "Comercial", { label: "Hoje", status: "warn" }],
        ["Confirmar recebimento LOTE-024", "Estoque", "Operação", { label: "Em curso", status: "info" }],
        ["Fechar competência", "Financeiro", "Financeiro", { label: "Agendado", status: "good" }],
      ],
    },
    signals: {
      title: "Automações",
      items: [
        { icon: "✓", color: "green", title: "Resumo diário", detail: "digest entregue sem repetição" },
        { icon: "↻", color: "", title: "Recorrências", detail: "próxima execução às 09:00" },
        { icon: "A", color: "orange", title: "Acesso administrativo", detail: "restrito ao perfil autorizado" },
      ],
    },
    advisor: {
      title: "Advisor operacional",
      text: "A tarefa de recebimento está ligada a um lote em trânsito; o contexto acompanha a ação.",
    },
  },
  {
    id: "financeiro",
    label: "Financeiro",
    eyebrow: "GESTÃO FINANCEIRA",
    headline: "Caixa e competência no mesmo contexto.",
    description:
      "Movimentações, liberações e resultado são apresentados em recortes distintos, sem misturar os conceitos.",
    modules: ["Caixa", "DRE", "Conciliação", "Recorrências", "Venda direta", "Relatórios"],
    metrics: [
      { label: "Entradas no período", value: "R$ 78.920", note: "caixa demonstrativo", tone: "up" },
      { label: "Saídas no período", value: "R$ 54.240", note: "custos e despesas", tone: "attention" },
      { label: "Resultado", value: "R$ 24.680", note: "visão por competência", tone: "neutral" },
      { label: "A conciliar", value: "R$ 1.340", note: "2 movimentações", tone: "attention" },
    ],
    panel: {
      title: "Composição do resultado",
      subtitle: "valores sintéticos",
      bars: [
        { label: "Receita líquida", value: 92, amount: "78,9k", color: "#1f9d67" },
        { label: "Mercadoria", value: 48, amount: "41,2k", color: "#1877f2" },
        { label: "Tarifas e frete", value: 18, amount: "15,6k", color: "#ff7a1a" },
        { label: "Despesas", value: 9, amount: "7,8k", color: "#7a8798" },
        { label: "Resultado", value: 29, amount: "24,7k", color: "#12365d" },
      ],
    },
    table: {
      title: "Conciliação",
      subtitle: "eventos recentes",
      columns: ["Referência", "Competência", "Caixa", "Situação"],
      rows: [
        ["REPASSE-0827", "R$ 3.482", "R$ 3.482", { label: "Conciliado", status: "good" }],
        ["FRETE-1834", "− R$ 286", "− R$ 286", { label: "Conciliado", status: "good" }],
        ["AJUSTE-019", "R$ 1.340", "—", { label: "Revisar", status: "warn" }],
      ],
    },
    signals: {
      title: "Leitura financeira",
      items: [
        { icon: "C", color: "", title: "Caixa", detail: "posição de entradas e saídas" },
        { icon: "D", color: "green", title: "DRE", detail: "resultado por competência" },
        { icon: "R", color: "orange", title: "Relatórios", detail: "período fechado para revisão" },
      ],
    },
    advisor: {
      title: "Controle contábil",
      text: "A separação entre caixa e competência é uma modelagem do produto; o enquadramento aplicável requer validação contábil.",
    },
  },
  {
    id: "estoque",
    label: "Estoque",
    eyebrow: "INVENTÁRIO",
    headline: "Custo e quantidade por origem e destino.",
    description:
      "Compras formam lotes e custo médio; transferências mantêm a visão do estoque próprio, em trânsito e distribuído.",
    modules: ["Produtos", "Fornecedores", "Compras", "Lotes", "Custo médio", "Em trânsito", "Full", "Transferências"],
    metrics: [
      { label: "Unidades totais", value: "1.284", note: "3 localizações", tone: "neutral" },
      { label: "Estoque próprio", value: "746", note: "disponível", tone: "up" },
      { label: "Distribuído", value: "496", note: "centro logístico", tone: "neutral" },
      { label: "Em trânsito", value: "42", note: "2 transferências", tone: "attention" },
    ],
    panel: {
      title: "Distribuição do inventário",
      subtitle: "unidades por estágio",
      bars: [
        { label: "Próprio", value: 78, amount: "746", color: "#1877f2" },
        { label: "Distribuído", value: 52, amount: "496", color: "#12365d" },
        { label: "Em trânsito", value: 16, amount: "42", color: "#ff7a1a" },
        { label: "Em revisão", value: 6, amount: "8", color: "#d94b55" },
      ],
    },
    table: {
      title: "Produtos e lotes",
      subtitle: "amostra sintética",
      columns: ["Produto", "Lote", "Custo médio", "Disponibilidade"],
      rows: [
        ["Organizador modular", "LOTE-024", "R$ 38,40", { label: "Saudável", status: "good" }],
        ["Luminária compacta", "LOTE-021", "R$ 52,10", { label: "Repor", status: "warn" }],
        ["Suporte articulado", "LOTE-018", "R$ 29,70", { label: "Em trânsito", status: "info" }],
      ],
    },
    signals: {
      title: "Fluxo de suprimento",
      items: [
        { icon: "F", color: "", title: "Fornecedores", detail: "cadastro e histórico de compras" },
        { icon: "L", color: "green", title: "Lotes", detail: "custos vinculados à entrada" },
        { icon: "T", color: "orange", title: "Transferências", detail: "reconciliação entre locais" },
      ],
    },
    advisor: {
      title: "Alerta de reposição",
      text: "A luminária compacta está próxima do nível planejado. O alerta usa somente valores demonstrativos.",
    },
  },
  {
    id: "marketplace",
    label: "Marketplace",
    eyebrow: "COMERCIAL",
    headline: "Venda, margem e exposição conectadas.",
    description:
      "Contas, pedidos, anúncios, promoções, Ads, ranking e viabilidade compartilham o mesmo contexto comercial.",
    modules: ["Contas", "Vendas", "Anúncios", "Promoções", "Atacado", "Viabilidade", "Ads", "Ranking"],
    metrics: [
      { label: "Vendas no período", value: "326", note: "pedidos sintéticos", tone: "up" },
      { label: "Margem média", value: "18,6%", note: "após custos simulados", tone: "neutral" },
      { label: "Anúncios ativos", value: "84", note: "2 contas", tone: "neutral" },
      { label: "Oportunidades", value: "5", note: "Ads, preço e ranking", tone: "attention" },
    ],
    panel: {
      title: "Saúde comercial",
      subtitle: "indicadores normalizados",
      bars: [
        { label: "Conversão", value: 74, amount: "3,8%", color: "#1877f2" },
        { label: "Margem", value: 62, amount: "18,6%", color: "#1f9d67" },
        { label: "Ads", value: 48, amount: "8,2x", color: "#ff7a1a" },
        { label: "Ranking", value: 81, amount: "p. 3", color: "#12365d" },
        { label: "Estoque", value: 68, amount: "21 d", color: "#7a8798" },
      ],
    },
    table: {
      title: "Anúncios em decisão",
      subtitle: "preço, mídia e viabilidade",
      columns: ["Anúncio", "Venda", "Margem", "Leitura"],
      rows: [
        ["DEMO-AN-341", "R$ 149,90", "21,4%", { label: "Escalar", status: "good" }],
        ["DEMO-AN-286", "R$ 89,90", "12,1%", { label: "Recalcular", status: "warn" }],
        ["DEMO-AN-117", "R$ 219,90", "18,9%", { label: "Monitorar", status: "info" }],
      ],
    },
    signals: {
      title: "Camadas comerciais",
      items: [
        { icon: "V", color: "green", title: "Viabilidade", detail: "clássico e premium comparados" },
        { icon: "A", color: "orange", title: "Ads", detail: "período e unidade preservados" },
        { icon: "R", color: "", title: "Ranking", detail: "posição conectada ao anúncio" },
      ],
    },
    advisor: {
      title: "Radar de oportunidade",
      text: "O anúncio DEMO-AN-286 pede recálculo: a margem sintética ficou abaixo do cenário planejado.",
    },
  },
  {
    id: "posvenda",
    label: "Pós-venda",
    eyebrow: "EXCEÇÕES",
    headline: "Cada devolução com efeito financeiro e físico.",
    description:
      "Reclamações e devoluções seguem uma trilha única até a recuperação, perda ou revisão humana.",
    modules: ["Reclamações", "Devoluções", "Rastreamento", "Recuperações", "Estoque", "Revisão humana"],
    metrics: [
      { label: "Casos abertos", value: "7", note: "3 exigem ação", tone: "attention" },
      { label: "Em transporte", value: "3", note: "retorno acompanhado", tone: "neutral" },
      { label: "Recuperados", value: "R$ 4.280", note: "período demonstrativo", tone: "up" },
      { label: "Revisão manual", value: "2", note: "condição incerta", tone: "attention" },
    ],
    panel: {
      title: "Etapas do pós-venda",
      subtitle: "casos em cada estágio",
      bars: [
        { label: "Reclamação", value: 48, amount: "4", color: "#ff7a1a" },
        { label: "Em retorno", value: 36, amount: "3", color: "#1877f2" },
        { label: "Recebido", value: 24, amount: "2", color: "#12365d" },
        { label: "Revisão", value: 24, amount: "2", color: "#d94b55" },
        { label: "Concluído", value: 72, amount: "6", color: "#1f9d67" },
      ],
    },
    table: {
      title: "Fila de devoluções",
      subtitle: "efeito reconciliado",
      columns: ["Caso", "Condição", "Efeito no estoque", "Tratamento"],
      rows: [
        ["DEMO-RET-103", "Vendável", "Reconciliado", { label: "Concluído", status: "good" }],
        ["DEMO-RET-108", "Danificado", "Sem entrada", { label: "Manual", status: "risk" }],
        ["DEMO-RET-112", "A confirmar", "Aguardando", { label: "Em revisão", status: "warn" }],
      ],
    },
    signals: {
      title: "Controles",
      items: [
        { icon: "✓", color: "green", title: "Reconciliação", detail: "controle contra segunda entrada" },
        { icon: "↻", color: "", title: "Rastreamento", detail: "etapa logística atualizada" },
        { icon: "!", color: "orange", title: "Revisão humana", detail: "dano ou evidência incompleta" },
      ],
    },
    advisor: {
      title: "Limite da automação",
      text: "O caso DEMO-RET-108 permanece manual: a condição do item não autoriza retorno automático ao estoque.",
    },
  },
];

const productNav = document.querySelector("#product-nav");
const productView = document.querySelector("#product-view");
const productTitle = document.querySelector("#product-title");
const productEyebrow = document.querySelector("#product-eyebrow");

function renderNav() {
  productNav.innerHTML = views
    .map(function (view) {
      return (
        '<a href="#erp-' +
        view.id +
        '" data-product-view="' +
        view.id +
        '">' +
        icons[view.id] +
        "<span>" +
        view.label +
        "</span></a>"
      );
    })
    .join("");
}

function renderMetrics(metrics) {
  return metrics
    .map(function (metric) {
      return (
        '<article class="metric-card">' +
        "<small>" +
        metric.label +
        "</small>" +
        "<strong>" +
        metric.value +
        "</strong>" +
        '<em class="trend-' +
        metric.tone +
        '">' +
        metric.note +
        "</em>" +
        "</article>"
      );
    })
    .join("");
}

function renderBars(panel) {
  return panel.bars
    .map(function (bar) {
      return (
        '<div class="bar-row">' +
        "<span>" +
        bar.label +
        "</span>" +
        '<div class="bar-track"><div class="bar-fill" style="--value:' +
        bar.value +
        "%;--bar-color:" +
        (bar.color || "#1877f2") +
        '"></div></div>' +
        "<strong>" +
        bar.amount +
        "</strong>" +
        "</div>"
      );
    })
    .join("");
}

function renderCell(cell) {
  if (typeof cell === "object") {
    return '<span class="status ' + cell.status + '">' + cell.label + "</span>";
  }
  return cell;
}

function renderTable(table) {
  const headings = table.columns
    .map(function (column) {
      return "<th>" + column + "</th>";
    })
    .join("");
  const rows = table.rows
    .map(function (row) {
      return (
        "<tr>" +
        row
          .map(function (cell) {
            return "<td>" + renderCell(cell) + "</td>";
          })
          .join("") +
        "</tr>"
      );
    })
    .join("");

  return (
    '<section class="panel">' +
    '<div class="panel-head"><strong>' +
    table.title +
    "</strong><span>" +
    table.subtitle +
    "</span></div>" +
    '<div class="table-wrap"><table class="data-table"><thead><tr>' +
    headings +
    "</tr></thead><tbody>" +
    rows +
    "</tbody></table></div></section>"
  );
}

function renderSignals(signals) {
  const items = signals.items
    .map(function (item) {
      return (
        '<div class="signal-item">' +
        '<span class="signal-icon ' +
        item.color +
        '">' +
        item.icon +
        "</span>" +
        "<div><strong>" +
        item.title +
        "</strong><span>" +
        item.detail +
        "</span></div></div>"
      );
    })
    .join("");

  return (
    '<section class="panel"><div class="panel-head"><strong>' +
    signals.title +
    '</strong><span>agora</span></div><div class="signal-list">' +
    items +
    "</div></section>"
  );
}

function renderView(view) {
  const modules = view.modules
    .map(function (module) {
      return "<span>" + module + "</span>";
    })
    .join("");

  productTitle.textContent = view.label;
  productEyebrow.textContent = view.eyebrow;
  productView.innerHTML =
    '<div class="view-intro"><div><h3>' +
    view.headline +
    "</h3><p>" +
    view.description +
    '</p></div><span class="view-date">Hoje · cenário sintético</span></div>' +
    '<div class="module-pills" aria-label="Módulos desta área">' +
    modules +
    "</div>" +
    '<div class="metrics-grid">' +
    renderMetrics(view.metrics) +
    "</div>" +
    '<div class="view-grid"><div><section class="panel">' +
    '<div class="panel-head"><strong>' +
    view.panel.title +
    "</strong><span>" +
    view.panel.subtitle +
    '</span></div><div class="bar-list">' +
    renderBars(view.panel) +
    "</div></section>" +
    renderTable(view.table) +
    '</div><aside class="side-stack">' +
    renderSignals(view.signals) +
    '<section class="panel advisor-card"><small>INTELIGÊNCIA CONTEXTUAL</small><strong>' +
    view.advisor.title +
    "</strong><p>" +
    view.advisor.text +
    "</p></section></aside></div>";

  document.querySelectorAll("[data-product-view]").forEach(function (link) {
    const current = link.dataset.productView === view.id;
    if (current) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function viewFromHash() {
  const id = window.location.hash.replace("#erp-", "");
  return views.find(function (view) {
    return view.id === id;
  });
}

function activate(view, updateAddress) {
  renderView(view);
  if (updateAddress) {
    window.history.replaceState(null, "", "#erp-" + view.id);
  }
}

renderNav();
activate(viewFromHash() || views[0], false);

productNav.addEventListener("click", function (event) {
  const link = event.target.closest("[data-product-view]");
  if (!link) return;
  event.preventDefault();
  const view = views.find(function (item) {
    return item.id === link.dataset.productView;
  });
  if (view) activate(view, true);
});

window.addEventListener("hashchange", function () {
  const view = viewFromHash();
  if (view) activate(view, false);
});
