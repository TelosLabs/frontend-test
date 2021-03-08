window.onload = () => {
    // save reference values for elements as variables to make future change easier
    console.log("index.js called"); // TODO: Remove
    const d = document;

    // test DOM manip
    const heroEl = document.getElementById("hero");
    heroEl.classList.add("blue");

    console.log(d);
};
