import { useState } from 'react';
import { Layout } from "~/components/layout";
import { FormField } from "~/components/form-field";
export default function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    })

    const [action, setAction] = useState('login')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setFormData(form => ({
            ...form,
            [field]: event.target.value
        }))
    }

    return (
        <Layout>
            <div className="h-full flex justify-center items-center flex-col gap-y-4">
                <button
                    onClick={() => setAction(action == 'login' ? 'resgister' : 'login')}
                    className="absolute top-8 right-8 rounded-xl mt-2 bg-yellow-300 px-3 py-2 text-blue-600 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1"
                >
                    {action === 'login' ? 'Sign Up' : 'Sign In'}
                </button>
                <h2 className="text-5xl font-extrabold text-yellow-300">Welcome to kudos!</h2>
                <p className="font-semibold text-lg text-gray-100">{
                    action === 'login' ? 'Log in to give some praise!' : 'Sign up to get started!'
                }</p>

                <form method="post" className="rounded-2xl bg-gray-200 p-6 w-96">

                    {
                        action !== 'login' ? (
                            <>
                                <FormField
                                    htmlFor="firstName"
                                    label="First Name"
                                    value={formData.firstName}
                                    onChange={(e) => handleInputChange(e, 'firstName')}
                                />
                                <FormField
                                    htmlFor="lastName"
                                    label="Last Name"
                                    value={formData.lastName}
                                    onChange={(e) => handleInputChange(e, 'lastName')}
                                />
                            </>
                        ) : null
                    }

                    <FormField
                        htmlFor="email"
                        label="Email"
                        value={formData.email}
                        onChange={(e) => handleInputChange(e, 'email')}
                    />
                    <FormField
                        htmlFor="password"
                        label="Password"
                        type="password"
                        value={formData.password}
                        onChange={(e) => handleInputChange(e, 'password')}
                    />
                    <div className="w-full text-center">
                        <button
                            type="submit"
                            name="_action"
                            className="rounded-xl mt-2 bg-yellow-300 px-3 py-2 text-blue-600 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1"
                            value={action}
                        >
                            {action === 'login' ? 'Sign In' : 'Sign Up'}
                        </button>
                    </div>
                </form>

            </div>
        </Layout>
    );
}