import Header from '@/shared/header/header'
import React, { useState, useEffect } from 'react'
import { useUser } from '@clerk/clerk-react'
import { FaUser, FaEnvelope, FaPhone, FaCalendarDays, FaCamera, FaPen, FaCheck, FaCar, FaHeart, FaClockRotateLeft } from 'react-icons/fa6'

function Profile() {
    const { user, isSignedIn, isLoaded } = useUser();
    
    // Additional user info stored in localStorage (could be replaced with a database)
    const [additionalInfo, setAdditionalInfo] = useState({
        phone: '',
        age: ''
    });
    
    const [isEditing, setIsEditing] = useState(false);
    const [tempInfo, setTempInfo] = useState({ phone: '', age: '' });

    // Load saved data from localStorage on mount
    useEffect(() => {
        if (user) {
            const savedData = localStorage.getItem(`userProfile_${user.id}`);
            if (savedData) {
                const parsed = JSON.parse(savedData);
                setAdditionalInfo(parsed);
                setTempInfo(parsed);
            }
        }
    }, [user]);

    const handleEdit = () => {
        setTempInfo(additionalInfo);
        setIsEditing(true);
    };

    const handleSave = () => {
        setAdditionalInfo(tempInfo);
        if (user) {
            localStorage.setItem(`userProfile_${user.id}`, JSON.stringify(tempInfo));
        }
        setIsEditing(false);
    };

    const handleCancel = () => {
        setTempInfo(additionalInfo);
        setIsEditing(false);
    };

    if (!isLoaded) {
        return (
            <>
                <Header />
                <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                </div>
            </>
        );
    }

    if (!isSignedIn) {
        return (
            <>
                <Header />
                <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Please Sign In</h1>
                        <p className="text-gray-600">You need to sign in to view your profile.</p>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Header />
            
            <main className="min-h-screen bg-gradient-to-b from-slate-100 to-white">
                {/* Full Width Hero Banner */}
                <div className="w-full bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
                    </div>
                    
                    <div className="w-full px-4 sm:px-8 lg:px-16 py-12 md:py-16 relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            {/* Profile Image */}
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-50 transition"></div>
                                <img
                                    src={user.imageUrl}
                                    alt={user.fullName || 'Profile'}
                                    className="relative w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-white shadow-2xl object-cover"
                                />
                                <div className="absolute bottom-2 right-2 bg-white text-indigo-600 p-3 rounded-full shadow-lg cursor-pointer hover:bg-indigo-50 hover:scale-110 transition-all">
                                    <FaCamera className="text-lg" />
                                </div>
                            </div>
                            
                            {/* Name and Info */}
                            <div className="text-center md:text-left text-white flex-1">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
                                    {user.fullName || `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'User'}
                                </h1>
                                <p className="text-indigo-100 text-xl mb-4">
                                    {user.primaryEmailAddress?.emailAddress || 'No email provided'}
                                </p>
                                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                                        🚗 Car Enthusiast
                                    </span>
                                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                                        📅 Member since {new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                    </span>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="hidden lg:flex gap-6">
                                <div className="text-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl">
                                    <p className="text-3xl font-bold text-white">0</p>
                                    <p className="text-indigo-200 text-sm">Cars Listed</p>
                                </div>
                                <div className="text-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl">
                                    <p className="text-3xl font-bold text-white">0</p>
                                    <p className="text-indigo-200 text-sm">Favorites</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Cards - Mobile */}
                <div className="lg:hidden w-full px-4 sm:px-8 -mt-6 relative z-20">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white shadow-lg rounded-2xl p-4 text-center">
                            <FaCar className="text-2xl text-indigo-600 mx-auto mb-2" />
                            <p className="text-2xl font-bold text-gray-900">0</p>
                            <p className="text-gray-500 text-xs">Listed</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-2xl p-4 text-center">
                            <FaHeart className="text-2xl text-red-500 mx-auto mb-2" />
                            <p className="text-2xl font-bold text-gray-900">0</p>
                            <p className="text-gray-500 text-xs">Favorites</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-2xl p-4 text-center">
                            <FaClockRotateLeft className="text-2xl text-green-500 mx-auto mb-2" />
                            <p className="text-2xl font-bold text-gray-900">0</p>
                            <p className="text-gray-500 text-xs">Views</p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full px-4 sm:px-8 lg:px-16 py-8 md:py-12">
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                        
                        {/* Left Column - Profile Details */}
                        <div className="xl:col-span-2 space-y-8">
                            {/* Profile Information Card */}
                            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                                <div className="bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-50 px-6 sm:px-8 py-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">Profile Information</h2>
                                        <p className="text-gray-500 text-sm mt-1">Manage your personal details</p>
                                    </div>
                                    {!isEditing ? (
                                        <button
                                            onClick={handleEdit}
                                            className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all"
                                        >
                                            <FaPen className="text-sm" />
                                            Edit Profile
                                        </button>
                                    ) : (
                                        <div className="flex gap-3">
                                            <button
                                                onClick={handleCancel}
                                                className="px-5 py-3 rounded-xl font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                onClick={handleSave}
                                                className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all"
                                            >
                                                <FaCheck className="text-sm" />
                                                Save Changes
                                            </button>
                                        </div>
                                    )}
                                </div>
                                
                                <div className="p-6 sm:p-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        
                                        {/* First Name */}
                                        <div className="group flex items-start gap-4 p-5 bg-gradient-to-br from-gray-50 to-slate-100 rounded-2xl hover:shadow-md transition-all">
                                            <div className="text-indigo-600 text-xl bg-white p-4 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                                                <FaUser />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">First Name</p>
                                                <p className="text-gray-900 font-bold text-xl">{user.firstName || 'Not provided'}</p>
                                            </div>
                                        </div>

                                        {/* Last Name */}
                                        <div className="group flex items-start gap-4 p-5 bg-gradient-to-br from-gray-50 to-slate-100 rounded-2xl hover:shadow-md transition-all">
                                            <div className="text-indigo-600 text-xl bg-white p-4 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                                                <FaUser />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Last Name</p>
                                                <p className="text-gray-900 font-bold text-xl">{user.lastName || 'Not provided'}</p>
                                            </div>
                                        </div>

                                        {/* Email - Full Width */}
                                        <div className="md:col-span-2 group flex items-start gap-4 p-5 bg-gradient-to-br from-gray-50 to-slate-100 rounded-2xl hover:shadow-md transition-all">
                                            <div className="text-indigo-600 text-xl bg-white p-4 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                                                <FaEnvelope />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Email Address</p>
                                                <p className="text-gray-900 font-bold text-xl break-all">
                                                    {user.primaryEmailAddress?.emailAddress || 'Not provided'}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Phone - Editable */}
                                        <div className="group flex items-start gap-4 p-5 bg-gradient-to-br from-gray-50 to-slate-100 rounded-2xl hover:shadow-md transition-all">
                                            <div className="text-indigo-600 text-xl bg-white p-4 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                                                <FaPhone />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Phone Number</p>
                                                {isEditing ? (
                                                    <input
                                                        type="tel"
                                                        value={tempInfo.phone}
                                                        onChange={(e) => setTempInfo({ ...tempInfo, phone: e.target.value })}
                                                        placeholder="Enter phone number"
                                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-lg font-semibold"
                                                    />
                                                ) : (
                                                    <p className="text-gray-900 font-bold text-xl">
                                                        {additionalInfo.phone || <span className="text-gray-300 font-normal italic">Click edit to add</span>}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Age - Editable */}
                                        <div className="group flex items-start gap-4 p-5 bg-gradient-to-br from-gray-50 to-slate-100 rounded-2xl hover:shadow-md transition-all">
                                            <div className="text-indigo-600 text-xl bg-white p-4 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                                                <FaCalendarDays />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Age</p>
                                                {isEditing ? (
                                                    <input
                                                        type="number"
                                                        min="1"
                                                        max="120"
                                                        value={tempInfo.age}
                                                        onChange={(e) => setTempInfo({ ...tempInfo, age: e.target.value })}
                                                        placeholder="Enter your age"
                                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-lg font-semibold"
                                                    />
                                                ) : (
                                                    <p className="text-gray-900 font-bold text-xl">
                                                        {additionalInfo.age ? `${additionalInfo.age} years old` : <span className="text-gray-300 font-normal italic">Click edit to add</span>}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Sidebar */}
                        <div className="space-y-8">
                            {/* Account Status Card */}
                            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                                <div className="bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-50 px-6 py-5 border-b border-gray-100">
                                    <h2 className="text-xl font-bold text-gray-900">Account Status</h2>
                                </div>
                                <div className="p-6">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 bg-green-50 text-green-700 px-4 py-3 rounded-xl font-semibold">
                                            <FaCheck className="text-green-500" />
                                            <span>Email Verified</span>
                                        </div>
                                        <div className="flex items-center gap-3 bg-indigo-50 text-indigo-700 px-4 py-3 rounded-xl font-semibold">
                                            <FaUser className="text-indigo-500" />
                                            <span>Active Account</span>
                                        </div>
                                        <div className="flex items-center gap-3 bg-purple-50 text-purple-700 px-4 py-3 rounded-xl font-semibold">
                                            <FaCar className="text-purple-500" />
                                            <span>Ready to Buy/Sell</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions Card */}
                            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl shadow-xl overflow-hidden text-white p-6">
                                <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
                                <div className="space-y-3">
                                    <button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 py-3 rounded-xl font-medium transition-all text-left flex items-center gap-3">
                                        <FaCar />
                                        List a Car for Sale
                                    </button>
                                    <button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 py-3 rounded-xl font-medium transition-all text-left flex items-center gap-3">
                                        <FaHeart />
                                        View Favorites
                                    </button>
                                    <button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 py-3 rounded-xl font-medium transition-all text-left flex items-center gap-3">
                                        <FaClockRotateLeft />
                                        View History
                                    </button>
                                </div>
                            </div>

                            {/* User ID Card */}
                            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                                <div className="p-6">
                                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">User ID</p>
                                    <p className="text-gray-600 font-mono text-sm break-all bg-gray-50 p-3 rounded-xl">{user.id}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}

export default Profile
