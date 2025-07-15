import CircularText from "@/components/ReactBits/CircularText/CircularText";

export default function Portraits() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularText
        text="AWARD*WINNING*PHOTOGRAPHY*"
        onHover="slowDown"
        spinDuration={22}
        className="custom-class"
      />
    </div>
  );
}
