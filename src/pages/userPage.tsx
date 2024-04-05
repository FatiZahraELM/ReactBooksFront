import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserDetails } from '../services/UsersService';
import { UserDetails } from '../components/userDetail';
import { User } from '../models/users';
import Header from '../components/header';
import Footer from '../components/footer';
import WishsList from '../components/wishList';


export const UserPage = () => {
    const { id } = useParams();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const userDetails = await getUserDetails(parseInt(id!));
                setUser(userDetails);
            } catch (error) {
                console.error('Failed to fetch user details:', error);
            }
        };

        fetchUserDetails();
    }, [id]);

    return (
        <>
        <Header />

        <div>
            {user && <UserDetails name={user.name} email={user.email} />}
        </div>
        <div>
            <WishsList/>
        </div>
        <footer><Footer /></footer>

        </>
    );
};






