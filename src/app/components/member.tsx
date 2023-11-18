import React from 'react';
export default function Member() {
    return (
        <div style={{ border: '1px solid black', padding: '10px' }}>
            {Array.from({ length: 36 }).map((_, index) => (
                <div key={index}>
                    <img src="member_picture.jpg" alt="Member Picture" />
                    <h3>Member Name</h3>
                    <p>Member Info</p>
                </div>
            ))}
        </div>
    );
}
