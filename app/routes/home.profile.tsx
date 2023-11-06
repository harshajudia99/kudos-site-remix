import { LoaderFunction, ActionFunction, redirect, json } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react"
import { Modal } from "~/components/modal";
import { getUser, requireUserId } from "~/utils/auth.server";
import { useState, useRef, useEffect } from "react";
import { FormField } from '~/components/form-field'
import { validateName } from "~/utils/validators.server";
import { updateUser } from "~/utils/user.server";

export const loader: LoaderFunction = async ({ request }) => {
    const user = await getUser(request)
    return json({ user })
}

export const action: ActionFunction = async ({ request }) => {

    const userId = await requireUserId(request);

    const form = await request.formData();

    let firstName = form.get('firstName')
    let lastName = form.get('lastName')
    let action = form.get('_action')

    switch (action) {
        case 'save':
            if (
                typeof firstName !== 'string'
                || typeof lastName !== 'string'
            ) {
                return json({ error: `Invalid Form Data` }, { status: 400 });
            }

            const errors = {
                firstName: validateName(firstName),
                lastName: validateName(lastName),
            }

            if (Object.values(errors).some(Boolean))
                return json({ errors, fields: { firstName, lastName } }, { status: 400 });

            await updateUser(userId, {
                firstName,
                lastName
            })

        default:
            return json({ error: 'Invalid form data' }, { status: 400 });
    }

}

export default function ProfileSettings() {
    const { user } = useLoaderData()

    const actionData = useActionData()
    const [formError, setFormError] = useState(actionData?.error || '')

    const firstLoad = useRef(true)

    const [formData, setFormData] = useState({
        firstName: actionData?.fields?.firstName || user?.profile?.firstName,
        lastName: actionData?.fields?.lastName || user?.profile?.lastName,
    })

    useEffect(() => {
        if (!firstLoad.current) {
            setFormError('')
        }
    }, [firstLoad])

    useEffect(() => {
        firstLoad.current = false;
    }, [])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setFormData(form => ({ ...form, [field]: event.target.value }))
    }

    return (
        <Modal isOpen={true} className="w-1/3">
            <div className="p-3">
                <h2 className="text-4xl font-semibold text-blue-600 text-center mb-4">Your Profile</h2>
                <div className="text-xs font-semibold text-center tracking-wide text-red-500 w-full mb-2">{formError}</div>

                <div className="flex">
                    <div className="flex-1">
                        <form method="post">
                            <FormField htmlFor="firstName" label="First Name" value={formData.firstName} onChange={e => handleInputChange(e, 'firstName')} error={actionData?.errors?.firstName}/>
                            <FormField htmlFor="lastName" label="Last Name" value={formData.lastName} onChange={e => handleInputChange(e, 'lastName')} error={actionData?.errors?.lastName}/>

                            <div className="w-full text-right mt-4">
                                <button name='_action' value='save' className="rounded-xl bg-yellow-300 font-semibold text-blue-600 px-16 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Modal>
    )
}






