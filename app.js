// ========== FUNCIONALIDADES DE VISIBILIDAD DE CONTRASEÑA ========== //
/**
 * Alterna la visibilidad de la contraseña en el campo correspondiente
 * y actualiza el icono del ojo.
 */
function cambiarVisibilidadContrasena() {
    const contrasena = document.getElementById('contrasena');
    const icono = document.getElementById('toggleIcon');

    if (contrasena.type === 'password') {
        contrasena.type = 'text';
        icono.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        contrasena.type = 'password';
        icono.classList.replace('fa-eye-slash', 'fa-eye');
    }
}

// ========== SISTEMA DE TRADUCCIÓN MULTI-IDIOMA ========== //
/**
 * Objeto que contiene todas las traducciones para los diferentes idiomas.
 * Cada clave corresponde a un texto en la interfaz.
 */
const translations = {
    'es-CO': {
        welcome: 'Bienvenido',
        usuario: 'Usuario',
        contrasena: 'Contraseña',
        recordarme: 'Recordarme',
        olvidaste: '¿Olvidaste tu contraseña?',
        iniciar: 'Iniciar Sesión',
        registro: '¿Deseas registrarte?',
        recuperar: 'Recuperar Contraseña',
        correo: 'Correo electrónico',
        enviar: 'Enviar Instrucciones',
        telefono: 'Teléfono',
        confirmarContrasena: 'Confirmar Contraseña',
        crearCuenta: 'Crear Cuenta',
        yaTienesCuenta: '¿Ya tienes cuenta? Inicia Sesión',
        instrucciones: 'Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.'
    },
    'en-US': {
        welcome: 'Welcome',
        usuario: 'Username',
        contrasena: 'Password',
        recordarme: 'Remember me',
        olvidaste: 'Forgot your password?',
        iniciar: 'Log In',
        registro: 'Want to sign up?',
        recuperar: 'Recover Password',
        correo: 'Email',
        enviar: 'Send Instructions',
        telefono: 'Phone',
        confirmarContrasena: 'Confirm Password',
        crearCuenta: 'Create Account',
        yaTienesCuenta: 'Already have an account? Log In',
        instrucciones: 'Enter your email and we will send you a link to reset your password.'
    },
    'ar': {
        welcome: 'مرحبا',
        usuario: 'اسم المستخدم',
        contrasena: 'كلمة المرور',
        recordarme: 'تذكرني',
        olvidaste: 'هل نسيت كلمة المرور؟',
        iniciar: 'تسجيل الدخول',
        registro: 'تريد التسجيل؟',
        recuperar: 'استعادة كلمة المرور',
        correo: 'البريد الإلكتروني',
        enviar: 'إرسال التعليمات',
        telefono: 'الهاتف',
        confirmarContrasena: 'تأكيد كلمة المرور',
        crearCuenta: 'إنشاء حساب',
        yaTienesCuenta: 'هل لديك حساب بالفعل؟ سجل الدخول',
        instrucciones: 'أدخل بريدك الإلكتروني وسنرسل لك رابطًا لإعادة تعيين كلمة المرور.'
    },
    'zh-CN': {
        welcome: '欢迎',
        usuario: '用户名',
        contrasena: '密码',
        recordarme: '记住我',
        olvidaste: '忘记密码？',
        iniciar: '登录',
        registro: '想注册吗？',
        recuperar: '找回密码',
        correo: '电子邮件',
        enviar: '发送说明',
        telefono: '电话',
        confirmarContrasena: '确认密码',
        crearCuenta: '创建账户',
        yaTienesCuenta: '已有账户？登录',
        instrucciones: '输入您的电子邮件，我们将发送一个链接来重置您的密码。'
    },
    'zh-TW': {
        welcome: '歡迎',
        usuario: '用戶名',
        contrasena: '密碼',
        recordarme: '記住我',
        olvidaste: '忘記密碼？',
        iniciar: '登錄',
        registro: '想要註冊？',
        recuperar: '找回密碼',
        correo: '電子郵件',
        enviar: '發送說明',
        telefono: '電話',
        confirmarContrasena: '確認密碼',
        crearCuenta: '創建賬戶',
        yaTienesCuenta: '已有賬戶？登錄',
        instrucciones: '輸入您的電子郵件，我們將發送一個鏈接來重置您的密碼。'
    }
};

// ========== MANEJO DEL SELECTOR DE IDIOMAS ========== //
/**
 * Alterna la visibilidad del menú de idiomas.
 */
function toggleLanguageMenu() {
    const menu = document.getElementById('languageMenu');
    const chevron = document.querySelector('.fa-chevron-down');
    menu.classList.toggle('show');
    chevron.classList.toggle('rotate-chevron');
}

/**
 * Cambia el idioma de la interfaz según la selección del usuario.
 * @param {string} lang - Código del idioma seleccionado.
 */
function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Actualiza placeholders
    const usuario = document.getElementById('usuario');
    const contrasena = document.getElementById('contrasena');
    const confirmarContrasena = document.getElementById('confirmarContrasena');
    const email = document.getElementById('email');

    if (usuario) usuario.placeholder = translations[lang].usuario;
    if (contrasena) contrasena.placeholder = translations[lang].contrasena;
    if (confirmarContrasena) confirmarContrasena.placeholder = translations[lang].confirmarContrasena; // Nueva línea
    if (email) email.placeholder = translations[lang].correo;

    // Cierra el menú y actualiza el texto e imagen del selector de idiomas
    toggleLanguageMenu();

    // Obtén el nombre del idioma seleccionado y la ruta de la imagen
    const languageNames = {
        'es-CO': { name: 'Español', flag: 'assets/icons/co.png' },
        'en-US': { name: 'English', flag: 'assets/icons/us.png' },
        'ar': { name: 'العربية', flag: 'assets/icons/eg.png' },
        'zh-CN': { name: '中文(简体)', flag: 'assets/icons/ch.png' },
        'zh-TW': { name: '中文(繁體)', flag: 'assets/icons/hk.png' }
    };

    // Actualiza el texto y la imagen del selector de idiomas
    const selectedLanguage = document.querySelector('.selected-language span');
    if (selectedLanguage) {
        selectedLanguage.innerHTML = `
            <img src="${languageNames[lang].flag}" alt="${languageNames[lang].name}" class="language-flag">
            ${languageNames[lang].name}
        `;
    }
}


// ========== VALIDACIÓN DE FORMULARIO DE REGISTRO ========== //
/**
 * Valida que las contraseñas coincidan y cumplan con los requisitos de seguridad.
 * @returns {boolean} - True si la validación es exitosa, False si hay errores.
 */
function validarRegistro() {
    const pass1 = document.getElementById('contrasena').value;
    const pass2 = document.getElementById('confirmarContrasena').value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;  // Expresión regular para complejidad

    if (pass1 !== pass2) {
        alert('Las contraseñas no coinciden');
        return false;
    }
    if (!regex.test(pass1)) {
        alert('La contraseña debe tener:\n- Mínimo 8 caracteres\n- Una mayúscula\n- Una minúscula\n- Un símbolo');
        return false;
    }
    return true;
}
// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!e.target.closest('.language-selector')) {
        document.querySelectorAll('.language-menu').forEach(menu => {
            menu.classList.remove('show');
        });
        document.querySelectorAll('.fa-chevron-down').forEach(chevron => {
            chevron.classList.remove('rotate-chevron');
        });
    }
});
