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
    
    // Llamada a API - URL ABSOLUTA
    if (btnApi && apiResult) {
        btnApi.addEventListener('click', async function() {
            btnApi.disabled = true;
            btnApi.textContent = 'Cargando...';
            apiResult.innerHTML = '<div class="api-loading">⏳ Consultando API...</div>';
            
            try {
                // Usar URL absoluta para evitar problemas de ruta
                const baseUrl = window.location.origin;
                const response = await fetch(baseUrl + '/api/mensaje');
                
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }
                
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
                apiResult.innerHTML = `
                    <div class="api-error">
                        ❌ Error conectando al API:<br>
                        ${error.message}<br>
                        <small>Verifica que la ruta /api/mensaje exista</small>
                    </div>
                `;
            } finally {
                btnApi.disabled = false;
                btnApi.textContent = 'Consultar API';
            }
        });
    }
    
    // Verificar salud - URL ABSOLUTA
    if (btnSalud && apiResult) {
        btnSalud.addEventListener('click', async function() {
            btnSalud.disabled = true;
            btnSalud.textContent = 'Cargando...';
            apiResult.innerHTML = '<div class="api-loading">⏳ Verificando servidor...</div>';
            
            try {
                const baseUrl = window.location.origin;
                const response = await fetch(baseUrl + '/api/salud');
                
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }
                
                const data = await response.json();
                apiResult.innerHTML = `
                    <div class="api-success">
                        <strong>✅ Salud del Servidor:</strong><br>
                        Status: ${data.status}<br>
                        Hora: ${data.timestamp}<br>
                        Servidor: ${data.servidor}<br>
                        Versión: ${data.version}
                    </div>
                `;
            } catch (error) {
                apiResult.innerHTML = `
                    <div class="api-error">
                        ❌ Error verificando salud:<br>
                        ${error.message}<br>
                        <small>Verifica que la ruta /api/salud exista</small>
                    </div>
                `;
            } finally {
                btnSalud.disabled = false;
                btnSalud.textContent = 'Ver Salud del Servidor';
            }
        });
    }
});