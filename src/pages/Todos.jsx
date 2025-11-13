import { Form, Table, Badge, Button, Modal } from "react-bootstrap";
import { use, useEffect, useRef, useState } from "react";
import { fetchTodos } from "../data/todos";

const Todos = () => {
  const newIdRef = useRef();
  const newTitleRef = useRef();
  const [todosRaw, setTodosRaw] = useState([]);
  const [todos, setTodos] = useState([]);
  const [onlyWaiting, setOnlyWaiting] = useState(false);
  const [itemsPerPage, setItemPerPage] = useState(5);
  const [numPages, setNumPages] = useState(3);
  const [curPage, setCurPage] = useState(1);

  useEffect(() => {
    setTodosRaw(fetchTodos());
  }, []);

  useEffect(() => {
    if (onlyWaiting) setTodos(todosRaw.filter((todos) => !todos.completed));
    else setTodos(todosRaw);
  }, [todosRaw, onlyWaiting]);

  useEffect(() => {
    setNumPages(Math.ceil(todos.length / itemsPerPage));
  }, [itemsPerPage, curPage, todos]);

  useEffect(() => {
    if (numPages <= 0) setCurPage(0);
    else if (curPage > numPages) setCurPage(numPages);
    else if (curPage <= 0) setCurPage(1);
  }, [numPages]);

  const waitingClicked = (id) => {
    console.log(id);
    setTodosRaw((prevTodosRaw) => {
      return prevTodosRaw.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    });
  };

  const deleteClicked = (id) => {
    setTodosRaw(todosRaw.filter((todo) => todo.id !== id));
  };

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const saveClicked = (id, title) => {
    console.log(id, title);
    if (title.trim() !== "") {
      setTodosRaw([
        ...todosRaw,
        {
          userId: 1,
          id,
          title,
          completed: false,
        },
      ]);
    }
    newIdRef.current.value = "";
    newTitleRef.current.value = "";
    handleClose();
  };

  return (
    <>
      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ID:</Form.Label>
              <Form.Control
                value={
                  todosRaw.reduce(
                    (maxId, todo) => Math.max(maxId, todo.id),
                    0
                  ) + 1
                }
                disabled={true}
                ref={newIdRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title:</Form.Label>
              <Form.Control
                placeholder="New todo, here!!!"
                autoFocus
                ref={newTitleRef}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              saveClicked(
                Number(newIdRef.current.value),
                newTitleRef.current.value
              )
            }
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <Form>
        <div className="d-flex justify-content-between align-items-center">
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Show only waiting"
            onChange={(e) => setOnlyWaiting(e.target.checked)}
          />
          <Form.Select
            aria-label="Default select example"
            className="w-25"
            onChange={(e) => {
              setItemPerPage(Number(e.target.value));
              setCurPage(1);
            }}
          >
            <option value={5}>5 items per page</option>
            <option value={10}>10 items per page</option>
            <option value={50}>50 items per page</option>
            <option value={100}>100 items per page</option>
          </Form.Select>
        </div>
      </Form>

      {/* Table// */}
      <div>
        <Table striped bordered hover size="sm">
          <thead className="table-dark">
            <tr>
              <th className="text-center" style={{ width: "3rem" }}>
                ID
              </th>
              <th className="text-center">Title</th>
              <th className="text-end" style={{ width: "12rem" }}>
                Completed
                <Button onClick={() => handleShow()}>+</Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {todos
              .filter((todo, index) => {
                return (
                  index >= (curPage - 1) * itemsPerPage &&
                  index <= curPage * itemsPerPage - 1
                );
              })
              .map((todo) => {
                return (
                  <tr key={todo.id}>
                    <td className="text-center">
                      <h5>
                        {" "}
                        <Badge bg="secondary">{todo.id}</Badge>
                      </h5>
                    </td>
                    <td>{todo.title}</td>
                    <td className="text-end">
                      {todo.completed ? (
                        <Badge bg="success" className="fs-6">
                          done
                        </Badge>
                      ) : (
                        <Button
                          variant="warning"
                          onClick={() => waitingClicked(todo.id)}
                        >
                          Waiting&nbsp;<i className="bi bi-clock"></i>
                        </Button>
                      )}
                      &nbsp;
                      <Button
                        variant="danger"
                        onClick={() => deleteClicked(todo.id)}
                      >
                        <i className="bi bi-trash"></i>
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
      {/* page control */}
      <div className="text-center">
        <Button
          variant="outline-primary"
          onClick={() => setCurPage(1)}
          disabled={curPage === 1}
        >
          First
        </Button>
        &nbsp;
        <Button
          variant="outline-primary"
          onClick={() => curPage > 1 && setCurPage((p) => p - 1)}
          disabled={curPage === 1}
        >
          Previous
        </Button>{" "}
        &nbsp;
        <span>
          {curPage}&nbsp;/&nbsp;{numPages}
        </span>
        &nbsp;
        <Button
          variant="outline-primary"
          onClick={() => curPage < numPages && setCurPage((p) => p + 1)}
          disabled={curPage === numPages}
        >
          Next
        </Button>
        &nbsp;
        <Button
          variant="outline-primary"
          onClick={() => setCurPage(numPages)}
          disabled={curPage === numPages}
        >
          Last
        </Button>
        &nbsp;
      </div>
    </>
  );
};

export default Todos;
