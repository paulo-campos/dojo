## Desafio TDD

> Precisamos de um cabeçalho que deve seguir as regras abaixo.

O cabeçalho deve:

- Poder receber um título dinâmico
- Poder receber uma cor dinâmica
- O cabeçalho não pode aparecer se não tiver título

Traduzindo pra nossa linguagem, criaremos um componente `Header`, e o componente deve:

- Poder receber um `children` o renderizar corretamente
- Poder receber uma propriedade `color` e com a mesma criar um background já existente nos estilos
- Se não receber um children, o Header não deve se renderizar
