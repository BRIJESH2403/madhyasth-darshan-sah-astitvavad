import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`relative rounded-lg p-6 border ${className}`}
      style={{ borderColor: "var(--border-color)" }}
    >
      {children}
    </div>
  );
};

export default function AstittvaDarshan() {
  return (
    <div className="light-bg-1 dark-bg-1 min-h-screen py-10">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">
            
            {/* Title */}
            <Card>
              <div className="text-center">
                <h2 className="text-red-500 font-medium">अस्तित्व दर्शन</h2>
                <p className="body-lg mt-2">
                  व्यापक वस्तु रूपी सत्ता में सम्पूर्ण एक एक वस्तु सम्पन्न है
                  <br />
                  अस्तित्व = सह अस्तित्व = सत्ता में सम्पूर्ण प्रकृति
                </p>
              </div>
            </Card>

            {/* Blue Card */}
            <Card>
              <p className="text-center body-lg text-red-500">
                व्यापक वस्तु में समस्त क्रियाशील वस्तु
              </p>
            </Card>

            {/* Three Columns */}
            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  title: "भींगा",
                  items: [
                    "ऊर्जा सम्पन्नता",
                    "बल सम्पन्नता",
                    "चुम्बकीय बल",
                    "सम्पन्नता",
                  ],
                },
                {
                  title: "डुबा",
                  items: [
                    "क्रियाशीलता",
                    "आचरण",
                    "व्यवस्था",
                    "समय सहभागिता",
                  ],
                },
                {
                  title: "घिरा",
                  items: [
                    "नियंत्रण",
                    "नियम",
                    "संतुलन",
                    "नियति",
                  ],
                },
              ].map((item, i) => (
                <Card key={i}>
                  <h4 className="text-center text-red-500 font-bold mb-3">
                    {item.title}
                  </h4>
                  <div className="text-center space-y-1 body-md">
                    {item.items.map((t, j) => (
                      <p key={j}>{t}</p>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            <Card>
              <p className="text-center">सम विषम मध्यस्थ</p>
            </Card>

            {/* Swatva + 3 cols */}
            <div className="grid grid-cols-4 gap-4">
              
              <Card>
                <p className="text-center text-red-500 font-bold">स्वत्व</p>
                <p className="text-center body-sm mt-2">
                  स्व = होना <br />
                  त्व = व्यवस्था सूत्र
                </p>
              </Card>

              {["श्रम", "गति", "परिणाम"].map((t, i) => (
                <Card key={i}>
                  <p className="text-center text-red-500 font-medium">{t}</p>
                </Card>
              ))}
            </div>

            <Card>
              <p className="text-center">
                सह अस्तित्व की नित्य वर्तमानता
              </p>
            </Card>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6">

            <Card>
              <p className="text-center body-lg">
                सह अस्तित्व में प्रकृति में विकास
              </p>
            </Card>

            {/* Reusable Rows */}
            {[
              "ज्ञानावस्था (मानव)",
              "जीवावस्था",
              "प्राणावस्था",
              "पदार्थावस्था",
            ].map((title, i) => (
              <div key={i} className="grid grid-cols-3 gap-4">
                <Card>
                  <p className="text-center body-sm">ऊर्जा + क्रिया</p>
                </Card>

                <Card>
                  <p className="text-center text-red-500 font-semibold">
                    {title}
                  </p>
                </Card>

                <Card>
                  <p className="text-center body-sm">पहचानना</p>
                </Card>
              </div>
            ))}

            <Card>
              <p className="text-center">प्रकृति में विकासक्रम</p>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10">
          <Card>
            <p className="text-center body-sm">
              अस्तित्व मूलक मानव केंद्रित चिंतन – ए नागराज
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}