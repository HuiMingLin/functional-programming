// pointed functor 是实现了 of 方法的 functor。
// monad 是可以变扁（flatten）的 pointed functor。

// 一个 functor，只要它定义个了一个 join 方法和一个 of 方法，
// 并遵守一些定律，那么它就是一个 monad

// 这里的关键是把任意值丢到容器里然后开始到处使用 map 的能力。

IO.of("tetris").map(concat(" master"));
// IO("tetris master")

Maybe.of(1336).map(add(1));
// Maybe(1337)

Task.of([{id: 2}, {id: 3}]).map(_.prop('id'));
// Task([2,3])

Either.of("The past, present and future walk into a bar...").map(
  concat("it was tense.")
);
// Right("The past, present and future walk into a bar...it was tense.")