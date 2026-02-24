import ResourceCard from "@/components/ui/ResourceCard";

const resources = [
  {
    title: "चार्ट संग्रह",
    description:
      "वेद-साहित्य और व्याख्याओं के प्रमुख सिद्धांत समझाने वाले चित्र",
    mediaSrc:
      "/ResourcesSectionimg/All videos/अध्ययन एवं संसाधन मुख्य बिंदु/चार्ट संग्रह.mp4",
    mediaType: "video" as const,
    href: "/charts",
  },
  {
    title: "पुस्तकें एवं साहित्यरी",
    description:
      "मूल वांगमय, अनुवादित पुस्तकें और अप्रकाशित सामग्री",
    mediaSrc:
      "/ResourcesSectionimg/All videos/अध्ययन एवं संसाधन मुख्य बिंदु/पुस्तकें एवं साहित्य.mp4",
    mediaType: "video" as const,
    href: "/videos",
  },
    {
    title: "वीडियो लाइब्रेरी",
    description:
      "श्री ए. नागराज वीडियो रिकॉर्डिंग, व्याख्यान, सम्मेलन, सेमिनार और कार्यशालाएँ",
    mediaSrc:
      "/ResourcesSectionimg/All videos/अध्ययन एवं संसाधन मुख्य बिंदु/वीडियो लाइब्रेरी.mp4",
    mediaType: "video" as const,
    href: "/videos",
  },
    {
    title: "ऑडियो संवाद",
    description:
      "मार्गदर्शित वार्ता, चर्चाएँ और इंटरैक्टिव सत्र",
    mediaSrc:
      "/ResourcesSectionimg/All videos/अध्ययन एवं संसाधन मुख्य बिंदु/audio.mp4",
    mediaType: "video" as const,
    href: "/videos",
  },
    {
    title: "शोध प्रकाशन",
    description:
      "अध्येताओं के मध्यस्थ दर्शन सह–अस्तित्ववाद प्रकाशित शोध",
    mediaSrc:
      "/ResourcesSectionimg/All videos/अध्ययन एवं संसाधन मुख्य बिंदु/sodh prakashak.mp4",
    mediaType: "video" as const,
    href: "/videos",
  },
];

export default function ResourcesSection() {
  return (
    <section className="bg-(--color-bg-1) py-16">
      <div className="container">
        <h2 className="text-center mb-12">अध्ययन एवं संसाधन मुख्य बिंदु</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {resources.map((item) => (
            <ResourceCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}