async function convertCode() {
    const codeInput = document.getElementById('codeInput').value;
  
    const response = await fetch('/convert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ code: codeInput })
    });
  
    const data = await response.json();
    document.getElementById('convertedCode').innerText = data.convertedCode;
  }
  