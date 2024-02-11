const Admin = () => {
    <>
        <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <a className="navbar-brand" href="index.html">
                    <img src="images/logo.png" className="img-fluid logo" alt="" srcSet=""/>
                </a>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body px-0">
                <div>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                    images, lists, etc.
                </div>
                <div className="dropdown mt-3">
                </div>
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action" aria-current="true">
                        The current link item
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">A second link item</a>
                    <a href="#" className="list-group-item list-group-item-action">A third link item</a>
                    <a href="#" className="list-group-item list-group-item-action">A fourth link item</a>
                    <a className="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link
                        item</a>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-12" id="admin-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 text-center">
                            <marquee behavior="" direction="">
                                <h3 className="home-title">Find jobs through your community</h3>
                            </marquee>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Admin