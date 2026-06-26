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
// ⭐ PANTALLA: RECETARIOS (AVANZADO)
    "Recetarios": `
        <div class="title">🍽️ Recetarios</div>
        <p class="section-title">Postres, bebidas, bolis, gelatinas y más</p>

        <div class="grid">

            <div class="card"><h3>🍰 Postres</h3><p>Pasteles, galletas, flanes, panqués y más.</p></div>
            <div class="card"><h3>🍮 Gelatinas</h3><p>Gelatinas mosaico, de leche, de agua y gourmet.</p></div>
            <div class="card"><h3>🍧 Bolis</h3><p>Bolis de crema, agua, frutas y sabores mexicanos.</p></div>
            <div class="card"><h3>🥤 Bebidas</h3><p>Aguas frescas, cafés, frappés y bebidas frías.</p></div>
            <div class="card"><h3>🌮 Mexicanos</h3><p>Recetas tradicionales de México.</p></div>

            <div class="card"><h3>🍳 Desayunos</h3><p>Opciones rápidas y deliciosas.</p></div>
            <div class="card"><h3>🍽️ Comidas</h3><p>Platos fuertes fáciles de preparar.</p></div>
            <div class="card"><h3>🌙 Cenas</h3><p>Recetas ligeras y prácticas.</p></div>
            <div class="card"><h3>🥨 Snacks</h3><p>Botanas rápidas y económicas.</p></div>
            <div class="card"><h3>🥐 Panadería</h3><p>Pan casero, roles, conchas y más.</p></div>

            <div class="card"><h3>🥗 Saludables</h3><p>Recetas ligeras y nutritivas.</p></div>
            <div class="card"><h3>🧸 Para Niños</h3><p>Recetas divertidas y fáciles.</p></div>
            <div class="card"><h3>🎉 Para Fiestas</h3><p>Recetas para eventos y reuniones.</p></div>
            <div class="card"><h3>⚡ Express</h3><p>Recetas en menos de 10 minutos.</p></div>
            <div class="card"><h3>⭐ Especiales</h3><p>Recetas únicas y creativas.</p></div>

        </div>
    `,


    // ⭐ PANTALLA: VIDEOS AESTHETIC (AVANZADO)
    "Videos Aesthetic": `
        <div class="title">🎧 Videos Aesthetic</div>
        <p class="section-title">Ambientes relajantes para estudiar, limpiar o descansar</p>

        <div class="grid">

            <div class="card"><h3>☕ Café Aesthetic</h3><p>Ambiente cálido con música suave.</p></div>
            <div class="card"><h3>🌧️ Lluvia Relajante</h3><p>Sonidos de lluvia para concentración.</p></div>
            <div class="card"><h3>🧼 Limpieza Motivadora</h3><p>Videos para motivarte a limpiar.</p></div>
            <div class="card"><h3>🌿 Naturaleza</h3><p>Ambientes verdes y relajantes.</p></div>
            <div class="card"><h3>📚 Estudio</h3><p>Ambientes para estudiar sin distracciones.</p></div>

        </div>
    `,
// ⭐ PANTALLA: ORGANIZACIÓN DEL HOGAR
    "Organización del Hogar": `
        <div class="title">🏡 Organización del Hogar</div>
        <p class="section-title">Limpieza, rutinas, listas y organización diaria</p>

        <div class="grid">

            <div class="card"><h3>🧼 Limpieza Diaria</h3><p>Rutinas rápidas para mantener la casa limpia.</p></div>
            <div class="card"><h3>🧽 Limpieza Profunda</h3><p>Guías para cada área del hogar.</p></div>
            <div class="card"><h3>🧺 Lavandería</h3><p>Organización, ciclos y trucos.</p></div>
            <div class="card"><h3>🛏️ Dormitorios</h3><p>Orden, ropa de cama y organización.</p></div>
            <div class="card"><h3>🍽️ Cocina</h3><p>Despensa, refrigerador y limpieza.</p></div>

            <div class="card"><h3>🧸 Cuarto de Niños</h3><p>Juguetes, ropa y rutinas.</p></div>
            <div class="card"><h3>🧹 Rutinas Semanales</h3><p>Organización por días.</p></div>
            <div class="card"><h3>🗂️ Listas</h3><p>Listas imprimibles y digitales.</p></div>
            <div class="card"><h3>🕯️ Hogar Aesthetic</h3><p>Ambientes bonitos y relajantes.</p></div>
            <div class="card"><h3>🛒 Compras</h3><p>Listas de supermercado y tips.</p></div>

        </div>
    `,


    // ⭐ PANTALLA: NEGOCIOS DIGITALES
    "Negocios Digitales": `
        <div class="title">💼 Negocios Digitales</div>
        <p class="section-title">Ideas, guías y herramientas para emprender</p>

        <div class="grid">

            <div class="card"><h3>🛍️ Tiendas Digitales</h3><p>Cómo vender productos digitales.</p></div>
            <div class="card"><h3>📚 KDP</h3><p>Publica libros en Amazon.</p></div>
            <div class="card"><h3>🛒 Etsy</h3><p>Vende plantillas y productos.</p></div>
            <div class="card"><h3>🎨 Canva</h3><p>Diseño fácil para emprender.</p></div>
            <div class="card"><h3>📱 Redes Sociales</h3><p>Crecimiento en TikTok e Instagram.</p></div>

            <div class="card"><h3>📈 Marketing</h3><p>Estrategias simples para crecer.</p></div>
            <div class="card"><h3>💰 Finanzas</h3><p>Cómo manejar el dinero del negocio.</p></div>
            <div class="card"><h3>🧠 Mentalidad</h3><p>Motivación para emprender.</p></div>
            <div class="card"><h3>🎁 Packs</h3><p>Paquetes completos de negocio.</p></div>
            <div class="card"><h3>📝 PLR / MRR</h3><p>Contenido editable para vender.</p></div>

        </div>
    `,


    // ⭐ PANTALLA: MOTIVACIÓN
    "Motivación": `
        <div class="title">💛 Motivación</div>
        <p class="section-title">Frases, energía y ánimo para tu día</p>

        <div class="grid">

            <div class="card"><h3>✨ Frases Bonitas</h3><p>Motivación diaria.</p></div>
            <div class="card"><h3>🌅 Mañanas</h3><p>Empieza tu día con energía.</p></div>
            <div class="card"><h3>🌙 Noches</h3><p>Reflexiones para dormir tranquila.</p></div>
            <div class="card"><h3>💪 Fuerza</h3><p>Para cuando te sientas cansada.</p></div>
            <div class="card"><h3>🌻 Gratitud</h3><p>Para levantar el ánimo.</p></div>

        </div>
    `,


    // ⭐ PANTALLA: FAVORITOS
    "Favoritos": `
        <div class="title">⭐ Favoritos</div>
        <p class="section-title">Tus pantallas y recursos guardados</p>

        <div class="card">
            <h3>💛 Aquí aparecerán tus favoritos</h3>
            <p>En una futura actualización podrás guardar lo que más uses.</p>
        </div>
    `,


    // ⭐ PANTALLA: AJUSTES
    "Ajustes": `
        <div class="title">⚙️ Ajustes</div>
        <p class="section-title">Configuración de tu app SOFÍA</p>

        <div class="card">
            <h3>🎨 Tema</h3>
            <p>Modo oscuro activado (estilo Slack).</p>
        </div>

        <div class="card">
            <h3>
