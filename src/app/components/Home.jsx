// import Logo from "../logo.png"

import Login from "./login"

const Home = () => {
    return <>
        <div class="row" id="home-content">
            <div class="col-md-12">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3"></div>
                        <div class="col-md-6 text-center">
                            <marquee behavior="" direction="">
                                <h3 class="home-title">Find jobs through your community</h3>
                            </marquee>
                        </div>
                        <div class="col-md-3"></div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <Login/>
                        </div>

                        <div class="col-md-6 img-home">
                            <img src="images/img-home1.png" className="shadow-lg img-fluid rounded" alt="" srcSet="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Home