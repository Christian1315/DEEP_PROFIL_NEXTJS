"use client"

import { redirect, useRouter } from 'next/navigation';

// const { push } = useRouter()

// const LoginHandle = (e) => {
//     e.preventDefault()
//     // push("/admin")
//     redirect("/admin")
// }


const Login = () => {
    const LoginHandle = (e) => {
        e.preventDefault()
        console.log("Connexion ........")
        redirect("/Admin")
    }

    return <>
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
                <form className="home-form rounded shadow-lg sign-up-form">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email or phone</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <a href="" className="btn">Forgot password?</a>
                    </div>
                    <a href='admin' type="submit" className="btn btn-yellow w-100">Se connecter</a>
                    <br />
                    <br />
                    <p className="">
                        Vous n'avez pas enccore un compte ? &nbsp;
                        <a href="signup" className="btn yellow">Inscrivez-vous ici!</a>
                    </p>
                </form>
            </div>
            <div className="col-md-1"></div>
        </div>
    </>
}

export default Login