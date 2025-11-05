import QRImage from "@/assets/Images/CementQR Code.png"; // adjust casing if necessary

const AccountDetails = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-2xl p-6 w-full    my-10 mx-auto">
      {/* Left Side - Account Details */}
      <div className="w-full md:w-1/2 space-y-3">
        <h2 className="text-3xl font-semibold mb-2 text-gray-800 border-b pb-2">
          Bank Account Details
        </h2>
        <div className="space-y-1 text-gray-700">
          <p>
            <span className="font-semibold w-6 h-6 rounded-full">
              Account Holder:
            </span>{" "}
            JSPM University Wagholi
          </p>
          <p>
            <span className="font-semibold w-6 h-6 rounded-full">
              Bank Name:
            </span>{" "}
            Union Bank of India
          </p>
          <p>
            <span className="font-semibold w-6 h-6 rounded-full">
              Account No:
            </span>{" "}
            776602010009056
          </p>
          <p>
            <span className="font-semibold w-6 h-6 rounded-full">
              IFSC Code:
            </span>{" "}
            UBIN0577669
          </p>
          <p>
            <span className="font-semibold w-6 h-6 rounded-full">Branch:</span>{" "}
            Wagholi, Pune
          </p>
        </div>
      </div>

      {/* Right Side - QR Code */}
      <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src={QRImage}
          alt="QR Code"
          className="w-48 h-48 md:w-56 md:h-56 object-contain border rounded-xl shadow"
        />
      </div>
    </div>
  );
};

export default AccountDetails;
