import React from "react";

export default function IitResult2023() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #000000, #1c1c1c, #333333)",
        padding: "50px 10px",
        color: "#ffffff",
        fontFamily: "Noto Sans Devanagari, sans-serif", // Apply the new font
        lineHeight: "1.8",
        overflowX: "hidden",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          textAlign: "center",
          padding: "40px 20px",
          background: "linear-gradient(to bottom, #0b0b0b, #222222)",
          borderRadius: "20px",
          margin: "20px auto 40px",
          maxWidth: "1000px",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.8)",
          animation: "fadeIn 1s ease-in-out",
        }}
      >
        <h1
          style={{
            fontFamily: "Noto Sans Devanagari, sans-serif", // Use the Hindi font here
            fontSize: "4rem",
            fontWeight: "800",
            color: "#ffffff",
            textShadow: "2px 2px 10px rgba(255, 255, 255, 0.2)",
            animation: "zoomIn 1.2s ease",
          }}
        >
          आईआईटी रिजल्ट 2023
        </h1>
        <p
          style={{
            fontSize: "1.4rem",
            maxWidth: "800px",
            margin: "20px auto",
            color: "#cccccc",
            opacity: 0,
            animation: "fadeInUp 1.5s ease forwards",
            animationDelay: "0.5s",
          }}
        >
          हमारे संस्थान का एक नया प्रयास, जहां गुणवत्ता और विश्वास का मेल है।
        </p>
        <button
          style={{
            padding: "12px 30px",
            fontSize: "1.3rem",
            fontWeight: "700",
            color: "#ffffff",
            background: "linear-gradient(45deg, #444444, #777777)",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            marginTop: "20px",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.5)",
            transition: "transform 0.3s, background 0.3s, box-shadow 0.3s",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.1)";
            e.target.style.background = "#555555";
            e.target.style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.8)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.background = "linear-gradient(45deg, #444444, #777777)";
            e.target.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.5)";
          }}
        >
          हमारे बारे में और जानें
        </button>
      </div>

      {/* Content Section */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <p
          style={{
            fontSize: "1.5rem",
            color: "#e0e0e0",
            maxWidth: "900px",
            margin: "0 auto",
            background: "rgba(30, 30, 30, 0.9)",
            padding: "25px",
            borderRadius: "20px",
            boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.8)",
            animation: "fadeInLeft 1.5s ease",
          }}
        >
प्यारे बच्चों और आदरणीय अभिभावकों <br/><br/>

          भौतिकी प्लस का आईआईटी डिविजन एक नया प्रयास है, जिसमें ऐसे सभी टीचर्स को लाया गया है, जिन्होंने अपने करियर में आईआईटी जेईई एडवांस्ड में 200 के अंदर कई ऑल इंडिया रैंक दी हैं। ये आप उन सब टीचर्स की प्रोफाइल में जाकर देख सकते हैं।<br/>

हम चाहें तो पिछले 11 साल में ग्वालियर में फिजिक्स पढ़ाते हुए हमारे संस्थापक ऋतेश सर द्वारा आईआईटी में लाए गए रिज़ल्ट की फोटो यहां लगा सकते हैं। लेकिन हमारा यह मानना है कि ऐसे रिजल्ट यहां लगा देने से, हो सकता है कुछ लोग खुश होकर अपने बच्चों का प्रवेश हमारे संस्थान में करा दें। लेकिन यह एक प्रकार का धोखा ही होगा।<br/>

हम अपनी लाई गई नई टीम द्वारा रिजल्ट लाने की प्रतीक्षा करेंगे और जब इसी टीम द्वारा पूरे तरीके से प्रामाणिक रिजल्ट आईआईटी जेईई एडवांस में हम लाएंगे, तभी हम यहां उस रिजल्ट को दिखाएंगे।<br/>

तब तक माता पिता को यही कह सकते हैं कि पिछ्ले साल हमने नीट में ऐसा रिज़ल्ट लाकर दिखाया था। इस वर्ष आईआईटी जेईई एडवांस्ड और नीट दोनों में रिज़ल्ट लाकर दिखाएंगे।<br/>
        </p>
      </div>

      {/* Highlights Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          marginTop: "50px",
        }}
      >
        {["पारदर्शिता", "विश्वास", "गुणवत्ता"].map((title, index) => (
          <div
            key={index}
            style={{
              background: "linear-gradient(145deg, #111111, #222222)",
              padding: "30px",
              borderRadius: "15px",
              width: "320px",
              textAlign: "center",
              color: "#ffffff",
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.8)",
              animation: `fadeInUp ${1 + index * 0.5}s ease`,
              transition: "transform 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                color: "#f39c12",
              }}
            >
              {title}
            </h2>
            <p style={{ fontSize: "1rem", color: "#dcdcdc" }}>
              हम आपके लिए उत्कृष्टता लाने के लिए प्रतिबद्ध हैं।
            </p>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div
        style={{
          marginTop: "60px",
          padding: "30px",
          background: "linear-gradient(to bottom, #0b0b0b, #1c1c1c)",
          borderRadius: "20px",
          color: "#ffffff",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.8)",
          animation: "fadeIn 1s ease",
        }}
      >
        <h3
          style={{
            fontSize: "2rem",
            fontFamily: "Noto Sans Devanagari, sans-serif", // Use the Hindi font here
            marginBottom: "15px",
            textAlign: "center", // This centers the text
          }}
        >
          #सत्यमेव जयते
        </h3>

        <p style={{ fontSize: "1.3rem", textAlign: "center" }}>
          हम आपका भरोसा जीतने के लिए तत्पर हैं। सही निर्णय के लिए धन्यवाद!
        </p>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes zoomIn {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
          }

          /* Responsive Styles */
          @media (max-width: 768px) {
            h1 {
              font-size: 3rem;
            }

            p {
              font-size: 1.2rem;
            }

            button {
              font-size: 1.1rem;
              padding: 10px 25px;
            }

            .highlight-card {
              width: 100%;
              margin-bottom: 20px;
            }

            .footer h3 {
              font-size: 1.8rem;
            }
          }

          @media (max-width: 480px) {
            h1 {
              font-size: 2.5rem;
            }

            .highlight-card {
              width: 100%;
            }

            .footer p {
              font-size: 1.1rem;
            }
          }
        `}
      </style>
    </div>
  );
}
