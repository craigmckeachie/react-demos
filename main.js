function Counter({ initialCount }) {
  const [count, setCount] = React.useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
    </>
  );
}

ReactDOM.render(<Counter initialCount={0} />, document.getElementById('root'));
