"use client"

export default function Chart01() {
  return (
    <div className="w-[900px] h-[500px] flex gap-6 p-6">

      {/* LEFT SIDE */}
      <div className="w-1/2 flex flex-col gap-4">

        <div className="border rounded-lg p-4 text-center">
          <h2 className="text-red-500 font-semibold">अस्तित्व दर्शन</h2>
          <p className="text-sm mt-2">
            व्यवहार जगत में मनुष्य एक सचेतन इकाई है
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="border p-3 rounded text-center">भीमा</div>
          <div className="border p-3 rounded text-center">दुख</div>
          <div className="border p-3 rounded text-center">मिला</div>
        </div>

        <div className="border p-4 rounded text-center">
          सह अस्तित्व (जीवन का आधार)
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 flex flex-col gap-4">

        <div className="border rounded-lg p-4 text-center">
          <h2 className="text-red-500 font-semibold">
            सह अस्तित्व में मानव
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4">

          <div className="border p-4 rounded text-center">
            मानव
          </div>

          <div className="border p-4 rounded text-center">
            जीवनचर्या
          </div>

          <div className="border p-4 rounded text-center">
            प्राणावस्था
          </div>

          <div className="border p-4 rounded text-center">
            पदार्थावस्था
          </div>

        </div>

      </div>

    </div>
  )
}