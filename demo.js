
  function sendData() {
      const userData = {
        stack: "backend",
        level: "error",
        package: "handler",
        message: "received string, expected bool",
      };

      fetch("https://20.244.56.144/evaluation_service/logs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      })
        .then(response => response.json())
        .then(data => {
          document.getElementById("responseOutput").textContent =
            JSON.stringify(data, null, 2);
        })
        .catch(error => {
          document.getElementById("responseOutput").textContent = "Error: " + error;
        });
    }
 
