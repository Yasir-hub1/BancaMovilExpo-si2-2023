export const config = {
  BASE_URL: "http://18.230.186.240/api",
  NOMBRE_APP: "GRINGOTTS",

  /* COLORES  */
  COLOR_RED: "#ff3838",
  COLOR_YELOW: "#fff200",
  COLOR_BLACK: "#3d3d3d",
  COLOR_WHITE: "#fff",

  /* DATOS ALMACENADOS EN LOCAL STORAGE  */
  USER_TOKEN_KEY: "userToken",
  USER_KEY: "user",
  /* NAVEGACION DE AUTENTICACION */
  routes: {
    Login: "Login",
    Sign_up: "Sign_up",
    Onboarding: "Onboarding",


    /* RUTAS PARA LA NAVEGACION INTERNA DE BOTONES DE QR */
    CobrarQr: "CobrarQr",
    PagarQr: "PagarQr",
    UltMonv:"UltMov",
     UltMovView:"UltMovView",



    /* CONTACTS */
    ListViewContacts: "ListViewC",
    CreateContact: "createC",


    /* PROFILES */
    viewProfile: "ViewProfile",
    viewInfoWorkCorp: "ViewInfoWk",
    viewUser: "viewUser",
    viewCompany: "viewCompany"
  },

  /* opciones de de Btns  */
  COTIZACION: 1,
  CONTACTOS: 2
};
