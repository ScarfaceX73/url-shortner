import { useState } from "react"
import { login } from "../services/auth"

const Login = () => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const handleLogin = async () => {
        await login({ email, password: pass })
    }

    const renderLoginForm = () => {
        return <div className="w-50">
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={e => { setEmail(e?.target?.value) }} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" value={pass} onChange={e => { setPass(e?.target?.value) }} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleLogin}>Submit</button>
        </div>
    }

    return <>
        {renderLoginForm()}
    </>

}

export default Login