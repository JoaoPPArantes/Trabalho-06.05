document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nomeInput = document.getElementById("nome");
    const nomeValue = nomeInput.value.trim();
    if (!nomeValue.match(/^[^\d]+$/)) {
      alert("O campo Nome não pode conter números.");
      return;
    }

    const telefoneValue = telefoneInput.value.trim();
    if (!telefoneValue.match(/^\(\d{2}\) \d{4,5}-\d{4}$/)) {
      alert(
        "Por favor, insira um número de telefone válido no formato (xx) xxxx-xxxx."
      );
      return;
    }

    alert("Formulário enviado com sucesso!");
    form.reset();
  });
});
