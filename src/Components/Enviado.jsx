import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {doc, getFirestore, setDoc} from "firebase/firestore";

const Enviado = (props) => {

    const firebaseConfig = {
        apiKey: "AIzaSyA1arZEGFTci2GTY2fLKRsgUc5RRZzLa_U",
        authDomain: "fae-importaciones.firebaseapp.com",
        projectId: "fae-importaciones",
        storageBucket: "fae-importaciones.appspot.com",
        messagingSenderId: "714776154691",
        appId: "1:714776154691:web:b7655c80270895be0e7af6",
        measurementId: "G-WVLB2VDFWY"
    };


    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const {CODIGO, NOMBRE, PRECIO, IMG} = props.data;

    const db = getFirestore(app);


    setDoc(doc(db, "Catalogo-2023", ('toy-'+generarId(8))), {
        code: CODIGO,
        name: NOMBRE,
        price: PRECIO,
        imgRef: IMG
    }).then(r => {console.log("Enviado")}, n => console.log("No enviado"));
    return null;
}

function generarId(longitud) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let idGenerado = '';

    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        idGenerado += caracteres.charAt(indiceAleatorio);
    }
    return idGenerado;
}

export default Enviado;