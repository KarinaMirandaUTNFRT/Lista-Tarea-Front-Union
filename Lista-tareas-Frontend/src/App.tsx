import Inicio from "./components/pages/Inicio";
import Administrador from "./components/pages/Administrador";
import FormularioTarea from "./components/pages/Formulariotarea";
import Login from "./components/pages/Login";
import DetalleTarea from "./components/pages/DetalleTarea";
import Footer from "./components/shared/footer";
import Menu from "./components/shared/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectorRutas from "./components/routes/ProtectorRutas";
import { useEffect, useState } from "react";
import { AppContext } from "./context/AppContext";
import type { Tarea, tareaFormData } from "./interfaces/tareas";
import Error404 from "./components/pages/Error404";

function App() {
  const usuarioSessionStorage = JSON.parse(
    sessionStorage.getItem("usuarioKey") || "false",
  );
  const [usuarioLogueado, setUsuarioLogueado] = useState<boolean>(
    usuarioSessionStorage,
  );
   
  useEffect(() => {
    sessionStorage.setItem("usuarioKey", JSON.stringify(usuarioLogueado));
  }, [usuarioLogueado]);

  return (
    <AppContext.Provider
      value={{
        usuarioLogueado,
        setUsuarioLogueado,
        tareas,
        
      }}
    >
      <BrowserRouter>
        <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
          <Menu />
          <main className="container grow mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Inicio></Inicio>} />
              <Route path="/login" element={<Login></Login>} />
              <Route path="/tarea/:id" element={<DetalleTarea />} />
              <Route path="/administrador" element={<ProtectorRutas />}>
                <Route index element={<Administrador />} />
                <Route
                  path="crear"
                  element={
                    <FormularioTarea titulo={"Crear Tarea"}></FormularioTarea>
                  }
                />
                <Route
                  path="editar/:id"
                  element={
                    <FormularioTarea titulo={"Editar Tarea"}></FormularioTarea>
                  }
                />
              </Route>
              <Route path="*" element={<Error404></Error404>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
