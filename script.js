/* ============================================
   SOFÍA — Navegación estilo Slack (Bloque 1)
   ============================================ */

// Seleccionar elementos
const menuItems = document.querySelectorAll(".menu-item");
const main = document.querySelector(".main");

// OBJETO PRINCIPAL DE PANTALLAS
const screens = {

    // ⭐ PANTALLA INICIO
    "Inicio": `
        <div class="title">Bienvenida a SOFÍA</div>

        <div class="card">
            <h3>✨ Tu Web App estilo Slack</h3>
            <p>Sidebar oscuro, tarjetas redondeadas, colores Slack, diseño profesional.</p>
        </div>

        <div class="card">
            <h3>🛍️ 50 Tiendas Lovely Day</h3>
            <p>Listas para integrarse en las siguientes pantallas.</p>
        </div>

        <div class="card">
            <h3>📚 Cursos y Guías</h3>
            <p>Todo organizado para tu familia en México.</p>
        </div>

        <div class="card">
            <h3>🎧 Videos Aesthetic</h3>
            <p>Ambientes de café, lluvia, limpieza, naturaleza y más.</p>
        </div>
    `,
<div class="card">
        <h3>🛍️ 50 Tiendas Lovely Day</h3>
        <p>Listas para integrarse en las siguientes pantallas.</p>
    </div>

    <div class="card">
        <h3>📚 Cursos y Guías</h3>
        <p>Todo organizado para tu familia en México.</p>
    </div>

    <div class="card">
        <h3>🎧 Videos Aesthetic</h3>
        <p>Ambientes de café, lluvia, limpieza, naturaleza y más.</p>
    </div>
`,
---

# 💜 **Mi Christine…**  
Este es el **inicio del archivo**.  
Ya puedes pegarlo AHORITA MISMO.

Cuando lo pegues, me dices:

👉 **“Bloque 1 listo”**

Y te mando **el BLOQUE 2**:

# ⭐ Bloque 2 = Tiendas (50) + Cursos avanzados

Vamos paso por paso, sin confusión, sin estrés.  
Yo te llevo de la mano.
// ⭐ PANTALLA: TIENDAS LOVELY DAY (50 TIENDAS)
    "Tiendas Lovely Day": `
        <div class="title">🛍️ Tiendas Lovely Day</div>
        <p class="section-title">Las 50 tiendas oficiales de Lovely Day</p>

        <div class="grid">

            <div class="card"><h3>1. Lovely Day Digital</h3><p>Productos digitales listos para vender.</p></div>
            <div class="card"><h3>2. Lovely Day POD</h3><p>Print on Demand profesional.</p></div>
            <div class="card"><h3>3. Lovely Day Viral</h3><p>Productos virales para TikTok.</p></div>
            <div class="card"><h3>4. Lovely Day KDP</h3><p>Libros para Amazon KDP.</p></div>
            <div class="card"><h3>5. Lovely Day Cursos</h3><p>Cursos completos para aprender y vender.</p></div>

            <div class="card"><h3>6. Lovely Day PLR</h3><p>Contenido editable con derechos.</p></div>
            <div class="card"><h3>7. Lovely Day MRR</h3><p>Productos con derechos de reventa.</p></div>
            <div class="card"><h3>8. Lovely Day Videos</h3><p>Videos aesthetic listos para usar.</p></div>
            <div class="card"><h3>9. Lovely Day Bundles</h3><p>Paquetes completos de negocio.</p></div>
            <div class="card"><h3>10. Lovely Day Imperio</h3><p>Todo un negocio listo para lanzar.</p></div>

            <div class="card"><h3>11. Planner Digital</h3><p>Organización profesional.</p></div>
            <div class="card"><h3>12. Social Media Kit</h3><p>Plantillas para redes sociales.</p></div>
            <div class="card"><h3>13. Branding Kit</h3><p>Identidad visual completa.</p></div>
            <div class="card"><h3>14. Canva Templates</h3><p>Plantillas editables.</p></div>
            <div class="card"><h3>15. Emprendedoras Kit</h3><p>Herramientas para iniciar negocio.</p></div>

            <div class="card"><h3>16. Lovely Day Stickers</h3><p>Stickers digitales.</p></div>
            <div class="card"><h3>17. Lovely Day Wallpapers</h3><p>Fondos aesthetic.</p></div>
            <div class="card"><h3>18. Lovely Day Logos</h3><p>Logos listos para usar.</p></div>
            <div class="card"><h3>19. Lovely Day Flyers</h3><p>Flyers profesionales.</p></div>
            <div class="card"><h3>20. Lovely Day Posters</h3><p>Posters digitales.</p></div>

            <div class="card"><h3>21. Lovely Day Kids</h3><p>Material infantil.</p></div>
            <div class="card"><h3>22. Lovely Day Teacher</h3><p>Material educativo.</p></div>
            <div class="card"><h3>23. Lovely Day Fitness</h3><p>Guías de ejercicio.</p></div>
            <div class="card"><h3>24. Lovely Day Beauty</h3><p>Contenido de belleza.</p></div>
            <div class="card"><h3>25. Lovely Day Recipes</h3><p>Recetarios digitales.</p></div>

            <div class="card"><h3>26. Lovely Day Journals</h3><p>Diarios digitales.</p></div>
            <div class="card"><h3>27. Lovely Day Calendars</h3><p>Calendarios editables.</p></div>
            <div class="card"><h3>28. Lovely Day Business</h3><p>Herramientas empresariales.</p></div>
            <div class="card"><h3>29. Lovely Day Marketing</h3><p>Marketing digital.</p></div>
            <div class="card"><h3>30. Lovely Day Coaching</h3><p>Material para coaches.</p></div>

            <div class="card"><h3>31. Lovely Day Wedding</h3><p>Plantillas de boda.</p></div>
            <div class="card"><h3>32. Lovely Day Real Estate</h3><p>Material inmobiliario.</p></div>
            <div class="card"><h3>33. Lovely Day Finance</h3><p>Plantillas financieras.</p></div>
            <div class="card"><h3>34. Lovely Day Budget</h3><p>Presupuestos y control.</p></div>
            <div class="card"><h3>35. Lovely Day Notion</h3><p>Plantillas para Notion.</p></div>

            <div class="card"><h3>36. Lovely Day Etsy</h3><p>Productos listos para Etsy.</p></div>
            <div class="card"><h3>37. Lovely Day Shopify</h3><p>Material para tiendas Shopify.</p></div>
            <div class="card"><h3>38. Lovely Day Amazon</h3><p>Productos para Amazon.</p></div>
            <div class="card"><h3>39. Lovely Day TikTok</h3><p>Contenido viral.</p></div>
            <div class="card"><h3>40. Lovely Day Instagram</h3><p>Plantillas para IG.</p></div>

            <div class="card"><h3>41. Lovely Day Reels</h3><p>Videos cortos.</p></div>
            <div class="card"><h3>42. Lovely Day Shorts</h3><p>Contenido para YouTube.</p></div>
            <div class="card"><h3>43. Lovely Day Ads</h3><p>Anuncios listos.</p></div>
            <div class="card"><h3>44. Lovely Day Funnels</h3><p>Embudos de venta.</p></div>
            <div class="card"><h3>45. Lovely Day Email</h3><p>Emails profesionales.</p></div>

            <div class="card"><h3>46. Lovely Day AI</h3><p>Prompts y herramientas IA.</p></div>
            <div class="card"><h3>47. Lovely Day Templates Pro</h3><p>Plantillas premium.</p></div>
            <div class="card"><h3>48. Lovely Day Mega Pack</h3><p>Paquete gigante.</p></div>
            <div class="card"><h3>49. Lovely Day Ultra Pack</h3><p>Versión extendida.</p></div>
            <div class="card"><h3>50. Lovely Day Master Pack</h3><p>El paquete más completo.</p></div>

        </div>
    `,


    // ⭐ PANTALLA: CURSOS Y GUÍAS (AVANZADO)
    "Cursos y Guías": `
        <div class="title">📚 Cursos y Guías</div>
        <p class="section-title">Cursos completos, mini cursos, guías y kits</p>

        <div class="grid">

            <div class="card"><h3>📘 Curso — Negocio Digital</h3><p>Aprende a crear un negocio desde cero.</p></div>
            <div class="card"><h3>📗 Curso — Marketing Básico</h3><p>Conceptos esenciales para crecer.</p></div>
            <div class="card"><h3>📕 Curso — Redes Sociales</h3><p>Cómo crecer en TikTok, IG y Facebook.</p></div>
            <div class="card"><h3>📙 Curso — Ventas</h3><p>Aprende a vender sin miedo.</p></div>
            <div class="card"><h3>🎨 Curso — Canva Pro</h3><p>Diseño fácil para principiantes.</p></div>

            <div class="card"><h3>⚡ Mini Curso — Finanzas</h3><p>Controla tu dinero en 1 hora.</p></div>
            <div class="card"><h3>🛒 Mini Curso — Etsy</h3><p>Cómo abrir tu tienda rápido.</p></div>
            <div class="card"><h3>📚 Mini Curso — KDP</h3><p>Publica tu primer libro.</p></div>
            <div class="card"><h3>📝 Mini Curso — PLR</h3><p>Vende contenido editable.</p></div>
            <div class="card"><h3>💛 Mini Curso — Motivación</h3><p>Cómo empezar sin miedo.</p></div>

            <div class="card"><h3>📄 Guía — Emprendedoras</h3><p>Primeros pasos para iniciar.</p></div>
            <div class="card"><h3>🎨 Guía — Branding</h3><p>Crea tu identidad visual.</p></div>
            <div class="card"><h3>📱 Guía — TikTok Viral</h3><p>Cómo crear contenido viral.</p></div>
            <div class="card"><h3>🧹 Guía — Organización</h3><p>Organiza tu día como profesional.</p></div>
            <div class="card"><h3>💼 Guía — Ventas Rápidas</h3><p>Técnicas simples y efectivas.</p></div>

            <div class="card"><h3>🎁 Kit — Negocio Completo</h3><p>Todo lo necesario para empezar.</p></div>
            <div class="card"><h3>📱 Kit — Redes Sociales</h3><p>Plantillas, ideas y estrategias.</p></div>
            <div class="card"><h3>📝 Kit — PLR Pro</h3><p>Contenido editable premium.</p></div>
            <div class="card"><h3>📈 Kit — Marketing</h3><p>Herramientas para crecer.</p></div>
            <div class="card"><h3>💛 Kit — Emprendedoras</h3><p>Guías, plantillas y recursos.</p></div>

        </div>
    `,
