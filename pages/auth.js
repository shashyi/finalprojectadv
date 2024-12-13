//pages/auth.js//

import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { app } from "../firebase"; 

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
    setLoading(true);
    const auth = getAuth(app); 
    setError(""); 

    try {
      await signInWithEmailAndPassword(auth, email, password); 
      router.push("/"); 
    } catch (error) {
      setError(error.message);  
    } finally {
      setLoading(false); 
    }
  };

  const handleRegister = async () => {
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
    setLoading(true);
    const auth = getAuth(app); 
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);  
      router.push("/"); 
    } catch (error) {
      setError(error.message);  
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h1>Login / Register</h1>
      
      {}
      {error && <p style={{ color: "red" }}>{error}</p>}
      
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="auth-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="auth-input"
      />
      
      {}
      <button onClick={handleLogin} disabled={loading} className="auth-btn">
        {loading ? "Logging in..." : "Login"}
      </button>
      <button onClick={handleRegister} disabled={loading} className="auth-btn">
        {loading ? "Registering..." : "Register"}
      </button>
    </div>
  );
};

export default AuthPage;
