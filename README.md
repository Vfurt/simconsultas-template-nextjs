# SIM Consultas Next.js Template

# Ferramentas utilizadas
- [Next.js](https://nextjs.org/docs)
- [Ant Design](https://ant.design/)
- [Serverless](https://www.serverless.com)
- [Typescript](https://www.typescriptlang.org/)
- [prettier](https://prettier.io/)
- [EsLint](https://eslint.org)
- [Yarn](https://classic.yarnpkg.com)

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
