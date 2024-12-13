import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from 'firebase/auth'; 
import { useRouter } from 'next/router';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    const auth = getAuth(); 
    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }

    setLoading(true);
    setError(''); 

    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      
      if (signInMethods.length > 0) {
        setError('This email is already in use. Please log in or use a different email.');
        setLoading(false);
        return;
      }

      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>

      {}
      {error && (
        <div>
          <p style={{ color: 'red' }}>{error}</p>
          {}
          {error.includes('already in use') && (
            <button onClick={() => router.push('/login')}>Go to Login</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Register;
