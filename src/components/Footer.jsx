import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand and Description */}
                <div>
                    <h3 className="text-2xl font-bold mb-4">e-Shop</h3>
                    <p className="text-gray-400">
                        Your one-stop shop for all your needs. Shop with us and
                        experience the best online shopping experience.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className="hover:text-gray-300">Home</Link>
                        </li>
                        <li>
                            <Link to="/shop" className="hover:text-gray-300">Shop</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-gray-300">About</Link>
                        </li>
                    </ul>
                </div>

                {/* Follow Us and Subscribe */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                    <div className="flex space-x-4 mb-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <FaFacebook size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <FaInstagram size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <FaTwitter size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <FaGithub size={24} />
                        </a>
                    </div>
                    <form className="flex space-x-2">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="px-4 py-2 w-full rounded-md text-black focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className="text-center text-gray-400 mt-8">
                <p>&copy; {new Date().getFullYear()} e-Shop. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
