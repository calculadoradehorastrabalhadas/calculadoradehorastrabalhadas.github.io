+++
title = "Calculadora de Horas Trabalhadas"
description = "Calcule horas trabalhadas com entrada, saída e intervalos. Aprenda sobre jornadas, horas extras e banco de horas com exemplos claros e fontes confiáveis."
date = "2026-10-12"
lastmod = "2026-10-12"
author = "Equipe editorial"
draft = false
+++

<p class="eyebrow">Ferramenta gratuita para o dia a dia</p>
<section class="hero">
  <h1>Calculadora de Horas Trabalhadas</h1>
  <p class="lead">Calcule a duração do seu expediente, desconte intervalos e consulte guias práticos sobre jornada de trabalho no Brasil.</p>
</section>

<section class="calculator" id="calculadora" aria-labelledby="titulo-calculadora">
  <h2 id="titulo-calculadora">Calcule suas horas trabalhadas</h2>
  <p>Informe os horários do período. Se houver dois períodos de trabalho, preencha também o segundo par de horários.</p>
  <form data-calculator>
    <div class="form-grid">
      <div class="field"><label for="start">Horário de entrada</label><input id="start" name="start" type="time" required></div>
      <div class="field"><label for="end">Horário de saída</label><input id="end" name="end" type="time" required></div>
      <div class="field"><label for="secondStart">Entrada do segundo período (opcional)</label><input id="secondStart" name="secondStart" type="time"></div>
      <div class="field"><label for="secondEnd">Saída do segundo período (opcional)</label><input id="secondEnd" name="secondEnd" type="time"></div>
      <div class="field"><label for="breakMinutes">Intervalo total a descontar (minutos)</label><input id="breakMinutes" name="breakMinutes" type="number" min="0" max="1440" step="1" value="0"></div>
    </div>
    <div class="button-row">
      <button class="button" type="submit">Calcular horas</button>
      <button class="button secondary" type="button" data-clear>Limpar</button>
    </div>
  </form>
  <div class="result" data-result role="status" aria-live="polite" hidden>
    <span>Tempo calculado</span><br><strong data-result-value>—</strong>
    <p data-result-message></p>
    <button class="button secondary" type="button" data-copy>Copiar resultado</button>
  </div>
  <p class="meta-line">A calculadora informa a duração dos horários preenchidos. Regras de jornada, intervalos e remuneração podem variar conforme o vínculo e a legislação aplicável.</p>
</section>

<div class="content">
<h2>Como calcular horas trabalhadas</h2>
<p>Para calcular a duração de um expediente, subtraia o horário de entrada do horário de saída e desconte os intervalos que não contam como tempo trabalhado. Quando o expediente atravessa a meia-noite, o cálculo precisa considerar a mudança de dia.</p>
<p><strong>Exemplo:</strong> das 8h às 17h são 9 horas de permanência. Se houver 1 hora de intervalo a descontar, o total calculado será de 8 horas. Use a calculadora acima para testar outros horários.</p>

<h2>Guias para entender sua jornada</h2>
</div>
<div class="card-grid">
  <article class="card"><h3><a href="/como-calcular-horas-trabalhadas/">Como calcular horas trabalhadas</a></h3><p>Entenda a fórmula, o intervalo e os exemplos mais comuns.</p></article>
  <article class="card"><h3><a href="/como-calcular-horas-extras/">Como calcular horas extras</a></h3><p>Veja como organizar os dados antes de estimar horas excedentes.</p></article>
  <article class="card"><h3><a href="/como-calcular-banco-de-horas/">Como calcular banco de horas</a></h3><p>Aprenda a interpretar créditos, débitos e saldo acumulado.</p></article>
  <article class="card"><h3><a href="/calculo-de-horas-noturnas/">Cálculo de horas noturnas</a></h3><p>Conheça conceitos que podem influenciar o cálculo noturno.</p></article>
  <article class="card"><h3><a href="/glossario/">Glossário de jornada de trabalho</a></h3><p>Consulte definições de termos usados em controle de ponto.</p></article>
  <article class="card"><h3><a href="/exemplos-de-jornada/">Exemplos de jornada</a></h3><p>Compare cenários de horários, intervalos e escalas.</p></article>
</div>

<section class="section content">

