import Navbar from './Navbar';

const About = () => {
  return (
    <div className="bg-your-default-bg-color px-6 py-24 h-screen lg:px-8">
      <Navbar />
      <div className="text-center mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-your-default-text-color sm:text-4xl">About Us</h2>
        <p className="mt-2 text-lg leading-8 text-your-default-text-color">
          We are dedicated to providing top-notch services and resources to help you succeed.
        </p>
        <p className="mt-4 text-lg leading-8 text-your-default-text-color">
          Our team is passionate about innovation and committed to excellence, ensuring that every client receives personalized attention and support.
        </p>
        <p className="mt-4 text-lg leading-8 text-your-default-text-color">
          Join us on our mission to make a positive impact in the community and beyond.
        </p>
      </div>
    </div>
  );
};

export default About;
