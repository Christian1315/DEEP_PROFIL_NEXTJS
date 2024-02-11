

const SignUp = () => {
    return <>
        <div class="row" id="home-content">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <h3 class="home-title text-center">Inscrivez-vous ici!</h3>
                <form class="home-form rounded shadow-lg sign-up-form">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Nom</label>
                                <input type="text" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Prénom</label>
                                <input type="email" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Groupe</label>
                                <select name="group" class="form-control" id="">
                                    <option value="">Groupe 1</option>
                                    <option value="">Groupe 2</option>
                                    <option value="">Groupe 3</option>
                                    <option value="">Groupe 4</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">District</label>
                                <select name="group" class="form-control" id="">
                                    <option value="">District 1</option>
                                    <option value="">District 2</option>
                                    <option value="">District 3</option>
                                    <option value="">District 4</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email</label>
                                <input type="email" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Phone</label>
                                <input type="email" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Confirmez votre Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-12">
                            <a href="index.html" type="submit" class="btn btn-yellow w-100">S'Inscrire</a>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-md-3"></div>
        </div>
    </>
}

export default SignUp