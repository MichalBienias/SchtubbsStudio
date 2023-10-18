import React from 'react';

function Resume() {
    return (
        <div className="resume-container">
            <h1>Michal Bienias</h1>
            <p>Software Engineering</p>
            
            <section>
                <h2>Contact Information</h2>
                <address>
                    West Chester, PA, 19383<br />
                    michalbienias9@gmail.com<br />
                    2012565925
                </address>
            </section>

            <section>
                <h2>Professional Summary</h2>
                <p>Reliable employee with a software engineering position and work experience. Demonstrated capability in teamwork, analytical skills, problem-solving, and adaptability. Seeking a challenging role to further hone these skills and take on increased responsibilities.</p>
            </section>

            <section>
                <h2>Employment History</h2>
                <h3>Abercrombie and Fitch / Hollister Co. PA — Jan. 2021 to Present</h3>
                <ul>
                    <li>Developed and implemented online strategies promoting the brand, increasing store traffic and conversion rates.</li>
                    <li>Devised creative marketing campaigns and presentations.</li>
                    <li>Promoted from Brand Rep to Keyholder managerial position.</li>
                    <li>Enhanced brand awareness and customer loyalty through effective social media strategies.</li>
                </ul>

                <h3>Self-Employed: Amazon Seller and Business Owner, West Chester, PA — March 2023 to Present</h3>
                <ul>
                    <li>Established and grew Schtubbs LLC, an Amazon selling venture, from the ground up.</li>
                    <li>Managed all aspects of the business, including product sourcing, inventory management, customer service, and financial tracking.</li>
                    <li>Successfully navigated the complexities of the Amazon marketplace, ensuring compliance with all platform guidelines and maintaining a high seller rating.</li>
                    <li>Handled customer inquiries, returns, and feedback, consistently achieving positive reviews and building a loyal customer base.</li>
                    <li>Stayed updated with e-commerce trends, Amazon platform changes, and customer preferences to adapt business strategies and maintain competitiveness.</li>
                    <li>Leveraged tools and software to optimize product listings, track sales metrics, and forecast inventory needs.</li>
                    <li>Collaborated with suppliers and negotiated deals to ensure quality products and timely deliveries, while maintaining profitable margins.</li>
                </ul>
            </section>

            <section>
                <h2>Education</h2>
                <h3>West Chester University of Pennsylvania, West Chester, PA — Aug. 2021 to Present</h3>
                <p>Bachelor of Science: Computer Science and Programming. GPA: 3.67</p>
                <p>Clubs: Men's Soccer, Computer Science Club, Chess Club</p>
                <h3>Pocono Mountain East High School, Swiftwater, PA — Aug. 2016 to Jun. 2021</h3>
                <p>High School Diploma with a GPA of 3.70. SAT: 1380, Rank: 95/503, Varsity Soccer Captain</p>
            </section>

            <section>
                <h2>Courses</h2>
                <ul>
                    <li>CSC 241 Data Structure and Algorithms - Jan. 2023 to May 2023</li>
                    <li>CSC 301 Computer Security and Ethics - Jan. 2023 to May 2023</li>
                </ul>
            </section>

            <section>
                <h2>Projects</h2>
                <h3>Twitter Basic Framework - July. 2023 to Present</h3>
                <p>Utilized React framework and CSS to create a functional replica of the Twitter interface to post, retweet, and like posts. Integrated search functionality and implemented MySQL to track user data.</p>
                <h3>Dropservice Website - August. 2023 to Present</h3>
                <p>Created a dynamic and responsive frontend website offering various website building and maintainence services. Integrated backend functions with PHP and SQL to provide real-time updates. Used HTML, CSS, and JavaScript for frontend with a focus on user-friendly interfaces.</p>
                <h3>Tattoo Design Generator AI App using DALL·E API — Oct. 2023</h3>
                <p>Developed an application that harnesses the DALL·E API to dynamically generate images based on user-provided descriptions. Incorporated into tattoo stencil design generating app.</p>
            </section>


            <section>
                <h2>Skills</h2>
                <ul>
                    <li>Critical Thinking</li>
                    <li>Teamwork and Collaboration</li>
                    <li>Analytical and Adaptable</li>
                    <li>Java, C++, Python, Javascript</li>
                    <li>React Framework, HTML5, CSS3, PHP</li>
                </ul>
            </section>

            <section>
                <h2>Languages</h2>
                <ul>
                    <li>Polish</li>
                    <li>English</li>
                    <li>Spanish</li>
                </ul>
            </section>

        </div>
    );
}

export default Resume;
