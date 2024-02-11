import Header from './components/Header'
import HomePage from './components/Home'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <div className="container-fluid px-0 mx-0 bg_blue">
        <div className="row">
          <div className="col-md-12">
            <Header />
            <HomePage />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
