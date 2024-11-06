import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const UrgentBloodNeeds = () => {
    const [urgentRequests, setUrgentRequests] = useState([
        { bloodType: 'A+', quantity: '2 liters', contact: '0710-344-567' },
        { bloodType: 'O-', quantity: '1 liter', contact: '0734-854-393' },
        { bloodType: 'B+', quantity: '3 liters', contact: '0720-393-202' }
    ]);
    const [newRequest, setNewRequest] = useState({ bloodType: '', quantity: '', contact: '' });
    const [searchTerm, setSearchTerm] = useState('A+'); // Set default search term

    const handleAddRequest = () => {
        if (newRequest.bloodType && newRequest.quantity && newRequest.contact) {
            setUrgentRequests([...urgentRequests, newRequest]);
            setNewRequest({ bloodType: '', quantity: '', contact: '' });
        }
    };

    const handleDeleteRequest = (index) => {
        const updatedRequests = urgentRequests.filter((_, i) => i !== index);
        setUrgentRequests(updatedRequests);
    };

    // Filter requests based on search term
    const filteredRequests = urgentRequests.filter(request =>
        request.bloodType.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log("Search Term:", searchTerm); // Log search term to debug
    console.log("Filtered Requests:", filteredRequests); // Log filtered requests

    return (
        <div className="urgent-blood-needed-container" id='urgent-needs'>
            <h2 style={{ fontWeight: 600, fontSize: 30 }}>Urgent Blood Needed</h2>
            
            {/* Search Bar */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for blood type..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button><FaSearch /></button>
            </div>
            
            {/* Flex container for two-column layout */}
            <div className="content-container">
                {/* Left Column - Form */}
                <div className="add-request-form">
                    <input
                        type="text"
                        placeholder="Blood Type (e.g., A+, B-, O+)"
                        value={newRequest.bloodType}
                        onChange={(e) => setNewRequest({ ...newRequest, bloodType: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Quantity Needed"
                        value={newRequest.quantity}
                        onChange={(e) => setNewRequest({ ...newRequest, quantity: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Contact Information"
                        value={newRequest.contact}
                        onChange={(e) => setNewRequest({ ...newRequest, contact: e.target.value })}
                    />
                    <button onClick={handleAddRequest}>Add Urgent Request</button>
                </div>

                {/* Right Column - Filtered Data Display */}
                <div className="urgent-requests">
                    {filteredRequests.length > 0 ? (
                        filteredRequests.map((request, index) => (
                            <div key={index} className="urgent-request">
                                <h3>Blood Type: {request.bloodType}</h3>
                                <p>Quantity Needed: {request.quantity}</p>
                                <p>Contact: {request.contact}</p>
                                <button onClick={() => handleDeleteRequest(index)}>Delete</button>
                            </div>
                        ))
                    ) : (
                        <p>No matching requests found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UrgentBloodNeeds;
