import { Button } from "antd";

const ResumeSection = () => {
  return (
    <div className="container mx-auto my-12 px-4 md:px-4 flex flex-col md:flex-row justify-center items-center gap-10">
      {/* Text Area */}
      <div style={{ flex: 1, width: "100%", maxWidth: "650px" }}>
        <p
          style={{
            color: "#2FB236",
            fontSize: "14px",
            textTransform: "uppercase",
          }}
        >
          WATCH OUR VIDEO
        </p>
        <h2
          className="text-4xl md:text-5xl "
          style={{ fontWeight: 500, lineHeight: "1.2" }}
        >
          Get Better Solution For Your Resume!
        </h2>
        <p style={{ color: "#ABABAB", fontSize: "14px", marginTop: "10px" }}>
          Stand out from the herd of job applicants with our
          professionally-designed resume templates. Get noticed, get hired
        </p>
        <Button
          type="primary"
          style={{
            background: "#124374",
            borderColor: "#124374",
            marginTop: "50px",
            height: 48,
            fontWeight: 600
          }}
        >
          ORDER A RESUME NOW
        </Button>
      </div>

      {/* Video Area */}
      <div style={{ flex: 1 }}>
        <video
          style={{ width: "100%", borderRadius: "8px" }}
          controls
          autoPlay
          muted
        >
          <source src="/video/resumeVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default ResumeSection;
