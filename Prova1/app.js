$(document).ready(function () {
  $("#cep-input").mask("00000-000", { placeholder: "_____-___" });

  $("#submit-button").click(function (event) {
    validatorCpfCnpj(event);
  });

  setMask("cpf");
});

function setMask(type) {
  const mask = {
    cpf: "000.000.000-00",
    cnpj: "00.000.000/0000-00",
  };

  const placeholder = {
    cpf: "___.___.___-__",
    cnpj: "__.___.___/____-__",
  };

  const cpfCnpj = $("#cpf-cnpj-input");

  cpfCnpj[0].value = "";

  cpfCnpj.mask(mask[type], {
    placeholder: placeholder[type],
  });

  $("#cpf-cnpj-label")[0].innerText = `${type.toUpperCase()}:`;
}

function validatorCpfCnpj(event) {
  const fisica = $("#fisica-input")[0].checked;
  const juridica = $("#juridica-input")[0].checked;

  const cpfCnpj = $("#cpf-cnpj-input")[0].value;
  const nome = $("#name-input")[0].value;
  const cep = $("#cep-input")[0].value;

  if (fisica && cpfCnpj && cpfCnpj.length != 14 && nome) {
    event.preventDefault();

    alert("Digite o CPF completo");

    return;
  }

  if (juridica && cpfCnpj && cpfCnpj.length != 18 && nome) {
    event.preventDefault();

    alert("Digite o CNPJ completo");

    return;
  }

  if (cep && cep.length != 9 && cpfCnpj) {
    event.preventDefault();

    alert("Digite o CEP completo");

    return;
  }
}
