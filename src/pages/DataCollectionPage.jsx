import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { User, Users, PlusCircle, Upload, CheckCircle, Link2, Check } from 'lucide-react';
import Swal from 'sweetalert2';

function DataCollectionPage() {
    const { register, control, handleSubmit, reset, watch } = useForm();
    const { fields: siblingFields, append: appendSibling } = useFieldArray({
        control,
        name: 'siblings',
    });

    const [otpFields, setOtpFields] = useState({});
    const [verifiedFields, setVerifiedFields] = useState({});

    useEffect(() => {
        Swal.fire({
            title: 'Welcome to the Application Form',
            text: 'Please fill out all required fields and verify your documents. Make sure to upload supporting documents where necessary.',
            icon: 'info',
            confirmButtonText: 'Got it!',
            showCloseButton: true
        });
    }, []);

    const onSubmit = data => {
        const formPreviewHtml = `
            <div style="text-align: left; font-size: 16px;">
                <h3 style="color: #2c3e50; margin-bottom: 10px;">Form Preview</h3>
    
                <h4 style="color: #e67e22; margin-bottom: 5px;">Personal Information</h4>
                <table style="width: 100%; margin-bottom: 15px;">
                    <tr>
                        <td><strong>Full Name:</strong></td>
                        <td>${data.name}</td>
                    </tr>
                    <tr>
                        <td><strong>Date of Birth:</strong></td>
                        <td>${data.dob}</td>
                    </tr>
                    <tr>
                        <td><strong>Place of Birth:</strong></td>
                        <td>${data.pob}</td>
                    </tr>
                    <tr>
                        <td><strong>Gender:</strong></td>
                        <td>${data.gender}</td>
                    </tr>
                </table>
    
                <h4 style="color: #e67e22; margin-bottom: 5px;">Parent Information</h4>
                <table style="width: 100%; margin-bottom: 15px;">
                    <tr>
                        <td><strong>Father's Name:</strong></td>
                        <td>${data.father?.name || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td><strong>Father's DOB:</strong></td>
                        <td>${data.father?.dob || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td><strong>Mother's Name:</strong></td>
                        <td>${data.mother?.name || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td><strong>Mother's DOB:</strong></td>
                        <td>${data.mother?.dob || 'N/A'}</td>
                    </tr>
                </table>
    
                <h4 style="color: #e67e22; margin-bottom: 5px;">Sibling Information</h4>
                ${data.siblings?.length ? data.siblings.map((sibling, index) => `
                    <table style="width: 100%; margin-bottom: 15px;">
                        <tr>
                            <td><strong>Sibling ${index + 1} Name:</strong></td>
                            <td>${sibling.name}</td>
                        </tr>
                        <tr>
                            <td><strong>Sibling ${index + 1} DOB:</strong></td>
                            <td>${sibling.dob}</td>
                        </tr>
                        <tr>
                            <td><strong>Sibling ${index + 1} Place of Birth:</strong></td>
                            <td>${sibling.pob}</td>
                        </tr>
                    </table>
                `).join('') : '<p>No siblings added.</p>'}
    
                <h4 style="color: #e67e22; margin-bottom: 5px;">Documents</h4>
                <table style="width: 100%; margin-bottom: 15px;">
                    <tr>
                        <td><strong>Aadhar:</strong></td>
                        <td>${data.personal?.aadhar || 'Not Verified'}</td>
                    </tr>
                    <tr>
                        <td><strong>PAN:</strong></td>
                        <td>${data.personal?.pan || 'Not Verified'}</td>
                    </tr>
                    <tr>
                        <td><strong>Voter ID:</strong></td>
                        <td>${data.personal?.voterId || 'Not Verified'}</td>
                    </tr>
                </table>
            </div>
        `;

        Swal.fire({
            title: 'Form Preview',
            html: formPreviewHtml,
            confirmButtonText: 'Submit',
            showCancelButton: true,
            showCloseButton: true,
            width: '600px',
            focusConfirm: false,
            customClass: {
                popup: 'animated fadeInDown faster'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Submitting your application...',
                    text: 'Please wait while we process your application.',
                    icon: 'info',
                    allowOutsideClick: false,
                    showConfirmButton: false,
                    timerProgressBar: true,
                    willOpen: () => {
                        Swal.showLoading();
                    },
                    timer: 3000 // Simulate a delay of 3 seconds
                }).then(() => {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your application has been submitted successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                    reset();  // Resetting the form after successful submission
                });
            }
        });
    };


    const toggleOtpField = (field) => {
        setOtpFields(prev => ({
            ...prev,
            [field]: !prev[field]
        }));

        Swal.fire({
            title: 'OTP Sent!',
            text: 'Please check your registered mobile number for the OTP.',
            icon: 'info',
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false,
            showCloseButton: true
        });
    };

    const verifyOtp = (field) => {
        setVerifiedFields(prev => ({ ...prev, [field]: true }));
        Swal.fire({
            title: 'Verified!',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false,
            showCloseButton: true
        });
    };

    const handleFileUpload = (e, doc) => {
        const file = e.target.files[0];
        if (file) {
            const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
            const maxSize = 2 * 1024 * 1024; // 2MB

            if (!allowedTypes.includes(file.type)) {
                Swal.fire({
                    title: 'Invalid File Type',
                    text: `Please upload a valid PDF, JPG, or PNG document.`,
                    icon: 'error',
                    showCloseButton: true
                });
            } else if (file.size > maxSize) {
                Swal.fire({
                    title: 'File Too Large',
                    text: 'Please upload a document smaller than 2MB.',
                    icon: 'error',
                    showCloseButton: true
                });
            } else {
                Swal.fire({
                    title: 'File Uploaded!',
                    text: `You have uploaded a ${doc} document.`,
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false,
                    showCloseButton: true
                });
            }
        }
    };

    const VerificationFields = ({ prefix }) => (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {['aadhar', 'pan', 'voterId'].map(doc => (
                <div key={`${prefix}.${doc}`} className="space-y-4 relative">
                    <label className="text-sm font-bold text-gray-700">{doc.charAt(0).toUpperCase() + doc.slice(1)} Number</label>
                    <div className="flex">
                        <input
                            {...register(`${prefix}.${doc}`)}
                            placeholder={`Enter ${doc} number`}
                            className="flex-grow px-2 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                        />
                        {!verifiedFields[`${prefix}.${doc}`] && (
                            <button
                                type="button"
                                onClick={() => toggleOtpField(`${prefix}.${doc}`)}
                                className="px-4 py-2 bg-orange-500 text-white border border-orange-600 hover:bg-orange-600"
                            >
                                Verify
                            </button>
                        )}
                    </div>
                    {otpFields[`${prefix}.${doc}`] && !verifiedFields[`${prefix}.${doc}`] && (
                        <div className="mt-2">
                            <input
                                placeholder="Enter OTP"
                                className="w-full px-2 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                            />
                            <button
                                type="button"
                                onClick={() => verifyOtp(`${prefix}.${doc}`)}
                                className="mt-2 px-4 py-2 bg-green-600 text-white border border-green-600 hover:bg-green-700"
                            >
                                Submit OTP
                            </button>
                        </div>
                    )}
                    {verifiedFields[`${prefix}.${doc}`] && (
                        <Check className="absolute top-1 right-2 w-6 h-6 text-green-600" />
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
                    <div className="text-center flex flex-col justify-center items-center">
                        <Upload className="w-6 h-6 mb-2 text-gray-600" />
                        <p className="text-xs text-gray-600"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500">PDF, JPG, PNG (MAX. 2MB)</p>
                    </div>
                    <input id={`${prefix}-${doc}-file-upload`} type="file" className="hidden" onChange={(e) => handleFileUpload(e, doc)} />
                </label>
            </div>
        </div>
    );

    const prefillData = () => {
        reset({
            name: 'John Doe',
            dob: '1990-01-01',
            pob: 'New York',
            gender: 'male',
            father: { name: 'Mr. Doe', dob: '1960-01-01' },
            mother: { name: 'Mrs. Doe', dob: '1965-01-01' },
            siblings: [{ name: 'Jane Doe', dob: '1995-05-05', pob: 'New York' }],
            personal: { aadhar: '1234-5678-9012', pan: 'ABCDE1234F', voterId: 'V123456789' }
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 px-4 py-8">
            <div className="container mx-auto max-w-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl border border-gray-300 p-6 mb-8">
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
                                        className="px-4 py-2 bg-orange-500 text-white border border-orange-600 hover:bg-orange-600"
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
                                        className="px-4 py-2 bg-orange-500 text-white border border-orange-600 hover:bg-orange-600"
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
                                        className="px-4 py-2 bg-orange-500 text-white border border-orange-600 hover:bg-orange-600"
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
                            className="flex items-center gap-2 px-4 py-2 text-gray-800 bg-orange-500 hover:bg-orange-600"
                        >
                            <PlusCircle className="w-5 h-5" />
                            Add Sibling
                        </button>
                    </section>

                    {/* Submit Button */}
                    <div className="flex justify-end mt-8">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-orange-500 text-white border border-orange-600 hover:bg-orange-600"
                        >
                            Submit Application
                            <CheckCircle className="inline-block w-5 h-5 ml-2" />
                        </button>
                        <button
                            type="button"
                            onClick={prefillData}
                            className="ml-4 px-6 py-2 bg-orange-500 text-white border border-orange-600 hover:bg-orange-600"
                        >
                            Prefill Demo Data
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DataCollectionPage;

