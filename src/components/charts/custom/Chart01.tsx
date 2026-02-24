"use client"

export default function Chart01() {
  return (
    <div className="relative w-362 mx-auto p-10 font-sans">
      
      {/* Top Section */}
      <div className="flex gap-22.5 items-center justify-center mb-42">
        
        <div className="card-green w-90 text-center">
          ज्ञान स्वयं क्रिया न करते हुए अथवा क्रिया न होते हुए मानव जीवन में अनुभव स्थिति में आनन्द सहज वैभव प्रमाण है
        </div>

        <div className="card-peach w-87.5 text-center">
          <p className="text-primary text-2xl">ज्ञान</p>
          <p>(ज्ञान अथवा शून्य से रिक्त और मुक्त इकाई नहीं है)</p>
        </div>

        <div className="card-green w-90 text-center">
          अनुभव पूर्वक अभिव्यक्ति ही ज्ञान है। ज्ञान ही जागृत मानव में सकारात्मक क्रियाओं का आधार अथवा प्रेरणा स्रोत है
        </div>
      </div>

      {/* Line */}
      <div className="relative h-8 w-full mb-10">
        <div className="absolute top-1/2 w-full h-1 bg-yellow-400" />
      </div>

      {/* 8 Cards */}
      <div className="flex gap-6 mb-21.5">
        {[
          ["अनुभव काल में", "आनंद"],
          ["सर्वत्र एक सा अनुभव में आने के कारण", "ईश्वर"],
          ["ज्ञान में समस्त क्रियायें नियंत्रित", "लोकेश"],
          ["सर्वत्र एक सा विद्यमान", "व्यापक"],
          ["चैतन्य के साथ", "चेतना"],
          ["आत्मा से सूक्ष्मतम", "परमात्मा"],
          ["सक्रिय रहने के कारण", "निरपेक्ष ऊर्जा"],
          ["अपरिणामि ता के कारण", "पूर्ण"],
        ].map((item, i) => (
          <div key={i} className="card-peach w-40 h-57.5 text-center flex flex-col justify-center">
            <p>{item[0]}</p>
            <p className="text-primary font-bold mt-2">{item[1]}</p>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="flex gap-19.5 justify-center mb-14">
        
        <div className="card-purple w-75 text-center">
          सत्ता में डूबा, भीगा, घिरा हुआ जड़-चैतन्य प्रकृति है...
        </div>

        <div className="card-green w-150 text-center">
          <p><span className="text-primary">(ज्ञान)</span> व्यापक सत्ता...</p>
          <p>विचार काल में <span className="text-primary">समाधान</span></p>
          <p>अनुभव काल में <span className="text-primary">आनंद</span></p>
        </div>

        <div className="card-purple w-75 text-center">
          <p className="text-primary font-bold">नित्य</p>
          <p>सदा-सदा एक सा विद्यमान</p>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="card-peach text-center mb-10">
        ज्ञान ही शून्य और शून्य ही ज्ञान है...
      </div>

      <div className="card-purple text-center">
        अस्तित्व मूलक मानव केंद्रित चिंतन...
      </div>
    </div>
  )
}