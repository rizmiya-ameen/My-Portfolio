import { ImageResponse } from "next/server";

// link-preview card for LinkedIn, Slack, X etc. (also used as the Twitter image)
export const runtime = "edge";
export const alt = "Fathima Rizmiya, AI & Machine Learning Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(90deg, #818cf8 0%, #22d3ee 100%)",
          color: "#0f172a",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 26,
            fontWeight: 500,
            opacity: 0.8,
          }}
        >
          rizmiya.com
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 84,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          Fathima Rizmiya
        </div>
        <div style={{ marginTop: 18, fontSize: 44, fontWeight: 600 }}>
          AI &amp; Machine Learning Engineer
        </div>
        <div style={{ marginTop: 36, fontSize: 28, opacity: 0.8 }}>
          Machine learning · Deep learning · Explainable AI · Melbourne
        </div>
      </div>
    ),
    size
  );
}
