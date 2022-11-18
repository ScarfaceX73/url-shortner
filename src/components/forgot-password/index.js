import { useState } from "react";
import { Link } from "react-router-dom";
import { forgotPassword } from "../services/auth";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [errorMessage, setError] = useState("")
    const [isMailSendSuccess, setMailSendSuccess] = useState(false)

    const handleForgot = async () => {
        try {
            const resp = await forgotPassword({ email });
            if (resp?.status === 200) {
                setMailSendSuccess(true)
            }

        } catch (error) {
            setError(error?.message)
        }
    };

    if (isMailSendSuccess) {
        return <div className="border p-10 rounded shadow-lg w-64">
            <div className='text-lg font-semibold my-3'>Forgot Password</div>
            <div className="mb-3">
                Mail has been sent
            </div>
        </div>
    }

    const renderLoginForm = () => {
        return (
            <div className="border p-10 rounded shadow-lg">
                <div className='text-lg font-semibold my-3'>Forgot Password</div>
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
                <button
                    type="submit"
                    className={`btn btn-primary bg-blue-500`}
                    onClick={handleForgot}
                >
                    Submit
                </button>
                <div className="flex flex-col my-3">
                    {errorMessage ? <div className='text-red-500 text-sm font-semibold'>{errorMessage}</div> : <></>}
                </div>
            </div>
        );
    };

    return <>{renderLoginForm()}</>

};

export default ForgotPassword;
