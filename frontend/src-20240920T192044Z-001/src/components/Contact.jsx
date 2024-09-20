import { useState } from 'react';
import Navbar from './Navbar';

const Contact = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="bg-your-default-bg-color px-6 py-24 lg:px-8">
        <Navbar/>
      <div className="text-center mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-your-default-text-color sm:text-4xl">Contact Sales</h2>
        <p className="mt-2 text-lg leading-8 text-your-default-text-color">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
      </div>
      <form className="mx-auto mt-16 max-w-xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-your-default-text-color">First Name</label>
            <input id="first-name" name="first-name" type="text" required className="block w-full rounded-md border-0 px-3.5 py-2 text-your-default-text-color shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-your-default-focus-color sm:text-sm" />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-your-default-text-color">Last Name</label>
            <input id="last-name" name="last-name" type="text" required className="block w-full rounded-md border-0 px-3.5 py-2 text-your-default-text-color shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-your-default-focus-color sm:text-sm" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-your-default-text-color">Company</label>
            <input id="company" name="company" type="text" className="block w-full rounded-md border-0 px-3.5 py-2 text-your-default-text-color shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-your-default-focus-color sm:text-sm" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-your-default-text-color">Email</label>
            <input id="email" name="email" type="email" required className="block w-full rounded-md border-0 px-3.5 py-2 text-your-default-text-color shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-your-default-focus-color sm:text-sm" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-your-default-text-color">Phone Number</label>
            <input id="phone-number" name="phone-number" type="tel" required className="block w-full rounded-md border-0 px-3.5 py-2 text-your-default-text-color shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-your-default-focus-color sm:text-sm" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-your-default-text-color">Message</label>
            <textarea id="message" name="message" rows={4} required className="block w-full rounded-md border-0 px-3.5 py-2 text-your-default-text-color shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-your-default-focus-color sm:text-sm" />
          </div>
          <div className="flex items-center sm:col-span-2">
            <input type="checkbox" checked={agreed} onChange={() => setAgreed(!agreed)} className="mr-2 h-4 w-4 text-your-default-focus-color border-gray-300 rounded" />
            <label className="text-sm leading-6 text-your-default-text-color">
              By selecting this, you agree to our <a href="#" className="font-semibold text-your-default-focus-color">privacy policy</a>.
            </label>
          </div>
        </div>
        <div className="mt-10">
          <button type="submit" className="block w-full rounded-md bg-your-default-focus-color px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-your-default-hover-color">Let's Talk</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