## O que são horas trabalhadas e por que o cálculo importa

As [horas trabalhadas](/glossario/horas-trabalhadas/) representam o tempo em que o trabalhador está efetivamente à disposição do empregador, excluídos os períodos de intervalo que não integram o cômputo da [jornada de trabalho](/glossario/jornada-de-trabalho/). Parece uma definição simples, mas na prática envolve uma série de variáveis: o horário exato de entrada e de saída, o tipo de intervalo descontado, o regime de trabalho contratado e as normas coletivas que regem a categoria.

Saber calcular as próprias horas é mais do que uma curiosidade. É uma habilidade prática que permite ao trabalhador verificar se o que consta no holerite corresponde ao que foi registrado, identificar divergências antes do fechamento do mês e ter dados concretos em mãos ao conversar com o RH. Em vez de depender apenas da palavra do outro lado, você pode apresentar os números.

A ferramenta nesta página calcula a duração cronológica com base nos horários informados. Ela não aplica regras de jornada, adicional ou compensação — esses elementos dependem das normas específicas do vínculo e estão explicados nos guias e no glossário.

## A fórmula básica de cálculo

O raciocínio fundamental não muda independentemente do tipo de expediente:

**Horas trabalhadas = horário de saída − horário de entrada − intervalos a descontar**

Se você trabalhou das 8h às 17h com uma hora de [intervalo para almoço](/glossario/intervalo-para-almoco/), o total é:

- Permanência bruta: 17h − 8h = 9 horas
- Desconto do intervalo: 1 hora
- **Total líquido: 8 horas**

Essa é a estrutura de uma [jornada normal](/glossario/jornada-normal/) padrão — 8 horas diárias, que em cinco dias resulta em 40 horas semanais, dentro do limite de 44 horas previsto pela legislação para a [jornada semanal](/glossario/jornada-semanal/).

O ponto que mais gera erros é o [intervalo intrajornada](/glossario/intervalo-intrajornada/): a pausa que ocorre dentro do expediente e que, em geral, não é contabilizada como tempo trabalhado. Informar esse intervalo corretamente na calculadora é o que transforma a permanência bruta no total real.

## Expedientes que atravessam a meia-noite

Quando a saída ocorre depois da meia-noite — como em turnos que começam à noite e terminam de manhã —, o cálculo simples de saída menos entrada produziria um número negativo. A solução é adicionar 24 horas ao horário de saída antes de subtrair.

Exemplo: entrada às 22h, saída às 6h.
- Saída ajustada: 6h + 24h = 30h
- Permanência bruta: 30h − 22h = 8 horas

Esses turnos têm particularidades. O [trabalho noturno](/glossario/trabalho-noturno/) — período entre 22h e 5h para trabalhadores urbanos — pode dar direito ao [adicional noturno](/glossario/adicional-noturno/), cujo percentual varia conforme a [CLT](/glossario/clt/) e os instrumentos coletivos da categoria. A calculadora informa a duração; as regras de remuneração precisam ser verificadas à parte.

## Intervalos: o que entra e o que não entra

Nem todo tempo fora da atividade imediata é descontável. O [registro de ponto](/glossario/registro-de-ponto/) deve refletir as marcações reais, mas o que é descontado do total depende do que está previsto no contrato e nas normas aplicáveis.

O intervalo para almoço é o desconto mais comum. O [cartão de ponto](/glossario/cartao-de-ponto/) e a [folha de ponto](/glossario/folha-de-ponto/) consolidam esses registros e permitem verificar se o desconto aplicado coincide com o que foi efetivamente pausado. Há situações em que o trabalhador retorna antes do intervalo terminar, ou em que o intervalo é reduzido por necessidade da operação — nesses casos, as regras sobre o que pode ou não ser descontado merecem atenção especial.

O [saldo de horas](/glossario/saldo-de-horas/) acumulado ao longo do mês revela a diferença entre o total trabalhado e o total previsto. Um saldo positivo indica horas a mais; um saldo negativo indica horas a menos em relação à carga contratada.

## Horas extras: o que são e como identificar

Quando o total trabalhado supera o limite previsto para o dia ou a semana, surgem as [horas extras](/glossario/horas-extras/). Identificá-las exige dois números: o total real registrado e a jornada de referência estabelecida no contrato ou na norma coletiva.

