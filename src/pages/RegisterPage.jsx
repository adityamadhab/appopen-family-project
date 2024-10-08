// src/pages/RegisterPage.jsx
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        // Implement registration logic
        navigate('/dashboard');
    };

    return (
        <div className="container mx-auto py-16">
            <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
                <input {...register('name', { required: true })} placeholder="Name" className="input mb-4" />
                <input {...register('email', { required: true })} type="email" placeholder="Email" className="input mb-4" />
                <input {...register('password', { required: true })} type="password" placeholder="Password" className="input mb-4" />
                <button type="submit" className="btn w-full">Sign Up</button>
            </form>
        </div>
    );
}

export default RegisterPage;