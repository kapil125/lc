const calculateBtn = document.querySelector("img");

const calculation = () => {
  const progressHandler = () => {
    let progress = document.getElementById("file");
    const input1 = document.getElementById("inp1");
    const input2 = document.getElementById("inp2");

    if (progress.value === 100) {
      if (input1.value === "" || input2.value === "") {
        alert("Fill THE INPUT!");
        clearInterval(intervaler);
        progress.value = 0;
      } else {
        const result = document.getElementById("result");
        const percentage = Math.random() * 100;
        let lovePer = Math.trunc(percentage);
        console.log(progress.value);
        result.textContent = `${lovePer}%`;
        clearInterval(intervaler);
      }
    } else {
      progress.value += 5;
    }
  };
  let intervaler = setInterval(progressHandler, 100);
};
calculateBtn.addEventListener("click", calculation);
