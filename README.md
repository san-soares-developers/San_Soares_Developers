# 🏢 San Soares Developers • Central Global Core

### 🌐 Website Institucional e Portfólio Corporativo da Holding SaaS

Este repositório abriga o ecossistema web oficial e institucional da **San Soares Developers**, implantado em alta disponibilidade via Vercel Edge Network. O portal serve como canal de posicionamento de marca, apresentação de soluções B2B e captação de clientes para redes de franquias.

---

### 🪓 Diferenciais de Engenharia de Nossas Soluções (SaaS Engine v2.0):

* **Isolamento Multitenant Nativo (UUID):** Segregação lógica implacável rodando na camada de persistência através de chaves criptográficas universais (UUID), garantindo que bases de dados de faturamento, estoque e PDV de diferentes franqueados operem em ambientes 100% estanques e seguros.
* **Conformidade Fiscal de Pessoa Jurídica (SRP):** Engenharia orientada ao princípio de Responsabilidade Única, isolando metadados corporativos (CNPJ, Razão Social, Regime Tributário, Inscrição Estadual e Municipal) da camada de acessos operacionais de balcão.
* **Central de Auditoria Contratual e LGPD:** Módulo inteligente responsável por reter o histórico imutável de aceites de termos de serviço, salvando logs de IP, User-Agent e carimbo de data/hora (Timestamp) para blindagem jurídica completa da holding e de seus parceiros comerciais.
* **Orquestração por Eventos Automatizados:** Barramento pronto para automação brutal de fluxos e webhooks de atendimento e vendas utilizando n8n local e a API Cloud oficial da Meta.

---

### 🛠️ Core Stack Tecnológico Homologado:

* **Apresentação & Portal:** Next.js • React • Tailwind CSS • Vercel Deployment
* **Motores de Infraestrutura:** Java 21 • Spring Boot 3.x • Spring Security • PostgreSQL 17 Alpine • Docker Compose
