interface Time {
  time: string;
}

export default function Clock({ time }: Time) {
  return (
    <>
      <h1>{time}</h1>
      <input />
    </>
  );
}
