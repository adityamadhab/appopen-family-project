// src/components/Footer.jsx
function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-12">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Family Tree App. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
