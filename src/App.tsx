export default function FeedbackForm() {
  function handleClick() {
    const name = prompt('What is your name?');

    if (name === null || name.trim() === '') {
      alert('이름을 입력해주세요');
      return;
    }
    alert(`Hello, ${name}!`);
  }

  return <button onClick={handleClick}>Greet</button>;
}
