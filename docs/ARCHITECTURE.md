# Arquitetura e limites públicos

## Objetivo

O CliqueShop ERP transforma eventos financeiros, comerciais, logísticos e operacionais em uma visão contextual. Esta documentação descreve responsabilidades arquiteturais sem reproduzir a implementação proprietária.

## Fluxo conceitual

~~~text
Origens autorizadas
        ↓
Integração e normalização
        ↓
Regras de domínio e reconciliação
        ↓
Persistência transacional
        ↓
Workspace, relatórios, alertas e rotinas
~~~

### Origens autorizadas

Eventos podem vir de plataformas de marketplace, documentos financeiros e ações operacionais. Credenciais e configurações pertencem ao ambiente privado.

### Integração e normalização

A camada de integração converte fontes diferentes em eventos que o domínio consegue processar. Sincronizações relevantes usam controles contra repetição, além de trilhas de execução e tratamento de falhas.

### Regras de domínio

O domínio concentra responsabilidades financeiras, de inventário, venda e pós-venda. As regras distinguem evento registrado, cálculo derivado e decisão que ainda depende de evidência humana.

### Persistência

O produto usa PostgreSQL como persistência relacional no ambiente moderno. Estrutura de tabelas, migrações, índices e detalhes de implantação não são expostos neste portfólio.

### Entrega ao usuário

O workspace autenticado apresenta indicadores, filas de decisão, relatórios e ações contextuais. Alertas e processos agendados atuam como extensões do mesmo domínio.

## Garantias arquiteturais comunicáveis

- credenciais permanecem no servidor;
- autorização relevante também é aplicada na API;
- sincronizações importantes possuem controles de idempotência;
- eventos financeiros preservam seus recortes de caixa e competência;
- movimentos de inventário passam por reconciliação;
- casos de pós-venda incertos permanecem em revisão humana;
- alertas evitam repetição não intencional;
- dados públicos da demonstração são sintéticos desde a origem.

Esses itens descrevem objetivos e cenários cobertos. Não constituem certificação externa de segurança, contabilidade ou disponibilidade.

## Stack em alto nível

| Camada | Tecnologia pública |
| --- | --- |
| Aplicação | Python e Django |
| Persistência | PostgreSQL |
| Interface | HTML, JavaScript e CSS |
| Execução | containers e processos agendados |
| Integrações | APIs das plataformas, sob credenciais privadas |

## Fronteira entre portfólio e produto

O diretório público é um projeto independente. Ele não importa módulos, fixtures, templates, assets ou configurações do repositório privado. Toda tela demonstrativa é construída com conteúdo fictício.

Não fazem parte da arquitetura pública:

- endpoints e domínios do produto;
- desenho de rede e topologia de containers;
- nomes de serviços, caminhos ou rotinas de backup;
- contratos, payloads e códigos de integração;
- chaves de idempotência ou deduplicação;
- regras completas de custo, tarifa, promoção, Ads ou devolução;
- prompts, ferramentas e thresholds do advisor;
- matriz interna de permissões.

## Gate recomendado para publicação

1. Verificar extensão e tipo de todos os arquivos.
2. Procurar PII, segredos, IPs, caminhos internos e domínios produtivos.
3. Bloquear bancos, dumps, arquivos de ambiente, documentos, logs e arquivos compactados.
4. Verificar que o mock não usa rede, cookies ou armazenamento local.
5. Percorrer as seis visões em desktop, tablet e celular.
6. Confirmar autorização de nome, marca e ativos visuais.
7. Publicar somente após aprovação humana explícita.
