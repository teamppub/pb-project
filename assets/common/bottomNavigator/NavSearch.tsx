export default function NavSearch({
  width = '28',
  height = '28',
  fill = 'none',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 50 50"
    >
      <path data-name="사각형 9" fill="none" d="M0 0h30v30H0z" />
      <g data-name="그룹 1524">
        <path
          data-name="패스 1486"
          d="M21 4A16 16 0 1 0 21 36A16 16 0 1 0 21 4Z"
          stroke="#000"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          fill={fill}
        />
        <path
          data-name="패스 1487"
          d="M32.229 32.229L45.5 45.5"
          stroke="#000"
          strokeMiterlimit="10"
          strokeWidth="4"
          fill={fill}
        />
      </g>
    </svg>
  );
}
