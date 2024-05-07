Expressões Regulares em um Formulário de Contato

Esse formulário de contato é simples e usa expressões regulares para validar os campos de entrada. 
Os padrões de texto das expressões regulares descrevem um conjunto de strings possíveis de forma concisa e flexível. 
Elas garantem que os dados inseridos nos campos atendam aos critérios específicos neste projeto.

Validação do campo Nome:

/^[^\d]+$/

Esta expressão regular garante que o campo Nome contenha apenas letras e espaços, excluindo qualquer número.
Aqui está uma explicação detalhada dos componentes:

^: Indica onde a string começa.

[^\d]: Crie uma classe de caracteres negados, garantindo que não haja nenhum dígito (número) nesta posição.

+: Significa que a classe de caracteres [^\d] deve aparecer uma ou mais vezes.

$: O final da string.

Validação do campo Telefone com DDD:

/^\(\d{2}\) \d{4,5}-\d{4}$/

Essa expressão regular verifica se um número de telefone com DDD está no formato (xx) xxxx-xxxx ou (xx) xxxxx-xxxx, onde x é um dígito.
Aqui está uma explicação detalhada dos componentes:

^: Pode indicar onde a string começa

\(: É igual ao carácter de parêntese aberto literal (.

\d{2}: Representa exatamente dois dígitos correspondendo ao DDD.

\): Representa o fechamento literal do parêntese ).

: É equivalente a um espaço vazio.

\d{4,5}: Representa quatro ou cinco dígitos correspondentes ao prefixo do número de telefone.

-: O hífen - corresponde ao caractere literal.

\d{4}: Representa um sufixo de número de telefone com precisão em quatro dígitos.

$: Indica o final da sequência de caracteres.

A validação correta dos dados inseridos nos campos do formulário é essencial e para isso as expressões regulares são fundamentais.
