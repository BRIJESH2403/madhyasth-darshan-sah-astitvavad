import ResourceCard from "@/components/ui/ResourceCard";

const resources = [
  {
    title: "शिक्षा-संस्कार व्यवस्था",
    description:
      "व्यक्ति और समाज में चेतना विकास मूल्य शिक्षा का विकास तथा पीढ़ी-दर-पीढ़ी ज्ञान सुलफ़ता परंपरा और मानवीय संस्कृति का संवहन एवं संवर्धन।",
    mediaSrc:
      "/ResourcesSectionimg/All videos/अध्ययन एवं संसाधन मुख्य बिंदु/चार्ट संग्रह.mp4",
    mediaType: "video" as const,
    href: "/ChartsHome",
  },
  {
    title: "न्याय-सुरक्षा व्यवस्था",
    description:
      "न्यायपूर्ण व्यवहार, समानता, स्वत्व, स्वतंत्रता और अधिकार, सर्व सुख व सुरक्षा तथा सामाजिकता और परस्पर विश्वास की स्थापना।",
    mediaSrc:
      "/ResourcesSectionimg/All videos/अध्ययन एवं संसाधन मुख्य बिंदु/पुस्तकें एवं साहित्य.mp4",
    mediaType: "video" as const,
    href: "/videos",
  },
    {
    title: "उत्पादन-कार्य व्यवस्था",
    description:
      "आवशकता पूर्ति के लिए जीवनोपयोगी वस्तुओं का उत्पादन और सेवाओं का सृजन, श्रम नियोजन और अभ्यास और सभी को कार्य, संतुलन के साथ नियम पूर्ण उत्पादन की व्यवस्था।",
    mediaSrc:
      "/ResourcesSectionimg/All videos/अध्ययन एवं संसाधन मुख्य बिंदु/वीडियो लाइब्रेरी.mp4",
    mediaType: "video" as const,
    href: "/videos",
  },
    {
    title: "विनिमय-कोष व्यवस्था",
    description:
      "संसाधनों, वस्तुओं और सेवाओं का न्यायपूर्ण आदान-प्रदान, शोषणमुक्त विनिमय तथा वस्तु सुलभता से आर्थिक संतुलन की स्थापना।",
    mediaSrc:
      "/ResourcesSectionimg/All videos/अध्ययन एवं संसाधन मुख्य बिंदु/audio.mp4",
    mediaType: "video" as const,
    href: "/videos",
  },
    {
    title: "स्वास्थ्य-संयम व्यवस्था",
    description:
      "शारीरिक और मानसिक स्वास्थ्य चेतना का विकास जन स्वास्थ्य रक्षा तथा संयमित और संतुलित आहार-विहार और जीवन शैली का पालन।",
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
        <h2 className="text-center mb-12">दस सोपानीय व्यवस्था और समाज व्यवस्था आयाम</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {resources.map((item) => (
            <ResourceCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
