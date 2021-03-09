window.onload = () => {
  const d = document;
  const collapsibleTextDivs =  d.getElementsByClassName("collapsible-element");
  for(const c of collapsibleTextDivs){
    c.addEventListener('click', (e) => {
        // TODO: I think this could be better
        let arrow = c.getElementsByTagName("div")[0];
        arrow.innerHTML = (arrow.innerHTML === "Λ") ? "v" : "Λ";
        let pElement = c.getElementsByTagName("p")[0];
        pElement.style.display = (pElement.style.display === "none") ? "block" : "none";
    });
  }
};
