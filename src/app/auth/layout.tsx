import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    // <div className="flex items-center justify-center bg-gray-100">
    <div className=" bg-gray-100 px-4  ">
      <div className="max-w-[1420px] mx-auto flex items-center justify-center py-12 flex-col ">
        <div className="w-fit bg-white shadow-md rounded-md p-6 ">
          {children}
        </div>
        <div>
          <section className=" mx-auto pt-12  rounded-lg ">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Acceptable Documents</h2>
            <p className="text-gray-700 mb-6">The document you upload depends on your military status.</p>

            {/* Service Members */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">Service members</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Military pay stubs - Leave & Earnings Statement (LES)</li>
                <li>Record briefs - ARB/ERB/ORB (US Army)</li>
                <li>Reserve Activation Orders</li>
                <li>Enlistment contracts</li>
              </ul>
            </div>

            {/* Veterans */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">Veterans</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>DD214 form</li>
                <li>Driver&apos;s License or DMV-Issued State ID with VETERAN endorsement</li>
                <li>Honorable Discharge Certificate</li>
                <li>NGB form 22</li>
                <li>Reserve Separation Orders</li>
                <li>Veterans Health Identification Card (VHIC), or Veteran Identification Card (VIC)</li>
              </ul>
            </div>

            {/* Retirees */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">Retirees</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>DD214 form (must show 20 years of service or the reason for discharge was retirement)</li>
                <li>NGB form 22 (must show 20 years of service or the reason for discharge was retirement)</li>
                <li>Retiree Account Statement (eRAS)</li>
                <li>VA disability letter</li>
              </ul>
            </div>

            {/* Family members and surviving spouses */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">Family members and surviving spouses</h3>
              <p className="text-gray-700 mb-3">
                Military spouses and family members can upload any of the military documents listed in the categories above.
                Surviving Spouses can also submit a Casualty Report (DD Form 1300).
              </p>
            </div>

            {/* Note */}
            <div className="bg-blue-50 p-4 rounded-md mb-6">
              <p className="text-blue-800 italic">
                Note: To request a copy of your DD214, visit the <Link href="https://www.archives.gov/veterans/military-service-records" className="font-semibold underline" target="_blank"> National Archives</Link> site
              </p>
            </div>

            {/* Documents requirements */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Documents requirements</h3>
              <p className="text-gray-700 mb-3">
                All documents must clearly indicate your full name and whether you are a service member, veteran, or retiree.
                Expired documents are acceptable.
              </p>
              <p className="text-lg font-semibold text-gray-800 mb-2">The following documents are not accepted:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-2">
                <li>Uniformed Services ID cards</li>
                <li>CAC cards</li>
              </ul>
            </div>

            <p className="text-left text-gray-700 font-medium">Respectfully,</p>
          </section>
        </div>
      </div>
    </div>
  );
}