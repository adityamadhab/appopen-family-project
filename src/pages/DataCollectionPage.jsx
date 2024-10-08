import { useForm, useFieldArray } from 'react-hook-form';
import { useState } from 'react';
import Dropzone from 'react-dropzone';
import { ChevronRight, ChevronLeft, PlusCircle, Upload, User, Users, FileText } from 'lucide-react';

function DataCollectionPage() {
    const { register, control, handleSubmit } = useForm();
    const { fields: siblingFields, append: appendSibling } = useFieldArray({
        control,
        name: 'siblings',
    });
    const [step, setStep] = useState(1);

    const onSubmit = data => {
        console.log(data);
    };

    const steps = [
        { number: 1, title: 'Personal Information', icon: User },
        { number: 2, title: 'Parent Information', icon: Users },
        { number: 3, title: 'Grandparents', icon: Users },
        { number: 4, title: 'Siblings', icon: Users },
        { number: 5, title: 'Documents', icon: FileText }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4">
            <div className="container mx-auto py-8 max-w-4xl">
                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        {steps.map((s) => {
                            const Icon = s.icon;
                            return (
                                <div key={s.number} className="flex flex-col items-center">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= s.number ? 'bg-blue-600 text-white' : 'bg-gray-200'} transition-colors duration-300`}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <span className={`text-sm mt-2 ${step >= s.number ? 'text-blue-600' : 'text-gray-500'}`}>
                                        {s.title}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                        <div 
                            className="h-full bg-blue-600 rounded-full transition-all duration-300"
                            style={{ width: `${(step / 5) * 100}%` }}
                        />
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    {/* Personal Information */}
                    {step === 1 && (
                        <section className="space-y-6">
                            <div className="border-b pb-4">
                                <h2 className="text-2xl font-bold text-blue-900">Personal Information</h2>
                                <p className="text-gray-600 mt-1">Please provide your basic details</p>
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
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">National ID</label>
                                    <input 
                                        {...register('nationalId', { required: true })} 
                                        placeholder="Enter national ID"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                    />
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Parent Information */}
                    {step === 2 && (
                        <section className="space-y-6">
                            <div className="border-b pb-4">
                                <h2 className="text-2xl font-bold text-blue-900">Parent Information</h2>
                                <p className="text-gray-600 mt-1">Enter your parents' details</p>
                            </div>
                            
                            {/* Father's Information */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-blue-800">Father's Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Father's Name</label>
                                        <input 
                                            {...register('father.name')} 
                                            placeholder="Enter father's name"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Date of Birth</label>
                                        <input 
                                            {...register('father.dob')} 
                                            type="date"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Mother's Information */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-blue-800">Mother's Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Mother's Name</label>
                                        <input 
                                            {...register('mother.name')} 
                                            placeholder="Enter mother's name"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Date of Birth</label>
                                        <input 
                                            {...register('mother.dob')} 
                                            type="date"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Siblings Information */}
                    {step === 4 && (
                        <section className="space-y-6">
                            <div className="border-b pb-4">
                                <h2 className="text-2xl font-bold text-blue-900">Sibling Information</h2>
                                <p className="text-gray-600 mt-1">Add information about your siblings</p>
                            </div>
                            
                            {siblingFields.map((item, index) => (
                                <div key={item.id} className="p-4 bg-gray-50 rounded-lg">
                                    <h4 className="font-medium text-gray-700 mb-4">Sibling {index + 1}</h4>
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
                    )}

                    {/* Document Upload */}
                    {step === 5 && (
                        <section className="space-y-6">
                            <div className="border-b pb-4">
                                <h2 className="text-2xl font-bold text-blue-900">Upload Documents</h2>
                                <p className="text-gray-600 mt-1">Upload relevant documents to support your application</p>
                            </div>
                            
                            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                                {({ getRootProps, getInputProps }) => (
                                    <div 
                                        {...getRootProps()} 
                                        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer"
                                    >
                                        <input {...getInputProps()} />
                                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                        <p className="text-gray-600">Drag & drop files here, or click to select files</p>
                                        <p className="text-sm text-gray-500 mt-2">Supported formats: PDF, JPG, PNG</p>
                                    </div>
                                )}
                            </Dropzone>
                        </section>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8">
                        {step > 1 && (
                            <button 
                                type="button" 
                                onClick={() => setStep(step - 1)}
                                className="flex items-center gap-2 px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                                Back
                            </button>
                        )}
                        {step < 5 ? (
                            <button 
                                type="button" 
                                onClick={() => setStep(step + 1)}
                                className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ml-auto"
                            >
                                Next
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        ) : (
                            <button 
                                type="submit"
                                className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors ml-auto"
                            >
                                Submit Application
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DataCollectionPage;