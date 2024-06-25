import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import React, { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";



function Register() {
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [tlf, setTlf] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
            );
            const user = userCredential.user;
            await setDoc(doc(db, "users", user.uid), {
            nombre : fname,
            apellido : lname,
            email: user.email,
            tlf : tlf,
            });
            toast("Usuario registrado", { type: "success" });
        } catch (error) {
            toast(error.message, { type: "error" });
        }
        }







    return (
        <form onSubmit={handleRegister}>
          <h3>Registrarse</h3>
    
          <div className="mb-3">
            <label>Nombre</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>
    
          <div className="mb-3">
            <label>Apellido</label>
            <input
              type="text"
              className="form-control"
              placeholder="Apellido"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
    
          <div className="mb-3">
            <label>Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter correo"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
    
          <div className="mb-3">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter contraseña"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Número de telefono</label>
            <input
              type="tlf"
              className="form-control"
              placeholder="Enter telefono"
              onChange={(e) => setTlf(e.target.value)}
              required
            />
          </div>

          
    
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Registrarse
            </button>
          </div>
          <p className="forgot-password text-right">
            Ya se encuentra registrado <a href="/login">Iniciar sesión</a>
          </p>


        </form>
      );
    }
    export default Register;