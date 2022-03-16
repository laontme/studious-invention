const inputs = document.querySelectorAll(".hero input");

inputs.forEach((input) => {
    console.log(input);
    input.addEventListener("change", (e) => {
        changed(e, inputs);
    });
});

function changed(e, inputs) {
    console.log(inputs);
    let filled = 0;
    inputs.forEach((input) => {
        if (input.value !== "") {
            filled++;
        }
    });

    console.log(filled);

    if (filled === inputs.length) {
        document.querySelector(".hero__search-submit").disabled = false;
    } else {
        document.querySelector(".hero__search-submit").disabled = true;
    }
}
