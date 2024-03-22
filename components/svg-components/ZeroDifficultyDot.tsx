interface ZeroDifficultyDotProps {
  colour: string;
  size?: 'medium' | 'large';
}

export default function ZeroDifficultyDot({ colour, size = 'medium' }: ZeroDifficultyDotProps) {
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
        d="M8 15.5a7.304 7.304 0 01-2.925-.59 7.575 7.575 0 01-2.381-1.604 7.574 7.574 0 01-1.603-2.381A7.303 7.303 0 01.5 8c0-1.037.197-2.013.59-2.925a7.574 7.574 0 011.604-2.381A7.574 7.574 0 015.075 1.09 7.303 7.303 0 018 .5c1.037 0 2.012.197 2.925.59a7.574 7.574 0 012.381 1.604 7.575 7.575 0 011.603 2.381c.394.912.591 1.888.591 2.925a7.304 7.304 0 01-.59 2.925 7.575 7.575 0 01-1.604 2.381 7.575 7.575 0 01-2.381 1.603A7.304 7.304 0 018 15.5zM8 14c1.675 0 3.094-.581 4.256-1.744C13.42 11.094 14 9.675 14 8c0-1.675-.581-3.094-1.744-4.256C11.094 2.58 9.675 2 8 2c-1.675 0-3.094.581-4.256 1.744C2.58 4.906 2 6.325 2 8c0 1.675.581 3.094 1.744 4.256C4.906 13.42 6.325 14 8 14z"
      ></path>
    </svg>
  );
}
