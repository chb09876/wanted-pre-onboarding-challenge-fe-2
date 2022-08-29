/**
 * Type of tag list.
 * @typedef Tags
 * @type {Array<string>}
 */

/**
 * Type of Todo.
 * @typedef Todo
 * @type {Object}
 * @property {string} id - Identifier of Todo.
 * @property {string} content - Content of Todo.
 * @property {boolean} isDone - Completion of Todo.
 * @property {string} category - Category of Todo.
 * @property {Tags} [tags] - Tags of Todo.
 */

/**
 * Type of todo list.
 * @typedef TodoList
 * @type {Array<Todo>}
 */

/**
 * Create new todo to list.
 * @function createTodo
 * @param {TodoList} todos - List that will append new todo.
 * @param {string} content - Content of new todo.
 */
function createTodo(todos, content) {}

createTodo("hello", 1);

/**
 * Read all Todos.
 * @function readTodoList
 * @param {TodoList} todos - List that will read.
 */
function readTodoList(todos) {}

/**
 * Read specified todo.
 * @function readTodoList
 * @param {TodoList} todos - List that will read.
 * @param {string} id - Id of dest.
 */
function readTodoById(todos, id) {}

/**
 * Update todo's properties.
 * @function updateTodo
 * @param {TodoList} todos - List that will read.
 * @param {string} id - Id of dest.
 * @param {object} newProperties - New properties.
 * @see {@link Todo} see also todo's properties.
 */
function updateTodo(todos, id, newProperties) {}

/**
 * Update todo's specified tag.
 * @function updateTodoTag
 * @param {TodoList} todos - List that will read.
 * @param {string} id - Id of dest.
 * @param {string} oldTag - Dest tag that will change.
 * @param {string} newTag - New Tag.
 */
function updateTodoTag(todos, id, oldTag, newTag) {}

/**
 * Delete todo that identified with id.
 * @function deleteTodo
 * @param {TodoList} todos - List of Todos.
 * @param {string} id - Id of dest.
 */
function deleteTodo(todos, id) {}

/**
 * Delete All todos.
 * @function deleteAllTodos
 * @param {TodoList} todos - List of Todos.
 * @param {string} id - Id of dest.
 */
function deleteAllTodos(todos) {}

/**
 * Delete a tag from dest todo.
 * @function readTodoList
 * @param {TodoList} todos - List that will read.
 * @param {string} id - Id of dest.
 * @param {string} destTag - Dest tag of delete.
 */
function deleteTodoTag(todos, id, destTag) {}

/**
 * Delete All tags of dest Todo.
 * @function readTodoList
 * @param {TodoList} todos - List that will read.
 * @param {string} id - Id of dest.
 */
function deleteTodoAllTags(todos, id) {}
