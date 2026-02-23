"use client";

import { Collapse } from "antd";
import type { CollapseProps } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: <h3>व्यक्ति स्तर</h3>,
    children: (
      <ul className="body-md space-y-2">
        <li>
          अध्ययन: आत्म-अनुशासन, स्वास्थ्य, मूल्य-आधारित जीवन शैली का अध्ययन।
        </li>
        <li>
          कार्यक्रम: शिक्षा, स्वास्थ्य, न्याय, कौशल-विकास, व्यक्तिगत लक्ष्य,
          आत्मनिर्भरता, नैतिक जीवन।
        </li>
      </ul>
    ),
  },
  {
    key: "2",
    label: <h3>परिवार स्तर</h3>,
    children: (
      <ul className="body-md space-y-2">
        <li>
          अध्ययन: आत्म-अनुशासन, स्वास्थ्य, मूल्य-आधारित जीवन शैली का अध्ययन।
        </li>
        <li>
          कार्यक्रम: शिक्षा, स्वास्थ्य, न्याय, कौशल-विकास, व्यक्तिगत लक्ष्य,
          आत्मनिर्भरता, नैतिक जीवन।
        </li>
      </ul>
    ),
  },
  {
    key: "3",
    label: <h3>समाज स्तर</h3>,
    children: (
      <ul className="body-md space-y-2">
        <li>
          अध्ययन: आत्म-अनुशासन, स्वास्थ्य, मूल्य-आधारित जीवन शैली का अध्ययन।
        </li>
        <li>
          कार्यक्रम: शिक्षा, स्वास्थ्य, न्याय, कौशल-विकास, व्यक्तिगत लक्ष्य,
          आत्मनिर्भरता, नैतिक जीवन।
        </li>
      </ul>
    ),
  },
  {
    key: "4",
    label: <h3>राष्ट्र स्तर</h3>,
    children: (
      <ul className="body-md space-y-2">
        <li>
          अध्ययन: आत्म-अनुशासन, स्वास्थ्य, मूल्य-आधारित जीवन शैली का अध्ययन।
        </li>
        <li>
          कार्यक्रम: शिक्षा, स्वास्थ्य, न्याय, कौशल-विकास, व्यक्तिगत लक्ष्य,
          आत्मनिर्भरता, नैतिक जीवन।
        </li>
      </ul>
    ),
  },
  {
    key: "5",
    label: <h3>अंतरराष्ट्रीय स्तर</h3>,
    children: (
      <ul className="body-md space-y-2">
        <li>
          अध्ययन: आत्म-अनुशासन, स्वास्थ्य, मूल्य-आधारित जीवन शैली का अध्ययन।
        </li>
        <li>
          कार्यक्रम: शिक्षा, स्वास्थ्य, न्याय, कौशल-विकास, व्यक्तिगत लक्ष्य,
          आत्मनिर्भरता, नैतिक जीवन।
        </li>
      </ul>
    ),
  },
];

export default function FaqSection() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateMode = () => {
      setIsDark(document.body.classList.contains("dark-mode"));
    };

    updateMode();

    const observer = new MutationObserver(updateMode);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="light-bg-2 dark-bg-2 py-20">
      <div className="container">
        <h2 className="text-center mb-16">अध्ययन एवं संसाधन मुख्य बिंदु</h2>

        <Collapse
          accordion
          items={items}
          expandIconPlacement="end"
          className="faq-collapse "
          expandIcon={({ isActive }) => (
            <Image
              src={
                isDark
                  ? isActive
                    ? "/FAQsectionimg/Darkminus.png"
                    : "/FAQsectionimg/DarkPlus.png"
                  : isActive
                    ? "/FAQsectionimg/minus.png"
                    : "/FAQsectionimg/Plus.png"
              }
              alt="toggle icon"
              width={30}
              height={30}
            />
          )}
        />
      </div>
    </section>
  );
}
