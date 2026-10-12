# Calculadora de Horas Trabalhadas

Projeto estático em Hugo para `https://calculadoradehorastrabalhadas.github.io/`.

## Conteúdo incluído
- Homepage com calculadora de horas e artigo introdutório.
- Hub de glossário e 53 páginas de termos.
- Guias de cálculo e exemplos.
- Páginas Sobre, Contato, Política de Privacidade e Termos de Uso.
- Layout responsivo com navbar/footer azuis, foco acessível e menu hamburger.
- Metadados, canonical, breadcrumbs, sitemap, robots.txt e JSON-LD.
- Workflow de build/deploy para GitHub Pages (não cria repositório).

## Requisitos antes de publicar
1. Instale Hugo Extended 0.147.9 ou compatível.
2. Rode `hugo --minify` e revise warnings.
3. A fonte Inter é carregada pelo Google Fonts nesta versão inicial. Para máxima independência e controle de performance, hospede WOFF2 localmente e ajuste `layouts/partials/head.html`.
4. Substitua o texto provisório de e-mail na página Contato.
5. Revise Política de Privacidade e Termos para os serviços realmente ativados.
6. Não habilite AdSense até obter aprovação e preencher `ads.txt`, client ID, slots e consentimento aplicável.
7. Faça revisão editorial e jurídica dos conteúdos trabalhistas antes de publicar.
8. Verifique descrições, URLs, links internos, schema e páginas geradas após build.
9. Teste Lighthouse e Core Web Vitals em ambiente real; 100/100 não pode ser garantido antecipadamente.

## Desenvolvimento local
```bash
hugo server -D
```

## Build
```bash
hugo --minify
```

## Importante sobre a calculadora
O cálculo é uma estimativa de duração com base nos horários informados. Se houver dois períodos, informe-os sem sobreposição e informe o intervalo total a descontar. A ferramenta não estima salários nem determina direitos trabalhistas.
