# 🌟 Implementación de Create Account Form y Enrutamiento de Componentes

## ✅ Opción A: Implementación de un Nuevo Componente
Para este desafío, decidí escoger la **Opción A** y desarrollar un nuevo componente llamado `CreateAccountForm`. Pensé que este sería un **buen complemento** para los componentes que se me enviaron, ya que añade la funcionalidad de registro de usuario.

---

## 🔍 **Proceso de Desarrollo**
Para resolver este reto, seguí los siguientes pasos:

1️⃣ **Analizar los componentes proporcionados:**  
   - Lo primero que hice fue revisar los archivos que me enviaron y entender su estructura.  
   - Para esto, los **agregué a un proyecto base y los desplegué** para visualizar la UI.  

2️⃣ **Definir la arquitectura y el orden de los componentes:**  
   - Después de ver la estructura de los componentes, decidí establecer un **orden lógico** en la navegación.  
   - Me pregunté **qué le podría añadir** para mejorar la experiencia del usuario.  

3️⃣ **Implementar `CreateAccountForm` como complemento:**  
   - Noté que los componentes enviados guiaban al usuario hasta la verificación del código, pero no había una pantalla de creación de cuenta.  
   - Decidí implementar `CreateAccountForm` como **paso final** del proceso.  

4️⃣ **Agregar validaciones y mejorar la experiencia del usuario:**  
   - Implementé validaciones dinámicas para **correo, contraseña y campos vacíos**. 
   - Enruté todos los componentes para lograr una navegación fluida.  

---

## 📌 **Descripción del Componente CreateAccountForm**
`CreateAccountForm` es un formulario donde se solicita la siguiente información del usuario:
- **Nombre y Apellido**
- **Correo Electrónico**
- **Confirmación de Correo Electrónico**
- **Contraseña**

### 🔍 **Validaciones Implementadas**
✔️ **Confirmación de correo:**  
   - El usuario debe ingresar el mismo email en ambos campos.  
   - Si los correos no coinciden, se muestra un mensaje de "los correos no coinciden" cuando se hace clic en **"Crear cuenta"**.  

✔️ **Campos Vacíos:**  
   - Si el usuario intenta enviar el formulario con algún campo vacío, se le pedirá que complete los campos obligatorios.  

✔️ **Validación de Contraseña:**  
   - La contraseña debe cumplir con los siguientes requisitos:
     - Al menos **una letra mayúscula**.
     - Al menos **un número**.
     - Al menos **un carácter especial** (`!@#$%^&*`).
   - Si la contraseña no cumple, se muestra un mensaje indicando qué elementos faltan.  

✔️ **Mensaje de Éxito:**  
   - Si todos los campos son correctos y se hace clic en **"Crear cuenta"**, se muestra un mensaje indicando **"Cuenta creada exitosamente"**.  

---

## 🚀 **Enrutamiento de los Componentes**
Este proyecto utiliza **App Router** de Next.js para manejar la navegación entre los componentes.  
Cada componente está en la carpeta `app/components/` y se navega entre ellos usando el enrutamiento de Next.js. La navegación sigue el siguiente flujo:

1️⃣ **`LoginLanding`** _(Primer Componente)_
   - Es la pantalla inicial.
   - El usuario debe hacer clic en **"Continuar"** para pasar al siguiente paso.

2️⃣ **`PhoneInput`** _(Segundo Componente)_
   - Aquí se solicita el número de teléfono.
   - **Validación:** No se permite continuar si el campo está vacío.
   - Si el usuario ingresa un número, puede avanzar a la siguiente pantalla.

3️⃣ **`VerificationCode`** _(Tercer Componente)_
   - Aquí se solicita un código de 4 dígitos.
   - **Validaciones:**
     - Todos los campos deben estar llenos.
     - Solo se permiten números.
   - Si se llena una casilla, te mueve automaticamente a la siguiente.
   - Si todo es correcto, se redirige a **Loading Screen**.

4️⃣ **`LoadingScreen`** _(Cuarto Componente)_
   - Esta pantalla se muestra durante **3 segundos** antes de continuar.
   - Quise simular el tiempo de procesamiento de un sistema real.

5️⃣ **`CreateAccountForm`** _(Último Componente)_
   - Es la pantalla final donde el usuario completa su registro.

---

## 🛠 **Tecnologías Utilizadas**
- **Next.js (App Router)**
- **React Hooks** (`useState`, `useEffect`)
- **TypeScript**
- **Lucide-react** _(para iconos)_
- **Tailwind CSS** _(para estilos)_

