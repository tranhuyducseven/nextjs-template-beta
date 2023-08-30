import styles from "./styles.module.scss";

export const AppScreen: IComponent = () => {
  return (
    <main className="grow w-full flex flex-col justify-center p-8 relative">
      <section>
        <div className="w-full flex items-center justify-center">
          <h1 className="font-bold text-3xl">Hello world!</h1>
        </div>
        <ul className={styles.items}>
          {Array(10)
            .fill("")
            .map((_, idx) => {
              return <li key={idx} />;
            })}
        </ul>
      </section>
    </main>
  );
};
