const dateBuilder = (d) => {

  let months = ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho",
    "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

  let days = ["Domingo,", "Segunda,", "Terca,", "Quarta,", "Quinta,", "Sexta,"]

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`

};

  export {dateBuilder};