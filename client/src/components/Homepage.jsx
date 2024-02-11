import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Homepage = () => {
    return (
        <div>
            {/* Header */}
            <header className="bg-blue-500 py-4 text-white text-center">
                <h1 className="text-4xl font-bold">Welcome to LEGAL LEX</h1>
                <p className="text-lg mt-2">Leading the Legal Frontier with AI Intelligence</p>
            </header>

            {/* Main Section */}
            <main className="container mx-auto py-8">
                {/* Call-to-Action */}
                <section className="text-center mb-8">
                    <h2 className="text-2xl font-bold">Start Chatting Now</h2>
                    <p className="text-lg mt-2">Jdemocratize legal assistance in India through AI-driven simplicity and accessibility</p>
                    <Link to="/chat" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 mt-4 rounded-md inline-block">Chat Now</Link>
                </section>

                {/* Features Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-center mb-4">Our Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">Feature 1</h3>
                            <p>Enhancing Accessibility through Multilingual Support and Intuitive Design.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">Feature 2</h3>
                            <p>Simplifying Legal Processes with AI Technology.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">Feature 3</h3>
                            <p>Empowering Users with Knowledge and Comprehensive Support.</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 py-4 text-white text-center">
                <p>&copy; 2024 LegalLex. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Homepage;
