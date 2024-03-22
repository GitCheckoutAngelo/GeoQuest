interface HalfDifficultyDotProps {
  colour: string;
  size?: 'medium' | 'large';
}

export default function HalfDifficultyDot({ colour, size = 'medium' }: HalfDifficultyDotProps) {
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
      <path
        fill={colour}
        d="M8 15.5a7.304 7.304 0 01-2.925-.59 7.575 7.575 0 01-2.381-1.604 7.574 7.574 0 01-1.603-2.381A7.303 7.303 0 01.5 8c0-1.037.197-2.013.59-2.925a7.574 7.574 0 011.604-2.381A7.574 7.574 0 015.075 1.09 7.303 7.303 0 018 .5c1.037 0 2.012.197 2.925.59a7.574 7.574 0 012.381 1.604 7.575 7.575 0 011.603 2.381c.394.912.591 1.888.591 2.925a7.304 7.304 0 01-.59 2.925 7.575 7.575 0 01-1.604 2.381 7.575 7.575 0 01-2.381 1.603A7.304 7.304 0 018 15.5zm.75-1.556c1.488-.188 2.734-.84 3.74-1.96C13.498 10.866 14 9.537 14 8s-.503-2.866-1.51-3.984c-1.006-1.12-2.252-1.772-3.74-1.96v11.888z"
      ></path>
    </svg>
  );
}
