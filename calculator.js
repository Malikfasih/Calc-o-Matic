const clearInputField = () => {
  document.getElementById("display").value = "";
  document.getElementById("result").innerHTML = "";
};

const addInputValue = (value) => {
  const currentValue = document.getElementById("display").value;
  const newValue = currentValue + value;
  document.getElementById("display").value = newValue;
};

const finalResult = () => {
  const value = document.getElementById("display").value;
  const result = eval(value);

  document.getElementById("result").style.display = "block";
  document.getElementById("result").innerHTML = result;
};

const removeValue = (event) => {
  event.preventDefault();
  let currentInputValue = document.getElementById("display").value;
  currentInputValue = currentInputValue.slice(0, -1);

  document.getElementById("display").value = currentInputValue;
};
