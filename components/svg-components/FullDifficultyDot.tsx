interface FullDifficultyDotProps {
  colour: string;
  size?: 'medium' | 'large';
}

export default function FullDifficultyDot({ colour, size = 'medium' }: FullDifficultyDotProps) {
  const width = size === 'large' ? 32 : 16;
  const height = size === 'large' ? 32 : 16;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 16 16"
    >
      <circle cx="8" cy="8" r="7.5" fill={colour}></circle>
    </svg>
  );
}
