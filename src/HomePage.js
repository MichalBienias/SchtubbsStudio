import React from 'react';

function HomePage() {
    return (
        <div className="homepage-container">

            {/* 1. Personal Introduction */}
            <section className="intro-section">
                <h1>Hello, I'm Michal Bienias</h1>
                <p>A Software Engineer passionate about [specific tech/topics].</p>
            </section>

            {/* 2. Professional Photo */}
            <section className="photo-section">
                {/* You can replace 'path_to_your_photo.jpg' with the actual path to your photo */}
                <img src="path_to_your_photo.jpg" alt="Michal Bienias" />
            </section>

            {/* 3. Call-to-Action */}
            <section className="cta-section">
                <a href="/resume" className="cta-button">View My Resume</a>
            </section>

            {/* 4. Featured Work/Portfolio Highlights */}
            <section className="portfolio-highlights-section">
                <h2>Featured Projects</h2>
                {/* Add individual project highlights here */}
            </section>

            {/* 5. Testimonials */}
            <section className="testimonials-section">
                <h2>What Others Say</h2>
                {/* Add testimonial quotes here */}
            </section>

            {/* Blog Post */}
<section className="blog-post-section">
    <h2>Building a React App for Tattoo Stencil Designs with DALL·E API: A Learning Experience</h2>
    <p>
        There's a growing demand in the modern tattoo world for unique, tailor-made designs. As an avid tech enthusiast and a fan of the tattoo culture, I embarked on a journey to merge the two. The objective was clear: build a React application that uses OpenAI's DALL·E to generate tattoo stencil designs.
    </p>
    <h3>Inspiration Behind the Project</h3>
    <p>
        The inspiration came from the impressive capability of DALL·E to generate images from textual descriptions. Why not leverage this to bring a user's tattoo ideas to life? With React's robust framework and DALL·E's prowess, the path seemed promising.
    </p>
    <h3>Setting the Stage: React</h3>
    <p>
        Starting with a basic React setup allowed for a focused foundation. The `create-react-app` scaffold gave a clean slate to structure the application, emphasizing a user-friendly interface for inputting design descriptions and displaying the generated designs.
    </p>
    <h3>Introducing DALL·E API</h3>
    <p>
        DALL·E is a neural network by OpenAI, capable of generating distinct images from textual prompts. Implementing the API required setting up asynchronous calls to send user input and receive generated images, handling potential errors, and optimizing the generated images for stencil design visualization.
    </p>
    <h3>Challenges & Learning</h3>
    <p>
        The journey wasn't without its hurdles. User input nuances, design versatility, and managing React's asynchronous nature posed challenges. However, every challenge faced paved the way for a new learning opportunity.
    </p>
    <h3>Reflections</h3>
    <p>
        This project underscored the incredible potential of combining AI with web development. React's dynamic capabilities, paired with DALL·E's innovative image generation, brought forth an application where users could visualize their tattoo ideas in real-time.
    </p>
    <h3>Conclusion</h3>
    <p>
        Building this React application was more than just coding; it was about creating an intersection of art and technology. As tattoos etch stories on the skin, DALL·E etched a story of innovation and creativity in my developer journey. And this is just the beginning.
    </p>
</section>


            {/* 7. Skills & Technologies */}
            <section className="skills-section">
                <h2>Skills & Technologies</h2>
                <ul>
                    <li>Java</li>
                    <li>C++</li>
                    <li>Python</li>
                    {/* ... and so on */}
                </ul>
            </section>

            {/* 8. Contact Information */}
            <section className="contact-section">
                <h2>Contact Me</h2>
                <p>Email: michalbienias9@gmail.com</p>
                <p>Phone: 201-256-5925</p>
                {/* Add any other preferred methods of contact or links to LinkedIn, GitHub, etc. */}
            </section>

        </div>
    );
}

export default HomePage;
