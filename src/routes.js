import {
  addBookHandler,
  editBookByIdHandler,
  getAllBooksHandler,
  getBooksByIdHandler,
  deleteBookByIdHandler,
} from "./handler.js";

const routes = [
  {
    path: "/books",
    method: "POST",
    handler: addBookHandler,
  },
  {
    path: "/books",
    method: "GET",
    handler: getAllBooksHandler,
  },
  {
    path: "/books/{id}",
    method: "GET",
    handler: getBooksByIdHandler,
  },
  {
    path: "/books/{id}",
    method: "PUT",
    handler: editBookByIdHandler,
  },
  {
    path: "/books/{id}",
    method: "DELETE",
    handler: deleteBookByIdHandler,
  },
];

export default routes;
