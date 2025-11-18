document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('miBoton');
    const mensaje = document.getElementById('mensaje');
    const btnApi = document.getElementById('btnApi');
    const btnSalud = document.getElementById('btnSalud');
    const apiResult = document.getElementById('apiResult');
    
    // Efecto frontend
    if (boton && mensaje) {
        boton.addEventListener('click', function() {
            const mensajes = [
                "¡Frontend funciona! 🎉",
                "¡JavaScript activo! ⚡", 
                "¡Interactivo! ✅",
                "¡Excelente! 🌟"
            ];
            const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
            mensaje.textContent = mensajeAleatorio;
        });
    }
    
    // Llamada a API
    if (btnApi && apiResult) {
        btnApi.addEventListener('click', async function() {
            try {
                const response = await fetch('/api/mensaje');
                const data = await response.json();
                apiResult.innerHTML = `
                    <div class="api-success">
                        <strong>✅ API Funcionando:</strong><br>
                        📝 ${data.mensaje}<br>
                        📅 ${new Date(data.fecha).toLocaleString()}<br>
                        👤 ${data.autor}<br>
                        🖥️ ${data.entorno}
                    </div>
                `;
            } catch (error) {
                apiResult.innerHTML = `<div class="api-error">❌ Error: ${error.message}</div>`;
            }
        });
    }
    
    // Verificar salud
    if (btnSalud && apiResult) {
        btnSalud.addEventListener('click', async function() {
            try {
                const response = await fetch('/api/salud');
                const data = await response.json();
                apiResult.innerHTML = `
                    <div class="api-success">
                        <strong>✅ Salud del Servidor:</strong><br>
                        Status: ${data.status}<br>
                        Hora: ${data.timestamp}<br>
                        Servidor: ${data.servidor}
                    </div>
                `;
            } catch (error) {
                apiResult.innerHTML = `<div class="api-error">❌ Error: ${error.message}</div>`;
            }
        });
    }
});