"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MapPin, Phone, AtSign } from 'lucide-react';
import Button from "../button";
// import { Oval } from "react-loader-spinner";
import * as yup from "yup";
import { useFormik } from "formik";
// import { getAllCountries } from "@/lib/services";
export default function ContactSection() {
    const [countries, setCountries] = useState([]);

    // useEffect(() => {
    //     const fetchCountries = async () => {
    //         const data = await getAllCountries();
    //         console.log(data, "jjjj");
    //         setCountries(data);
    //     };
    //     fetchCountries();
    // }, []);

    const formik = useFormik({
        initialValues: {
            title: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            country: "",
            subject: "",
            message: "",
        },
        validationSchema: yup.object({
            title: yup.string().required("Title is required"),
            firstName: yup.string().required("First Name is required"),
            lastName: yup.string().required("Last Name is required"),
            email: yup.string().email("Invalid email").required("Email is required"),
            phone: yup.string().required("Phone is required"),
            country: yup.string().required("Country is required"),
            subject: yup.string().required("Subject is required"),
            message: yup.string().required("Message is required"),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <>
            <div className="flex flex-col gap-5 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                    <div className="flex justify-center w-full h-full order-2 lg:order-1">
                        <Image width={800} height={800} src="/images/pexels-freestockpro-320007.webp" alt="About Us" className="w-full h-full max-h-[400px] object-cover" />
                    </div>
                    <div className="flex flex-col justify-start gap-3 w-full h-full order-1 lg:order-2">
                        <h1 className=" text-4xl font-bold text-start">We’re Here to Help</h1>
                        <p>Planning your perfect getaway or have a question for us?
                            We’re here to help you every step of the way.</p>
                        <p>
                            Reach out to Cavendish - Polhena, nestled on the serene southern coast of Sri Lanka. Whether you need assistance with reservations, special requests, or simply want to learn more about our resort and the experiences we offer — our team is just a message or call away.
                        </p>
                        <p>
                            Let us help make your stay unforgettable.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-[var(--bgSand)]">
                    <div className="flex flex-col gap-3 justify-start py-8 md:px-5 lg:px-0 lg:pl-5">
                        <h1 className=" text-4xl font-bold text-start">Getting Here</h1>
                        <p>
                            Cavendish - Polhena is located approximately 170 km from Bandaranaike International Airport, 150 km from Colombo, and just 80 km from Mattala Rajapaksa International Airport, offering convenient access from major travel hubs across Sri Lanka.
                        </p>
                        <div className="flex flex-col mt-[28px]">
                            <h1 className=" text-2xl font-bold mb-[40px]">Contact Info</h1>
                            {/* <span className="w-[60px] h-[1px] bg-gray-700 block mb-[40px]" /> */}
                            <div className="flex flex-col gap-1.5 ">
                                <div className="flex items-center gap-3 text-gray-800">
                                    <MapPin className="w-6 h-6" />
                                    {/* 15 GOVT. HOUSES, POLHENA, MATARA, SRI LANAKA */}
                                    <span>15 Govt. Houses, Polhena, Matara, Sri Lanka</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-800">
                                    <Phone className="w-5 h-5" />
                                    <span>+94 77 123 4567</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-800">
                                    <AtSign className="w-6 h-6 " />
                                    <span>info@cavendishpolhena.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center ">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.4239226259792!2d80.5235096245681!3d5.9361567440482155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13edc620bad4d%3A0x6591c62a45627498!2sPolhena%20Beach!5e0!3m2!1sen!2slk!4v1752419253395!5m2!1sen!2slk"
                            width="100%"
                            height="300"
                            className="rounded-md w-full h-[300px] lg:h-[400px] border-0"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                {/* <div className="flex flex-col justify-start gap-3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div className="block">
                            <label>Title </label>
                            <input type="text"></input>
                        </div>
                    </div>
                </div> */}

                <div className="flex flex-col justify-start gap-3 pt-8 md:p-8">
                    <h1 className=" text-4xl font-bold text-center mb-6">Connect with us</h1>
                    <form className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full" onSubmit={formik.handleSubmit}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="title" className="font-medium text-gray-700">
                                Title
                                {formik.touched.title && formik.errors.title && <span className="text-[var(--sandColor)]">{formik.errors.title}</span>}
                            </label>

                            <input
                                id="title"
                                name="title"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.title}
                                placeholder="Mr / Ms / Mrs"
                                className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sandColor)]"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="firstName" className="font-medium text-gray-700">First Name 
                                {formik.touched.firstName && formik.errors.firstName && <span className="text-[var(--sandColor)]">{formik.errors.firstName}</span>}
                            </label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                                placeholder="First Name"
                                className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sandColor)]"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="lastName" className="font-medium text-gray-700">Last Name
                                {formik.touched.lastName && formik.errors.lastName && <span className="text-[var(--sandColor)]"> - {formik.errors.lastName}</span>}
                            </label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                                placeholder="Last Name"
                                className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sandColor)]"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="font-medium text-gray-700">Email
                                {formik.touched.email && formik.errors.email && <span className="text-[var(--sandColor)]"> - {formik.errors.email}</span>}
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                placeholder="you@email.com"
                                className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sandColor)]"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone" className="font-medium text-gray-700">Phone
                                {formik.touched.phone && formik.errors.phone && <span className="text-[var(--sandColor)]"> - {formik.errors.phone}</span>}
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                                placeholder="+94 77 123 4567"
                                className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sandColor)]"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="country" className="font-medium text-gray-700">Country
                                {formik.touched.country && formik.errors.country && <span className="text-[var(--sandColor)]"> - {formik.errors.country}</span>}
                            </label>
                            <input
                                id="country"
                                name="country"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.country}
                                placeholder="Country"
                                className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sandColor)]"
                            />
                        </div>
                        <div className="flex flex-col gap-2 md:col-span-3">
                            <label htmlFor="subject" className="font-medium text-gray-700">Subject
                                {formik.touched.subject && formik.errors.subject && <span className="text-[var(--sandColor)]"> - {formik.errors.subject}</span>}
                            </label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.subject}
                                placeholder="Subject"
                                className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sandColor)]"
                            />
                        </div>
                        <div className="flex flex-col gap-2 md:col-span-3">
                            <label htmlFor="message" className="font-medium text-gray-700">Message
                                {formik.touched.message && formik.errors.message && <span className="text-[var(--sandColor)]"> - {formik.errors.message}</span>}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.message}
                                placeholder="How can we help you?"
                                className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--sandColor)] resize-none"
                                required
                            />
                        </div>
                        <div className="md:col-span-3 flex justify-end">
                            <Button type="submit" isLoading={formik.isSubmitting}>
                                Send Message
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}