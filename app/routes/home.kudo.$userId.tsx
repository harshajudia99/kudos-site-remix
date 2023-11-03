import { json, LoaderFunction, redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { getUserById } from '~/utils/user.server'
import { Modal } from '~/components/modal';

export const loader: LoaderFunction = async ({ params }) => {
  const { userId } = params

  if (typeof userId !== 'string') {
    return redirect('/home')
  }

  const user = await getUserById(userId)
  return json({ user })
}

export default function KudoModal() {

    const { user } = useLoaderData()
    
    return (
      <Modal isOpen={true} className="w-2/3 p-10">
          <h2> User: {user.profile.firstName} {user.profile.lastName} </h2>
      </Modal>
    )
  }