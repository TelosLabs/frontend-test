window.onload = () => {
  const d = document;
  const collapsibleTextDivs =  d.getElementsByClassName("collapsible-element");
  for(const c of collapsibleTextDivs){
    c.addEventListener('click', (e) => {
        let arrow = c.getElementsByTagName("div")[0];
        let pElement = c.getElementsByTagName("p")[0];

        arrow.innerHTML = (arrow.innerHTML === "V") ? "Λ" : "V";
        pElement.classList.toggle("hide");
    });
  }
};