Nem toda hora trabalhada além do horário habitual é automaticamente hora extra remunerada. Pode haver um [banco de horas](/glossario/banco-de-horas/) formalizado, que transforma o excedente em crédito a ser compensado com folgas futuras em vez de pagamento. As condições desse mecanismo — prazo, limite de acúmulo, forma de compensação — precisam estar previstas em instrumento formal.

Para escalas especiais como a [escala 12x36](/glossario/escala-12x36/), a lógica de identificação de excedentes é diferente da jornada convencional e depende das regras do acordo coletivo que ampara o regime.

## Controle de jornada: por que acompanhar regularmente

Acompanhar a própria jornada ao longo do mês — e não apenas no fechamento — é uma prática que evita surpresas. O [controle de jornada](/glossario/controle-de-jornada/) pode ser feito pelo trabalhador de forma simples: registrando as marcações diárias e comparando periodicamente com o que consta no sistema da empresa.

O [valor da hora trabalhada](/glossario/valor-da-hora-trabalhada/) é um elemento central para entender o impacto financeiro de qualquer diferença. Calculado a partir do salário mensal dividido pelo total de horas esperadas no mês, esse número é a base sobre a qual adicionais e compensações incidem.

O [descanso semanal remunerado](/glossario/descanso-semanal-remunerado/) e as regras de [hora noturna](/glossario/hora-noturna/) são componentes que afetam tanto o cálculo da jornada quanto a remuneração. Em caso de dúvidas específicas, o [glossário de jornada de trabalho](/glossario/) desta ferramenta reúne definições objetivas dos termos mais usados no controle de ponto e na legislação trabalhista.

Para situações que envolvem feriados, o [trabalho em feriados](/glossario/trabalho-em-feriados/) tem regras próprias que dependem da categoria e do instrumento coletivo. Em nenhum desses casos a calculadora substitui a verificação das normas aplicáveis ao vínculo — ela é o ponto de partida, não o ponto final.

## Perguntas frequentes

<h3>Como descontar o horário de almoço?</h3>
<p>Informe o intervalo total em minutos no campo específico. O resultado subtrai esse tempo da duração calculada. Se o intervalo for de 1 hora, informe 60 minutos. Se for de 45 minutos, informe 45. O campo aceita qualquer valor inteiro.</p>

<h3>Posso calcular um turno que termina no dia seguinte?</h3>
<p>Sim. Quando a saída é anterior à entrada, a ferramenta considera que o período atravessou a meia-noite e ajusta o cálculo automaticamente. Confira os horários informados para evitar resultados inesperados — uma entrada de 22h e saída de 6h resultará em 8 horas brutas antes do desconto do intervalo.</p>

<h3>A calculadora calcula o valor do salário?</h3>
<p>Não. Ela calcula duração em horas e minutos. Estimar remuneração exige informações adicionais — valor da hora, adicionais aplicáveis, descontos previstos no vínculo — e a aplicação das regras pertinentes ao caso. Para entender como esses cálculos funcionam, consulte os guias disponíveis nesta página.</p>

<h3>Onde encontro os termos usados no controle de ponto?</h3>
<p>Acesse o <a href="/glossario/">glossário de jornada de trabalho</a> para consultar definições e fontes de referência de todos os termos relacionados à jornada, intervalos, escalas e registros de ponto.</p>

<h3>Pausas curtas durante o expediente são descontadas?</h3>
<p>Depende. Pausas muito curtas — de 5 a 10 minutos — em muitos casos não são descontadas e integram o tempo trabalhado. O que é ou não descontado deve estar previsto no contrato ou nas normas coletivas da categoria. Informe no campo de intervalo apenas os minutos que efetivamente devem ser descontados conforme as regras do seu vínculo.</p>

<h3>O que é horário comercial e quem se enquadra?</h3>
<p>O <a href="/glossario/horario-comercial/">horário comercial</a> é o expediente padrão de escritórios e comércio — tipicamente das 8h ou 9h às 17h ou 18h, com uma hora de almoço. É a referência mais comum, mas muitos trabalhadores operam em regimes diferentes: turnos noturnos, escalas de revezamento, jornadas parciais ou flexíveis. Use a calculadora para qualquer combinação de horários, independentemente do modelo.</p>

</section>
