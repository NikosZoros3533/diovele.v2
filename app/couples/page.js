'use client';
import FuzzyText from './../../components/ReactBits/FuzzyText';
export default function Couples() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <FuzzyText
        fontSize={50}
        fontWeight={700}
        enableHover={true}
        baseIntensity={0.2}
        hoverIntensity={1.5}
      >
        Dionisis 
      </FuzzyText>
      <FuzzyText
        fontSize={50}
        fontWeight={700}
        enableHover={true}
        baseIntensity={0.2}
        hoverIntensity={1.5}
      >
        Velentakis
      </FuzzyText>
    </div>
  );
}
