import React from 'react'
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import useUser from '../../hooks/use-user';
import { register } from '../services/auth';

const Register = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [errorMessage, setError] = useState("")
    const { loading, userStatus } = useUser()
    const navigate = useNavigate()

    useEffect(() => {
        if (!loading && userStatus) {
            navigate("/url")
        }
    }, [loading, userStatus, navigate])

    const handleRegister = async () => {
        try {
            const registerResponse = await register({ email, password: pass })
            console.log("reg", registerResponse)
        } catch (error) {
            setError(error?.message)
        }
    }

    const renderLoginForm = () => {
        return (
            <div className="border p-8 rounded shadow-lg">
                <div className='text-lg font-semibold my-3'>Register</div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => {
                            setEmail(e?.target?.value);
                        }}
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={pass}
                        onChange={(e) => {
                            setPass(e?.target?.value);
                        }}
                    />
                </div>
                <button
                    type="submit"
                    className={`btn btn-primary bg-blue-500`}
                    onClick={handleRegister}

                >
                    Create
                </button>
                <div className="flex flex-col">
                    <div className="text-sm  my-3 text-gray-600"> Already a member?
                        <Link to={'/login'}>
                            click to login
                        </Link>
                    </div>
                    {errorMessage ? <div className='text-red-500 text-sm font-semibold'>{errorMessage}</div> : <></>}
                </div>
            </div>
        );
    }

    return (
        <div>{renderLoginForm()}</div>
    )
}

export default Register;