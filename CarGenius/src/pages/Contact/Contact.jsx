import Header from '@/shared/header/header'
import React from 'react'

function Contact() {
    return (
        <>
            <div className="">
                <Header />
            </div>
            <div className="">
                <section className="bg-[#eef1fb]">
                    <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                            <img
                                alt=""
                                src="../../../public/logo.png"
                                className="absolute inset-0 h-full w-full object-cover bg-white rounded-x2l border"
                            />
                        </aside>

                        <main
                            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                        >
                            <div className="max-w-xl lg:max-w-3xl">
                                {/* <img src="../../../" alt="" /> */}

                                <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                                    Welcome to CarGenius 🚗
                                </h1>
                                <h3 className='text-2xl'> how we can help you </h3>

                                <p className="mt-4 leading-relaxed text-gray-500">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                                    quibusdam aperiam voluptatum.
                                </p>

                                <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                                            First Name
                                        </label>

                                        <input
                                            type="text"
                                            id="FirstName"
                                            name="first_name"
                                            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                                            Last Name
                                        </label>

                                        <input
                                            type="text"
                                            id="LastName"
                                            name="last_name"
                                            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                        />
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                                        <input
                                            type="email"
                                            id="Email"
                                            name="email"
                                            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                        />
                                    </div>



                                    <div className="col-span-6 sm:col-span-3">
                                        <div>
                                            <label htmlFor="OrderNotes" className="block text-sm font-medium text-gray-700"> message Block </label>

                                            <textarea
                                                id="OrderNotes"
                                                className="mt-2 w-[600px] h-[200px] p-5 rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                                                rows="4"
                                                placeholder="Enter any additional order notes..."
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="col-span-6">

                                    </div>

                                    <div className="col-span-6">
                                        <p className="text-sm text-gray-500">
                                            By creating an account, you agree to our
                                            <a href="#" className="text-gray-700 underline"> terms and conditions </a>
                                            and
                                            <a href="#" className="text-gray-700 underline">privacy policy</a>.
                                        </p>
                                    </div>

                                    <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                        <button
                                            className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                        >
                                            Send
                                        </button>


                                    </div>
                                </form>
                            </div>
                        </main>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Contact
