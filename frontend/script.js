document.getElementById('generateButton').addEventListener('click', async () => {
    const userInput = document.getElementById('userInput').value;
    const generatedCodeElement = document.getElementById('generatedCode');
    const previewFrame = document.getElementById('preview');
  
    generatedCodeElement.textContent = 'Generating...';
  
    try {
      const response = await fetch('http://localhost:5000/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userInput }),
      });
  
      const data = await response.json();
      generatedCodeElement.textContent = data.code;
  
      // Render the generated code in the iframe
      const blob = new Blob([data.code], { type: 'text/html' });
      previewFrame.src = URL.createObjectURL(blob);
    } catch (error) {
      generatedCodeElement.textContent = 'Error generating code.';
      console.error(error);
    }
  });
  