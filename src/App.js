import Signup from "./components/Signup";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <div className="content">
      <AuthProvider>
        <main>
          <Signup />
        </main>
      </AuthProvider>

    </div>
  );
}

export default App;
