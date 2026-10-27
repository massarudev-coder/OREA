# Oreas

Aplicativo de demonstração de uma loja de meteoritos, desenvolvido com Expo, React Native e Expo Router.

## Executar

```bash
npm install
npx expo start
```

Para validar o projeto:

```bash
npx expo lint
npx tsc --noEmit
```

## Estrutura

```text
app/
  (tabs)/             Catálogo e abas da loja
  produtos/           Rotas de detalhes dos produtos
  _layout.tsx          Navegação raiz
  index.tsx            Redirecionamento inicial para o login
  login.tsx            Tela de login demonstrativa
src/
  components/          Componentes reutilizáveis
  data/                Dados do catálogo
  types/               Tipos compartilhados
```

O Expo Router usa arquivos dentro de `app/` como rotas. Por isso, `app/index.tsx` e `app/(tabs)/index.tsx` são pontos de entrada, não arquivos duplicados. As oito telas em `app/produtos/` também são rotas distintas e reutilizam o componente de detalhes em `src/components/ProductDetails/`.

## Fluxo atual

- A rota inicial abre o login.
- O login é somente demonstrativo: qualquer e-mail e senha não vazios permitem acessar a loja.
- A vitrine apresenta busca, filtros de categoria e navegação para os detalhes.
- Favoritos, carrinho e perfil ainda são telas demonstrativas; não há persistência de dados nem autenticação conectada a um serviço.
