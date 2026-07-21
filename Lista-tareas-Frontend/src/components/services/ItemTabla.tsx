import { Link } from "react-router-dom";
import type { Tarea } from "../../interfaces/tareas";
import Swal from "sweetalert2";
import { LuTrash2,LuPencil  } from "react-icons/lu";
import { borrarTareaApi } from "../../helpers/queries";

interface ItemTablaProps {
  tarea: Tarea;
  fila: number;
}

const ItemTabla = ({ tarea, fila }: ItemTablaProps) => {
    const eliminarTarea = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No se puede revertir este proceso",
      icon: "warning",
      background: "#18181b", // zinc-900
      color: "#f4f4f5", // zinc-100
      showCancelButton: true,
      confirmButtonColor: "#3b82f6", // blue-500
      cancelButtonColor: "#ef4444", // red-500
      confirmButtonText: "Sí, borrar",
      cancelButtonText: "Cancelar",
    }).then(async(result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarTareaApi(tarea._id);
        if (respuesta && respuesta.status===200){
          Swal.fire({
          title: "Eliminado",
          text: `El tarea fue eliminado correctamente`,
          icon: "success",
          background: "#18181b",
          color: "#f4f4f5",
          confirmButtonColor: "#3b82f6",
        });
        }else{
          Swal.fire({
          title: "ocurrio un error",
          text: `La tarea no se pudo borrar, intentelo en unos minutos`,
          icon: "error",
          background: "#18181b",
          color: "#f4f4f5",
          confirmButtonColor: "#3b82f6",
        });
        }
      }
    });
  };

  return (
    <tr className="border-b border-zinc-800 hover:bg-zinc-900/50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500 font-mono">
        {fila}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-200">
        {tarea.nombreTarea}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-400 font-mono">
        {tarea.fecha? String(tarea.fecha).split("-").reverse().join("/"): "Sin fecha"}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className="flex gap-3">
          <Link
            to={`/administrador/editar/${tarea._id}`}
            className="text-amber-500 hover:text-amber-400 transition-colors flex items-center gap-1"
          >
            <LuPencil /> Editar
          </Link>
          <button
            className="text-red-500 hover:text-red-400 transition-colors flex items-center gap-1"
            onClick={eliminarTarea}
          >
            <LuTrash2 /> Borrar
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ItemTabla;