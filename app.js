document.getElementById('form-adopcion').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nombreAdopcion = document.getElementById('nombreAdopcion').value.trim();
    const correoAdopcion = document.getElementById('correoAdopcion').value.trim();
    const descripcionAdopcion = document.getElementById('descripcionAdopcion').value.trim();
  
    if (!nombreAdopcion || !correoAdopcion || !descripcionAdopcion) {
      alert('Por favor, completa todos los campos.');
      return;
    }
  
    alert('formulario enviado correctamente');
    this.reset();
  });