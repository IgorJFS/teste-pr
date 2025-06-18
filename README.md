# 🧪 Projeto de Teste de Pull Request com CI/CD

Este é um projeto simples feito em **Node.js + TypeScript + Express**, criado com o objetivo de testar **checks automáticos em Pull Requests (PRs)** utilizando **GitHub Actions**.

---

## 📌 Objetivo do projeto

- Simular o fluxo de um PR com **build**, **lint** e **testes** básicos.
- Garantir que o código só possa ser mesclado se passar por todos os **checks automáticos**.
- Testar a integração com amigos enviando PRs.

---

## 🚀 Como rodar o projeto localmente

1. Clone o repositório:

```bash
git clone https://github.com/IgorJFS/teste-pr.git
````

2. Instale as dependências:

```bash
npm install
```

3. Compile o TypeScript:

```bash
npm run build
```

4. Rode o servidor:

```bash
npm start
```

O servidor estará disponível em:
[http://localhost:3000](http://localhost:3000)

Você verá a mensagem:

```
<h1>Alguma mensagem vai estar aqui</h1>
```

---

## 🛠️ Scripts disponíveis

| Script          | O que faz                                             |
| --------------- | ----------------------------------------------------- |
| `npm run build` | Compila o TypeScript para JavaScript na pasta `dist/` |
| `npm start`     | Compila e executa o servidor                          |
| `npm run lint`  | (Simulado) Roda uma verificação de lint               |
| `npm test`      | (Simulado) Roda testes básicos                        |

---

## ✅ CI/CD (GitHub Actions)

Este repositório contém um workflow de CI/CD que é disparado automaticamente a cada **Pull Request**.

### Etapas do pipeline:

* Instalação de dependências
* Build do TypeScript
* Lint (simulado)
* Testes (simulados)

**Local do workflow:**
`.github/workflows/nodejs.yml`

---

## 🤝 Como contribuir para o teste

1. Faça um fork do projeto
2. Crie uma branch nova
3. Faça uma alteração simples (ex: troque o texto do `<h1>`)
4. Abra um Pull Request
5. Aguarde os checks passarem ✅

---

## 📢 Aviso

Este projeto é apenas para fins educacionais e de teste.
Não possui funcionalidades reais além da simulação de um fluxo de PR com CI.

---

🚀 Feito com ❤️ por Zackie e testado por Harumi e seu time de testes de PR.

```
