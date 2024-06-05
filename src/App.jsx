/* eslint-disable no-unused-vars */
import "../src/sass/main.scss";

import Breadcrumb from "./components/molecules/Breadcrumb";

import Counter from "./components/molecules/Counter";

import Checkpoint, {
  Checkpoint_FillOn,
  Checkpoint_FillOn_DarkMode,
} from "./components/molecules/Checkpoint";

import SectionsCompletion, {
  SectionsCompletion_DarkMode,
} from "./components/organisms/SectionsCompletion.jsx";

import DraggableField from "./components/molecules/DraggableField";

import DropdownMenu from "./components/molecules/DropdownMenu";

import RolePillMobile, {
  RolePillMobile_DarkMode,
} from "./components/molecules/RolePillMobile";

import RolePillDesktop, {
  RolePillDesktop_Hover,
  RolePillDesktop_Hover_DarkMode,
  RolePillDesktop_Active,
  RolePillDesktop_Active_DarkMode,
} from "./components/molecules/RolePillDesktop.jsx";

import UploadedSubjectsTable from "./components/organisms/Tables/UploadedSubjectsTable.jsx";

import ScheduleTable from "./components/organisms/Tables/ScheduleTable.jsx";

function App() {
  return (
    <div>
      <ScheduleTable />
    </div>
  );
}

export default App;
