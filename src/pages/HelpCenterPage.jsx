// src/pages/HelpCenterPage.jsx
function HelpCenterPage() {
    return (
        <div className="container mx-auto py-8">
            {/* FAQs Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {/* Collapsible FAQs */}
                    <details className="p-4 border rounded">
                        <summary className="font-semibold">How do I create a family tree?</summary>
                        <p className="mt-2 text-gray-600">You can create a family tree by adding your family members in the data collection section...</p>
                    </details>
                    <details className="p-4 border rounded">
                        <summary className="font-semibold">How secure is my data?</summary>
                        <p className="mt-2 text-gray-600">Your data is stored securely and is only accessible to you...</p>
                    </details>
                    {/* Add more FAQs as needed */}
                </div>
            </section>

            {/* Contact Form */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <form>
                    <input placeholder="Your Name" className="input mb-4" />
                    <input placeholder="Your Email" className="input mb-4" />
                    <textarea placeholder="Your Message" className="input mb-4" rows="5"></textarea>
                    <button type="submit" className="btn">Submit</button>
                </form>
            </section>
        </div>
    );
}

export default HelpCenterPage;