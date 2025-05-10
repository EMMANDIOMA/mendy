import React from 'react'

function Footer() {
    return (
        <>
          
            <footer className="bg-green-800 text-white pt-10">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8">

                    {/* Logo & Description */}
                    <div>
                        <h2 className="text-2xl font-bold mb-3">Abia Jobs</h2>
                        <p className="text-sm">Connecting talents with opportunities in Abia State and beyond.</p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="font-semibold mb-3">Quick Links</h3>
                        <ul className="space-y-1 text-sm">
                            <li><a href="/jobs" className="hover:underline">Find Jobs</a></li>
                            <li><a href="/employers" className="hover:underline">Employers</a></li>
                            <li><a href="/about" className="hover:underline">About Us</a></li>
                            <li><a href="/contact" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-semibold mb-3">Resources</h3>
                        <ul className="space-y-1 text-sm">
                            <li><a href="/faq" className="hover:underline">FAQs</a></li>
                            <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
                            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Social media links */}
                    <div>
                        <p className="text-[15px] font-semibold">Follows on social media</p>
                        <p>Facebook</p>
                        <p>Facebook</p>
                        <p>Facebook</p>
                        <p>Facebook</p>
                    </div>

                    {/* Newsletter Signup */}
                    <div>
                        <h3 className="font-semibold mb-3">Job Alerts</h3>
                        <p className="text-sm mb-3">Subscribe to get the latest job updates directly in your inbox.</p>
                        <form className="flex flex-col border border-white">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="px-3 py-2 rounded focus:outline-1 bg-white text-black"
                            />
                            <button
                                type="submit"
                                className="bg-red-600 hover:bg-red-700 py-2 rounded text-white"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-green-800 mt-10 py-4 text-center text-sm text-gray-300 px-4">
                    <div className="mb-2">
                        <span className="mr-2">Follow us:</span>
                        <a href="#" className="mr-2 hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="mr-2 hover:text-gray-400"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    &copy; {new Date().getFullYear()} Abia Jobs. All rights reserved.
                </div>
            </footer>

        </>
    )
}

export default Footer
