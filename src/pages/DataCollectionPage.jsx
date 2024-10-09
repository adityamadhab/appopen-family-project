import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { User, Users, FileText, PlusCircle, Upload, CheckCircle } from 'lucide-react';
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
                // Here you would typically send the OTP to your server for verification
                return new Promise((resolve) => {
                    setTimeout(() => {
                        if (otp === '1234') {  // This is a mock verification
                            resolve()
                        } else {
                            Swal.showValidationMessage('Invalid OTP')
                        }
                    }, 2000)
                })
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Verified!',
                    icon: 'success'
                })
                setOtpFields(prev => ({ ...prev, [field]: false }));
            }
        })
    };

    const VerificationFields = ({ prefix }) => (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {['aadhar', 'pan', 'voterId'].map(doc => (
                <div key={`${prefix}.${doc}`} className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">{doc.charAt(0).toUpperCase() + doc.slice(1)} Number</label>
                    <div className="flex">
                        <input
                            {...register(`${prefix}.${doc}`)}
                            placeholder={`Enter ${doc} number`}
                            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        />
                        <button
                            type="button"
                            onClick={() => toggleOtpField(`${prefix}.${doc}`)}
                            className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors"
                        >
                            Verify
                        </button>
                    </div>
                    {otpFields[`${prefix}.${doc}`] && (
                        <div className="mt-2">
                            <input
                                placeholder="Enter OTP"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            />
                            <button
                                type="button"
                                onClick={() => verifyOtp(`${prefix}.${doc}`)}
                                className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                            >
                                Submit OTP
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );

    const DocumentUpload = ({ prefix }) => (
        <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload Document</label>
            <div className="flex items-center justify-center w-full">
                <label htmlFor={`${prefix}-file-upload`} className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-3 text-gray-400" />
                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500">PDF, JPG, PNG (MAX. 2MB)</p>
                    </div>
                    <input id={`${prefix}-file-upload`} type="file" className="hidden" />
                </label>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-8">
            <div className="container mx-auto max-w-4xl">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    {/* Personal Information */}
                    <section className="space-y-6 mb-8">
                        <div className="border-b pb-4">
                            <h2 className="text-2xl font-bold text-blue-900 flex items-center">
                                <User className="w-6 h-6 mr-2" />
                                Personal Information
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    {...register('name', { required: true })}
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Date of Birth</label>
                                <input
                                    {...register('dob', { required: true })}
                                    type="date"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Place of Birth</label>
                                <input
                                    {...register('pob', { required: true })}
                                    placeholder="Enter place of birth"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Gender</label>
                                <select
                                    {...register('gender', { required: true })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        <VerificationFields prefix="personal" />
                        <DocumentUpload prefix="personal" />
                    </section>

                    {/* Parent Information */}
                    <section className="space-y-6 mb-8">
                        <div className="border-b pb-4">
                            <h2 className="text-2xl font-bold text-blue-900 flex items-center">
                                <Users className="w-6 h-6 mr-2" />
                                Parent Information
                            </h2>
                        </div>
                        {['father', 'mother'].map((parent) => (
                            <div key={parent} className="space-y-4">
                                <h3 className="text-xl font-semibold text-blue-800 capitalize">{parent}'s Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">{parent}'s Name</label>
                                        <input
                                            {...register(`${parent}.name`)}
                                            placeholder={`Enter ${parent}'s name`}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Date of Birth</label>
                                        <input
                                            {...register(`${parent}.dob`)}
                                            type="date"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                        />
                                    </div>
                                </div>
                                <VerificationFields prefix={parent} />
                                <DocumentUpload prefix={parent} />
                            </div>
                        ))}
                    </section>

                    {/* Grandparent Information */}
                    <section className="space-y-6 mb-8">
                        <div className="border-b pb-4">
                            <h2 className="text-2xl font-bold text-blue-900 flex items-center">
                                <Users className="w-6 h-6 mr-2" />
                                Grandparent Information
                            </h2>
                        </div>
                        {['paternalGrandfather', 'paternalGrandmother', 'maternalGrandfather', 'maternalGrandmother'].map((grandparent) => (
                            <div key={grandparent} className="space-y-4">
                                <h3 className="text-xl font-semibold text-blue-800 capitalize">{grandparent.replace(/([A-Z])/g, ' $1').trim()}'s Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Name</label>
                                        <input
                                            {...register(`${grandparent}.name`)}
                                            placeholder="Enter name"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Date of Birth</label>
                                        <input
                                            {...register(`${grandparent}.dob`)}
                                            type="date"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                        />
                                    </div>
                                </div>
                                <VerificationFields prefix={grandparent} />
                                <DocumentUpload prefix={grandparent} />
                            </div>
                        ))}
                    </section>

                    {/* Sibling Information */}
                    <section className="space-y-6 mb-8">
                        <div className="border-b pb-4">
                            <h2 className="text-2xl font-bold text-blue-900 flex items-center">
                                <Users className="w-6 h-6 mr-2" />
                                Sibling Information
                            </h2>
                        </div>
                        {siblingFields.map((item, index) => (
                            <div key={item.id} className="p-4 bg-gray-50 rounded-lg space-y-4">
                                <h4 className="font-medium text-gray-700">Sibling {index + 1}</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Name</label>
                                        <input
                                            {...register(`siblings.${index}.name`)}
                                            placeholder="Enter name"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Date of Birth</label>
                                        <input
                                            {...register(`siblings.${index}.dob`)}
                                            type="date"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Place of Birth</label>
                                        <input
                                            {...register(`siblings.${index}.pob`)}
                                            placeholder="Enter place of birth"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                        />
                                    </div>
                                </div>
                                <VerificationFields prefix={`siblings.${index}`} />
                                <DocumentUpload prefix={`siblings.${index}`} />
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => appendSibling({})}
                            className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                            <PlusCircle className="w-5 h-5" />
                            Add Sibling
                        </button>
                    </section>

                    {/* Submit Button */}
                    <div className="flex justify-end mt-8">
                        <button
                            type="submit"
                            className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                        >
                            Submit Application
                            <CheckCircle className="w-5 h-5" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DataCollectionPage;