import React from 'react'
import titleImg from '../assets/images/TitleImage.png'

const ContactUs = () => {
    const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609981235!2d72.74109903409332!3d24.86073409220573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e1d13aeb817%3A0x9e606c1e1a55f8f5!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1624467234962!5m2!1sen!2s'

    return (
        <div>
            <div className='relative h-[400px] bg-cover bg-center' style={{ backgroundImage: `url(${titleImg})` }}>
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center">
                    <h1 className="text-7xl font-serif mb-4">Contact Us</h1>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 p-8">
                <div className="bg-white p-8 shadow-lg w-full max-w-md mb-8 lg:mb-0 lg:mr-8">
                    <h2 className="text-lg font-serif font-bold text-[#349705] mb-6 uppercase">Reservation</h2>
                    <h3 className="text-2xl font-serif font-semibold mb-6">Book a table</h3>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="sr-only">Your name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your name"
                                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-[#349705] focus:outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder='Your email'
                                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-[#349705] focus:outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="sr-only">Phone Number</label>
                            <input
                                type="text"
                                id="phone"
                                placeholder='Your number'
                                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-[#349705] focus:outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="date" className="sr-only">Select date</label>
                            <input
                                type="date"
                                id="date"
                                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-[#349705] focus:outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="time" className="sr-only">Select time</label>
                            <input
                                type="time"
                                id="time"
                                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-[#349705] focus:outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="persons" className="sr-only">Number of persons</label>
                            <select
                                id="persons"
                                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-[#349705] focus:outline-none"
                            >
                                <option>Number of persons</option>
                                <option>1 Person</option>
                                <option>2 Persons</option>
                                <option>3 Persons</option>
                                <option>4 Persons</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#349705] text-white py-3 rounded-lg font-semibold hover:bg-[#3e7923] transition duration-300"
                        >
                            Book now
                        </button>
                    </form>
                </div>

                <div className="bg-white p-8 shadow-lg w-full max-w-lg">
                    <h2 className="text-lg font-serif font-bold text-[#349705] mb-6 uppercase">Restaurant</h2>
                    <h3 className="text-3xl font-serif font-semibold mb-4">Your ultimate destination to get quality cuisines.</h3>
                    <p className="text-gray-600 mb-6">
                        Aliquet egestas gravida orci nulla lacus suspendisse. Vel ullamcorper ultrices volutpat enim dignissim id purus.
                    </p>

                    <div className="space-y-4">
                        <p className="text-[#349705] font-serif font-semibold">
                            Our Phone
                        </p>
                        <p className="text-gray-600">
                            (123) 456-7891
                        </p>

                        <p className="text-[#349705] font-serif font-semibold">
                            Our Email
                        </p>
                        <p className="text-gray-600">
                            restaurant@gmail.com
                        </p>

                        <p className="text-[#349705] font-serif font-semibold">
                            Our Address
                        </p>
                        <p className="text-gray-600">
                            Karachi, Pakistan
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-8">
                <h2 className="text-2xl font-serif font-semibold mb-6 text-center">Find Us Here</h2>
                <div className="w-full h-96">
                    <iframe
                        src={map}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    />
                </div>
            </div>
        </div>
    )
}

export default ContactUs;