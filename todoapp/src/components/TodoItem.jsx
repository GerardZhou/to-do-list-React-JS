import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    // console.log(item, " deleted");
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(itemName) {
    // console.log(itemName, " Item clicked");
    const newArray = todos.map((todo) =>
      todo.name === itemName ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
    console.log(todos);
  }
  const completedClass = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      {" "}
      <div className={styles.itemName}>
        <span className={completedClass} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line}></hr>
    </div>
  );
}
