export const API = {
    CANONICAL:
        process.env.NODE_ENV === 'development'
            ? 'https://power-tools-master.by'
            : 'https://power-tools.by',
    SEND_CONTACTS_FORM: '/rest/sendContactsForm.php',
};

export const FORM_MESSAGES = {
    requireError: 'Campo obligatorio.',
    error: 'Uno o más campos contienen un error. Por favor compruébalo e inténtalo de nuevo',
    success: 'Gracias por tu mensaje, ha sido enviado correctamente',
};

export const POPUP_DATA = {
    title: `Empieza a disfrutar de</br><strong>los beneficios de Plazo</strong>`,
    description: {
        pointsList: [
            `Escanea el código QR y descarga la app.`,
            `Crea tu cuenta gratis`,
            `Paga con Plazo ¡Tus compras tienen recompensa!`,
        ],
    },
};

export const COLORS = {
    white: 'hsla(0, 0%, 100%, 1)',
    dark: 'hsla(0, 0%, 13%, 1)',
    secondary: 'hsla(0, 0%, 97%, 1)',
    mediumSecondary: 'hsla(0, 0%, 75%, 1)',
    warning: 'hsla(50, 100%, 74%, 1)',
    purple: 'hsla(258, 77%, 85%, 1)',
    danger: 'hsla(360, 77%, 60%, 1)',
    success: 'hsla(77, 77%, 79%, 1)',
    positive: 'hsla(77, 81%, 49%, 1)',
    lightSuccess: 'hsla(77, 77%, 90%, 1)',
    lightPurple: 'hsla(258, 77%, 95%, 1)',
    darkSecondary: 'hsla(0, 0%, 35%, 1)',
    pastelSecondary: 'hsla(0, 0%, 53%, 1)',
};

export const TRANSITION = {
    fast: '0.3s',
    slow: '0.5s',
    long: '0.9s',
};
