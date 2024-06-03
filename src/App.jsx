import "../src/sass/main.scss";
import Breadcrumb from "./components/molecules/Breadcrumb";
import Checkpoint from "./components/molecules/Checkpoint/Checkpoint";
import Counter from "./components/molecules/Counter";
import DraggableField from "./components/molecules/DraggableField";
import DropdownMenu from "./components/molecules/DropdownMenu";
import RolePillDesktop from "./components/molecules/RolePillDesktop";
import RolePillMobile from "./components/molecules/RolePillMobile";
import SectionsCompletion from "./components/organisms/SectionsCompletion/SectionsCompletion";
import SectionsCompletion_DarkMode from "./components/organisms/SectionsCompletion/SectionsCompletion_DarkMode.jsx";
import UploadedSubjectsTable from "./components/organisms/UploadedSubjectsTable";

function App() {
  return (
    <div>
      <DraggableField />
    </div>
  );
}

export default App;
