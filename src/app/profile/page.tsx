import { getServerSession } from "next-auth";

export default async function Profile() {
    const session = await getServerSession();

    return (
        <div className="container p-8 mr-20 ml-20">
            <h1 className="text-3xl font-bold mb-4">
                Profile Page
            </h1>
            {session?.user ? (
                <div className="bg-gray-200 p-4 rounded-md">
                    <img
                        src={session.user.image || '/default-profile-image.jpg'} // You might have a default image
                        alt={session.user.name as string}
                        className="rounded-full w-24 h-24 object-cover mx-auto mb-4"
                    />
                    <div className="text-center">
                        <h2 className="text-xl font-semibold">{session.user.name}</h2>
                        <p className="text-gray-600">{session.user.email}</p>
                    </div>
                </div>
            ) : (
                <div className="text-center">
                    <p className="text-2xl">Not signed in</p>
                </div>
            )}
        </div>
    );
}
