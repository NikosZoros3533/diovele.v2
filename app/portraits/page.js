import TrueFocus from "@/components/ReactBits/TrueFocus/TrueFocus";

export default function Portraits() {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
      <TrueFocus
        className="mt-8"
        sentence="Dionisis Velentakis"
        manualMode={true}
        blurAmount={5}
        borderColor={"purple"}
        animationDuration={1}
        pauseBetweenAnimations={1}
      />
    </div>
  );
}
