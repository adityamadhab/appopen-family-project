// src/pages/DataCollectionPage.jsx
import { useForm, useFieldArray } from 'react-hook-form';
import { useState } from 'react';
import Dropzone from 'react-dropzone';

function DataCollectionPage() {
    const { register, control, handleSubmit } = useForm();
    const { fields: siblingFields, append: appendSibling } = useFieldArray({
        control,
        name: 'siblings',
    });
    const [step, setStep] = useState(1);

    const onSubmit = data => {
        console.log(data);
        // Proceed to next step or submit data
    };

    return (
        <div className="container mx-auto py-8">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Step Indicators */}
                <div className="mb-4">
                    <p>Step {step} of 5</p>
                </div>

                {/* Personal Information Form */}
                {step === 1 && (
                    <section>
                        <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input {...register('name', { required: true })} placeholder="Name" className="input" />
                            <input {...register('dob', { required: true })} type="date" placeholder="Date of Birth" className="input" />
                            <input {...register('pob', { required: true })} placeholder="Place of Birth" className="input" />
                            <select {...register('gender', { required: true })} className="input">
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            <input {...register('nationalId', { required: true })} placeholder="National ID" className="input" />
                        </div>
                        <button type="button" onClick={() => setStep(2)} className="btn mt-4">Next</button>
                    </section>
                )}

                {/* Parent Information Form */}
                {step === 2 && (
                    <section>
                        <h2 className="text-2xl font-bold mb-4">Parent Information</h2>
                        {/* Father's Information */}
                        <h3 className="text-xl font-semibold mb-2">Father's Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input {...register('father.name')} placeholder="Father's Name" className="input" />
                            <input {...register('father.dob')} type="date" placeholder="Date of Birth" className="input" />
                            {/* Upload Document */}
                            <label className="block">
                                <span>Marriage Certificate:</span>
                                <input type="file" {...register('father.marriageCert')} className="mt-1" />
                            </label>
                        </div>
                        {/* Mother's Information */}
                        <h3 className="text-xl font-semibold mb-2">Mother's Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input {...register('mother.name')} placeholder="Mother's Name" className="input" />
                            <input {...register('mother.dob')} type="date" placeholder="Date of Birth" className="input" />
                            {/* Upload Document */}
                            <label className="block">
                                <span>Marriage Certificate:</span>
                                <input type="file" {...register('mother.marriageCert')} className="mt-1" />
                            </label>
                        </div>
                        <div className="flex justify-between mt-4">
                            <button type="button" onClick={() => setStep(1)} className="btn">Back</button>
                            <button type="button" onClick={() => setStep(3)} className="btn">Next</button>
                        </div>
                    </section>
                )}

                {/* Grandparents & Previous Generations Form */}
                {step === 3 && (
                    <section>
                        <h2 className="text-2xl font-bold mb-4">Grandparents Information</h2>
                        {/* Similar structure for grandparents' details */}
                        <div className="flex justify-between mt-4">
                            <button type="button" onClick={() => setStep(2)} className="btn">Back</button>
                            <button type="button" onClick={() => setStep(4)} className="btn">Next</button>
                        </div>
                    </section>
                )}

                {/* Sibling Information Form */}
                {step === 4 && (
                    <section>
                        <h2 className="text-2xl font-bold mb-4">Sibling Information</h2>
                        {siblingFields.map((item, index) => (
                            <div key={item.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                                <input {...register(`siblings.${index}.name`)} placeholder="Name" className="input" />
                                <input {...register(`siblings.${index}.dob`)} type="date" placeholder="Date of Birth" className="input" />
                                <input {...register(`siblings.${index}.pob`)} placeholder="Place of Birth" className="input" />
                            </div>
                        ))}
                        <button type="button" onClick={() => appendSibling({})} className="btn mt-2">Add Sibling</button>
                        <div className="flex justify-between mt-4">
                            <button type="button" onClick={() => setStep(3)} className="btn">Back</button>
                            <button type="button" onClick={() => setStep(5)} className="btn">Next</button>
                        </div>
                    </section>
                )}

                {/* Document Upload Section */}
                {step === 5 && (
                    <section>
                        <h2 className="text-2xl font-bold mb-4">Upload Documents</h2>
                        <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                            {({ getRootProps, getInputProps }) => (
                                <div {...getRootProps()} className="border-dashed border-2 p-6 text-center">
                                    <input {...getInputProps()} />
                                    <p>Drag & drop some files here, or click to select files</p>
                                </div>
                            )}
                        </Dropzone>
                        <div className="flex justify-between mt-4">
                            <button type="button" onClick={() => setStep(4)} className="btn">Back</button>
                            <button type="submit" className="btn">Submit</button>
                        </div>
                    </section>
                )}
            </form>
        </div>
    );
}

export default DataCollectionPage;
