# SIM Consultas Next.js Template

# Ferramentas utilizadas

- [Next.js](https://nextjs.org/docs)
- [Ant Design](https://ant.design/)
- [Typescript](https://www.typescriptlang.org/)
- [Prettier](https://prettier.io/)
- [EsLint](https://eslint.org)
- [StyledComponents](https://styled-components.com/)
- [Yarn](https://classic.yarnpkg.com)
- [Axios](https://github.com/axios/axios)
- [Js-Cookie](https://github.com/js-cookie/js-cookie)
- [React-Number-Format](https://github.com/s-yadav/react-number-format)
- [next-compose-plugins](https://github.com/cyrilwanner/next-compose-plugins)
- [Serverless](https://www.serverless.com)

## Iniciando

### Instalando dependências

```bash
yarn
```

### Executar servidor em development

```bash
yarn dev
#localhost:3000
```

### Executar bundle analyzer

```bash
yarn analyze
```

### Iniciar JSON Server

```bash
yarn db
```

## Deploy em Amazon Cloudfront

1. [Instalar Serverless cli](https://www.serverless.com/framework/docs/providers/aws/cli-reference/install/)

```bash
yarn global add serverless
```

2. [Configurar credenciais aws](https://www.serverless.com/framework/docs/providers/aws/cli-reference/config-credentials/)

```bash
serverless config credentials --provider aws --key key --secret secret
```

3. Configurar arquivo serverless.yml

4. Publicar

```bash
serverless
```
