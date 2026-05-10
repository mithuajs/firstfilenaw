// script.js

import { auth, db } from "./firebase-config.js";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
    collection,
    addDoc,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.showRegister = function () {
    document.getElementById("registerSection")
        .classList.remove("hidden");

    document.getElementById("loginSection")
        .classList.add("hidden");
};

window.showLogin = function () {
    document.getElementById("loginSection")
        .classList.remove("hidden");

    document.getElementById("registerSection")
        .classList.add("hidden");
};

window.registerStudent = async function () {

    const name =
        document.getElementById("name").value;

    const father =
        document.getElementById("father").value;

    const mother =
        document.getElementById("mother").value;

        
    const email =
        document.getElementById("email").value;

    const phone =
        document.getElementById("phone").value;

    const password =
        document.getElementById("password").value;

    try {

        const userCredential =
            await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

        await addDoc(
            collection(db, "students"),
            {
                uid: userCredential.user.uid,
                name,
                father,
                mother,
                email,
                phone,
                password
            }
        );

        alert("Registration Successful!");

        showLogin();

    } catch (error) {
        alert(error.message);
    }
};

window.loginStudent = async function () {

    const loginInput =
        document.getElementById("loginInput").value;

    const password =
        document.getElementById("loginPassword").value;

    try {

        const students =
            await getDocs(collection(db, "students"));

        let emailToLogin = loginInput;

        students.forEach(doc => {

            const data = doc.data();

            if (data.phone === loginInput) {
                emailToLogin = data.email;
            }
        });

        await signInWithEmailAndPassword(
            auth,
            emailToLogin,
            password
        );

        alert("Login Successful! welcome to Sylhet Polytechnic Institute");

        window.location.href = "https://sylhet.polytech.gov.bd/ "; 

    } catch (error) {
        alert("Wrong email/phone or password");
    }
};

