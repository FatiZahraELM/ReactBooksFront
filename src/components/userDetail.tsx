
type UserDetailsProps= {
    name: string;
    email: string;
}

export const UserDetails=({ name, email }:UserDetailsProps) => {
    return (
        <div className="card">
            <h1 style={{ color: '#7337d4' }}>User Details</h1>
            <div>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
            </div>
        </div>
    );
};

