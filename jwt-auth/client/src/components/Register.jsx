import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        `${apiBaseUrl}/api/user/register`,
        { email, password },
        { withCredentials: true }
      );

      const loginResponse = await axios.post(
        `${apiBaseUrl}/api/user/login`,
        { email, password },
        { withCredentials: true }
      );
      // setError(message)
      const { user, token } = loginResponse.data;
      console.log({ user, token });
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };
  return (
    <div className='auth-form-container'>
      <h2>Register</h2>
      <form className='auth-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            type='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            name='password'
            type='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Create Account</button>
        {error && <div className='error-message'>{error}</div>}
      </form>
    </div>
  );
};
export default Register;
