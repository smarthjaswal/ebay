import React from 'react'
import "../components/Footer.css"

function Footer() {
    return (
        <div className='footer fixed-bottom' style={{ backgroundColor: "black", height: "27%" }}>
            <footer>
                <div className="container-fluid">
                    <div className="row" >
                        <div className="col-md-3 col-sm-6" >
                            <h4>Categories</h4>
                            <ol className="footer-links" style={{paddingLeft:"0rem"}}>
                                <li ><a href="/">Fashion</a></li>
                                <li><a href="/">Electronics</a></li>
                                <li><a href="/">Home & Garden</a></li>
                                <li><a href="/">Sporting Goods</a></li>
                                <li><a href="/">Toys & Hobbies</a></li>
                            </ol>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4 className='heads'>About</h4>
                            <ul className="footer-links"style={{paddingLeft:"0rem"}}>
                                <li><a href="/">About eBay</a></li>
                                <li><a href="/">News</a></li>
                                <li><a href="/">Investors</a></li>
                                <li><a href="/">Careers</a></li>
                                <li><a href="/">Government Relations</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4 className='heads'>Community</h4>
                            <ul className="footer-links"style={{paddingLeft:"0rem"}}>
                                <li><a href="/">Announcements</a></li>
                                <li><a href="/">Discussion Forums</a></li>
                                <li><a href="/">eBay Giving Works</a></li>
                                <li><a href="/">Groups</a></li>
                                <li><a href="/">eBay Celebrity</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4 className='heads'>Help & Contact</h4>
                            <ul className="footer-links"style={{paddingLeft:"0rem"}}>
                                <li><a href="/">Resolution Center</a></li>
                                <li><a href="/">Seller Center</a></li>
                                <li><a href="/">Contact us</a></li>
                                <li><a href="/">Help & Contact</a></li>
                                <li><a href="/">Fee & Credit FAQs</a></li>
                            </ul>
                        </div>
                    </div>
                        <div className="row" >
                            <div className="column col-md-8 col-sm-6">
                                <ul className="footer-links" style={{display:"flex", padding:"5px", justifyContent:"space-evenly"}}>
                                    <li><a href="/">Terms & Conditions</a></li>
                                    <li><a href="/">Privacy</a></li>
                                    <li><a href="/">Cookies</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <ul className="social-icons">
                                    <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a className="twitter" href="/"><i className="fa-brands fa-twitter"/></a></li>
                                    <li><a className="google" href="/"><i class="fa-brands fa-google"/></a></li>
                                    <li><a className="linkedin" href="/"><i class="fa-brands fa-linkedin"/></a></li>
                                </ul>
                            </div>
                        </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
