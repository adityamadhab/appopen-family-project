import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { User, Users, PlusCircle, Upload, CheckCircle, Link2 } from 'lucide-react';
import Swal from 'sweetalert2';

function DataCollectionPage() {
    const { register, control, handleSubmit } = useForm();
    const { fields: siblingFields, append: appendSibling } = useFieldArray({
        control,
        name: 'siblings',
    });

    const [otpFields, setOtpFields] = useState({});

    useEffect(() => {
        Swal.fire({
            title: 'Welcome to the Application Form',
            text: 'Please fill out all required fields and verify your documents. Make sure to upload supporting documents where necessary.',
            icon: 'info',
            confirmButtonText: 'Got it!'
        });
    }, []);

    const onSubmit = data => {
        console.log(data);
        Swal.fire({
            title: 'Success!',
            text: 'Your application has been submitted successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };

    const toggleOtpField = (field) => {
        setOtpFields(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
        if (!otpFields[field]) {
            Swal.fire({
                title: 'OTP Sent!',
                text: 'Please check your registered mobile number for the OTP.',
                icon: 'info',
                timer: 3000,
                timerProgressBar: true,
                showConfirmButton: false
            });
        }
    };

    const verifyOtp = (field) => {
        Swal.fire({
            title: 'Enter OTP',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Verify',
            showLoaderOnConfirm: true,
            preConfirm: (otp) => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        if (otp === '1234') {
                            resolve();
                        } else {
                            Swal.showValidationMessage('Invalid OTP');
                        }
                    }, 2000);
                });
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Verified!',
                    icon: 'success'
                });
                setOtpFields(prev => ({ ...prev, [field]: false }));
            }
        });
    };

    const VerificationFields = ({ prefix }) => (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {['aadhar', 'pan', 'voterId'].map(doc => (
                <div key={`${prefix}.${doc}`} className="space-y-4">
                    <label className="text-sm font-bold text-gray-700">{doc.charAt(0).toUpperCase() + doc.slice(1)} Number</label>
                    <div className="flex">
                        <input
                            {...register(`${prefix}.${doc}`)}
                            placeholder={`Enter ${doc} number`}
                            className="flex-grow px-2 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                        />
                        <button
                            type="button"
                            onClick={() => toggleOtpField(`${prefix}.${doc}`)}
                            className="px-4 py-2 bg-gray-700 text-white border border-gray-600 hover:bg-gray-800"
                        >
                            Verify
                        </button>
                    </div>
                    {otpFields[`${prefix}.${doc}`] && (
                        <div className="mt-2">
                            <input
                                placeholder="Enter OTP"
                                className="w-full px-2 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                            />
                            <button
                                type="button"
                                onClick={() => verifyOtp(`${prefix}.${doc}`)}
                                className="mt-2 px-4 py-2 bg-green-700 text-white border border-gray-600 hover:bg-green-800"
                            >
                                Submit OTP
                            </button>
                        </div>
                    )}
                    <DocumentUpload prefix={prefix} doc={doc} />
                </div>
            ))}
        </div>
    );

    const DocumentUpload = ({ prefix, doc }) => (
        <div className="mt-2">
            <label className="block text-sm font-bold text-gray-700 mb-2">Upload {doc.charAt(0).toUpperCase() + doc.slice(1)} Document</label>
            <div className="flex items-center justify-center w-full">
                <label htmlFor={`${prefix}-${doc}-file-upload`} className="flex flex-col items-center justify-center w-full h-24 border border-gray-400 bg-white cursor-pointer">
                    <div className="text-center flex flex-col justify-center items-center	">
                        <Upload className="w-6 h-6 mb-2 text-gray-600" />
                        <p className="text-xs text-gray-600"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500">PDF, JPG, PNG (MAX. 2MB)</p>
                    </div>
                    <input id={`${prefix}-${doc}-file-upload`} type="file" className="hidden" />
                </label>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-100 px-4 py-8">
            <div className="container mx-auto max-w-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-gray-400 p-6 mb-8">
                    {/* Personal Information */}
                    <section className="space-y-6 mb-8">
                        <div className="border-b pb-2 mb-4">
                            <h2 className="text-xl font-bold text-gray-800">
                                <User className="inline-block w-5 h-5 mr-2" />
                                Personal Information
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Full Name</label>
                                <input
                                    {...register('name', { required: true })}
                                    placeholder="Enter your full name"
                                    className="w-full px-2 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Date of Birth</label>
                                <input
                                    {...register('dob', { required: true })}
                                    type="date"
                                    className="w-full px-2 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Place of Birth</label>
                                <input
                                    {...register('pob', { required: true })}
                                    placeholder="Enter place of birth"
                                    className="w-full px-2 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Gender</label>
                                <select
                                    {...register('gender', { required: true })}
                                    className="w-full px-2 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        <VerificationFields prefix="personal" />
                    </section>

                    {/* Parent Information */}
                    <section className="space-y-6 mb-8">
                        <div className="border-b pb-2 mb-4">
                            <h2 className="text-xl font-bold text-gray-800">
                                <Users className="inline-block w-5 h-5 mr-2" />
                                Parent Information
                            </h2>
                        </div>
                        {['father', 'mother'].map((parent) => (
                            <div key={parent} className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-700 capitalize">{parent}'s Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">{parent}'s Name</label>
                                        <input
                                            {...register(`${parent}.name`)}
                                            placeholder={`Enter ${parent}'s name`}
                                            className="w-full px-2 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Date of Birth</label>
                                        <input
                                            {...register(`${parent}.dob`)}
                                            type="date"
                                            className="w-full px-2 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                                        />
                                    </div>
                                </div>
                                <VerificationFields prefix={parent} />
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        className="px-4 py-2 bg-gray-700 text-white border border-gray-600 hover:bg-gray-800"
                                    >
                                        <Link2 className="inline-block w-5 h-5 mr-1" />
                                        Request Linking
                                    </button>
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* Grandparent Information */}
                    <section className="space-y-6 mb-8">
                        <div className="border-b pb-2 mb-4">
                            <h2 className="text-xl font-bold text-gray-800">
                                <Users className="inline-block w-5 h-5 mr-2" />
                                Grandparent Information
                            </h2>
                        </div>
                        {['paternalGrandfather', 'paternalGrandmother', 'maternalGrandfather', 'maternalGrandmother'].map((grandparent) => (
                            <div key={grandparent} className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-700 capitalize">{grandparent.replace(/([A-Z])/g, ' $1').trim()}'s Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Name</label>
                                        <input
                                            {...register(`${grandparent}.name`)}
                                            placeholder="Enter name"
                                            className="w-full px-2 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Date of Birth</label>
                                        <input
                                            {...register(`${grandparent}.dob`)}
                                            type="date"
                                            className="w-full px-2 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                                        />
                                    </div>
                                </div>
                                <VerificationFields prefix={grandparent} />
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        className="px-4 py-2 bg-gray-700 text-white border border-gray-600 hover:bg-gray-800"
                                    >
                                        <Link2 className="inline-block w-5 h-5 mr-1" />
                                        Request Linking
                                    </button>
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* Sibling Information */}
                    <section className="space-y-6 mb-8">
                        <div className="border-b pb-2 mb-4">
                            <h2 className="text-xl font-bold text-gray-800">
                                <Users className="inline-block w-5 h-5 mr-2" />
                                Sibling Information
                            </h2>
                        </div>
                        {siblingFields.map((item, index) => (
                            <div key={item.id} className="p-4 bg-gray-100 border border-gray-300 rounded-lg space-y-4">
                                <h4 className="font-semibold text-gray-700">Sibling {index + 1}</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Name</label>
                                        <input
                                            {...register(`siblings.${index}.name`)}
                                            placeholder="Enter name"
                                            className="w-full px-2 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Date of Birth</label>
                                        <input
                                            {...register(`siblings.${index}.dob`)}
                                            type="date"
                                            className="w-full px-2 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Place of Birth</label>
                                        <input
                                            {...register(`siblings.${index}.pob`)}
                                            placeholder="Enter place of birth"
                                            className="w-full px-2 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                                        />
                                    </div>
                                </div>
                                <VerificationFields prefix={`siblings.${index}`} />
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        className="px-4 py-2 bg-gray-700 text-white border border-gray-600 hover:bg-gray-800"
                                    >
                                        <Link2 className="inline-block w-5 h-5 mr-1" />
                                        Request Linking
                                    </button>
                                </div>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => appendSibling({})}
                            className="flex items-center gap-2 px-4 py-2 text-gray-800 bg-gray-300 hover:bg-gray-400"
                        >
                            <PlusCircle className="w-5 h-5" />
                            Add Sibling
                        </button>
                    </section>

                    {/* Submit Button */}
                    <div className="flex justify-end mt-8">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-gray-700 text-white border border-gray-600 hover:bg-gray-800"
                        >
                            Submit Application
                            <CheckCircle className="inline-block w-5 h-5 ml-2" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DataCollectionPage;
