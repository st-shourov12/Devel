const Banner = () => {
    return (
        <section className="min-h-[60vh] bg-base-200 flex items-center justify-center px-4">
            <div className="text-center max-w-11/12 mx-auto">

                {/* Badge */}
                <span className="badge badge-warning mb-4">
                    🚀 New Courses Added
                </span>

                {/* Headline */}
                <h1 className="text-5xl font-bold mb-4">
                    Learn Web Dev <br />
                    <span className="text-orange-600">The Right Way</span>
                </h1>

                {/* Subtitle */}
                <p className="text-base-content/60 text-lg mb-8">
                    Master HTML, CSS, JavaScript, React and more with
                    hands-on projects and real-world experience.
                </p>

                {/* CTA Buttons */}
                <div className="flex gap-3 justify-center flex-wrap">
                    <a href="/courses" className="btn bg-orange-600 btn-lg">
                        Browse Courses
                    </a>
                    <a href="/about" className="btn btn-outline btn-lg">
                        Learn More
                    </a>
                </div>

                {/* Stats */}
                <div className="flex gap-8 justify-center mt-12 flex-wrap">
                    <div>
                        <p className="text-2xl font-bold">42k+</p>
                        <p className="text-base-content/50 text-sm">Students</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold">8+</p>
                        <p className="text-base-content/50 text-sm">Courses</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold">4.8★</p>
                        <p className="text-base-content/50 text-sm">Rating</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Banner;