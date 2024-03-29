export function SpinningText({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <svg
      className=""
      id="rotatingText"
      viewBox="0 0 200 200"
      width="200"
      height="200"
      onClick={onClick}
    >
      <defs>
        <path
          id="circle"
          d="M 100, 100
            m -75, 0
            a 75, 75 0 1, 0 150, 0
            a 75, 75 0 1, 0 -150, 0
            "
        ></path>
      </defs>
      <text className="text" width="400">
        <textPath href="#circle" className="" alignmentBaseline="central">
          {text}
        </textPath>
      </text>
    </svg>
  );
}
