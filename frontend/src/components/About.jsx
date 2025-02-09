import React from "react";

function About() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 p-32">
        <div className="text-center">
          <h1 className="mx-auto text-2xl font-semibold md:text-4xl">
            About Us
          </h1>
          <p className="py-8">
            Welcome to <span className="text-pink-500">BookStore</span>, your one-stop destination for all things books! We are passionate about literature and aim to provide a seamless experience for book lovers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our mission is to make books accessible to everyone, everywhere. We believe in the power of stories to inspire, educate, and transform lives.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Our Story</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Founded in 2023, BookStore started as a small online platform for book enthusiasts. Over time, we've grown into a community of readers, writers, and thinkers who share a love for literature.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">What We Offer</h2>
            <p className="text-gray-700 dark:text-gray-300">
              From bestsellers to hidden gems, we offer a wide range of books across genres. Whether you're a fan of fiction, non-fiction, or poetry, we've got something for you.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Join Us</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Become a part of our growing community! Sign up today to explore our collection, participate in discussions, and stay updated on the latest releases.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;