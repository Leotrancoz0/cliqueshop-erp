# Módulos do CliqueShop ERP

[English version](../MODULES.md)

Este documento apresenta o inventário funcional do produto em nível público. Ele explica responsabilidades e jornadas sem revelar regras proprietárias, contratos de integração, parâmetros comerciais ou dados operacionais.

## Início

| Capacidade | Responsabilidade |
| --- | --- |
| Prioridades | reunir eventos que exigem ação e colocá-los antes dos relatórios |
| Indicadores | oferecer leitura resumida de resultado, caixa, estoque e liberações |
| Valores a liberar | contextualizar recebimentos futuros sem tratá-los como caixa disponível |
| Notificações | apresentar alertas acionáveis e evitar repetição desnecessária |
| Movimentações | dar acesso rápido aos eventos financeiros e operacionais recentes |

## Operação

| Capacidade | Responsabilidade |
| --- | --- |
| Tarefas | vincular trabalho a produtos, lotes, eventos ou decisões do ERP |
| Agenda | organizar vencimentos e compromissos da equipe |
| Checklists | decompor processos sem criar múltiplas telas ou controles redundantes |
| Recorrências | gerar rotinas previsíveis e manter sua execução rastreável |
| Alertas | comunicar exceções com deduplicação e tentativas controladas |
| Telegram | levar resumos e alertas a um canal operacional autorizado |
| Advisor | apresentar recomendações sintéticas com evidência e contexto |
| Cadastros | organizar entidades administrativas necessárias aos fluxos |
| Acessos | restringir administração e capacidades conforme autorização |

## Financeiro

| Capacidade | Responsabilidade |
| --- | --- |
| Caixa | registrar entradas e saídas no momento financeiro correspondente |
| DRE | apresentar receitas, custos e despesas pelo recorte de competência |
| Conciliação | relacionar registros internos a documentos e eventos financeiros |
| Recorrências | programar movimentos previsíveis e reduzir lançamentos repetidos |
| Venda direta | registrar operações fora do fluxo principal do marketplace |
| Relatórios | fechar períodos e oferecer visão auditável dos dados consolidados |

O sistema modela caixa e competência separadamente. O enquadramento contábil aplicável à empresa permanece sujeito à validação profissional correspondente.

## Estoque

| Capacidade | Responsabilidade |
| --- | --- |
| Produtos | centralizar cadastro, identificação e informações essenciais do item |
| Fornecedores | relacionar origens de compra sem expor condições comerciais reais |
| Compras | formar entradas de mercadoria e seus custos associados |
| Lotes | preservar a origem dos itens e o encadeamento de custos |
| Custo médio | recalcular o custo conforme eventos elegíveis de entrada e ajuste |
| Em trânsito | separar quantidade enviada de quantidade já recebida |
| Distribuído | acompanhar unidades fora do estoque próprio |
| Transferências | reconciliar movimentos entre localizações sem criar estoque duplicado |

## Marketplace

| Capacidade | Responsabilidade |
| --- | --- |
| Contas | organizar contextos comerciais autorizados |
| Vendas | normalizar pedidos, tarifas, fretes e efeitos financeiros |
| Anúncios | relacionar catálogo, preço, estoque e desempenho |
| Promoções | avaliar participação e impacto comercial em contexto |
| Atacado | apoiar cenários de preço e quantidade para negociação |
| Viabilidade | comparar custo, venda e despesas em cenários demonstrativos |
| Ads | acompanhar períodos e unidades de mídia sem alterar seu significado |
| Ranking | relacionar posição de busca, anúncio e oportunidade comercial |

A edição pública não contém OAuth, payloads, endpoints, janelas de sincronização, chaves de deduplicação, parâmetros reais de tarifa nem código de extensão.

## Pós-venda

| Capacidade | Responsabilidade |
| --- | --- |
| Reclamações | registrar o início do caso e seu contexto comercial |
| Devoluções | acompanhar etapas logísticas e decisões relacionadas ao item |
| Rastreamento | manter o estágio de retorno visível para a operação |
| Recuperações | registrar valores recuperados e perdas relacionadas |
| Efeito no estoque | reconciliar somente itens efetivamente recebidos e vendáveis |
| Revisão humana | preservar casos danificados, contraditórios ou sem evidência suficiente |

Nos cenários elegíveis cobertos por regressão, os controles evitam uma segunda entrada do mesmo retorno. Isso não significa que todo caso seja concluído automaticamente.

## Capacidades transversais

- autenticação e autorização no servidor;
- rotinas agendadas e processamento incremental;
- alertas com deduplicação e nova tentativa controlada;
- trilha de eventos para conciliação;
- importações e exportações aplicáveis aos fluxos;
- advisor e radar de oportunidades com informações contextualizadas;
- interface responsiva orientada à próxima ação.

## O que permanece privado

- código-fonte do ERP e da extensão;
- banco de dados, dumps, backups, planilhas e documentos operacionais;
- credenciais, tokens, domínios, IPs e topologia;
- contratos de API, payloads, parsers e estratégias de sincronização;
- fórmulas completas, thresholds, prompts e regras comerciais;
- dados de usuários, clientes, fornecedores, vendas, custos e campanhas;
- indicadores e resultados de produção.
