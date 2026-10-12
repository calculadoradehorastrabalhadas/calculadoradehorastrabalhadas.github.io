(() => {
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
  }

  const form = document.querySelector('[data-calculator]');
  if (!form) return;
  const result = document.querySelector('[data-result]');
  const output = document.querySelector('[data-result-value]');
  const message = document.querySelector('[data-result-message]');
  const toMinutes = (value) => {
    if (!value || !/^\d{2}:\d{2}$/.test(value)) return null;
    const [h, m] = value.split(':').map(Number);
    if (h > 23 || m > 59) return null;
    return h * 60 + m;
  };
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const start = toMinutes(form.elements.start.value);
    const end = toMinutes(form.elements.end.value);
    const breakMinutes = Math.max(0, Number(form.elements.breakMinutes.value || 0));
    const secondStartRaw = form.elements.secondStart.value;
    const secondEndRaw = form.elements.secondEnd.value;
    let total = 0;
    if (start === null || end === null) {
      message.textContent = 'Informe horários de entrada e saída válidos.';
      output.textContent = '—';
      result.hidden = false;
      return;
    }
    let firstEnd = end < start ? end + 1440 : end;
    total += firstEnd - start;
    if (Boolean(secondStartRaw) !== Boolean(secondEndRaw)) {
      message.textContent = 'Preencha os dois horários do segundo período ou deixe ambos vazios.';
      output.textContent = '—';
      result.hidden = false;
      return;
    }
    if (secondStartRaw && secondEndRaw) {
      const secondStart = toMinutes(secondStartRaw);
      const secondEnd = toMinutes(secondEndRaw);
      if (secondStart === null || secondEnd === null) {
        message.textContent = 'Confira os horários do segundo período.';
        output.textContent = '—';
        result.hidden = false;
        return;
      }
      total += (secondEnd < secondStart ? secondEnd + 1440 : secondEnd) - secondStart;
    }
    total = Math.max(0, total - breakMinutes);
    const hours = Math.floor(total / 60);
    const minutes = total % 60;
    output.textContent = `${hours}h ${String(minutes).padStart(2, '0')}min`;
    message.textContent = 'Resultado estimado da duração informada, descontando o intervalo indicado. Confira se os períodos não se sobrepõem.';
    result.hidden = false;
  });
  const clear = document.querySelector('[data-clear]');
  if (clear) clear.addEventListener('click', () => {
    form.reset();
    result.hidden = true;
  });
  const copy = document.querySelector('[data-copy]');
  if (copy) copy.addEventListener('click', async () => {
    if (!output || result.hidden || output.textContent === '—') return;
    try {
      await navigator.clipboard.writeText(output.textContent);
      copy.textContent = 'Resultado copiado';
      setTimeout(() => { copy.textContent = 'Copiar resultado'; }, 1600);
    } catch (_) {
      message.textContent = 'Não foi possível copiar automaticamente. Selecione o resultado para copiá-lo.';
    }
  });
})();
