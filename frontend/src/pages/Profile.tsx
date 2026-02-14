import { useAppContext } from "../AppContext";
import { Button } from "../components/UIComponents";
import { User, Heart, Phone, AlertCircle, Edit2, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useAppContext();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <div className="max-w-2xl mx-auto px-6 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            My Profile
          </h1>
          <Button variant="outline" size="md">
            <Edit2 className="w-4 h-4" />
          </Button>
        </div>

        {/* Profile Picture and Name */}
        <div className="rounded-2xl bg-white p-8 shadow-md border border-gray-100 mb-8 text-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
            <User className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">{user.name}</h2>
          <p className="text-gray-600 text-lg">Age {user.age}</p>
        </div>

        {/* Personal Information */}
        <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 p-6 shadow-md mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <User className="w-6 h-6 text-blue-600" />
            Personal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-600 text-sm font-medium mb-2">Full Name</p>
              <p className="text-xl font-bold text-gray-900">{user.name}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium mb-2">Age</p>
              <p className="text-xl font-bold text-gray-900">{user.age} years old</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium mb-2">Blood Type</p>
              <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-lg font-bold text-lg">
                {user.bloodType}
              </div>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium mb-2">Member Since</p>
              <p className="text-xl font-bold text-gray-900">Feb 2026</p>
            </div>
          </div>
        </div>

        {/* Health Information */}
        <div className="rounded-2xl bg-gradient-to-br from-red-50 to-pink-50 border border-red-100 p-6 shadow-md mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Heart className="w-6 h-6 text-red-600" />
            Health Information
          </h3>
          <div>
            <p className="text-gray-600 text-sm font-medium mb-3">Allergies</p>
            <div className="flex flex-wrap gap-2">
              {user.allergies.length > 0 ? (
                user.allergies.map((allergy, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-red-200 text-red-800 rounded-lg font-semibold text-sm"
                  >
                    ⚠️ {allergy}
                  </span>
                ))
              ) : (
                <p className="text-gray-600">No known allergies</p>
              )}
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100 p-6 shadow-md mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Phone className="w-6 h-6 text-orange-600" />
            Emergency Contact
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600 text-sm font-medium mb-2">Name</p>
              <p className="text-xl font-bold text-gray-900">{user.emergencyContact.name}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium mb-2">Relationship</p>
              <p className="text-xl font-bold text-gray-900">{user.emergencyContact.relation}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium mb-2">Phone Number</p>
              <p className="text-xl font-bold text-gray-900 font-mono">{user.emergencyContact.phone}</p>
              <Button
                variant="primary"
                fullWidth
                className="mt-3"
                onClick={() => window.location.href = `tel:${user.emergencyContact.phone}`}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Emergency Contact
              </Button>
            </div>
          </div>
        </div>

        {/* Health Tips */}
        <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 p-6 shadow-md mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-emerald-600" />
            Health Tips
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Take medications at scheduled times</li>
            <li>✓ Log your vitals regularly</li>
            <li>✓ Keep emergency contact information up to date</li>
            <li>✓ Share medical documents with your healthcare provider</li>
            <li>✓ Stay hydrated and maintain a healthy lifestyle</li>
          </ul>
        </div>

        {/* Logout */}
        <Button
          variant="primary"
          fullWidth
          className="bg-red-600 hover:bg-red-700 text-white"
          onClick={() => {
            alert("Logged out successfully!");
            navigate("/");
          }}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Profile;
