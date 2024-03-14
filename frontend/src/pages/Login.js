import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      
      <label>Email Address</label>
      <input 
      placeholder="Email"
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
       <label>Password</label>
      <input 
      placeholder="Password"
      type={showPassword ? "text" : "password"} // Toggle between 'text' and 'password'
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />
       <button
          type="button"
          className="eye-button"
          onClick={() => setShowPassword(!showPassword)}
        >
         <i className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`} />
        </button>
         <br />

      <button disabled={isLoading} className="btnlg">Log in</button>
      <Link to="/signup"><button disabled={isLoading} className="btnsp">Sign up</button></Link>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Login