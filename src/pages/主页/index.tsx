import TodoTree from "@/components/任务树";
import 新建ToDo from "./components/新建ToDo";

function Home() {
  return (
    <div>
      <新建ToDo />
      <TodoTree />
    </div>
  );
}

export default Home;
