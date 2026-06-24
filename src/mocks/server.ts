import { createServer, Model } from "miragejs";

createServer({
  models: {
    todos: Model,
  },
  routes() {
    this.namespace = "api";

    this.get("/todos", () => {
      return [
        { id: "1", label: "Todo 1", complete: true },
        { id: "2", label: "Todo 2", complete: false },
      ];
    });
  },
});
